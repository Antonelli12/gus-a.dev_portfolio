import { DevSection } from "@/components/development/dev-section";
import { SiteHeader } from "@/components/layout/site-header";
import { routeMetadata } from "@/data/metadata";

export const metadata = routeMetadata.development;

export default function DevelopmentPage() {
  return (
    <>
      <SiteHeader />
      <DevSection />
    </>
  );
}
