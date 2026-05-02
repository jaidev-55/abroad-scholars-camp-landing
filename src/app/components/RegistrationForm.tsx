"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";
import { Icon } from "./Icon";
import { FiChevronDown, FiClock, FiGlobe } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RegistrationForm = ({ compact = false }: { compact?: boolean }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    country: "",
    slot: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    return newErrors;
  };

  const handleBlur = (field: string) => {
    setFocusedField(null);
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate();
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] || "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    setSubmitError("");

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/webhooks/landing-page`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            token: "abroad_scholars_456",
            fullName: formData.name,
            phone: formData.phone,
            email: formData.email,
            country: formData.country,
            notes: `Study Fair Registration — May 16, Coimbatore — Slot: ${formData.slot || "No preference"}`,
            category: "ADMISSION",
          }),
        },
      );

      clearTimeout(timeout);

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        const msg =
          errData?.message ?? "Registration failed. Please try again.";
        const isDuplicate =
          typeof msg === "string"
            ? msg.toLowerCase().includes("already exists")
            : Array.isArray(msg) &&
              msg.some((m: string) =>
                m.toLowerCase().includes("already exists"),
              );
        setSubmitError(
          isDuplicate
            ? "This phone number is already registered. Please use a different number."
            : Array.isArray(msg)
              ? msg.join(", ")
              : msg,
        );
        return;
      }

      // Log to Google Sheet (fire and forget)
      fetch(
        "https://script.google.com/macros/s/AKfycbwPFW-AlThNAlZk6TbavKF_fT-nksgI0TZMEOilUqv3O2XnFtxxG3yjqv7aAnwyVlDk/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.name,
            phone: formData.phone,
            email: formData.email,
            country: formData.country || "",
            slot: formData.slot || "No preference",
          }),
        },
      ).catch(() => {});

      const firstName = formData.name.split(" ")[0];
      const params = new URLSearchParams({
        name: firstName,
        fullName: formData.name,
        phone: formData.phone,
      });
      router.push(`/thank-you?${params.toString()}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // Navigate anyway — registration likely succeeded
        // ✅ Also log to sheet on timeout (registration likely went through)
        fetch("https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.name,
            phone: formData.phone,
            email: formData.email,
            country: formData.country || "",
            slot: formData.slot || "No preference",
          }),
        }).catch(() => {});

        const firstName = formData.name.split(" ")[0];
        const params = new URLSearchParams({
          name: firstName,
          fullName: formData.name,
          phone: formData.phone,
        });
        router.push(`/thank-you?${params.toString()}`);
      } else {
        setSubmitError(
          "Network error. Please check your connection and try again.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldBorder = (field: string) => {
    if (touched[field] && errors[field]) return "border-red-400 bg-red-50/30";
    if (focusedField === field) return "border-blue-400 bg-white";
    return "border-gray-200 hover:border-gray-300 bg-gray-50";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2.5">
          <span className="text-red-500 mt-0.5 text-sm">⚠</span>
          <p className="text-red-600 text-sm font-medium">{submitError}</p>
        </div>
      )}
      {/* Name */}
      <div>
        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
          Full Name
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
            <Icon icon={FaUser} />
          </span>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (touched.name) {
                setErrors((prev) => ({
                  ...prev,
                  name: e.target.value.trim() ? "" : "Name is required",
                }));
              }
            }}
            onFocus={() => setFocusedField("name")}
            onBlur={() => handleBlur("name")}
            className={`w-full pl-11 pr-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm ${getFieldBorder("name")}`}
          />
        </div>
        {touched.name && errors.name && (
          <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
            <span className="text-[10px]">→</span> {errors.name}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
          WhatsApp Number
        </label>
        <div className="relative">
          <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-sm" />
          <input
            type="tel"
            placeholder="Enter your WhatsApp number"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (touched.phone) {
                const val = e.target.value.replace(/\s/g, "");
                setErrors((prev) => ({
                  ...prev,
                  phone: !val
                    ? "WhatsApp number is required"
                    : !/^\+?\d{10,15}$/.test(val)
                      ? "Enter a valid phone number"
                      : "",
                }));
              }
            }}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => handleBlur("phone")}
            className={`w-full pl-11 pr-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm ${getFieldBorder("phone")}`}
          />
        </div>
        {touched.phone && errors.phone && (
          <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
            <span className="text-[10px]">→</span> {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
            <Icon icon={FaEnvelope} />
          </span>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (touched.email) {
                const val = e.target.value;
                setErrors((prev) => ({
                  ...prev,
                  email: !val.trim()
                    ? "Email is required"
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
                      ? "Enter a valid email address"
                      : "",
                }));
              }
            }}
            onFocus={() => setFocusedField("email")}
            onBlur={() => handleBlur("email")}
            className={`w-full pl-11 pr-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm ${getFieldBorder("email")}`}
          />
        </div>
        {touched.email && errors.email && (
          <p className="text-red-500 text-xs font-medium mt-1.5 flex items-center gap-1">
            <span className="text-[10px]">→</span> {errors.email}
          </p>
        )}
      </div>

      {!compact && (
        <>
          {/* Time Slot */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
              Select Time Slot
            </label>
            <div className="relative">
              <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                name="slot"
                value={formData.slot}
                onChange={(e) =>
                  setFormData({ ...formData, slot: e.target.value })
                }
                className="w-full appearance-none bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl pl-10 pr-10 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all"
              >
                <option value="">Choose your slot</option>
                <option value="10:00 AM – 11:00 AM">10:00 AM – 11:00 AM</option>
                <option value="11:00 AM – 12:00 PM">11:00 AM – 12:00 PM</option>
                <option value="12:00 PM – 1:00 PM">12:00 PM – 1:00 PM</option>
                <option value="1:00 PM – 2:00 PM">1:00 PM – 2:00 PM</option>
                <option value="2:00 PM – 3:00 PM">2:00 PM – 3:00 PM</option>
                <option value="3:00 PM – 4:00 PM">3:00 PM – 4:00 PM</option>
                <option value="4:00 PM – 5:00 PM">4:00 PM – 5:00 PM</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
              Preferred Country
            </label>
            <div className="relative">
              <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <select
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                onFocus={() => setFocusedField("country")}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-11 pr-10 py-3 rounded-xl border text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                  formData.country ? "text-gray-900" : "text-gray-400"
                } ${getFieldBorder("country")}`}
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="usa">🇺🇸 United States</option>
                <option value="canada">🇨🇦 Canada</option>
                <option value="australia">🇦🇺 Australia</option>
                <option value="germany">🇩🇪 Germany</option>
                <option value="ireland">🇮🇪 Ireland</option>
                <option value="newzealand">🇳🇿 New Zealand</option>
                <option value="other">🌍 Not Sure / Other</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                <Icon icon={FaChevronDown} />
              </span>
            </div>
          </div>
        </>
      )}

      {/* Error message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
          <p className="text-red-600 text-sm font-medium">{submitError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="group w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2.5 text-sm tracking-wide mt-2"
      >
        {isLoading ? (
          <>
            <AiOutlineLoading3Quarters className="animate-spin text-sm" />
            Registering...
          </>
        ) : (
          <>
            Register Now It&apos;s Free
            <Icon
              icon={FaArrowRight}
              className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;
