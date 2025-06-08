// Simple placeholder for a law-themed footer
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/practice" className="hover:underline">Practice</a>
          <a href="/cases" className="hover:underline">Cases</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/legal" className="hover:underline">Legal</a>
        </div>
        <div className="flex gap-3">
          {/* Social media icons can be added here */}
        </div>
        <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Muhammad Babar. All rights reserved.</div>
      </div>
    </footer>
  );
}
