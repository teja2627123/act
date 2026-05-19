"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    "/images/gallery/CARD.JPG",
    "/images/gallery/LTT.JPG",
    "/images/gallery/DJI_0272.JPG",
    "/images/gallery/DSC04606 (1).JPG",
    "/images/gallery/DSC04646.JPG",
    "/images/gallery/DSC04781.JPG",
    "/images/gallery/DSC04796.JPG",
    "/images/gallery/DSC04799.JPG",
    "/images/gallery/vinay tkr20260417_0463T01.JPG"
  ];

  return (
    <main className="min-h-screen bg-gym-dark pt-28 pb-20">
      <section className="text-center relative max-w-7xl mx-auto px-4 mt-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
            Inside the <span className="text-gym-red">Arena</span>
          </h1>
          <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-glow-red"></div>
        </motion.div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="relative group overflow-hidden bg-black aspect-[16/9] rounded-xl shadow-xl"
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>
              
              {/* Hover Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gym-red/50 group-hover:shadow-[inset_0_0_30px_rgba(230,0,0,0.3)] transition-all duration-500 z-20 pointer-events-none"></div>
              
              <Image
                src={src}
                alt={`Gym Facility ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
