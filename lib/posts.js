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
    slug: "finding-internship",
    color: "bg-amber-100 text-amber-800",
  },
  {
    range: [7, 11],
    name: "面試準備",
    slug: "interview-prep",
    color: "bg-rose-100 text-rose-800",
  },
  {
    range: [12, 16],
    name: "找方向",
    slug: "finding-direction",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    range: [17, 21],
    name: "文科進科技",
    slug: "liberal-to-tech",
    color: "bg-violet-100 text-violet-800",
  },
  {
    range: [22, 27],
    name: "累積經驗",
    slug: "building-experience",
    color: "bg-sky-100 text-sky-800",
  },
  {
    range: [28, 30],
    name: "進階主題",
    slug: "advanced",
    color: "bg-slate-200 text-slate-800",
  },
  {
    range: [31, 36],
    name: "進入職場前",
    slug: "entering-workplace",
    color: "bg-orange-100 text-orange-800",
  },
  {
    range: [37, 42],
    name: "軟實力升級",
    slug: "soft-skills",
    color: "bg-pink-100 text-pink-800",
  },
  {
    range: [43, 48],
    name: "數位工具",
    slug: "digital-tools",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    range: [49, 54],
    name: "產業深度",
    slug: "industry-deep-dive",
    color: "bg-lime-100 text-lime-800",
  },
  {
    range: [55, 60],
    name: "台灣實戰",
    slug: "taiwan-practical",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    range: [61, 66],
    name: "勞基法基礎",
    slug: "labor-law-basics",
    color: "bg-red-100 text-red-800",
  },
  {
    range: [67, 72],
    name: "勞動契約",
    slug: "labor-contract",
    color: "bg-blue-100 text-blue-800",
  },
  {
    range: [73, 78],
    name: "社保與救濟",
    slug: "social-insurance",
    color: "bg-teal-100 text-teal-800",
  },
  {
    range: [79, 84],
    name: "簽署文件紅綠燈",
    slug: "contract-flags",
    color: "bg-fuchsia-100 text-fuchsia-800",
  },
  {
    range: [85, 90],
    name: "特殊身分情境",
    slug: "special-situations",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    range: [91, 96],
    name: "工程實習實戰",
    slug: "engineering-internship",
    color: "bg-purple-100 text-purple-800",
  },
];

const FALLBACK_SERIES = {
  name: "其他",
  slug: "other",
  color: "bg-gray-100 text-gray-800",
};

function seriesFor(num) {
  return (
    SERIES_MAP.find((s) => num >= s.range[0] && num <= s.range[1]) ||
    FALLBACK_SERIES
  );
}

export function getAllSeries() {
  return SERIES_MAP.map((s) => ({
    name: s.name,
    slug: s.slug,
    color: s.color,
    range: s.range,
  }));
}

export function getSeriesBySlug(slug) {
  return SERIES_MAP.find((s) => s.slug === slug) || null;
}

function parseFile(filename) {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const numMatch = slug.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : data.num || 0;

  // Prefer frontmatter values, fall back to parsing markdown body
  let title = data.title;
  if (!title) {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    title = titleMatch ? titleMatch[1].trim() : slug;
  }

  let intro = data.intro;
  if (!intro) {
    const introMatch = content
      .replace(/^#.*$/m, "")
      .trim()
      .match(/^([^\n#].+?)(?:\n\n|$)/s);
    intro = introMatch ? introMatch[1].replace(/\n/g, " ").trim() : "";
  }
  // Strip Markdown formatting markers from intro and clamp length
  intro = intro
    .replace(/\*\*/g, "")
    .replace(/^>\s*/g, "")
    .replace(/\n/g, " ")
    .trim()
    .slice(0, 180);

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
  const { content, data } = matter(fileContent);

  const numMatch = slug.match(/^(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : data.num || 0;

  let title = data.title;
  if (!title) {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    title = titleMatch ? titleMatch[1].trim() : slug;
  }

  let intro = data.intro;
  if (!intro) {
    const introMatch = content
      .replace(/^#.*$/m, "")
      .trim()
      .match(/^([^\n#].+?)(?:\n\n|$)/s);
    intro = introMatch ? introMatch[1].replace(/\n/g, " ").trim() : "";
  }
  intro = intro
    .replace(/\*\*/g, "")
    .replace(/^>\s*/g, "")
    .replace(/\n/g, " ")
    .trim()
    .slice(0, 220);

  const body = content.replace(/^#\s+.+\n/m, "").trim();

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(body);

  return {
    slug,
    num,
    title,
    intro,
    html: processed.toString(),
    series: seriesFor(num),
  };
}

export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug);
}
