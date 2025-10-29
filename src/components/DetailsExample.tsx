import React, { useState, useMemo } from "react";

// --- Icons ---
const ChevronIcon: React.FC<{ isOpen: boolean; className?: string }> = ({ isOpen, className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} text-slate-400 transform transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const FileTextIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const TagIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

// --- Types ---
interface SampleDataItem {
  ID: string;
  該当案件?: string;
  申請内容?: string;
  コメント?: string;
  購買先等?: string;
  申請金額?: string;
  案件?: string;
  取引先会社名?: string;
  起案内容詳細?: string;
  システム利用領域?: string;
}

// --- Data ---
const getSampleData = (): SampleDataItem[] => {
  return [
    {
      ID: "【C】前払_100万円以上",
      該当案件: "前払い（100万以上～1,000万未満）",
      申請内容: "【記載例参照】",
      コメント: "<自由記述>",
      購買先等: "株式会社XXX/取引対象外等",
      申請金額: "100000",
    },
    {
      ID: "【E】施工図受託",
      該当案件:
        "【顧客との取引条件】設定単価/企業設定単価を下回る契約_施工図_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
      申請内容: "【記載例参照】",
      購買先等: "株式会社XXX/取引対象外等",
      システム利用領域: "※下記該当領域を選択\n 勤怠,請求,契約",
    },
    {
      ID: "【F】値引き_1,500万円以上",
      該当案件:
        "【クレーム・値引き】1,500万以上_株式会社XX_技術社員XX_番号XXXXXXXX",
      案件: "派遣 / 図面",
      取引先会社名: "株式会社XXX",
      起案内容詳細: "【記載例参照】",
    },
    {
      ID: "【G】給与改定_個別給与改定 / 派遣先賞与支給",
      該当案件:
        "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",
      申請内容: "【記載例参照】",
    },
    {
      ID: "【O】レンタル利用_費用発生有_レオパレス",
      該当案件: "レオパレス",
      申請内容: "「申請内容欄」の記載不要です",
    },
    {
      ID: "【N】レンタル利用_費用発生無_レンタカー",
      該当案件: "レンタカー",
      申請内容: "「申請内容欄」の記載不要です",
    },
    {
      ID: "【G2】原価変更_給与改定無",
      該当案件: "所属事業部変更に関する事項（事業部の変更に限定される場合)",
      申請内容: "【記載例参照】",
    },
  ];
};

const DetailsExample: React.FC = () => {
  const [data] = useState<SampleDataItem[]>(getSampleData());
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategory = (id: string): string => {
    const match = id.match(/^【([^】]+)】/);
    return match ? match[1] : "その他";
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      C: "bg-sky-100 text-sky-800",
      E: "bg-emerald-100 text-emerald-800",
      F: "bg-rose-100 text-rose-800",
      O: "bg-purple-100 text-purple-800",
      N: "bg-indigo-100 text-indigo-800",
      G: "bg-amber-100 text-amber-800",
      G2: "bg-pink-100 text-pink-800",
    };
    return colors[category] || "bg-slate-100 text-slate-800";
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const matchesSearch =
        item.ID.toLowerCase().includes(lowerCaseTerm) ||
        (item.該当案件 && item.該当案件.toLowerCase().includes(lowerCaseTerm));
      const matchesCategory =
        selectedCategory === "all" || getCategory(item.ID) === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    return [...new Set(data.map((item) => getCategory(item.ID)))].sort();
  }, [data]);

  const renderDetailTable = (item: SampleDataItem) => {
    if (!item || typeof item !== "object") {
      return (
        <div className="p-4 text-slate-500">詳細データを表示できません。</div>
      );
    }

    const fields = Object.entries(item).filter(
      ([key, value]) =>
        key !== "ID" &&
        value !== "" &&
        value !== null &&
        value !== undefined &&
        value !== "-"
    );

    if (fields.length === 0) {
      return (
        <div className="p-6 text-slate-500">
          この項目には追加の詳細情報がありません。
        </div>
      );
    }

    return (
      <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm"
            >
              <div className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                {key}
              </div>
              <div className="text-sm text-slate-800 whitespace-pre-wrap break-words">
                {typeof value === "string" &&
                value.match(/^\d+$/) &&
                key.includes("金額")
                  ? `¥${parseInt(value, 10).toLocaleString()}`
                  : String(value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          稟議項目の記載例
        </h2>
        <a
          href="#/"
          className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          &larr; 稟議起案フローに戻る
        </a>
      </div>

      <div className="mb-8 bg-white rounded-xl shadow p-4 sm:p-6 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative md:col-span-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <SearchIcon className="text-slate-400" />
            </div>
            <input
              type="search"
              placeholder="IDや案件名で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 border border-slate-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:col-span-2 px-4 py-2.5 border border-slate-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="all">すべてのカテゴリ ({data.length}件)</option>
            {categories.map((category) => {
              const count = data.filter(
                (item) => getCategory(item.ID) === category
              ).length;
              return (
                <option key={category} value={category}>
                  【{category}】カテゴリ ({count}件)
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredData.map((item) => {
          const category = getCategory(item.ID);
          const isExpanded = expandedItems[item.ID];
          return (
            <div
              key={item.ID}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              <button
                className="w-full text-left p-4 sm:p-5"
                onClick={() => toggleExpand(item.ID)}
                aria-expanded={isExpanded}
                aria-controls={`details-${item.ID}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                          category
                        )}`}
                      >
                        <TagIcon /> {category}
                      </span>
                    </div>
                    <h3
                      className="text-base font-semibold text-slate-800 truncate"
                      title={item.ID}
                    >
                      {item.ID}
                    </h3>
                    {item.該当案件 && (
                      <p
                        className="text-sm text-slate-500 mt-1 truncate"
                        title={item.該当案件}
                      >
                        {item.該当案件}
                      </p>
                    )}
                  </div>
                  <ChevronIcon isOpen={isExpanded} />
                </div>
              </button>
              <div
                id={`details-${item.ID}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">{renderDetailTable(item)}</div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-slate-200">
          <FileTextIcon className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-semibold text-slate-800">
            該当なし
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            検索条件を変更してお試しください。
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailsExample;
