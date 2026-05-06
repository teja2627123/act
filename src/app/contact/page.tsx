"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import React from "react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const mailtoLink = `mailto:actinnfitness77@gmail.com?subject=enquiry%20from%20wbsite&body=Name:%20${name}%0D%0APhone:%20${phone}%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen bg-gym-dark pt-28 pb-20">
      <section className="text-center relative max-w-7xl mx-auto px-4 mt-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(230,0,0,0.5)]">
            Contact <span className="text-gym-red">Base</span>
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Ready to deploy your true potential? Reach out to us.
          </p>
          <div className="h-1 w-24 bg-gym-red mx-auto mt-6 shadow-glow-red"></div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Details & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-black/80 border border-zinc-800 p-8 rounded-lg shadow-xl relative overflow-hidden group hover:border-gym-red/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gym-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
                <span className="w-2 h-8 bg-gym-red inline-block mr-4 shadow-glow-red"></span>
                Headquarters
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gym-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200 uppercase tracking-widest text-sm mb-1">Address</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      3rd floor, ACTINN FITNESS unisex gym,<br />
                      Durganagar signal, above Vijaya Diagnostic Centre,<br />
                      Durga Nagar, Mailardevpally,<br />
                      Hyderabad, Telangana 500077
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-gym-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200 uppercase tracking-widest text-sm mb-1">Direct Line</h4>
                    <p className="text-gray-400 font-medium">+91 7330922633</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-gym-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-200 uppercase tracking-widest text-sm mb-1">Operating Hours</h4>
                    <p className="text-gray-400 font-medium">Mon - Sat: 5:00 AM - 11:00 PM<br />Sun: 5:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:7330922633"
                className="mt-10 w-full py-4 bg-gym-red hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded flex items-center justify-center transition-all duration-300 shadow-glow-red hover:shadow-glow-red-lg relative z-10 cursor-pointer"
              >
                <Phone size={20} className="mr-3" />
                Call Us Now
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[300px] border border-zinc-800 bg-black/50 rounded-lg overflow-hidden shadow-xl relative group hover:border-gym-red/50 transition-all duration-500">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%) contrast(105%)" }}
                src="https://maps.google.com/maps?q=ACTINN+FITNESS,+Durga+Nagar,+Mailardevpally,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black/80 border border-zinc-800 p-8 md:p-10 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
                <span className="w-2 h-8 bg-gym-red inline-block mr-4 shadow-glow-red"></span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-4 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-4 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-4 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-gym-red focus:ring-1 focus:ring-gym-red transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] resize-none"
                    placeholder="How can we help you crush your goals?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-transparent border-2 border-gym-red hover:bg-gym-red text-white font-bold uppercase tracking-wider rounded flex items-center justify-center transition-all duration-300 group shadow-[0_0_15px_rgba(230,0,0,0.2)] hover:shadow-glow-red"
                >
                  <Send size={20} className="mr-3 group-hover:-mt-2 group-hover:translate-x-2 transition-all" />
                  Transmit Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
