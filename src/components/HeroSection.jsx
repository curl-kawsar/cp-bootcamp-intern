'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#014935]">Master </span>
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Competitive Programming
            </span>
            <span className="text-[#014935]"> From Zero to Hero</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Join our intensive bootcamp intern program with expert mentorship, weekly contests, structured problem sets, and comprehensive support—through which 500+ students have successfully launched their competitive programming careers.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg"
            >
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
