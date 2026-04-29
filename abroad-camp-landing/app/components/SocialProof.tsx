import { FaUsers, FaUniversity, FaGlobeAmericas, FaStar } from "react-icons/fa";
import { Icon } from "./Icon";

const stats = [
  {
    icon: FaUsers,
    value: "2,500+",
    label: "Students Counselled",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    icon: FaUniversity,
    value: "100+",
    label: "Partner Universities",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    icon: FaGlobeAmericas,
    value: "15+",
    label: "Countries",
    color: "text-teal-500",
    bg: "bg-teal-100",
  },
  {
    icon: FaStar,
    value: "4.9/5",
    label: "Rating",
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white border-y border-gray-100 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-2 sm:gap-3 py-2 sm:py-0"
            >
              <div
                className={`${stat.bg} w-9 h-9 rounded-xl flex items-center justify-center shrink-0`}
              >
                <Icon icon={stat.icon} className={`${stat.color} text-sm`} />
              </div>
              <div>
                <div className="text-gray-900 text-sm sm:text-base font-bold leading-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
