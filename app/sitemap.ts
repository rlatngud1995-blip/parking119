
import type { MetadataRoute } from "next";

const SITE = "https://parking119.com";

const SERVICES = [
  "parking-line",
  "car-stopper",
  "traffic-post",
  "bollard",
];

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
  const home: MetadataRoute.Sitemap = [
    {
      url: SITE,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const services: MetadataRoute.Sitemap =
    SERVICES.map((service) => ({
      url: `${SITE}/service/${service}`,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  const regions: MetadataRoute.Sitemap =
    Object.keys(REGIONS).map((region) => ({
      url: `${SITE}/area/${region}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const districts: MetadataRoute.Sitemap =
    Object.entries(REGIONS).flatMap(
      ([region, districtList]) =>
        districtList.map((district) => ({
          url: `${SITE}/area/${region}/${district}`,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
    );

  return [
    ...home,
    ...services,
    ...regions,
    ...districts,
  ];
}
