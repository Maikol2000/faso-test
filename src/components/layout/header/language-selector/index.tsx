"use client";
import React, { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "vi",
    name: "Tiếng Việt",
    flag: "🇻🇳",
  });
  const dropdownRef = useRef<any>(null);

  const languages = [
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full py-1 px-3 transition-colors"
        onClick={toggleDropdown}
      >
        <span className="font-medium">
          {selectedLanguage.code.toUpperCase()}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-40 bg-white rounded-lg shadow-lg py-1 z-10 right-0">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`flex items-center space-x-3 px-4 py-2 text-sm w-full text-left hover:bg-gray-100 transition-colors ${
                selectedLanguage.code === language.code
                  ? "bg-gray-50 font-medium"
                  : ""
              }`}
              onClick={() => selectLanguage(language)}
            >
              <span>{language.name}</span>
              <span>{language.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
