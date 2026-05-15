'use client';

import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';

const reviews = [
  {
    name: 'Aziza Karimova',
    role: 'IELTS 7.5 oldi',
    initials: 'AK',
    gradient: 'from-indigo-400 to-purple-500',
    stars: 5,
    text: "SEVEN LC dan oldin 3 ta boshqa kursni sinab ko'rdim. Hech birida bu darajadagi natijaga erisha olmagan edim. Bu yerda esa 6 oyda IELTS 7.5 oldim. Ustozlarning yondashuvi mutlaqo boshqa!",
  },
  {
    name: 'Jasur Toshmatov',
    role: "Xorijda o'qiyapti",
    initials: 'JT',
    gradient: 'from-emerald-400 to-teal-500',
    stars: 5,
    text: "Speaking Club kursi mening hayotimni o'zgartirdi. Germaniya universitetiga kirish intervyusida bemalol gaplasha oldim. SEVEN LC — bu shunchaki kurs emas, bu haqiqiy muhit.",
  },
  {
    name: 'Nilufar Rahimova',
    role: 'Beginner kursidan',
    initials: 'NR',
    gradient: 'from-pink-400 to-rose-500',
    stars: 5,
    text: "Ingliz tilidan umuman qo'rqardim. Lekin bu yerda o'qituvchilar shunchalik yaxshi tushuntirdi — 4 oyda o'zimni erkin his qila boshladim. Hamma do'stlarimni tavsiya qilaman!",
  },
  {
    name: 'Sherzod Yusupov',
    role: 'Business English',
    initials: 'SY',
    gradient: 'from-amber-400 to-orange-500',
    stars: 5,
    text: "Ish uchrashuvlarida inglizcha gapirish kerak bo'lardi. 3 oy SEVEN LC da o'qib, xorijiy hamkorlar bilan to'liq muloqot qila boshladim. Professional yondashuv uchun rahmat!",
  },
  {
    name: 'Dilorom Mirzayeva',
    role: 'IELTS 6.5',
    initials: 'DM',
    gradient: 'from-violet-400 to-purple-500',
    stars: 5,
    text: "Nazorat tizimi juda yaxshi. Har hafta progress ko'rsatkichlarimni ko'rib, o'zimni rivojlanayotganimni his qilardim. Bu motivatsiya uchun juda muhim ekan!",
  },
  {
    name: 'Bobur Normatov',
    role: 'Speaking Club',
    initials: 'BN',
    gradient: 'from-sky-400 to-blue-500',
    stars: 5,
    text: "Native speaker mehmonlar bilan suhbat — bu tajriba pulsiz bo'lmaydi. SEVEN LC da bu imkoniyatni bepul oldim. Hozir xorijiy kompaniyada ishlayapman!",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" ref={ref} className="relative py-20 md:py-28 bg-[#050818] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 60%)',
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
              O'quvchilar fikri
            </span>
          </div>
          <h2 className="font-syne font-800 text-3xl md:text-5xl text-white mb-4">
            Ular allaqachon{' '}
            <span className="gradient-text">muvaffaq bo'ldi</span>
          </h2>
          <p className="text-white/45 font-jakarta text-lg max-w-xl mx-auto">
            500+ o'quvchimizdan real sharhlar
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid group glass rounded-3xl p-6 border border-white/6 hover:border-white/12 card-hover overflow-hidden relative"
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-5 font-syne font-800 text-7xl leading-none text-white/5 select-none pointer-events-none"
                aria-hidden
              >
                "
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    viewBox="0 0 20 20"
                    className="w-4 h-4 fill-brand-yellow"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm font-jakarta text-white/60 leading-relaxed mb-5 relative">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white text-sm font-syne font-700 shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-syne font-700 text-white text-sm">{review.name}</p>
                  <p className="text-xs font-jakarta text-white/35">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-12 flex-wrap"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} viewBox="0 0 20 20" className="w-5 h-5 fill-brand-yellow">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white/50 font-jakarta text-sm">
            <span className="text-white font-600">4.97</span> / 5.0 o'rtacha baho •{' '}
            <span className="text-white font-600">500+</span> sharh
          </p>
        </motion.div>
      </div>
    </section>
  );
}
