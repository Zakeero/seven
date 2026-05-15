'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    {
      label: 'Telegram',
      href: 'https://t.me/sevenlc',
      color: '#229ED9',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      label: 'Qo\'ng\'iroq',
      href: 'tel:+998901234567',
      color: '#22C55E',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
          {/* Sub-buttons */}
          <AnimatePresence>
            {expanded &&
              buttons.map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 20 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="px-3 py-1.5 rounded-xl bg-[#050818]/90 backdrop-blur-md text-white text-xs font-jakarta font-600 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {btn.label}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: btn.color }}
                  >
                    {btn.icon}
                  </div>
                </motion.a>
              ))}
          </AnimatePresence>

          {/* Main toggle button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={() => setExpanded((p) => !p)}
            className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_8px_30px_rgba(99,102,241,0.5)] hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            {/* Pulse ring */}
            {!expanded && (
              <span className="absolute inset-0 rounded-2xl bg-indigo-500 animate-ping opacity-30" />
            )}
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expanded ? (
                <X size={22} className="text-white" />
              ) : (
                <MessageCircle size={22} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
