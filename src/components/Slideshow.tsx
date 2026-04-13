"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery/media__1775991148607.jpg",
  "/images/gallery/media__1775991148629.jpg",
  "/images/gallery/media__1775991148755.jpg",
  "/images/gallery/media__1775991148793.jpg",
  "/images/gallery/media__1775991148806.jpg",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(230,0,0,0.2)] group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Navigation arrows (shown on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gym-red hover:shadow-[0_0_15px_rgba(230,0,0,0.6)]"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gym-red hover:shadow-[0_0_15px_rgba(230,0,0,0.6)]"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-gym-red w-8 shadow-[0_0_10px_rgba(230,0,0,0.8)]"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
