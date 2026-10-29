
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "주차119 | 주차라인 도색·카스토퍼·차선규제봉·볼라드 설치",
    template: "%s | 주차119",
  },
  description:
    "주차119는 주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치를 전문으로 합니다. 서울·경기·인천·충남·충북 시공 상담. 010-9413-4686",
  keywords: [
    "주차119",
    "주차라인 도색",
    "주차장 라인 도색",
    "주차선 도색",
    "주차구획선 도색",
    "카스토퍼 설치",
    "주차블록 설치",
    "차선규제봉 설치",
    "탄력봉 설치",
    "볼라드 설치",
    "주차장 시설물 시공",
  ],
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    title: "주차119 | 주차장 시설물 전문 시공",
    description:
      "주차라인 도색부터 카스토퍼·차선규제봉·볼라드 설치까지. 서울·경기·인천·충남·충북 시공.",
    url: SITE,
    siteName: "주차119",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SERVICES = [
  { name: "주차라인 도색", href: "/service/parking-line" },
  { name: "카스토퍼 설치", href: "/service/car-stopper" },
  { name: "차선규제봉 설치", href: "/service/traffic-post" },
  { name: "볼라드 설치", href: "/service/bollard" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo">
              주차<span>119</span>
            </Link>

            <nav className="desktop-nav" aria-label="주요 메뉴">
              {SERVICES.map((service) => (
                <Link key={service.href} href={service.href}>
                  {service.name}
                </Link>
              ))}
            </nav>

            <a className="header-call" href="tel:01094134686">
              전화 상담
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <strong>주차119</strong>
            <p>
              주차라인 도색 · 카스토퍼 · 차선규제봉 · 볼라드
            </p>
            <p>시공지역: 서울 · 경기 · 인천 · 충남 · 충북</p>
            <p>
              대표전화:{" "}
              <a href="tel:01094134686">{PHONE}</a>
            </p>
            <small>© {new Date().getFullYear()} 주차119.</small>
          </div>
        </footer>

        <a
          href="tel:01094134686"
          className="mobile-call"
          aria-label="주차119 전화 상담"
        >
          전화 상담 010-9413-4686
        </a>
      </body>
    </html>
  );
}
