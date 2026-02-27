import { defineCollection, z } from "astro:content";

const taxonomyLabels = [
  "When to Inspect",
  "How Inspection Works",
  "How to Act on Findings",
  "Scope and Boundaries",
] as const;

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    series: z.string().optional(),
    primaryLabel: z.enum(taxonomyLabels),
    secondaryLabel: z.enum(taxonomyLabels).optional(),
  }),
});

export const collections = { posts };
