'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/join', label: 'Join', special: true },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md select-none"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex justify-between items-center p-4 max-w-5xl mx-auto">
        {/* Logo and Title */}
        <Link href="/" aria-label="Home" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="logo" width={48} height={48} priority />
          <span className="hidden md:inline text-xl font-bold text-[#BF5700] select-text">
            Texas Triathlon and Cycling
          </span>
        </Link>

        {/* Desktop Menu - md and up */}
        <div className="hidden md:flex space-x-6 font-semibold text-lg items-center">
          {navLinks.map(({ href, label, special }) =>
            special ? (
              <Link
                key={href}
                href={href}
                className="bg-[#BF5700] text-white px-5 py-2 rounded-full shadow-md
                  hover:bg-[#D46000] hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-[#D46000]
                  transition transform duration-200 ease-in-out"
              >
                {label}
              </Link>
            ) : (
              <Link
                key={href}
                href={href}
                className="text-[#BF5700] hover:text-[#D46000] focus:text-[#D46000] transition-colors relative"
              >
                <span
                  className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#D46000] before:transition-all before:duration-300 hover:before:w-full focus:before:w-full"
                >
                  {label}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger / Close Icons - small screens */}
        <button
          onClick={toggleMenu}
          aria-label={menu ? 'Close menu' : 'Open menu'}
          className="text-[#BF5700] focus:outline-none focus:ring-2 focus:ring-[#BF5700] rounded-md md:hidden"
          type="button"
        >
          {menu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Overlay - only mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } z-40`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        onClick={() => setMenu(false)}
      />

      {/* Mobile Dropdown Menu */}
      <section
        className={`fixed left-1/2 top-[calc(4rem+env(safe-area-inset-top))] z-50
          w-[90vw] max-w-sm -translate-x-1/2 rounded-2xl
          bg-gradient-to-br from-[#BF5700] via-[#D46000] to-[#A54800] text-white
          shadow-2xl flex flex-col items-center space-y-8 py-6 px-6 text-2xl font-semibold tracking-wide
          transition-transform duration-300 md:hidden
          ${menu ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'}
          overflow-y-auto`}
        style={{
          maxHeight: 'calc(100vh - (4rem + env(safe-area-inset-top)))',
          willChange: 'transform, opacity',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '1.5rem',
        }}
      >
        {navLinks.map(({ href, label, special }) =>
          special ? (
            <Link
              key={href}
              href={href}
              className="w-full text-center bg-white text-[#BF5700] rounded-full py-3 font-bold shadow-lg
                hover:brightness-110 hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-white/70 transition transform duration-200 ease-in-out"
              onClick={() => setMenu(false)}
            >
              {label}
            </Link>
          ) : (
            <Link
              key={href}
              href={href}
              className="w-full text-center rounded-lg py-2 hover:bg-[#BF5700]/80 focus:bg-[#BF5700]/90 transition"
              onClick={() => setMenu(false)}
            >
              {label}
            </Link>
          )
        )}
      </section>
    </nav>
  );
}
