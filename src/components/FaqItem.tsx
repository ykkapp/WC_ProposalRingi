import React, { useState, useEffect } from "react";
import type { FaqItem as FaqItemType } from "../types";

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ml-1.5 flex-shrink-0 text-slate-500 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "rotate-180 text-indigo-500" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const LinkIcon: React.FC<{ className?: string }> = ({
  className = "h-4 w-4 ml-1.5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const getHighlightedText = (text: string, highlight: string) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark
            key={i}
            className="bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

interface FaqItemProps {
  item: FaqItemType;
  level?: number;
  searchTerm: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, level = 0, searchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    if (searchTerm.trim() && hasChildren) {
      setIsOpen(true);
    } else if (!searchTerm.trim()) {
      setIsOpen(false);
    }
  }, [searchTerm, hasChildren]);

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const levelStyles = {
    paddingLeft: `${1.5 + level * 2}rem`, // 1.5rem, 3.5rem, 5.5rem...
    bg: ["bg-white", "bg-slate-50", "bg-gray-100"][level] || "bg-gray-100",
    hoverBg:
      ["hover:bg-slate-50", "hover:bg-slate-100", "hover:bg-gray-200"][level] ||
      "hover:bg-gray-200",
    textSize: ["text-lg", "text-base", "text-sm"][level] || "text-sm",
    font: ["font-medium", "font-normal", "font-normal"][level] || "font-normal",
  };

  if (hasChildren) {
    return (
      <div className="border-b border-slate-200 last:border-b-0">
        <button
          onClick={handleToggle}
          className={`group w-full flex justify-between items-center text-left py-4 pr-6 ${levelStyles.bg} ${levelStyles.hoverBg} transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
          style={{ paddingLeft: levelStyles.paddingLeft }}
          aria-expanded={isOpen}
        >
          <span
            className={`${levelStyles.textSize} ${levelStyles.font} text-slate-800 group-hover:text-indigo-600`}
          >
            {getHighlightedText(item.title, searchTerm)}
          </span>
          <ChevronIcon isOpen={isOpen} />
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {item.children?.map((child, index) => (
              <FaqItem
                key={index}
                item={child}
                level={level + 1}
                searchTerm={searchTerm}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Leaf Node (Link)
  return (
    <div
      className={`border-b border-slate-200 last:border-b-0 ${levelStyles.bg}`}
    >
      <div
        className="flex justify-between items-center py-3 pr-6"
        style={{ paddingLeft: levelStyles.paddingLeft }}
      >
        <span className={`${levelStyles.textSize} text-slate-700`}>
          {getHighlightedText(item.title, searchTerm)}
        </span>
        {item.link && (
          <a
            href={item.url ?? "#"}
            onClick={!item.url ? (e) => e.preventDefault() : undefined}
            target={item.url ? "_blank" : undefined}
            rel={item.url ? "noopener noreferrer" : undefined}
            className="flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150"
          >
            <span className="truncate">
              {getHighlightedText(item.link, searchTerm)}
            </span>
            <LinkIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
