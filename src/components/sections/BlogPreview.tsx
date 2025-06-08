"use client";
import { motion } from "framer-motion";

// Blog posts preview for Home page (static for now)
const posts = [
	{
		title: "Understanding Your Rights in Criminal Cases",
		excerpt:
			"A quick overview of your fundamental rights if you are facing criminal charges...",
		date: "2025-06-01",
		slug: "rights-in-criminal-cases",
	},
	{
		title: "How to Prepare for a Civil Lawsuit",
		excerpt:
			"Essential steps and tips to get ready for your day in court...",
		date: "2025-05-20",
		slug: "prepare-for-civil-lawsuit",
	},
	{
		title: "Corporate Law: What Every Business Owner Should Know",
		excerpt:
			"Key legal considerations for running a business in compliance with the law...",
		date: "2025-05-10",
		slug: "corporate-law-basics",
	},
];

export default function BlogPreview() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="py-12 bg-gray-50"
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
					Recent Blog Posts
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{posts.map((post, i) => (
						<motion.a
							key={post.slug}
							href={`/blog/${post.slug}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="block bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow"
						>
							<h3 className="font-semibold text-lg text-blue-900 mb-2">
								{post.title}
							</h3>
							<p className="text-gray-600 text-sm mb-2">
								{post.excerpt}
							</p>
							<span className="text-xs text-gray-400">
								{post.date}
							</span>
						</motion.a>
					))}
				</div>
				<div className="text-center mt-6">
					<a
						href="/blog"
						className="text-blue-900 font-semibold underline hover:text-blue-700 transition"
					>
						Read All Posts
					</a>
				</div>
			</div>
		</motion.section>
	);
}
