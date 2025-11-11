'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-green-200 bg-gradient-to-r from-white to-green-50/30 shadow-2xl">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold text-[#014935]">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their programming careers. Limited seats available for the next cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8">
                Apply for Bootcamp <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#327a3b] text-[#014935] hover:bg-green-50">
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
