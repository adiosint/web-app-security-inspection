import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const DOMAIN = "https://sayyidishaarani.com";

const staticRoutes = [
  "/",
  "/inspection/",
  "/about/",
  "/boundaries/",
  "/disclosure/",
  "/notes/",
];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const getUrlTag = (path: string) => {
  const loc = `${DOMAIN}${path}`;
  return `<url><loc>${escapeXml(loc)}</loc></url>`;
};

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  const publishedPosts = posts.filter((post) => !post.data.draft);

  const staticUrlTags = staticRoutes.map((path) => getUrlTag(path));
  const postUrlTags = publishedPosts.map((post) =>
    getUrlTag(`/notes/${post.slug}/`)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrlTags, ...postUrlTags].join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
