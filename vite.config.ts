// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GH_PAGES=1 produces a fully static, prerendered build for GitHub Pages.
const isPages = process.env.GH_PAGES === "1";

const researchSlugs = [
  "student-induction-stove-distribution",
  "household-biogas-safe-use",
  "air-pollution-school-children",
  "clean-cooking-urban-nepal",
  "biogas-program-child-respiratory-infection",
  "black-carbon-biogas-stoves",
  "lead-household-dust-children",
  "household-fuel-tuberculosis",
  "household-smoke-pneumonia-children",
  "indoor-air-pollution-tb-cataracts",
];

const staticPages = [
  "/",
  "/about",
  "/research",
  "/teaching",
  "/publications",
  "/writing-media",
  "/leaders-nepal",
  "/contact",
  ...researchSlugs.map((s) => `/research/${s}`),
].map((path) => ({ path }));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages
      ? {
          pages: staticPages,
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
