import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
    }),
  ],
  server: {
    watch: {
      usePolling: false,
      ignored: ["**/node_modules/**", "**/build/**", "**/docs/**"],
    },
  },
});
