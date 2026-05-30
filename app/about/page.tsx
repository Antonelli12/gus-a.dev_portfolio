import { AboutSection } from "@/components/about/about-section";
import { SiteHeader } from "@/components/layout/site-header";
import { routeMetadata } from "@/data/metadata";

export const metadata = routeMetadata.about;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutSection />
    </>
  );
}
