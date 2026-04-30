"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaShareAlt,
  FaCheckCircle,
  FaArrowRight,
  FaFileAlt,
  FaGlobeAmericas,
  FaTicketAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { Navbar } from "../components/Navbar";

function Icon({
  icon: C,
  className = "",
}: {
  icon: IconType;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <C />
    </span>
  );
}

// ─── Confetti Canvas ─────────────────────────────────────────────────
function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#3B82F6",
      "#10B981",
      "#F59E0B",
      "#8B5CF6",
      "#EC4899",
      "#F97316",
      "#06B6D4",
      "#EAB308",
    ];
    const particles: {
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      vx: number;
      vy: number;
      rot: number;
      vr: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1 - 20,
        w: Math.random() * 8 + 3,
        h: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        vr: (Math.random() - 0.5) * 8,
        opacity: 1,
      });
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.rot += p.vr;
        if (p.y > canvas.height * 0.7) p.opacity -= 0.02;
        if (p.opacity <= 0) continue;
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (alive) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

// ─── Animated Checkmark ──────────────────────────────────────────────
function AnimatedCheck() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <div className="relative w-24 h-24 mx-auto mb-6">
      <div
        className={`absolute inset-0 rounded-full bg-emerald-100 transition-all duration-1000 ${show ? "scale-[2] opacity-0" : "scale-100 opacity-60"}`}
      />
      <div
        className={`absolute inset-0 rounded-full bg-emerald-50 transition-all duration-1000 delay-300 ${show ? "scale-[1.6] opacity-0" : "scale-100 opacity-40"}`}
      />
      <div
        className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${show ? "bg-gradient-to-br from-emerald-400 to-emerald-500 scale-100 shadow-xl shadow-emerald-200" : "bg-emerald-100 scale-50"}`}
      >
        <svg
          className={`w-10 h-10 text-white transition-all duration-500 delay-500 ${show ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Fade-In Wrapper ─────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// ─── Content ─────────────────────────────────────────────────────────
function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name") || "there";
  const fullName = searchParams.get("fullName") || name;
  const phone = searchParams.get("phone") || "";
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [passUrl, setPassUrl] = useState("");

  useEffect(() => {
    const id = `AS-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const params = new URLSearchParams({ name: fullName, phone, id });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPassUrl(`/pass?${params.toString()}`);
    setMounted(true);
  }, [fullName, phone]);

  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Abroad+Scholars+Free+Study+Fair&dates=20260516T043000Z/20260516T113000Z&location=Vivanta+Coimbatore,+Avinashi+Road&details=Free+Abroad+Education+Camp.+Meet+university+reps,+get+spot+admissions,+visa+help+and+more.";

  const shareText = encodeURIComponent(
    "I just registered for the FREE Study Abroad Education Fair by Abroad Scholars! 🎓🌍\n\n📅 May 16, 2026\n📍 Vivanta, Coimbatore\n⏰ 10 AM – 5 PM\n\nRegister free → abroadscholars.in/camp",
  );

  const handleCopy = () => {
    navigator.clipboard?.writeText("https://abroadscholars.in/camp");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {mounted && <Confetti />}

      {/* Reuse your Navbar — Register button scrolls to home page */}
      <Navbar onRegisterClick={() => router.push("/")} />

      {/* Main */}
      <main className="max-w-lg mx-auto px-4 py-12 md:py-16">
        {/* White Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-6">
          <AnimatedCheck />

          {/* Heading */}
          <FadeIn delay={600}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-4 uppercase tracking-wide border border-emerald-100">
                <Icon icon={FaCheckCircle} className="text-[10px]" />
                Registration Confirmed
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                You&apos;re in, {name}! 🎉
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Your spot is reserved. We&apos;ll send your entry pass on
                WhatsApp shortly.
              </p>
            </div>
          </FadeIn>

          {/* Event Details */}
          <FadeIn delay={900}>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">
                Event Details
              </p>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={FaCalendarAlt}
                      className="text-blue-500 text-xs"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Saturday, May 16, 2026
                    </p>
                    <p className="text-gray-400 text-xs">Mark your calendar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon={FaClock} className="text-amber-500 text-xs" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      10:00 AM – 5:00 PM
                    </p>
                    <p className="text-gray-400 text-xs">Walk in anytime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={FaMapMarkerAlt}
                      className="text-rose-500 text-xs"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      Vivanta, Coimbatore
                    </p>
                    <p className="text-gray-400 text-xs">Avinashi Road</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* What to Bring */}
          <FadeIn delay={1100}>
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-6">
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.15em] mb-3">
                What to Bring
              </p>
              <div className="space-y-2">
                {[
                  {
                    icon: FaFileAlt,
                    text: "Academic transcripts / marksheets",
                  },
                  { icon: FaGlobeAmericas, text: "Passport (if available)" },
                  {
                    icon: FaCheckCircle,
                    text: "Offer letters (if you have any)",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Icon icon={item.icon} className="text-blue-400 text-xs" />
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 pt-0.5">
                  <span className="text-sm">👨‍👩‍👧</span>
                  <p className="text-gray-600 text-sm">Parents are welcome!</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={1300}>
            <div className="space-y-3">
              {/* View Entry Pass — Primary CTA */}
              <Link
                href={passUrl || "#"}
                className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20"
              >
                <Icon icon={FaTicketAlt} className="text-sm" />
                View Your Entry Pass
                <Icon
                  icon={FaArrowRight}
                  className="text-xs transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              {/* Add to Calendar */}
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm"
              >
                <Icon icon={FaCalendarAlt} className="text-sm" />
                Add to Google Calendar
              </a>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Icon icon={FaWhatsapp} className="text-base" />
                  Share
                </a>
                <button
                  onClick={handleCopy}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm border border-gray-200"
                >
                  <Icon icon={FaShareAlt} className="text-xs" />
                  {copied ? "Copied! ✓" : "Copy Link"}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Below Card */}
        <FadeIn delay={1500}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-4 shadow-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-gray-500 text-xs font-medium">
                WhatsApp confirmation arriving shortly
              </p>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Questions? Reach us at{" "}
              <a
                href="https://wa.me/919876543210"
                className="text-blue-600 hover:text-blue-500 underline underline-offset-2"
              >
                WhatsApp
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@abroadscholars.in"
                className="text-blue-600 hover:text-blue-500 underline underline-offset-2"
              >
                info@abroadscholars.in
              </a>
            </p>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
