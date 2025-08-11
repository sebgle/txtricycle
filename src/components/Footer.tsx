"use client";

import Link from "next/link";
import { Instagram, Slack } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#BF5700] text-white py-6 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/logo_white.png"
            alt="Texas Triathlon & Cycling"
            className="h-8 w-8"
            draggable={false}
          />
          <span className="font-semibold tracking-tight">
            Texas Triathlon & Cycling
          </span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/calendar" className="hover:underline">
            Calendar
          </Link>
          <Link href="/media" className="hover:underline">
            Media
          </Link>
          <Link href="/join" className="hover:underline">
            Join
          </Link>
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://slack.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Slack"
            className="hover:opacity-80"
          >
            <Slack size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-4 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} Texas Triathlon & Cycling
      </div>
    </footer>
  );
}
