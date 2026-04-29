import { HiSparkles } from "react-icons/hi2";
import { Icon } from "./Icon";

const AnnouncementBar = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-600 via-blue-600 to-indigo-600 text-white text-center py-2 px-3 sm:py-2.5 sm:px-4 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />

      <p className="relative text-[10px] sm:text-xs md:text-sm font-medium tracking-wide leading-tight">
        <span className="hidden sm:inline">
          <Icon
            icon={HiSparkles}
            className="text-blue-200 text-[10px] inline-flex align-middle mr-1.5"
          />
        </span>
        Free Event · Limited Seats ·{" "}
        <span className="underline underline-offset-2 decoration-blue-300/50">
          Pre-Registration Required
        </span>
        <span className="hidden sm:inline">
          <Icon
            icon={HiSparkles}
            className="text-blue-200 text-[10px] inline-flex align-middle ml-1.5"
          />
        </span>
      </p>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
