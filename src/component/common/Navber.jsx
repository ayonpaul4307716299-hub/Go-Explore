import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Go <span className="text-emerald-400">Explor</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="relative text-sm font-medium text-emerald-400 transition-colors py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-emerald-400 after:rounded-full"
            >
              Home
            </a>
            <a
              href="/about"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-400 after:rounded-full after:transition-all"
            >
              About
            </a>
            <a
              href="/Explor"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-400 after:rounded-full after:transition-all"
            >
              Explor
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/login"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
            >
              Login
            </a>
            <a
              href="/Explor"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <a
            href="/"
            className="block px-4 py-3 rounded-xl text-base font-semibold text-emerald-400 bg-emerald-500/10"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            About
          </a>
          <a
            href="/Explor"
            className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            GearGuide
          </a>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="/login"
              className="w-full text-center py-3 text-sm font-semibold text-white bg-white/5 border border-white/15 rounded-xl transition-all"
            >
              Login
            </a>
            <a
              href="/Explor"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}