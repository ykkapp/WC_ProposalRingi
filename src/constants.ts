import type { FaqItem } from "./types";

export const FAQ_DATA: FaqItem[] = [
  {
      title: "1. お金を借りる",
      children: [
        {
          title: '1.1 給与額"以下"の額を借りる',
          children: [
            {
              title: "100万円を超える",
              link: "【WC-C】前払_100万円以上",
              details: {
                applicableProject: "前払い（100万以上～1,000万未満）",
                subject: "前払い（100万以上～1,000万未満）",
                attachments: [
                  {
                    name: "交通費金額用書類（路線図スクショ/事後のレシート写真）",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて前借り申請を致します。\n氏名：XXX\n社員番号：XXXXXXXX\n配属先：株式会社XXX　XXX支店\n契約期間：XXXX年X月X日～XXXX年X月X日\n申請金額：XXX,000円\n返済予定日：XXXX年X月X日\n入金口座："＊＊＊"　≪ex.本人給与≫\n本人給与調整：XXXX年X月XX日\n支払日：XXXX年X月X日\n【理由】"＊＊＊"\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "100万円を超えない",
              link: "【WC-C】前払_100万円未満",
              details: {
                applicableProject: "前払い（100万未満）",
                subject: "前払い（100万未満）",
                attachments: [
                  {
                    name: "交通費金額用書類（路線図スクショ/事後のレシート写真）",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて前借り申請を致します。\n\n氏名：XXX\n社員番号：XXXXXXXX\n配属先：株式会社XXX　XXX支店\n契約期間：XXXX年X月X日～XXXX年X月X日\n申請金額：XXX,000円\n返済予定日：XXXX年X月X日\n入金口座："＊＊＊"　≪ex.本人給与≫\n本人給与調整：XXXX年X月XX日\n支払日：XXXX年X月X日\n\n【理由】"＊＊＊"\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
        {
          title: '1.2 給与額"以上"の額を借りる',
          children: [
            {
              title: "100万円を超える",
              link: "【WC-C】貸付金_100万円以上",
              details: {
                applicableProject: "貸付（100万以上1,000万未満）",
                subject: "貸付（100万以上1,000万未満）",
                attachments: [
                  {
                    name: "証憑",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて貸付申請を致します。\n\n氏名：XXX\n社員番号：XXXXXXXX\n入社日：202X年X月X日\n稼働先：株式会社XX　XX事業所\n貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫\n貸付希望金額：XX,000-\n返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫\n\n【貸付金内訳】\n合計：XX,000-\n内訳：下記参照\n　XXX代：XX,000-\n　XXX代：XX,000-\n　XXX代：XX,000-\n\n【貸付発生経緯】"＊＊＊"\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "20万円を超える",
              link: "【WC-C】貸付金_20万円以上",
              details: {
                applicableProject: "貸付（20万以上100万未満）",
                subject: "貸付（20万以上100万未満）",
                attachments: [
                  {
                    name: "証憑",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて貸付申請を致します。\n\n氏名：XXX\n社員番号：XXXXXXXX\n入社日：202X年X月X日\n稼働先：株式会社XX　XX事業所\n貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫\n貸付希望金額：XX,000-\n返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫\n\n【貸付金内訳】\n合計：XX,000-\n内訳：下記参照\n　XXX代：XX,000-\n　XXX代：XX,000-\n　XXX代：XX,000-\n\n【貸付発生経緯】"＊＊＊"\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "20万円を超えない",
              link: "【WC-C】貸付金_20万円未満",
              details: {
                applicableProject: "貸付（20万未満）",
                subject: "貸付（20万未満）",
                attachments: [
                  {
                    name: "証憑",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて貸付申請を致します。\n\n氏名：XXX\n社員番号：XXXXXXXX\n入社日：202X年X月X日\n稼働先：株式会社XX　XX事業所\n貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫\n貸付希望金額：XX,000-\n返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫\n\n【貸付金内訳】\n合計：XX,000-\n内訳：下記参照\n　XXX代：XX,000-\n　XXX代：XX,000-\n　XXX代：XX,000-\n\n【貸付発生経緯】"＊＊＊"\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
      ],
    },
    {
      title: "2. 物品や賃貸を借りる",
      children: [
        {
          title: "2.1 会社のキャッシュアウトが発生する（後日回収予定含む）",
          children: [
            {
              title: "レオパレス",
              link: "【WC-O】レンタル利用_費用発生有_レオパレス",
              details: {
                applicableProject: "レオパレス",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円も会社からお金が出ないなら【WC-N】",
                    link: "1円も会社からお金が出ないなら【WC-N】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "レンタカー",
              link: "【WC-O】レンタル利用_費用発生有_レンタカー",
              details: {
                applicableProject: "レンタカー",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円も会社からお金が出ないなら【WC-N】",
                    link: "1円も会社からお金が出ないなら【WC-N】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "携帯電話",
              link: "【WC-O】レンタル利用_費用発生有_携帯電話",
              details: {
                applicableProject: "携帯電話",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円も会社からお金が出ないなら【WC-N】",
                    link: "1円も会社からお金が出ないなら【WC-N】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "駐車場",
              link: "【WC-O】レンタル利用_費用発生有_駐車場",
              details: {
                applicableProject: "駐車場",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円も会社からお金が出ないなら【WC-N】",
                    link: "1円も会社からお金が出ないなら【WC-N】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "賃貸アパート",
              link: "【WC-O】レンタル利用_費用発生有_賃貸アパート",
              details: {
                applicableProject: "その他賃貸アパート",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円も会社からお金が出ないなら【WC-N】",
                    link: "1円も会社からお金が出ないなら【WC-N】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
          ],
        },
        {
          title: "2.2 会社のキャッシュアウトが発生しない（派遣先または本人負担）",
          children: [
            {
              title: "レオパレス",
              link: "【WC-N】レンタル利用_費用発生無_レオパレス",
              details: {
                applicableProject: "レオパレス",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円でも会社からお金が出れば【WC-O】",
                    link: "1円でも会社からお金が出れば【WC-O】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "レンタカー",
              link: "【WC-N】レンタル利用_費用発生無_レンタカー",
              details: {
                applicableProject: "レンタカー",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円でも会社からお金が出れば【WC-O】",
                    link: "1円でも会社からお金が出れば【WC-O】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "携帯電話",
              link: "【WC-N】レンタル利用_費用発生無_携帯電話",
              details: {
                applicableProject: "携帯電話",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円でも会社からお金が出れば【WC-O】",
                    link: "1円でも会社からお金が出れば【WC-O】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "駐車場",
              link: "【WC-N】レンタル利用_費用発生無_駐車場",
              details: {
                applicableProject: "駐車場",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円でも会社からお金が出れば【WC-O】",
                    link: "1円でも会社からお金が出れば【WC-O】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
            {
              title: "賃貸アパート",
              link: "【WC-N】レンタル利用_費用発生無_賃貸アパート",
              details: {
                applicableProject: "その他賃貸アパート",
                subject: "-",
                attachments: [
                  {
                    name: "証憑（金額や振込先がわかるもの）ex.見積書・請求書",
                    required: true,
                  },
                ],
                concurrentProposals: [
                  {
                    title: "1円でも会社からお金が出れば【WC-O】",
                    link: "1円でも会社からお金が出れば【WC-O】",
                  },
                ],
                applicationContent: "「申請内容欄」の記載不要です",
              },
            },
          ],
        },
      ],
    },
    {
      title: "3. 派遣先との契約に係る申請を行う",
      children: [
        {
          title: "3.1 案件を受託する",
          children: [
            {
              title: "施工図を受託する",
              link: "【WC-E】施工図受託",
              details: {
                applicableProject:
                  "【顧客との取引条件】設定単価/企業設定単価を下回る契約_施工図",
                subject:
                  "設定単価/企業設定単価を下回る契約_施工図_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "無 （※事前決裁必須）", required: true }],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて施工図契約申請を致します。\n\n取引先：株式会社XX　XX支店\n現場名：XX工事　≪企業単位の場合は不要≫\n担当者：XX様\n想定受注枚数：X枚\n添付：{見積書 or 発注書}添付いたします。\n\n{現場単位 or 企業単位 or 担当者単位}より、\n≪どちらかを記入≫ー 用紙{A1 or A2 or A3サイズ}をXX,000/枚で受注を頂きました\n≪どちらかを記入≫ー 時間単価をXX,000/hで受注を頂きました\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "3.2 自動車を利用する",
          children: [
            {
              title: "当社書式で契約をする",
              link: "【WC-G】自動車利用開始_当社書式_3者修正有",
              details: {
                applicableProject: "自動車利用に関する事項",
                subject:
                  "自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "リーガルメール/締結したいデータ", required: true },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて自動車利用に関する申請を致します。\n\n配属先：株式会社XX\n配属日：XXXX/XX/XX～\n対象技術社員：XX\n社員番号：XXXXXXXX\n利用目的：{通勤利用 / 業務利用 / 両方}\n\n**利用理由を記載**\n\n**添付資料**\nリーガルメールと修正後データ\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "自家用車を利用する",
              link: "【WC-G】自動車利用開始_自家用車利用",
              details: {
                applicableProject: "自動車利用に関する事項",
                subject:
                  "自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "必要に応じた書類を添付", required: false },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて自動車利用に関する申請を致します。\n\n配属先：株式会社XX\n配属日：XXXX/XX/XX～\n対象技術社員：XX\n社員番号：XXXXXXXX\n利用目的：{通勤利用 / 業務利用 / 両方}\n\n**利用理由を記載**\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "3.3 契約締結をする",
          children: [
            {
              title: "顧客システムを利用する",
              link: "【WC-E】顧客システム利用",
              details: {
                applicableProject: "顧客システム利用に関する事項",
                subject:
                  "顧客システム利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて顧客システム利用に関する申請を致します。\n\nシステム一覧に記載がないこと確認済です。\n（URL：https：//docs.google.com/spreadsheets/d/11lUkGeggvJ3dy2UG0KGuRCOVaQWknbiaE3u6JKBiSpo/edit?usp=sharing）\n\nシステム名称：XXX\n利用における費用発生有無：{有/無}\n単価・利用料：XXX円　≪上記費用発生がある場合のみ≫\n取引先：株式会社XXX　XX支店（全社）\n利用開始日：XXXX年/X月/X日～\n申請理由："＊＊＊"　≪ex.当社書式を利用いただく交渉をしたが決裂し、取引先サイトでないと稼働できなくなったため≫\n\n今後の進め方について\n・帳票のリーガルは別途ワークフロー申請いたします\n・リーガルWF後、ひな形登録のワークフローも申請いたします\n・アカウント発行は情報システム部担当者に依頼します\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
      ],
    },
    {
      title: "4. 技術社員に係る申請を行う",
      children: [
        {
          title: "4.1 給与改定を行う（昇給を含まない）",
          children: [
            {
              title: "【再編中】事業部変更を伴う",
              link: "【WC-G2】原価変更_給与改定無",
              details: {
                applicableProject:
                  "所属事業部変更に関する事項（事業部の変更に限定される場合)",
                subject:
                  "所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  '表題の件につきまして、下記にて原価変更に関する申請を致します。\n\n社員氏名：XX\n社員番号：XXXXXXXX\n変更後の配属先：株式会社XX\n契約期間：XXXX年/X月/X日～XXXX年/X月/X日\n事業部変更日：XX年XX月1日\n給与改定日：XX年XX月1日（XX月25日支給分）\n変更前本人原価：XXX,000円\n変更後本人原価：XXX,000円\n添付書類：原価情報≪必ず添付≫\n\n【変更理由】"＊＊＊"\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
        {
          title: "4.2 給与改定を行う（昇給を含む）",
          children: [
            {
              title:
                "【再編中】事業部変更を伴わず、本人対話の上で個別対応として行う",
              link: "【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",
              details: {
                applicableProject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",
                subject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  "表題の件につきまして、下記にて{個別給与改定 / 派遣先賞与支給}に関する申請を致します。\n\n技術者名：XX\n社員番号：XXXXXXXX\n入社日：202X/X/X\n配属先：株式会社XX\n支給希望日：202X/X/X　※賞与の場合\n変更日：202X/X/X　X月X日支給分より　※給与の場合\n変更前金額：XXX円\n変更後金額：XXX円\n\n{賞与の場合}\n理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給\n\n{給与の場合}\n理由：\n給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）\n≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫\n（※添付必須）\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "【再編中】事業部変更を伴わず、「特別手当支給」を行う",
              link: "【WC-G】給与改定_特別定期昇給 / 特別賞与支給",
              details: {
                applicableProject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",
                subject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  "表題の件につきまして、下記にて{特別定期昇給 / 特別賞与支給}に関する申請を致します。\n\n技術者名：XX\n社員番号：XXXXXXXX\n入社日：202X/X/X\n配属先：株式会社XX\n支給希望日：202X/X/X　※賞与の場合\n変更日：202X/X/X　X月X日支給分より　※給与の場合\n変更前金額：XXX円\n変更後金額：XXX円\n\n{賞与の場合}\n理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給\n\n{給与の場合}\n理由：\n給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）\n≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫\n（※添付必須）\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "4.3 雇用形態変更を行う",
          children: [
            {
              title: "【再編中】事業部変更を伴う",
              link: "【WC-G2】原価変更_給与改定有",
              details: {
                applicableProject:
                  "所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）",
                subject:
                  "所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  '表題の件につきまして、下記にて原価変更に関する申請を致します。\n\n社員氏名：XX\n社員番号：XXXXXXXX\n変更後の配属先：株式会社XX\n契約期間：XXXX年/X月/X日～XXXX年/X月/X日\n事業部変更日：XX年XX月1日\n給与改定日：XX年XX月1日（XX月25日支給分）\n変更前本人原価：XXX,000円\n変更後本人原価：XXX,000円\n添付書類：原価情報≪必ず添付≫\n\n【変更理由】"＊＊＊"\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "【再編中】事業部変更を伴わない",
              link: "【WC-G】雇用切り替え",
              details: {
                applicableProject: "雇用切替に関する事項",
                subject:
                  "雇用切替に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  "表題の件につきまして、下記にて雇用切り替え（XX社員➡XX社員※雇用形態）に関する申請を致します。\n※切替先が選択型正社員のケースは対象外\n\n技術者名：XX\n社員番号：XXXXXXXX\n入社日：202X/X/X\n配属先：株式会社XX\n変更日：202X/X/X　X月X日支給分より　※給与の場合\n給与改定有無：（有/無）\n\n給与改定がある場合は：\n変更前金額：XXX円（※給与改定稟議資料Excelの添付必須）　【リンク】\n変更後金額：XXX円（※給与改定稟議資料Excelの添付必須）　【リンク】\n\n理由：\nex.給与不満があり、退職引き留めのため。\nex.採用エリア外のため、通常案件供給ができないため\nex.介護のため、変則的な働き方を希望されたため（本人希望によりフルタイムから条件変更を希望）\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "4.4 事業部変更を行う（給与改定や雇用形態変更を伴わない）",
          children: [
            {
              title: "【再編中】単純な事業部変更",
              link: "【WC-G2】原価変更_給与改定無",
              details: {
                applicableProject:
                  "所属事業部変更に関する事項（事業部の変更に限定される場合)",
                subject:
                  "所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  '表題の件につきまして、下記にて原価変更に関する申請を致します。\n\n社員氏名：XX\n社員番号：XXXXXXXX\n変更後　配属先：株式会社XX\n契約期間：XXXX年/X月/X日～XXXX年/X月/X日\n事業部変更日：XX年XX月1日\n\n【変更理由】"＊＊＊"\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
        {
          title: "4.5 退職をする",
          children: [
            {
              title: "自動退職をする",
              link: "【WC-G】退職_自動退職",
              details: {
                applicableProject: "自動退職の決定に関する事項（自動退職）",
                subject:
                  "自動退職の決定に関する事項（自動退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて自動退職に関する申請を致します。\n※Stafnoteを熟読し、理解の上で申請いたします。\n\n社員氏名：XXXX\n社員番号：XXXXXXXX\n配属先：株式会社XX\n最終出勤日：XXXX年XX月XX日\n退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫\n理由："＊＊＊"　≪ex.音信不通により/退職代行手続きの滞りにより、等≫\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "満了退職をする",
              link: "【WC-G】退職_満了退職",
              details: {
                applicableProject: "自動退職の決定に関する事項（満了退職）",
                subject:
                  "自動退職の決定に関する事項（満了退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて満了退職に関する申請を致します。\n\n社員氏名：XXXX\n社員番号：XXXXXXXX\n配属先：株式会社XX\n雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日\n最終出勤日：XXXX年XX月XX日\n退職日：XXXX年XX月XX日\n理由："＊＊＊"　≪ex.退職届の提出を拒否されたため/音信不通により、等≫\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
            {
              title: "死亡退職をする",
              link: "【WC-G】退職_死亡退職",
              details: {
                applicableProject: "自動退職の決定に関する事項（死亡退職）",
                subject:
                  "自動退職の決定に関する事項（死亡退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "相続人からの給与誓約書", required: false },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて死亡退職に関する申請を致します。\n\n社員氏名：XXXX\n社員番号：XXXXXXXX\n配属先：株式会社XX\n雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日\n最終出勤日：XXXX年XX月XX日\n逝去日：XXXX年XX月XX日\n相続人からの給与誓約書取得予定日：XXXX年XX月XX日≪取得済みの場合はPDFを添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "不備の処理を依頼する",
              link: "【WC-G】退職_不備処理依頼",
              details: {
                applicableProject:
                  "自動退職の決定に関する事項（不備による処理の依頼）",
                subject:
                  "自動退職の決定に関する事項（不備による処理の依頼）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [],
                concurrentProposals: [],
                applicationContent:
                  '表題の件につきまして、下記にて退職に関する申請を致します。\n\n社員氏名：XXXX\n社員番号：XXXXXXXX\n配属先：株式会社XX\n最終出勤日：XXXX年XX月XX日\n退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫\n理由："＊＊＊"　≪ex.印漏れ/誓約書記載拒否/退職日・退職理由の修正（証跡がある場合に限る)の処理のお願い）≫\n\n＝＝\nご裁可の程、よろしくお願い致します。',
              },
            },
          ],
        },
        {
          title: "4.6 賞与を支給する",
          children: [
            {
              title:
                "【再編中】事業部変更を伴わず、本人対話の上で個別対応として行う",
              link: "【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",
              details: {
                applicableProject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",
                subject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  "表題の件につきまして、下記にて{個別給与改定 / 派遣先賞与支給}に関する申請を致します。\n\n技術者名：XX\n社員番号：XXXXXXXX\n入社日：202X/X/X\n配属先：株式会社XX\n支給希望日：202X/X/X　※賞与の場合\n変更日：202X/X/X　X月X日支給分より　※給与の場合\n変更前金額：XXX円\n変更後金額：XXX円\n\n{賞与の場合}\n理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給\n\n{給与の場合}\n理由：\n給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）\n≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫\n（※添付必須）\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "【再編中】事業部変更を伴わず、「特別手当支給」を行う",
              link: "【WC-G】給与改定_特別定期昇給 / 特別賞与支給",
              details: {
                applicableProject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",
                subject:
                  "技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  { name: "★★協議中(11月留保案件)★★", required: false },
                ],
                concurrentProposals: [
                  { title: "", link: "★★協議中(11月留保案件)★★" },
                ],
                applicationContent:
                  "表題の件につきまして、下記にて{特別定期昇給 / 特別賞与支給}に関する申請を致します。\n\n技術者名：XX\n社員番号：XXXXXXXX\n入社日：202X/X/X\n配属先：株式会社XX\n支給希望日：202X/X/X　※賞与の場合\n変更日：202X/X/X　X月X日支給分より　※給与の場合\n変更前金額：XXX円\n変更後金額：XXX円\n\n{賞与の場合}\n理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給\n\n{給与の場合}\n理由：\n給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）\n≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫\n≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫\n（※添付必須）\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "4.7 給与保証を行う",
          children: [
            {
              title: "給与保証の申請",
              link: "【WC-G】給与保証",
              details: {
                applicableProject:
                  "休業手当の支給割合変更、給与保証等に関する事項",
                subject:
                  "休業手当の支給割合変更、給与保証等に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "次回分の派遣契約書", required: false }],
                concurrentProposals: [{ title: "", link: "【WC-G】雇用継続" }],
                applicationContent:
                  "表題の件につきまして、下記にて給与保証に関する申請を致します。\n\n氏名：XX\n社員番号：XXXX\n入社日：XXXX/XX/XX\n派遣先(負担先)：株式会社XX　XX営業所\n保証期間：XXXX年XX月XX日～XXXX年XX月XX日（X日間）\n本人原価（純原価）：XX円\n\n**申請理由を記述**\nex.労働者に非がないケースを記載（例：派遣先倒産により）\nex.期間社員囲い込みのため\nex.労働トラブル解決のため\nex.遠方に済んでいて健康診断・職場見学に1日要したため\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "4.8 雇用継続する",
          children: [
            {
              title: "継続期間が30日を超える",
              link: "【WC-G】雇用継続_30日以上",
              details: {
                applicableProject:
                  "有期雇用社員の雇用継続に関する事項（継続期間30日以上）",
                subject:
                  "有期雇用社員の雇用継続に関する事項（継続期間30日以上）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "次回分の派遣契約書", required: false }],
                concurrentProposals: [{ title: "", link: "【WC-G】給与保証" }],
                applicationContent:
                  "表題の件につきまして、下記にて雇用継続（期間30日以上）に関する申請を致します。\n\n技術者名：XX\n社員№：X\n入社日：XXXX/X/X\n雇用継続期間：XX年XX月XX日～XX年XX月XX日（XX日間）\n\n**継続決定理由を記載**\nex.労働者に非がないケースを記載（例：派遣先倒産により）\nex.期間社員囲い込みのため（例：時期派遣先決定しており、配属日がXX月XX日のため）\nex.労働トラブル解決のため\nex.遠方に済んでいて健康診断・職場見学に1日要したため\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "継続期間が30日を超えない",
              link: "【WC-G】雇用継続_30日未満",
              details: {
                applicableProject:
                  "有期雇用社員の雇用継続に関する事項（継続期間30日未満）",
                subject:
                  "有期雇用社員の雇用継続に関する事項（継続期間30日未満）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "次回分の派遣契約書", required: false }],
                concurrentProposals: [{ title: "", link: "【WC-G】給与保証" }],
                applicationContent:
                  "表題の件につきまして、下記にて雇用継続（期間30日未満）に関する申請を致します。\n\n技術者名：XX\n社員№：X\n入社日：XXXX/X/XX\n雇用継続期間：XX年XX月XX日～XX年XX月XX日（XX日間）\n\n**継続決定理由を記載**\nex.労働者に非がないケースを記載（例：派遣先倒産により）\nex.期間社員囲い込みのため（例：時期派遣先決定しており、配属日がXX月XX日のため）\nex.労働トラブル解決のため\nex.遠方に済んでいて健康診断・職場見学に1日要したため\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "4.9 転籍に係る処理を行う",
          children: [
            {
              title: "転籍処理の申請",
              link: "【WC-G】転籍",
              details: {
                applicableProject: "転籍に関する事項",
                subject:
                  "転籍に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "ESメール", required: true }],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて転籍に関する申請を致します。\n　派遣先への同時転籍人数：X人（純減日報を参照）\n\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
      ],
    },
    {
      title: "5. 期間社員・契約社員に係る申請を行う",
      children: [
        {
          title: "5.1 給与改定を行う",
          children: [
            {
              title: "期間社員・契約社員の給与改定",
              link: "【WC-G】規定内給与改定",
              details: {
                applicableProject:
                  "期間社員、年間契約社員の規定内の給与改定（最低賃金水準までの給与改定含む）",
                subject:
                  "期間社員、年間契約社員の規定内の給与改定（最低賃金水準までの給与改定含む）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "決裁申請", required: true }],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて給与改定に関する申請を致します。\n\n技術者氏名：XX\n社員番号：XXXXXXXX\n配属先：XX\n給与改定日：X月X日　（X月25日支給より）\n設定差異：XX円　※決裁申請添付\n粗利額：XX円\n昇給率：X％\n\n改定理由：\nex.上記社員につきまして、月額金額XX,000円(XXH込み)からXX,000円（XXH込み）の単価アップとなった為、\n本人給与を規定の通り30%以内でXXXX/X/X～、XX,000円UPしていただきたく稟議提出します。\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
      ],
    },
    {
      title: "6. クレーム対応を行う",
      children: [
        {
          title: "6.1 値引きを行う",
          children: [
            {
              title: "値引き金額(税込)が1,500万円を超える",
              link: "【WC-F】値引き_1,500万円以上",
              details: {
                applicableProject: "【クレーム・値引き】1,500万以上",
                subject:
                  "【クレーム・値引き】1,500万以上_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "①見積書②請求書(いずれか)",
                    required: true,
                  },
                  {
                    name: "①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "値引き金額(税込)が1,000万円を超える",
              link: "【WC-F】値引き_1,000万円以上",
              details: {
                applicableProject: "【クレーム・値引き】1,000万以上1,500万未満",
                subject:
                  "【クレーム・値引き】1,000万以上1,500万未満_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "①見積書②請求書(いずれか)",
                    required: true,
                  },
                  {
                    name: "①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "値引き金額(税込)が60万円を超える",
              link: "【WC-F】値引き_60万円以上",
              details: {
                applicableProject: "【クレーム・値引き】60万以上1,000万未満",
                subject:
                  "【クレーム・値引き】60万以上1,000万未満_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "いずれか1-2種類(当月以内目安・速やかに提出すること目安/速やかに提出すること)■いずれか必須\n①見積書（請求後）\n②請求書（請求前）\n■申請内容次第で添付\n①勤怠（労務費の場合）\n②クレーム報告書（クレーム起因）",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "値引き金額(税込)が30万円を超える",
              link: "【WC-F】値引き_30万円以上",
              details: {
                applicableProject: "【クレーム・値引き】30万以上60万未満",
                subject:
                  "【クレーム・値引き】30万以上60万未満_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "①見積書②請求書(いずれか)",
                    required: true,
                  },
                  {
                    name: "①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "値引き金額(税込)が10万円を超える",
              link: "【WC-F】値引き_10万円以上",
              details: {
                applicableProject: "【クレーム・値引き】10万以上30万未満",
                subject:
                  "【クレーム・値引き】10万以上30万未満_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "①見積書②請求書(いずれか)",
                    required: true,
                  },
                  {
                    name: "①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "値引き金額(税込)が10万円を超えない",
              link: "【WC-F】値引き_10万円未満",
              details: {
                applicableProject: "【クレーム・値引き】10万未満",
                subject:
                  "【クレーム・値引き】10万未満_株式会社XX_技術社員XX_番号XXXXXXXX",
                attachments: [
                  {
                    name: "①見積書②請求書(いずれか)",
                    required: true,
                  },
                  {
                    name: "①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",
                    required: false,
                  },
                ],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にてクレーム・値引き申請を致します。\n社長へ事前相談済みです。\n\n派遣先：株式会社XXX　XX支店\n現場名：XXX\nカスタマーNo：XXX\n技術者：XXX\n社員番号：XXXXXXXX\n請求対象月：(西暦)XXXX年X月\n売上想定額：XXX円\n値引き総額：XXX,000円\n\n【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫\n【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "6.2 什器を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [{ name: "請求書・見積書", required: true }],
                concurrentProposals: [],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "6.3 備品を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "6.4 貸与品を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "6.5 自動車を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
      ],
    },
    {
      title: "7. 破損・紛失対応をする",
      children: [
        {
          title: "7.1 什器を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "7.2 備品を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "7.3 貸与品を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
        {
          title: "7.4 自動車を破損・紛失する",
          children: [
            {
              title: "負担先を問わず、総額が60万円を超える",
              link: "【WC-G】什器等破損_60万円以上",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先となり、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担有",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "会社が負担先とならず、総額が30万円を超える",
              link: "【WC-G】什器等破損_30万円以上_当社負担無",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円以上60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
            {
              title: "負担先を問わず、総額が30万円を超えない",
              link: "【WC-G】什器等破損_30万円未満",
              details: {
                applicableProject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）",
                subject:
                  "【什器・備品・貸与品等の破損及び紛失費用負担】30万円未満（当社負担有無に関係なく）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",
                attachments: [
                  {
                    name: "請求書＆見積書",
                    required: true,
                  },
                  {
                    name: "クレーム報告書(※発生事象によっては必須)",
                    required: false,
                  },
                  {
                    name: "顛末書（PDF等）",
                    required: false,
                  },
                ],
                concurrentProposals: [{ title: "", link: "特例扱申請" }],
                applicationContent:
                  "表題の件につきまして、下記にて備品費用負担に関する申請を致します。\n\n配属先：XX株式会社　XX事務所\n費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）\n精算日（当社からの支払日）：XXXX年XX月XX日\n精算日（資金回収日）：XXXX年XX月XX日\n金額：XX,000円（総額を記載）\n当社負担額：XX,000円\n\n【発生原因】\n**記載**\n【交渉結果】\n**記載**\n【添付】\n請求書・見積書\n\n＝＝\nご裁可の程、よろしくお願い致します。",
              },
            },
          ],
        },
      ],
    },
  ];

  export const SPECIAL_REQUEST_DATA: FaqItem[] = [
    {
      title: "1. 請求書の記載内容を変更する",
      children: [
        {
          title: "1. 締日を変更する（契約書の変更が発生する）",
          children: [
            {
              title: "現場限りの締日変更",
              link: "【特例】締日変更",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】現場限りの締日変更に関する申請内容",
              },
            },
          ],
        },
        {
          title: "2. 現場表記を変更する（契約書の変更は発生しない）",
          children: [
            {
              title: "契約書と異なる現場表記での請求書発行",
              link: "【特例】現場表記変更",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】契約書と異なる現場表記での請求書発行に関する申請内容",
              },
            },
          ],
        },
      ],
    },
    {
      title: "2. 請求書の合算・分割を行う",
      children: [
        {
          title: "1. 合算する（同月内で、同一人物での処理を行う）",
          children: [
            {
              title: "未入金以外の合算請求",
              link: "【特例】合算請求_未入金以外",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】未入金以外の合算請求に関する申請内容",
              },
            },
          ],
        },
        {
          title: "2. 合算する（同月内で、複数人物に影響が生じる処理を行う）",
          children: [
            {
              title: "技術者の経費精算（労務費不可）を後任技術者の請求書で請求",
              link: "【特例】経費精算_後任技術者請求",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】技術者の経費精算を後任技術者の請求書で請求する申請内容",
              },
            },
          ],
        },
        {
          title: "3. 分割する（割合変更の発生）",
          children: [
            {
              title: "分割請求",
              link: "【特例】分割請求",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】分割請求に関する申請内容",
              },
            },
          ],
        },
        {
          title: "4. 分割する（費目変更の発生）",
          children: [
            {
              title: "人件費（月額）・残業代・交通費で請求明細を分割",
              link: "【特例】費目変更分割",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】人件費・残業代・交通費での請求明細分割に関する申請内容",
              },
            },
          ],
        },
      ],
    },
    {
      title: "3. その他請求・売上修正",
      children: [
        {
          title: "1. 売上修正",
          children: [
            {
              title: "原因を問わず、勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",
              link: "【特例】未定",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正に関する申請内容",
              },
            },
          ],
        },
        {
          title: "2. 請求書修正",
          children: [
            {
              title: "事由を問わず、契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",
              link: "【特例】未定",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】契約期間内で実働期間と差異が生じたが、請求可能となったものの請求に関する申請内容",
              },
            },
            {
              title: "通信費（WC貸与携帯を除く）の請求（要決裁申請書）",
              link: "【特例】未定",
              details: {
                applicableProject: "特例扱申請・指示書",
                subject: "未定",
                attachments: [
                  {
                    name: "通信費請求書",
                    required: true,
                  },
                  {
                    name: "未定",
                    required: true,
                  },
                ],
                concurrentProposals: [],
                applicationContent: "【ダミーテキスト】通信費（WC貸与携帯を除く）の請求に関する申請内容",
              },
            },
          ],
        },
      ],
    },
  ];