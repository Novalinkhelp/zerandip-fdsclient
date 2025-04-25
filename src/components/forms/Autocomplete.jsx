import React, { useState, useEffect, useRef } from "react";

const Autocomplete = ({
  value,
  name,
  onSelect,
  fetchSuggestions,
  debounceTime = 300,
  disabled,
  className,
  placeholder,
}) => {
  // Initialize with empty string, not with the value prop
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef(null);
  const initializedRef = useRef(false);

  // Set input value when the value prop changes, but only after initial render
  useEffect(() => {
    if (initializedRef.current) {
      setInputValue(value || "");
    } else {
      initializedRef.current = true;
      if (value !== undefined) {
        setInputValue(value);
      }
    }
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (isTyping && inputValue.length > 1) {
        setIsLoading(true);
        fetchSuggestions(inputValue).then((results) => {
          setSuggestions(results);
          setIsLoading(false);
        });
      }
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [inputValue, fetchSuggestions, debounceTime, isTyping]);

  const handleSelect = (item) => {
    setIsTyping(false);
    setInputValue(item[name] || "");
    onSelect(item);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[selectedIndex]);
    }
  };

  const handleInputChange = (e) => {
    setIsTyping(true);
    setInputValue(e.target.value);
  };

  return (
    <div className="relative" ref={containerRef}>
      <input
        type="text"
        name={name}
        value={inputValue || ""}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`${className}  ${disabled ? "bg-gray-100" : ""}`}
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder || `Enter ${name}`}
      />

      {isLoading && (
        <div className="absolute right-2 top-8">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
        </div>
      )}

      {suggestions.length > 0 && !disabled && (
        <ul className="absolute z-10 w-full bg-white border rounded shadow-lg mt-1 max-h-60 overflow-auto">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-2 hover:bg-gray-100 cursor-pointer ${
                index === selectedIndex ? "bg-gray-100" : ""
              }`}
            >
              {item[name]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
