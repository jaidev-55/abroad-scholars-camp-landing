import {
  FaUserGraduate,
  FaGraduationCap,
  FaFileAlt,
  FaPassport,
  FaMoneyBillWave,
} from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { Icon } from "./Icon";

const whoItems: { icon: IconType; text: string; color: string; bg: string }[] =
  [
    {
      icon: FaUserGraduate,
      text: "You're a student wanting to study abroad",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: HiUserGroup,
      text: "You're a parent with doubts about safety, cost, or process",
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      icon: FaGraduationCap,
      text: "You're in 12th or completed UG / PG and exploring options",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: FaFileAlt,
      text: "You already have an offer letter and need next-step guidance",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: FaPassport,
      text: "You're confused about visa, IELTS, or documentation",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: FaMoneyBillWave,
      text: "You need help with education loans & scholarships",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
  ];

const WhoShouldAttend = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FAFBFC]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Who Is This For?
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            This Camp Is Perfect For You If…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          {whoItems.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-200"
            >
              <div
                className={`${item.bg} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}
              >
                <Icon icon={item.icon} className={`${item.color} text-base`} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
