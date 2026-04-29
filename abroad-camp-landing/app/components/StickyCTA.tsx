"use client";

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "./Icon";

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Top fade edge — blends into page instead of a hard border */}
      <div className="h-6 bg-linear-to-t from-white to-transparent" />

      <div className="bg-white/95 backdrop-blur-xl px-4 pb-[env(safe-area-inset-bottom,12px)] pt-2">
        <a
          href="#register"
          className="group flex items-center justify-center gap-2.5 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3.5 rounded-2xl text-sm tracking-wide transition-all shadow-lg shadow-blue-600/20"
        >
          Register Free — Limited Seats
          <Icon
            icon={FaArrowRight}
            className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>

        {/* Seat count hint */}
        <p className="text-center text-gray-400 text-[11px] mt-2 font-medium">
          Only a few spots remaining
        </p>
      </div>
    </div>
  );
};

export default StickyCTA;
