"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gym-dark pt-28">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gym-red/5 blur-[100px] rounded-full max-w-lg mx-auto pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
            Our <span className="text-gym-red">Story</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Hyderabad&apos;s most elite unisex fitness club. We don&apos;t just build muscle; we build character, resilience, and power.
          </p>
        </motion.div>
      </section>

      {/* Split Section 1 - The Transformation */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] rounded shadow-[0_0_30px_rgba(230,0,0,0.15)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000&auto=format&fit=crop"
              alt="Transformation Training"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gym-red">Transformation</span>
            </h2>
            <div className="h-1 w-20 bg-gym-red shadow-glow-red"></div>
            <p className="text-lg text-gray-300 leading-relaxed font-medium">
              At ACTINN FITNESS, we believe that true transformation goes beyond physical appearance. It&apos;s about redefining your limits and discovering your inner strength. Our state-of-the-art facility provides the perfect environment for you to break barriers and achieve what you once thought was impossible.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you are taking your first steps into fitness or are a seasoned athlete, our comprehensive approach ensures that every drop of sweat brings you closer to your ultimate goal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Section 2 - Professional Trainers */}
      <section className="py-16 md:py-24 bg-black/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] rounded shadow-[0_0_30px_rgba(230,0,0,0.15)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Trainers"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Professional <span className="text-gray-500">Trainers</span>
            </h2>
            <div className="h-1 w-20 bg-gym-red shadow-glow-red"></div>
            <p className="text-lg text-gray-300 leading-relaxed font-medium">
              Our team consists of certified, elite professionals who are passionate about fitness and dedicated to your success. They bring years of experience and specialized knowledge to help you train safer, smarter, and harder.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We are a premium unisex gym, welcoming individuals of all levels. Our trainers provide customized guidance, ensuring that you receive the attention and expertise required to conquer your goals.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
