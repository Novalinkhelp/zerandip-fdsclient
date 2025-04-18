import { useState, useRef, useEffect } from "react";
import { Upload, ImageIcon, X } from "lucide-react";

const ImageUpload = ({ name, value, onChange, disabled, accept }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(value || null);

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create synthetic event to match the existing onChange handlers
    const syntheticEvent = {
      target: {
        name,
        value: file,
        type: "file",
      },
    };

    onChange(syntheticEvent);

    // Create preview URL
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    if (!disabled) {
      fileInputRef.current.click();
    }
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setPreview(null);

    // Create synthetic event to clear the value
    const syntheticEvent = {
      target: {
        name,
        value: null,
        type: "file",
      },
    };
    onChange(syntheticEvent);
  };

  return (
    <div className="flex flex-col items-start">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
      />

      <div
        onClick={triggerFileInput}
        className={`w-full border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "hover:bg-gray-50"
        }`}
        style={{ minHeight: "120px" }}
      >
        {preview ? (
          <div className="relative w-full flex justify-center">
            <img
              src={
                typeof preview === "string"
                  ? preview
                  : URL.createObjectURL(preview)
              }
              alt="Preview"
              className="max-h-40 object-contain"
            />
            {!disabled && (
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 transform translate-x-1/2 -translate-y-1/2 hover:bg-red-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-2 text-blue-500">
              {disabled ? (
                <ImageIcon size={24} className="text-gray-400" />
              ) : (
                <Upload size={24} />
              )}
            </div>
            <p className="text-sm text-gray-600">
              {disabled ? "No image uploaded" : "Click to upload an image"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {!disabled && "JPG, PNG, GIF up to 10MB"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
