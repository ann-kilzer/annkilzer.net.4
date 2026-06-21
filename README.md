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
