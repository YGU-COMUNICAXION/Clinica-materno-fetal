import type { ImageMetadata } from "astro";

export type Doctor = {
  id: string;
  name: string;
  image: ImageMetadata;
  featured?: boolean;
  specialties?: string[];
  achievements?: string[];
};
