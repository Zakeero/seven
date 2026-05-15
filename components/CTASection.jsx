'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import LeadForm from './LeadForm';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    const el = document.querySelector('#cta-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Big CTA Banner ── */}
      <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-violet-800" />

        {/* Mesh overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 110%, rgba(253,224,71,0.15) 0%, transparent 50%)',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-xs font-jakarta font-600 text-white/80 tracking-wider uppercase">
                Bugun boshlang
              </span>
            </div>

            <h2 className="font-syne font-800 text-4xl md:text-6xl text-white mb-5 leading-tight">
              Ingliz tilini{' '}
              <span className="gradient-text-yellow">bugundan</span>
              <br />
              boshlang
            </h2>

            <p className="text-white/70 font-jakarta text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Har kuni 200+ kishi bizga qo'shilmoqda. Siz nima kutayapsiz?
              Bepul 1 ta sinov darsga yoziling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToForm}
                className="flex items-center gap-2 px-10 py-4.5 bg-brand-yellow text-gray-900 font-syne font-800 rounded-2xl text-base shadow-[0_15px_40px_rgba(253,224,71,0.4)] hover:shadow-yellow-glow transition-all duration-300"
              >
                Ariza qoldirish
                <ArrowRight size={18} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+998901234567"
                className="flex items-center gap-2 px-10 py-4.5 bg-white/10 backdrop-blur-sm text-white font-syne font-700 rounded-2xl text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={18} />
                Qo'ng'iroq qilish
              </motion.a>
            </div>

            {/* Trust row */}
            <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
              {['✓ Bepul sinov darsi', '✓ Hech qanday majburiyat', '✓ 30 daqiqada javob'].map(
                (item, i) => (
                  <span key={i} className="text-sm font-jakarta text-white/55">
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact + Form Section ── */}
      <section id="contact" className="relative py-20 md:py-28 bg-[#050818]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-indigo-500/20 mb-6">
                <span className="text-xs font-jakarta font-600 text-indigo-300 tracking-wider uppercase">
                  Biz bilan bog'laning
                </span>
              </div>

              <h2 className="font-syne font-800 text-3xl md:text-4xl text-white mb-5">
                Savollaringiz bormi?<br />
                <span className="gradient-text">Javob beramiz!</span>
              </h2>

              <p className="text-white/45 font-jakarta text-lg leading-relaxed mb-10">
                Qaysi kurs sizga mos ekanligi haqida bepul maslahat olishingiz mumkin.
                Mutaxassislarimiz 9:00 dan 21:00 gacha ish faoliyat yuritadi.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Phone,
                    label: 'Telefon',
                    value: '+998 90 123 45 67',
                    href: 'tel:+998901234567',
                  },
                  {
                    icon: MapPin,
                    label: 'Manzil',
                    value: 'Toshkent, Chilonzor tumani, 7-mavze',
                    href: '#',
                  },
                  {
                    icon: Clock,
                    label: 'Ish vaqti',
                    value: 'Dushanba–Shanba: 9:00 – 21:00',
                    href: '#',
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-600/25 transition-colors duration-200">
                        <Icon size={18} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-xs font-jakarta text-white/30 mb-0.5">{item.label}</p>
                        <p className="font-jakarta font-600 text-white/80 group-hover:text-white transition-colors text-sm">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-8">
                <a
                  href="https://t.me/sevenlc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass border border-white/10 rounded-xl text-sm font-jakarta font-600 text-white/70 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#229ED9]">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
                <a
                  href="https://instagram.com/sevenlc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass border border-white/10 rounded-xl text-sm font-jakarta font-600 text-white/70 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-pink-400">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              id="cta-form"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.05)',
                }}
              />
              <div className="relative glass rounded-3xl p-8 border border-white/10">
                <h3 className="font-syne font-800 text-2xl text-white mb-2">
                  Ariza qoldiring
                </h3>
                <p className="text-sm text-white/40 font-jakarta mb-7">
                  30 daqiqada mutaxassisimiz siz bilan bog'lanadi
                </p>
                <LeadForm variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
