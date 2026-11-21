import { notFound } from "next/navigation";
import { getPage, jsonLd } from "./site";

export default function PageBody({ path }: { path: string }) {
  const page = getPage(path);
  if (!page) notFound();
  return (
    <>
      {page.ld.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(item) }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}
