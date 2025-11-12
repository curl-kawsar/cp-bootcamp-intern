'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Zap, Trophy, Calendar, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Code2,
    badge: "Learning Style",
    title: "Expert-Led Training",
    description: "Learn from competitive programming veterans and experienced mentors who will guide you through every step, challenge you to grow, and keep you on track so you never feel lost.",
    badgeColor: "bg-purple-100 text-purple-700",
    cardColor: "bg-purple-50"
  },
  {
    icon: Users,
    badge: "Mentorship",
    title: "1:1 Mentorship",
    description: "A team of skilled mentors will be by your side, ready to meet with you individually on Google Meet to create personalized plans, solve problems, and guide you to reach your goals.",
    badgeColor: "bg-blue-100 text-blue-700",
    cardColor: "bg-blue-50"
  },
  {
    icon: Calendar,
    badge: "Live Sessions",
    title: "Weekly Support Sessions",
    description: "Join live sessions where you can ask questions directly, share your screen to show problems, and get solutions. Learn together with everyone in a collaborative environment.",
    badgeColor: "bg-green-100 text-green-700",
    cardColor: "bg-green-50"
  },
  {
    icon: MessageSquare,
    badge: "Support System",
    title: "24/7 Community Support",
    description: "Get help anytime, anywhere. Access dedicated Discord server and support platform where you can easily find solutions to any problem you encounter.",
    badgeColor: "bg-orange-100 text-orange-700",
    cardColor: "bg-orange-50"
  },
  {
    icon: Zap,
    badge: "Environment",
    title: "Structured Learning Path",
    description: "Learn through weekly contests, topic-based problem sets, mentor sessions, and comprehensive curriculum—the same environment where 500+ students have successfully started their CP careers.",
    badgeColor: "bg-pink-100 text-pink-700",
    cardColor: "bg-pink-50"
  },
  {
    icon: Trophy,
    badge: "Results",
    title: "Certificate & Recognition",
    description: "Your success is guaranteed if you stay committed. Join hundreds of students who have successfully completed this bootcamp and received official certification from BCC CP Chapter.",
    badgeColor: "bg-yellow-100 text-yellow-700",
    cardColor: "bg-yellow-50"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#014935]">This Bootcamp's </span>
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              X Factor
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, badge, title, description, badgeColor, cardColor }) {
  return (
    <Card className={`border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl overflow-hidden group ${cardColor}`}>
      <CardContent className="p-6 space-y-4 relative">
        {/* Badge */}
        <div className="inline-block">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-[#014935]">{title}</h3>
        
        {/* Description and Icon Container */}
        <div className="relative">
          <p className="text-gray-700 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Decorative Icon */}
          <div className="absolute -bottom-4 -right-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <Icon className="w-24 h-24 text-[#014935]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
