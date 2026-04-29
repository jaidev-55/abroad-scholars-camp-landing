import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "./Icon";

export function Navbar({ onRegisterClick }: { onRegisterClick: () => void }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4  py-3 flex items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="Home">
          <Image
            src="/images/logo.webp"
            alt="Abroad Scholars"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <button
          onClick={onRegisterClick}
          className="group hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 shadow-sm shadow-blue-600/10 hover:shadow-md hover:shadow-blue-600/15 active:scale-[0.97]"
        >
          Register Free
          <Icon
            icon={FaArrowRight}
            className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </nav>
  );
}
