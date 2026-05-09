// SEO helpers for InternX blog
export const SITE = {
  url: "https://internx-blog.zeabur.app",
  name: "實習通部落格",
  shortName: "實習通",
  description:
    "為台灣大學生而做的實習與職涯指南：找實習、面試、職涯方向、產業深度、勞動法規與工程實習實戰，超過 90 篇深度文章。",
  twitter: "",
  locale: "zh_TW",
};

export function absoluteUrl(path = "") {
  if (!path) return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function postUrl(slug) {
  return absoluteUrl(`/posts/${slug}`);
}

export function seriesUrl(slug) {
  return absoluteUrl(`/series/${slug}`);
}

export function articleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.intro,
    inLanguage: "zh-TW",
    isPartOf: {
      "@type": "Blog",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl(post.slug),
    },
    url: postUrl(post.slug),
    publisher: {
      "@type": "Organization",
      name: SITE.shortName,
      url: SITE.url,
    },
    articleSection: post.series.name,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "zh-TW",
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Tiny helper component-friendly script tag for JSON-LD inside <Head>
export function jsonLdScript(data) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
