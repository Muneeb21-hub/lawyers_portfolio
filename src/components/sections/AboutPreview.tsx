"use client";
import { motion } from "framer-motion";

// About preview section for Home page
export default function AboutPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 bg-white text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-yellow-400 shadow-lg mb-4 flex items-center justify-center overflow-hidden">
          {/* Replace with actual lawyer photo */}
          <img src="/images/lawyer_pic.jpg" alt="Adv. Muhammad Babar" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-900">About Me</h2>
        <p className="text-gray-700 mb-4">
          Experienced lawyer dedicated to providing trustworthy and expert legal
          services. Specializing in criminal, civil, and corporate law with a
          proven track record of success.
        </p>
        <a
          href="/about"
          className="text-blue-900 font-semibold underline hover:text-blue-700 transition"
        >
          Read Full Bio
        </a>
      </div>
    </motion.section>
  );
}
