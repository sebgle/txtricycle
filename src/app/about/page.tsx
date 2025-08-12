"use client";

import Image from "next/image";
import WeeklyEvents from "@/components/WeeklyEvents";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 pt-5">
      {/* Hero Banner */}
      <section className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Texas Triathlon & Cycling Club riding together"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#BF5700]">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed">
          The <strong>Texas Triathlon & Cycling Club</strong> is a community of
          UT Austin students, alumni, and friends passionate about swimming,
          biking, and running. Whether you’re training for your first triathlon
          or chasing a new personal record, you’ll find a supportive team to
          help you reach your goals.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#BF5700]">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            Our mission is simple: create an inclusive, motivating environment
            where athletes of all backgrounds can train, compete, and grow
            together. From casual weekend rides to national collegiate
            championships, we’re here to help you push your limits — and have
            fun along the way.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#BF5700]">
          What We Do
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Weekly Training</h3>
            <p className="text-sm text-gray-600">
              Group swim, bike, and run sessions for all skill levels.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Races & Events</h3>
            <p className="text-sm text-gray-600">
              Compete locally, regionally, and nationally in triathlons and
              cycling races.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-sm text-gray-600">
              Social rides, team dinners, and an active online community.
            </p>
          </li>
        </ul>
      </section>

      <WeeklyEvents />

      {/* Call to Action */}
      <section className="bg-gray-50 text-black py-12 text-center p-4 pb-24 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Join the Team?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Whether you’re here to race, train, or just meet great people, there’s
          a spot for you at Texas Triathlon & Cycling.
        </p>
        <a
          href="/join"
          className="inline-block bg-[#BF5700] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8b3f02] transition"
        >
          Join Now!
        </a>
      </section>
    </main>
  );
}
