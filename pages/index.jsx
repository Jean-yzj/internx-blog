import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "@/lib/posts";

const SERIES_ORDER = [
  "找實習",
  "面試準備",
  "找方向",
  "文科進科技",
  "累積經驗",
  "進階主題",
];

export default function Home({ posts }) {
  const grouped = SERIES_ORDER.map((name) => ({
    name,
    posts: posts.filter((p) => p.series.name === name),
  })).filter((g) => g.posts.length > 0);

  return (
    <>
      <Head>
        <title>實習通部落格 — 30 篇大學生職涯指南</title>
        <meta
          name="description"
          content="30 篇實戰文章，涵蓋找實習、面試準備、職涯選擇、文科生進科技業、累積經驗等主題。"
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
            30 篇實戰文章，從找實習、面試、選擇職涯，到文科生進科技業，
            幫你少走 3 年彎路。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              {posts.length} 篇文章
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              {SERIES_ORDER.length} 大主題
            </span>
            <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              約 {Math.round(
                posts.reduce((s, p) => s + p.charCount, 0) / 1000,
              )}k 字
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {grouped.map((group) => (
          <section key={group.name} className="mb-14">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {group.name}
              </h2>
              <span className="text-sm text-gray-500">
                {group.posts.length} 篇
              </span>
            </div>

            <div className="grid gap-3">
              {group.posts.map((post) => (
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
          </section>
        ))}
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p>實習通 InternX · 為大學生而做的職涯平台</p>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
