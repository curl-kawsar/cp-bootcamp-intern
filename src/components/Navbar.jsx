'use client';

import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#014935] to-[#327a3b] rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#014935]">CP Bootcamp</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#014935] transition">Features</a>
            <a href="#program" className="text-gray-700 hover:text-[#014935] transition">Program</a>
            <a href="#benefits" className="text-gray-700 hover:text-[#014935] transition">Benefits</a>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
