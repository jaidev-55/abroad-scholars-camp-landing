import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
import { Icon } from "./Icon";
import CountdownTimer from "./CountdownTimer";
import RegistrationForm from "./RegistrationForm";

const countryFlags = ["🇬🇧", "🇺🇸", "🇨🇦", "🇦🇺", "🇩🇪", "🇮🇪", "🇳🇿", "🇫🇷"];

export const HeroSection = React.forwardRef<
  HTMLDivElement,
  { onRegisterClick: () => void }
>(function HeroSection({ onRegisterClick }, ref) {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFC]">
      {/* Soft ambient background */}

      {/* Dot pattern */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* ─── Left Content ─── */}
          <div className="text-center md:text-left">
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-7 shadow-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500" />
              </span>
              <span className="text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
                Free Event — May 16, Coimbatore
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.6rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-4 sm:mb-5 tracking-tight">
              Your Abroad Dream
              <br />
              Starts{" "}
              <span className="relative text-blue-600">
                Here
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 120 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5.5C20 2 40 2 60 4C80 6 100 3 118 5"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-sm sm:text-base md:text-[1.075rem] leading-relaxed mb-5 sm:mb-7 max-w-lg mx-auto md:mx-0">
              Free Abroad Education Camp — meet university reps, get spot
              admissions, visa help, IELTS assessment & more. All under one
              roof.
            </p>

            {/* Country flags */}
            <div className="flex items-center gap-1 sm:gap-1.5 justify-center md:justify-start mb-5 sm:mb-7">
              {countryFlags.map((flag, i) => (
                <span
                  key={i}
                  className="text-xl sm:text-[1.65rem]"
                  role="img"
                  aria-label="country flag"
                >
                  {flag}
                </span>
              ))}
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium ml-1.5 sm:ml-2">
                & more
              </span>
            </div>

            {/* Event info pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center md:justify-start mb-6 sm:mb-8">
              {[
                {
                  icon: FaCalendarAlt,
                  text: "May 16, Saturday",
                  color: "text-blue-500",
                },
                {
                  icon: FaClock,
                  text: "10 AM – 5 PM",
                  color: "text-amber-500",
                },
                {
                  icon: FaMapMarkerAlt,
                  text: "Vivanta, Coimbatore",
                  color: "text-rose-400",
                },
              ].map(({ icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  <Icon icon={icon} className={`${color} text-xs sm:text-sm`} />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <CountdownTimer />

            {/* Mobile CTA */}
            <div className="mt-6 sm:mt-8 md:hidden">
              <button
                onClick={onRegisterClick}
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 tracking-wide"
              >
                Register Now — It&apos;s Free
                <Icon icon={FaArrowRight} className="text-xs" />
              </button>
              <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-2.5 flex items-center justify-center gap-1.5">
                <Icon icon={FaShieldAlt} className="text-gray-300 text-[9px]" />
                Limited seats · No spam · We respect your privacy
              </p>
            </div>
          </div>

          {/* ─── Right — Form Card (Desktop) ─── */}
          <div className="hidden md:block" ref={ref}>
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/6 border border-gray-100 p-8  mx-auto relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-50 to-transparent rounded-tr-3xl rounded-bl-[60px] pointer-events-none" />

              <div className="relative text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-3 uppercase tracking-wider">
                  <Icon icon={FaCheckCircle} className="text-[10px]" /> Free
                  Entry
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Reserve Your Spot
                </h2>
                <p className="text-gray-400 text-sm mt-1.5">
                  Only limited seats available
                </p>
              </div>

              <RegistrationForm />

              <p className="text-center text-gray-400 text-[11px] mt-4 flex items-center justify-center gap-1.5">
                <Icon
                  icon={FaShieldAlt}
                  className="text-gray-300 text-[10px]"
                />
                Limited seats · No spam · We respect your privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
