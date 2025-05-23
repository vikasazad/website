import { X } from "lucide-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full mx-4 relative transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-serif text-[#C1A265] mb-3 md:mb-4">
            Thanks for sharing your details!
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            We&apos;re reviewing your business and crafting a personalized
            strategy for your needs.
          </p>
          <p className="text-sm md:text-base text-gray-600">
            You&apos;ll hear from us within 24 hours with clear insights to help
            you save time, reduce costs, and elevate guest experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
