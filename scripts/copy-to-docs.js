import { cpSync, rmSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const src = join(root, "build", "client");
const dest = join(root, "docs");
const appCss = join(root, "app", "app.css");

if (!existsSync(src)) {
  console.error("Build output not found at build/client. Run remix vite:build first.");
  process.exit(1);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true });
}
cpSync(src, dest, { recursive: true });

// Required for GitHub Pages: disables Jekyll so files like _index-*.js are served
writeFileSync(join(dest, ".nojekyll"), "");

// SPA index doesn't link the bundled CSS; copy app.css to a stable path so we can link it
if (existsSync(appCss)) {
  cpSync(appCss, join(dest, "app.css"));
}

console.log("Copied build/client to docs/ (with .nojekyll for GitHub Pages)");
