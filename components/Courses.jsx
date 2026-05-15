'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    tag: 'Asosiy kurs',
    title: 'Beginner English',
    subtitle: 'Noldan boshlang',
    desc: "Ingliz tilini umuman bilmaydigan yoki asoslarini mustahkamlashni xohlaydigan o'quvchilar uchun.",
    duration: '4 oy',
    level: 'A1 → B1',
    price: "420,000 so'm/oy",
    features: [
      "Alifbo va talaffuzdan boshlash",
      "Kundalik suhbat ko'nikmalari",
      '1200+ yangi so\'z',
      'Grammatika asoslari',
    ],
    accent: 'from-indigo-500 to-purple-600',
    lightAccent: 'rgba(99,102,241,0.1)',
    badge: null,
    featured: false,
  },
  {
    tag: 'Eng mashhur',
    title: 'IELTS Preparation',
    subtitle: 'Band 7.0+ maqsad',
    desc: "Xalqaro IELTS imtihoniga chuqur tayyorgarlik. Listening, Reading, Writing, Speaking — barcha bo'limlar.",
    duration: '6 oy',
    level: 'B1 → C1',
    price: "580,000 so'm/oy",
    features: [
      'Mock test har oy',
      'Writing task 1 & 2 tahlil',
      'Speaking band strategiyalari',
      "Shaxsiy o'qituvchi",
    ],
    accent: 'from-brand-yellow to-orange-400',
    lightAccent: 'rgba(253,224,71,0.08)',
    badge: '🔥 Top',
    featured: true,
  },
  {
    tag: 'Amaliy kurs',
    title: 'Speaking Club',
    subtitle: 'Real muloqot',
    desc: "Ingliz tilida erkin gapira olish uchun maxsus kurs. Har dars amaliy suhbat va real vaziyatlar.",
    duration: '3 oy',
    level: 'B1 → B2',
    price: "350,000 so'm/oy",
    features: [
      'Kichik guruhlar (max 8 kishi)',
      'Native speaker mehmonlari',
      'Video tahlil va feedback',
      'Haftalik debate va prezentatsiyalar',
    ],
    accent: 'from-emerald-400 to-teal-600',
    lightAccent: 'rgba(52,211,153,0.08)',
    badge: null,
    featured: false,
  },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToForm = () => {
    const el = document.querySelector('#lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Section background: light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050818] via-[#080d24] to-[#050818]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-indigo-500/20 mb-5">
            <span className="text-xs font-jakarta font-600 text-indigo-300 tracking-wider uppercase">
              Bizning kurslar
            </span>
          </div>
          <h2 className="font-syne font-800 text-3xl md:text-5xl text-white mb-4">
            O'zingizga mos{' '}
            <span className="gradient-text">kursni tanlang</span>
          </h2>
          <p className="text-white/45 font-jakarta text-lg max-w-xl mx-auto">
            Har bir kurs maqsad va darajaga qarab ishlab chiqilgan
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group rounded-3xl overflow-hidden border transition-all duration-300 ${
                course.featured
                  ? 'border-yellow-400/30 scale-[1.02] shadow-[0_30px_80px_rgba(253,224,71,0.15)]'
                  : 'border-white/8 hover:border-white/15 card-hover'
              }`}
              style={{
                background: course.featured
                  ? 'linear-gradient(145deg, rgba(253,224,71,0.06) 0%, rgba(16,16,40,0.95) 60%)'
                  : 'rgba(255,255,255,0.025)',
              }}
            >
              {/* Featured glow bg */}
              {course.featured && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at top right, rgba(253,224,71,0.08) 0%, transparent 60%)',
                  }}
                />
              )}

              <div className="relative p-7">
                {/* Tag row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-jakarta font-600 uppercase tracking-widest bg-gradient-to-r ${course.accent} bg-clip-text text-transparent`}
                  >
                    {course.tag}
                  </span>
                  {course.badge && (
                    <span className="px-2.5 py-1 bg-brand-yellow text-gray-900 text-xs font-syne font-700 rounded-full">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-syne font-800 text-2xl text-white mb-1">
                  {course.title}
                </h3>
                <p className={`text-sm font-jakarta bg-gradient-to-r ${course.accent} bg-clip-text text-transparent font-600 mb-3`}>
                  {course.subtitle}
                </p>
                <p className="text-sm font-jakarta text-white/45 leading-relaxed mb-6">
                  {course.desc}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Clock size={13} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm font-jakarta text-white/60">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-5" />

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/30 font-jakarta">Narx</p>
                    <p className="font-syne font-700 text-white text-lg">{course.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={scrollToForm}
                    className={`flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-syne font-700 transition-all duration-300 ${
                      course.featured
                        ? 'bg-brand-yellow text-gray-900 shadow-yellow-glow'
                        : 'bg-indigo-600/80 text-white hover:bg-indigo-600'
                    }`}
                  >
                    Yozilish
                    <ArrowUpRight size={15} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-white/30 font-jakarta mt-10"
        >
          Bepul 1 dars sinov uchun. Hech qanday majburiyat yo'q.
        </motion.p>
      </div>
    </section>
  );
}
