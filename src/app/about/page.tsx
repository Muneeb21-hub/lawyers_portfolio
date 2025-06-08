// About page route
"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto py-16 px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-400 h-100 rounded-full bg-gradient-to-br from-blue-900 to-yellow-400 shadow-lg flex items-center justify-center overflow-hidden mb-6 md:mb-0">
          {/* Replace with actual lawyer photo */}
          <img src="/images/lawyer_pic.jpg" alt="Adv. Muhammad Babar" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Adv. Muhammad Babar</h1>
          <p className="text-gray-700 mb-4">
            Advocate Muhammad Babar is a dedicated legal professional with over <strong>4 years of hands-on experience</strong> in <strong>criminal defense</strong>, <strong>civil litigation</strong>, and <strong>corporate advisory</strong> across district courts and the Balochistan High Court. Known for his meticulous legal research, strategic case handling, and client-centered advocacy, he has successfully represented individuals, businesses, and institutions in a wide array of complex legal matters.
          </p>
          <p className="text-gray-700 mb-4">
            With a sharp understanding of Pakistan’s legal framework and a results-driven approach, he has built a reputation for delivering favorable outcomes—from securing major settlements in civil disputes to achieving acquittals in high-stakes criminal cases. His expertise also extends to contract drafting, regulatory compliance, business incorporations, and mediation of corporate conflicts.
          </p>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li><b>Education:</b> LLB, University Law College</li>
            <li><b>Bar Memberships:</b> Balochistan Bar Council</li>
            <li><b>Experience:</b> 4+ years in active legal practice</li>
            <li><b>Languages:</b> English, Urdu, Sindhi</li>
            <li><b>Awards:</b> Best Advocate 2024</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
