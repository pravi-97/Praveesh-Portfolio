# Praveesh Portfolio

This is a static portfolio built with HTML, CSS, and browser JavaScript. Vite serves the site during development and builds it for deployment.

- `index.html` contains the portfolio content, project links, and résumé download. IsItOutYet is the featured project.
- `styles.css` defines the base styles. It loads before `redesign.css`, which applies the current responsive layout and 60–30–10 palette.
- `app.js` handles mobile navigation, the active section indicator, the project dialog, and the contact form. The form validates its fields and opens a prefilled draft in the visitor’s email app.
- `public/portfolio-assets/` contains the favicon, portrait, résumé PDF, fonts, and font licenses. Vite copies these files into the production output as-is.

## Run locally

The commands below use Node.js and npm and were verified with Node.js 24.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

`npm run preview` serves the production build locally. Deploy the generated `dist/` directory to the root of a static host so the `/portfolio-assets/` URLs resolve.
