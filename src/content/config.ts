import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    image: z.string(),
    modal: z.object({
      ctaLabel: z.string(),
      generalDescription: z.string().optional(),
      sections: z.array(
        z.object({
          title: z.string(),
          layout: z.enum(['half', 'full']).optional(),
          content: z.string().optional(),
          description: z.array(z.string()).optional(),
          items: z.array(z.string()).optional(),
        })
      ),
    }),
  }),
});

export const collections = {
  services,
};
