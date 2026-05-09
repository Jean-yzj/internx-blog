import Link from "next/link";
import Head from "next/head";
import { getAllSlugs, getAllPosts, getPostBySlug } from "@/lib/posts";
import {
  SITE,
  postUrl,
  seriesUrl,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export default function Post({ post, prevPost, nextPost }) {
  const url = postUrl(post.slug);
  const description = post.intro || `${post.title} — 來自實習通部落格`;
  const articleLd = articleJsonLd(post);
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "首頁", url: SITE.url },
    { name: post.series.name, url: seriesUrl(post.series.slug) },
    { name: post.title, url },
  ]);

  return (
    <>
      <Head>
        <title>{post.title} — {SITE.name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={SITE.locale} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="article:section" content={post.series.name} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <nav className="mb-8 text-sm flex items-center gap-2 text-gray-500">
          <Link href="/" className="hover:text-theme-dark">
            首頁
          </Link>
          <span>/</span>
          <Link
            href={`/series/${post.series.slug}`}
            className="hover:text-theme-dark"
          >
            {post.series.name}
          </Link>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href={`/series/${post.series.slug}`}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${post.series.color} hover:opacity-80 transition-opacity`}
            >
              {post.series.name}
            </Link>
            <span className="text-sm text-gray-400 font-mono">
              #{String(post.num).padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
            {post.title}
          </h1>
        </header>

        <article
          className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-h1:hidden"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <hr className="my-12 border-gray-200" />

        <nav className="grid gap-3 sm:grid-cols-2">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="block p-4 rounded-lg border border-gray-200 hover:border-theme hover:bg-theme-white/40 transition-colors"
            >
              <div className="text-xs text-gray-500 mb-1">← 上一篇</div>
              <div className="font-medium text-gray-900 line-clamp-2">
                {prevPost.title}
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="block p-4 rounded-lg border border-gray-200 hover:border-theme hover:bg-theme-white/40 transition-colors sm:text-right sm:col-start-2"
            >
              <div className="text-xs text-gray-500 mb-1">下一篇 →</div>
              <div className="font-medium text-gray-900 line-clamp-2">
                {nextPost.title}
              </div>
            </Link>
          )}
        </nav>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-theme text-white rounded-full font-medium hover:bg-theme-dark transition-colors"
          >
            看完整文章列表
          </Link>
        </div>
      </div>

      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-500 space-y-1">
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
  const slugs = getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === params.slug);
  const prevPost = idx > 0 ? all[idx - 1] : null;
  const nextPost = idx < all.length - 1 ? all[idx + 1] : null;

  return {
    props: {
      post,
      prevPost: prevPost
        ? { slug: prevPost.slug, title: prevPost.title }
        : null,
      nextPost: nextPost
        ? { slug: nextPost.slug, title: nextPost.title }
        : null,
    },
  };
}
