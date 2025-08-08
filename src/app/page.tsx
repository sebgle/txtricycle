'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#BF5700] via-[#D97300] to-[#8B3E00] text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-16 gap-12 m-6 md:m-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6 max-w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg break-words">
            Join the UT Triathlon & Cycling Club
          </h1>
          <p className="text-base sm:text-lg max-w-full leading-relaxed drop-shadow-md">
            Push your limits, meet fellow athletes, and explore Austin on two wheels and beyond.
            Whether you're training for your first triathlon or a seasoned cyclist, we welcome all levels.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/join"
              className="bg-white text-[#BF5700] font-bold rounded-full px-8 py-3 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Join Now
            </Link>
            <Link
              href="/events"
              className="border border-white rounded-full px-8 py-3 hover:bg-white/20 transition-colors duration-300"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 max-w-full sm:max-w-lg md:max-w-xl relative w-full aspect-[4/3]">
          <Image
            src="/hero.jpg"
            alt="UT Triathlon & Cycling"
            fill
            sizes="(max-width: 640px) 100vw,
                  (max-width: 768px) 50vw,
                  33vw"
            className="rounded-3xl shadow-2xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white text-[#BF5700] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#BF5700]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>
            <h3 className="text-2xl font-semibold">Inclusive Community</h3>
            <p className="max-w-xs break-words">
              All skill levels welcome — beginners to pros. Find support, motivation, and friends.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#BF5700]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
            </svg>
            <h3 className="text-2xl font-semibold">Weekly Training & Events</h3>
            <p className="max-w-xs break-words">
              Group rides, swim practices, triathlon clinics, and social events all year round.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-[#BF5700]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10m-6 8h6" />
            </svg>
            <h3 className="text-2xl font-semibold">Exclusive Member Benefits</h3>
            <p className="max-w-xs break-words">
              Discounts on gear, coaching, and access to special club merchandise.
            </p>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#BF5700] text-white py-8 mt-auto shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium select-none">
            &copy; {new Date().getFullYear()} UT Triathlon & Cycling Club. All rights reserved.
          </p>

          <div className="flex items-center space-x-8">
            <Link
              href="https://instagram.com/ut_triathlon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white/80 transition-colors duration-200"
            >
              <FaInstagram className="text-2xl" />
              <span className="hidden sm:inline font-semibold">Instagram</span>
            </Link>

            <Link
              href="/contact"
              className="font-semibold hover:text-white/80 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
