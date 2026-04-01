"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay before showing the button to ensure smooth page load
    const timeout = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute top-1/2 -translate-y-1/2 right-16 w-36 py-2 px-3 bg-black/80 backdrop-blur-md rounded border border-gray-800 text-xs font-semibold tracking-wider uppercase text-center text-white opacity-0 whitespace-nowrap transform group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
          Chat with us instantly
        </div>

        {/* Outer Glow / Pulse Container */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/917330922633"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#1DA851] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 group-hover:bg-[#1DA851]"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl drop-shadow-md" />
        </Link>
      </div>
    </div>
  );
}
