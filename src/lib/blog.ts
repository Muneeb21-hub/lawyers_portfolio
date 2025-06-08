"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllBlogSlugs() {
  const dir = path.join(process.cwd(), "content/blog");
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

export async function getBlogBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data, content };
}
