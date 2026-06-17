'use strict';

const path = require('path');
const sass = require('sass');

const THEME_CSS_DIR = path.resolve(hexo.theme_dir, 'source/css');
const STYLE_IMPORTS = {
  '_colors': 'colors',
  'colors': 'colors',
  '_iconfont': 'iconfont',
  'iconfont': 'iconfont',
  '_custom': 'custom',
  'custom': 'custom'
};

function lookupConfig(key) {
  const parts = String(key).split('.');
  const sources = [hexo.theme.config, hexo.config];

  for (const source of sources) {
    let current = source;
    for (const part of parts) {
      if (current === undefined || current === null || !Object.prototype.hasOwnProperty.call(current, part)) {
        current = undefined;
        break;
      }
      current = current[part];
    }
    if (current !== undefined) {
      return current;
    }
  }

  return null;
}

function parseSocialColors(value) {
  const colors = {};
  if (!value || typeof value !== 'object') return colors;

  for (const [name, rawValue] of Object.entries(value)) {
    if (typeof rawValue !== 'string') continue;
    const parts = rawValue.split(' || ').map(part => part.trim());
    const color = parts[2];
    if (color) colors[name] = color.replace(/^['"]|['"]$/g, '');
  }

  return colors;
}

function toSassValue(value) {
  const types = sass.types;

  if (value === null || value === undefined) return types.Null.NULL;
  if (typeof value === 'boolean') return value ? types.Boolean.TRUE : types.Boolean.FALSE;
  if (typeof value === 'number') return new types.Number(value);
  if (typeof value === 'string') return new types.String(value);
  if (Array.isArray(value)) {
    const list = new types.List(value.length);
    value.forEach((item, index) => list.setValue(index, toSassValue(item)));
    return list;
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    const map = new types.Map(entries.length);
    entries.forEach(([key, item], index) => {
      map.setKey(index, new types.String(key));
      map.setValue(index, toSassValue(item));
    });
    return map;
  }

  return types.Null.NULL;
}

function hexoConfig(keys) {
  const key = keys.getValue();

  if (key === 'social') {
    return toSassValue(parseSocialColors(lookupConfig('social')));
  }

  return toSassValue(lookupConfig(key));
}

function resolveStyleImport(url) {
  const styleKey = STYLE_IMPORTS[url];
  if (!styleKey) return null;

  const configuredPath = hexo.theme.config.style && hexo.theme.config.style[styleKey];
  if (configuredPath) return { file: configuredPath };

  if (styleKey === 'custom') return { contents: '' };
  return null;
}

function scssRenderer(data) {
  const result = sass.renderSync({
    file: data.path,
    data: data.text,
    includePaths: [THEME_CSS_DIR],
    outputStyle: 'expanded',
    importer(url) {
      return resolveStyleImport(url);
    },
    functions: {
      'hexo-config($keys)': hexoConfig
    }
  });

  return result.css.toString();
}

hexo.extend.renderer.register('scss', 'css', scssRenderer);
