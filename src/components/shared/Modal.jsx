import { useState, useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({
  title,
  isOpen,
  onClose,
  mode = "create",
  initialData = {},
  tabs = [],
  onSubmit,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
      setActiveTab(0);
      setErrors({});
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateTab = (tabIndex) => {
    const tab = tabs[tabIndex];
    const newErrors = {};

    tab.fields.forEach((fieldGroup) => {
      fieldGroup.forEach((field) => {
        if (field.required && !formData[field.name]) {
          newErrors[field.name] = `${field.label} is required`;
        }
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (mode === "view") setActiveTab(activeTab + 1);
    if (validateTab(activeTab)) {
      setErrors({});
      setTimeout(() => {
        setActiveTab(activeTab + 1);
      }, 0);
    }
  };

  const handlePrevious = () => {
    setActiveTab(activeTab - 1);
    setErrors({}); // Clear errors when going back
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateTab(activeTab)) {
      onSubmit(formData);
      onClose();
    }
  };

  const handleTabClick = (index) => {
    if (mode === "view") {
      setActiveTab(index);
      return;
    }

    if (validateTab(activeTab)) {
      setActiveTab(index);
      setErrors({});
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/50 to-gray-900/60 backdrop-blur-sm animate-fadeIn"></div>
        </div>

        <div className="inline-block transform overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm text-left shadow-2xl transition-all duration-300 ease-out sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle animate-modalSlide border border-gray-100/20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 py-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 tracking-tight bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 cursor-pointer hover:rotate-90 transform"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {tabs.length > 1 && (
              <div className="mt-6">
                <nav className="flex space-x-8">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={`
                     relative px-1 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer
                     ${
                       activeTab === index
                         ? "text-blue-600"
                         : "text-gray-600 hover:text-gray-900"
                     }
                     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transform
                     ${
                       activeTab === index
                         ? "after:bg-gradient-to-r after:from-blue-500 after:to-blue-600 after:scale-x-100"
                         : "after:bg-transparent after:scale-x-0"
                     }
                     after:transition-transform after:duration-200 hover:after:scale-x-75
                   `}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 space-y-8">
              {tabs[activeTab]?.fields.map((fieldGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`grid grid-cols-1 gap-8 md:grid-cols-${fieldGroup.length} transform transition-all duration-300 animate-slideIn`}
                >
                  {fieldGroup.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-900"
                      >
                        {field.label}
                        {field.required && (
                          <span className="ml-1 text-red-500">*</span>
                        )}
                      </label>
                      {mode === "view" ? (
                        <div className="mt-1 rounded-lg bg-gradient-to-r from-gray-50/80 to-white/90 p-3.5 text-sm text-gray-700 border border-gray-200/80 shadow-inner min-h-[42px] flex items-center">
                          <span
                            className={`${
                              !formData[field.name] && "text-gray-400 italic"
                            }`}
                          >
                            {formData[field.name] || "No data"}
                          </span>
                        </div>
                      ) : (
                        <>
                          <input
                            type={field.type || "text"}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            className={`
    block w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200
    bg-white/90 backdrop-blur-sm
    ${
      errors[field.name]
        ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:ring focus:ring-red-400/20 shadow-sm shadow-red-400/5"
        : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 hover:shadow-sm"
    }
    focus:outline-none
    disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200/70 disabled:cursor-not-allowed
    placeholder:text-gray-400/70 placeholder:font-light
  `}
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                          />
                          {errors[field.name] && (
                            <p className="text-sm text-red-500 mt-1.5">
                              {errors[field.name]}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/80 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-200 hover:shadow-sm active:bg-gray-200"
                >
                  Cancel
                </button>

                <div className="flex space-x-3">
                  {activeTab > 0 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow active:from-gray-800 active:to-gray-900 cursor-pointer"
                    >
                      Previous
                    </button>
                  )}

                  {activeTab < tabs.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow active:from-blue-800 active:to-blue-900 cursor-pointer"
                    >
                      Next
                    </button>
                  ) : mode !== "view" ? (
                    <button
                      type="submit"
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow active:from-blue-800 active:to-blue-900 cursor-pointer"
                    >
                      {mode === "create" ? "Create" : "Update"}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
