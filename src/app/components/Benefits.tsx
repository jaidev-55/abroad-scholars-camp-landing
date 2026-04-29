import {
  FaUniversity,
  FaComments,
  FaPassport,
  FaFileAlt,
  FaMoneyBillWave,
  FaHandshake,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { Icon } from "./Icon";

interface Benefit {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

const benefits: Benefit[] = [
  {
    icon: FaUniversity,
    title: "15+ University Reps",
    desc: "Meet representatives from top international universities face-to-face",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: FaComments,
    title: "Spot Admissions",
    desc: "Get on-the-spot admission offers. Bring your transcripts!",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FaPassport,
    title: "Visa Consultation",
    desc: "Dedicated visa booth to guide you through the entire process",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: FaFileAlt,
    title: "IELTS Assessment",
    desc: "Free spot IELTS level assessment to know where you stand",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: FaMoneyBillWave,
    title: "Loan Partners",
    desc: "Connect with education loan partners for hassle-free financing",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: FaHandshake,
    title: "Get Spot Offers in 3 Hours",
    desc: "Walk in with your documents and receive admission offers within 3 hours. Our experts will guide you on what to do next  instantly.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            What&apos;s Inside
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Everything Under One Roof
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
            One day. Six stations. All your questions answered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div
                className={`${b.bg} w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon icon={b.icon} className={`${b.color} text-lg`} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 text-[0.95rem] mb-1.5">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>

              {/* Subtle corner accent on hover */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 ${b.bg} rounded-tr-2xl rounded-bl-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
