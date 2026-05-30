import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectDetailPage } from "@/components/shared/project-detail-page";
import {
  availableDevelopmentProjects,
  getAvailableDevelopmentProject,
} from "@/data/development";
import { projectDetailMetadata } from "@/data/metadata";

type DevelopmentDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return availableDevelopmentProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: DevelopmentDetailPageProps) {
  const { slug } = await params;
  const project = getAvailableDevelopmentProject(slug);

  if (!project) {
    return projectDetailMetadata({
      title: "Development Project Not Found",
      section: "Development",
      description: "The requested development project could not be found.",
      path: `/development/${slug}`,
    });
  }

  return projectDetailMetadata({
    title: project.title,
    section: "Development",
    description: project.detail.metadataDescription,
    path: project.detail.route,
  });
}

export default async function DevelopmentDetailPage({
  params,
}: DevelopmentDetailPageProps) {
  const { slug } = await params;
  const project = getAvailableDevelopmentProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ProjectDetailPage project={project} section="development" />
    </>
  );
}
