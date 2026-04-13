"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Activity, Music, Users, Droplets } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Strength Training",
      icon: <Dumbbell className="w-12 h-12 text-gym-red" />,
      desc: "Access our elite free weights area and machinery to build pure power and explosive strength.",
    },
    {
      title: "Cardio Training",
      icon: <HeartPulse className="w-12 h-12 text-gym-red" />,
      desc: "State-of-the-art cardiovascular equipment to elevate your heart rate and build unbelievable stamina.",
    },
    {
      title: "Cross Fit",
      icon: <Activity className="w-12 h-12 text-gym-red" />,
      desc: "High-intensity functional movements designed to push your limits and improve overall fitness.",
    },
    {
      title: "Zumba",
      icon: <Music className="w-12 h-12 text-gym-red" />,
      desc: "Fun, energetic dance workouts that burn calories and keep you moving to the rhythm.",
    },
    {
      title: "Professional Trainers",
      icon: <Users className="w-12 h-12 text-gym-red" />,
      desc: "Expert guidance from certified professionals dedicated to helping you achieve your fitness goals.",
    },
    {
      title: "Premium Amenities",
      icon: <Droplets className="w-12 h-12 text-gym-red" />,
      desc: "Recover and refresh with our steam rooms, showers, and secure locker facilities.",
    },
  ];

  return (
    <main className="min-h-screen bg-gym-dark pt-28 pb-20">
      {/* Header */}
      <section className="py-20 text-center relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
            Elite <span className="text-gym-red">Services</span>
          </h1>
          <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-glow-red"></div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="relative p-[1px] rounded bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden group hover:from-gym-red hover:to-zinc-900 transition-all duration-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-gym-red/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 blur-xl"></div>
              
              <div className="w-full h-full bg-black/90 rounded p-8 flex flex-col items-center text-center relative z-10">
                <div className="mb-6 p-4 rounded-full bg-zinc-900 group-hover:bg-black border border-zinc-800 group-hover:border-gym-red/50 transition-colors shadow-glow-red/10 group-hover:shadow-glow-red">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-gym-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
