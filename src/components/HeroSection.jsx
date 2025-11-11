'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-green-200">
              <span className="text-sm font-medium bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                🚀 Applications Now Open
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-[#014935]">Master </span>
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Competitive Programming
              </span>
              <span className="text-[#014935]"> From Zero to Hero</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join our intensive bootcamp intern program and transform yourself into a competitive programming expert. 
              Learn from industry professionals, solve real problems, and compete with the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#327a3b] text-[#014935] hover:bg-green-50">
                View Curriculum
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">500+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

function HeroStats() {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-br from-[#014935] to-[#327a3b] rounded-2xl p-8 shadow-2xl">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl opacity-60"></div>
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between text-white">
            <span className="text-sm">Problem Solving Stats</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
            </svg>
          </div>
          <div className="space-y-3">
            <ProgressBar label="Data Structures" percentage={95} />
            <ProgressBar label="Algorithms" percentage={88} />
            <ProgressBar label="Problem Solving" percentage={92} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, percentage }) {
  return (
    <div>
      <div className="flex justify-between text-white/90 text-sm mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
