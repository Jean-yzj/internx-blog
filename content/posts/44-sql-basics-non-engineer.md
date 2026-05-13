---
num: 44
title: "非工程背景也該會的 5 個 SQL 查詢：實習生 SQL 速成"
intro: "「我又不是工程師，為什麼要會 SQL？」這是很多商科、行銷、財務背景實習生的第一反應。但你只要去過一間有資料文化的公司就會發現，**主管不會幫你跑數字，他只會丟一句「自己去資料庫撈」**。會不會寫 SQL 直接決定你能拿到的專案大小。本篇用一份電商訂單資料當例子，帶你走過 5 個實習生 90% 工作場景會用到的 SQL 查詢，看完你就能上手。"
slug: 44-sql-basics-non-engineer
series_slug: digital-tools
series_name: "數位工具"
source: https://internx-blog.zeabur.app/posts/44-sql-basics-non-engineer
---
# 非工程背景也該會的 5 個 SQL 查詢：實習生 SQL 速成

「我又不是工程師，為什麼要會 SQL？」這是很多商科、行銷、財務背景實習生的第一反應。但你只要去過一間有資料文化的公司就會發現，**主管不會幫你跑數字，他只會丟一句「自己去資料庫撈」**。會不會寫 SQL 直接決定你能拿到的專案大小。本篇用一份電商訂單資料當例子，帶你走過 5 個實習生 90% 工作場景會用到的 SQL 查詢，看完你就能上手。

## 一、為什麼非工程實習生更該會 SQL？

### 1. SQL 是「資料民主化」的最低門檻

你的公司可能用 Tableau、Looker Studio、Metabase，但這些 BI 工具底層幾乎全都是 SQL。一旦你想看的維度不在現成 dashboard 裡，你就只能寫 SQL，否則只能等資料工程師排隊三週幫你跑。最近幾年雖然 AI SQL 助手（如 ChatGPT、Claude、Looker 內建的 Gemini）能幫你產出第一版 query，但**讀懂、除錯、加條件還是要靠你自己**，這部分 AI 取代不了。

### 2. 商科實習生的差異化武器

行銷、業務、PM、財務背景的同學通常不會 SQL。當你會寫 SQL，你能做的分析會比只會用試算表的同職等夥伴快上不少，主管也比較容易把你當「半個 BA（Business Analyst）」用，能接到的專案層級也會跟著提升。在台灣，蝦皮、foodpanda、Dcard、KKday 這類資料導向的公司，PM 與行銷實習職缺的 JD 八成會寫「SQL 加分」或「具備 SQL 基礎」。

### 3. 學起來其實沒那麼難

SQL 不是程式語言，它更像「結構化的英文問句」。比起 Python、JavaScript，SQL 的語法規模小、邏輯直觀，**多數人用幾個週末練熟基本查詢就能應付實習上手場景**。

## 二、範例資料：電商 orders 與 customers 表

本篇所有範例都基於下列兩張表：

**orders 表（訂單）**

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| order\_id | INT | 訂單編號 |
| customer\_id | INT | 顧客編號 |
| order\_date | DATE | 下單日期 |
| amount | DECIMAL | 訂單金額 |
| status | VARCHAR | 訂單狀態（paid / refunded / pending） |
| channel | VARCHAR | 來源管道（meta / google / direct / referral） |

**customers 表（顧客）**

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| customer\_id | INT | 顧客編號 |
| name | VARCHAR | 姓名 |
| city | VARCHAR | 城市 |
| signup\_date | DATE | 註冊日期 |

接下來的 5 個查詢，都假設你能存取這兩張表。範例語法以**標準 SQL** 為主（在 PostgreSQL、MySQL、BigQuery 大致通用），個別方言差異會額外註記。

## 三、查詢一：SELECT / WHERE 基礎

最基本的「我想看某些資料」：

```sql
SELECT order_id, customer_id, amount, order_date
FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01'
  AND status = 'paid'
ORDER BY amount DESC
LIMIT 100;
```

**這個查詢在做什麼？**
撈出 2026 年 4 月「已付款」的訂單，按金額由高到低排序，只取前 100 筆。

**實習生情境**：行銷 PM 想看「這個月最大筆的 100 筆訂單來自哪些客戶？」這就是月初最常被問的問題。

**關鍵 keyword**：

- `WHERE` 過濾條件
- `AND` / `OR` 組合條件
- `ORDER BY` 排序（`DESC` 降冪 / `ASC` 升冪）
- `LIMIT` 限制筆數（SQL Server / Azure 用 `TOP`，Oracle 用 `FETCH FIRST n ROWS ONLY`）

**新手最大坑**：日期比較不要寫 `order_date = '2026-04'`，要用範圍寫法。各家資料庫的字串轉日期略有差異——PostgreSQL、MySQL、BigQuery 都接受 `'2026-04-01'` 這種 ISO 字串；想顯式轉型則用 `DATE '2026-04-01'`（標準 SQL）或 `DATE('2026-04-01')`（BigQuery、MySQL 也支援）。

## 四、查詢二：JOIN 串接兩張表

行銷最常用的場景：「我想知道每張訂單對應的顧客來自哪個城市」。

```sql
SELECT
  o.order_id,
  o.amount,
  c.name,
  c.city
FROM orders AS o
INNER JOIN customers AS c
  ON o.customer_id = c.customer_id
WHERE o.order_date >= '2026-04-01'
  AND o.status = 'paid';
```

**這個查詢在做什麼？**
把訂單資料「拼上」顧客資料，靠 `customer_id` 當「鑰匙」配對。

**JOIN 的四種類型**：

- `INNER JOIN`：只保留兩邊都有的（最常用）
- `LEFT JOIN`：保留左表全部，右表沒對到的填 NULL
- `RIGHT JOIN`：反之，少用
- `FULL OUTER JOIN`：兩邊全部，少用（MySQL 8.0 之前不支援，要用 UNION 模擬）

**實習生情境**：你發現有 50 個訂單在 customers 表中找不到對應顧客（可能是資料不乾淨）。用 `LEFT JOIN` 加 `WHERE c.customer_id IS NULL` 就能找出問題：

```sql
SELECT o.order_id, o.customer_id
FROM orders AS o
LEFT JOIN customers AS c
  ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;
```

這種「資料品質檢查」是實習生快速被信任的方法。

## 五、查詢三：GROUP BY 聚合分析

當你要回答「每個管道帶來多少訂單、多少營收」時：

```sql
SELECT
  channel,
  COUNT(*)    AS order_count,
  SUM(amount) AS total_revenue,
  AVG(amount) AS avg_order_value
FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01'
  AND status = 'paid'
GROUP BY channel
ORDER BY total_revenue DESC;
```

**這個查詢在做什麼？**
把訂單按 `channel` 分組，每組算筆數、總和、平均。

**實習生情境**：每月初你被要求做「管道貢獻表」給行銷會議用——例如比較 Meta 廣告、Google Ads、Direct、聯盟行銷帶進來的營收差距——這就是答案。

**HAVING vs WHERE 的差別**：

- `WHERE` 是分組「前」過濾原始資料（不能用聚合函數）
- `HAVING` 是分組「後」過濾聚合結果（可以用 `SUM()`、`COUNT()` 等）

例如「只看總營收超過 100 萬的管道」：

```sql
SELECT channel, SUM(amount) AS total_revenue
FROM orders
WHERE status = 'paid'
GROUP BY channel
HAVING SUM(amount) > 1000000;
```

新手常把這兩個搞混，記住執行順序「`FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY`」就不會錯。

## 六、查詢四：CASE WHEN 條件分類

當你要把資料「分群」時，CASE WHEN 是必備：

```sql
SELECT
  customer_id,
  SUM(amount) AS total_spend,
  CASE
    WHEN SUM(amount) >= 50000 THEN 'VIP'
    WHEN SUM(amount) >= 10000 THEN 'Regular'
    WHEN SUM(amount) >=  1000 THEN 'New'
    ELSE 'Inactive'
  END AS customer_tier
FROM orders
WHERE status = 'paid'
GROUP BY customer_id;
```

**這個查詢在做什麼？**
把每個顧客的累計消費分成 VIP / Regular / New / Inactive 四級。注意 `CASE` 由上往下評估，第一個符合的條件就會回傳，所以**門檻要由高到低排**。

**實習生情境**：CRM 團隊要做分群行銷，需要「VIP 名單」、「即將流失名單」。CASE WHEN 是分群的核心。

**進階用法：條件式聚合**
算「Meta 管道訂單數佔總訂單數的比例」可以這樣寫：

```sql
SELECT
  SUM(CASE WHEN channel = 'meta' THEN 1 ELSE 0 END) AS meta_orders,
  COUNT(*) AS total_orders,
  ROUND(
    SUM(CASE WHEN channel = 'meta' THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
    2
  ) AS meta_share_pct
FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date <  '2026-05-01';
```

這招叫「在 SQL 裡做 pivot」，是寫月報表必備技巧。PostgreSQL / BigQuery 也可以用更精簡的 `COUNT(*) FILTER (WHERE channel = 'meta')`，但 `CASE WHEN` 跨資料庫都通用，先學這個。

## 七、查詢五：子查詢與 CTE（WITH 語法）

當查詢開始複雜，例如「找出本月消費超過個人歷史平均的顧客」，就要用 CTE：

```sql
WITH customer_avg AS (
  SELECT
    customer_id,
    AVG(amount) AS avg_amount
  FROM orders
  WHERE status = 'paid'
  GROUP BY customer_id
),
this_month AS (
  SELECT *
  FROM orders
  WHERE order_date >= '2026-04-01'
    AND order_date <  '2026-05-01'
    AND status = 'paid'
)
SELECT
  t.customer_id,
  t.amount,
  c.avg_amount
FROM this_month AS t
INNER JOIN customer_avg AS c
  ON t.customer_id = c.customer_id
WHERE t.amount > c.avg_amount;
```

**為什麼用 CTE 而不是子查詢？**

- 可讀性高（像在說故事，一段一段）
- 可重用（同一個 CTE 在後面可以多次引用）
- 容易除錯（你可以把 `customer_avg` 單獨複製出來跑，看中間結果對不對）

**實習生情境**：分析師要做「本月活躍顧客中，比過去消費更多的人佔比」。一個 CTE 就把問題拆成兩半，比子查詢清楚十倍。

> 註：MySQL 從 8.0、PostgreSQL 從 8.4、BigQuery、SQL Server 2005 之後都支援 CTE。如果你公司還在用 MySQL 5.7 以前，就只能用子查詢硬寫。

## 八、實習生最常踩的 SQL 坑

### 坑一：忘記 status 過濾

退款（refunded）的訂單還在資料庫裡，但你算營收應該排除。新手最常忘記加 `WHERE status = 'paid'`，導致報表虛胖。

### 坑二：日期區間沒處理時間部分

對 `DATE` 型別欄位，`BETWEEN '2026-04-01' AND '2026-04-30'` 是安全的；但對 `DATETIME` / `TIMESTAMP` 欄位，`BETWEEN` 會漏掉 4 月 30 日 00:00:01 之後的訂單。**統一用半開區間 `>= '2026-04-01' AND < '2026-05-01'` 最不會出包**——換型別、換月份、換資料庫都一樣對。

### 坑三：GROUP BY 跟 SELECT 對不上

`SELECT` 裡有的「非聚合欄位」，`GROUP BY` 必須全部包含。PostgreSQL 會直接報錯；MySQL 在預設嚴格模式下也會報錯，舊版（或關閉 `ONLY_FULL_GROUP_BY`）則會悄悄回傳奇怪的結果，更危險。

### 坑四：用 SELECT \* 跑大表

資料庫有上千萬筆時，`SELECT *` 會把整張表掃一遍，BigQuery 還會直接扣你的查詢費用。**永遠先寫 `LIMIT 10` 探資料**，確認結構再寫正式 query。

## 九、FAQ：非工程實習生問 SQL 常見問題

**Q1：我該學 MySQL、PostgreSQL、還是 BigQuery？**
語法 90% 共通，先別糾結。你公司用什麼就學什麼。差異主要在三塊：日期函數（`DATE_TRUNC` vs `DATE_FORMAT`）、字串拼接（`||` vs `CONCAT`）、視窗函數細節。台灣常見組合是「新創/SaaS 多用 PostgreSQL 或 BigQuery、老牌電商 / 傳產比較多 MySQL / SQL Server」。先把「五個查詢」練熟，跨資料庫只是查文件的事。

**Q2：實習生會被要求寫到「視窗函數（Window Function）」嗎？**
中段班實習常會用到 `ROW_NUMBER() OVER (PARTITION BY ...)` 這類視窗函數，做「每個顧客的第一筆訂單」、「次月留存」最常用。但 5 個基礎查詢練熟先，視窗函數遇到再學。

**Q3：寫 SQL 跟用 Excel 樞紐分析有什麼差？**
Excel 適合 1 萬筆以下、即時操作；SQL 適合百萬筆以上、可重現、可排程。**兩個都會的人才是企業最愛**。

**Q4：怎麼練 SQL？**
推薦三個免費或低成本的資源：

- **SQLBolt**（sqlbolt.com）：互動式語法基礎，18 課，週末就刷得完；缺點是不涵蓋視窗函數。
- **LeetCode SQL 50**：題型練習，求職前必刷一輪。
- **ThoughtSpot SQL Tutorial**（前身為 Mode Analytics SQL Tutorial，2023 年 Mode 被 ThoughtSpot 以 2 億美元收購，現整合進 ThoughtSpot Analyst Studio；舊網址 `mode.com/sql-tutorial/` 目前仍可瀏覽）：情境練習，從零到中階都有。

一週兩小時，三週就能上手。想跟 AI 一起練的話，把這些練習題丟給 ChatGPT 或 Claude 當「對答案的助教」，但**自己一定要先動手寫過一遍**，否則學不會除錯。

**Q5：面試會被問 SQL 嗎？**
資料相關職位（PM、行銷分析、營運分析）十之八九會。台灣常見題型：給兩張表，寫 query 算「次月留存率」、「前 10 大客戶」、「漏斗轉換率」、「月活躍用戶（MAU）」。蝦皮、foodpanda、KKday、Dcard 的數據職缺通常還會加一題 window function。

## 十、結語：SQL 是商科實習生的隱形王牌

當你的同學還在用 Excel 拉 5 萬筆資料拉到電腦當機時，你已經用 30 行 SQL 把答案撈出來。**這個差距累積下來，往往會反映在主管最後願意為你寫的推薦語、以及交給你的專案層級上**。

**三個關鍵原則**：

1. **先把五個查詢練熟**：SELECT/WHERE、JOIN、GROUP BY、CASE WHEN、CTE。這五個夠用 80% 的場景。
2. **永遠先 `LIMIT 10`**：在大表上探資料時，先看 10 筆確認欄位、再寫正式 query，避免拖垮資料庫或產生天價 BigQuery 查詢費。
3. **可讀性比技巧重要**：能用 CTE 拆三段就不要寫一個 100 行的子查詢，未來的你會感謝你。

**行動建議**：到實習通搜尋資料分析、行銷分析、PM 類實習的真實心得，看看蝦皮、foodpanda、Dcard、KKday、KryptoGO 這類公司每天用 SQL 撈什麼資料。把你看到的問題拿來當練習題，比看教科書有效十倍。
