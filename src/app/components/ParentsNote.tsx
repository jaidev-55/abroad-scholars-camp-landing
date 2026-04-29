import { FaArrowRight } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { Icon } from "./Icon";

const ParentsNote = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  return (
    <section className="py-12 sm:py-16 bg-amber-50/50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-amber-100 p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
          {/* Warm accent corners */}

          <div className="relative">
            <div className="flex justify-center mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Icon icon={HiUserGroup} className="text-xl sm:text-2xl" />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              A Note for Parents
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
              We understand your concerns about sending your child abroad. This
              camp is designed to give you complete clarity on safety, expenses,
              visa, loans, and the entire process. Come along with your child —
              all your doubts will be addressed.
            </p>

            <button
              onClick={onRegisterClick}
              className="group hidden  w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3.5 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20 md:inline-flex items-center justify-center gap-2 text-sm"
            >
              Register Together — It&apos;s Free
              <Icon
                icon={FaArrowRight}
                className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsNote;
