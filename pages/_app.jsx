import "@/styles/globals.css";
import Head from "next/head";
import { SITE } from "@/lib/seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00a6e8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content={SITE.shortName} />
        <meta name="apple-mobile-web-app-title" content={SITE.shortName} />
        <link rel="alternate" type="application/rss+xml" title={SITE.name} href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
