import { defineConfig } from "astro/config";
import Tailwind from "@astrojs/tailwind";
import SolidJS from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Tailwind({
      applyBaseStyles: false,
    }),
    SolidJS(),
  ],
});
