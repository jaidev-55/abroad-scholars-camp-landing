import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Icon } from "./Icon";

const details = [
  {
    icon: FaCalendarAlt,
    label: "Date",
    value: "Saturday, May 16, 2026",
    color: "text-blue-600",
    bg: "bg-blue-100",
    ringColor: "ring-blue-200",
  },
  {
    icon: FaClock,
    label: "Time",
    value: "10:00 AM – 5:00 PM IST",
    color: "text-violet-600",
    bg: "bg-violet-100",
    ringColor: "ring-violet-200",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Venue",
    value: "Vivanta, Coimbatore",
    subtext: "Avinashi Road, Coimbatore, Tamil Nadu",
    color: "text-rose-600",
    bg: "bg-rose-100",
    ringColor: "ring-rose-200",
    link: "https://maps.google.com/?q=Vivanta+Coimbatore",
  },
  {
    icon: FaCheckCircle,
    label: "Entry Fee",
    value: "Absolutely Free",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    ringColor: "ring-emerald-200",
    highlight: true,
  },
];

const EventDetails = () => {
  return (
    <section className="py-16 md:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Mark Your Calendar
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Event Details
          </h2>
        </div>

        {/* Desktop: horizontal strip layout */}
        <div className="hidden md:block">
          <div className="bg-linear-to-br from-gray-50 to-slate-50 rounded-3xl border border-gray-200 p-8 relative overflow-hidden">
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.3]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #CBD5E1 0.5px, transparent 0.5px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative grid grid-cols-4 gap-6">
              {details.map((d, i) => (
                <div key={i} className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`${d.bg} ${d.ringColor} w-14 h-14 rounded-2xl ring-4 flex items-center justify-center`}
                    >
                      <Icon icon={d.icon} className={`${d.color} text-xl`} />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                    {d.label}
                  </p>

                  {/* Value */}
                  {d.link ? (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <p className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">
                        {d.value}
                      </p>
                      {d.subtext && (
                        <p className="text-gray-400 text-xs mt-0.5 group-hover:text-blue-400 transition-colors flex items-center justify-center gap-1">
                          {d.subtext}
                          <Icon
                            icon={FaExternalLinkAlt}
                            className="text-[8px]"
                          />
                        </p>
                      )}
                    </a>
                  ) : (
                    <p
                      className={`text-sm font-bold ${
                        d.highlight ? "text-emerald-600" : "text-gray-900"
                      }`}
                    >
                      {d.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: stacked card layout */}
        <div className="md:hidden space-y-3">
          {details.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100"
            >
              <div
                className={`${d.bg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}
              >
                <Icon icon={d.icon} className={`${d.color} text-lg`} />
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  {d.label}
                </p>
                {d.link ? (
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <p className="text-gray-900 text-sm font-semibold group-hover:text-blue-600 transition-colors">
                      {d.value}
                    </p>
                    {d.subtext && (
                      <p className="text-gray-400 text-xs flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                        {d.subtext}
                        <Icon icon={FaExternalLinkAlt} className="text-[8px]" />
                      </p>
                    )}
                  </a>
                ) : (
                  <p
                    className={`text-sm font-semibold ${
                      d.highlight ? "text-emerald-600" : "text-gray-900"
                    }`}
                  >
                    {d.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EventDetails;
