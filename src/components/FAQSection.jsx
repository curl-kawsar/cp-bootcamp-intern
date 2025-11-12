'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Should I take a paid course along with the internship?",
    answer: "Absolutely. If you take a paid course, you will get better guidelines and structured learning materials that complement the internship experience."
  },
  {
    id: 2,
    question: "If I need to take a paid course anyway, what's the benefit of doing the internship?",
    answer: "In a paid course, you don't get the opportunity to interact with everyone onsite. It's difficult to maintain focus when studying alone. But in the internship, regular onsite engagement will significantly accelerate your learning speed through team collaboration and peer interaction."
  },
  {
    id: 3,
    question: "Will mentors teach directly in the internship?",
    answer: "Not always. We are all very busy with our own work. Mentors will conduct onsite classes when time permits, or online classes, or provide recorded tutorials—and if they don't have time at all, they will provide YouTube video links. Each group must follow those videos or resources to learn. Remember, ultimately you have to learn on your own. However, we will show you the way and provide specific guidelines. Learning in groups is much more effective."
  },
  {
    id: 4,
    question: "Can I do the internship alone?",
    answer: "No. This internship will be team-based. Each team will have 3 members. Team members can initially form teams themselves. However, in the future, we will provide opportunities to rearrange teams based on contest performance."
  },
  {
    id: 5,
    question: "Will there be individual contests?",
    answer: "Yes. Individual contests will be organized to measure performance. Additionally, there will be team contests as well."
  },
  {
    id: 6,
    question: "What is the main goal of this internship?",
    answer: "The main goal of this internship is to stay with you until the end, to support you throughout the learning process with proper guidelines, and help you succeed in competitive programming."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#014935]">Your </span>
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
            <span className="text-[#014935]"> About the Bootcamp</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              number={`0${faq.id}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ number, question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-green-100">
      {/* Question Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-50/50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          {/* Number Badge */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
            isOpen 
              ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {number}
          </div>
          
          {/* Question */}
          <div className="text-lg font-semibold text-[#014935]">
            {question}
          </div>
        </div>

        {/* Toggle Icon */}
        <div className={`flex-shrink-0 ml-4 transition-colors ${
          isOpen ? 'text-emerald-600' : 'text-gray-400'
        }`}>
          {isOpen ? (
            <Minus className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 pl-[88px]">
          <p className="text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
