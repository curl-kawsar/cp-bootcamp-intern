'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramSection from "@/components/ProgramSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
