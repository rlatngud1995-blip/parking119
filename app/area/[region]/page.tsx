
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://parking119.com";
const PHONE = "010-9413-4686";

type Region = {
  name: string;
  description: string;
  locations: string[];
};

const REGIONS: Record<string, Region> = {
  seoul: {
    name: "서울",
    description:
      "서울 지역 아파트, 상가, 빌딩 및 주차장 시설물 설치 상담을 안내합니다.",
    locations: [
      "강남구", "서초구", "송파구", "강동구",
      "강서구", "양천구", "영등포구", "구로구",
      "금천구", "관악구", "동작구", "마포구",
      "용산구", "성동구", "광진구", "중구",
      "종로구", "서대문구", "은평구", "성북구",
      "강북구", "도봉구", "노원구", "중랑구",
      "동대문구",
    ],
  },
  gyeonggi: {
    name: "경기",
    description:
      "경기도 아파트, 상가, 공장, 건물 주차장 도색 및 안전시설물 설치 상담을 안내합니다.",
    locations: [
      "수원", "성남", "용인", "화성", "평택",
      "안성", "오산", "안양", "군포", "의왕",
      "과천", "광명", "부천", "시흥", "안산",
      "김포", "고양", "파주", "양주", "의정부",
      "동두천", "포천", "남양주", "구리",
      "하남", "광주", "이천", "여주", "양평",
      "가평", "연천",
    ],
  },
  incheon: {
    name: "인천",
    description:
      "인천 지역 주차라인 도색과 주차장 안전시설물 신규 설치 및 교체 상담을 안내합니다.",
    locations: [
      "중구", "동구", "미추홀구", "연수구",
      "남동구", "부평구", "계양구", "서구",
      "강화군", "옹진군",
    ],
  },
  chungnam: {
    name: "충남",
    description:
      "충청남도 아파트, 상가, 공장, 주차장 시설물 설치와 주차구획선 도색 상담을 안내합니다.",
    locations: [
      "천안", "아산", "공주", "보령", "서산",
      "논산", "계룡", "당진", "금산", "부여",
      "서천", "청양", "홍성", "예산", "태안",
    ],
  },
  chungbuk: {
    name: "충북",
    description:
      "충청북도 주차라인 도색, 카스토퍼, 차선규제봉, 볼라드 설치 및 교체 상담을 안내합니다.",
    locations: [
      "청주", "충주", "제천", "보은", "옥천",
      "영동", "증평", "진천", "괴산", "음성",
      "단양",
    ],
  },
};

const SERVICES = [
  {
    name: "주차라인 도색",
    slug: "parking-line",
    description:
      "신규 주차구획선 도색, 기존 주차선 재도색 및 장애인 주차구역 도색 상담",
    image:
      "/B3F40103-F8FC-48AA-9110-5BEE366D5031.png",
  },
  {
    name: "카스토퍼 설치",
    slug: "car-stopper",
    description:
      "주차블록 신규 설치, 파손된 카스토퍼 철거 및 교체 상담",
    image:
      "/19B5F346-C059-467C-8C8C-A28AC5022ADA.png",
  },
  {
    name: "차선규제봉 설치",
    slug: "traffic-post",
    description:
      "탄력봉 및 시선유도봉 신규 설치, 파손된 차선규제봉 교체 상담",
    image:
      "/2ECD662C-1E98-469A-986F-D12256EDBDD0.png",
  },
  {
    name: "볼라드 설치",
    slug: "bollard",
    description:
      "차량진입 방지봉, 스테인리스 볼라드 설치 및 교체 상담",
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
      `${data.name} 주차라인 도색, 카스토퍼 설치, 차선규제봉 설치, 볼라드 설치 상담. ${data.description} 주차119 010-9413-4686`,
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

          <p style={{ marginTop: 12 }}>
            카스토퍼 · 차선규제봉 · 볼라드 설치
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{data.name} 주차장 시공 서비스</h2>
            <p>
              주차라인 도색부터 안전시설물
              설치 및 교체까지 상담합니다.
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
            <h2>{data.name} 시공 상담 지역</h2>
            <p>
              아래 지역의 주차장 시설물
              시공 상담을 안내합니다.
            </p>
          </div>

          <div className="area-links">
            {data.locations.map((location) => (
              <span
                key={location}
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  background: "#fff",
                  border: "1px solid #e8eaed",
                  borderRadius: 7,
                  fontSize: 14,
                }}
              >
                {location}
              </span>
            ))}
          </div>

          <p
            style={{
              marginTop: 25,
              textAlign: "center",
              color: "#68707b",
              fontSize: 14,
            }}
          >
            현장 위치와 작업 규모에 따라
            출장 및 시공 일정은 달라질 수 있습니다.
          </p>
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
                주차장 위치, 필요한 작업 종류,
                설치 수량과 현장 상태에 따라
                시공 방법과 견적이 달라집니다.
              </p>

              <p>
                주차라인 도색, 카스토퍼 설치,
                차선규제봉 설치, 볼라드 설치가
                필요하다면 전화로 문의해 주세요.
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
          주차라인 도색 및 주차장
          안전시설물 설치 상담
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
