'use client';

import Navbar from "@/components/Navbar";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white">
      <Navbar />
      <RulesSection />
      <Footer />
    </div>
  );
}
