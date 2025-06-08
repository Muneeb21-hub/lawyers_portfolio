// Contact page route
"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl mx-auto py-16 px-4"
    >
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contact</h1>
      <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" required />
        <input type="email" placeholder="Email" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" required />
        <input type="tel" placeholder="Phone" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" />
        <textarea placeholder="Message" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" rows={5} required />
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold">Send Message</button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        <div>Office# 412 Clifton Center, Karachi, Pakistan</div>
        <div>Phone: +92 301 3563181 &nbsp;|&nbsp; Email: mbabarabro123@gmail.com</div>
        <div>Office Hours: Mon-Fri 9:00am - 5:00pm</div>
      </div>
      <div className="mt-8 text-center">
        <div className="text-blue-900 font-semibold mb-2">Connect with me:</div>
        <div className="flex justify-center gap-6">
          <a href="https://wa.me/923013563181" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="28" height="28" fill="currentColor" className="text-green-500 hover:text-green-700" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-babar-abro-21684526a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" fill="currentColor" className="text-blue-700 hover:text-blue-900" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
          </a>
          <a href="https://www.facebook.com/share/1AWDKhkKhX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="28" height="28" fill="currentColor" className="text-blue-600 hover:text-blue-800" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/></svg>
          </a>
          <a href="https://x.com/MBabarAbro1?t=-_OflgcaCi534zxiYjjZgA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="28" height="28" fill="currentColor" className="text-blue-400 hover:text-blue-600" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.16-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
