# annkilzer.net

Personal website of Ann Kilzer — software engineer, artist, adventurer.

![Website](https://img.shields.io/website?down_message=oh%20no&up_message=online&url=https%3A%2F%2Fannkilzer.net)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b894b871-85fb-49be-82ed-222df1a4dac0/deploy-status)](https://app.netlify.com/projects/annkilzer/deploys)
![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fannkilzer.net)
![GitHub language count](https://img.shields.io/github/languages/count/ann-kilzer/annkilzer.net.4)

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-i18next](https://react.i18next.com/) (EN / 日本語)
- [Playwright](https://playwright.dev/) for e2e tests
- [Vitest](https://vitest.dev/) for unit tests
- Deployed on [Netlify](https://netlify.com/)

## Development

```bash
nvm use
npm install
npm run dev
```

## Testing

```bash
npm run test        # unit tests (vitest)
npm run e2e         # e2e tests (playwright)
```

## How to update images

Artwork and photos go through a local pipeline before landing on the site.
The `art/` working folders are gitignored — only the final images you copy
into `public/images/` are committed.

```
art/step1_raw/       ← drop original full-size images here
      ↓  scripts/resize-images.sh -s
art/step2_resized/   ← resized for web (this is Glaze's input)
      ↓  run Glaze (external app)
art/step3_glazed/    ← Glaze output
      ↓  cp into the repo
public/images/       ← committed to the site
```

**Steps:**

1. Put original images in `art/step1_raw/`.
2. Resize them:
   ```bash
   scripts/resize-images.sh -s
   ```
   Defaults: 1536px longest edge, JPEG quality 82, metadata stripped,
   downscale-only (never upscales). Options: `-e EDGE`, `-q QUALITY`,
   `-f jpg|png|webp`, `-s` (strip metadata). Run `-h` for help.
3. Run **Glaze** on `art/step2_resized/`, outputting to `art/step3_glazed/`.
   Always resize *before* glazing — downscaling afterward degrades the
   protective perturbations.
4. Copy the glazed images into `public/images/` (e.g. `public/images/blog/`)
   and reference them from posts or pages.

Requires ImageMagick (`brew install imagemagick`).
