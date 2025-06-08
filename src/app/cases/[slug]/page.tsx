// Dynamic case study route
// Example: /cases/successful-case

import CaseMotionSection from "@/components/CaseMotionSection";
import { getAllCaseSlugs, getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = await getAllCaseSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getCaseBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.outcome,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getCaseBySlug(slug);
  if (!frontmatter) return notFound();
  return <CaseMotionSection frontmatter={frontmatter} content={content} />;
}
