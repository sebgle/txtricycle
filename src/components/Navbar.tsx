'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#BF5700]/90 backdrop-blur-md text-white shadow-lg z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png" 
              alt="UT Triathlon & Cycling Club"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wide">
              Texas Triathlon & Cycling
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="px-5 py-2 rounded-full bg-white text-[#BF5700] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Join
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#BF5700]/95 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="block px-5 py-2 rounded-full bg-white text-[#BF5700] font-semibold text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
