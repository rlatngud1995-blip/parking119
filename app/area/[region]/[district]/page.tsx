import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { areaPaths, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ region: string; district: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPaths(2).map(([region, district]) => ({ region, district }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, district } = await params;
  return pageMetadata(`/area/${region}/${district}`);
}

export default async function DistrictPage({ params }: Props) {
  const { region, district } = await params;
  return <PageBody path={`/area/${region}/${district}`} />;
}
