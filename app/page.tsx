
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "주차119 | 주차라인 도색·주차장 안전시설물 설치",
  description:
    "주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치 전문 주차119. 서울·경기·인천·충남·충북 시공 상담. 010-9413-4686",
  alternates: {
    canonical: "https://parking119.com",
  },
};

const SERVICES = [
  {
    title: "주차라인 도색",
    description:
      "아파트, 상가, 공장, 건물 주차장의 신규 주차라인 도색 및 기존 주차선 재도색.",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
    href: "/service/parking-line",
    alt: "주차라인 도색 시공 전후 사진",
  },
  {
    title: "카스토퍼 설치",
    description:
      "주차장 차량 위치를 안전하게 유지하는 카스토퍼 신규 설치 및 파손 제품 교체.",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
    href: "/service/car-stopper",
    alt: "주차장 카스토퍼 설치 시공 전후",
  },
  {
    title: "차선규제봉 설치",
    description:
      "주차장과 도로의 차량 진입 및 통행 구역을 구분하는 차선규제봉 설치와 교체.",
    image:
      "/2ECD662C-1E98-469A-986F-D12256EDBDD0.png",
    href: "/service/traffic-post",
    alt: "차선규제봉 설치 시공 전후",
  },
  {
    title: "볼라드 설치",
    description:
      "차량 진입 방지와 보행자 안전을 위한 볼라드 신규 설치 및 교체.",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
    href: "/service/bollard",
    alt: "주차장 차량진입 방지 볼라드 설치",
  },
];

const AREAS = [
  { name: "서울", slug: "seoul" },
  { name: "경기", slug: "gyeonggi" },
  { name: "인천", slug: "incheon" },
  { name: "충남", slug: "chungnam" },
  { name: "충북", slug: "chungbuk" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-label">
            PARKING119 · 주차장 시설물 전문
          </span>

          <h1>
            주차라인 도색부터
            <br />
            주차장 안전시설물 설치까지
          </h1>

          <p>
            주차라인 도색 · 카스토퍼 · 차선규제봉 · 볼라드
            <br />
            서울 · 경기 · 인천 · 충남 · 충북
            <br />
            현장 상황에 맞는 시공을 안내해 드립니다.
          </p>

          <div className="hero-actions">
            <a
              href="tel:01094134686"
              className="btn btn-primary"
            >
              전화 상담 010-9413-4686
            </a>

            <a href="#services" className="btn btn-outline">
              시공 서비스 보기
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>주차119 주요 시공 서비스</h2>
            <p>
              주차장 도색부터 안전시설물 설치까지
              필요한 시공을 확인하세요.
            </p>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => (
              <Link
                href={service.href}
                className="service-card"
                key={service.href}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={700}
                  height={525}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                  }}
                />

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link">
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>주차장 시설물 시공 안내</h2>
            <p>
              주차장 환경과 설치 목적에 맞춰
              시공 방법을 상담해 드립니다.
            </p>
          </div>

          <div className="content-grid">
            <div>
              <Image
                src="/B3F40103-F8FC-48AA-9110-5BEE366D5031.png"
                alt="주차119 주차구획선 도색 작업 사진"
                width={900}
                height={675}
                className="content-image"
              />
            </div>

            <div className="content-text">
              <h2>
                아파트부터 상가·공장까지
                <br />
                주차장 시공 상담
              </h2>

              <p>
                주차라인이 지워지거나 주차시설물이
                파손되었다면 현장 상태에 맞는
                보수와 교체가 필요합니다.
              </p>

              <p>
                주차119는 주차구획선 도색,
                카스토퍼 설치, 차선규제봉 설치,
                볼라드 설치를 안내합니다.
              </p>

              <a
                href="tel:01094134686"
                className="btn btn-primary"
              >
                시공 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>주차119 시공 가능 지역</h2>
            <p>
              서울 · 경기 · 인천 · 충남 · 충북
              지역별 시공 상담이 가능합니다.
            </p>
          </div>

          <div className="area-links">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}`}
              >
                {area.name} 시공 안내 →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>주차장 시공이 필요하신가요?</h2>
        <p>
          주차라인 도색부터 안전시설물 설치까지
          전화로 문의해 주세요.
        </p>

        <a
          href="tel:01094134686"
          className="btn btn-primary"
        >
          010-9413-4686
        </a>
      </section>
    </>
  );
}
