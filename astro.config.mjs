// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
        fallbacks: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        options: {
          variants: [
            {
              src: ["./src/assets/fonts/Playfair-Display-Variable.woff2"],
              weight: "100 900",
              style: "normal",
              display: "swap",
            },
          ],
        },
      },
    ],
  },
});
