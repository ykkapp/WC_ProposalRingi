import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const ChevronIcon = ({ isOpen }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: `h-5 w-5 ml-1.5 flex-shrink-0 text-slate-500 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-indigo-500" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }));
const LinkIcon = ({ className = "h-4 w-4 ml-1.5", }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }));
const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
        return _jsx(_Fragment, { children: text });
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (_jsx(_Fragment, { children: parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? (_jsx("mark", { className: "bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0", children: part }, i)) : (part)) }));
};
const FaqItem = ({ item, level = 0, searchTerm }) => {
    var _a, _b;
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
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
    // Leaf Node (Link)
    return (_jsx("div", { className: `border-b border-slate-200 last:border-b-0 ${levelStyles.bg}`, children: _jsxs("div", { className: "flex justify-between items-center py-3 pr-6", style: { paddingLeft: levelStyles.paddingLeft }, children: [_jsx("span", { className: `${levelStyles.textSize} text-slate-700`, children: getHighlightedText(item.title, searchTerm) }), item.link && (_jsxs("a", { href: (_b = item.url) !== null && _b !== void 0 ? _b : "#", onClick: !item.url ? (e) => e.preventDefault() : undefined, target: item.url ? "_blank" : undefined, rel: item.url ? "noopener noreferrer" : undefined, className: "flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150", children: [_jsx("span", { className: "truncate", children: getHighlightedText(item.link, searchTerm) }), _jsx(LinkIcon, {})] }))] }) }));
};
export default FaqItem;
