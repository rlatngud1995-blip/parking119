
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

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

const SERVICES = [
  {
    name: "주차라인 도색",
    slug: "parking-line",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
    description:
      "주차구획선 신규 도색, 기존 주차선 재도색, 차량 통행 표시 등 주차장 바닥 표시 작업을 안내합니다.",
    process: [
      "주차면 수와 도색 구역 확인",
      "기존 라인 및 바닥 오염 상태 점검",
      "도색 위치와 작업 범위 협의",
      "시공 후 건조 및 차량 통행 재개 조건 확인",
    ],
    checks: [
      "콘크리트·아스콘 등 바닥 재질",
      "기존 라인 제거 또는 보수 필요 여부",
      "차량 이동 및 작업구역 통제 가능 여부",
    ],
  },
  {
    name: "카스토퍼 설치",
    slug: "car-stopper",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
    description:
      "차량의 주차 위치를 안내하는 카스토퍼 신규 설치와 파손된 주차블록 교체 작업을 상담합니다.",
    process: [
      "주차면별 설치 위치 확인",
      "제품 규격과 설치 수량 협의",
      "기존 카스토퍼 철거 여부 확인",
      "바닥 고정 방식과 설치 상태 점검",
    ],
    checks: [
      "차량 주차 방향 및 주차면 구조",
      "바닥 균열 및 앵커 고정 가능 여부",
      "기존 제품 철거·폐기 필요 여부",
    ],
  },
  {
    name: "차선규제봉 설치",
    slug: "traffic-post",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
    description:
      "차량 동선 구분과 진입 유도를 위한 차선규제봉, 탄력봉, 시선유도봉 설치 및 교체를 안내합니다.",
    process: [
      "차량 통행 동선과 설치 목적 확인",
      "제품 높이 및 규격 협의",
      "설치 간격과 수량 검토",
      "바닥 고정 및 통행 간섭 여부 점검",
    ],
    checks: [
      "차량 회전 반경 및 통행 폭",
      "기존 규제봉 파손 상태",
      "설치 구간의 보행 안전",
    ],
  },
  {
    name: "볼라드 설치",
    slug: "bollard",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
    description:
      "차량 진입 제한과 보행 공간 보호를 위한 볼라드 신규 설치 및 기존 시설물 교체를 상담합니다.",
    process: [
      "차량 진입 제한 목적 확인",
      "볼라드 재질과 규격 협의",
      "기초 작업 및 고정 방식 검토",
      "보행 동선과 주변 시설물 간섭 확인",
    ],
    checks: [
      "설치 장소의 바닥 구조",
      "보행자 및 교통약자 이동 공간",
      "현장에 적용되는 시설물 설치 기준",
    ],
  },
];

const FAQ = [
  {
    question: "주차라인 도색 견적은 무엇을 기준으로 하나요?",
    answer:
      "주차면 수, 도색 길이, 바닥 상태, 기존 라인 보수 여부, 작업 시간과 차량 통제 조건 등을 확인해 견적을 안내합니다.",
  },
  {
    question: "카스토퍼 한 개도 설치 상담이 가능한가요?",
    answer:
      "소량 설치도 문의할 수 있습니다. 출장 가능 여부와 비용은 작업 위치, 수량 및 현장 조건에 따라 달라집니다.",
  },
  {
    question: "차선규제봉이나 볼라드 교체도 가능한가요?",
    answer:
      "기존 시설물의 파손 상태, 제품 규격, 바닥 고정 방식 등을 확인한 후 철거 및 교체 가능 여부를 안내합니다.",
  },
  {
    question: "사진으로 먼저 견적 상담을 받을 수 있나요?",
    answer:
      "현장 주소, 전체 사진, 작업 위치의 근접 사진, 예상 수량 등을 준비하면 초기 상담에 도움이 됩니다. 최종 견적은 현장 확인이 필요할 수 있습니다.",
  },
  {
    question: "주차장 운영 중에도 시공할 수 있나요?",
    answer:
      "작업 종류에 따라 일부 구역 통제나 차량 이동이 필요할 수 있습니다. 시공 시간과 주차장 이용 제한 범위는 현장 조건에 따라 협의해야 합니다.",
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
    `${location} 주차라인 도색·주차장 시설물 설치`;

  const description =
    `${location} 주차라인 도색, 카스토퍼, 차선규제봉, 볼라드 설치 상담. 주차면 수, 바닥 상태, 작업 범위를 확인해 시공 방법을 안내합니다.`;

  const url =
    `${SITE}/area/${region}/${district}`;

  return {
    title: {
      absolute: `${title} | 주차119`,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "주차119",
      url,
      title: `${title} | 주차119`,
      description,
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
            PARKING119 · LOCAL SERVICE
          </p>

          <h1>
            {location} 주차라인 도색
            <br />
            주차장 시설물 설치 안내
          </h1>

          <p>
            주차라인 도색 · 카스토퍼 설치 ·
            차선규제봉 설치 · 볼라드 설치
          </p>

          <p style={{ marginTop: 14 }}>
            현장 조건에 맞는 작업 범위와
            시공 방법을 상담합니다.
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

          <div className="section-heading">
            <h2>
              {location} 주차장 시공 서비스
            </h2>

            <p>
              작업 종류별 시공 내용과
              사전 확인사항을 안내합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                style={{
                  background: "#fff",
                  border: "1px solid #e7e9ed",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={service.image}
                  alt={`${service.name} 시공 안내 이미지`}
                  width={800}
                  height={600}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />

                <div style={{ padding: 22 }}>
                  <h3
                    style={{
                      marginTop: 0,
                      fontSize: 20,
                    }}
                  >
                    {service.name}
                  </h3>

                  <p
                    style={{
                      color: "#626b77",
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </p>

                  <h4>작업 진행 시 확인사항</h4>

                  <ol
                    style={{
                      paddingLeft: 20,
                      lineHeight: 1.9,
                      color: "#626b77",
                    }}
                  >
                    {service.process.map(
                      (step) => (
                        <li key={step}>{step}</li>
                      )
                    )}
                  </ol>

                  <h4>견적 전 점검 항목</h4>

                  <ul
                    style={{
                      paddingLeft: 20,
                      lineHeight: 1.9,
                      color: "#626b77",
                    }}
                  >
                    {service.checks.map(
                      (check) => (
                        <li key={check}>{check}</li>
                      )
                    )}
                  </ul>

                  <Link
                    href={`/service/${service.slug}`}
                    style={{
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    {service.name} 자세히 보기 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="content-grid">
            <Image
              src="/B3F40103-F8FC-48AA-9110-5BEE366D5031.png"
              alt="주차라인 도색 시공 안내 이미지"
              width={900}
              height={675}
              className="content-image"
            />

            <div className="content-text">
              <h2>
                {location} 주차장 시공
                <br />
                견적 상담 안내
              </h2>

              <p>
                아파트, 상가, 공장, 건물 주차장 등
                작업 장소에 따라 필요한 시공
                범위가 달라질 수 있습니다.
              </p>

              <p>
                주차면 수, 설치 수량, 바닥 상태,
                기존 시설물 철거 여부를
                확인하면 상담에 도움이 됩니다.
              </p>

              <p>
                현장 사진과 작업 위치를
                준비해 문의해 주세요.
                필요한 경우 현장 확인 후
                시공 방법을 협의합니다.
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              주차장 유형별 상담 안내
            </h2>

            <p>
              현장 이용 방식에 따라
              확인할 사항이 달라집니다.
            </p>
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
                  "입주민 차량 이동, 주차면 이용 제한, 관리주체와의 작업 일정 협의가 필요할 수 있습니다.",
              },
              {
                title: "상가·건물 주차장",
                text:
                  "영업시간, 고객 차량 동선, 출입구 통제 범위를 확인하는 것이 좋습니다.",
              },
              {
                title: "공장·물류시설",
                text:
                  "작업 차량과 대형 차량의 통행 폭, 시설물 설치 위치, 안전 동선을 검토해야 합니다.",
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
              {location} 시공 문의 전 준비사항
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
            <ol
              style={{
                paddingLeft: 20,
                lineHeight: 2.1,
              }}
            >
              <li>
                정확한 현장 주소와 주차장 유형
              </li>
              <li>
                필요한 시공 종류 및 예상 수량
              </li>
              <li>
                현장 전체 사진과 작업 위치 사진
              </li>
              <li>
                기존 시설물 철거 필요 여부
              </li>
              <li>
                희망 작업 일정과 차량 통제 가능 시간
              </li>
            </ol>

            <p
              style={{
                color: "#626b77",
                lineHeight: 1.9,
              }}
            >
              위 내용을 준비하면 초기 상담이
              수월해집니다. 실제 작업 가능 여부와
              최종 견적은 현장 조건에 따라
              달라질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              주차장 시설물 시공 FAQ
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
              {data.region.name} 다른 지역 안내
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
                  {item.name}
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
          {location} 주차장 시공 상담
        </h2>

        <p>
          주차라인 도색 · 카스토퍼 설치
          <br />
          차선규제봉 설치 · 볼라드 설치
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
