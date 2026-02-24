# peterrumbles.github.io

Static React site built with [Remix](https://remix.run) (Vite + SPA mode). No server required — build outputs static files you can deploy to GitHub Pages or any CDN.

## Commands

| Command | Description |
|--------|-------------|
| **`npm run dev`** | Start dev server with hot reload at `http://localhost:5173` |
| **`npm run build`** | Build for production → output in `build/client/` |
| **`npm run preview`** | Serve the production build locally |
| **`npm start`** | Same as `preview` — serve the built site |

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Deploy (e.g. GitHub Pages)

1. Run `npm run build`.
2. Use the contents of the **`build/client`** folder as your site root (e.g. set GitHub Pages source to that directory or copy it to `docs/` or your deployment target).

## Project structure

- `app/` — Remix app (routes, root layout, entry)
- `app/routes/` — File-based routes (e.g. `_index.tsx` = home)
- `build/client/` — Static build output after `npm run build`
- `index.html` — HTML shell (SPA mounts into `#root`)
- `vite.config.ts` — Vite + Remix plugin (SPA mode: `ssr: false`)
