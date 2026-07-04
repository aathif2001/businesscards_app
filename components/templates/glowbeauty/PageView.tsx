'use client';
import { useState } from "react";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { BannerCarousel } from "./components/BannerCarousel";
import { HeroSection } from "./components/HeroSection";
import { CoreOfferings } from "./components/CoreOfferings";
import { StatsSection } from "./components/StatsSection";
import { TrustedSection } from "./components/TrustedSection";
import { QuoteForm } from "./components/QuoteForm";
import { FAQ } from "./components/FAQ";
import { BillingSection } from "./components/BillingSection";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { FloatingContactFABs } from "./components/FloatingContactFABs";

export default function GlowBeautyPageView() {
  const [carouselReady, setCarouselReady] = useState(false);
  return (
    <>
      <LoadingScreen carouselReady={carouselReady} />
      <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <main>
          <BannerCarousel onLoaded={() => setCarouselReady(true)} />
          <HeroSection />
          <CoreOfferings />
          <StatsSection />
          <TrustedSection />
          <QuoteForm />
          <FAQ />
          <BillingSection />
        </main>
        <Footer />
        <FloatingNav />
        <FloatingContactFABs />
      </div>
    </>
  );
}
