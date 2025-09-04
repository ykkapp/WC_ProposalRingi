import React, { useState, useMemo } from "react";
import FaqItem from "./FaqItem";
import { SPECIAL_REQUEST_DATA } from "../constants";
import type { FaqItem as FaqItemType } from "../types";

const SpecialRequest: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return SPECIAL_REQUEST_DATA;
    }
    const lowerCaseTerm = searchTerm.toLowerCase();

    const recursiveFilter = (items: FaqItemType[]): FaqItemType[] => {
      return items
        .map((item): FaqItemType | null => {
          const selfMatch =
            item.title.toLowerCase().includes(lowerCaseTerm) ||
            (item.link && item.link.toLowerCase().includes(lowerCaseTerm));

          let filteredChildren: FaqItemType[] | undefined = undefined;
          if (item.children) {
            filteredChildren = recursiveFilter(item.children);
          }

          const childMatch = filteredChildren && filteredChildren.length > 0;

          if (selfMatch || childMatch) {
            return { ...item, children: filteredChildren };
          }

          return null;
        })
        .filter((item): item is FaqItemType => item !== null);
    };

    return recursiveFilter(SPECIAL_REQUEST_DATA);
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          特例扱申請・指示書
        </h2>
        <a
          href="#/"
          className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          &larr; 稟議起案フローに戻る
        </a>
      </div>

      <div className="text-left mb-8 text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-semibold text-blue-800 mb-2">
          ℹ️ 特例扱申請・指示書について
        </p>
        <p className="text-blue-700">
          対象月における請求額の変更が発生しない場合は、該当する項目を選択してWFへ進んでください。
        </p>
      </div>

      <div className="mb-8 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
          <svg
            className="h-5 w-5 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="キーワードで検索..."
          className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
          aria-label="特例扱申請・指示書を検索"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <FaqItem key={index} item={item} searchTerm={searchTerm} />
          ))
        ) : (
          <div className="p-8 text-center text-slate-500">
            <p className="font-semibold">
              検索結果が見つかりませんでした。
            </p>
            <p className="text-sm mt-1">
              別のキーワードでお試しください。
            </p>
          </div>
        )}
      </div>

      <footer className="text-center mt-12 text-slate-500">
        <p>&copy; 2024 Ringi Proposal Flow Guide. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SpecialRequest;
