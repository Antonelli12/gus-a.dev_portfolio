import { ContactSection } from "@/components/contact/contact-section";
import { SiteHeader } from "@/components/layout/site-header";
import { routeMetadata } from "@/data/metadata";

export const metadata = routeMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactSection />
    </>
  );
}
