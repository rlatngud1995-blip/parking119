import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { areaPaths, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ region: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPaths(1).map(([region]) => ({ region }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  return pageMetadata(`/area/${region}`);
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  return <PageBody path={`/area/${region}`} />;
}
