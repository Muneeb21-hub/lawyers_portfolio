import Image from "next/image";
import AboutPreview from "@/components/sections/AboutPreview";
import PracticeAreasPreview from "@/components/sections/PracticeAreasPreview";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactCTA from "@/components/sections/ContactCTA";

// Home page hero section
export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 text-center bg-gradient-to-b from-blue-900 to-white overflow-hidden">
        <Image
          src="/images/background_image.jpg"
          alt="Lawyer background"
          fill
          className="object-cover object-center opacity-30 -z-10"
          priority
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Trusted Legal Representation You Can Rely On
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional, modern, and responsive portfolio for your legal expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded shadow hover:bg-yellow-400 transition"
            >
              View Profile
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded shadow hover:bg-gray-100 transition"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
      <AboutPreview />
      <PracticeAreasPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
