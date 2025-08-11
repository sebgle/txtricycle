"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative pt-24 min-h-[100vh] flex items-center justify-center bg-[#BF5700]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg" 
          alt="Texas Triathlon & Cycling"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          Swim. Ride. Run.
          <span className="block mt-2 text-white">
            Join the Texas Triathlon & Cycling Club
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow"
        >
          Push your limits, find your community, and represent Texas on and off
          the course.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-8 mb-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/join"
            className="px-8 py-3 rounded-full bg-[#BF5700] text-white font-bold uppercase tracking-wide shadow-lg
                       hover:bg-[#D16100] transition duration-300 ease-in-out"
          >
            Join Now
          </Link>
          <Link
            href="/events"
            className="px-8 py-3 rounded-full bg-white text-[#BF5700] font-bold uppercase tracking-wide shadow-lg
                       hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Upcoming Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
