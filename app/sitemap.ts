
import type { MetadataRoute } from "next";

const SITE = "https://parking119.com";

const SERVICES = [
  "parking-line",
  "car-stopper",
  "traffic-post",
  "bollard",
] as const;

const REGIONS: Record<string, string[]> = {
  seoul: [
    "gangnam",
    "seocho",
    "songpa",
    "gangdong",
    "gangseo",
    "yangcheon",
    "yeongdeungpo",
    "guro",
    "geumcheon",
    "gwanak",
    "dongjak",
    "mapo",
    "yongsan",
    "seongdong",
    "gwangjin",
    "jung",
    "jongno",
    "seodaemun",
    "eunpyeong",
    "seongbuk",
    "gangbuk",
    "dobong",
    "nowon",
    "jungnang",
    "dongdaemun",
  ],

  gyeonggi: [
    "suwon",
    "seongnam",
    "yongin",
    "hwaseong",
    "pyeongtaek",
    "anseong",
    "osan",
    "anyang",
    "gunpo",
    "uiwang",
    "gwacheon",
    "gwangmyeong",
    "bucheon",
    "siheung",
    "ansan",
    "gimpo",
    "goyang",
    "paju",
    "yangju",
    "uijeongbu",
    "dongducheon",
    "pocheon",
    "namyangju",
    "guri",
    "hanam",
    "gwangju",
    "icheon",
    "yeoju",
    "yangpyeong",
    "gapyeong",
    "yeoncheon",
  ],

  incheon: [
    "jung",
    "dong",
    "michuhol",
    "yeonsu",
    "namdong",
    "bupyeong",
    "gyeyang",
    "seo",
    "ganghwa",
    "ongjin",
  ],

  chungnam: [
    "cheonan",
    "asan",
    "gongju",
    "boryeong",
    "seosan",
    "nonsan",
    "gyeryong",
    "dangjin",
    "geumsan",
    "buyeo",
    "seocheon",
    "cheongyang",
    "hongseong",
    "yesan",
    "taean",
  ],

  chungbuk: [
    "cheongju",
    "chungju",
    "jecheon",
    "boeun",
    "okcheon",
    "yeongdong",
    "jeungpyeong",
    "jincheon",
    "goesan",
    "eumseong",
    "danyang",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. 홈페이지
  const home: MetadataRoute.Sitemap = [
    {
      url: SITE,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // 2. 시공 카테고리 4개
  const services: MetadataRoute.Sitemap =
    SERVICES.map((service) => ({
      url: `${SITE}/service/${service}`,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  // 3. 광역 지역 5개
  const regions: MetadataRoute.Sitemap =
    Object.keys(REGIONS).map((region) => ({
      url: `${SITE}/area/${region}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // 4. 시·군·구 기본 페이지 92개
  const districts: MetadataRoute.Sitemap =
    Object.entries(REGIONS).flatMap(
      ([region, districtList]) =>
        districtList.map((district) => ({
          url: `${SITE}/area/${region}/${district}`,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
    );

  // 5. 지역별 시공 카테고리 전용 페이지 368개
  const districtServices: MetadataRoute.Sitemap =
    Object.entries(REGIONS).flatMap(
      ([region, districtList]) =>
        districtList.flatMap((district) =>
          SERVICES.map((service) => ({
            url: `${SITE}/area/${region}/${district}/${service}`,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          }))
        )
    );

  // 6. 중복 URL 제거
  const allPages: MetadataRoute.Sitemap = [
    ...home,
    ...services,
    ...regions,
    ...districts,
    ...districtServices,
  ];

  return Array.from(
    new Map(
      allPages.map((page) => [page.url, page])
    ).values()
  );
}
