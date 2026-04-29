import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Icon } from "./Icon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Abroad Scholars"
                width={100}
                height={50}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Helping students achieve their dream of studying abroad with
              expert guidance and support.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest text-gray-500">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shrink-0">
                  <Icon icon={FaPhoneAlt} className="text-xs" />
                </span>
                +91 98765 43210
              </a>
              <a
                href="mailto:info@abroadscholars.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shrink-0">
                  <Icon icon={FaEnvelope} className="text-xs" />
                </span>
                info@abroadscholars.com
              </a>
              <a
                href="https://wa.me/919876543210"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all shrink-0">
                  <Icon icon={FaWhatsapp} className="text-xs" />
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-widest text-gray-500">
              Follow Us
            </h3>
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="Instagram"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-500 hover:border-transparent transition-all duration-200 text-gray-400 hover:text-white"
              >
                <Icon icon={FaInstagram} className="text-base" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-200 text-gray-400 hover:text-white"
              >
                <Icon icon={FaWhatsapp} className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center gap-3 text-gray-500 text-xs">
          <span>© 2026 Abroad Scholars. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
