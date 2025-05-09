import { X } from "lucide-react";

const BaseModal = ({
  isOpen,
  title,
  children,
  onClose,
  width = "max-w-3xl",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div
        className={`bg-white rounded-xl shadow-md w-full ${width} animate-modalSlide`}
      >
        <div className="flex justify-between items-center px-7 py-5 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-7 py-6">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
