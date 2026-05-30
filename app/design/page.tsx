import { DesignSection } from "@/components/design/design-section";
import { SiteHeader } from "@/components/layout/site-header";
import { routeMetadata } from "@/data/metadata";

export const metadata = routeMetadata.design;

export default function UxPage() {
  return (
    <>
      <SiteHeader />
      <DesignSection />
    </>
  );
}
