

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does SOWSI Technologies provide?",
    answer:
      "We provide end-to-end technology solutions including web development, mobile app development, software development, UI/UX design, AI solutions, and digital transformation services.",
  },
  {
    question: "How can I start a project with SOWSI?",
    answer:
      "Simply contact our team through the website or send us your requirements. We'll discuss your goals, suggest the right approach, and provide the next steps.",
  },
  {
    question: "Do you develop custom software solutions?",
    answer:
      "Yes. We build customized software solutions tailored to your business requirements, workflows, and goals.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the scope, features, complexity, and technology involved. After understanding your requirements, we provide an estimated timeline.",
  },
  {
    question: "Can you work with existing applications or websites?",
    answer:
      "Yes. We can enhance, redesign, maintain, optimize, or add new features to existing websites and applications.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance and technical support to help keep your application secure, updated, and performing smoothly.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full mx-auto px-6 py-16">
     <div className="w-[95%] mx-auto">
      <h2 className="text-[28px] font-bold text-purple-800 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-[17px] mb-10">
        Find quick answers to common questions about our software
        development services and delivery process
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() =>
                setActiveIndex((current) => (current === index ? null : current))
              }
              className={`min-h-[104px] rounded-xl px-6 py-5 transition-colors duration-150 cursor-default ${
                isActive ? "bg-[#7C5C97]" : "bg-gray-50 border-b border-gray-300"
              }`}
            >
              {isActive ? (
                <div className="flex flex-col h-full animate-[fadeIn_0.12s_ease-out]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-white text-[15px]">
                      {faq.question}
                    </h3>
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={() => setActiveIndex(null)}
                      className="shrink-0 text-white/80 hover:text-white text-lg leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-white/90 text-[18px] leading-relaxed mt-3 pb-2 border-b border-white/20">
                    {faq.answer}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between h-full">
                  <span className="font-semibold text-gray-900 text-[19px]">
                    {faq.question}
                  </span>
                  <span className="text-purple-800 text-xl leading-none shrink-0 ml-4">
                    +
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}