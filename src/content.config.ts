import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number(),
    pubDate: z.coerce.date(),
    description: z.string(),
    image: z.string(), // <-- NOVO: Adiciona o campo de imagem
  }),
});

export const collections = { blog };