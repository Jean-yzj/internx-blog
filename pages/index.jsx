import Link from "next/link";
import Head from "next/head";
import { useMemo, useState } from "react";
import { getAllPosts, getAllSeries } from "@/lib/posts";
import { SITE, websiteJsonLd } from "@/lib/seo";

export default function Home({ posts, seriesList }) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();
  const totalChars = useMemo(
    () => posts.reduce((s, p) => s + p.charCount, 0),
    [posts],
  );

  const grouped = useMemo(
    () =>
      seriesList
        .map((s) => ({
          ...s,
          posts: posts.filter((p) => p.series.name === s.name),
        }))
        .filter((g) => g.posts.length > 0),
    [posts, seriesList],
  );

  const searchResults = useMemo(() => {
    if (!trimmed) return null;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(trimmed) ||
        p.intro.toLowerCase().includes(trimmed) ||
        p.series.name.toLowerCase().includes(trimmed),
    );
  }, [posts, trimmed]);

  const websiteLd = websiteJsonLd();

  return (
    <>
      <Head>
        <title>{SITE.name} — {posts.length} 篇大學生職涯指南</title>
        <meta name="description" content={SITE.description} />
        <link rel="canonical" href={SITE.url} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={SITE.locale} />
        <meta property="og:title" content={`${SITE.name} — ${posts.length} 篇大學生職涯指南`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:url" content={SITE.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.name} — ${posts.length} 篇大學生職涯指南`} />
        <meta name="twitter:description" content={SITE.description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </Head>

      <header className="bg-gradient-to-br from-theme to-theme-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
          <div className="text-sm font-medium tracking-widest opacity-80 mb-3">
            INTERNX BLOG
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            實習通部落格
          </h1>
          <p className="text-lg sm:text-xl opacity-95 max-w-2xl">
            {posts.length} 篇實戰文章，從找實習、面試、選擇職涯，到職場軟實力、
            產業深度、勞動法規與工程實習實戰，幫你少走 3 年彎路。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              {posts.length} 篇文章
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              {seriesList.length} 大主題
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              約 {Math.round(totalChars / 1000)}k 字
            </span>
          </div>

          {/* 搜尋框 */}
          <div className="mt-8 relative max-w-xl">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋文章標題、簡介或系列名稱…"
              className="w-full px-5 py-3 pl-11 rounded-full bg-white/95 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="搜尋文章"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
              />
            </svg>
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-sm"
                aria-label="清除搜尋"
              >
                清除
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {searchResults ? (
          <section className="mb-14">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">搜尋結果</h2>
              <span className="text-sm text-gray-500">
                找到 {searchResults.length} 篇 ・ 關鍵字「{query}」
              </span>
            </div>
            {searchResults.length === 0 ? (
              <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
                沒有符合的文章。試試其他關鍵字，例如「履歷」「面試」「勞基法」。
              </div>
            ) : (
              <div className="grid gap-3">
                {searchResults.map((post) => (
                  <PostCard key={post.slug} post={post} showSeries />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            {/* 主題快速導覽 */}
            <section className="mb-14">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                依主題瀏覽
              </h2>
              <div className="flex flex-wrap gap-2">
                {seriesList.map((s) => {
                  const count = posts.filter(
                    (p) => p.series.name === s.name,
                  ).length;
                  if (count === 0) return null;
                  return (
                    <Link
                      key={s.slug}
                      href={`/series/${s.slug}`}
                      className={`text-sm font-medium px-3 py-1.5 rounded-full ${s.color} hover:opacity-80 transition-opacity`}
                    >
                      {s.name}
                      <span className="ml-1.5 text-xs opacity-70">
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {grouped.map((group) => (
              <section key={group.name} className="mb-14">
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    <Link
                      href={`/series/${group.slug}`}
                      className="hover:text-theme-dark"
                    >
                      {group.name}
                    </Link>
                  </h2>
                  <span className="text-sm text-gray-500">
                    {group.posts.length} 篇
                  </span>
                </div>

                <div className="grid gap-3">
                  {group.posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500 space-y-1">
          <p>實習通 InternX · 為大學生而做的職涯平台</p>
          <p className="text-xs text-gray-400">
            <Link href="/feed.xml" className="hover:underline">
              RSS
            </Link>
            <span className="mx-2">·</span>
            <Link href="/sitemap.xml" className="hover:underline">
              Sitemap
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

function PostCard({ post, showSeries }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group block p-5 bg-white rounded-lg border border-gray-200 hover:border-theme hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-theme group-hover:text-white flex items-center justify-center font-mono text-sm font-medium text-gray-600 transition-colors">
          {String(post.num).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          {showSeries && (
            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${post.series.color}`}
            >
              {post.series.name}
            </span>
          )}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-theme-dark mb-1 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{post.intro}</p>
          <div className="mt-2 text-xs text-gray-400">
            {Math.round(post.charCount / 100) / 10}k 字
          </div>
        </div>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const seriesList = getAllSeries();
  return { props: { posts, seriesList } };
}
