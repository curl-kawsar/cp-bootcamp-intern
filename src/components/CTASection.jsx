'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[#014935]">Ready to Start Your </span>
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            CP Journey?
          </span>
        </h2>

        {/* Description */}
        {/* <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join 500+ students who have successfully launched their competitive programming careers.
        </p> */}

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 text-lg font-semibold"
        >
          Apply for Bootcamp <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
