// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages config:
// - If deploying to https://niketdhale.github.io (repo: niketdhale.github.io),
//   set site to that URL and REMOVE the `base` line.
// - If deploying to https://niketdhale.github.io/portfolio (repo: portfolio),
//   keep both lines as-is.
export default defineConfig({
  site: "https://niketdhale.github.io",
  base: "/portfolio",
});
