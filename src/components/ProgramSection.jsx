'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const levels = [
  { 
    level: "Beginners", 
    title: "Beginners", 
    terms: "Level-1 Term-1, Level-1 Term-2",
    semesters: ["1st Year 1st Semester", "1st Year 2nd Semester"],
    eligibility: "Nothing",
    syllabus: ["ICPC sheet", "SPL"],
    practice: "icpc sheet, beecrowd, hackerrank",
    mentorType: "Students",
    mentorNames: ["Student Mentors"],
    color: "from-green-500 to-emerald-500"
  },
  { 
    level: "Semi-intermediate", 
    title: "Semi-intermediate", 
    terms: "Level-2 Term-1, Level-2 Term-2",
    semesters: ["2nd Year 1st Semester", "2nd Year 2nd Semester"],
    eligibility: "Solve 70-100 problems from the ICPC sheet without any cheating",
    syllabus: ["STL", "Bit manipulation", "Number theory", "Binary search", "Target: 200 problems from CF"],
    practice: "Will be provided + watermelon sheet",
    mentorType: "Faculty + Students",
    mentorNames: ["Faculty Members", "Student Mentors"],
    color: "from-emerald-500 to-teal-500"
  },
  { 
    level: "Intermediate", 
    title: "Intermediate", 
    terms: "Level-2 Term-2, Level-3 Term-1, Level-3 Term-2",
    semesters: ["2nd Year 2nd Semester", "3rd Year 1st Semester", "3rd Year 2nd Semester"],
    eligibility: "Solve 200 problems from Codeforces",
    syllabus: ["DSA", "Advanced problem-solving"],
    practice: "Will be provided",
    mentorType: "Faculty",
    mentorNames: ["Faculty Members"],
    color: "from-teal-500 to-cyan-500"
  },
  { 
    level: "Advanced (Experts)", 
    title: "Advanced (Experts)", 
    terms: "Eligible students",
    semesters: [],
    eligibility: "Based on DSA performance",
    syllabus: ["Problem-solving on DSA", "Advanced techniques"],
    practice: "Will be provided",
    mentorType: "External",
    mentorNames: ["External Experts"],
    color: "from-cyan-500 to-blue-500"
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#014935] mb-4">Internship Levels</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Four progressive levels designed to take you from beginner to advanced competitive programmer
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {levels.map((level, index) => (
            <LevelCard key={index} {...level} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LevelCard({ level, title, terms, semesters, eligibility, syllabus, practice, mentorType, mentorNames, color }) {
  return (
    <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
      <CardContent className="p-6 space-y-4 relative">
        <div className="flex items-center justify-between">
          <div className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {level}
          </div>
          <div className="text-xs text-gray-600 bg-green-50 px-3 py-1 rounded-full">
            {mentorType}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#014935]">{title}</h3>
        <p className="text-sm text-green-700 font-medium">{terms}</p>
        {semesters.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {semesters.map((sem, i) => (
              <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                {sem}
              </span>
            ))}
          </div>
        )}
        
        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Eligibility</h4>
            <p className="text-sm text-gray-700">{eligibility}</p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Syllabus</h4>
            <ul className="space-y-1">
              {syllabus.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Problem Solving</h4>
            <p className="text-sm text-gray-700">{practice}</p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase mb-2">Mentor</h4>
            <div className="flex flex-wrap gap-2">
              {mentorNames.map((mentor, i) => (
                <span key={i} className="text-xs bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-[#014935] px-2 py-1 rounded-md border border-green-200">
                  {mentor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
