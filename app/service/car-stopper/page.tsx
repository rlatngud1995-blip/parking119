
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const IMAGE =
  "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png";

export const metadata: Metadata = {
  title: "카스토퍼 설치 | 주차블록 설치·교체",
  description:
    "주차119 카스토퍼 설치 전문. 아파트, 상가, 공장, 건물 주차장의 주차블록 신규 설치 및 파손된 카스토퍼 교체. 서울·경기·인천·충남·충북 시공 상담. 010-9413-4686",
  keywords: [
    "카스토퍼 설치",
    "카스토퍼 교체",
    "주차블록 설치",
    "주차블록 교체",
    "주차스토퍼 설치",
    "주차장 카스토퍼",
    "주차장 안전시설물",
  ],
  alternates: {
    canonical: `${SITE}/service/car-stopper`,
  },
  openGraph: {
    title: "카스토퍼 설치 및 주차블록 교체 | 주차119",
    description:
      "주차장 카스토퍼 신규 설치와 파손된 주차블록 교체. 서울·경기·인천·충남·충북 시공 상담.",
    url: `${SITE}/service/car-stopper`,
    images: [{ url: IMAGE }],
    type: "website",
  },
};

const WORK_TYPES = [
  {
    title: "카스토퍼 신규 설치",
    description:
      "새로운 주차구역에 차량 정지 위치를 안내하는 카스토퍼를 설치합니다.",
  },
  {
    title: "파손 카스토퍼 교체",
    description:
      "깨지거나 고정 상태가 불량한 기존 주차블록을 확인하고 교체 방법을 안내합니다.",
  },
  {
    title: "주차블록 재설치",
    description:
      "기존 카스토퍼의 위치와 고정 상태를 확인하여 재설치 가능 여부를 상담합니다.",
  },
  {
    title: "주차장 시설물 보수",
    description:
      "아파트, 상가, 공장 등 주차장 환경에 맞는 카스토퍼 설치 및 보수를 진행합니다.",
  },
];

const FAQ = [
  {
    question: "카스토퍼는 어떤 곳에 설치할 수 있나요?",
    answer:
      "아파트, 빌라, 상가, 공장, 건물 주차장 등 다양한 주차구역에 설치할 수 있습니다. 바닥 상태와 설치 위치에 따라 작업 방법이 달라집니다.",
  },
  {
    question: "기존에 파손된 주차블록도 교체할 수 있나요?",
    answer:
      "네. 기존 카스토퍼의 파손 상태와 고정 부위를 확인한 뒤 철거 및 교체 방법을 안내합니다.",
  },
  {
    question: "카스토퍼 설치 비용은 얼마인가요?",
    answer:
      "설치 수량, 제품 종류, 바닥 재질, 기존 제품 철거 여부, 현장 위치 등에 따라 견적이 달라집니다.",
  },
  {
    question: "카스토퍼 설치 가능 지역은 어디인가요?",
    answer:
      "서울, 경기, 인천, 충남, 충북 지역에서 설치 상담이 가능합니다. 정확한 일정은 전화로 문의해 주세요.",
  },
];

export default function CarStopperPage() {
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
            PARKING119 · CAR STOPPER
          </p>

          <h1>카스토퍼 설치 및 교체</h1>

          <p>
            주차블록 설치 · 주차스토퍼 교체
            · 파손 카스토퍼 보수
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
                alt="주차119 주차장 카스토퍼 설치 시공 전후 사진"
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
                카스토퍼 설치
              </h2>

              <p>
                카스토퍼는 차량이 주차구역에서
                지나치게 전진하거나 후진하지 않도록
                정지 위치를 안내하는 주차장 시설물입니다.
              </p>

              <p>
                기존 주차블록이 파손되거나
                고정 상태가 불량한 경우에는
                현장 바닥 상태와 설치 위치를
                확인한 후 적절한 교체 방법을
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
            <h2>카스토퍼 설치 작업 안내</h2>
            <p>
              설치 수량과 현장 바닥 상태에 맞춰
              작업 방법을 안내합니다.
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
            <h2>카스토퍼 설치 가능 지역</h2>
            <p>
              서울·경기·인천·충남·충북
              주차블록 설치 및 교체 상담
            </p>
          </div>

          <div className="area-links">
            <Link href="/area/seoul">
              서울 카스토퍼 설치
            </Link>
            <Link href="/area/gyeonggi">
              경기 카스토퍼 설치
            </Link>
            <Link href="/area/incheon">
              인천 카스토퍼 설치
            </Link>
            <Link href="/area/chungnam">
              충남 카스토퍼 설치
            </Link>
            <Link href="/area/chungbuk">
              충북 카스토퍼 설치
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>카스토퍼 설치 자주 묻는 질문</h2>
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
        <h2>카스토퍼 설치 견적 상담</h2>
        <p>
          설치 위치, 수량, 현장 사진을
          준비하시면 상담에 도움이 됩니다.
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
