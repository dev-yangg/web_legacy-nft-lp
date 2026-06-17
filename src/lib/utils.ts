import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const getImage = (path: string): ImageMetadata => {
  const mod = images[path];
  if (!mod) throw new Error(`Image not found: ${path}`);
  return mod.default;
};

export { getImage };
