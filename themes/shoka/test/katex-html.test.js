"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { stripHTML, tocObj } = require("hexo-util");
const { normalizeKatexHtml } = require("../scripts/utils/katex-html");

const KATEX_INTERVAL = [
  "<span class=\"katex\">",
  "<span class=\"katex-mathml\"><math><semantics><mrow>[a,b]</mrow>",
  "<annotation encoding=\"application/x-tex\">[a,b]</annotation>",
  "</semantics></math></span>",
  "<span class=\"katex-html\" aria-hidden=\"true\">[a,b]</span>",
  "</span>"
].join("");

test("normalizes KaTeX htmlAndMathml to one TeX representation", () => {
  const html = `<h2 id="closed-interval">Closed interval ${KATEX_INTERVAL}</h2>`;
  const normalized = normalizeKatexHtml(html);

  assert.equal(normalized, "<h2 id=\"closed-interval\">Closed interval [a,b]</h2>");
  assert.equal((normalized.match(/\[a,b\]/g) || []).length, 1);
});

test("keeps heading anchors and produces a deduplicated TOC source entry", () => {
  const normalized = normalizeKatexHtml(`<h2 id="closed-interval">Closed interval ${KATEX_INTERVAL}</h2>`);
  const [result] = tocObj(normalized);

  assert.equal(result.id, "closed-interval");
  assert.equal((result.text.match(/\[a,b\]/g) || []).length, 1);
});

test("uses the visual KaTeX branch when the TeX annotation is absent", () => {
  const html = "<p>Function <span class=\"katex\"><span class=\"katex-html\">z=z(x,y)</span></span></p>";

  assert.equal(normalizeKatexHtml(html), "<p>Function z=z(x,y)</p>");
});

test("keeps decoded Chinese text safe for the escaped content preview", () => {
  const html = `<p>&#x6700;&#x8fd1; ${KATEX_INTERVAL}</p>`;
  const normalized = normalizeKatexHtml(html);

  assert.equal(normalized, "<p>最近 [a,b]</p>");
  assert.equal(stripHTML(normalized), "最近 [a,b]");
});

test("preserves non-KaTeX HTML for every preview source", () => {
  const sources = [
    "<p>Description <strong>text</strong></p>",
    "<p>Excerpt <em>text</em></p>",
    "<p>Content <a href=\"/post/\">text</a></p>"
  ];

  for (const source of sources) {
    assert.equal(normalizeKatexHtml(source), source);
  }
});

test("registers the Nunjucks normalization helper", () => {
  const helpers = new Map();
  const originalHexo = global.hexo;
  const enginePath = require.resolve("../scripts/helpers/engine");

  global.hexo = {
    extend: {
      helper: {
        register: (name, handler) => helpers.set(name, handler)
      }
    }
  };

  try {
    delete require.cache[enginePath];
    require(enginePath);
  } finally {
    global.hexo = originalHexo;
  }

  assert.equal(helpers.get("_normalize_katex_html")(`<p>${KATEX_INTERVAL}</p>`), "<p>[a,b]</p>");
});

test("uses the normalizer for the TOC and every post preview branch", () => {
  const sidebar = fs.readFileSync(path.join(__dirname, "../layout/_macro/sidebar.njk"), "utf8");
  const segment = fs.readFileSync(path.join(__dirname, "../layout/_macro/segment.njk"), "utf8");

  assert.match(sidebar, /toc\(_normalize_katex_html\(page\.content\)/);
  assert.equal((segment.match(/_normalize_katex_html/g) || []).length, 3);
});
