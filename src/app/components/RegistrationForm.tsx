"use client";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";
import { Icon } from "./Icon";
import { FiChevronDown, FiClock, FiGlobe } from "react-icons/fi";

const RegistrationForm = ({ compact = false }: { compact?: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    // Validate single field on blur
    const newErrors = validate();
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field] || "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-4">
        <div className="relative w-16 h-16 mx-auto mb-5">
          <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-30" />
          <div className="relative w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center">
            <Icon icon={FaCheckCircle} className="text-emerald-500 text-2xl" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          You&apos;re Registered!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          We&apos;ll send you a confirmation on WhatsApp shortly.
        </p>
      </div>
    );
  }

  const getFieldBorder = (field: string) => {
    if (touched[field] && errors[field]) return "border-red-400 bg-red-50/30";
    if (focusedField === field) return "border-blue-400 bg-white";
    return "border-gray-200 hover:border-gray-300 bg-gray-50";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
            className={`w-full pl-11 pr-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm ${getFieldBorder(
              "phone",
            )}`}
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
          {/* Course */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2 tracking-wide">
              SELECT TIME SLOT
            </label>

            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-10 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Choose your slot</option>
                <option>10:00 AM – 11:00 AM</option>
                <option>11:00 AM – 12:00 PM</option>
                <option>12:00 PM – 1:00 PM</option>
                <option>1:00 PM – 2:00 PM</option>
                <option>2:00 PM – 3:00 PM</option>
                <option>3:00 PM – 4:00 PM</option>
                <option>4:00 PM – 5:00 PM</option>
              </select>

              {/* LEFT ICON */}
              <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

              {/* RIGHT ARROW */}
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

      {/* Submit */}
      <button
        type="submit"
        className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2.5 text-sm tracking-wide mt-2"
      >
        Register Now It&apos;s Free
        <Icon
          icon={FaArrowRight}
          className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
};

export default RegistrationForm;
