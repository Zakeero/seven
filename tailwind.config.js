/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#050818',
          indigo: '#4F46E5',
          'indigo-light': '#6366F1',
          purple: '#7C3AED',
          'purple-light': '#8B5CF6',
          yellow: '#FDE047',
          'yellow-deep': '#EAB308',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.3) 0%, transparent 60%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(124,58,237,0.08) 100%)',
        'glow-indigo':
          'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 20px 60px -10px rgba(0,0,0,0.3)',
        'glow': '0 0 40px rgba(99,102,241,0.4)',
        'yellow-glow': '0 0 30px rgba(253,224,71,0.5)',
      },
    },
  },
  plugins: [],
};
