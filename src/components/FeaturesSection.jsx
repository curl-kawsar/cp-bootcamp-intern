'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Expert-Led Training",
    description: "Learn from competitive programming veterans who have competed at the highest levels",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Join a community of passionate programmers and grow together through peer learning",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Zap,
    title: "Real-World Practice",
    description: "Solve actual competition problems and participate in weekly coding contests",
    gradient: "from-teal-500 to-cyan-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#014935] mb-4">Why Choose Our Bootcamp?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience a comprehensive learning journey designed to make you competition-ready
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, gradient }) {
  return (
    <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl">
      <CardContent className="p-6 space-y-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#014935]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}
