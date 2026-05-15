'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Kurslar', href: '#courses' },
  { label: 'Afzalliklar', href: '#benefits' },
  { label: 'Sharhlar', href: '#reviews' },
  { label: 'Aloqa', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#050818]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300">
              <span className="font-syne font-800 text-white text-sm leading-none">7</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-syne font-800 text-white text-lg tracking-tight">SEVEN</span>
              <span className="font-jakarta text-[10px] text-indigo-400 tracking-[0.2em] uppercase font-500">
                Language Center
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-jakarta text-sm text-white/60 hover:text-white transition-colors duration-200 hover-underline"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 text-sm font-syne font-600 text-white glass rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Bog'lanish
            </button>
            <button
              onClick={() => scrollTo('#lead-form')}
              className="px-5 py-2.5 text-sm font-syne font-700 bg-brand-yellow text-gray-900 rounded-xl hover:shadow-yellow-glow hover:scale-[1.03] transition-all duration-300"
            >
              Bepul konsultatsiya
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 glass rounded-xl text-white"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-[#050818]/95 backdrop-blur-2xl border-b border-white/5 px-4 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="text-left text-white/70 hover:text-white font-jakarta text-base py-2 border-b border-white/5"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              onClick={() => scrollTo('#lead-form')}
              className="mt-2 w-full py-3.5 text-sm font-syne font-700 bg-brand-yellow text-gray-900 rounded-2xl"
            >
              Bepul konsultatsiya
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
