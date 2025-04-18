import { AlertCircle, Lock, Mail } from "lucide-react";
import Autocomplete from "./Autocomplete";
import ImageUpload from "./ImageUpload";

const FormField = ({
  field,
  value,
  onChange,
  errors,
  disabled = false,
  onAutocompleteSelect,
}) => {
  const {
    type,
    label,
    name,
    defaultValue,
    options,
    required,
    className = "",
    accept,
    placeholder,
  } = field;

  const inputClasses =
    "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all";
  const selectClasses =
    "w-full p-2.5 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all";

  const renderInput = () => {
    switch (type) {
      case "image":
        return (
          <ImageUpload
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            accept={accept || "image/*"}
          />
        );
      case "autocomplete":
        return (
          <Autocomplete
            value={value?.name || ""}
            name={name}
            fetchSuggestions={field.fetchSuggestions}
            onSelect={(item) => onAutocompleteSelect(name, item)}
            disabled={disabled}
            placeholder={placeholder || `Enter ${label}`}
          />
        );
      case "select":
        return (
          <select
            name={name}
            value={value || defaultValue || ""}
            onChange={onChange}
            disabled={disabled}
            className={selectClasses}
          >
            <option value="">Select {label}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              name={name}
              checked={value || false}
              onChange={onChange}
              disabled={disabled}
              className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500/30"
            />
            <span className="ml-2 text-gray-700">{label}</span>
          </div>
        );
      case "textarea":
        return (
          <textarea
            name={name}
            value={value || defaultValue || ""}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            rows="3"
            placeholder={placeholder || `Enter ${label}`}
          />
        );
      default:
        return (
          <input
            type={type}
            name={name}
            value={value || defaultValue || ""}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            placeholder={placeholder || `Enter ${label}`}
          />
        );
    }
  };

  return (
    <div className={`${className} mb-4`}>
      {type !== "checkbox" && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        {renderInput()}
        {type === "email" && (
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        )}
        {type === "password" && (
          <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        )}
      </div>
      {errors && errors[name] && (
        <p className="text-red-500 text-sm mt-1.5 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{errors[name]}</span>
        </p>
      )}
    </div>
  );
};

export default FormField;
