import type { CollectionEntry } from "astro:content";

export type NotePost = CollectionEntry<"posts">;

export const startHereSlugs = [
  "why-security-visibility-must-come-before-scale",
  "when-to-re-inspect-trigger-based-security-timing-guide",
  "authorization-and-scope-checklist-before-security-inspection",
  "structured-inspection-vs-adversarial-simulation-key-differences",
  "automated-vulnerability-scanning-what-it-can-and-cannot-do",
  "using-owasp-top-10-in-a-structured-inspection-workflow",
  "how-to-prioritize-security-findings-after-an-inspection",
  "remediation-verification-security-closure-criteria-that-work",
  "security-reporting-evidence-based-findings-vs-raw-tool-output",
] as const;

export const getPublishedPosts = (posts: NotePost[]): NotePost[] =>
  posts.filter((post: NotePost) => !post.data.draft);

export const sortPostsByDateDesc = (posts: NotePost[]): NotePost[] =>
  [...posts].sort(
    (a: NotePost, b: NotePost) => b.data.date.valueOf() - a.data.date.valueOf()
  );

export const orderPostsByStartHere = (posts: NotePost[]): NotePost[] => {
  const bySlug = new Map<string, NotePost>(
    posts.map((post: NotePost) => [post.slug, post])
  );

  const ordered = startHereSlugs
    .map((slug) => bySlug.get(slug))
    .filter((post): post is NotePost => Boolean(post));

  const inOrder = new Set(ordered.map((post: NotePost) => post.slug));

  const remainder = sortPostsByDateDesc(
    posts.filter((post: NotePost) => !inOrder.has(post.slug))
  );

  return [...ordered, ...remainder];
};
