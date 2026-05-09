import { SITE } from "@/lib/seo";

export async function getServerSideProps({ res }) {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.write(body);
  res.end();
  return { props: {} };
}

export default function Robots() {
  return null;
}
