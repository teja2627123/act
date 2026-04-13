"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

export default function MembershipPage() {
  const plans = [
    {
      name: "Men's Package",
      price: "19,900",
      period: "/year",
      features: [
        "Annual (12 Months): ₹ 19,900/-",
        "Half Year (6 Months): ₹ 12,900/-",
        "3 Months: ₹ 8,200/-",
        "Cardio & Strength Training",
        "CrossFit & Free Weights",
      ],
      highlight: false,
    },
    {
      name: "Women's Package",
      price: "10,900",
      period: "/year",
      features: [
        "Annual (12 Months): ₹ 10,900/-",
        "Half Year (6 Months): ₹ 7,900/-",
        "3 Months: ₹ 4,900/-",
        "Zumba & Cardio",
        "Strength & Steam",
      ],
      highlight: true,
      tag: "Special Offer",
    },
    {
      name: "Couple Package",
      price: "23,490",
      period: "/year",
      features: [
        "Annual (12 Months): ₹ 23,490/-",
        "Half Year (6 Months): ₹ 17,900/-",
        "3 Months: ₹ 10,900/-",
        "Workout Together",
        "Full Facility Access",
      ],
      highlight: false,
    },
  ];

  const addOns = [
    { title: "Personal Training", price: "₹15,000 / 1 Month" },
    { title: "Personal Training", price: "₹39,000 / 3 Months" },
    { title: "Diet Plan", price: "₹999 / 1 Month" },
    { title: "Day Pass", price: "₹399" },
  ];

  return (
    <main className="min-h-screen bg-gym-dark pt-28 pb-20">
      <section className="text-center relative max-w-7xl mx-auto px-4 mt-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Choose Your <span className="text-gym-red">Package</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 font-medium">
            Unlock your potential with our flexible and tailored fitness packages.
          </p>
          <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-glow-red"></div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={plan.name}
              className={`w-full lg:w-1/3 p-8 rounded-lg border transition-all duration-300 ${
                plan.highlight
                  ? "bg-gym-dark border-gym-red shadow-glow-red-lg transform scale-105 hover:scale-110 z-10 relative"
                  : "bg-black border-zinc-800 hover:border-gym-red/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(230,0,0,0.15)] z-0 relative"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-red text-white py-1 px-4 text-sm font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(230,0,0,0.8)] whitespace-nowrap">
                  {plan.tag || "Most Popular"}
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-end text-gym-red">
                  <span className="text-2xl font-bold pb-2 mr-1">₹</span>
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-xl text-gray-400 font-medium pb-2 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 text-gray-300 font-medium">
                {plan.features.map((item, j) => (
                  <li key={j} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-gym-red' : 'text-gray-500'}`} />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-center font-bold text-white uppercase tracking-wider rounded transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gym-red hover:bg-red-700 shadow-glow-red"
                    : "bg-zinc-900 border border-zinc-700 hover:bg-gym-red hover:border-gym-red hover:shadow-glow-red"
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons section */}
        <div className="mt-24 pt-12 border-t border-zinc-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Add-On Services</h2>
            <div className="h-1 w-16 bg-gym-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="bg-zinc-900 p-6 rounded border border-zinc-800 flex flex-col items-center justify-center text-center hover:border-gym-red/50 transition-colors"
              >
                <Plus className="w-8 h-8 text-gym-red mb-3 opacity-80" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">{addon.title}</h4>
                <p className="text-gym-red font-black text-xl">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
