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

const getBreakpoint = (name: string, fallback: string): string => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(`--breakpoing-${name}`)
    .trim();

  return value || fallback;
};

const minScreenWidth = (name: string, fallback: string): MediaQueryList => {
  const value = getBreakpoint(name, fallback);
  return window.matchMedia(`(min-width: ${value})`);
};

export { getImage, getBreakpoint, minScreenWidth };
