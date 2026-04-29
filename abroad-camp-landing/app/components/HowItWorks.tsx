import { FaWhatsapp, FaPlane } from "react-icons/fa";
import { HiAcademicCap, HiClipboardDocumentCheck } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { Icon } from "./Icon";

const steps: {
  num: string;
  title: string;
  desc: string;
  icon: IconType;
  color: string;
  bg: string;
}[] = [
  {
    num: "01",
    title: "Register",
    desc: "Fill the form — takes 30 seconds",
    icon: HiClipboardDocumentCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    num: "02",
    title: "Get Confirmation",
    desc: "Receive your pass on WhatsApp",
    icon: FaWhatsapp,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    num: "03",
    title: "Attend the Camp",
    desc: "Walk in on May 16 at Vivanta Coimbatore",
    icon: HiAcademicCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    num: "04",
    title: "Start Your Journey",
    desc: "Get clarity & begin your abroad dream",
    icon: FaPlane,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — vertically centered through the icon boxes */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-linear-to-r from-blue-200 via-emerald-200 to-amber-200 z-0 rounded-full" />

          {steps.map((s, i) => (
            <div key={i} className="relative text-center group z-10">
              {/* Icon container */}
              <div className="flex justify-center mb-4">
                <div
                  className={`${s.bg} w-16 h-16 rounded-2xl flex items-center justify-center border border-transparent group-hover:border-gray-200 transition-all duration-200 group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.05)]`}
                >
                  <Icon icon={s.icon} className={`${s.color} text-2xl`} />
                </div>
              </div>

              {/* Step label */}
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">
                Step {s.num}
              </span>

              {/* Title */}
              <h3 className="font-bold text-gray-900 text-base mb-1">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
