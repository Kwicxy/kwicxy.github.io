# Self-hosted fonts

These WOFF2 files replace the unavailable `fonts.font.im` CDN and are published
with the site under `/fonts/`.

| Family | Version | Source | License |
| --- | --- | --- | --- |
| Mulish | Fontsource 5.2.8 | https://fontsource.org/fonts/mulish | SIL Open Font License 1.1 |
| Dancing Script | Fontsource 5.2.8 | https://fontsource.org/fonts/dancing-script | SIL Open Font License 1.1 |
| Noto Serif SC | Fontsource 5.2.9 | https://fontsource.org/fonts/noto-serif-sc | SIL Open Font License 1.1 |
| Hack | hack-font 3.3.0 | https://github.com/source-foundry/Hack | MIT License |

`Noto Serif SC` uses Fontsource's Chinese Simplified subset. It is intentionally
not preloaded because each weight is about 1.5 MB; `font-display: swap` keeps
text visible while the browser retrieves it.
