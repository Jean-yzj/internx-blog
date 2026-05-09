import { getAllPosts } from "@/lib/posts";
import { SITE, postUrl } from "@/lib/seo";

function escapeXml(unsafe) {
  return String(unsafe || "").replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function buildRss(posts) {
  const now = new Date().toUTCString();
  const items = posts
    .slice()
    .reverse() // newest (highest num) first
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${postUrl(p.slug)}</link>
      <guid isPermaLink="true">${postUrl(p.slug)}</guid>
      <description>${escapeXml(p.intro)}</description>
      <category>${escapeXml(p.series.name)}</category>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>zh-TW</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  res.write(buildRss(posts));
  res.end();
  return { props: {} };
}

export default function Feed() {
  return null;
}
