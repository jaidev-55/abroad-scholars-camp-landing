"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const FAQItem = ({
  q,
  a,
  open,
  onClick,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <div className={`${index > 0 ? "border-t border-gray-200" : ""}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm md:text-[0.95rem] group-hover:text-blue-600 transition-colors">
          {q}
        </span>
        <span
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
            open
              ? "bg-blue-100 text-blue-600 rotate-180"
              : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"
          }`}
        >
          <FaChevronDown className="text-xs" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed pl-0.5">{a}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    q: "Is this event really free?",
    a: "Yes! The event is 100% free. There are no hidden charges. We just require pre-registration because seats are limited.",
  },
  {
    q: "Who should attend this camp?",
    a: "Any student planning to study abroad — whether you're just exploring or already have an offer letter. Parents are encouraged to attend too!",
  },
  {
    q: "Do I need to bring any documents?",
    a: "It's recommended to bring your academic transcripts, passport (if available), and any offer letters you may have for spot admission evaluations.",
  },
  {
    q: "Can parents attend the camp?",
    a: "Absolutely! We encourage parents to join. They can clear their doubts about finances, visa, safety, and the overall process.",
  },
  {
    q: "What countries and universities will be represented?",
    a: "Representatives from universities in the UK, USA, Canada, Australia, Germany, Ireland, and more will be present at the camp.",
  },
  {
    q: "I already have an offer letter. Should I still come?",
    a: "Yes! You can get guidance on visa, loan, pre-departure prep, and even explore better options if you're not fully satisfied.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section className="py-16  px-4 sm:px-6 bg-[#FAFBFC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:px-7 md:py-2 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openFAQ === i}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
