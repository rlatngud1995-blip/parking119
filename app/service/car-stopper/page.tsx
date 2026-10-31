
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const IMAGE =
  "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png";

export const metadata: Metadata = {
  title: {
    absolute:
      "카스토퍼 설치·교체·수리·시공 | 주차119",
  },
  description:
    "카스토퍼 설치, 교체, 수리 및 주차블록 시공 안내. 서울·경기·인천·충남·충북 지역별 상담, 작업 방법과 견적 확인. 주차119.",
  alternates: {
    canonical: `${SITE}/service/car-stopper`,
  },
  openGraph: {
    title:
      "카스토퍼 설치·교체·수리·시공 | 주차119",
    description:
      "주차장 카스토퍼 설치와 교체, 파손 시설물 보수 상담 및 지역별 시공 안내.",
    url: `${SITE}/service/car-stopper`,
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
    title: "카스토퍼 설치",
    description:
      "신규 주차구획에 카스토퍼를 설치할 때 주차면 구조, 차량 방향, 바닥 상태 및 고정 방식을 확인합니다.",
  },
  {
    title: "카스토퍼 교체",
    description:
      "파손되거나 마모된 주차블록의 상태를 점검하고 기존 제품 철거 및 신규 제품 설치 여부를 상담합니다.",
  },
  {
    title: "카스토퍼 수리·보수",
    description:
      "고정 볼트 풀림, 제품 흔들림, 위치 이탈 등의 상태를 확인해 재고정 또는 교체가 적절한지 판단합니다.",
  },
  {
    title: "카스토퍼 시공",
    description:
      "아파트, 상가, 공장, 건물 주차장 등의 주차면 수와 이용 환경에 맞춰 작업 범위 및 일정을 협의합니다.",
  },
];

const PROCESS = [
  "현장 주소와 주차장 유형 확인",
  "설치·교체·수리 요청 내용 확인",
  "주차면 수와 제품 수량 검토",
  "바닥 재질 및 기존 고정 상태 점검",
  "작업 범위와 견적 협의",
  "시공 후 고정 상태와 주변 간섭 여부 확인",
];

const FAQ = [
  {
    question: "카스토퍼 설치와 교체는 어떻게 다른가요?",
    answer:
      "신규 설치는 기존 제품이 없는 주차면에 설치하는 작업이며, 교체는 파손된 제품의 철거 및 새로운 제품 설치가 포함될 수 있습니다.",
  },
  {
    question: "흔들리는 카스토퍼도 수리할 수 있나요?",
    answer:
      "고정 부위와 바닥 상태에 따라 재고정이 가능할 수 있습니다. 제품이나 바닥이 심하게 손상된 경우 교체가 필요할 수 있습니다.",
  },
  {
    question: "카스토퍼 한 개만 설치할 수 있나요?",
    answer:
      "소량 설치도 상담 가능합니다. 출장 가능 여부와 비용은 지역, 작업 수량, 현장 조건에 따라 달라집니다.",
  },
  {
    question: "카스토퍼 시공 비용은 어떻게 결정되나요?",
    answer:
      "제품 종류, 설치 수량, 기존 제품 철거 여부, 바닥 상태, 현장 위치와 작업 조건을 확인해 견적을 안내합니다.",
  },
  {
    question: "시공 후기를 확인할 수 있나요?",
    answer:
      "실제 작업 사진과 사례가 준비된 경우 확인 가능한 내용으로 안내합니다. 특정 지역의 시공 이력은 상담 시 별도로 문의해 주세요.",
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

          <h1>
            카스토퍼 설치 · 교체
            <br />
            수리 · 시공 안내
          </h1>

          <p>
            주차블록 설치 · 파손 카스토퍼 교체
            · 주차스토퍼 보수
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
              alt="주차장 카스토퍼 설치 및 교체 안내 이미지"
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                주차장 환경에 맞는
                <br />
                카스토퍼 설치와 보수
              </h2>

              <p>
                카스토퍼는 차량의 주차 정지 위치를
                안내하는 주차장 시설물입니다.
                주차면의 구조와 차량 주차 방향을
                고려해 설치 위치를 정해야 합니다.
              </p>

              <p>
                기존 카스토퍼가 파손되거나
                흔들리는 경우에는 제품 상태뿐 아니라
                바닥 고정 부위도 확인해야 합니다.
              </p>

              <p>
                단순 재고정이 가능한지,
                신규 제품으로 교체해야 하는지
                현장 조건에 따라 상담합니다.
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
            <h2>카스토퍼 작업 종류</h2>
            <p>
              설치부터 교체, 수리 및 보수까지
              작업 유형별 확인사항을 안내합니다.
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
            <h2>카스토퍼 시공 진행 안내</h2>
            <p>
              현장 상태에 따라 실제 작업 과정은
              달라질 수 있습니다.
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
            <h2>카스토퍼 지역별 설치·교체 안내</h2>
            <p>
              시공 상담을 원하는 지역을 선택한 뒤
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
                  {region.name} 카스토퍼 시공
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
                    {region.name} 지역의 카스토퍼
                    설치·교체·수리 상담 안내입니다.
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
            <h2>카스토퍼 설치·교체 FAQ</h2>
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
            <h2>카스토퍼 시공사례 및 후기 안내</h2>
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
              실제 카스토퍼 설치·교체 작업 사진과
              고객 후기는 확인 가능한 자료를
              기준으로 안내합니다.
            </p>

            <p>
              특정 지역의 작업 이력이나
              시공 가능 여부는 전화로 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>카스토퍼 설치·교체·수리 상담</h2>

        <p>
          현장 주소, 설치 수량, 바닥 상태,
          기존 시설물 사진을 준비하면
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
