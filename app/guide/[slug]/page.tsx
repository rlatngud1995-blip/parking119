import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { getSite, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(getSite().pages)
    .filter((p) => p.startsWith("/guide/"))
    .map((p) => ({ slug: p.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`/guide/${slug}`);
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  return <PageBody path={`/guide/${slug}`} />;
}
