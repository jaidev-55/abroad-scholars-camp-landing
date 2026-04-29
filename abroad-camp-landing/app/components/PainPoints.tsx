import { FaCheckCircle } from "react-icons/fa";
import { Icon } from "./Icon";

const painPoints = [
  "Which country & university is right for me?",
  "How do I get a student visa?",
  "Can I afford it? What about loans?",
  "Is my IELTS score good enough?",
  "I have an offer letter — now what?",
  "My parents have too many doubts...",
];
const PainPoints = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FAFBFC]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
          Sound Familiar?
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-snug">
          Planning to study abroad but{" "}
          <span className="relative text-blue-600">
            confused
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 140 6"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 4C30 1 50 1 70 3C90 5 120 2 138 4"
                stroke="#3B82F6"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.25"
              />
            </svg>
          </span>{" "}
          about where to start?
        </h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-3.5 bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-200"
            >
              <span className="shrink-0 w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center mt-0.5">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="text-rose-400"
                >
                  <path
                    d="M2 2L8 8M8 2L2 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className="text-gray-600 text-sm text-left leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Resolution card */}
        <div className="mt-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-7 md:p-8 relative overflow-hidden">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center">
                <Icon icon={FaCheckCircle} className="text-white text-lg" />
              </div>
            </div>
            <p className="text-white font-semibold text-lg md:text-xl mb-2">
              This camp answers all your questions — in one day, for free.
            </p>
            <p className="text-blue-200 text-sm">
              Walk in confused, walk out with a clear plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
