"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllCaseSlugs() {
  const dir = path.join(process.cwd(), "content/cases");
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

export async function getCaseBySlug(slug: string): Promise<{ frontmatter: CaseFrontmatter; content: string }> {
  const filePath = path.join(process.cwd(), "content/cases", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data as CaseFrontmatter, content };
}

export type CaseFrontmatter = {
  title?: string;
  type?: string;
  outcome?: string;
  testimonial?: string;
  [key: string]: unknown;
};
