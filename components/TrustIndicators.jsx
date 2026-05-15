'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: "O'quvchi",
    sublabel: 'Muvaffaqiyatli bitiruvchilar',
    color: 'from-indigo-500 to-indigo-600',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    value: 90,
    suffix: '%',
    label: 'Natija',
    sublabel: "Maqsadiga erishgan o'quvchilar",
    color: 'from-purple-500 to-violet-600',
    glow: 'rgba(124,58,237,0.3)',
  },
  {
    value: 7,
    suffix: '+',
    label: 'Yillik tajriba',
    sublabel: "O'quv markazimiz tarixi",
    color: 'from-amber-400 to-yellow-500',
    glow: 'rgba(253,224,71,0.3)',
  },
  {
    value: 15,
    suffix: '+',
    label: "Ustozlar",
    sublabel: 'Sertifikatlangan o\'qituvchilar',
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52,211,153,0.3)',
  },
];

function Counter({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 overflow-hidden bg-[#050818]"
    >
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(124,58,237,0.4), transparent)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div
                className="relative glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 card-hover overflow-hidden"
                style={{
                  boxShadow: `0 0 0 0 ${stat.glow}`,
                }}
              >
                {/* BG glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top, ${stat.glow} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* Number */}
                  <div
                    className={`font-syne font-800 text-4xl md:text-5xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1`}
                  >
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      isVisible={isInView}
                    />
                  </div>

                  {/* Label */}
                  <p className="font-syne font-700 text-white text-lg mb-1">{stat.label}</p>
                  <p className="font-jakarta text-xs text-white/35 leading-snug">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${stat.color} opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
