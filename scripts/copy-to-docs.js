import { cpSync, rmSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const src = join(root, "build", "client");
const dest = join(root, "docs");

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
console.log("Copied build/client to docs/ (with .nojekyll for GitHub Pages)");
