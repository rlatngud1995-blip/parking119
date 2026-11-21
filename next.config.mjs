/** @type {import('next').NextConfig} */
const nextConfig = {
  // 페이지 데이터 파일이 서버 함수에도 함께 배포되도록 포함
  outputFileTracingIncludes: {
    "/**/*": ["./data/site.json"],
  },
};

export default nextConfig;
