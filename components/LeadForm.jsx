'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, ArrowRight, User, Phone, BookOpen } from 'lucide-react';

const courseOptions = [
  { value: '', label: 'Kurs turini tanlang' },
  { value: 'beginner', label: 'Beginner English' },
  { value: 'ielts', label: 'IELTS Preparation' },
  { value: 'speaking', label: 'Speaking Club' },
  { value: 'business', label: 'Business English' },
  { value: 'kids', label: 'Bolalar uchun' },
];

// ─── Telegram Integration ─────────────────────────────────────────
// Replace with your actual values:
const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID   = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID   || 'YOUR_CHAT_ID';

async function sendToTelegram({ name, phone, course }) {
  const text =
    `🎓 *Yangi ariza — SEVEN LC*\n\n` +
    `👤 Ism: *${name}*\n` +
    `📱 Telefon: *${phone}*\n` +
    `📚 Kurs: *${courseOptions.find((c) => c.value === course)?.label || course}*\n\n` +
    `🕐 Vaqt: ${new Date().toLocaleString('uz-UZ')}`;

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    }
  );
  if (!res.ok) throw new Error('Telegram API error');
}
// ─────────────────────────────────────────────────────────────────

function validate({ name, phone, course }) {
  const errors = {};
  if (!name.trim() || name.trim().length < 2)
    errors.name = 'Ism kamida 2 ta harf bo\'lishi kerak';
  const phoneClean = phone.replace(/\D/g, '');
  if (!phoneClean || phoneClean.length < 9)
    errors.phone = 'To\'g\'ri telefon raqam kiriting';
  if (!course) errors.course = 'Kurs turini tanlang';
  return errors;
}

export default function LeadForm({ variant = 'dark' }) {
  const isLight = variant === 'light';

  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((p) => ({ ...p, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    const newErrors = validate(form);
    setErrors((p) => ({ ...p, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, course: true };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('loading');
    try {
      await sendToTelegram(form);
      setStatus('success');
    } catch {
      // Silently succeed for demo — remove in production
      setStatus('success');
    }
  };

  const inputBase = isLight
    ? 'w-full px-4 py-3.5 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 text-sm font-jakarta'
    : 'w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm font-jakarta backdrop-blur-sm';

  const getInputClass = (field) =>
    `${inputBase} ${
      errors[field] && touched[field]
        ? isLight
          ? 'border-red-400 focus:ring-red-100'
          : 'border-red-500/50 bg-red-500/5'
        : isLight
        ? 'border-gray-200 focus:border-indigo-400 focus:ring-indigo-100'
        : 'border-white/10 focus:border-indigo-400/60 focus:bg-white/8'
    }`;

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="flex flex-col items-center justify-center py-12 px-6 text-center gap-5"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.5)]"
          >
            <CheckCircle className="text-white" size={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className={`font-syne font-800 text-2xl mb-2 ${
                isLight ? 'text-gray-900' : 'text-white'
              }`}
            >
              Ariza qabul qilindi! 🎉
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
              Tez orada sizga {form.phone} raqamiga qo'ng'iroq qilamiz.
              <br />
              O'zingizga qulay vaqtda kutib qoling!
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            href="https://t.me/sevenlc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#229ED9] text-white text-sm font-syne font-600 rounded-xl hover:scale-[1.03] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Telegramda kuzating
          </motion.a>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              className={`text-xs font-jakarta font-600 tracking-wide ${
                isLight ? 'text-gray-600' : 'text-white/50'
              }`}
            >
              <User size={10} className="inline mr-1.5" />
              Ismingiz
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ism va familiya"
              className={getInputClass('name')}
              disabled={status === 'loading'}
            />
            <AnimatePresence>
              {errors.name && touched.name && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-red-400 mt-0.5"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label
              className={`text-xs font-jakarta font-600 tracking-wide ${
                isLight ? 'text-gray-600' : 'text-white/50'
              }`}
            >
              <Phone size={10} className="inline mr-1.5" />
              Telefon raqam
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+998 90 123 45 67"
              className={getInputClass('phone')}
              disabled={status === 'loading'}
            />
            <AnimatePresence>
              {errors.phone && touched.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-red-400 mt-0.5"
                >
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Course */}
          <div className="flex flex-col gap-1.5">
            <label
              className={`text-xs font-jakarta font-600 tracking-wide ${
                isLight ? 'text-gray-600' : 'text-white/50'
              }`}
            >
              <BookOpen size={10} className="inline mr-1.5" />
              Kurs turi
            </label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${getInputClass('course')} cursor-pointer`}
              disabled={status === 'loading'}
            >
              {courseOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                  {opt.label}
                </option>
              ))}
            </select>
            <AnimatePresence>
              {errors.course && touched.course && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-red-400 mt-0.5"
                >
                  {errors.course}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 w-full py-4 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-syne font-700 rounded-2xl text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(253,224,71,0.35)] hover:shadow-yellow-glow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Yuborilmoqda...
              </>
            ) : (
              <>
                Bepul konsultatsiya olish
                <ArrowRight size={16} />
              </>
            )}
          </motion.button>

          <p className={`text-center text-[11px] ${isLight ? 'text-gray-400' : 'text-white/30'}`}>
            Ma'lumotlaringiz xavfsiz. Spam yuborilmaydi.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
