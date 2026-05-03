"use client";

import { motion } from "framer-motion";
import { Plus, Dumbbell, Activity, Flame, Droplets } from "lucide-react";

export default function MembershipPage() {
  const membershipCategories = [
    {
      name: "Men's Package",
      highlightCategory: false,
      plans: [
        { duration: "3 Months", price: "8,200", highlight: false },
        { duration: "6 Months", price: "12,900", highlight: false },
        { duration: "12 Months", price: "19,900", highlight: true, tag: "Best Value" },
      ],
    },
    {
      name: "Women's Package",
      highlightCategory: true,
      tag: "Special Offer",
      plans: [
        { duration: "3 Months", price: "4,900", highlight: false },
        { duration: "6 Months", price: "7,900", highlight: false },
        { duration: "12 Months", price: "10,900", highlight: true, tag: "Best Value" },
      ],
    },
    {
      name: "Couple Package",
      highlightCategory: false,
      plans: [
        { duration: "3 Months", price: "10,900", highlight: false },
        { duration: "6 Months", price: "17,900", highlight: false },
        { duration: "12 Months", price: "23,490", highlight: true, tag: "Best Value" },
      ],
    },
  ];

  const addOns = [
    { title: "Personal Training", price: "₹15,000 / 1 Month" },
    { title: "Personal Training", price: "₹39,000 / 3 Months" },
    { title: "Diet Plan", price: "₹999 / 1 Month" },
    { title: "Day Pass", price: "₹399" },
  ];

  const commonFacilities = [
    { name: "Strength Training", icon: Dumbbell },
    { name: "Cardio", icon: Activity },
    { name: "CrossFit", icon: Flame },
    { name: "Steam", icon: Droplets },
  ];

  return (
    <main className="min-h-screen bg-gym-dark pt-28 pb-20">
      <section className="text-center relative max-w-7xl mx-auto px-4 mt-12 mb-16">
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
        
        {/* Facilities Included Section */}
        <div className="mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/80 border border-gym-red/30 rounded-2xl p-8 md:p-10 shadow-[0_0_30px_rgba(230,0,0,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gym-red to-transparent opacity-70"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">
                Facilities <span className="text-gym-red">Included</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16">
              {commonFacilities.map((facility, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-4 group cursor-default"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-gym-red group-hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] transition-all duration-300 relative">
                    <div className="absolute inset-0 rounded-full bg-gym-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <facility.icon className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-gym-red transition-colors duration-300 relative z-10" />
                  </div>
                  <span className="text-gray-300 font-medium uppercase tracking-widest text-xs md:text-sm group-hover:text-white transition-colors duration-300 text-center">
                    {facility.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16">
          {membershipCategories.map((category, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={category.name}
              className={`w-full bg-black rounded-2xl p-6 md:p-10 border relative ${
                category.highlightCategory
                  ? "border-gym-red/20 shadow-[0_0_15px_rgba(230,0,0,0.05)]"
                  : "border-zinc-800"
              }`}
            >
              {category.highlightCategory && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-red text-white py-1.5 px-6 text-sm font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(230,0,0,0.8)] whitespace-nowrap z-10">
                  {category.tag || "Special Offer"}
                </div>
              )}
              
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.plans.map((plan) => (
                  <motion.div
                    whileHover={{ y: -8, scale: plan.highlight ? 1.02 : 1 }}
                    key={plan.duration}
                    className={`flex flex-col bg-zinc-900 rounded-xl p-6 border transition-all duration-300 relative group ${
                      plan.highlight
                        ? "border-gym-red shadow-[0_0_25px_rgba(230,0,0,0.3)] md:-translate-y-3 z-10"
                        : "border-zinc-800 hover:border-gym-red/50 hover:shadow-glow-red z-0"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 right-4 bg-gym-red text-white py-1 px-3 text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(230,0,0,0.6)] z-10">
                        {plan.tag}
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {plan.duration}
                    </h3>
                    
                    <div className="flex items-end text-gym-red mb-3">
                      <span className="text-2xl font-bold pb-1 mr-1">₹</span>
                      <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
                    </div>

                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-6">
                      Access to all facilities
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-zinc-800/50">
                      <button
                        className={`w-full py-3.5 mt-2 text-sm font-bold text-white uppercase tracking-wider rounded transition-all duration-300 ${
                          plan.highlight
                            ? "bg-gym-red hover:bg-red-700 shadow-[0_0_15px_rgba(230,0,0,0.4)]"
                            : "bg-black border border-zinc-700 group-hover:bg-gym-red group-hover:border-gym-red group-hover:shadow-[0_0_15px_rgba(230,0,0,0.4)]"
                        }`}
                      >
                        Select Plan
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
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

