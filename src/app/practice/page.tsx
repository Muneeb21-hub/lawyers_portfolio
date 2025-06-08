// Practice Areas page route
"use client";
import { motion } from "framer-motion";

const practiceAreas = [
	{
		title: "Criminal Law",
		icon: "⚖️",
		desc: "Defense and representation in criminal cases. Comprehensive support from investigation to trial.",
	},
	{
		title: "Civil Law",
		icon: "📄",
		desc: "Resolution of civil disputes and litigation. Protecting your rights in all civil matters.",
	},
	{
		title: "Corporate Law",
		icon: "🏢",
		desc: "Legal services for businesses and corporations. Contracts, compliance, and more.",
	},
	{
		title: "Family Law",
		icon: "👨‍👩‍👧",
		desc: "Divorce, custody, and family-related legal matters. Compassionate and effective representation.",
	},
	{
		title: "Property Law",
		icon: "🏠",
		desc: "Expert legal advice and representation in property disputes, transactions, and real estate matters.",
	},
];

export default function PracticePage() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="max-w-5xl mx-auto py-16 px-4"
		>
			<h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
				Practice Areas
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{practiceAreas.map((area, i) => (
					<motion.div
						key={area.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow"
					>
						<span className="text-5xl mb-3">{area.icon}</span>
						<h2 className="font-semibold text-xl text-blue-900 mb-2">
							{area.title}
						</h2>
						<p className="text-gray-600 text-center mb-4">
							{area.desc}
						</p>
						<a
							href="/contact"
							className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
						>
							Get Legal Help
						</a>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
