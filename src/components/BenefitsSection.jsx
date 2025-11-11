'use client';

import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Certificate of Completion",
  "Portfolio of Solved Problems",
  "Internship Opportunities",
  "Lifetime Community Access",
  "Career Guidance & Mentorship",
  "Competition Preparation"
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#014935] to-[#327a3b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What You'll Gain</h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Transform your career with skills that top tech companies value
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }) {
  return (
    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="w-5 h-5 text-white" />
      </div>
      <span className="text-white font-medium text-lg">{benefit}</span>
    </div>
  );
}
