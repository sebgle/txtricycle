"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      // Close menu on orientation change
      const handleOrientationChange = () => setIsOpen(false);

      window.addEventListener("orientationchange", handleOrientationChange);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("orientationchange", handleOrientationChange);
      };
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Media", href: "/media" },
    { name: "Join", href: "/join" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Texas Triathlon & Cycling"
              className="h-10 w-10"
              draggable={false}
            />
            <span className="text-xl font-bold tracking-tight text-[#BF5700] group-hover:opacity-80 transition-opacity">
              Texas Triathlon & Cycling
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              if (link.name === "Join") {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="inline-block px-6 py-2 rounded-full bg-[#BF5700] text-white font-bold uppercase tracking-wide shadow-md
                               hover:bg-[#D16100] hover:shadow-lg
                               active:scale-95
                               transition duration-300 ease-in-out"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-800 hover:text-[#BF5700] font-medium transition-colors group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#BF5700] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 hover:text-[#BF5700] focus:outline-none"
              aria-label="Open menu"
              type="button"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white flex flex-col pt-16 px-8 z-50 overflow-y-auto" // ← added overflow-y-auto
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-[#BF5700] focus:outline-none"
                aria-label="Close menu"
                type="button"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col space-y-8 text-center pb-16"> {/* added pb-16 for extra bottom spacing */}
              {navLinks.map((link) => {
                if (link.name === "Join") {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="mx-auto px-10 py-4 rounded-full bg-[#BF5700] text-white font-bold uppercase tracking-wide shadow-md
                                hover:bg-[#D16100] hover:shadow-lg
                                active:scale-95
                                transition duration-300 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-semibold text-gray-800 hover:text-[#BF5700] transition-colors py-4"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
