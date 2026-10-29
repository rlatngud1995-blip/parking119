
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

const IMAGE =
  "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png";

export const metadata: Metadata = {
  title: "주차라인 도색 | 주차장 라인·주차선 도색 전문",
  description:
    "주차119 주차라인 도색 시공 안내. 아파트, 상가, 공장, 건물 주차장의 주차구획선 신규 도색 및 기존 주차선 재도색. 서울·경기·인천·충남·충북 상담. 010-9413-4686",
  keywords: [
    "주차라인 도색",
    "주차장 라인 도색",
    "주차선 도색",
    "주차구획선 도색",
    "주차장 도색",
    "주차라인 재도색",
    "아파트 주차라인 도색",
    "상가 주차장 도색",
  ],
  alternates: {
    canonical: `${SITE}/service/parking-line`,
  },
  openGraph: {
    title: "주차라인 도색 전문 시공 | 주차119",
    description:
      "주차구획선 신규 도색 및 기존 주차라인 재도색. 서울·경기·인천·충남·충북 시공 상담.",
    url: `${SITE}/service/parking-line`,
    images: [{ url: IMAGE }],
    type: "website",
  },
};

const WORK_TYPES = [
  {
    title: "신규 주차라인 도색",
    description:
      "새롭게 조성된 주차장에 주차구획선과 차량 주차 위치를 표시하는 작업입니다.",
  },
  {
    title: "기존 주차라인 재도색",
    description:
      "오래되거나 색상이 흐려진 주차선을 다시 도색하여 주차구역을 명확하게 표시합니다.",
  },
  {
    title: "아파트·상가 주차장 도색",
    description:
      "공동주택, 상가, 업무시설 등 다양한 주차장 환경에 맞춰 주차라인 도색을 상담합니다.",
  },
  {
    title: "장애인 주차구역 도색",
    description:
      "장애인 전용 주차구역의 바닥 표시와 구획선 도색을 현장 기준에 맞춰 진행합니다.",
  },
];

const FAQ = [
  {
    question: "주차라인 도색은 어떤 곳에서 가능한가요?",
    answer:
      "아파트, 빌라, 상가, 공장, 사무실, 건물 주차장 등 다양한 현장의 주차라인 도색을 상담할 수 있습니다.",
  },
  {
    question: "기존 주차선 위에 다시 도색할 수 있나요?",
    answer:
      "기존 라인의 상태와 바닥 재질에 따라 재도색 가능 여부 및 작업 방법이 달라질 수 있습니다. 현장 사진을 통해 먼저 상담해 주세요.",
  },
  {
    question: "주차라인 도색 비용은 어떻게 결정되나요?",
    answer:
      "도색 면적, 주차면 수, 바닥 상태, 기존 라인 제거 여부, 현장 위치 등에 따라 비용이 달라집니다.",
  },
  {
    question: "어느 지역에서 시공하나요?",
    answer:
      "서울, 경기, 인천, 충남, 충북 지역의 주차라인 도색을 상담하고 있습니다. 상세 지역과 일정은 전화로 문의해 주세요.",
  },
];

export default function ParkingLinePage() {
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
            PARKING119 · PARKING LINE
          </p>

          <h1>주차라인 도색 전문 시공</h1>

          <p>
            주차장 라인 도색 · 주차구획선 도색
            · 기존 주차선 재도색
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
                alt="주차119 주차라인 도색 시공 전후 사진"
                width={900}
                height={675}
                className="content-image"
                priority
              />
            </div>

            <div className="content-text">
              <h2>
                주차장 환경에 맞는
                <br />
                주차라인 도색
              </h2>

              <p>
                주차라인은 차량의 주차 위치를
                구분하고 주차장 공간을 효율적으로
                활용하는 데 필요한 시설입니다.
              </p>

              <p>
                기존 주차선이 지워지거나
                구획이 불분명한 경우,
                현장 바닥 상태와 도색 범위를
                확인하여 적절한 시공 방법을
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
            <h2>주차라인 도색 작업 안내</h2>
            <p>
              현장 상태와 필요한 작업 범위에 따라
              시공 방법이 달라집니다.
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
            <h2>주차라인 도색 시공지역</h2>
            <p>
              서울·경기·인천·충남·충북 지역의
              주차장 도색 상담이 가능합니다.
            </p>
          </div>

          <div className="area-links">
            <Link href="/area/seoul">
              서울 주차라인 도색
            </Link>
            <Link href="/area/gyeonggi">
              경기 주차라인 도색
            </Link>
            <Link href="/area/incheon">
              인천 주차라인 도색
            </Link>
            <Link href="/area/chungnam">
              충남 주차라인 도색
            </Link>
            <Link href="/area/chungbuk">
              충북 주차라인 도색
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>주차라인 도색 자주 묻는 질문</h2>
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
        <h2>주차라인 도색 견적 상담</h2>
        <p>
          주차장 위치, 주차면 수, 현장 상태를
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
