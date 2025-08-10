'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-[calc(100vh-64px)] px-8 sm:px-16 lg:px-32 bg-white overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-xl text-center lg:text-left"
      >
        {/* Layered heading */}
        <h1
        className="relative font-extrabold tracking-tight leading-[1.05] text-black"
        style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)', // scales between 32px and 72px
        }}
        >
        <span className="block absolute top-0 left-0 w-full h-full text-transparent stroke-[1.5px] stroke-black -z-10 select-none pointer-events-none">
            UT Austin Triathlon &amp; Cycling Club
        </span>
        UT Austin&apos;s <br />
        <span className="text-[#BF5700]">Triathlon &amp; Cycling</span> Club
        </h1>

        <p className="mt-6 text-gray-700 text-lg sm:text-xl font-light max-w-md mx-auto lg:mx-0">
          Push your limits. Race harder. Ride stronger. Join Austin’s triathlon and cycling community.
        </p>

<div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
  <motion.a
    href="/join"
    whileHover={{ scale: 1.1, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-[#BF5700] via-[#D16100] to-[#F2994A] text-white font-semibold shadow-lg transition-shadow hover:shadow-2xl whitespace-nowrap"
    style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
  >
    Join the Club
  </motion.a>
  <motion.a
    href="/events"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block px-10 py-3 rounded-full border-2 border-[#BF5700] text-[#BF5700] font-semibold hover:bg-[#FFF4E6] transition whitespace-nowrap"
    style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
  >
    See Events
  </motion.a>
</div>


      </motion.div>

      {/* Right Visual - show only on large screens and up */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-12 lg:mb-0 lg:ml-20 max-w-lg w-full hidden lg:block"
      >
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden drop-shadow-xl">
          <img
            src="/hero.jpg"
            alt="Cycling action shot"
            className="object-cover w-full h-full"
            draggable={false}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#BF5700]/40 via-[#D16100]/30 to-[#F2994A]/20 animate-pulse mix-blend-multiply pointer-events-none rounded-3xl" />
        </div>
      </motion.div>

      {/* Dynamic background shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#BF5700]/30 to-[#D16100]/0 blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-[#F2994A]/30 to-[#BF5700]/0 blur-[140px] pointer-events-none"
      />
    </section>
  );
}
