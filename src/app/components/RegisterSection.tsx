import React from "react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { Icon } from "./Icon";
import RegistrationForm from "./RegistrationForm";

export const RegisterSection = React.forwardRef<HTMLDivElement>(
  function RegisterSection(_, ref) {
    return (
      <section
        id="register"
        className="relative py-16 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-md mx-auto" ref={ref}>
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Don&apos;t Miss Out
            </h2>
            <p className="text-blue-200 text-sm md:text-base">
              Seats are filling fast. Register now — it&apos;s 100% free.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/15 p-7 md:p-8 relative">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-blue-50 to-transparent rounded-tr-3xl rounded-bl-[50px] pointer-events-none" />

            <div className="relative">
              <RegistrationForm />
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-5 md:gap-6 mt-7 flex-wrap">
            {[
              { label: "Free Entry" },
              { label: "Limited Seats" },
              { label: "No Spam" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 text-blue-100 text-xs font-medium"
              >
                <Icon
                  icon={FaCheckCircle}
                  className="text-blue-300 text-[10px]"
                />
                {item.label}
              </span>
            ))}
          </div>

          {/* Privacy note */}
          <p className="text-center text-blue-300/60 text-[11px] mt-4 flex items-center justify-center gap-1.5">
            <Icon icon={FaShieldAlt} className="text-[9px]" />
            Your information is secure and will never be shared
          </p>
        </div>
      </section>
    );
  },
);
