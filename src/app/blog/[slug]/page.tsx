// Dynamic blog post route
// Example: /blog/my-first-post

"use client";
import { motion } from "framer-motion";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto py-16 px-4"
    >
      <article className="prose prose-blue max-w-none">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{frontmatter.title}</h1>
        <div className="text-gray-500 text-sm mb-8">{frontmatter.date} • {frontmatter.author}</div>
        <MDXRemote source={content} />
      </article>
    </motion.section>
  );
}
