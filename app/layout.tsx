
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

const SITE = "https://parking119.com";
const BRAND = "주차119";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const FAVICON =
  "/4B52D3F3-7C49-442C-AFAB-43E3127E5C0E.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  title: {
    default:
      "주차119 | 주차라인 도색·카스토퍼·차선규제봉·볼라드 시공",
    template: "%s | 주차119",
  },

  description:
    "주차119는 주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치 전문 시공업체입니다. 서울·경기·인천·충남·충북 시공 상담 및 견적 문의.",

  keywords: [
    "주차119",
    "주차라인 도색",
    "주차장 라인 도색",
    "주차선 도색",
    "주차장 도색",
    "카스토퍼 설치",
    "주차블럭 설치",
    "차선규제봉 설치",
    "탄력봉 설치",
    "볼라드 설치",
    "주차장 시설물 시공",
    "서울 주차라인 도색",
    "경기 주차라인 도색",
    "인천 주차라인 도색",
    "충남 주차라인 도색",
    "충북 주차라인 도색",
  ],

  alternates: {
    canonical: SITE,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    other: {
      "naver-site-verification":
        "c2f52a53f7338ae973abfbef582f8688b9ebaea0",
    },
  },

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: FAVICON,
    apple: FAVICON,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE,
    siteName: BRAND,
    title:
      "주차119 | 주차라인 도색·카스토퍼·차선규제봉·볼라드 시공",
    description:
      "서울·경기·인천·충남·충북 주차라인 도색 및 주차장 시설물 설치 전문. 주차119 시공 상담.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SERVICES = [
  {
    name: "주차라인 도색",
    href: "/service/parking-line",
  },
  {
    name: "카스토퍼 설치",
    href: "/service/car-stopper",
  },
  {
    name: "차선규제봉 설치",
    href: "/service/traffic-post",
  },
  {
    name: "볼라드 설치",
    href: "/service/bollard",
  },
];

const REGIONS = [
  {
    name: "서울",
    href: "/area/seoul",
  },
  {
    name: "경기",
    href: "/area/gyeonggi",
  },
  {
    name: "인천",
    href: "/area/incheon",
  },
  {
    name: "충남",
    href: "/area/chungnam",
  },
  {
    name: "충북",
    href: "/area/chungbuk",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BRAND,
    url: SITE,
    telephone: PHONE,
    description:
      "주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치 전문 시공",
    areaServed: [
      "서울특별시",
      "경기도",
      "인천광역시",
      "충청남도",
      "충청북도",
    ].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "주차119 시공 서비스",
      itemListElement: SERVICES.map((service) => ({
        "@type": "OfferCatalog",
        name: service.name,
        url: `${SITE}${service.href}`,
      })),
    },
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              businessSchema
            ).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link
              href="/"
              className="logo"
              aria-label="주차119 홈으로 이동"
            >
              주차119
            </Link>

            <nav
              className="desktop-nav"
              aria-label="주요 서비스"
            >
              <Link href="/">홈</Link>

              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                >
                  {service.name}
                </Link>
              ))}
            </nav>

            <a
              href={TEL}
              className="header-call"
              aria-label={`전화 상담 ${PHONE}`}
            >
              {PHONE}
            </a>
          </div>
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <strong>{BRAND}</strong>

              <p>
                주차라인 도색 · 카스토퍼 설치 ·
                차선규제봉 설치 · 볼라드 설치
              </p>

              <p>
                시공 가능 지역
                <br />
                서울 · 경기 · 인천 · 충남 · 충북
              </p>

              <p>
                상담 전화{" "}
                <a href={TEL}>{PHONE}</a>
              </p>
            </div>

            <div>
              <strong>서비스 안내</strong>

              <nav aria-label="하단 서비스 메뉴">
                {SERVICES.map((service) => (
                  <p key={service.href}>
                    <Link href={service.href}>
                      {service.name}
                    </Link>
                  </p>
                ))}
              </nav>
            </div>

            <div>
              <strong>시공 지역</strong>

              <nav aria-label="하단 지역 메뉴">
                {REGIONS.map((region) => (
                  <p key={region.href}>
                    <Link href={region.href}>
                      {region.name}
                    </Link>
                  </p>
                ))}
              </nav>
            </div>
          </div>
        </footer>

        <a
          href={TEL}
          className="mobile-call"
          aria-label={`주차119 전화 상담 ${PHONE}`}
        >
          전화 상담 {PHONE}
        </a>
      </body>
    </html>
  );
}
