"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80; // height of navbar + padding
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#clients" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "CAT", href: "#cat" },
    { label: "How It Works", href: "#how" },
    { label: "FAQs", href: "#faqs" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <div>
          <div className="text-blue-600 font-black text-[26px] leading-none">
            accredian
          </div>
          <div className="text-[9px] text-gray-400 tracking-[0.22em] uppercase">
            credentials that matter
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block text-gray-700 font-medium hover:text-blue-600 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}