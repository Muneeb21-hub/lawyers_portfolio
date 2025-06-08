"use client";
import { motion } from "framer-motion";

// Testimonials carousel preview for Home page
const testimonials = [
	{
		name: "Memona Haris",
		text: "Professional, knowledgeable, and truly cares about clients. Highly recommended!",
	},
	{
		name: "Ahmed Khan",
		text: "Helped me win my case with expertise and compassion. Thank you!",
	},
	// Add more testimonials as needed
];

export default function TestimonialsPreview() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="py-12 bg-white"
		>
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-2xl font-bold text-blue-900 mb-8">
					Testimonials
				</h2>
				<div className="flex flex-col gap-6">
					{testimonials.map((t, i) => (
						<motion.blockquote
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
						>
							<p className="text-lg text-gray-800 italic mb-2">“{t.text}”</p>
							<footer className="text-blue-900 font-semibold">
								— {t.name}
							</footer>
						</motion.blockquote>
					))}
				</div>
			</div>
		</motion.section>
	);
}
