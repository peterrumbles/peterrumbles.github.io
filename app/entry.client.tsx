import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

// Built SPA shell uses <main>; dev index.html uses #root
const rootEl =
  document.querySelector("#root") ??
  document.querySelector("#app") ??
  document.querySelector("main");

if (!rootEl) {
  throw new Error("No root element found for Remix hydration");
}

startTransition(() => {
  hydrateRoot(
    rootEl,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
