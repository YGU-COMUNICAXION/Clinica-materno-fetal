import type { ImageMetadata } from 'astro';

export type ServiceModalSection = {
  title: string;
  layout?: "half" | "full";
  content?: string;
  description?: string[];
  items?: string[];
};

export type ServiceModalData = {
  ctaLabel: string;
  generalDescription?: string;
  sections: ServiceModalSection[];
};

export type Service = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: ImageMetadata;
  modal: ServiceModalData;
};
