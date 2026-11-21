import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getSite, jsonLd } from "@/lib/site";
import "./globals.css";

const site = getSite();

export const metadata: Metadata = {
  metadataBase: new URL(site.site),
  title: {
    default: "주차119 | 주차라인 도색·카스토퍼·차선규제봉·볼라드 설치",
    template: "%s | 주차119",
  },
  applicationName: site.brand,
  robots: { index: true, follow: true },
  verification: {
    other: { "naver-site-verification": site.naver },
  },
  icons: {
    icon: { url: "/icon.png", type: "image/png" },
    apple: "/apple-icon.png",
  },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(site.business) }}
        />
      </head>
      <body>
        <header className="top" dangerouslySetInnerHTML={{ __html: site.header }} />
        <main id="main-content">{children}</main>
        <footer className="foot" dangerouslySetInnerHTML={{ __html: site.footer }} />
        <div dangerouslySetInnerHTML={{ __html: site.floatCall }} />
      </body>
    </html>
  );
}
