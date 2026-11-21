import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export type PageData = {
  title: string;
  description: string;
  body: string;
  ld: unknown[];
  priority: number;
};

export type SiteData = {
  site: string;
  brand: string;
  header: string;
  footer: string;
  floatCall: string;
  notFound: string;
  business: unknown;
  naver: string;
  lastmod: string;
  pages: Record<string, PageData>;
};

let cache: SiteData | null = null;

// 페이지 내용은 tools/site-generator/build.py 가 만든 data/site.json 에서 읽습니다.
export function getSite(): SiteData {
  if (!cache) {
    const file = path.join(process.cwd(), "data", "site.json");
    cache = JSON.parse(fs.readFileSync(file, "utf8")) as SiteData;
  }
  return cache;
}

export function getPage(p: string): PageData | undefined {
  return getSite().pages[p];
}

export function absoluteUrl(p: string): string {
  return getSite().site + (p === "/" ? "" : p);
}

export function pageMetadata(p: string): Metadata {
  const page = getPage(p);
  if (!page) return {};
  const url = absoluteUrl(p);
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: getSite().brand,
      url,
      title: page.title,
      description: page.description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/og.png"],
    },
  };
}

/** 주어진 깊이의 /area/... 경로 목록 (generateStaticParams 용) */
export function areaPaths(depth: 1 | 2 | 3): string[][] {
  return Object.keys(getSite().pages)
    .filter((p) => p.startsWith("/area/"))
    .map((p) => p.split("/").slice(2))
    .filter((parts) => parts.length === depth);
}

export function servicePaths(): string[] {
  return Object.keys(getSite().pages)
    .filter((p) => p.startsWith("/service/"))
    .map((p) => p.split("/")[2]);
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
