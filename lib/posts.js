import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

const SERIES_MAP = [
  {
    range: [1, 6],
    name: "找實習",
    color: "bg-amber-100 text-amber-800",
  },
  {
    range: [7, 11],
    name: "面試準備",
    color: "bg-rose-100 text-rose-800",
  },
  {
    range: [12, 16],
    name: "找方向",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    range: [17, 21],
    name: "文科進科技",
    color: "bg-violet-100 text-violet-800",
  },
  {
    range: [22, 27],
    name: "累積經驗",
    color: "bg-sky-100 text-sky-800",
  },
  {
    range: [28, 30],
    name: "進階主題",
    color: "bg-slate-200 text-slate-800",
  },
];

function seriesFor(num) {
  return (
    SERIES_MAP.find((s) => num >= s.range[0] && num <= s.range[1]) || {
      name: "其他",
      color: "bg-gray-100 text-gray-800",
    }
  );
}

function parseFile(filename) {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const numMatch = slug.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : 0;

  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const introMatch = content
    .replace(/^#.*$/m, "")
    .trim()
    .match(/^([^\n#].+?)(?:\n\n|$)/s);
  const intro = introMatch
    ? introMatch[1].replace(/\n/g, " ").trim().slice(0, 140)
    : "";

  const charCount = content.replace(/\s/g, "").length;

  return {
    slug,
    num,
    title,
    intro,
    charCount,
    series: seriesFor(num),
  };
}

let _allPostsCache = null;

export function getAllPosts() {
  if (_allPostsCache) return _allPostsCache;
  if (!fs.existsSync(postsDirectory)) return [];
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") && f !== "README.md");
  _allPostsCache = filenames.map(parseFile).sort((a, b) => a.num - b.num);
  return _allPostsCache;
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const numMatch = slug.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : 0;

  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const body = content.replace(/^#\s+.+\n/m, "").trim();

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(body);

  return {
    slug,
    num,
    title,
    html: processed.toString(),
    series: seriesFor(num),
  };
}

export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug);
}
