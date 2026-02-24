# peterrumbles.github.io

Static React site built with [Remix](https://remix.run) (Vite + SPA mode). No server required — build outputs static files you can deploy to GitHub Pages or any CDN.

## Commands

| Command | Description |
|--------|-------------|
| **`npm run dev`** | Start dev server with hot reload at `http://localhost:5173` |
| **`npm run build`** | Build for production → output in **`docs/`** |
| **`npm run preview`** | Serve the production build from `docs/` locally |
| **`npm start`** | Same as `preview` — serve the built site |

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Deploy (e.g. GitHub Pages)

1. Run `npm run build` (writes static files into **`docs/`**, including `.nojekyll` so GitHub Pages serves underscore-prefixed assets like `_index-*.js`).
2. Commit and push the **`docs/`** folder. In the repo **Settings → Pages**, set source to **Deploy from a branch** and choose the **`/docs`** folder.

## Project structure

- `app/` — Remix app (routes, root layout, entry)
- `app/routes/` — File-based routes (e.g. `_index.tsx` = home)
- `docs/` — Static build output after `npm run build` (used for GitHub Pages)
- `index.html` — HTML shell (SPA mounts into `#root`)
- `vite.config.ts` — Vite + Remix plugin (SPA mode: `ssr: false`)
