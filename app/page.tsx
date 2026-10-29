
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PHONE = "010-9413-4686";

export const metadata: Metadata = {
  title: "주차라인 도색·카스토퍼·차선규제봉·볼라드 설치",
  description:
    "주차119 주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치. 서울·경기·인천·충남·충북 주차장 시설물 시공 상담. 010-9413-4686",
  alternates: {
    canonical: "https://parking119.com/",
  },
};

const SERVICES = [
  {
    title: "주차라인 도색",
    description:
      "주차구획선 신규 도색, 기존 주차라인 재도색 및 주차장 바닥 표시 작업",
    href: "/service/parking-line",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
  },
  {
    title: "카스토퍼 설치",
    description:
      "주차블록 신규 설치, 파손된 카스토퍼 교체 및 주차장 시설물 보수",
    href: "/service/car-stopper",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
  },
  {
    title: "차선규제봉 설치",
    description:
      "탄력봉·시선유도봉 신규 설치 및 파손된 차선규제봉 교체",
    href: "/service/traffic-post",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
  },
  {
    title: "볼라드 설치",
    description:
      "차량진입 방지봉, 스테인리스 볼라드 신규 설치 및 교체",
    href: "/service/bollard",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
  },
];

const REGIONS = [
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
        <div className="container hero-inner">
          <p className="hero-label">
            PARKING119 · 주차장 시설물 전문
          </p>

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
              전화 상담 {PHONE}
            </a>

            <a
              href="#services"
              className="btn btn-outline"
            >
              시공 서비스 보기
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
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
                key={service.href}
                href={service.href}
                className="service-card"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} 작업 사진`}
                  width={800}
                  height={600}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
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
          <div className="content-grid">
            <Image
              src="/B3F40103-F8FC-48AA-9110-5BEE366D5031.png"
              alt="주차119 주차라인 도색 작업 사진"
              width={900}
              height={675}
              className="content-image"
            />

            <div className="content-text">
              <h2>
                주차장 환경에 맞는
                <br />
                시설물 시공
              </h2>

              <p>
                주차119는 주차라인 도색부터
                카스토퍼, 차선규제봉, 볼라드까지
                다양한 주차장 시설물 설치를
                상담합니다.
              </p>

              <p>
                아파트, 상가, 공장, 건물 주차장 등
                현장 상황과 필요한 작업 범위에 맞춰
                시공 방법을 안내해 드립니다.
              </p>

              <a
                href="tel:01094134686"
                className="btn btn-primary"
              >
                시공 문의 {PHONE}
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
              서울·경기·인천·충남·충북
              지역별 시공 안내를 확인하세요.
            </p>
          </div>

          <div className="area-links">
            {REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/area/${region.slug}`}
              >
                {region.name} 시공 안내
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>주차장 시설물 시공 상담</h2>

        <p>
          주차라인 도색 · 카스토퍼 설치
          <br />
          차선규제봉 설치 · 볼라드 설치
          <br />
          서울 · 경기 · 인천 · 충남 · 충북
        </p>

        <a
          href="tel:01094134686"
          className="btn btn-primary"
        >
          전화 상담 {PHONE}
        </a>
      </section>
    </>
  );
}
