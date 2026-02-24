import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const path = join(root, "docs", "index.html");
let html = readFileSync(path, "utf-8");

// Favicon and stylesheet: SPA index doesn't include them, so inject for GitHub Pages
const injections = [
  '<link rel="icon" href="/f3.png" type="image/png"/>',
  '<link rel="stylesheet" href="/app.css"/>',
];
for (const tag of injections) {
  const marker = tag.includes("f3.png") ? "f3.png" : "app.css";
  if (!html.includes(marker)) {
    html = html.replace("</head>", `${tag}\n</head>`);
  }
}
writeFileSync(path, html);
console.log("Injected favicon and stylesheet into docs/index.html");
