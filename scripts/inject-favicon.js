import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const path = join(root, "docs", "index.html");
let html = readFileSync(path, "utf-8");
const link = '<link rel="icon" href="/f3.png" type="image/png"/>';
if (!html.includes("f3.png")) {
  html = html.replace("</head>", `${link}</head>`);
  writeFileSync(path, html);
  console.log("Injected favicon link into docs/index.html");
}
