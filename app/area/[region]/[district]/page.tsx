
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
    description:
      "주차구획선 신규 도색과 기존 주차라인 재도색을 상담합니다.",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
  },
  {
    name: "카스토퍼 설치",
    slug: "car-stopper",
    description:
      "주차블록 신규 설치와 파손된 카스토퍼 교체를 상담합니다.",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
  },
  {
    name: "차선규제봉 설치",
    slug: "traffic-post",
    description:
      "탄력봉 및 시선유도봉 설치와 파손 제품 교체를 상담합니다.",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
  },
  {
    name: "볼라드 설치",
    slug: "bollard",
    description:
      "차량진입 방지봉과 스테인리스 볼라드 설치를 상담합니다.",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
  },
];

type Props = {
  params: Promise<{
    region: string;
    district: string;
  }>;
};

function getDistrict(
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
  const data = getDistrict(region, district);

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
      `${location} 주차장 라인 도색`,
      `${location} 카스토퍼 설치`,
      `${location} 차선규제봉 설치`,
      `${location} 볼라드 설치`,
      `${location} 주차블록 설치`,
    ],
    alternates: {
      canonical:
        `${SITE}/area/${region}/${district}`,
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
  const data = getDistrict(region, district);

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
            주차장 시설물 설치
          </h1>

          <p>
            {location} 주차라인 도색,
            카스토퍼, 차선규제봉,
            볼라드 설치 상담
          </p>

          <p style={{ marginTop: 14 }}>
            서울 · 경기 · 인천 · 충남 · 충북
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>
              {location} 주차장 시공 서비스
            </h2>
            <p>
              필요한 시공 종류를 선택해
              상세 내용을 확인하세요.
            </p>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="service-card"
              >
                <Image
                  src={service.image}
                  alt={`${location} ${service.name} 시공 안내`}
                  width={800}
                  height={600}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                />

                <div className="service-card-content">
                  <h3>
                    {location} {service.name}
                  </h3>

                  <p>{service.description}</p>

                  <span className="service-link">
                    자세히 보기 →
                  </span>
                </div>
              </Link>
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
                {location}
                <br />
                주차장 시공 상담
              </h2>

              <p>
                아파트, 상가, 공장, 건물
                주차장의 주차라인 도색과
                안전시설물 설치를 상담합니다.
              </p>

              <p>
                시공 위치, 주차면 수,
                설치 수량, 바닥 상태 등에
                따라 작업 방법과 비용이
                달라질 수 있습니다.
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
              {location} 시공 문의 안내
            </h2>
          </div>

          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            <h3>주차라인 도색</h3>
            <p>
              {location}의 주차장 신규 구획선
              도색 및 기존 주차선 재도색을
              상담합니다. 도색 면적과 바닥
              상태를 확인하여 작업 범위를
              안내합니다.
            </p>

            <h3>카스토퍼 설치</h3>
            <p>
              {location}의 아파트, 상가,
              건물 주차장 카스토퍼 신규
              설치와 파손된 주차블록 교체를
              상담합니다.
            </p>

            <h3>차선규제봉 설치</h3>
            <p>
              {location} 주차장 진입로와
              차량 통행구역의 탄력봉,
              시선유도봉 설치 및 교체를
              상담합니다.
            </p>

            <h3>볼라드 설치</h3>
            <p>
              {location}의 차량진입 방지봉,
              스테인리스 볼라드 설치 및
              파손 제품 교체를 상담합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>
              다른 {data.region.name} 지역 보기
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

          <p style={{ textAlign: "center", marginTop: 25 }}>
            <Link href={`/area/${region}`}>
              {data.region.name} 전체 지역으로 돌아가기
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>
          {location} 주차장 시공 문의
        </h2>

        <p>
          주차라인 도색 · 카스토퍼 ·
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
