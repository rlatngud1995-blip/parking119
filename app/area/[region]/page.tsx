
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
  description: string;
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
    description:
      "서울 지역 주차라인 도색, 카스토퍼, 차선규제봉, 볼라드 설치 상담을 안내합니다.",
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
    description:
      "경기도 주차장 라인 도색 및 주차장 안전시설물 설치 상담을 안내합니다.",
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
    description:
      "인천 지역 주차라인 도색 및 주차장 시설물 설치 상담을 안내합니다.",
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
    description:
      "충청남도 주차장 도색, 카스토퍼, 차선규제봉 및 볼라드 설치 상담을 안내합니다.",
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
    description:
      "충청북도 주차라인 도색 및 주차장 안전시설물 설치 상담을 안내합니다.",
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
      "신규 주차구획선 도색 및 기존 주차선 재도색",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
  },
  {
    name: "카스토퍼 설치",
    slug: "car-stopper",
    description:
      "주차블록 신규 설치 및 파손 카스토퍼 교체",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
  },
  {
    name: "차선규제봉 설치",
    slug: "traffic-post",
    description:
      "탄력봉 및 시선유도봉 설치와 교체",
    image:
      "/2ECD662C-1E98-469A-986F-D122566EDBD0.png",
  },
  {
    name: "볼라드 설치",
    slug: "bollard",
    description:
      "차량진입 방지봉 및 스텐 볼라드 설치",
    image:
      "/CB826D31-99D4-4720-AB49-26A9C7F83B26.png",
  },
];

type Props = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return Object.keys(REGIONS).map((region) => ({
    region,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region } = await params;
  const data = REGIONS[region];

  if (!data) {
    return {
      title: "지역을 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${data.name} 주차라인 도색·카스토퍼·차선규제봉·볼라드 설치`,
    description:
      `${data.description} 주차119 시공 상담 ${PHONE}`,
    alternates: {
      canonical: `${SITE}/area/${region}`,
    },
    openGraph: {
      title: `${data.name} 주차장 시설물 시공 | 주차119`,
      description: data.description,
      url: `${SITE}/area/${region}`,
      type: "website",
    },
  };
}

export default async function RegionPage({
  params,
}: Props) {
  const { region } = await params;
  const data = REGIONS[region];

  if (!data) notFound();

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
            PARKING119 · SERVICE AREA
          </p>

          <h1>
            {data.name} 주차라인 도색
            <br />
            주차장 안전시설물 설치
          </h1>

          <p>{data.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{data.name} 주차장 시공 서비스</h2>
            <p>
              주차라인 도색부터 안전시설물
              설치까지 상담합니다.
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
                  alt={`${data.name} ${service.name} 안내`}
                  width={700}
                  height={525}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                />

                <div className="service-card-content">
                  <h3>
                    {data.name} {service.name}
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
          <div className="section-heading">
            <h2>{data.name} 지역별 시공 안내</h2>
            <p>
              시·군·구를 선택하면 해당 지역
              개별페이지로 이동합니다.
            </p>
          </div>

          <div className="area-links">
            {data.districts.map((district) => (
              <Link
                key={district.slug}
                href={`/area/${region}/${district.slug}`}
              >
                {district.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
                {data.name} 주차장 시공
                <br />
                견적 상담 안내
              </h2>

              <p>
                주차장 위치, 설치 수량,
                바닥 상태와 작업 범위에 따라
                시공 방법과 견적이 달라집니다.
              </p>

              <p>
                주차라인 도색, 카스토퍼 설치,
                차선규제봉 설치, 볼라드 설치
                상담이 필요하다면 문의해 주세요.
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

      <section className="cta-section">
        <h2>{data.name} 주차장 시공 문의</h2>
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
