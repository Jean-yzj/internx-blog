import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
