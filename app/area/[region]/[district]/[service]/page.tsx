
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";
const TEL = "tel:01094134686";

type Params = {
  region: string;
  district: string;
  service: string;
};

type Props = {
  params: Promise<Params>;
};

const REGIONS: Record<
  string,
  {
    name: string;
    districts: [string, string][];
  }
> = {
  seoul: {
    name: "서울",
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
    ],
  },
  gyeonggi: {
    name: "경기",
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
    ],
  },
  incheon: {
    name: "인천",
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
    ],
  },
  chungnam: {
    name: "충남",
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
    ],
  },
  chungbuk: {
    name: "충북",
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
    ],
  },
};

type Service = {
  name: string;
  slug: string;
  image: string;
  intro: string;
  works: string[];
  checks: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

const SERVICES: Record<string, Service> = {
  "parking-line": {
    name: "주차라인 도색",
    slug: "parking-line",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
    intro:
      "아파트, 상가, 공장 및 건물 주차장의 신규 주차구획선 도색과 기존 주차라인 재도색을 상담합니다.",
    works: [
      "신규 주차라인 및 주차구획선 도색",
      "마모된 기존 주차선 재도색",
      "부분적으로 훼손된 라인 보수",
      "차량 동선 및 지정 주차구역 표시",
    ],
    checks: [
      "주차면 수와 도색할 구간의 길이",
      "콘크리트·아스콘 등 바닥 재질",
      "기존 도막과 오염 상태",
      "차량 이동 및 작업구역 통제 가능 시간",
    ],
    faq: [
      {
        question: "기존 주차선 위에 재도색할 수 있나요?",
        answer:
          "기존 도막의 상태와 바닥 재질에 따라 재도색 방법이 달라집니다. 필요한 경우 바닥 정리 작업을 먼저 검토합니다.",
      },
      {
        question: "주차라인 도색 비용은 어떻게 정해지나요?",
        answer:
          "주차면 수, 도색 길이, 기존 라인 상태, 현장 위치 및 작업 시간 등을 확인해 견적을 상담합니다.",
      },
    ],
  },
  "car-stopper": {
    name: "카스토퍼 설치·교체",
    slug: "car-stopper",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
    intro:
      "주차장 차량 정차 위치를 안내하는 카스토퍼와 주차블록의 신규 설치, 파손 제품 교체 및 고정 상태 보수를 상담합니다.",
    works: [
      "카스토퍼 및 주차블록 신규 설치",
      "파손되거나 노후된 카스토퍼 교체",
      "흔들리는 카스토퍼 고정 상태 점검",
      "아파트·상가·건물 주차장 카스토퍼 시공",
    ],
    checks: [
      "주차면 구조와 차량 주차 방향",
      "설치 수량과 제품 규격",
      "바닥 균열 및 앵커 고정 상태",
      "기존 제품 철거 필요 여부",
    ],
    faq: [
      {
        question: "카스토퍼 한 개도 교체할 수 있나요?",
        answer:
          "소량 교체도 문의할 수 있습니다. 출장 및 작업 가능 여부는 지역과 현장 조건에 따라 달라집니다.",
      },
      {
        question: "흔들리는 주차블록도 수리할 수 있나요?",
        answer:
          "제품과 고정 부위의 상태를 확인한 후 재고정 또는 교체 가능 여부를 안내합니다.",
      },
    ],
  },
  "traffic-post": {
    name: "차선규제봉 설치·교체",
    slug: "traffic-post",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
    intro:
      "주차장과 건물 진입로의 차량 동선 구분을 위한 차선규제봉, 탄력봉, 시선유도봉 설치 및 파손 제품 교체를 상담합니다.",
    works: [
      "차선규제봉 및 탄력봉 신규 설치",
      "파손된 시선유도봉 철거 및 교체",
      "흔들리는 규제봉 고정 상태 점검",
      "주차장 진입로와 차량 통행구역 시공",
    ],
    checks: [
      "차량 통행 폭과 회전 공간",
      "제품 규격과 설치 수량",
      "기존 규제봉 및 앵커 상태",
      "보행 동선과 설치 위치의 간섭 여부",
    ],
    faq: [
      {
        question: "파손된 탄력봉만 교체할 수 있나요?",
        answer:
          "부분 교체도 상담할 수 있습니다. 기존 제품의 규격과 바닥 고정 상태를 확인해야 합니다.",
      },
      {
        question: "차선규제봉 수리도 가능한가요?",
        answer:
          "고정 볼트나 기초부 상태에 따라 재고정이 가능할 수 있습니다. 심하게 파손된 제품은 교체가 필요할 수 있습니다.",
      },
    ],
  },
  bollard: {
    name: "볼라드 설치·교체",
    slug: "bollard",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
    intro:
      "차량 진입 제한과 보행 공간 구분을 위한 볼라드, 스텐 볼라드, 차량진입 방지봉의 신규 설치와 교체를 상담합니다.",
    works: [
      "볼라드 및 차량진입 방지봉 신규 설치",
      "스테인리스 볼라드 설치",
      "파손되거나 휘어진 볼라드 교체",
      "볼라드 고정 부위 수리 및 보수 상담",
    ],
    checks: [
      "차량 진입 제한 목적과 설치 위치",
      "볼라드 재질·규격·수량",
      "바닥 구조 및 기초 작업 필요 여부",
      "보행자와 교통약자의 통행 공간",
    ],
    faq: [
      {
        question: "파손된 볼라드도 교체할 수 있나요?",
        answer:
          "기존 볼라드의 고정 방식과 바닥 상태를 확인한 후 철거 및 교체 방법을 안내합니다.",
      },
      {
        question: "볼라드 설치 시 주의할 점은 무엇인가요?",
        answer:
          "보행 공간과 차량 동선을 검토해야 하며, 공공도로와 보행로 등은 관련 기준과 관리 주체의 승인 여부를 확인해야 합니다.",
      },
    ],
  },
};

function getPageData(params: Params) {
  const region = REGIONS[params.region];
  const service = SERVICES[params.service];

  if (!region || !service) return null;

  const district = region.districts.find(
    ([, slug]) => slug === params.district
  );

  if (!district) return null;

  return {
    regionName: region.name,
    districtName: district[0],
    regionSlug: params.region,
    districtSlug: params.district,
    service,
  };
}

export function generateStaticParams() {
  return Object.entries(REGIONS).flatMap(
    ([region, data]) =>
      data.districts.flatMap(([, district]) =>
        Object.keys(SERVICES).map((service) => ({
          region,
          district,
          service,
        }))
      )
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const values = await params;
  const data = getPageData(values);

  if (!data) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const location =
    `${data.regionName} ${data.districtName}`;

  const title =
    `${location} ${data.service.name} | 주차119`;

  const url =
    `${SITE}/area/${values.region}/${values.district}/${values.service}`;

  const description =
    `${location} ${data.service.name} 시공 상담. ${data.service.intro} 현장 사진과 설치 수량을 확인해 작업 방법을 안내합니다.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "주차119",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: data.service.image,
        },
      ],
    },
  };
}

export default async function ServiceDistrictPage({
  params,
}: Props) {
  const values = await params;
  const data = getPageData(values);

  if (!data) notFound();

  const location =
    `${data.regionName} ${data.districtName}`;

  const url =
    `${SITE}/area/${values.region}/${values.district}/${values.service}`;

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
        name: data.regionName,
        item: `${SITE}/area/${values.region}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.districtName,
        item:
          `${SITE}/area/${values.region}/${values.district}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: data.service.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs).replace(
            /</g,
            "\\u003c"
          ),
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
            {location}
            <br />
            {data.service.name}
          </h1>

          <p>{data.service.intro}</p>

          <p style={{ marginTop: 14 }}>
            설치 · 교체 · 보수 · 시공 상담
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
            <Link href={`/area/${values.region}`}>
              {data.regionName}
            </Link>
            {" / "}
            <Link
              href={`/area/${values.region}/${values.district}`}
            >
              {data.districtName}
            </Link>
            {" / "}
            <span>{data.service.name}</span>
          </nav>

          <div className="content-grid">
            <Image
              src={data.service.image}
              alt={`${location} ${data.service.name} 작업 안내 이미지`}
              width={900}
              height={675}
              className="content-image"
              priority
            />

            <div className="content-text">
              <h2>
                {location}
                <br />
                {data.service.name} 안내
              </h2>

              <p>{data.service.intro}</p>

              <p>
                현장 조건과 기존 시설물 상태에
                따라 작업 방법이 달라질 수
                있습니다. 정확한 주소와 현장
                사진을 준비하면 초기 상담에
                도움이 됩니다.
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
              {location} {data.service.name} 작업 종류
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {data.service.works.map((work) => (
              <article
                key={work}
                style={{
                  padding: 24,
                  background: "#fff",
                  border: "1px solid #e8eaed",
                  borderRadius: 10,
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    marginTop: 0,
                  }}
                >
                  {work}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 시공 전 확인사항
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
              }}
            >
              {data.service.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} {data.service.name} FAQ
            </h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
            {data.service.faq.map((item) => (
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
                  }}
                >
                  {item.question}
                </summary>

                <p
                  style={{
                    color: "#68707b",
                    lineHeight: 1.9,
                    marginTop: 14,
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              {data.districtName} 다른 시공 서비스
            </h2>
          </div>

          <div className="area-links">
            {Object.values(SERVICES)
              .filter(
                (service) =>
                  service.slug !== values.service
              )
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/area/${values.region}/${values.district}/${service.slug}`}
                >
                  {location} {service.name}
                </Link>
              ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 28,
            }}
          >
            <Link
              href={`/area/${values.region}/${values.district}`}
            >
              {location} 전체 시공 서비스 보기
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          {location} {data.service.name} 견적 상담
        </h2>

        <p>
          현장 주소, 작업 수량, 기존 시설물
          상태와 사진을 준비해 문의해 주세요.
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
