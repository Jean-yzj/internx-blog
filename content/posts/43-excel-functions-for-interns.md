---
num: 43
title: "Excel / Google Sheets 進階：實習生最常用的 10 個函數"
intro: "「我會 Excel 啊，可以做樞紐分析。」幾乎是每個實習生面試的標準答案。但進公司後主管丟一份 5,000 筆客戶名單，要你「比對最近一週下單、客單價超過 1,000 元的人」，你才發現自己不會 VLOOKUP，更不知道 SUMIFS。本篇整理實習生最常被要求的 10 個函數（以 2026-05 Excel 365 與 Google Sheets 現況為準），每個都附行銷／財務／HR 場景的實際用法。"
slug: 43-excel-functions-for-interns
series_slug: digital-tools
series_name: "數位工具"
source: https://internx-blog.zeabur.app/posts/43-excel-functions-for-interns
---
# Excel / Google Sheets 進階：實習生最常用的 10 個函數

主管丟給你一份 5,000 筆客戶名單，要你「比對最近一週下單、客單價超過 1,000 元的人」，你才驚覺自己不會 VLOOKUP，也不知道 SUMIFS。本篇整理實習生最常被要求的 10 個函數，每一個都附上 **行銷、財務、HR** 場景的實際用法，幫你在實習第一週就能交出能看的報表。

> 本文以 **Excel 365 / Excel for Web** 與 **Google Sheets** 2026-05 現況為準。Excel 桌面版（含台灣常見的 Office LTSC 2021、2024 永久版、Microsoft 365 訂閱）函數覆蓋度略有差異，會在文中標註。

## 一、為什麼函數比樞紐分析表更重要？

很多人以為「會樞紐分析」就等於會 Excel，但實際上 **樞紐分析是「呈現結果」，函數才是「處理資料」**。原始資料如果沒先用函數清洗，樞紐做出來只會是一堆錯的數字。

### 函數的三個層級

- **基礎層**：SUM、AVERAGE、COUNT。這層不算會 Excel，只算識字。
- **應用層**：VLOOKUP / XLOOKUP、IF / IFS、SUMIFS。實習生最低門檻。
- **進階層**：INDEX-MATCH、FILTER、LAMBDA、TEXTSPLIT、REGEXEXTRACT。寫得出這層的人，可以把別人三天的工作壓縮成一個下午。

本篇主力是「應用層」的 10 個函數，並補一個第十一節介紹 2022–2024 Excel 新加入、台灣公司報表還很少用但已經能用的進階函數。

## 二、查找與比對：VLOOKUP / XLOOKUP / INDEX-MATCH

這是實習生面試最常被問的考點。

### 1. VLOOKUP：經典中的經典

```
=VLOOKUP(查找值, 查找範圍, 回傳的欄位編號, FALSE)
```

**行銷情境**：你有一份「廣告投放成效」與一份「商品 SKU ↔ 品類對照」，用 VLOOKUP 把品類欄位拉過來。

**限制**：VLOOKUP 只能「向右查找」，且查找值必須在範圍第一欄。

### 2. XLOOKUP：VLOOKUP 的繼承者（推薦）

```
=XLOOKUP(查找值, 查找欄, 回傳欄, [找不到時回傳], [比對模式], [搜尋模式])
```

**HR 情境**：要查某員工編號對應的「主管姓名」，員工編號在第 5 欄、主管姓名在第 2 欄，VLOOKUP 做不到，XLOOKUP 一行解決。

**版本注意（2026-05）**：

- Excel 365 / 2021 / 2024 永久版皆支援；Office 2019 與更舊版本不支援。
- Google Sheets 2022 年起全使用者可用。
- 若公司用的是 Office 2016 或 Google Sheets 之外的舊版本，請改用 INDEX-MATCH。

### 3. INDEX-MATCH：傳統 Excel 必備組合

```
=INDEX(回傳範圍, MATCH(查找值, 查找範圍, 0))
```

**財務情境**：建財務模型時常需從「年度假設表」根據「年份 + 科目」雙條件查找。INDEX-MATCH 的彈性遠勝 VLOOKUP，是顧問業、投銀的最愛。在沒有 XLOOKUP 的舊版 Excel，這是唯一解。

## 三、條件加總與計數：SUMIFS / COUNTIFS

### 4. SUMIFS：多條件加總

```
=SUMIFS(加總範圍, 條件範圍1, 條件1, 條件範圍2, 條件2, ...)
```

**行銷情境**：算「2026 年 4 月、廣告平台是 Meta、活動類型是 Conversion」的總花費，一個 SUMIFS 就解決。手動篩選再加總是新手做法。

### 5. COUNTIFS：多條件計數

**HR 情境**：算「年資 3 年以上、職等 P5 以上、女性員工」人數。COUNTIFS 一行比手動篩選快很多，且資料更新會自動重算。

## 四、邏輯判斷：IF / IFS

### 6. IF / IFS：條件分歧

```
=IF(條件, 為真時回傳, 為否時回傳)
=IFS(條件1, 結果1, 條件2, 結果2, ..., TRUE, 預設結果)
```

**業務情境**：要把客戶分群為「VIP / 一般 / 新客」：

```
=IFS(A2>=10000, "VIP", A2>=3000, "一般", TRUE, "新客")
```

> **語法提醒**：IFS 本身沒有內建 ELSE / 預設值，要拿 `TRUE` 作最後一個測試，後面接預設回傳值（如上例 `TRUE, "新客"`）；否則所有條件不符時會回傳 `#N/A`。Excel 365、2019 以上版本、Google Sheets 均支援 IFS。

**常見錯誤**：把 IF 嵌套五六層，可讀性極差。請改用 IFS。

## 五、文字處理：TEXT / LEFT / RIGHT / MID

### 7. TEXT：把數字格式化

```
=TEXT(值, "格式")
```

**行銷情境**：日期欄位是 `2026/05/08`，想顯示成「2026 年 5 月」用在報表標題：

```
=TEXT(A2, "yyyy 年 m 月")
```

把金額顯示成「NT$ 1,234」：

```
=TEXT(B2, "NT$ #,##0")
```

### 8. LEFT / RIGHT / MID：字串切割

**HR 情境**：員工編號是 `TW-2026-0521-MKT`，想抽出年份做樞紐：

```
=MID(A2, 4, 4)
```

抽出部門代碼：

```
=RIGHT(A2, 3)
```

切完之後若要當數字用，再用 `VALUE()` 包一層轉型。

> **2024 新進補充**：Excel 365 已內建 **TEXTSPLIT**，可用分隔符號一次切成多欄。例如 `=TEXTSPLIT(A2, "-")` 會把 `TW-2026-0521-MKT` 直接展開成 4 個欄位，比 LEFT/MID 組合直觀很多。Google Sheets 對應的是 SPLIT 函數（早就有）。

## 六、日期函數：實習生天天會用

### 9. 日期函數家族

最常用的四個：

| 函數 | 用途 | 範例 |
| --- | --- | --- |
| TODAY() | 回傳今天日期 | =TODAY() |
| DATEDIF() | 計算兩日期差距 | =DATEDIF(A2, TODAY(), "Y") |
| EOMONTH() | 月底日期 | =EOMONTH(A2, 0) |
| WEEKDAY() | 星期幾（1-7） | =WEEKDAY(A2, 2) |

> **DATEDIF 注意**：DATEDIF 是 Excel 的「相容性」函數，**至 2026-05 在 Excel 365、Excel 2024、Google Sheets 仍可正常使用**，但 Excel 不會在輸入時自動提示語法（要自己背），且 `"MD"` 參數在某些日期組合會有計算錯誤。算「精確年資」用 `"Y"` 安全；算到「年月日」建議改用 `YEARFRAC` + 手算月份，或拆三個 DATEDIF（`"Y"` / `"YM"` / `"MD"`）。

**HR 情境**：算員工年資，用 DATEDIF。
**財務情境**：算應收帳款帳齡，用 `=TODAY() - 出貨日`。
**行銷情境**：把活動依「星期幾」分組分析點擊率，用 WEEKDAY。

## 七、動態陣列：FILTER 與 ARRAYFORMULA

### 10. FILTER 與 ARRAYFORMULA

```
=FILTER(資料範圍, 條件1, 條件2, ...)
=ARRAYFORMULA(對整欄的運算式)        ← Google Sheets 專用
```

**版本注意（2026-05）**：

- **FILTER**：Excel 365、2021、2024 永久版與 Google Sheets 都有。Office 2019 及更舊版本沒有。
- **ARRAYFORMULA**：**只有 Google Sheets**。Excel 改用「動態陣列自動溢位」（直接寫一條公式，Excel 365 會自己向下溢位到鄰近空格），或改用 BYROW / MAP / LAMBDA。

**行銷情境（Google Sheets）**：從 5,000 筆訂單抓出「金額 > 1000 且地區是台北」的所有訂單，自動更新：

```
=FILTER(A2:E5000, B2:B5000>1000, C2:C5000="台北")
```

**Excel 365 等價寫法**：完全一樣，FILTER 是兩邊共通的函數。

> 小提醒：在 Google Sheets，FILTER / SEQUENCE / QUERY 本身就會回傳陣列，**外面再包 ARRAYFORMULA 是多餘的**。ARRAYFORMULA 真正派上用場是搭配「非陣列原生」的函數（例如 `=ARRAYFORMULA(IF(A2:A>100, "大", "小"))`）。

## 八、樞紐分析表：函數之外的最強搭檔

雖然樞紐不是函數，但每個實習生都該會。三個必懂操作：

### 1. 行 / 列 / 值 / 篩選四個欄位的拖放邏輯

- 行：分組維度，例如「品類」
- 值：要被加總或計數的欄位，例如「銷售額」
- 篩選：頂端的下拉條件，例如「只看 2026 Q1」

### 2. 「值欄位設定」改成百分比

銷售額拖到值欄位後，預設是加總。點開「值欄位設定」可改為「佔總和的百分比」、「佔列總計的百分比」，是行銷做活動成效拆解最實用的功能。

### 3. 樞紐分析表的「重新整理」

原始資料更新後，樞紐不會自動同步。要記得右鍵「重新整理」，這是新手最常忘記、導致報表上數字錯掉的步驟。

## 九、常見錯誤與除錯心法

### 1. `#N/A` 錯誤

99% 是查找函數找不到匹配值。檢查：

- 兩邊是否都有空白字元（用 `TRIM` 清理）
- 數字 vs 文字格式（一個是 "123"，一個是 123，可用 `VALUE` 或 `TEXT` 統一）
- 大小寫差異（VLOOKUP / XLOOKUP 都不分大小寫，但 EXACT、SUMPRODUCT 等情境會在意）

### 2. `#REF!` 錯誤

範圍被刪除或公式拖移到無效區域。改用「絕對參照」`$A$1` 鎖定範圍。

### 3. 公式跑很慢

通常是 VLOOKUP 對整欄 `A:A` 操作。改成具體範圍 `A2:A5000` 速度會快很多；或改用 XLOOKUP + 二分搜尋。

## 十、Excel 2022–2024 新進階函數（履歷加分用）

實習生面試若提到下列函數，主管會眼睛一亮。**僅 Excel 365 訂閱版**支援，Office 2024 永久版部分支援，2019 / 2021 不支援。Google Sheets 則有自己對應的版本。

| Excel 365 函數 | 何時推出 | 用途 | Google Sheets 對應 |
| --- | --- | --- | --- |
| TEXTSPLIT | 2022 | 用分隔符號一次切成多欄 / 多列 | SPLIT |
| CHOOSECOLS / CHOOSEROWS | 2022 | 從陣列挑指定欄 / 列 | INDEX 組合 |
| VSTACK / HSTACK | 2022 | 垂直 / 水平堆疊多個範圍 | `{範圍1; 範圍2}` 語法 |
| LAMBDA | 2021 | 自訂可重用函數 | LAMBDA（2022 起支援） |
| BYROW / BYCOL / MAP | 2022 | 對每列 / 每欄套 LAMBDA | BYROW / BYCOL / MAP |
| REGEXEXTRACT / REGEXTEST / REGEXREPLACE | 2024 | 用正則處理文字 | REGEXEXTRACT / REGEXMATCH / REGEXREPLACE（早就有） |
| GROUPBY / PIVOTBY | 2024 | 一條公式做樞紐分析 | QUERY 函數 |

**實習生用得到的場景**：

- 行銷：用 `REGEXEXTRACT` 從 UTM 字串裡撈 `utm_campaign`。
- 業務：用 `GROUPBY(A:A, B:B, SUM)` 一行做出「依客戶加總業績」表，省下樞紐。
- HR：用 `TEXTSPLIT(A2, "-")` 把員工編號的 4 段一次切開。

## 十一、Excel vs Google Sheets：台灣公司怎麼選

實際看你進的公司：

- **Google Sheets 主流**：新創、行銷代理商、跨境電商、Web3、SaaS、媒體業（如 KKday、Dcard、CakeResume、91APP 內部協作）、外商駐台辦公室（Google、Meta、AWS Taiwan 等）。
- **Excel 主流**：金融業（銀行、券商、投信、會計師事務所如 KPMG / Deloitte / PwC / EY 台灣所）、製造業（台積電、聯發科、鴻海、廣達等中小型總部報表）、傳產、會計與審計、政府機關。
- **兩個並用**：消費品牌、零售、品牌電商（兩邊混用，Sheets 跑日常協作、Excel 跑月底正式報表）。

90% 函數共通；只有 ARRAYFORMULA、QUERY、IMPORTRANGE、GOOGLEFINANCE 等 Google 限定函數，以及 GROUPBY / PIVOTBY / Power Query 等 Excel 365 限定功能會卡住。**履歷上兩邊都會用是最大公約數**。

## 十二、FAQ：實習生問函數常見問題

**Q1：我都用 VLOOKUP，需要改學 XLOOKUP 嗎？**
建議改。XLOOKUP 寫法更直觀、支援雙向查找、可指定找不到時的回傳值。新公司範本越來越多用 XLOOKUP；只有當公司還在 Office 2019 / 2016 時才得用回 INDEX-MATCH。

**Q2：函數寫了一堆，看不懂自己在寫什麼怎麼辦？**
拆成「輔助欄」。先用 D 欄算查找鍵、E 欄做比對、F 欄做最終運算。**讀得懂的公式比一行寫到底更專業**。

**Q3：要學 VBA 或 Apps Script 嗎？**
實習階段先把上述 10 個函數加第十節三個新函數練熟。等你發現「同樣的步驟每週重做一次」時，再學 Apps Script（Google Sheets）或 Office Scripts（Excel for Web）。VBA 在台灣金融與傳產仍有大量現存程式碼，但新人從 VBA 入門通常會卡住，建議先 Python（pandas）或 Apps Script。

**Q4：Excel 跟 Google Sheets 哪個好？**
看公司。新創、行銷、商務職多用 Google Sheets；金融、會計、製造、傳產多用 Excel。兩個都會用是最大公約數，函數 90% 共通。

**Q5：在台灣怎麼合法取得 Excel？**
- 大學生：多數大學（台大、政大、清大、交大、成大、北大、北科、台科、輔大等）提供校園 Microsoft 365 A1 / A3 帳號，在學期間免費含 Word / Excel / PowerPoint 與 1TB OneDrive。畢業後失效。
- 自費：Microsoft 365 個人版 NT$ 2,190 / 年；家用版 NT$ 3,090 / 年最多 6 人共用。
- Office 2024 永久版（家用版）NT$ 4,690，無雲端、無 Copilot、新函數覆蓋不全。

## 十三、結語：函數是實習生最被低估的硬實力

很多實習生把時間花在「PowerPoint 設計」「Notion 美化」，卻忽略 Excel / Sheets 函數。但企業真正願意付薪水的，是「能把 5,000 筆資料變成 1 頁洞察」的能力，靠的就是這些函數。

**三個關鍵原則**：

1. **先學會 10 個就夠**：不要一次想學 50 個，把這 10 個練到反射動作就贏 80% 的同學。
2. **每個函數都有「實際情境」才記得住**：硬背語法會忘，但「比對 SKU 品類」「分群 VIP 客戶」這種場景會記一輩子。
3. **會寫不等於寫得好**：可讀性、效能、維護性，是讓你的報表被主管採信的關鍵。

**行動建議**：到「實習通」搜尋目標產業與職位，看實習心得中提到「每天用 Excel / Sheets 處理什麼資料」，再回頭把對應函數練一遍。下週進公司時，你的報表會讓主管多看你兩眼。
