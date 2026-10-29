
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

const IMAGE =
  "/2ECD662C-1E98-469A-986F-D12256EDBDD0.png";

export const metadata: Metadata = {
  title: "차선규제봉 설치 | 탄력봉·시선유도봉 설치 및 교체",
  description:
    "주차119 차선규제봉 설치 전문. 주차장, 건물 진입로, 차량 통행구역의 탄력봉·시선유도봉 신규 설치 및 파손 제품 교체. 서울·경기·인천·충남·충북 상담. 010-9413-4686",
  keywords: [
    "차선규제봉 설치",
    "차선규제봉 교체",
    "탄력봉 설치",
    "탄력봉 교체",
    "시선유도봉 설치",
    "시선유도봉 교체",
    "주차장 차선규제봉",
    "차량진입 방지봉",
  ],
  alternates: {
    canonical: `${SITE}/service/traffic-post`,
  },
  openGraph: {
    title: "차선규제봉·탄력봉 설치 전문 | 주차119",
    description:
      "차선규제봉 신규 설치 및 파손된 탄력봉·시선유도봉 교체. 서울·경기·인천·충남·충북 시공 상담.",
    url: `${SITE}/service/traffic-post`,
    images: [{ url: IMAGE }],
    type: "website",
  },
};

const WORK_TYPES = [
  {
    title: "차선규제봉 신규 설치",
    description:
      "차량 통행구역과 주차구역을 구분하기 위해 현장 위치에 맞춰 차선규제봉을 설치합니다.",
  },
  {
    title: "파손된 탄력봉 교체",
    description:
      "차량 충돌이나 노후화로 파손된 탄력봉을 확인하고 철거 및 교체를 진행합니다.",
  },
  {
    title: "시선유도봉 설치",
    description:
      "차량 운전자가 통행 경계와 진행 방향을 쉽게 인식할 수 있도록 시선유도봉을 설치합니다.",
  },
  {
    title: "주차장 진입로 시설물",
    description:
      "아파트, 상가, 공장, 건물 진입로 등 차량 통행 환경에 맞는 규제봉 설치를 상담합니다.",
  },
];

const FAQ = [
  {
    question: "차선규제봉은 어떤 장소에 설치하나요?",
    answer:
      "주차장 진입로, 차량 통행구역, 건물 출입구 주변 등 차량의 이동 경로를 구분하거나 시인성을 높일 필요가 있는 장소에 설치합니다. 실제 설치 가능 여부는 현장 조건에 따라 달라집니다.",
  },
  {
    question: "기존에 파손된 탄력봉도 교체할 수 있나요?",
    answer:
      "네. 파손된 제품의 규격, 바닥 고정 상태, 기존 앵커 상태를 확인한 후 교체 방법을 안내합니다.",
  },
  {
    question: "차선규제봉 설치 비용은 얼마인가요?",
    answer:
      "설치 수량, 제품 규격, 바닥 재질, 기존 제품 철거 여부 및 현장 위치에 따라 견적이 달라집니다.",
  },
  {
    question: "차선규제봉 설치 가능 지역은 어디인가요?",
    answer:
      "서울, 경기, 인천, 충남, 충북 지역에서 차선규제봉 설치 및 교체 상담이 가능합니다.",
  },
];

export default function TrafficPostPage() {
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
            PARKING119 · TRAFFIC POST
          </p>

          <h1>차선규제봉 설치 및 교체</h1>

          <p>
            차선규제봉 · 탄력봉 · 시선유도봉
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
                alt="주차119 차선규제봉 및 탄력봉 설치 시공 전후 사진"
                width={900}
                height={675}
                className="content-image"
                priority
              />
            </div>

            <div className="content-text">
              <h2>
                안전한 차량 통행을 위한
                <br />
                차선규제봉 설치
              </h2>

              <p>
                차선규제봉은 차량의 통행구역을
                구분하고 운전자가 도로와 주차장
                경계를 쉽게 인식할 수 있도록
                돕는 안전시설물입니다.
              </p>

              <p>
                주차장 진입로, 건물 출입구,
                차량 통행구역 등 현장 환경에
                맞춰 탄력봉과 시선유도봉
                설치 및 교체를 상담합니다.
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
            <h2>차선규제봉 시공 안내</h2>
            <p>
              신규 설치부터 기존 파손 제품 교체까지
              현장 상태에 맞춰 상담합니다.
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
            <h2>차선규제봉 설치 가능 지역</h2>
            <p>
              서울·경기·인천·충남·충북
              차선규제봉 설치 및 교체 상담
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
                {name} 차선규제봉 설치
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>차선규제봉 자주 묻는 질문</h2>
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
        <h2>차선규제봉 설치 견적 상담</h2>

        <p>
          설치 위치와 수량, 현장 상태를
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
