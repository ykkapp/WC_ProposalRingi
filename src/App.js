import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import FaqItem from "./components/FaqItem";
import { FAQ_DATA } from "./constants";
// DetailsExample へのルーティングは廃止のため未使用
import SpecialRequest from "./components/SpecialRequest";
const App = () => {
    const [route, setRoute] = useState(window.location.hash);
    useEffect(() => {
        const handleHashChange = () => setRoute(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) {
            return FAQ_DATA;
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
        return recursiveFilter(FAQ_DATA);
    }, [searchTerm]);
    return (_jsxs("div", { className: "min-h-screen bg-slate-50 font-sans antialiased", children: [_jsx("header", { className: "bg-white border-b border-slate-200", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "flex justify-center items-center py-4", children: _jsx("a", { href: "https://worldcorp-jp.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "World Corporation Homepage", children: _jsx("img", { src: "https://prcdn.freetls.fastly.net/release_image/132820/8/132820-8-3af0ab6387a4e3bdde6e85f50849d3bf-360x160.png?format=jpeg&auto=webp&fit=bounds&width=720&height=480", alt: "\u682A\u5F0F\u4F1A\u793E\u30EF\u30FC\u30EB\u30C9\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3 \u30ED\u30B4", className: "h-8 w-auto" }) }) }) }) }), _jsx("main", { className: "container mx-auto px-4 py-12 sm:py-16", children: route === "#/special" ? (_jsx(SpecialRequest, {})) : (_jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h1", { className: "text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight", children: "\u7A1F\u8B70\u8D77\u6848\u30D5\u30ED\u30FC" }), _jsx("p", { className: "mt-4 max-w-2xl mx-auto text-lg text-slate-600", children: "\u5FC5\u8981\u306A\u7533\u8ACB\u9805\u76EE\u3092\u9078\u629E\u3059\u308B\u304B\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })] }), _jsx("div", { className: "text-center mb-8 text-slate-600", children: _jsxs("p", { children: ["\u3082\u3057\u8D77\u6848\u3067\u304D\u308B\u7A1F\u8B70\u306B\u8907\u6570\u5019\u88DC\u304C\u3042\u308B\u5834\u5408\u306F\u3001", _jsx("strong", { className: "text-red-600 underline decoration-2", children: "\u6C7A\u88C1\u6A29\u304C\u9AD8\u3044\u65B9\u306E\u7A1F\u8B70" }), "\u3092\u9078\u629E\u304F\u3060\u3055\u3044"] }) }), _jsxs("div", { className: "text-left mb-8 text-slate-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [_jsx("p", { className: "font-semibold text-yellow-800 mb-2", children: "\u26A0\uFE0F \u7279\u4F8B\u6271\u7533\u8ACB\u66F8\u306E\u63D0\u51FA\u306B\u3064\u3044\u3066" }), _jsxs("p", { className: "text-yellow-700", children: ["\u5BFE\u8C61\u6708\u306B\u304A\u3051\u308B\u8ACB\u6C42\u984D\u306E\u5909\u66F4\u304C\u767A\u751F\u3057\u306A\u3044\u5834\u5408\u306F\u7A1F\u8B70\u3067\u306F\u306A\u304F\u3001", _jsx("a", { href: "#/special", className: "text-indigo-600 hover:underline font-semibold", children: "\u300C\u7279\u4F8B\u6271\u7533\u8ACB\u30FB\u6307\u793A\u66F8\u300D" }), "\u306E\u63D0\u51FA\u304C\u5FC5\u8981\u3067\u3059"] })] }), _jsxs("div", { className: "mb-8 relative", children: [_jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center", children: _jsx("svg", { className: "h-5 w-5 text-slate-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }), _jsx("input", { type: "search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u691C\u7D22...", className: "w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200", "aria-label": "\u7A1F\u8B70\u30D5\u30ED\u30FC\u3092\u691C\u7D22" })] }), _jsx("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: filteredData.length > 0 ? (filteredData.map((item, index) => (_jsx(FaqItem, { item: item, searchTerm: searchTerm }, index)))) : (_jsxs("div", { className: "p-8 text-center text-slate-500", children: [_jsx("p", { className: "font-semibold", children: "\u691C\u7D22\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002" }), _jsx("p", { className: "text-sm mt-1", children: "\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002" })] })) }), _jsx("footer", { className: "text-center mt-12 text-slate-500", children: _jsx("p", { children: "\u00A9 2024 Ringi Proposal Flow Guide. All Rights Reserved." }) })] })) })] }));
};
export default App;
