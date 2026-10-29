
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

const IMAGE =
  "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png";

export const metadata: Metadata = {
  title: "볼라드 설치 | 차량진입 방지봉 설치·교체",
  description:
    "주차119 볼라드 설치 전문. 차량진입 방지봉, 스텐 볼라드, 주차장 안전봉 신규 설치 및 파손 제품 교체. 서울·경기·인천·충남·충북 시공 상담. 010-9413-4686",
  keywords: [
    "볼라드 설치",
    "볼라드 교체",
    "차량진입 방지봉",
    "차량진입 방지봉 설치",
    "스텐 볼라드",
    "스테인리스 볼라드",
    "주차장 볼라드",
    "안전봉 설치",
  ],
  alternates: {
    canonical: `${SITE}/service/bollard`,
  },
  openGraph: {
    title: "볼라드·차량진입 방지봉 설치 | 주차119",
    description:
      "주차장 및 건물 주변 차량진입 방지봉, 스텐 볼라드 설치와 교체. 서울·경기·인천·충남·충북 시공 상담.",
    url: `${SITE}/service/bollard`,
    images: [{ url: IMAGE }],
    type: "website",
  },
};

const WORK_TYPES = [
  {
    title: "볼라드 신규 설치",
    description:
      "차량 진입을 제한하거나 보행 공간을 구분하기 위해 현장에 맞는 볼라드를 설치합니다.",
  },
  {
    title: "스테인리스 볼라드 설치",
    description:
      "건물 출입구와 보행로 등에 스테인리스 재질의 차량진입 방지봉 설치를 상담합니다.",
  },
  {
    title: "파손 볼라드 교체",
    description:
      "차량 충돌이나 노후화로 파손된 기존 볼라드의 상태를 확인하고 교체합니다.",
  },
  {
    title: "주차장 차량진입 방지시설",
    description:
      "아파트, 상가, 공장, 건물 주변의 차량 통행 및 보행 공간에 맞는 시설물 설치를 안내합니다.",
  },
];

const FAQ = [
  {
    question: "볼라드는 어떤 장소에 설치하나요?",
    answer:
      "주차장 출입구, 건물 주변, 보행로 경계 등 차량 진입을 제한하거나 통행 공간을 구분해야 하는 장소에 설치합니다. 설치 가능 여부는 현장 조건과 관련 기준에 따라 달라질 수 있습니다.",
  },
  {
    question: "기존 볼라드가 파손되었는데 교체할 수 있나요?",
    answer:
      "네. 기존 볼라드의 고정 방식과 바닥 상태를 확인한 뒤 철거 및 교체 방법을 안내합니다.",
  },
  {
    question: "볼라드 설치 비용은 얼마인가요?",
    answer:
      "제품 재질, 규격, 설치 수량, 바닥 타공 및 기초 작업 여부, 현장 위치 등에 따라 비용이 달라집니다.",
  },
  {
    question: "볼라드 설치 가능 지역은 어디인가요?",
    answer:
      "서울, 경기, 인천, 충남, 충북 지역에서 볼라드 신규 설치 및 교체 상담이 가능합니다.",
  },
];

export default function BollardPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p
            style={{
              color: "#b68a00",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            PARKING119 · BOLLARD
          </p>

          <h1>볼라드 설치 및 교체</h1>

          <p>
            차량진입 방지봉 · 스텐 볼라드
            · 주차장 안전시설물
            <br />
            서울 · 경기 · 인천 · 충남 · 충북
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <Image
                src={IMAGE}
                alt="주차119 차량진입 방지 볼라드 설치 사진"
                width={900}
                height={675}
                className="content-image"
                priority
              />
            </div>

            <div className="content-text">
              <h2>
                차량 진입 방지와
                <br />
                보행 공간 보호를 위한 볼라드
              </h2>

              <p>
                볼라드는 차량의 진입을 제한하고
                보행자 공간과 차량 통행구역을
                구분하는 데 사용되는 안전시설물입니다.
              </p>

              <p>
                주차장, 건물 출입구, 상가,
                보행로 주변 등 설치 위치와
                바닥 상태를 확인하여
                적절한 볼라드 시공 방법을
                안내합니다.
              </p>

              <a
                href="tel:01094134686"
                className="btn btn-primary"
              >
                전화 상담 {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>볼라드 설치 작업 안내</h2>
            <p>
              신규 설치부터 파손 제품 교체까지
              현장 조건에 맞춰 상담합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {WORK_TYPES.map((work) => (
              <article
                key={work.title}
                style={{
                  padding: 25,
                  background: "#ffffff",
                  border: "1px solid #e8eaed",
                  borderRadius: 10,
                }}
              >
                <h3
                  style={{
                    fontSize: 19,
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  {work.title}
                </h3>

                <p
                  style={{
                    color: "#68707b",
                    fontSize: 15,
                    margin: 0,
                  }}
                >
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>볼라드 설치 가능 지역</h2>
            <p>
              서울·경기·인천·충남·충북
              볼라드 설치 및 교체 상담
            </p>
          </div>

          <div className="area-links">
            {[
              ["서울", "seoul"],
              ["경기", "gyeonggi"],
              ["인천", "incheon"],
              ["충남", "chungnam"],
              ["충북", "chungbuk"],
            ].map(([name, slug]) => (
              <Link key={slug} href={`/area/${slug}`}>
                {name} 볼라드 설치
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>볼라드 설치 자주 묻는 질문</h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
            {FAQ.map((item) => (
              <details
                key={item.question}
                style={{
                  padding: "20px 0",
                  borderBottom: "1px solid #e0e3e7",
                }}
              >
                <summary
                  style={{
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  {item.question}
                </summary>

                <p
                  style={{
                    color: "#68707b",
                    marginTop: 14,
                    marginBottom: 0,
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>볼라드 설치 견적 상담</h2>

        <p>
          설치 장소, 수량, 바닥 상태를
          알려주시면 상담을 도와드립니다.
        </p>

        <a
          href="tel:01094134686"
          className="btn btn-primary"
        >
          {PHONE}
        </a>
      </section>
    </>
  );
}
