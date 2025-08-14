import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { I18nProvider } from "@/context/I18nProvider";



export const metadata = {
  title: "Youngand - Health with Digital Health Solutions",
  description: "Transform Your Health with Digital Health Solutions",
  keywords: "digital health solutions, health, wellness, cognitive training, dementia prevention, 영앤, youngand",
  author: "youngand",
  url: "https://youngandx.com",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description}/>
          <meta name="keywords" content={metadata.keywords}/>
          <meta name="author" content={metadata.author}/>

          {/* Open Graph (Facebook, LinkedIn) */}
          <meta property="og:title" content={metadata.title}/>
          <meta property="og:description" content={metadata.description}/>
          <meta property="og:url" content={metadata.url}/>
          <meta property="og:type" content="website"/>

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={metadata.title}/>
          <meta name="twitter:description" content={metadata.description}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
      <body>
      <I18nProvider>
        {children}
      </I18nProvider>
      </body>
      </html>
  );
}