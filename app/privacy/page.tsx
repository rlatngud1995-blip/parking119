import type { Metadata } from "next";
import PageBody from "@/lib/page-body";
import { pageMetadata } from "@/lib/site";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return pageMetadata("/privacy");
}

export default function Privacy() {
  return <PageBody path="/privacy" />;
}
