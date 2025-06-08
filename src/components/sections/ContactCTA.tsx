"use client";
import { motion } from "framer-motion";

// Contact CTA section for Home page
export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 bg-blue-900 text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Ready to Discuss Your Case?</h2>
        <p className="mb-4">Contact today for a confidential consultation. Your legal solution starts here.</p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded shadow hover:bg-yellow-400 transition"
        >
          Reach Out Today
        </motion.a>
        <div className="mt-6 text-sm text-blue-100">
          <div>Office# 412 Clifton Center, Karachi, Pakistan</div>
          <div>Phone: +92 301 3563181 &nbsp;|&nbsp; Email: mbabarabro123@gmail.com</div>
        </div>
      </div>
    </motion.section>
  );
}
