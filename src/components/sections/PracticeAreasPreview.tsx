"use client";
import { motion } from "framer-motion";

// Practice Areas preview section for Home page
const practiceAreas = [
	{ title: "Criminal Law", icon: "⚖️", desc: "Defense and representation in criminal cases." },
	{ title: "Civil Law", icon: "📄", desc: "Resolution of civil disputes and litigation." },
	{ title: "Corporate Law", icon: "🏢", desc: "Legal services for businesses and corporations." },
	{ title: "Family Law", icon: "👨‍👩‍👧", desc: "Divorce, custody, and family-related legal matters." },
	// Add more as needed
];

export default function PracticeAreasPreview() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="py-12 bg-gray-50"
		>
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Practice Areas</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{practiceAreas.map((area, i) => (
						<motion.div
							key={area.title}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
						>
							<span className="text-4xl mb-2">{area.icon}</span>
							<h3 className="font-semibold text-lg text-blue-900 mb-1">{area.title}</h3>
							<p className="text-gray-600 text-sm text-center">{area.desc}</p>
						</motion.div>
					))}
				</div>
				<div className="text-center mt-6">
					<a
						href="/practice"
						className="text-blue-900 font-semibold underline hover:text-blue-700 transition"
					>
						See All Specializations
					</a>
				</div>
			</div>
		</motion.section>
	);
}
