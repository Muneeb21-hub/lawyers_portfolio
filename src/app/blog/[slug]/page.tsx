// Dynamic blog post route
// Example: /blog/my-first-post

import BlogMotionSection from "@/components/BlogMotionSection";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getBlogBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getBlogBySlug(slug);
  if (!frontmatter) return notFound();
  return <BlogMotionSection frontmatter={frontmatter} content={content} />;
}
