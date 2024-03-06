import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.martu.dev",
  output: "server",
  integrations: [tailwind()],
  adapter: vercel()
});