import React, { useState, useMemo, useEffect } from "react";
import FaqItem from "./components/FaqItem";
import { FAQ_DATA } from "./constants";
import type { FaqItem as FaqItemType } from "./types";
// DetailsExample へのルーティングは廃止のため未使用
import SpecialRequest from "./components/SpecialRequest";

const App: React.FC = () => {
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

    return recursiveFilter(FAQ_DATA);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            <a
              href="https://worldcorp-jp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="World Corporation Homepage"
            >
              <img
                src="https://prcdn.freetls.fastly.net/release_image/132820/8/132820-8-3af0ab6387a4e3bdde6e85f50849d3bf-360x160.png?format=jpeg&auto=webp&fit=bounds&width=720&height=480"
                alt="株式会社ワールドコーポレーション ロゴ"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 sm:py-16">
        {route === "#/special" ? (
          <SpecialRequest />
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                稟議起案フロー
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                必要な申請項目を選択するか、キーワードで検索してください。
              </p>
            </div>

            <div className="text-center mb-1 text-slate-600">
              <p>
                リンク先の稟議項目の具体記載例は
                <a
                  href="https://wc-linkrecord.vercel.app/"
                  className="text-indigo-600 hover:underline font-semibold p-1"
                >
                  こちら
                </a>
                を参照ください
              </p>
            </div>
            <div className="text-center mb-8 text-slate-600">
              <p>
                もし起案できる稟議に複数候補がある場合は、
                <strong className="text-red-600 underline decoration-2">
                  決裁権が高い方の稟議
                </strong>
                を選択ください
              </p>
            </div>

            <div className="text-left mb-8 text-slate-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="font-semibold text-yellow-800 mb-2">
                ⚠️ 特例扱申請書の提出について
              </p>
              <p className="text-yellow-700">
                対象月における請求額の変更が発生しない場合は稟議ではなく、
                <a
                  href="#/special"
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  「特例扱申請・指示書」
                </a>
                の提出が必要です
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
                aria-label="稟議フローを検索"
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
        )}
      </main>
    </div>
  );
};

export default App;
