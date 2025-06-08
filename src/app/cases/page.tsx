// Case Studies page route
"use client";
import { motion } from "framer-motion";

const cases = [
	{
		title: "Abdul Haseeb vs. State",
		type: "Criminal Law",
		outcome: "Won acquittal for client in high-profile case.",
		testimonial: "I am forever grateful for the dedication and expertise!",
	},
	{
		title: "Ahmed Textiles Pvt. Ltd. vs. PakGlobal Industries Ltd.",
		type: "Civil Litigation – Breach of Commercial Contract",
		outcome: "Successfully negotiated a settlement of PKR 340 million (approx. USD 1.2 million)",
		testimonial: "Professional and relentless in their pursuit of justice. We felt fully represented and protected throughout the entire process. Mr. Imran Ahmed, CEO, Ahmed Textiles Pvt. Ltd.",
	},
	{
		title: "Family Dispute - Memona Haris",
		type: "Family Law",
		outcome: "Achieved favorable custody arrangement.",
		testimonial: null,
	},
];

export default function CasesPage() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="max-w-5xl mx-auto py-16 px-4"
		>
			<h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
				Case Studies
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{cases.map((c, i) => (
					<motion.div
						key={c.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 hover:shadow-2xl transition-shadow"
					>
						<h2 className="font-semibold text-lg text-blue-900">
							{c.title}
						</h2>
						<div className="text-sm text-gray-500 mb-1">{c.type}</div>
						<div className="text-green-700 font-bold mb-2">
							{c.outcome}
						</div>
						{c.testimonial && (
							<blockquote className="italic text-gray-600 border-l-4 border-blue-900 pl-3">
								“{c.testimonial}”
							</blockquote>
						)}
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
