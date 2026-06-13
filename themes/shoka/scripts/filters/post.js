/* global hexo */

'use strict';

const { escapeHTML, unescapeHTML } = require('hexo-util');

const HTML_TAG_PATTERN = /<[^>]+>/g;
const BREAK_TAG_PATTERN = /<br\s*\/?>/g;
const MERMAID_FENCE_PATTERN = /(?:^|\n)(`{3,}|~{3,})mermaid[^\n]*\n([\s\S]*?)(?:^|\n)\1/g;
const MERMAID_BLOCK_PATTERN = /<pre><code class="(?:language-)?mermaid">([\s\S]*?)<\/code><\/pre>/g;
const MERMAID_HIGHLIGHT_PATTERN = /<figure class="highlight mermaid">[\s\S]*?<\/figure>/g;
const MERMAID_HIGHLIGHT_LINE_PATTERN = /<td><pre>([\s\S]*?)<\/pre><\/td>/g;
const HIGHLIGHT_FIGURE_PATTERN = /<figure class="highlight [^"]+">[\s\S]*?<\/figure>/g;
const HIGHLIGHT_CODE_LINE_PATTERN = /<span class="line">([\s\S]*?)<\/span>/g;

const normalizeMermaidCode = code => code.replace(/\s+$/g, '');

const extractMermaidBlocks = content => {
  const blocks = [];

  content.replace(MERMAID_FENCE_PATTERN, (match, marker, code) => {
    blocks.push(normalizeMermaidCode(code));
    return match;
  });

  return blocks;
};

const restoreMermaidBlock = html => {
  const lines = [];

  html.replace(MERMAID_HIGHLIGHT_LINE_PATTERN, (match, line) => {
    lines.push(unescapeHTML(line.replace(HTML_TAG_PATTERN, '')));
    return match;
  });

  if (!lines.length) {
    return html;
  }

  return `<pre class="mermaid">${escapeHTML(lines.join('\n'))}</pre>`;
};

const restoreHighlightedCode = html => {
  const codeColumn = html.match(/<td class="code">[\s\S]*?<\/td>/);
  if (!codeColumn) {
    return null;
  }

  const lines = [];
  codeColumn[0].replace(HIGHLIGHT_CODE_LINE_PATTERN, (match, line) => {
    lines.push(unescapeHTML(line.replace(BREAK_TAG_PATTERN, '\n').replace(HTML_TAG_PATTERN, '')));
    return match;
  });

  if (!lines.length) {
    return null;
  }

  return normalizeMermaidCode(lines.join('\n'));
};

hexo.extend.filter.register('before_post_render', data => {
  data.__mermaidBlocks = extractMermaidBlocks(data.content);

  if (data.mermaid == null && data.__mermaidBlocks.length) {
    data.mermaid = true;
  }
});

hexo.extend.filter.register('after_post_render', data => {
  const { config } = hexo;
  const theme = hexo.theme.config;

  data.content = data.content.replace(MERMAID_HIGHLIGHT_PATTERN, restoreMermaidBlock);
  data.content = data.content.replace(MERMAID_BLOCK_PATTERN, '<pre class="mermaid">$1</pre>');
  if (data.__mermaidBlocks && data.__mermaidBlocks.length) {
    const mermaidBlocks = data.__mermaidBlocks.slice();

    data.content = data.content.replace(HIGHLIGHT_FIGURE_PATTERN, match => {
      const code = restoreHighlightedCode(match);
      if (code == null || code !== mermaidBlocks[0]) {
        return match;
      }

      mermaidBlocks.shift();
      return `<pre class="mermaid">${escapeHTML(code)}</pre>`;
    });
  }

  data.content = data.content.replace(/(<img[^>]*) src=/img, '$1 data-src=');

  const url = require('url');
  const siteHost = url.parse(config.url).hostname || config.url;
  data.content = data.content.replace(/<a[^>]* href="([^"]+)"[^>]*>([^<]*)<\/a>/img, (match, href, html) => {
    // Exit if the href attribute doesn't exists.
    if (!href) return match;

    // Exit if the url has same host with `config.url`, which means it's an internal link.
    let link = url.parse(href);
    if (!link.protocol || link.hostname === siteHost) return match;

    return `<span class="exturl" data-url="${Buffer.from(href).toString('base64')}">${html}</span>`;
  });

}, 100);
