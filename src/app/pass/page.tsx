"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDownload,
  FaCheckCircle,
  FaWhatsapp,
  FaUserCheck,
} from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import type { IconType } from "react-icons";

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
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.5s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// ─── Pass Content ────────────────────────────────────────────────────
function PassContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Guest";
  const phone = searchParams.get("phone") || "";
  const [passId, setPassId] = useState(searchParams.get("id") || "");

  useEffect(() => {
    if (!passId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPassId(`AS-${Date.now().toString(36).toUpperCase().slice(-6)}`);
    }
  }, [passId]);
  const qrUrl = searchParams.get("qr") || "";

  const ticketRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const maskedPhone = phone
    ? phone.slice(0, 3) + "••••" + phone.slice(-3)
    : "—";

  // ─── Download ticket as PNG ────────────────────────────────────
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const canvas = await (html2canvas as any)(ticketRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
        allowTaint: false,
        onclone: (clonedDoc: Document) => {
          // Replace logo with text to avoid CORS failure
          clonedDoc.querySelectorAll("img").forEach((img) => {
            if ((img as HTMLImageElement).src.includes("logo")) {
              const span = clonedDoc.createElement("span");
              span.textContent = "Abroad Scholars";
              span.style.cssText =
                "color:white;font-weight:bold;font-size:14px;";
              img.parentNode?.replaceChild(span, img);
            }
          });
        },
      });
      const link = document.createElement("a");
      link.download = `AbroadScholars-Pass-${passId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Download failed. Please take a screenshot instead.");
    } finally {
      setDownloading(false);
    }
  }, [passId]);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-50">
      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Abroad Scholars"
              width={120}
              height={50}
              className="h-10 w-auto object-cover"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors"
          >
            ← Home
          </Link>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-4 py-10 md:py-14">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-3 uppercase tracking-wide border border-emerald-100">
              <Icon icon={FaUserCheck} className="text-[10px]" />
              Entry Pass
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Show this at the venue
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Download or screenshot your pass
            </p>
          </div>
        </FadeIn>

        {/* ─── THE TICKET (captured for download) ─────────────────── */}
        <FadeIn delay={300}>
          <div ref={ticketRef} className="relative" style={{ padding: "2px" }}>
            {/* Top Section — Event Info */}
            <div className="bg-white rounded-t-2xl border border-gray-200 border-b-0 overflow-hidden">
              {/* Blue header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo.webp"
                      alt=""
                      className="h-6 w-auto brightness-0 invert"
                    />
                    <span className="text-[10px] font-mono text-blue-200 bg-white/10 px-2 py-0.5 rounded">
                      {passId}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold leading-tight">
                    Free Study Abroad
                    <br />
                    Education Fair
                  </h2>
                </div>
              </div>

              {/* Event Details */}
              <div className="px-6 py-5 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={FaCalendarAlt}
                      className="text-blue-500 text-xs"
                    />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">
                    Saturday, May 16, 2026
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon={FaClock} className="text-amber-500 text-xs" />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">
                    10:00 AM – 5:00 PM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
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

            {/* ─── Tear Line ──────────────────────────────────────── */}
            <div className="relative h-6 flex items-center">
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-b from-gray-100 to-gray-50 rounded-full border border-gray-200 z-10" />
              <div className="w-full border-t-2 border-dashed border-gray-200 mx-3" />
              <div className="absolute -right-3 w-6 h-6 bg-gradient-to-b from-gray-100 to-gray-50 rounded-full border border-gray-200 z-10" />
              <div className="absolute inset-0 bg-white -z-0 border-x border-gray-200" />
            </div>

            {/* Bottom Section — Attendee + QR */}
            <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                {/* Attendee Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1">
                    Attendee
                  </p>
                  <p className="text-gray-900 font-bold text-lg truncate">
                    {name}
                  </p>
                  <p className="text-gray-400 text-sm font-mono mt-0.5">
                    {maskedPhone}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Icon
                        icon={FaCheckCircle}
                        className="text-emerald-500 text-[8px]"
                      />
                    </div>
                    <span className="text-emerald-600 text-xs font-semibold">
                      Confirmed
                    </span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-lg px-2.5 py-1">
                    <span className="text-yellow-600 text-xs font-bold">
                      FREE ENTRY
                    </span>
                  </div>
                </div>

                {/* QR Code — from image URL or placeholder */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-2 shadow-sm">
                    {qrUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={qrUrl}
                        alt="Entry QR Code"
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] rounded-lg object-contain"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="w-[100px] h-[100px] bg-gray-50 rounded-lg flex flex-col items-center justify-center text-center p-2">
                        <p className="text-gray-400 text-[10px] font-medium leading-tight">
                          QR will be sent
                          <br />
                          via WhatsApp
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="text-[9px] text-gray-400 font-mono mt-1.5 text-center">
                    {passId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ─── Action Buttons ─────────────────────────────────────── */}
        <FadeIn delay={600}>
          <div className="mt-6 space-y-3">
            {/* Download Pass */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-bold py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
            >
              {downloading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-sm" />
                  Generating...
                </>
              ) : (
                <>
                  <Icon icon={FaDownload} className="text-sm" />
                  Download Pass as Image
                </>
              )}
            </button>

            {/* Invite */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hey! I'm attending the FREE Study Abroad Education Fair by Abroad Scholars 🎓\n\n📅 May 16, 2026\n📍 Vivanta, Coimbatore\n⏰ 10 AM – 5 PM\n\nRegister free → abroadscholars.in/camp`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Icon icon={FaWhatsapp} className="text-base" />
              Invite a Friend
            </a>

            {/* Back */}
            <Link
              href="/"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm border border-gray-200"
            >
              ← Back to Home
            </Link>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={800}>
          <p className="text-center text-gray-400 text-xs mt-8 leading-relaxed">
            Present this pass at the registration desk.
            <br />
            For queries, contact us on{" "}
            <a
              href="https://wa.me/919876543210"
              className="text-blue-600 underline underline-offset-2"
            >
              WhatsApp
            </a>
            .
          </p>
        </FadeIn>
      </main>
    </div>
  );
}

export default function PassPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <PassContent />
    </Suspense>
  );
}
