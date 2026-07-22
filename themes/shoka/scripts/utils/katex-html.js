"use strict";

const { DomUtils, parseDocument } = require("htmlparser2");

const hasClass = (node, className) => node.type === "tag"
  && node.attribs
  && node.attribs.class
  && node.attribs.class.split(/\s+/).includes(className);

const isTexAnnotation = node => node.type === "tag"
  && node.name === "annotation"
  && node.attribs
  && node.attribs.encoding === "application/x-tex";

const replaceWithText = (node, text) => {
  DomUtils.replaceElement(node, {
    type: "text",
    data: text,
    parent: null,
    prev: null,
    next: null
  });
};

const getKatexText = node => {
  const annotation = DomUtils.findOne(isTexAnnotation, node.children);
  if (annotation) {
    return DomUtils.textContent(annotation);
  }

  const katexHtml = DomUtils.findOne(child => hasClass(child, "katex-html"), node.children);
  return katexHtml ? DomUtils.textContent(katexHtml) : DomUtils.textContent(node);
};

const normalizeKatexHtml = html => {
  if (typeof html !== "string" && !(html instanceof String)) {
    return html == null ? "" : String(html);
  }

  const document = parseDocument(html, { decodeEntities: true });
  const katexNodes = DomUtils.findAll(node => hasClass(node, "katex"), document.children);

  for (const node of katexNodes) {
    replaceWithText(node, getKatexText(node));
  }

  return DomUtils.getOuterHTML(document, { encodeEntities: "utf8" });
};

module.exports = { normalizeKatexHtml };
