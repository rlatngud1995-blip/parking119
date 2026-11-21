import type { Metadata } from "next";
import { getSite } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "페이지를 찾을 수 없습니다 | 주차119" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <div dangerouslySetInnerHTML={{ __html: getSite().notFound }} />;
}
