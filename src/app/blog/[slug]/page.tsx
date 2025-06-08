// Dynamic blog post route
// Example: /blog/my-first-post

import BlogMotionSection from "@/components/BlogMotionSection";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { frontmatter } = getBlogBySlug(params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getBlogBySlug(params.slug);
  if (!frontmatter) return notFound();
  return <BlogMotionSection frontmatter={frontmatter} content={content} />;
}
