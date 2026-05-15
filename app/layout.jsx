import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'SEVEN LC — Ingliz tilini natija bilan o\'rganing',
  description:
    'SEVEN Language Center — zamonaviy metodologiya bilan ingliz tilini o\'rganing. 500+ muvaffaqiyatli o\'quvchi, 7+ yillik tajriba. Bepul konsultatsiya oling!',
  keywords:
    'ingliz tili kursi, english kurslari toshkent, IELTS tayyorlov, ingliz tili o\'rganish, seven lc, seven language center',
  openGraph: {
    title: 'SEVEN LC — Ingliz tilini natija bilan o\'rganing',
    description:
      'Zamonaviy metodologiya, kuchli ustozlar va natijaga yo\'naltirilgan ta\'lim.',
    type: 'website',
    locale: 'uz_UZ',
    siteName: 'SEVEN LC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEVEN LC — Ingliz tilini natija bilan o\'rganing',
    description:
      'Zamonaviy metodologiya, kuchli ustozlar va natijaga yo\'naltirilgan ta\'lim.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${syne.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050818" />
      </head>
      <body className="font-jakarta bg-[#050818] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
