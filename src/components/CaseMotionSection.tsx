"use client";
import { motion } from "framer-motion";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { CaseFrontmatter } from "@/lib/cases";

export default function CaseMotionSection({ frontmatter, content }: { frontmatter: CaseFrontmatter, content: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto py-16 px-4"
    >
      <article className="prose prose-blue max-w-none">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{frontmatter.title}</h1>
        <div className="text-gray-500 text-sm mb-2">{frontmatter.type}</div>
        <div className="text-green-700 font-bold mb-4">{frontmatter.outcome}</div>
        {frontmatter.testimonial && (
          <blockquote className="italic text-gray-600 border-l-4 border-blue-900 pl-3 mb-4">“{frontmatter.testimonial}”</blockquote>
        )}
        <MDXRemote source={content} />
      </article>
    </motion.section>
  );
}
