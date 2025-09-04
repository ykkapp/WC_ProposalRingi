import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Search,
  Tag,
  Database,
} from "lucide-react";
import { linkData } from "./data";

type LinkItem = {
  ID: string;
  該当案件?: string;
} & Record<string, unknown>;

const LinkRecordLP = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data, setData] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);

  // JSONデータを読み込み
  useEffect(() => {
    console.log("データ設定完了:", linkData.length, "件");
    setData(linkData);
    setLoading(false);
  }, []);

  // フォールバック用のサンプルデータ
  const getSampleData = (): LinkItem[] => {
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
    ];
  };

  const toggleExpand = (id: string) => {
    setExpandedItems((prev: Record<string, boolean>) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategory = (id: string): string => {
    const match = id.match(/^【([^】]+)】/);
    return match ? match[1] : "その他";
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      C: "bg-blue-100 text-blue-800",
      E: "bg-green-100 text-green-800",
      F: "bg-red-100 text-red-800",
      O: "bg-purple-100 text-purple-800",
      N: "bg-indigo-100 text-indigo-800",
      G: "bg-yellow-100 text-yellow-800",
      G2: "bg-pink-100 text-pink-800",
    };
    return colors[category] ?? "bg-gray-100 text-gray-800";
  };

  const filteredData = data.filter((item: LinkItem) => {
    const matchesSearch =
      item.ID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.該当案件 &&
        item.該当案件.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === "all" || getCategory(item.ID) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(data.map((item) => getCategory(item.ID)))
  ).sort();

  const renderDetailTable = (item: LinkItem) => {
    // 安全にオブジェクトを確認
    if (!item || typeof item !== "object") {
      return <div>データが正しく読み込まれていません</div>;
    }

    // 全ての項目を表示（空でない項目のみ）
    const allFields: { label: string; value: string }[] = [];
    for (const [key, value] of Object.entries(item)) {
      if (
        key !== "ID" &&
        value !== "" &&
        value !== null &&
        value !== undefined &&
        value !== "-"
      ) {
        allFields.push({ label: key, value: String(value) });
      }
    }

    // 主要項目（最初の4つ）
    const mainFields = allFields.slice(0, 4);

    // その他の項目
    const otherFields = allFields.slice(4);

    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <Database className="h-4 w-4 mr-2" />
          主要項目
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {mainFields.map((field, index) => (
            <div key={index} className="bg-white p-3 rounded border shadow-sm">
              <div className="font-medium text-sm text-gray-600 mb-1">
                {field.label}
              </div>
              <div className="text-sm text-gray-900 whitespace-pre-wrap">
                {typeof field.value === "string" &&
                field.value.match(/^\d+$/) &&
                field.label.includes("金額")
                  ? `¥${parseInt(field.value).toLocaleString()}`
                  : field.value}
              </div>
            </div>
          ))}
        </div>

        {otherFields.length > 0 && (
          <>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              詳細項目 ({otherFields.length}件)
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {otherFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border shadow-sm"
                >
                  <div
                    className="font-medium text-xs text-gray-600 mb-1 truncate"
                    title={field.label}
                  >
                    {field.label}
                  </div>
                  <div className="text-sm text-gray-900 whitespace-pre-wrap">
                    {typeof field.value === "string" &&
                    field.value.match(/^\d+$/) &&
                    field.label.includes("金額")
                      ? `¥${parseInt(field.value).toLocaleString()}`
                      : field.value}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Database className="mx-auto h-12 w-12 text-blue-600 animate-pulse" />
          <p className="mt-2 text-lg text-gray-600">データを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                リンク記載例データベース
              </h1>
              <p className="text-gray-600 mt-1">
                申請フォームの記載例を確認できます（84項目対応）
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 検索・フィルター */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="IDや案件名で検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">すべてのカテゴリ ({data.length}件)</option>
              {categories.map((category) => {
                const count = data.filter(
                  (item) => getCategory(item.ID) === category
                ).length;
                return (
                  <option key={category} value={category}>
                    【{category}】({count}件)
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* データリスト */}
        <div className="space-y-4">
          {filteredData.map((item, index) => {
            const category = getCategory(item.ID);
            const isExpanded = expandedItems[item.ID];
            const itemFieldCount = Object.keys(item).filter((key) => {
              const value = (item as Record<string, unknown>)[key];
              return (
                value !== "" &&
                value !== null &&
                value !== undefined &&
                value !== "-"
              );
            }).length;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(item.ID)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                              category
                            )}`}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {category}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {itemFieldCount}項目
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.ID}
                        </h3>
                        {item.該当案件 && (
                          <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                            {item.該当案件}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {isExpanded && renderDetailTable(item)}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              検索結果が見つかりません
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              検索条件を変更してお試しください
            </p>
          </div>
        )}
      </div>

      {/* フッター */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 リンク記載例データベース. All rights reserved.</p>
            <p className="text-sm mt-1">
              84項目 × {data.length}レコードの完全データベース
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkRecordLP;
