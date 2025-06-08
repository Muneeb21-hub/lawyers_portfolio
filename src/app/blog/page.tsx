// Blog list page route
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blog";
import { useEffect, useState } from "react";

type BlogPost = {
	slug: string;
	title?: string;
	excerpt?: string;
	date?: string;
};

export default function BlogPage() {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const slugsRaw = getAllBlogSlugs();
		const slugs = Array.isArray(slugsRaw) ? slugsRaw : [];
		const loadedPosts: BlogPost[] = slugs.map((slug) => {
			const { frontmatter } = getBlogBySlug(slug);
			return { slug, ...(frontmatter || {}) };
		});
		setPosts(loadedPosts);
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="max-w-5xl mx-auto py-16 px-4"
		>
			<h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{posts.length === 0 ? (
					<div className="col-span-full text-center text-gray-400 py-8">
						<p className="mb-2">No blog posts found.</p>
						<p className="text-xs">Please check back later for new content.</p>
					</div>
				) : (
					posts.map((post, i) => (
						<motion.a
							key={post.slug}
							href={`/blog/${post.slug}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
						>
							<h2 className="font-semibold text-lg text-blue-900 mb-2">{post.title || post.slug}</h2>
							<p className="text-gray-600 text-sm mb-2">{post.excerpt || ""}</p>
							<span className="text-xs text-gray-400">{post.date || ""}</span>
						</motion.a>
					))
				)}
			</div>
		</motion.section>
	);
}
