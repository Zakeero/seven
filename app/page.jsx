import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import Benefits from '@/components/Benefits';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      <main>
        {/* 1. Hero + Lead Form */}
        <Hero />

        {/* 2. Trust Indicators / Stats */}
        <TrustIndicators />

        {/* 3. Benefits / Why SEVEN LC */}
        <Benefits />

        {/* 4. Courses */}
        <Courses />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. CTA + Contact + Form */}
        <CTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
