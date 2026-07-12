"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-cyan-500/20 bg-[#050816]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-extrabold tracking-wider bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent"
        >
          RK
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/Robert_Kennedy_Resume.pdf"
            download
            className="rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-5 py-2 font-semibold text-white shadow-lg hover:scale-105 transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-cyan-500/20 bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl">

          <nav className="flex flex-col p-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-4 text-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/Robert_Kennedy_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-6 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 py-3 text-center font-semibold text-white hover:scale-[1.02] transition"
            >
              📄 Download Resume
            </a>

          </nav>

        </div>
      </div>
    </header>
  );
}