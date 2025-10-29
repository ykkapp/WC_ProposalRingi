import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import FaqItem from "./FaqItem";
import { SPECIAL_REQUEST_DATA } from "../constants";
const SpecialRequest = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) {
            return SPECIAL_REQUEST_DATA;
        }
        const lowerCaseTerm = searchTerm.toLowerCase();
        const recursiveFilter = (items) => {
            return items
                .map((item) => {
                const selfMatch = item.title.toLowerCase().includes(lowerCaseTerm) ||
                    (item.link && item.link.toLowerCase().includes(lowerCaseTerm));
                let filteredChildren = undefined;
                if (item.children) {
                    filteredChildren = recursiveFilter(item.children);
                }
                const childMatch = filteredChildren && filteredChildren.length > 0;
                if (selfMatch || childMatch) {
                    return Object.assign(Object.assign({}, item), { children: filteredChildren });
                }
                return null;
            })
                .filter((item) => item !== null);
        };
        return recursiveFilter(SPECIAL_REQUEST_DATA);
    }, [searchTerm]);
    return (_jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight", children: "\u7279\u4F8B\u6271\u7533\u8ACB\u30FB\u6307\u793A\u66F8" }), _jsx("a", { href: "#/", className: "inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "\u2190 \u7A1F\u8B70\u8D77\u6848\u30D5\u30ED\u30FC\u306B\u623B\u308B" })] }), _jsxs("div", { className: "text-left mb-8 text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-4", children: [_jsx("p", { className: "font-semibold text-blue-800 mb-2", children: "\u2139\uFE0F \u7279\u4F8B\u6271\u7533\u8ACB\u30FB\u6307\u793A\u66F8\u306B\u3064\u3044\u3066" }), _jsx("p", { className: "text-blue-700", children: "\u5BFE\u8C61\u6708\u306B\u304A\u3051\u308B\u8ACB\u6C42\u984D\u306E\u5909\u66F4\u304C\u767A\u751F\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u8A72\u5F53\u3059\u308B\u9805\u76EE\u3092\u9078\u629E\u3057\u3066WF\u3078\u9032\u3093\u3067\u304F\u3060\u3055\u3044\u3002" })] }), _jsxs("div", { className: "mb-8 relative", children: [_jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center", children: _jsx("svg", { className: "h-5 w-5 text-slate-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }), _jsx("input", { type: "search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u691C\u7D22...", className: "w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200", "aria-label": "\u7279\u4F8B\u6271\u7533\u8ACB\u30FB\u6307\u793A\u66F8\u3092\u691C\u7D22" })] }), _jsx("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: filteredData.length > 0 ? (filteredData.map((item, index) => (_jsx(FaqItem, { item: item, searchTerm: searchTerm }, index)))) : (_jsxs("div", { className: "p-8 text-center text-slate-500", children: [_jsx("p", { className: "font-semibold", children: "\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002" }), _jsx("p", { className: "text-sm mt-1", children: "\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002" })] })) }), _jsx("footer", { className: "text-center mt-12 text-slate-500", children: _jsx("p", { children: "\u00A9 2024 Ringi Proposal Flow Guide. All Rights Reserved." }) })] }));
};
export default SpecialRequest;
