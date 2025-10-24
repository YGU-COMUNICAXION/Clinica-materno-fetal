import type { ImageMetadata } from 'astro';

export type ServiceModalSection = {
  title: string;
  description?: string[];
  items?: string[];
};

export type ServiceModalData = {
  ctaLabel: string;
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
