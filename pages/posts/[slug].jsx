import Link from "next/link";
import Head from "next/head";
import { getAllSlugs, getAllPosts, getPostBySlug } from "@/lib/posts";

export default function Post({ post, prevPost, nextPost }) {
  return (
    <>
      <Head>
        <title>{post.title} — 實習通部落格</title>
        <meta name="description" content={post.title} />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <nav className="mb-8 text-sm">
          <Link
            href="/"
            className="text-gray-500 hover:text-theme-dark inline-flex items-center gap-1"
          >
            ← 回到所有文章
          </Link>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${post.series.color}`}
            >
              {post.series.name}
            </span>
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
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p>實習通 InternX · 為大學生而做的職涯平台</p>
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
