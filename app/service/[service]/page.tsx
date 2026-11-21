import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { pageMetadata, servicePaths } from "@/lib/site";

type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePaths().map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  return pageMetadata(`/service/${service}`);
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  return <PageBody path={`/service/${service}`} />;
}
