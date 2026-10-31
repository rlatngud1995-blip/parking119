
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const IMAGE =
  "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png";

export const metadata: Metadata = {
  title: {
    absolute: "볼라드 설치·교체·수리·시공 | 주차119",
  },
  description:
    "볼라드 설치, 교체, 수리 및 시공 안내. 스텐 볼라드, 차량진입 방지봉, 주차장 안전시설물 설치와 파손 제품 교체. 서울·경기·인천·충남·충북 지역별 견적 상담. 010-9413-4686",
  keywords: [
    "볼라드 설치",
    "볼라드 교체",
    "볼라드 수리",
    "볼라드 시공",
    "볼라드 시공 후기",
    "스텐 볼라드 설치",
    "스테인리스 볼라드",
    "차량진입 방지봉 설치",
    "차량진입 방지봉 교체",
    "주차장 볼라드",
  ],
  alternates: {
    canonical: `${SITE}/service/bollard`,
  },
  openGraph: {
    title: "볼라드 설치·교체·수리·시공 | 주차119",
    description:
      "차량진입 방지봉과 스텐 볼라드 신규 설치, 파손 제품 교체 및 보수 상담. 서울·경기·인천·충남·충북.",
    url: `${SITE}/service/bollard`,
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
    title: "볼라드 신규 설치",
    description:
      "차량 진입을 제한하거나 보행 공간과 차량 통행구역을 구분하기 위한 볼라드 신규 설치를 상담합니다.",
  },
  {
    title: "스텐 볼라드 시공",
    description:
      "건물 출입구, 상가 주변, 주차장 경계 등에 스테인리스 볼라드 설치를 검토합니다. 제품 규격과 고정 방식은 현장 조건에 따라 결정됩니다.",
  },
  {
    title: "파손 볼라드 교체",
    description:
      "차량 충돌이나 노후화로 휘어지거나 파손된 볼라드의 고정 상태를 확인하고 철거 및 교체 방법을 안내합니다.",
  },
  {
    title: "볼라드 수리·보수",
    description:
      "볼라드 흔들림, 고정 부위 손상, 주변 바닥 파손 등을 확인하고 재고정 또는 교체 가능 여부를 검토합니다.",
  },
];

const PROCESS = [
  "현장 주소와 설치 목적 확인",
  "차량 동선 및 보행자 통행 공간 검토",
  "볼라드 재질·규격·설치 수량 상담",
  "바닥 재질과 기초·고정 상태 확인",
  "기존 시설물 철거 및 작업 범위 협의",
  "시공 후 고정 상태와 통행 간섭 여부 확인",
];

const FAQ = [
  {
    question: "볼라드는 어떤 장소에 설치할 수 있나요?",
    answer:
      "주차장 출입구, 건물 주변, 상가, 보행 공간 경계 등 차량의 진입을 제한하거나 구역을 구분할 필요가 있는 장소에 설치를 상담할 수 있습니다. 설치 가능 여부는 현장과 관련 기준에 따라 달라집니다.",
  },
  {
    question: "스텐 볼라드와 일반 볼라드는 어떻게 다른가요?",
    answer:
      "볼라드는 재질과 구조에 따라 여러 종류가 있습니다. 스테인리스 볼라드는 금속 재질 제품의 한 종류이며, 설치 목적에 따라 고정식·탈착식 등 적합한 구조를 검토해야 합니다.",
  },
  {
    question: "기존 볼라드가 파손되면 교체할 수 있나요?",
    answer:
      "기존 제품의 고정 방식, 기초부 손상 여부와 바닥 상태를 확인한 뒤 철거 및 교체 방법을 안내합니다.",
  },
  {
    question: "흔들리는 볼라드도 수리할 수 있나요?",
    answer:
      "고정 부위의 상태에 따라 재고정이 가능할 수 있습니다. 제품이나 기초부 손상이 심하면 교체 또는 별도 보수 작업이 필요할 수 있습니다.",
  },
  {
    question: "볼라드 설치 비용은 어떻게 결정되나요?",
    answer:
      "제품 재질과 규격, 설치 수량, 고정 방식, 바닥 타공 및 기초 작업 여부, 기존 제품 철거, 현장 위치 등에 따라 견적이 달라집니다.",
  },
  {
    question: "보행로에 볼라드를 설치할 때 주의할 점은 무엇인가요?",
    answer:
      "보행자와 휠체어 등의 이동에 지장이 없도록 통행 공간을 검토해야 합니다. 공공 보행로와 도로 등은 관련 설치 기준 및 관리 주체의 승인 여부를 확인해야 합니다.",
  },
  {
    question: "볼라드 시공 후기를 확인할 수 있나요?",
    answer:
      "실제 작업 사진과 고객 후기가 확보된 사례부터 안내합니다. 특정 지역의 작업 이력은 상담 시 별도로 문의해 주세요.",
  },
];

const BREADCRUMBS = {
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
      name: "볼라드 설치·교체",
      item: `${SITE}/service/bollard`,
    },
  ],
};

export default function BollardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BREADCRUMBS),
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
            PARKING119 · BOLLARD
          </p>

          <h1>
            볼라드 설치 · 교체
            <br />
            수리 · 시공 안내
          </h1>

          <p>
            차량진입 방지봉 · 스텐 볼라드
            · 주차장 안전시설물
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
              alt="주차장 볼라드 및 차량진입 방지봉 설치 안내 이미지"
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                차량 진입 방지와
                <br />
                보행 공간 보호를 위한 볼라드
              </h2>

              <p>
                볼라드는 차량의 진입을 제한하고
                보행 공간과 차량 통행구역을
                구분하는 데 사용되는 시설물입니다.
              </p>

              <p>
                주차장, 건물 출입구, 상가,
                보행로 주변 등 설치 위치와
                바닥 상태를 확인하여 적절한
                시공 방법을 안내합니다.
              </p>

              <p>
                기존 볼라드가 파손되거나
                고정 상태가 불량한 경우에는
                제품과 기초부 상태를 함께 확인해
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
            <h2>볼라드 설치·교체 작업 안내</h2>
            <p>
              신규 설치부터 파손 제품 교체,
              고정 부위 수리 및 보수까지
              작업별 확인사항을 안내합니다.
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
            <h2>볼라드 시공 진행 안내</h2>
            <p>
              설치 위치와 제품 종류에 따라
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
            <h2>볼라드 지역별 설치·교체 안내</h2>
            <p>
              시공을 문의할 지역을 선택한 뒤
              해당 시·군·구 페이지로 이동하세요.
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
                  {region.name} 볼라드 시공
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
                    {region.name} 지역의 볼라드,
                    차량진입 방지봉 설치·교체·수리
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
            <h2>볼라드 설치·교체 자주 묻는 질문</h2>
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
            <h2>볼라드 시공사례 및 후기 안내</h2>
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
              실제 볼라드 설치·교체 사진과
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
        <h2>볼라드 설치·교체·수리 견적 상담</h2>

        <p>
          설치 장소, 제품 수량, 기존 볼라드
          파손 상태와 바닥 사진을 준비하면
          상담에 도움이 됩니다.
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
