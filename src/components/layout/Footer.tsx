import Link from "next/link";

// Simple placeholder for a law-themed footer
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-4 mb-2 md:mb-0">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/practice" className="hover:underline">Practice</Link>
          <Link href="/cases" className="hover:underline">Cases</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/legal" className="hover:underline">Legal</Link>
        </div>
        <div className="flex gap-3">
          {/* Social media icons can be added here */}
        </div>
        <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Muhammad Babar. All rights reserved.</div>
      </div>
    </footer>
  );
}
