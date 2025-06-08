// Dynamic case study route
// Example: /cases/successful-case

import CaseMotionSection from "@/components/CaseMotionSection";
import { getAllCaseSlugs, getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { frontmatter } = getCaseBySlug(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.outcome,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getCaseBySlug(params.slug);
  if (!frontmatter) return notFound();
  return <CaseMotionSection frontmatter={frontmatter} content={content} />;
}
