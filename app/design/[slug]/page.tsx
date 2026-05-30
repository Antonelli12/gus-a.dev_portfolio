import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/shared/project-detail-page";
import { SiteHeader } from "@/components/layout/site-header";
import {
  availableDesignCaseStudies,
  getAvailableDesignCaseStudy,
} from "@/data/design";
import { projectDetailMetadata } from "@/data/metadata";

type DesignDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return availableDesignCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: DesignDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getAvailableDesignCaseStudy(slug);

  if (!caseStudy) {
    return projectDetailMetadata({
      title: "Design Project Not Found",
      section: "Design",
      description: "The requested design case study could not be found.",
      path: `/design/${slug}`,
    });
  }

  return projectDetailMetadata({
    title: caseStudy.title,
    section: "Design",
    description: caseStudy.detail.metadataDescription,
    path: caseStudy.detail.route,
  });
}

export default async function DesignDetailPage({
  params,
}: DesignDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getAvailableDesignCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ProjectDetailPage project={caseStudy} section="design" />
    </>
  );
}
