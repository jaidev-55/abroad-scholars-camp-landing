"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-05-16T10:00:00+05:30").getTime();

    const update = () => {
      const distance = eventDate - Date.now();
      if (distance < 0) return;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days, color: "from-blue-500 to-blue-600" },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      label: "Mins",
      value: timeLeft.minutes,
      color: "from-violet-500 to-violet-600",
    },
    {
      label: "Secs",
      value: timeLeft.seconds,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
      {blocks.map((b, i) => (
        <div
          key={b.label}
          className="group relative flex-1 sm:flex-none sm:min-w-18 max-w-19 text-center"
        >
          {/* Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl px-2 py-2.5 sm:px-4 sm:py-3.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.07)]">
            <div
              className={`text-xl sm:text-2xl md:text-[1.75rem] font-extrabold tabular-nums bg-linear-to-b ${b.color} bg-clip-text text-transparent leading-none`}
            >
              {String(b.value).padStart(2, "0")}
            </div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-widest sm:tracking-[0.12em] text-gray-400 font-semibold mt-1 sm:mt-1.5">
              {b.label}
            </div>
          </div>

          {/* Separator dot (hidden on small mobile) */}
          {i < blocks.length - 1 && (
            <span className="absolute -right-1.75 sm:-right-2.25 top-1/2 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-200 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
