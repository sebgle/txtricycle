"use client";

import { Users, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  const steps = [
    {
      icon: Users,
      title: "Join the Club",
      description:
        "Sign up through our Join page to become an official member and get access to all our training sessions and events.",
    },
    {
      icon: Calendar,
      title: "Attend Weekly Workouts",
      description:
        "Come to any of our weekly rides, runs, or swims — no matter your experience level, you’re welcome here!",
    },
    {
      icon: MessageCircle,
      title: "Stay Connected",
      description:
        "Join our Slack group for updates, carpool coordination, and connecting with other members.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#BF5700] mb-12">
          How to Get Involved
        </h2>

        {/* Steps Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <step.icon className="text-[#BF5700] mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-18">
          <Link
            href="/join"
            className="px-10 py-4 rounded-full bg-[#BF5700] text-white font-bold uppercase tracking-wide shadow-md
                       hover:bg-[#D16100] hover:shadow-lg
                       active:scale-95
                       transition duration-300 ease-in-out"
          >
            Join the Club
          </Link>
        </div>
      </div>
    </section>
  );
}
