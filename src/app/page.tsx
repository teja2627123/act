"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight, Dumbbell, Activity, Users, Flame } from "lucide-react";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main className="min-h-screen bg-gym-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/80 bg-gradient-to-t from-gym-dark to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-2xl">
              Transform Your Body.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gym-red filter drop-shadow-[0_0_15px_rgba(230,0,0,0.8)]">
                Build Your Power.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
              Welcome to the elite training grounds. No excuses, only results. 
              Join Hyderabad&apos;s most premium fitness destination today.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/membership"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gym-red rounded-sm hover:bg-red-700 hover:scale-105 shadow-[0_0_20px_2px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_5px_rgba(230,0,0,0.6)] uppercase tracking-wider overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:animate-[wave_2s_linear_infinite]"></div>
                <span>Join Now</span> <MoveRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 border border-white/30 rounded-sm hover:bg-white/10 hover:border-white uppercase tracking-wider backdrop-blur-sm w-full sm:w-auto"
              >
                Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              Why Choose <span className="text-gym-red">Actinn</span>
            </h2>
            <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-[0_0_10px_rgba(230,0,0,0.8)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={40} className="text-gym-red" />,
                title: "Certified Trainers",
                desc: "Expert guidance from industry professionals dedicated to your growth.",
              },
              {
                icon: <Dumbbell size={40} className="text-gym-red" />,
                title: "Modern Equipment",
                desc: "State-of-the-art machines and free weights for maximum performance.",
              },
              {
                icon: <Activity size={40} className="text-gym-red" />,
                title: "Personal Training",
                desc: "Customized workout plans tailored specifically to your body and goals.",
              },
              {
                icon: <Flame size={40} className="text-gym-red" />,
                title: "Weight Loss Programs",
                desc: "Scientifically proven routines to burn fat and build lean muscle.",
              },
            ].map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="group p-8 bg-zinc-900 border border-zinc-800 rounded hover:border-gym-red/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,0,0,0.15)] hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border border-zinc-800 group-hover:border-gym-red/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Slideshow Section */}
      <section className="py-24 relative z-10 bg-black/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              Our <span className="text-gym-red">Facility</span>
            </h2>
            <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-[0_0_10px_rgba(230,0,0,0.8)]"></div>
          </div>
          
          <Slideshow />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative py-20 overflow-hidden bg-gym-red/10 border-y border-gym-red/20 shadow-[0_0_50px_rgba(230,0,0,0.05)_inset]">
        <div className="absolute inset-0 bg-map-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(230,0,0,0.6)]">
              No Pain. No Excuses. Only Results.
            </h2>
            <Link
              href="/membership"
              className="mt-10 inline-block px-10 py-5 bg-black border border-zinc-800 text-white font-bold uppercase tracking-widest text-lg hover:border-gym-red hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
