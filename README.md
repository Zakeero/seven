# SEVEN LC — Landing Page

Premium Next.js landing page for SEVEN Language Center.

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** (icons)
- **Google Fonts** — Syne + Plus Jakarta Sans

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Telegram bot credentials

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## Telegram Bot Setup

1. Create a Telegram bot via [@BotFather](https://t.me/botfather)
2. Copy your bot token
3. Get your chat/group ID where leads will be sent
4. Add to `.env.local`:

```
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

When a user submits the lead form, you'll receive a formatted message like:

```
🎓 Yangi ariza — SEVEN LC

👤 Ism: Aziza Karimova
📱 Telefon: +998901234567
📚 Kurs: IELTS Preparation

🕐 Vaqt: 15.05.2026, 14:32:00
```

## Project Structure

```
seven-lc/
├── app/
│   ├── layout.jsx          # Root layout + SEO + fonts
│   ├── page.jsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles + utilities
├── components/
│   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   ├── Hero.jsx            # Hero section + lead form card
│   ├── LeadForm.jsx        # Reusable lead form (validation + Telegram)
│   ├── TrustIndicators.jsx # Animated stats counter
│   ├── Benefits.jsx        # 6-card benefits grid
│   ├── Courses.jsx         # 3 course cards
│   ├── Testimonials.jsx    # Masonry review cards
│   ├── CTASection.jsx      # CTA banner + contact section
│   ├── Footer.jsx          # Footer with social links
│   ├── FloatingButtons.jsx # Floating Telegram + call buttons
│   └── LoadingScreen.jsx   # Animated loading splash
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Customization

### Brand Colors
Edit `tailwind.config.js` → `theme.extend.colors.brand`

### Contact Info
Search for `+998 90 123 45 67`, `@sevenlc`, `sevenlc` and replace with real values.

### Course Prices
Edit the `courses` array in `components/Courses.jsx`

### Testimonials
Edit the `reviews` array in `components/Testimonials.jsx`

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel --prod
```

## SEO
- Meta title, description, keywords in `app/layout.jsx`
- OpenGraph + Twitter Card tags included
- `lang="uz"` set on `<html>`
- Semantic HTML structure

---

Built with ❤️ for SEVEN Language Center
