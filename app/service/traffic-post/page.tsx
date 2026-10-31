
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const IMAGE =
  "/2ECD662C-1E98-469A-986F-D122566EDBD0.png";

export const metadata: Metadata = {
  title: {
    absolute:
      "차선규제봉 설치·교체·수리·시공 | 주차119",
  },
  description:
    "차선규제봉, 탄력봉, 시선유도봉 설치·교체·수리 및 시공 안내. 서울·경기·인천·충남·충북 지역별 주차장과 진입로 시설물 견적 상담. 주차119 010-9413-4686.",
  keywords: [
    "차선규제봉 설치",
    "차선규제봉 교체",
    "차선규제봉 수리",
    "차선규제봉 시공",
    "탄력봉 설치",
    "탄력봉 교체",
    "탄력봉 수리",
    "시선유도봉 설치",
    "시선유도봉 교체",
    "차선규제봉 시공 후기",
  ],
  alternates: {
    canonical: `${SITE}/service/traffic-post`,
  },
  openGraph: {
    title:
      "차선규제봉 설치·교체·수리·시공 | 주차119",
    description:
      "차선규제봉·탄력봉·시선유도봉 신규 설치, 파손 제품 교체 및 보수 상담.",
    url: `${SITE}/service/traffic-post`,
    images: [{ url: IMAGE }],
    type: "website",
  },
};

type District = {
  name: string;
  slug: string;
};

type Region = {
  name: string;
  slug: string;
  districts: District[];
};

const REGIONS: Region[] = [
  {
    name: "서울",
    slug: "seoul",
    districts: [
      ["강남구", "gangnam"],
      ["서초구", "seocho"],
      ["송파구", "songpa"],
      ["강동구", "gangdong"],
      ["강서구", "gangseo"],
      ["양천구", "yangcheon"],
      ["영등포구", "yeongdeungpo"],
      ["구로구", "guro"],
      ["금천구", "geumcheon"],
      ["관악구", "gwanak"],
      ["동작구", "dongjak"],
      ["마포구", "mapo"],
      ["용산구", "yongsan"],
      ["성동구", "seongdong"],
      ["광진구", "gwangjin"],
      ["중구", "jung"],
      ["종로구", "jongno"],
      ["서대문구", "seodaemun"],
      ["은평구", "eunpyeong"],
      ["성북구", "seongbuk"],
      ["강북구", "gangbuk"],
      ["도봉구", "dobong"],
      ["노원구", "nowon"],
      ["중랑구", "jungnang"],
      ["동대문구", "dongdaemun"],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    name: "경기",
    slug: "gyeonggi",
    districts: [
      ["수원시", "suwon"],
      ["성남시", "seongnam"],
      ["용인시", "yongin"],
      ["화성시", "hwaseong"],
      ["평택시", "pyeongtaek"],
      ["안성시", "anseong"],
      ["오산시", "osan"],
      ["안양시", "anyang"],
      ["군포시", "gunpo"],
      ["의왕시", "uiwang"],
      ["과천시", "gwacheon"],
      ["광명시", "gwangmyeong"],
      ["부천시", "bucheon"],
      ["시흥시", "siheung"],
      ["안산시", "ansan"],
      ["김포시", "gimpo"],
      ["고양시", "goyang"],
      ["파주시", "paju"],
      ["양주시", "yangju"],
      ["의정부시", "uijeongbu"],
      ["동두천시", "dongducheon"],
      ["포천시", "pocheon"],
      ["남양주시", "namyangju"],
      ["구리시", "guri"],
      ["하남시", "hanam"],
      ["광주시", "gwangju"],
      ["이천시", "icheon"],
      ["여주시", "yeoju"],
      ["양평군", "yangpyeong"],
      ["가평군", "gapyeong"],
      ["연천군", "yeoncheon"],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    name: "인천",
    slug: "incheon",
    districts: [
      ["중구", "jung"],
      ["동구", "dong"],
      ["미추홀구", "michuhol"],
      ["연수구", "yeonsu"],
      ["남동구", "namdong"],
      ["부평구", "bupyeong"],
      ["계양구", "gyeyang"],
      ["서구", "seo"],
      ["강화군", "ganghwa"],
      ["옹진군", "ongjin"],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    name: "충남",
    slug: "chungnam",
    districts: [
      ["천안시", "cheonan"],
      ["아산시", "asan"],
      ["공주시", "gongju"],
      ["보령시", "boryeong"],
      ["서산시", "seosan"],
      ["논산시", "nonsan"],
      ["계룡시", "gyeryong"],
      ["당진시", "dangjin"],
      ["금산군", "geumsan"],
      ["부여군", "buyeo"],
      ["서천군", "seocheon"],
      ["청양군", "cheongyang"],
      ["홍성군", "hongseong"],
      ["예산군", "yesan"],
      ["태안군", "taean"],
    ].map(([name, slug]) => ({ name, slug })),
  },
  {
    name: "충북",
    slug: "chungbuk",
    districts: [
      ["청주시", "cheongju"],
      ["충주시", "chungju"],
      ["제천시", "jecheon"],
      ["보은군", "boeun"],
      ["옥천군", "okcheon"],
      ["영동군", "yeongdong"],
      ["증평군", "jeungpyeong"],
      ["진천군", "jincheon"],
      ["괴산군", "goesan"],
      ["음성군", "eumseong"],
      ["단양군", "danyang"],
    ].map(([name, slug]) => ({ name, slug })),
  },
];

const WORK_TYPES = [
  {
    title: "차선규제봉 신규 설치",
    description:
      "주차장이나 차량 통행구역에서 차로 경계를 구분하고 운전자의 시인성을 높이기 위한 신규 설치를 상담합니다.",
  },
  {
    title: "차선규제봉 교체",
    description:
      "차량 충돌이나 노후화로 파손된 탄력봉의 규격과 고정 상태를 확인하고 철거 및 교체 방법을 안내합니다.",
  },
  {
    title: "차선규제봉 수리·보수",
    description:
      "규제봉 흔들림, 고정 볼트 풀림, 기초부 손상 등을 확인하고 재고정 또는 교체 가능 여부를 검토합니다.",
  },
  {
    title: "탄력봉·시선유도봉 시공",
    description:
      "아파트, 상가, 공장, 건물 진입로 등 차량 동선과 주변 시설물을 고려해 설치 위치와 수량을 상담합니다.",
  },
];

const PROCESS = [
  "현장 위치와 차량 통행 환경 확인",
  "설치·교체·수리 요청 내용 파악",
  "규제봉 수량과 제품 규격 검토",
  "바닥 재질 및 기존 고정 부위 확인",
  "차량 통행과 작업구역 통제 조건 협의",
  "시공 후 고정 상태와 주변 간섭 여부 확인",
];

const FAQ = [
  {
    question: "차선규제봉과 탄력봉은 같은 제품인가요?",
    answer:
      "현장에서 차선규제봉을 탄력봉 또는 시선유도봉이라고 부르기도 합니다. 다만 제품별 재질, 규격, 용도는 다를 수 있어 설치 목적에 맞는 제품을 확인해야 합니다.",
  },
  {
    question: "파손된 차선규제봉만 교체할 수 있나요?",
    answer:
      "부분 교체도 상담 가능합니다. 기존 제품의 규격과 바닥 고정 상태, 앵커 손상 여부에 따라 작업 방법이 달라집니다.",
  },
  {
    question: "흔들리는 탄력봉은 수리할 수 있나요?",
    answer:
      "고정 볼트나 기초부 상태에 따라 재고정이 가능한 경우도 있습니다. 제품 자체가 심하게 파손된 경우에는 교체가 필요할 수 있습니다.",
  },
  {
    question: "차선규제봉 설치 비용은 어떻게 결정되나요?",
    answer:
      "제품 규격, 설치 수량, 바닥 재질, 기존 시설물 철거 여부, 현장 접근성 및 작업 조건에 따라 견적이 달라집니다.",
  },
  {
    question: "차선규제봉 설치 전 확인할 사항은 무엇인가요?",
    answer:
      "차량 진입 방향, 회전 공간, 보행자 이동 경로, 설치 간격과 바닥 상태 등을 확인하는 것이 좋습니다. 공용도로 등에는 별도 관리 주체의 승인이나 관련 기준 확인이 필요할 수 있습니다.",
  },
  {
    question: "차선규제봉 시공 후기를 확인할 수 있나요?",
    answer:
      "실제 작업 사진이나 고객 후기가 확보된 사례부터 안내합니다. 특정 지역의 시공 이력은 상담 시 문의해 주세요.",
  },
];

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: SITE,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "차선규제봉 설치·교체",
      item: `${SITE}/service/traffic-post`,
    },
  ],
};

export default function TrafficPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

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

          <h1>
            차선규제봉 설치 · 교체
            <br />
            수리 · 시공 안내
          </h1>

          <p>
            탄력봉 설치 · 시선유도봉 교체
            · 파손 규제봉 보수
          </p>

          <p style={{ marginTop: 14 }}>
            서울 · 경기 · 인천 · 충남 · 충북
            지역별 시공 상담
          </p>

          <a
            href="#service-regions"
            className="btn btn-primary"
            style={{ marginTop: 20 }}
          >
            시공 지역 선택하기
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <Image
              src={IMAGE}
              alt="차선규제봉과 탄력봉 설치 및 교체 안내 이미지"
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                차량 동선을 고려한
                <br />
                차선규제봉 설치
              </h2>

              <p>
                차선규제봉은 차량 통행구역의
                경계를 구분하고 운전자가
                진행 방향과 주변 시설물을
                인식하도록 돕는 시설물입니다.
              </p>

              <p>
                주차장 진입로, 건물 출입구,
                차량 통행구역 등의 현장 조건에
                맞춰 신규 설치와 기존 제품
                교체를 상담합니다.
              </p>

              <p>
                기존 탄력봉이 흔들리거나
                파손된 경우에는 제품 상태와
                바닥 고정 부위를 함께 확인해
                보수 또는 교체 방법을 검토합니다.
              </p>

              <a
                href={TEL}
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
            <h2>차선규제봉 설치·교체 작업</h2>
            <p>
              신규 설치부터 파손 제품 교체와
              고정 부위 보수까지 안내합니다.
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
                  background: "#fff",
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
                    lineHeight: 1.9,
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
            <h2>차선규제봉 시공 진행 안내</h2>
            <p>
              현장 환경과 제품 규격에 따라
              실제 작업 과정은 달라질 수 있습니다.
            </p>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              padding: 26,
              background: "#fff",
              border: "1px solid #e8eaed",
              borderRadius: 12,
            }}
          >
            <ol
              style={{
                paddingLeft: 22,
                lineHeight: 2.2,
                color: "#626b77",
              }}
            >
              {PROCESS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="section section-light"
        id="service-regions"
      >
        <div className="container">
          <div className="section-heading">
            <h2>차선규제봉 지역별 설치·교체 안내</h2>
            <p>
              원하는 지역을 선택하면
              해당 시·군·구의 시공 안내 페이지로
              이동할 수 있습니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            {REGIONS.map((region) => (
              <details
                key={region.slug}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e5e9",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "20px 22px",
                    cursor: "pointer",
                    fontWeight: 800,
                    fontSize: 18,
                  }}
                >
                  {region.name} 차선규제봉 시공
                  <span
                    style={{
                      marginLeft: 8,
                      color: "#68707b",
                      fontWeight: 400,
                      fontSize: 13,
                    }}
                  >
                    ({region.districts.length}개 지역)
                  </span>
                </summary>

                <div
                  style={{
                    padding: "0 20px 22px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: "#68707b",
                      lineHeight: 1.8,
                    }}
                  >
                    {region.name} 지역의 차선규제봉,
                    탄력봉, 시선유도봉 설치·교체·수리
                    상담 안내입니다.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(2, minmax(0, 1fr))",
                      gap: 9,
                    }}
                  >
                    {region.districts.map(
                      (district) => (
                        <Link
                          key={district.slug}
                          href={`/area/${region.slug}/${district.slug}`}
                          style={{
                            display: "block",
                            padding: "11px 8px",
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#222",
                            background: "#f5f6f8",
                            borderRadius: 7,
                            textDecoration: "none",
                          }}
                        >
                          {district.name}
                        </Link>
                      )
                    )}
                  </div>

                  <p style={{ marginTop: 20 }}>
                    <Link
                      href={`/area/${region.slug}`}
                      style={{
                        fontWeight: 700,
                        color: "#222",
                      }}
                    >
                      {region.name} 전체 지역 보기 →
                    </Link>
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              fontSize: 14,
              color: "#68707b",
              lineHeight: 1.8,
            }}
          >
            지역을 선택하면 주차라인 도색,
            카스토퍼, 차선규제봉, 볼라드를
            함께 안내하는 지역별 페이지로 이동합니다.
          </p>
        </div>
      </section>

      <section className="section">
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
                    lineHeight: 1.9,
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>차선규제봉 시공사례·후기 안내</h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              textAlign: "center",
              lineHeight: 1.9,
              color: "#626b77",
            }}
          >
            <p>
              실제 차선규제봉 설치·교체 사진과
              고객 후기는 확인 가능한 자료를
              기준으로 안내합니다.
            </p>

            <p>
              특정 지역의 시공 이력이나
              작업 가능 여부는 전화로 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>차선규제봉 설치·교체·수리 상담</h2>

        <p>
          현장 주소, 제품 수량, 파손 상태,
          바닥 및 기존 고정 부위 사진을
          준비하면 상담에 도움이 됩니다.
        </p>

        <a
          href={TEL}
          className="btn btn-primary"
        >
          {PHONE}
        </a>
      </section>
    </>
  );
}
