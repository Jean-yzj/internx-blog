# 非工程背景也該會的 5 個 SQL 查詢：實習生 SQL 速成

「我又不是工程師，為什麼要會 SQL？」這是很多商科、行銷、財務背景實習生的第一反應。但你只要去過一間有資料文化的公司就會發現，**主管不會幫你跑數字，他只會丟一句「自己去資料庫撈」**。會不會寫 SQL 直接決定你能拿到的專案大小。本篇用一份電商訂單資料當例子，帶你走過 5 個實習生 90% 工作場景會用到的 SQL 查詢，看完你就能上手。

## 一、為什麼非工程實習生更該會 SQL？

### 1. SQL 是「資料民主化」的最低門檻
你的公司可能用 Tableau、Looker、Metabase，但這些 BI 工具底層全都是 SQL。一旦你想看的維度不在現成 dashboard 裡，你就只能寫 SQL，否則只能等資料工程師排隊三週幫你跑。

### 2. 商科實習生的差異化武器
行銷、業務、PM、財務背景的人通常不會 SQL。當你會寫 SQL，你能做的分析比同職等的人快 5 倍，主管會直接把你當「半個 BA（Business Analyst）」用，能接到的專案層級瞬間提升。

### 3. 學起來其實沒那麼難
SQL 不是程式語言，它更像「結構化的英文問句」。比起 Python、JavaScript，SQL 的語法規模小、邏輯直觀，**一個週末就能達到實用水準**。

## 二、範例資料：電商 orders 與 customers 表

本篇所有範例都基於下列兩張表：

**orders 表（訂單）**

| 欄位 | 型別 | 說明 |
|------|------|------|
| order_id | INT | 訂單編號 |
| customer_id | INT | 顧客編號 |
| order_date | DATE | 下單日期 |
| amount | DECIMAL | 訂單金額 |
| status | VARCHAR | 訂單狀態（paid / refunded / pending） |
| channel | VARCHAR | 來源渠道（meta / google / direct / referral） |

**customers 表（顧客）**

| 欄位 | 型別 | 說明 |
|------|------|------|
| customer_id | INT | 顧客編號 |
| name | VARCHAR | 姓名 |
| city | VARCHAR | 城市 |
| signup_date | DATE | 註冊日期 |

接下來的 5 個查詢，都假設你能存取這兩張表。

## 三、查詢一：SELECT / WHERE 基礎

最基本的「我想看某些資料」：

```sql
SELECT order_id, customer_id, amount, order_date
FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date < '2026-05-01'
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
- `LIMIT` 限制筆數

**新手最大坑**：日期比較不要寫 `order_date = '2026-04'`，要寫成範圍。日期格式各家資料庫略有差異，BigQuery 用 `DATE('2026-04-01')`，MySQL 直接寫字串就行。

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
- `FULL JOIN`：兩邊全部，少用

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

當你要回答「每個渠道帶來多少訂單、多少營收」時：

```sql
SELECT 
  channel,
  COUNT(*) AS order_count,
  SUM(amount) AS total_revenue,
  AVG(amount) AS avg_order_value
FROM orders
WHERE order_date >= '2026-04-01'
  AND order_date < '2026-05-01'
  AND status = 'paid'
GROUP BY channel
ORDER BY total_revenue DESC;
```

**這個查詢在做什麼？**
把訂單按 `channel` 分組，每組算筆數、總和、平均。

**實習生情境**：每月初你被要求做「渠道貢獻表」給行銷會議用，這就是答案。

**HAVING vs WHERE 的差別**：
- `WHERE` 是分組「前」過濾原始資料
- `HAVING` 是分組「後」過濾聚合結果

例如「只看總營收超過 100 萬的渠道」：

```sql
SELECT channel, SUM(amount) AS total_revenue
FROM orders
WHERE status = 'paid'
GROUP BY channel
HAVING SUM(amount) > 1000000;
```

新手常把這兩個搞混，記住「WHERE 在 GROUP BY 之前，HAVING 在 GROUP BY 之後」就不會錯。

## 六、查詢四：CASE WHEN 條件分類

當你要把資料「分群」時，CASE WHEN 是必備：

```sql
SELECT 
  customer_id,
  SUM(amount) AS total_spend,
  CASE 
    WHEN SUM(amount) >= 50000 THEN 'VIP'
    WHEN SUM(amount) >= 10000 THEN 'Regular'
    WHEN SUM(amount) >= 1000 THEN 'New'
    ELSE 'Inactive'
  END AS customer_tier
FROM orders
WHERE status = 'paid'
GROUP BY customer_id;
```

**這個查詢在做什麼？**
把每個顧客的累計消費分成 VIP / Regular / New / Inactive 四級。

**實習生情境**：CRM 團隊要做分群行銷，需要「VIP 名單」、「即將流失名單」。CASE WHEN 是分群的核心。

**進階用法：條件式聚合**
算「Meta 渠道訂單數佔總訂單數的比例」可以這樣寫：

```sql
SELECT 
  SUM(CASE WHEN channel = 'meta' THEN 1 ELSE 0 END) AS meta_orders,
  COUNT(*) AS total_orders,
  ROUND(
    SUM(CASE WHEN channel = 'meta' THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
    2
  ) AS meta_share_pct
FROM orders
WHERE order_date >= '2026-04-01';
```

這招叫「pivot 在 SQL 裡」，是寫月報表必備技巧。

## 七、查詢五：子查詢與 CTE（WITH 語法）

當查詢開始複雜，例如「找出本月消費超過個人平均的顧客」，就要用 CTE：

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
- 容易除錯（你可以單獨跑 `customer_avg` 看結果）

**實習生情境**：分析師要做「本月活躍顧客中，比過去消費更多的人佔比」。一個 CTE 就把問題拆成兩半，比子查詢清楚十倍。

## 八、實習生最常踩的 SQL 坑

### 坑一：忘記 status 過濾
退款（refunded）的訂單還在資料庫裡，但你算營收應該排除。新手最常忘記加 `WHERE status = 'paid'`，導致報表多算一倍。

### 坑二：日期區間「半開區間」忘了
對的寫法是 `>= '2026-04-01' AND < '2026-05-01'`，不是 `BETWEEN '2026-04-01' AND '2026-04-30'`。後者會漏掉 4 月 30 日 23:59 的訂單（如果有時間部分）。

### 坑三：GROUP BY 跟 SELECT 對不上
SELECT 裡有的非聚合欄位，GROUP BY 必須全部包含，否則某些資料庫會報錯，某些會悄悄回傳奇怪的結果。

### 坑四：用 SELECT * 跑大表
資料庫有上千萬筆時，SELECT * 會把整張表掃一遍。**永遠先寫 LIMIT 10 探資料**，確認結構再寫正式 query。

## 九、FAQ：非工程實習生問 SQL 常見問題

**Q1：我該學 MySQL、PostgreSQL、還是 BigQuery？**
語法 90% 共通。你公司用什麼就學什麼。差異主要在日期函數和窗函數寫法。先把「五個查詢」練熟，跨資料庫只是查文件的事。

**Q2：實習生會被要求寫到「窗函數」嗎？**
中段班實習常會用到 `ROW_NUMBER() OVER (PARTITION BY ...)` 這類窗函數。但 5 個基礎查詢練熟先，窗函數可以等遇到再學。

**Q3：寫 SQL 跟用 Excel 樞紐分析有什麼差？**
Excel 適合 1 萬筆以下、即時操作；SQL 適合百萬筆以上、可重現、可排程。**兩個都會的人才是企業最愛**。

**Q4：怎麼練 SQL？**
推薦三個免費資源：SQLBolt（語法基礎）、LeetCode SQL 50 題（題型練習）、Mode Analytics 的 SQL Tutorial（情境練習）。一週兩小時，三週就能上手。

**Q5：面試會被問 SQL 嗎？**
資料相關職位（PM、行銷分析、營運）十之八九會。常見題型：給兩張表，寫 query 算「次月留存率」、「前 10 大客戶」、「漏斗轉換率」。

## 十、結語：SQL 是商科實習生的隱形王牌

當你的同學還在用 Excel 拉 5 萬筆資料拉到電腦當機時，你已經用 30 行 SQL 把答案撈出來。**這個差距會在實習結束時，反映在主管寫給你的推薦信上**。

**三個關鍵原則**：
1. **先把五個查詢練熟**：SELECT/WHERE、JOIN、GROUP BY、CASE WHEN、CTE。這五個夠用 80% 的場景。
2. **永遠先 LIMIT 10**：在大表上探資料時，先看 10 筆確認欄位、再寫正式 query，避免拖垮資料庫。
3. **可讀性比技巧重要**：能用 CTE 拆三段就不要寫一個 100 行的子查詢，未來的你會感謝你。

**行動建議**：到實習通搜尋資料分析、行銷分析、PM 類實習的真實心得，看看這些公司每天用 SQL 撈什麼資料。把你看到的問題拿來當練習題，比看教科書有效十倍。
