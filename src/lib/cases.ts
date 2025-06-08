"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllCaseSlugs() {
  const dir = path.join(process.cwd(), "content/cases");
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

export function getCaseBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "content/cases", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data, content };
}
