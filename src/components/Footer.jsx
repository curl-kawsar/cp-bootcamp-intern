'use client';

import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#014935] to-[#327a3b] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">CP Bootcamp</span>
            </div>
            <p className="text-green-100 text-sm">
              Empowering the next generation of competitive programmers
            </p>
          </div>
          <FooterColumn 
            title="Program"
            links={[
              { label: "Curriculum", href: "#" },
              { label: "Instructors", href: "#" },
              { label: "Schedule", href: "#" }
            ]}
          />
          <FooterColumn 
            title="Resources"
            links={[
              { label: "Blog", href: "#" },
              { label: "Practice Problems", href: "#" },
              { label: "FAQs", href: "#" }
            ]}
          />
          <FooterColumn 
            title="Connect"
            links={[
              { label: "Discord Community", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Contact Us", href: "#" }
            ]}
          />
        </div>
        <div className="border-t border-green-600/30 pt-8 text-center text-green-100 text-sm">
          <p>&copy; 2025 CP Bootcamp Intern Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-green-100 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
