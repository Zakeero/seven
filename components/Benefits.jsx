'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap,
  BarChart3,
  Mic2,
  CalendarCheck,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Kuchli ustozlar',
    desc: "CELTA/DELTA sertifikatli, xalqaro tajribaga ega o'qituvchilar. Har bir dars — individual yondashuv.",
    accent: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    icon: BarChart3,
    title: 'Nazorat tizimi',
    desc: "Har haftalik testlar va progress tracking. O'quvchining rivojlanishi har doim ko'z ostida.",
    accent: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.15)',
  },
  {
    icon: Mic2,
    title: 'Speaking muhit',
    desc: "Faqat ingliz tilida muloqot. Real speaking practice — har dars o'zaro suhbat va simulyatsiyalar.",
    accent: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.15)',
  },
  {
    icon: CalendarCheck,
    title: 'Qulay grafik',
    desc: "Ertalab, kechqurun va hafta oxiri guruhlari. O'z ish jadvalingizga mos vaqtni tanlang.",
    accent: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52,211,153,0.15)',
  },
  {
    icon: Globe2,
    title: "Xalqaro sertifikat",
    desc: "IELTS, TOEFL, Cambridge imtihonlariga tayyorlash. Sertifikat — dunyoning istalgan universitetiga kirish imkoni.",
    accent: 'from-sky-400 to-blue-600',
    glow: 'rgba(56,189,248,0.15)',
  },
  {
    icon: ShieldCheck,
    title: 'Natija kafolati',
    desc: "Agar 3 oy ichida natija bo'lmasa — pul qaytariladi. Biz faqat haqiqiy natijaga ishonaman.",
    accent: 'from-rose-400 to-red-600',
    glow: 'rgba(251,113,133,0.15)',
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="benefits" ref={ref} className="relative py-20 md:py-28 bg-[#050818]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-indigo-500/20 mb-5">
            <span className="text-xs font-jakarta font-600 text-indigo-300 tracking-wider uppercase">
              Nima uchun SEVEN LC
            </span>
          </div>
          <h2 className="font-syne font-800 text-3xl md:text-5xl text-white mb-4">
            Biz boshqalardan{' '}
            <span className="gradient-text">farq qilamiz</span>
          </h2>
          <p className="text-white/45 font-jakarta text-lg max-w-2xl mx-auto leading-relaxed">
            Faqat grammatika o'rgatmaymiz — haqiqiy muloqot qobiliyatini rivojlantiramiz
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass rounded-3xl p-7 border border-white/5 hover:border-white/10 card-hover overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${benefit.glow} 0%, transparent 60%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.accent} flex items-center justify-center mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className="text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <h3 className="font-syne font-700 text-white text-xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-jakarta text-sm text-white/45 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${benefit.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
