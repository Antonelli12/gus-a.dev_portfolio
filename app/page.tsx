import { HeroSection } from "@/components/home/hero-section";
import { SiteHeader } from "@/components/layout/site-header";
import { routeMetadata } from "@/data/metadata";

export const metadata = routeMetadata.home;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
    </>
  );
}
