
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

type District = {
  name: string;
  slug: string;
};

type Region = {
  name: string;
  districts: District[];
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
      "주차구획선 신규 도색, 기존 주차라인 재도색, 주차구역 표시 작업",
    checks: [
      "기존 주차라인의 마모 및 훼손 상태",
      "콘크리트·아스콘 등 바닥 재질",
      "주차면 수와 도색 범위",
      "작업 중 차량 이동 및 통제 가능 여부",
    ],
  },
  {
    name: "카스토퍼 설치",
    slug: "car-stopper",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
    description:
      "주차블록 신규 설치, 파손된 카스토퍼 철거 및 교체",
    checks: [
      "설치할 주차면 수와 카스토퍼 수량",
      "기존 제품 철거 필요 여부",
      "바닥 상태 및 고정 가능 여부",
      "차량 주차 방향과 설치 위치",
    ],
  },
  {
    name: "차선규제봉 설치",
    slug: "traffic-post",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
    description:
      "차량 통행구역의 탄력봉·시선유도봉 설치 및 교체",
    checks: [
      "차량 통행 동선과 설치 목적",
      "차선규제봉 규격 및 수량",
      "기존 시설물 철거 여부",
      "바닥 고정 상태 및 설치 간격",
    ],
  },
  {
    name: "볼라드 설치",
    slug: "bollard",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
    description:
      "차량진입 방지봉, 스테인리스 볼라드 신규 설치 및 교체",
    checks: [
      "차량 진입 제한 목적과 설치 위치",
      "볼라드 재질과 제품 규격",
      "기초 작업 및 바닥 고정 방식",
      "보행 동선과 관련 설치 기준",
    ],
  },
];

const FAQ = [
  {
    question: "주차라인 도색 비용은 어떻게 결정되나요?",
    answer:
      "주차면 수, 도색 길이, 바닥 상태, 기존 라인 제거 여부, 작업 장소와 차량 통제 조건 등을 확인해 견적을 안내합니다.",
  },
  {
    question: "카스토퍼 한 개만 설치할 수 있나요?",
    answer:
      "소량 설치도 상담할 수 있습니다. 실제 출장 가능 여부와 비용은 현장 위치 및 작업 조건에 따라 달라집니다.",
  },
  {
    question: "파손된 차선규제봉과 볼라드도 교체하나요?",
    answer:
      "기존 시설물의 규격, 파손 상태, 바닥 고정 방식 등을 확인한 후 철거 및 교체 가능 여부를 안내합니다.",
  },
  {
    question: "현장 방문 전에 견적 상담이 가능한가요?",
    answer:
      "현장 주소, 작업 종류, 예상 수량, 설치 위치 사진을 준비하면 초기 상담에 도움이 됩니다. 정확한 견적은 현장 확인이 필요할 수 있습니다.",
  },
];

type Props = {
  params: Promise<{
    region: string;
    district: string;
  }>;
};

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
    `${location} 주차라인 도색·카스토퍼·차선규제봉·볼라드 설치`;

  const description =
    `${location} 주차라인 도색, 주차선 재도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치 상담. 주차119 ${PHONE}`;

  return {
    title,
    description,
    keywords: [
      `${location} 주차라인 도색`,
      `${location} 주차장 도색`,
      `${location} 카스토퍼 설치`,
      `${location} 차선규제봉 설치`,
      `${location} 볼라드 설치`,
    ],
    alternates: {
      canonical: `${SITE}/area/${region}/${district}`,
    },
    openGraph: {
      title: `${location} 주차장 시설물 시공 | 주차119`,
      description,
      url: `${SITE}/area/${region}/${district}`,
      type: "website",
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
            PARKING119 · LOCAL SERVICE
          </p>

          <h1>
            {location} 주차라인 도색
            <br />
            주차장 안전시설물 설치
          </h1>

          <p>
            주차라인 도색 · 카스토퍼 ·
            차선규제봉 · 볼라드
          </p>

          <p style={{ marginTop: 14 }}>
            현장 조건에 맞는 시공 방법과
            견적을 상담합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 주차장 시설물 시공 안내
            </h2>
            <p>
              시공 종류별 작업 내용과
              현장 확인 사항을 안내합니다.
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
                  alt={`${service.name} 작업 안내`}
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
                    {location} {service.name}
                  </h3>

                  <p style={{ color: "#626b77" }}>
                    {service.description}
                  </p>

                  <h4>현장 확인 사항</h4>

                  <ul
                    style={{
                      paddingLeft: 20,
                      lineHeight: 1.9,
                      color: "#626b77",
                    }}
                  >
                    {service.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/service/${service.slug}`}
                    style={{
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    시공 상세 안내 →
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
              alt="주차119 주차라인 도색 작업 사진"
              width={900}
              height={675}
              className="content-image"
            />

            <div className="content-text">
              <h2>
                {location} 주차장 시공
                <br />
                견적 상담 방법
              </h2>

              <p>
                주차장 시설물 시공 견적은
                작업 종류와 현장 상태에 따라
                달라집니다.
              </p>

              <p>
                현장 주소, 설치 수량,
                주차면 수, 바닥 상태,
                기존 시설물 철거 여부를
                확인하면 상담에 도움이 됩니다.
              </p>

              <p>
                필요한 경우 현장 확인 후
                작업 범위와 시공 방법을
                결정할 수 있습니다.
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 주차장 시공
              자주 묻는 질문
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
              .filter((item) => item.slug !== district)
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
          {location} 주차장 시공 문의
        </h2>

        <p>
          주차라인 도색 · 카스토퍼 설치
          <br />
          차선규제봉 · 볼라드 설치
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
