import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Built SPA shell uses <main>; dev index.html uses #root. We use createRoot (not
// hydrateRoot) so we replace the static shell instead of hydrating—avoids
// React minified errors (#418 etc.) when the shell doesn't match our first paint.
const rootEl =
  document.querySelector("#root") ??
  document.querySelector("#app") ??
  document.querySelector("main");

if (!rootEl) {
  throw new Error("No root element found for Remix");
}

const root = createRoot(rootEl);
startTransition(() => {
  root.render(
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
