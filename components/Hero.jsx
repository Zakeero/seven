'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, Sparkles } from 'lucide-react';
import LeadForm from './LeadForm';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#050818]" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 60% -10%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 10% 80%, rgba(124,58,237,0.15) 0%, transparent 50%)',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: '-200px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-slow"
        style={{
          bottom: '0px',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 self-start px-4 py-2 glass rounded-full border border-indigo-500/20"
            >
              <Sparkles size={14} className="text-brand-yellow" />
              <span className="text-xs font-jakarta font-600 text-white/70 tracking-wide">
                #1 English Learning Center
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-syne font-800 text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.1] tracking-tight"
            >
              Ingliz tilini{' '}
              <span className="gradient-text">natija bilan</span>
              <br />
              o'rganing
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-white/55 font-jakarta text-lg leading-relaxed max-w-lg"
            >
              Zamonaviy metodologiya, tajribali o'qituvchilar va{' '}
              <span className="text-white/80">natijaga yo'naltirilgan</span> ta'lim tizimi
              orqali ingliz tilini haqiqatan o'rganing — vaqtni behuda sarflamang.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#lead-form')}
                className="flex items-center gap-2 px-7 py-4 bg-brand-yellow text-gray-900 font-syne font-700 rounded-2xl text-sm shadow-[0_8px_30px_rgba(253,224,71,0.3)] hover:shadow-yellow-glow transition-all duration-300"
              >
                Bepul konsultatsiya
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://t.me/sevenlc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 glass text-white font-syne font-600 rounded-2xl text-sm hover:bg-white/10 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#229ED9]">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram orqali yozish
              </motion.a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2.5">
                {[
                  'bg-gradient-to-br from-indigo-400 to-purple-500',
                  'bg-gradient-to-br from-pink-400 to-rose-500',
                  'bg-gradient-to-br from-amber-400 to-orange-500',
                  'bg-gradient-to-br from-emerald-400 to-teal-500',
                  'bg-gradient-to-br from-sky-400 to-blue-500',
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-[#050818] flex items-center justify-center text-white text-[10px] font-700`}
                  >
                    {['A', 'S', 'D', 'N', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-brand-yellow text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/40 font-jakarta">
                  <span className="text-white/70 font-600">500+</span> mamnun o'quvchi
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Lead Form Card */}
          <motion.div
            id="lead-form"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'scale(1.1)',
              }}
            />

            <div className="relative glass rounded-3xl p-8 border border-white/10 shadow-card">
              {/* Card header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-jakarta text-white/50">Hozir mavjud</span>
                </div>
                <h2 className="font-syne font-800 text-2xl text-white mb-1.5">
                  Bepul konsultatsiya
                </h2>
                <p className="text-sm text-white/45 font-jakarta leading-relaxed">
                  Ma'lumotlaringizni qoldiring — 30 daqiqada bog'lanamiz
                </p>
              </div>

              <LeadForm variant="dark" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-brand-yellow text-gray-900 px-3 py-1.5 rounded-full text-xs font-syne font-700 shadow-yellow-glow"
            >
              100% Bepul 🎁
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
