import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    type: z.enum([
      "framework",
      "practice",
      "interpretation",
      "method",
      "field-note"
    ]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };