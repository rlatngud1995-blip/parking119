
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

const IMAGE =
  "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png";

type District = {
  name: string;
  slug: string;
};

type Region = {
  name: string;
  districts: District[];
};

type Props = {
  params: Promise<{
    region: string;
    district: string;
  }>;
};

function makeDistricts(
  items: [string, string][]
): District[] {
  return items.map(([name, slug]) => ({
    name,
    slug,
  }));
}

const REGIONS: Record<string, Region> = {
  seoul: {
    name: "서울",
    districts: makeDistricts([
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
    ]),
  },

  gyeonggi: {
    name: "경기",
    districts: makeDistricts([
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
    ]),
  },

  incheon: {
    name: "인천",
    districts: makeDistricts([
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
    ]),
  },

  chungnam: {
    name: "충남",
    districts: makeDistricts([
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
    ]),
  },

  chungbuk: {
    name: "충북",
    districts: makeDistricts([
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
    ]),
  },
};

const WORKS = [
  {
    title: "주차라인 신규 도색",
    description:
      "신규 주차구역에 주차구획선을 표시하거나 기존에 주차선이 없는 공간의 도색 작업을 상담합니다.",
  },
  {
    title: "기존 주차라인 재도색",
    description:
      "마모되거나 흐려진 주차선을 다시 도색하는 작업입니다. 기존 도막과 바닥 상태를 확인해 작업 범위를 검토합니다.",
  },
  {
    title: "주차구획선 부분 보수",
    description:
      "일부 구간의 주차선이 훼손되거나 지워진 경우 필요한 구간의 보수 작업을 상담합니다.",
  },
  {
    title: "주차장 바닥 표시 도색",
    description:
      "주차구역 번호, 차량 이동 방향, 주차장 내 바닥 표시 등 현장에 필요한 표시 작업을 안내합니다.",
  },
];

const PROCESS = [
  "현장 위치 및 주차장 유형 확인",
  "주차면 수와 도색 구간 확인",
  "콘크리트·아스콘 등 바닥 상태 점검",
  "기존 도막과 오염 상태 확인",
  "도색 범위와 작업 일정 협의",
  "도색 작업 및 건조 시간 확인",
  "차량 통행 재개 조건 안내",
];

const CHECKS = [
  "주차면 수와 주차선 도색 길이",
  "기존 주차라인의 마모 및 훼손 상태",
  "바닥 재질과 균열·오염 상태",
  "기존 라인 제거 또는 보수 필요 여부",
  "차량 이동 및 작업구역 통제 가능 시간",
];

const FAQ = [
  {
    question: "주차라인 도색 비용은 어떻게 결정되나요?",
    answer:
      "주차면 수, 도색 길이, 바닥 재질, 기존 도막 상태, 작업 시간과 차량 통제 조건 등을 확인해 견적을 안내합니다.",
  },
  {
    question: "기존 주차라인 위에 재도색할 수 있나요?",
    answer:
      "기존 도막의 접착 상태와 바닥 상태에 따라 재도색 가능 여부가 달라집니다. 필요한 경우 기존 도막 정리나 바닥 보수 작업을 검토합니다.",
  },
  {
    question: "주차선 일부만 도색할 수 있나요?",
    answer:
      "부분 도색도 상담할 수 있습니다. 작업 가능 여부와 비용은 도색 범위, 현장 위치 및 작업 조건에 따라 달라집니다.",
  },
  {
    question: "주차장 운영 중에도 도색할 수 있나요?",
    answer:
      "도색 구간의 차량 이동과 출입 통제가 필요할 수 있습니다. 주차장 이용 상황을 확인해 작업 일정과 통제 범위를 협의합니다.",
  },
  {
    question: "주차라인 도색 후 언제 차량을 주차할 수 있나요?",
    answer:
      "사용하는 도료, 날씨, 바닥 상태와 현장 조건에 따라 건조 시간이 달라집니다. 시공 후 차량 통행 및 주차 가능 시점을 안내합니다.",
  },
  {
    question: "주차라인 도색 견적 상담 시 무엇이 필요한가요?",
    answer:
      "현장 주소, 주차면 수, 도색이 필요한 구간의 전체 사진과 근접 사진, 희망 작업 일정을 준비하면 초기 상담에 도움이 됩니다.",
  },
];

function getLocation(
  regionSlug: string,
  districtSlug: string
) {
  const region = REGIONS[regionSlug];

  if (!region) return null;

  const district = region.districts.find(
    (item) => item.slug === districtSlug
  );

  if (!district) return null;

  return { region, district };
}

export function generateStaticParams() {
  return Object.entries(REGIONS).flatMap(
    ([region, data]) =>
      data.districts.map((district) => ({
        region,
        district: district.slug,
      }))
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region, district } = await params;
  const data = getLocation(region, district);

  if (!data) {
    return {
      title: "지역을 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const location =
    `${data.region.name} ${data.district.name}`;

  const title =
    `${location} 주차라인 도색·주차선 재도색 | 주차119`;

  const description =
    `${location} 주차라인 도색, 주차구획선 신규 도색, 기존 주차선 재도색 및 부분 보수 상담. 주차면 수와 바닥 상태를 확인해 작업 방법과 견적을 안내합니다. ${PHONE}`;

  const url =
    `${SITE}/area/${region}/${district}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      `${location} 주차라인 도색`,
      `${location} 주차선 도색`,
      `${location} 주차구획선 도색`,
      `${location} 주차라인 재도색`,
      `${data.district.name} 주차장 도색`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "주차119",
      url,
      title,
      description,
      images: [
        {
          url: IMAGE,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DistrictPage({
  params,
}: Props) {
  const { region, district } = await params;
  const data = getLocation(region, district);

  if (!data) notFound();

  const location =
    `${data.region.name} ${data.district.name}`;

  const url =
    `${SITE}/area/${region}/${district}`;

  const breadcrumbSchema = {
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
        name: data.region.name,
        item: `${SITE}/area/${region}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.district.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ).replace(/</g, "\\u003c"),
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
            PARKING119 · PARKING LINE
          </p>

          <h1>
            {location}
            <br />
            주차라인 도색 · 주차선 재도색
          </h1>

          <p>
            주차구획선 신규 도색 ·
            기존 주차선 재도색 ·
            부분 보수
          </p>

          <p style={{ marginTop: 14 }}>
            현장 조건에 맞는 도색 범위와
            작업 방법을 상담합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <nav
            aria-label="현재 페이지 위치"
            style={{
              marginBottom: 28,
              fontSize: 14,
            }}
          >
            <Link href="/">홈</Link>
            {" / "}
            <Link href={`/area/${region}`}>
              {data.region.name}
            </Link>
            {" / "}
            <span>{data.district.name}</span>
          </nav>

          <div className="content-grid">
            <Image
              src={IMAGE}
              alt={`${location} 주차라인 도색 안내 이미지`}
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                {location}
                <br />
                주차라인 도색 안내
              </h2>

              <p>
                아파트, 상가, 공장 및 건물
                주차장의 신규 주차구획선 도색과
                기존 주차선 재도색을 상담합니다.
              </p>

              <p>
                주차면 수, 도색할 구간의 길이,
                바닥 재질과 기존 라인 상태에
                따라 작업 방법이 달라질 수 있습니다.
              </p>

              <p>
                현장 전체 사진과 도색이 필요한
                구간의 사진을 준비하면
                초기 상담에 도움이 됩니다.
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
            <h2>
              {location} 주차라인 도색 작업
            </h2>
            <p>
              신규 도색부터 기존 주차선
              재도색과 부분 보수까지 안내합니다.
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
            {WORKS.map((work) => (
              <article
                key={work.title}
                style={{
                  padding: 24,
                  background: "#fff",
                  border: "1px solid #e8eaed",
                  borderRadius: 12,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  {work.title}
                </h3>

                <p
                  style={{
                    color: "#626b77",
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
            <h2>
              {location} 주차라인 도색 진행 과정
            </h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              border: "1px solid #e8eaed",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <ol
              style={{
                paddingLeft: 20,
                lineHeight: 2.1,
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

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 주차선 도색 전 확인사항
            </h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              background: "#fff",
              padding: 28,
              borderRadius: 12,
            }}
          >
            <ul
              style={{
                paddingLeft: 20,
                lineHeight: 2.1,
                color: "#626b77",
              }}
            >
              {CHECKS.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>

            <p
              style={{
                color: "#626b77",
                lineHeight: 1.9,
              }}
            >
              정확한 작업 범위와 견적은
              현장 조건을 확인한 후
              안내할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              주차장 유형별 주차라인 도색 안내
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "아파트·공동주택",
                text:
                  "주차면별 도색 범위와 입주민 차량 이동, 작업 시간 및 주차장 이용 제한 조건을 확인합니다.",
              },
              {
                title: "상가·건물 주차장",
                text:
                  "영업시간과 고객 차량 출입을 고려해 주차라인 도색 구간 및 작업 일정을 상담합니다.",
              },
              {
                title: "공장·물류시설",
                text:
                  "차량 이동 경로와 주차구역 표시 범위를 확인하고 도색 작업 가능 조건을 검토합니다.",
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  padding: 24,
                  border: "1px solid #e7e9ed",
                  borderRadius: 12,
                  background: "#fff",
                }}
              >
                <h3>{item.title}</h3>
                <p
                  style={{
                    color: "#626b77",
                    lineHeight: 1.9,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 주차라인 도색 FAQ
            </h2>
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
                  borderBottom: "1px solid #e1e4e8",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {item.question}
                </summary>

                <p
                  style={{
                    marginTop: 14,
                    color: "#626b77",
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
            <h2>
              {data.region.name} 다른 지역
              주차라인 도색 안내
            </h2>
          </div>

          <div className="area-links">
            {data.region.districts
              .filter(
                (item) => item.slug !== district
              )
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/area/${region}/${item.slug}`}
                >
                  {item.name} 주차라인 도색
                </Link>
              ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 28,
            }}
          >
            <Link href={`/area/${region}`}>
              {data.region.name} 전체 지역 보기
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          {location} 주차라인 도색 견적 상담
        </h2>

        <p>
          신규 주차구획선 도색 ·
          기존 주차라인 재도색 ·
          부분 보수
        </p>

        <a
          href={TEL}
          className="btn btn-primary"
        >
          전화 상담 {PHONE}
        </a>
      </section>
    </>
  );
}
