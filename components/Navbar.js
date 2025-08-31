"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detect current route

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shorten", href: "/shorten" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="h-16 bg-[#1566FA] flex justify-between px-4 md:px-6 items-center text-white relative">
      {/* Logo */}
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex justify-center gap-2 items-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                pathname === item.href
                  ? "bg-white text-[#1566FA] shadow-md"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons (always visible on desktop) */}
      <div className="hidden md:flex gap-3">
        <Link href="/shorten">
          <button className="bg-[#F2F4FF] text-black rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-gray-200">
            Try Now
          </button>
        </Link>
        <Link href="https://github.com/BhanuSankarasetty">
          <button className="bg-[#F2F4FF] text-black rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-gray-200">
            GitHub
          </button>
        </Link>
      </div>

      {/* Hamburger (visible only on mobile/tablet) */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1566FA] flex flex-col items-center gap-4 py-6 shadow-lg md:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`w-3/4 text-center px-4 py-2 rounded-lg font-medium transition ${
                pathname === item.href
                  ? "bg-white text-[#1566FA] shadow-md"
                  : "hover:bg-blue-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 w-3/4">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#F2F4FF] text-black rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-gray-200">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/BhanuSankarasetty/URL-Shortner" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#F2F4FF] text-black rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-gray-200">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
