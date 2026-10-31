
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const IMAGE =
  "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png";

export const metadata: Metadata = {
  title: {
    absolute:
      "주차라인 도색·재도색·보수·시공 | 주차119",
  },
  description:
    "주차라인 신규 도색, 주차선 재도색, 주차구획선 보수 및 시공 안내. 서울·경기·인천·충남·충북 지역별 주차장 도색 상담.",
  alternates: {
    canonical: `${SITE}/service/parking-line`,
  },
  openGraph: {
    title:
      "주차라인 도색·재도색·보수·시공 | 주차119",
    description:
      "아파트·상가·공장 주차라인 신규 도색과 기존 주차선 재도색. 지역별 시공 및 견적 상담.",
    url: `${SITE}/service/parking-line`,
    type: "website",
    images: [{ url: IMAGE }],
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
    title: "주차라인 신규 도색",
    description:
      "새롭게 조성된 주차장이나 구획 변경이 필요한 공간에 주차면 경계선과 차량 동선 표시를 계획합니다.",
  },
  {
    title: "주차라인 재도색",
    description:
      "마모되거나 색상이 흐려진 기존 주차선의 상태를 확인하고 재도색 범위와 방법을 상담합니다.",
  },
  {
    title: "주차선 보수·부분 도색",
    description:
      "일부 구간만 훼손되었거나 주차구획 표시가 불분명한 경우 부분 보수 가능 여부를 확인합니다.",
  },
  {
    title: "주차장 바닥 표시 시공",
    description:
      "아파트·상가·공장 등 주차장 환경에 맞춰 구획선, 차량 유도 표시, 지정 주차구역 도색을 상담합니다.",
  },
];

const PROCESS = [
  "현장 위치와 주차장 유형 확인",
  "주차면 수 및 도색 구간 확인",
  "기존 라인 마모 상태와 바닥 재질 점검",
  "신규 도색·재도색·부분 보수 범위 협의",
  "차량 이동 및 작업구역 통제 조건 확인",
  "도색 후 건조와 주차장 이용 재개 조건 안내",
];

const FAQ = [
  {
    question: "기존 주차라인 위에 다시 도색할 수 있나요?",
    answer:
      "기존 도막의 부착 상태, 오염 정도, 바닥 재질에 따라 작업 방법이 달라집니다. 들뜸이나 훼손이 심한 구간은 사전 정리가 필요할 수 있습니다.",
  },
  {
    question: "주차라인 일부만 보수할 수 있나요?",
    answer:
      "부분 보수도 상담할 수 있습니다. 기존 라인과 신규 도색 구간의 색상 차이 및 바닥 상태 등을 확인해야 합니다.",
  },
  {
    question: "주차라인 도색 비용은 어떻게 결정되나요?",
    answer:
      "주차면 수, 도색 길이와 면적, 바닥 상태, 기존 라인 제거 여부, 작업 시간, 현장 위치 등에 따라 견적이 달라집니다.",
  },
  {
    question: "도색 후 언제부터 차량을 주차할 수 있나요?",
    answer:
      "사용하는 도료, 기온, 습도, 바닥 상태 등에 따라 건조 시간이 달라집니다. 차량 통행과 주차 재개 시점은 작업 조건을 확인한 후 안내합니다.",
  },
  {
    question: "장애인 전용 주차구역도 도색할 수 있나요?",
    answer:
      "현장에 적용되는 주차구역 표시 기준과 관련 규정을 확인한 뒤 작업 범위를 상담합니다.",
  },
  {
    question: "주차라인 시공 후기를 볼 수 있나요?",
    answer:
      "실제 시공사진과 작업 기록이 확보된 사례부터 안내할 수 있습니다. 특정 지역의 작업 이력은 상담 시 문의해 주세요.",
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

          <h1>
            주차라인 도색 · 재도색
            <br />
            보수 · 시공 안내
          </h1>

          <p>
            주차장 라인 도색 · 주차구획선 도색
            · 기존 주차선 재도색
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
              alt="주차라인 도색 및 재도색 작업 안내 이미지"
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                주차장 환경에 맞는
                <br />
                주차라인 도색
              </h2>

              <p>
                주차라인은 차량의 주차 위치를
                구분하고 주차장 공간을 효율적으로
                활용하는 데 필요한 표시입니다.
              </p>

              <p>
                기존 주차선이 지워지거나
                구획이 불분명한 경우,
                현장 바닥 상태와 도색 범위를
                확인해 시공 방법을 안내합니다.
              </p>

              <p>
                신규 도색과 기존 라인 재도색은
                바닥 준비 과정과 작업 범위가
                다를 수 있어 사전 확인이 중요합니다.
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
            <h2>주차라인 도색 작업 종류</h2>
            <p>
              신규 도색부터 재도색과 부분 보수까지
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
            <h2>주차라인 도색 진행 안내</h2>
            <p>
              현장 조건과 도료 종류에 따라
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
            <h2>주차라인 도색 지역별 안내</h2>
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
                  {region.name} 주차라인 도색
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
                    {region.name} 지역의 주차라인
                    신규 도색·재도색·보수 상담
                    안내입니다.
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
            <h2>주차라인 도색 시공사례·후기 안내</h2>
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
              실제 주차라인 도색 전후 사진과
              시공 후기는 확인 가능한 자료를
              기준으로 안내합니다.
            </p>

            <p>
              특정 지역의 시공 이력은
              상담 시 별도로 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>주차라인 도색 견적 상담</h2>

        <p>
          현장 주소, 주차면 수, 바닥 상태,
          기존 라인 사진을 준비하면
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
