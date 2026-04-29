"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919500117792";
  const message = encodeURIComponent(
    "Hi! I want to attend the FREE Study Abroad Education Fair in Coimbatore on May 16. Can you help me register?",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-9999
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white font-semibold
        px-4 py-3 rounded-full
        shadow-lg
        transition-all
        hover:scale-105
      "
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
