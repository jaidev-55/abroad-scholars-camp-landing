import { FaStar } from "react-icons/fa";
import { Icon } from "./Icon";

const testimonials = [
  {
    name: "Priya S.",
    text: "Attended last year's camp and got an on-spot admission to a UK university. The visa booth saved me weeks of confusion!",
    role: "Now studying in London",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Karthik R.",
    text: "My parents came along and all their doubts about loans and safety were cleared. This camp changed everything for us.",
    role: "Studying in Canada",
    color: "bg-violet-50 text-violet-600",
  },
  {
    name: "Deepa M.",
    text: "I was so confused about IELTS vs TOEFL. The counselors explained everything clearly. Got my dream university!",
    role: "Pursuing MBA in Australia",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Success Stories
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Students Who Trusted Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Icon
                    key={j}
                    icon={FaStar}
                    className="text-amber-400 text-xs"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
