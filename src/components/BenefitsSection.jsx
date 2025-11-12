'use client';

import { CheckCircle2, Award, Users, BookOpen, MessageCircle, Trophy, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Award,
    title: "Certificate of Completion",
    description: "Official certification from BCC CP Chapter upon successful completion",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Portfolio of Solved Problems",
    description: "Build an impressive portfolio with 100+ solved competitive programming problems",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Get priority access to internship and job opportunities in tech companies",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Lifetime Community Access",
    description: "Join our exclusive Discord community and network with 500+ CP enthusiasts",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: MessageCircle,
    title: "Career Guidance & Mentorship",
    description: "1:1 mentorship sessions and personalized career guidance from industry experts",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Trophy,
    title: "Competition Preparation",
    description: "Weekly contests, mock interviews, and comprehensive preparation for coding competitions",
    gradient: "from-yellow-500 to-orange-500"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#014935]">What </span>
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              You'll Gain
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Transform your career with skills and opportunities that top tech companies value
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border-2 border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-[#014935] font-semibold">
              500+ Students Successfully Started Their CP Careers
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function BenefitCard({ icon: Icon, title, description, gradient, index }) {
  return (
    <Card className="group border-2 border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-6 space-y-4 relative">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {/* Icon with Gradient */}
          <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#014935] mb-2 group-hover:text-green-700 transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Number Badge */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200">
          <span className="text-xs font-bold text-gray-500">0{index + 1}</span>
        </div>
      </CardContent>
    </Card>
  );
}
