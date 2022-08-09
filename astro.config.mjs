import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://marbimedia.netlify.app/",
  integrations: [tailwind(), mdx(), react(), image()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});