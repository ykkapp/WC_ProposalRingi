import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
const ChevronIcon = ({ isOpen }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: `h-5 w-5 ml-1.5 flex-shrink-0 text-slate-500 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-indigo-500" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }));
const LinkIcon = ({ className = "h-4 w-4 ml-1.5", }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }));
const CopyIcon = ({ className = "h-5 w-5", }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }));
const CheckIcon = ({ className = "h-5 w-5", }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }));
const Placeholder = () => (_jsx("div", { className: "flex-grow bg-slate-100 p-3 rounded-lg text-slate-800 whitespace-pre-wrap break-all font-sans text-base", children: "-" }));
const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
        return _jsx(_Fragment, { children: text });
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (_jsx(_Fragment, { children: parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? (_jsx("mark", { className: "bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0", children: part }, i)) : (part)) }));
};
const CopyableField = ({ label, text }) => {
    const [copied, setCopied] = useState(false);
    const isPlaceholder = !text || text === "-(記載欄無有)";
    const displayText = isPlaceholder ? "-" : text;
    const canCopy = !isPlaceholder;
    const handleCopy = () => {
        if (!canCopy || !text)
            return;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-600 mb-1.5", children: label }), _jsxs("div", { className: "flex items-start sm:items-center space-x-2", children: [_jsx("pre", { className: "flex-grow bg-slate-100 p-3 rounded-lg text-slate-800 whitespace-pre-wrap break-all font-sans text-base", children: displayText }), _jsx("button", { onClick: handleCopy, "aria-label": `Copy ${label}`, className: "flex-shrink-0 p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-indigo-500", disabled: !canCopy || copied, children: copied ? (_jsx(CheckIcon, { className: "h-5 w-5 text-green-600" })) : (_jsx(CopyIcon, { className: "h-5 w-5 text-slate-600" })) })] })] }));
};
const FaqItem = ({ item, level = 0, searchTerm }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const hasDetails = !!item.details;
    const displayLink = useMemo(() => {
        if (!item.link)
            return "";
        const match = item.link.match(/^(【.*?】)/);
        return match ? match[1] : item.link;
    }, [item.link]);
    useEffect(() => {
        if (searchTerm.trim() && hasChildren) {
            setIsOpen(true);
        }
        else if (!searchTerm.trim()) {
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
        hoverBg: ["hover:bg-slate-50", "hover:bg-slate-100", "hover:bg-gray-200"][level] ||
            "hover:bg-gray-200",
        textSize: ["text-lg", "text-base", "text-sm"][level] || "text-sm",
        font: ["font-medium", "font-normal", "font-normal"][level] || "font-normal",
    };
    if (hasChildren) {
        return (_jsxs("div", { className: "border-b border-slate-200 last:border-b-0", children: [_jsxs("button", { onClick: handleToggle, className: `group w-full flex justify-between items-center text-left py-4 pr-6 ${levelStyles.bg} ${levelStyles.hoverBg} transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`, style: { paddingLeft: levelStyles.paddingLeft }, "aria-expanded": isOpen, children: [_jsx("span", { className: `${levelStyles.textSize} ${levelStyles.font} text-slate-800 group-hover:text-indigo-600`, children: getHighlightedText(item.title, searchTerm) }), _jsx(ChevronIcon, { isOpen: isOpen })] }), _jsx("div", { className: `grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`, children: _jsx("div", { className: "overflow-hidden", children: (_a = item.children) === null || _a === void 0 ? void 0 : _a.map((child, index) => (_jsx(FaqItem, { item: child, level: level + 1, searchTerm: searchTerm }, index))) }) })] }));
    }
    // 安全な配列に正規化
    const attachments = (_c = (_b = item.details) === null || _b === void 0 ? void 0 : _b.attachments) !== null && _c !== void 0 ? _c : [];
    const cps = (_e = (_d = item.details) === null || _d === void 0 ? void 0 : _d.concurrentProposals) !== null && _e !== void 0 ? _e : [];
    const hasAttachments = attachments.length > 0;
    const hasConcurrent = cps.length > 0;
    // Leaf Node (Link)
    return (_jsxs("div", { className: `border-b border-slate-200 last:border-b-0 ${levelStyles.bg}`, children: [_jsxs("div", { className: "flex justify-between items-center py-3 pr-6", style: { paddingLeft: levelStyles.paddingLeft }, children: [_jsx("span", { className: `${levelStyles.textSize} text-slate-700`, children: getHighlightedText(item.title, searchTerm) }), item.link &&
                        (hasDetails ? (_jsxs("button", { onClick: () => setIsDetailsOpen(!isDetailsOpen), "aria-expanded": isDetailsOpen, className: "flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150", children: [_jsx("span", { className: "truncate", children: getHighlightedText(item.link, searchTerm) }), _jsx(ChevronIcon, { isOpen: isDetailsOpen })] })) : (_jsxs("a", { href: "#", onClick: (e) => e.preventDefault(), className: "flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150", children: [_jsx("span", { className: "truncate", children: getHighlightedText(item.link, searchTerm) }), _jsx(LinkIcon, {})] })))] }), hasDetails && (_jsx("div", { className: `grid overflow-hidden transition-all duration-300 ease-in-out ${isDetailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`, children: _jsx("div", { className: "overflow-hidden bg-slate-50", children: _jsx("div", { className: "py-5 px-6 border-t border-slate-200/80", style: {
                            paddingLeft: `${1.5 + level * 2}rem`,
                            paddingRight: "1.5rem",
                        }, children: _jsxs("div", { className: "space-y-6 max-w-full", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-600 mb-1.5", children: "\u30B8\u30E7\u30D6\u30AB\u30F3\u30EA\u30F3\u30AF" }), item.link ? (_jsx("div", { className: "bg-slate-100 p-3 rounded-lg", children: _jsxs("a", { href: (_f = item.url) !== null && _f !== void 0 ? _f : "#", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group text-base", "aria-label": `稟議リンク: ${item.link}`, children: [_jsx("span", { className: "group-hover:underline", children: displayLink }), _jsx(LinkIcon, {})] }) })) : (_jsx(Placeholder, {}))] }), _jsx(CopyableField, { label: "\u8A72\u5F53\u6848\u4EF6", text: (_g = item.details) === null || _g === void 0 ? void 0 : _g.applicableProject }), _jsx(CopyableField, { label: "\u4EF6\u540D", text: (_h = item.details) === null || _h === void 0 ? void 0 : _h.subject }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-600 mb-1.5", children: "\u6DFB\u4ED8\u66F8\u985E" }), hasAttachments ? (_jsx("div", { className: "bg-slate-100 p-3 rounded-lg space-y-2 text-base", children: attachments.map((att, idx) => (_jsxs("div", { children: [_jsx("span", { className: att.required ? "text-red-600 font-bold" : "text-slate-900", children: att.name }), _jsxs("span", { className: `text-xs ml-1 ${att.required ? "text-red-600 font-bold" : "text-slate-900"}`, children: ["(", att.required ? "必須" : "任意", ")"] })] }, idx))) })) : (_jsx(Placeholder, {}))] }), false && (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-600 mb-1.5", children: "\u6DF7\u540C\u3057\u3084\u3059\u3044\u7A1F\u8B70" }), hasConcurrent ? (_jsx("div", { className: "bg-slate-100 p-3 rounded-lg space-y-2", children: cps.map((prop, idx) => {
                                                var _a;
                                                return (_jsx("div", { className: "text-sm", children: _jsxs("a", { href: "#", onClick: (e) => e.preventDefault(), className: "inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors", "aria-label": `混同稟議リンク: ${prop.link}`, children: [(_a = prop.title) !== null && _a !== void 0 ? _a : prop.link, _jsx(LinkIcon, { className: "h-3 w-3 ml-1" })] }) }, idx));
                                            }) })) : (_jsx(Placeholder, {}))] })), _jsx(CopyableField, { label: "\u7533\u8ACB\u5185\u5BB9", text: (_j = item.details) === null || _j === void 0 ? void 0 : _j.applicationContent })] }) }) }) }))] }));
};
export default FaqItem;
