import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { areaPaths, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ region: string; district: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPaths(3).map(([region, district, service]) => ({ region, district, service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, district, service } = await params;
  return pageMetadata(`/area/${region}/${district}/${service}`);
}

export default async function DistrictServicePage({ params }: Props) {
  const { region, district, service } = await params;
  return <PageBody path={`/area/${region}/${district}/${service}`} />;
}
