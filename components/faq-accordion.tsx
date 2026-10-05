"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

export interface FAQ {
  question: string;
  answer: ReactNode;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border-b border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(idx)}
            className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <span className="flex items-center justify-center size-8 sm:size-9 rounded-full bg-white/5 text-xs font-mono font-medium text-zinc-400 group-hover:text-white transition-colors shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-brand font-semibold text-base sm:text-lg text-white group-hover:text-zinc-200 transition-colors pr-3">
                {faq.question}
              </span>
            </div>
            <ChevronDown
              className={`size-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                openFaq === idx ? "rotate-180 text-white" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-350 ease-in-out overflow-hidden ${
              openFaq === idx ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed pl-14 sm:pl-16">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
