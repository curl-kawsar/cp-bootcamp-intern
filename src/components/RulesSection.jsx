'use client';

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Users, Calendar, DollarSign, Shield, Award, Gavel, CheckCircle } from "lucide-react";

const rulesData = [
  {
    icon: Users,
    title: "1. Internship Type",
    content: "The CP Internship will be conducted in a team-based format, where each team will consist of three (3) members. Team members may be rearranged during the internship period based on contest performance, communication, and overall contribution."
  },
  {
    icon: Calendar,
    title: "2. Weekly Activities",
    points: [
      "One contest will be held each week (either team-based or individual).",
      "Participants will receive a weekly topic-based problem set, aligned with the CP syllabus.",
      "Mentors will conduct online/offline sessions or share video tutorials related to the weekly topics.",
      "Teams are encouraged to discuss problems together and submit solutions within the deadline."
    ]
  },
  {
    icon: CheckCircle,
    title: "3. Attendance and Participation",
    points: [
      "Regular participation in contests, sessions, and group discussions is mandatory.",
      "Missing two consecutive weeks of activities without prior notice will result in a warning.",
      "Continued absence or lack of activity may lead to termination from the internship."
    ]
  },
  {
    icon: DollarSign,
    title: "4. Withdrawal Policy",
    points: [
      "The internship is free of registration fees.",
      "However, if any participant withdraws before completion, a fine of BDT 1000 will be charged."
    ]
  },
  {
    icon: Shield,
    title: "5. Code of Conduct",
    points: [
      "All participants are expected to uphold a professional and respectful attitude throughout the internship.",
      "Cheating, plagiarism, or submitting code copied from others (including online sources) is strictly prohibited.",
      "Any kind of misbehavior, disrespect, or toxic communication within teams, seniors or mentor sessions will not be tolerated.",
      "Participants must maintain academic integrity, team spirit, and constructive collaboration."
    ]
  },
  {
    icon: Award,
    title: "6. Evaluation Criteria",
    content: "Performance will be assessed based on the following parameters:",
    points: [
      "Contest performance and participation rate",
      "Consistency in problem-solving",
      "Team collaboration and communication",
      "Improvement over time, as tracked by mentors",
      "Adherence to deadlines and assigned problem sets"
    ],
    footer: "Participants showing continuous growth and dedication will receive positive evaluation remarks from mentors, which may be reflected in future club or chapter opportunities."
  },
  {
    icon: Award,
    title: "7. Rewards and Recognition",
    points: [
      "Interns may receive certificates, recognition badges, or honorary mentions within the club's social media and community channels.",
      "Teams demonstrating exceptional consistency and teamwork may be given priority for future club leadership or mentorship positions.",
      "The top 5 interns at the end of the program may also receive special awards for outstanding contributions."
    ]
  }
];

const disciplinaryActions = [
  {
    violation: "Cheating / Code Plagiarism",
    action: "Immediate disqualification from the internship with a fine of BDT 1000 and reporting to the CP Chapter Committee."
  },
  {
    violation: "Repeated Absence / Lack of Participation",
    action: "Two major warnings after that, termination from the program, and a fine of BDT 1000."
  },
  {
    violation: "Misconduct or Disrespect",
    action: "Formal notice issued by the Chapter Committee and possible removal from internship and club activities."
  },
  {
    violation: "Unauthorized Withdrawal",
    action: "Fine of BDT 1000 and restriction from enrolling in the next internship batch."
  }
];

const completionRequirements = [
  "Attend at least 90% of contests and sessions.",
  "Submit at least 80% of the assigned problem sets.",
  "Maintain proper team communication and ethical behavior."
];

export default function RulesSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#014935]">BCC Competitive Programming Chapter</span>
          </h1>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Rules and Regulations for CP Internship
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive guide to ensure a fair, professional, and productive learning environment
          </p>
        </div>

        {/* Rules Cards */}
        <div className="space-y-6 mb-12">
          {rulesData.map((rule, index) => (
            <RuleCard key={index} {...rule} />
          ))}
        </div>

        {/* Disciplinary Actions */}
        <Card className="border-2 border-red-100 mb-12 bg-white shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#014935]">8. Disciplinary Actions</h3>
            </div>
            <p className="text-gray-700 mb-6">
              To maintain a fair and professional learning environment, the following actions will be taken in case of rule violations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-orange-50">
                    <th className="border border-red-200 px-4 py-3 text-left text-sm font-semibold text-[#014935]">
                      Type of Violation
                    </th>
                    <th className="border border-red-200 px-4 py-3 text-left text-sm font-semibold text-[#014935]">
                      Action Taken
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {disciplinaryActions.map((item, index) => (
                    <tr key={index} className="hover:bg-red-50/50 transition-colors">
                      <td className="border border-red-200 px-4 py-3 text-sm font-medium text-gray-800">
                        {item.violation}
                      </td>
                      <td className="border border-red-200 px-4 py-3 text-sm text-gray-700">
                        {item.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> The Advisors and Committee Members will review all disciplinary cases to ensure fair judgment and maintain transparency.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Internship Completion */}
        <Card className="border-2 border-green-200 mb-12 bg-gradient-to-br from-white to-green-50/30 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#014935]">9. Internship Completion</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">
              To be marked as "Successfully Completed", participants must:
            </p>
            <ul className="space-y-3 mb-6">
              {completionRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-green-100 border-l-4 border-green-600 rounded">
              <p className="text-sm text-gray-800 font-medium">
                Successful interns will receive an official <strong>Certificate of Completion</strong> from the BCC Competitive Programming Chapter.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Note */}
        <Card className="border-2 border-green-200 bg-gradient-to-r from-[#014935] to-[#327a3b] shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">10. Final Note</h3>
            </div>
            <p className="text-green-50 leading-relaxed">
              This internship is not only a training opportunity but also a step toward building a strong CP culture within our university. 
              Participants are encouraged to stay dedicated, help their peers, and grow together as a team. Our collective goal is to create 
              a sustainable learning environment that bridges the gap between competitive programming and career development.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RuleCard({ icon: Icon, title, content, points, footer }) {
  return (
    <Card className="border-2 border-green-100 hover:border-green-300 transition-all shadow-lg hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#014935] mb-3">{title}</h3>
            {content && <p className="text-gray-700 mb-3">{content}</p>}
            {points && (
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {footer && (
              <p className="text-sm text-gray-600 mt-4 italic">{footer}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
