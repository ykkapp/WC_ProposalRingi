import React, { useState, useEffect, useMemo } from "react";
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

const CopyIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Placeholder: React.FC = () => (
  <div className="flex-grow bg-slate-100 p-3 rounded-lg text-slate-800 whitespace-pre-wrap break-all font-sans text-base">
    -
  </div>
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

const CopyableField: React.FC<{
  label: string;
  text: string | undefined | null;
}> = ({ label, text }) => {
  const [copied, setCopied] = useState(false);

  const isPlaceholder = !text || text === "-(記載欄無有)";
  const displayText = isPlaceholder ? "-" : text;
  const canCopy = !isPlaceholder;

  const handleCopy = () => {
    if (!canCopy || !text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      <div className="flex items-start sm:items-center space-x-2">
        <pre className="flex-grow bg-slate-100 p-3 rounded-lg text-slate-800 whitespace-pre-wrap break-all font-sans text-base">
          {displayText}
        </pre>
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="flex-shrink-0 p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-indigo-500"
          disabled={!canCopy || copied}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-600" />
          ) : (
            <CopyIcon className="h-5 w-5 text-slate-600" />
          )}
        </button>
      </div>
    </div>
  );
};

interface FaqItemProps {
  item: FaqItemType;
  level?: number;
  searchTerm: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, level = 0, searchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const hasDetails = !!item.details;

  const displayLink = useMemo(() => {
    if (!item.link) return "";
    const match = item.link.match(/^(【.*?】)/);
    return match ? match[1] : item.link;
  }, [item.link]);

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
// 安全な配列に正規化
const attachments = item.details?.attachments ?? [];
const cps = item.details?.concurrentProposals ?? [];
const hasAttachments = attachments.length > 0;
const hasConcurrent = cps.length > 0;

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
        {item.link &&
          (hasDetails ? (
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              aria-expanded={isDetailsOpen}
              className="flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150"
            >
              <span className="truncate">
                {getHighlightedText(item.link, searchTerm)}
              </span>
              <ChevronIcon isOpen={isDetailsOpen} />
            </button>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150"
            >
              <span className="truncate">
                {getHighlightedText(item.link, searchTerm)}
              </span>
              <LinkIcon />
            </a>
          ))}
      </div>
      {hasDetails && (
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isDetailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden bg-slate-50">
            <div
              className="py-5 px-6 border-t border-slate-200/80"
              style={{
                paddingLeft: `${1.5 + level * 2}rem`,
                paddingRight: "1.5rem",
              }}
            >
              <div className="space-y-6 max-w-full">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5">
                    ジョブカンリンク
                  </label>
                  {item.link ? (
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <a
                        href={item.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"                        
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group text-base"
                        aria-label={`稟議リンク: ${item.link}`}
                      >
                        <span className="group-hover:underline">
                          {displayLink}
                        </span>
                        <LinkIcon />
                      </a>
                    </div>
                  ) : (
                    <Placeholder />
                  )}
                </div>

                <CopyableField
                  label="該当案件"
                  text={item.details?.applicableProject}
                />
                <CopyableField label="件名" text={item.details?.subject} />

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5">
                    添付書類
                  </label>
                  {hasAttachments ? (
                    <div className="bg-slate-100 p-3 rounded-lg space-y-2 text-base">
                      {attachments.map((att, idx) => (
                        <div key={idx}>
                          <span className={att.required ? "text-red-600 font-bold" : "text-slate-900"}>
                            {att.name}
                          </span>
                          <span className={`text-xs ml-1 ${att.required ? "text-red-600 font-bold" : "text-slate-900"}`}>
                            ({att.required ? "必須" : "任意"})
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Placeholder />
                  )}
                </div>
                {/* ここから concurrentProposals セクションを非表示 */}
                {false && (
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      混同しやすい稟議
                    </label>
                    {hasConcurrent ? (
                      <div className="bg-slate-100 p-3 rounded-lg space-y-2">
                        {cps.map((prop, idx) => (
                          <div key={idx} className="text-sm">
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors"
                              aria-label={`混同稟議リンク: ${prop.link}`}
                            >
                              {prop.title ?? prop.link}
                              <LinkIcon className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Placeholder />
                    )}
                  </div>
                )}
                {/* ここまで非表示 */}
                <CopyableField
                  label="申請内容"
                  text={item.details?.applicationContent}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
