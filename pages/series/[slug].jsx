import Link from "next/link";
import Head from "next/head";
import {
  getAllPosts,
  getAllSeries,
  getSeriesBySlug,
} from "@/lib/posts";
import { SITE, seriesUrl, breadcrumbJsonLd } from "@/lib/seo";

export default function SeriesPage({ series, posts }) {
  const url = seriesUrl(series.slug);
  const description = `「${series.name}」系列共 ${posts.length} 篇文章 — 實習通部落格的深度指南。`;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "首頁", url: SITE.url },
    { name: series.name, url },
  ]);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${series.name} | ${SITE.name}`,
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/posts/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <Head>
        <title>{series.name} — {SITE.name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={SITE.locale} />
        <meta property="og:title" content={`${series.name} — ${SITE.name}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      </Head>

      <header className="bg-gradient-to-br from-theme to-theme-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <Link
            href="/"
            className="text-sm opacity-80 hover:opacity-100 inline-flex items-center gap-1"
          >
            ← 回到所有主題
          </Link>
          <div className="mt-4">
            <span className="text-xs font-medium tracking-widest opacity-70">
              SERIES
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-2">
              {series.name}
            </h1>
            <p className="mt-3 opacity-95">
              共 {posts.length} 篇文章 · 約{" "}
              {Math.round(
                posts.reduce((s, p) => s + p.charCount, 0) / 1000,
              )}
              k 字
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block p-5 bg-white rounded-lg border border-gray-200 hover:border-theme hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-theme group-hover:text-white flex items-center justify-center font-mono text-sm font-medium text-gray-600 transition-colors">
                  {String(post.num).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-theme-dark mb-1 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.intro}
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    {Math.round(post.charCount / 100) / 10}k 字
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-theme text-white rounded-full font-medium hover:bg-theme-dark transition-colors"
          >
            看其他主題
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500 space-y-1">
          <p>實習通 InternX · 為大學生而做的職涯平台</p>
          <p className="text-xs text-gray-400">
            <Link href="/feed.xml" className="hover:underline">RSS</Link>
            <span className="mx-2">·</span>
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export async function getStaticPaths() {
  const all = getAllSeries();
  return {
    paths: all.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const series = getSeriesBySlug(params.slug);
  if (!series) return { notFound: true };
  const posts = getAllPosts()
    .filter((p) => p.series.name === series.name)
    .map((p) => ({
      slug: p.slug,
      num: p.num,
      title: p.title,
      intro: p.intro,
      charCount: p.charCount,
    }));

  return {
    props: {
      series: { name: series.name, slug: series.slug, color: series.color },
      posts,
    },
  };
}
