// Legal Notice page route
"use client";
import { motion } from "framer-motion";

export default function LegalPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto py-16 px-4"
    >
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Legal Notice
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-8 text-gray-700 space-y-6">
        <section>
          <h2 className="font-semibold text-lg text-blue-900 mb-2">
            Terms of Service
          </h2>
          <p>
            The information provided on this website is intended solely for general informational purposes and should not be construed as legal advice under any circumstances. While every effort is made to ensure accuracy, laws and regulations in Pakistan may change and vary by jurisdiction. Viewing or using this site does not establish an attorney-client relationship with Advocate Muhammad Babar or any affiliated entity. Legal consultation is only established upon a signed agreement.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-blue-900 mb-2">
            Privacy Policy
          </h2>
          <p>
            We are committed to protecting your privacy. Any personal or contact information submitted through this website—such as through forms or email—will be treated as confidential and used exclusively for the purpose of responding to your legal inquiry or managing client engagement. We do not share your information with third parties unless legally required to do so under Pakistani law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg text-blue-900 mb-2">
            Disclaimer
          </h2>
          <p>
            Past case outcomes, verdicts, or settlements presented on this website are illustrative only and do not guarantee similar results in future cases. Each legal matter is unique and requires individualized assessment. For legal advice tailored to your specific circumstances, please consult directly with Advocate Muhammad Babar through an official meeting or appointment.
          </p>
        </section>
      </div>
    </motion.section>
  );
}
