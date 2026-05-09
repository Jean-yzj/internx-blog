import { getAllPosts, getAllSeries } from "@/lib/posts";
import { SITE, postUrl, seriesUrl } from "@/lib/seo";

function buildXml(urls) {
  const items = urls
    .map(
      ({ loc, changefreq = "weekly", priority = 0.7 }) => `
  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const series = getAllSeries();

  const urls = [
    { loc: SITE.url, changefreq: "daily", priority: 1.0 },
    ...series.map((s) => ({
      loc: seriesUrl(s.slug),
      changefreq: "weekly",
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      loc: postUrl(p.slug),
      changefreq: "monthly",
      priority: 0.6,
    })),
  ];

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  res.write(buildXml(urls));
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
