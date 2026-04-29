import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { Icon } from "./Icon";
import CountdownTimer from "./CountdownTimer";
import RegistrationForm from "./RegistrationForm";
import ReactCountryFlag from "react-country-flag";

const HeroSection = () => {
  const countries = [
    { code: "GB", label: "UK" },
    { code: "US", label: "USA" },
    { code: "CA", label: "Canada" },
    { code: "AU", label: "Australia" },
    { code: "DE", label: "Germany" },
    { code: "IE", label: "Ireland" },
    { code: "NZ", label: "New Zealand" },
    { code: "FR", label: "France" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFC]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
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
            <div className="md:hidden mb-10">
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/6 border border-gray-100 p-6 sm:p-8 mx-auto relative">
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

                <p className="text-center text-gray-400 text-[11px] mt-4 flex items-center justify-center gap-2">
                  Limited seats · No spam · We respect your privacy
                </p>
              </div>
            </div>
            {/* Headline */}
            <h1 className="text-[1.6rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-4 sm:mb-5 tracking-tight">
              Free Study Abroad
              <br />
              Education{" "}
              <span className="relative text-blue-600">
                Fair
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-blue-500/25 rounded-full" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-sm sm:text-base md:text-[1.075rem] leading-relaxed mb-5 sm:mb-7 max-w-lg mx-auto md:mx-0">
              Meet top international university representatives, explore your
              study options, and get expert guidance on admissions, visas,
              IELTS, and education loans — all in one place.
            </p>

            {/* Country flags */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center md:justify-start mb-5 sm:mb-7">
              {countries.map((country) => (
                <span
                  key={country.code}
                  className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-1.5"
                >
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{ width: "16px", height: "12px" }}
                  />
                  {country.label}
                </span>
              ))}
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium ml-0.5">
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
          </div>

          {/* ─── Right — Form Card (visible on ALL screens) ─── */}
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/6 border border-gray-100 p-6 sm:p-8 mx-auto relative">
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
};

export default HeroSection;
