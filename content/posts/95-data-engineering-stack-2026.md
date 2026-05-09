# 資料工程 / 數據分析實習生 2026 技術圖

「我喜歡看資料、不太喜歡做前端，可以走資料這條路嗎？」「資料分析師、資料工程師、資料科學家差在哪？」「商管系、統計系、資工系都在搶這條路，我該學什麼才有差異化？」如果你正在思考這些問題，這篇文章是寫給你的。本篇用 2026 年仍主流的工具，幫你畫一張「從入門到能投實習」的資料技術地圖，讓你不會學到一半才發現工具已經退流行。

## 一、資料工程 / 資料分析 / 資料科學差在哪？

這三個職位常被學生混為一談，但實習面試會明確分流。

### 1. 資料分析師（Data Analyst）
- 主要工作：用 SQL 撈數字、做 dashboard、回答商業問題。
- 關鍵能力：SQL、Excel / Google Sheets、BI 工具（Tableau、Looker Studio、Power BI）。
- 常見背景：商管、統計、財金、資工。
- 適合的人：愛回答「為什麼這個數字下降」「哪個渠道最賺錢」這類商業問題。

### 2. 資料工程師（Data Engineer）
- 主要工作：建資料 pipeline、把分散在各系統的資料搬到資料倉儲、確保資料正確與及時。
- 關鍵能力：Python、SQL、ETL / ELT 工具、資料倉儲、雲端服務。
- 常見背景：資工、資管。
- 適合的人：覺得「寫程式比寫報告有趣」、喜歡解決系統問題的人。

### 3. 資料科學家 / ML 工程師
- 主要工作：建模型、跑實驗、做預測、A/B test 設計。
- 關鍵能力：Python、統計、機器學習、PyTorch / Hugging Face、部分 SQL。
- 常見背景：統計、資工、應數、AI 相關研究所。
- 適合的人：對演算法、實驗設計有興趣，且能耐住性子調參。

**實習階段你不必確定終點**，但你要知道每條路的「最低工具門檻」是什麼，才不會浪費時間學錯方向。

## 二、不管哪一條：Python 與 SQL 都無可取代

如果只能學兩樣，學 Python 與 SQL。原因很簡單：**這兩個是過去十年沒被取代過、未來五年也不會被取代的工具**。

### 1. Python：資料生態系的母語
- pandas / NumPy / scikit-learn 都建立在 Python 上。
- 雲端 SDK（GCP、AWS、Azure）都有 Python client。
- LLM 與 AI 框架（Hugging Face、LangChain、LlamaIndex）都優先支援 Python。

### 2. SQL：資料世界的英文
- 任何資料倉儲（BigQuery、Snowflake、Databricks、ClickHouse）都用 SQL。
- 任何 BI 工具底層都是 SQL。
- dbt（資料 transform 主流工具）整個邏輯就是寫 SQL。

實習面試只要是資料相關職缺，**90% 會考一道 SQL 題**。練熟 `SELECT / WHERE / JOIN / GROUP BY / CASE WHEN / CTE` 與窗函數（`ROW_NUMBER OVER PARTITION BY`），就能應付多數場景。

### 3. 中段提醒
這份技術 stack 變動快，每年至少自查一次。雲端服務（BigQuery、Snowflake、Databricks）的功能與計價變動頻繁，dbt、Airflow 等開源工具也在持續更新；學工具時請以官方文件為主。

## 三、ETL / ELT Pipeline：Airflow vs Dagster vs Prefect

當你的公司每天要把幾十個來源的資料搬到資料倉儲，就需要 pipeline 工具。

### 1. Apache Airflow
- 最老牌、社群最大，幾乎是傳統科技公司的預設。
- 用 Python 寫 DAG（有向無環圖），每個節點是一個 task。
- 缺點：學習曲線較陡、本地開發體驗較弱。

### 2. Dagster
- 2020 年後興起，主打「資料感知」的 pipeline。
- 開發者體驗好，本地除錯更直覺。
- 適合新團隊、新專案。

### 3. Prefect
- 介於 Airflow 與 Dagster 之間，強調 Python 原生語法。
- 部分團隊作為 Airflow 的輕量替代。

**實習生怎麼選？**
看你想去的公司用什麼。台積、聯發科、傳統金融多半 Airflow；新創 SaaS、AI 公司常見 Dagster 或 Prefect。先學 Airflow 的「DAG / task / scheduler」概念，跨工具其實大同小異。

## 四、Transform 主流：dbt 為什麼變成標配？

過去十年，資料團隊用 SQL 在資料倉儲裡做 transform 都是「大型 stored procedure」「散落的 SQL script」。直到 dbt 出現。

### 1. dbt 解決了什麼？
- **版本控制**：所有 transform 邏輯放在 git，跟程式碼一樣 PR review。
- **依賴管理**：dbt 自動算出 model 的 DAG，知道誰先誰後。
- **測試**：每個 model 可以加 schema test、null test、unique test。
- **文件**：自動生成資料 catalog 與 lineage 圖。

### 2. dbt 模型範例

```sql
-- models/marts/daily_revenue.sql
{{ config(materialized='table') }}

with paid_orders as (
  select
    order_id,
    customer_id,
    channel,
    amount,
    order_date
  from {{ ref('stg_orders') }}
  where status = 'paid'
),

daily_summary as (
  select
    order_date,
    channel,
    count(*)            as order_count,
    sum(amount)         as total_revenue,
    avg(amount)         as avg_order_value
  from paid_orders
  group by 1, 2
)

select * from daily_summary
order by order_date desc, total_revenue desc
```

這份 model：
- `{{ ref('stg_orders') }}` 表示依賴 `stg_orders` model。
- dbt 自動算依賴順序、自動 build。
- 可以加 `tests` 確保 `total_revenue` 不為負。

**實習面試會考嗎？** dbt 不是必考，但如果你能講出「我用 dbt 在學校 side project 把 raw data 切成 staging / marts 三層」，面試官會把你從一堆只會寫 select 的學生中區分出來。

## 五、資料倉儲：BigQuery、Snowflake、Databricks、ClickHouse、DuckDB

實習生不可能全部都摸過，但你要知道**每個工具的定位**。

| 工具 | 雲端 / 自架 | 適用場景 | 實習常見度 |
|------|-------------|----------|-----------|
| BigQuery | GCP 託管 | 大型分析、無伺服器 | 高（GCP 系公司必備） |
| Snowflake | 跨雲 | 企業級數據倉儲 | 高（外商常見） |
| Databricks | 跨雲 | Spark + ML 大型 pipeline | 中高 |
| ClickHouse | 自架 / 託管 | 高效能即席查詢 | 中（產品分析常見） |
| DuckDB | 嵌入式 | 本機 / 筆電上跑 GB 等級資料 | 中（個人作品集神器） |

### 1. BigQuery 為什麼是入門首選？
- 有免費額度（每月查詢 1 TB），足以做完作品集。
- 介面友善、不用自架。
- Looker Studio（同為 GCP）可以無痛接上。

### 2. DuckDB 為什麼很適合實習生練手？
- 不用裝 server，直接在 Python 或 CLI 用。
- 可以直接讀 CSV、Parquet、JSON。
- 速度比 pandas 快、語法是 SQL，學一份賺兩份。

## 六、資料分析 / 資料工程職位差異

| 維度 | 資料分析師（DA） | 資料工程師（DE） |
|------|-----------------|------------------|
| 主要產出 | Dashboard、報表、商業洞察 | Pipeline、資料模型、資料品質 |
| 主要語言 | SQL（90%）、Python（30%） | Python（70%）、SQL（80%） |
| 必備工具 | BI（Tableau / Looker / Power BI） | Airflow / Dagster、dbt、雲端 |
| 常見對接對象 | 行銷、產品、營運主管 | 後端工程師、ML 工程師 |
| 實習門檻 | 中（懂 SQL + 商業 sense） | 中高（要懂 pipeline + 雲端） |
| 月薪起跳（實習生參考） | NT$30,000 起 | NT$35,000 起 |
| 適合背景 | 商管、統計、財金、資管 | 資工、資管 |

**注意**：薪資隨公司、地區、學經歷波動很大，這只是「實習生市場常見區間」的觀察值，不是絕對承諾。

## 七、視覺化：Looker Studio、Tableau、Power BI

### 1. Looker Studio
- Google 出品，免費、上手快、可直接接 BigQuery 與 Google Sheets。
- 學生作品集首選。
- 缺點：複雜場景可能撞到效能極限。

### 2. Tableau
- 業界主流之一，外商與顧問業大量使用。
- 學生版授權有提供。
- 學起來最大效益：在履歷寫「能用 Tableau」會直接被一批職缺納入考慮。

### 3. Power BI
- 微軟出品，與 Excel、Azure、Office 365 整合好。
- 在台灣金融、傳統製造業、外商多數會用。
- 學起來的好處：商管系實習常見題目就是 Power BI dashboard。

實習生策略：**先學 Looker Studio（免費）打底，再依目標公司決定學 Tableau 還是 Power BI**。

## 八、Notebook 與探索性分析（EDA）

### 1. Jupyter
- 開源、最廣泛採用。
- VS Code、Cursor 都內建 Jupyter 支援。
- 本機跑、自由度最高。

### 2. Google Colab
- 免費 GPU、不用裝環境。
- 學生實作 ML 與 LLM 練習首選。

### 3. Hex、Deepnote
- 雲端 collaborative notebook，可拖拉建表、自動產生 dashboard。
- 部分新創資料團隊已採用。

實習生建議：**Colab 學 ML，Jupyter 在本機練 pandas 與 SQL**，遇到 Hex / Deepnote 再學就好。

## 九、Pandas 資料清理範例

實習常見場景：你拿到一份 CSV，要清欄位、處理缺值、做欄位轉換、輸出成 Parquet 給後段 pipeline。

```python
import pandas as pd

# 1. 讀 CSV，指定型別避免自動猜錯
df = pd.read_csv(
    "raw_orders.csv",
    parse_dates=["order_date"],
    dtype={"customer_id": "string", "status": "category"},
)

# 2. 標準化欄位名稱
df.columns = [c.strip().lower().replace(" ", "_") for c in df.columns]

# 3. 處理缺值與異常
df = df[df["amount"].notna()]
df = df[df["amount"] > 0]
df["channel"] = df["channel"].fillna("unknown")

# 4. 衍生欄位
df["order_month"] = df["order_date"].dt.to_period("M").astype(str)
df["amount_tier"] = pd.cut(
    df["amount"],
    bins=[0, 1000, 10000, 50000, float("inf")],
    labels=["small", "medium", "large", "vip"],
)

# 5. 過濾近 12 個月
cutoff = pd.Timestamp.today() - pd.DateOffset(months=12)
df = df[df["order_date"] >= cutoff]

# 6. 輸出 Parquet 給後段 pipeline
df.to_parquet("clean_orders.parquet", index=False)

print(df.head())
print(df.shape)
```

這段 50 行程式碼涵蓋了 80% 實習生會被丟到的「資料清理」任務。寫熟後，你會發現 pandas 的「鏈式語法」用起來很像 SQL：先 filter、再 select、再 mutate、最後 export。

## 十、串流：Kafka 與 Flink（進階）

實習生不一定碰得到，但要知道：

### 1. Apache Kafka
- 訊息佇列的業界標準。
- 用於「即時資料管道」：使用者點擊事件、IoT 訊號、訂單事件。

### 2. Apache Flink
- 串流運算引擎，處理 Kafka 等來源的即時資料。
- 比 Spark Streaming 更專注於 sub-second latency。

如果你進的是金融、廣告、電商即時行為分析團隊，會碰到 Kafka。一般實習生先把批次 pipeline 學好，串流可以等遇到再深入。

## 十一、ML 入門：pandas → scikit-learn → PyTorch

走資料科學或 ML 工程路線的學生，順序大致是：

1. **pandas、NumPy**：資料處理打底。
2. **scikit-learn**：傳統 ML（線性回歸、決策樹、隨機森林、XGBoost）。
3. **PyTorch**：深度學習主流框架，TensorFlow 仍存在但市佔下滑。
4. **Hugging Face Transformers**：把預訓練模型拿來 fine-tune 或推論。

LLM 時代別忘了：
- **Embedding model**：OpenAI text-embedding-3、Voyage、Cohere、開源 sentence-transformers。
- **向量資料庫**：Pinecone、Qdrant、Weaviate、Chroma、pgvector。
- **RAG 流程**：文件切割 → embedding → 向量 DB → 查詢時檢索 → 拼成 prompt → LLM 生成。

實習生作品集如果能寫一篇「我用 Hugging Face + pgvector 做了一個校園 FAQ 問答系統」，會直接擠進面試官印象前 10%。

## 十二、雲端：GCP、AWS、Azure 怎麼挑？

### 1. GCP（Google Cloud）
- 核心：BigQuery、Cloud Run、GCS、Vertex AI。
- 強項：分析與 ML。
- 在台灣科技業（Dcard、Pinkoi、KKBOX 等）滲透率高。

### 2. AWS
- 核心：S3、Redshift、Athena、Glue、Lambda、EMR。
- 強項：覆蓋面最廣，企業客戶最多。
- 在外商、金融業普遍。

### 3. Azure
- 核心：Synapse、Data Factory、Databricks（與微軟深度整合）。
- 強項：與 Office、Power BI 整合好。
- 在傳統金融、製造業多。

實習生策略：**先學 GCP（BigQuery 免費好用） → 之後依公司加學 AWS → Azure 視機會學**。

## 十三、實習生最常踩的三個坑

### 坑一：學了一堆工具，但沒有作品
履歷寫「會 Airflow、Spark、Kafka、dbt、Snowflake」但 GitHub 是空的，HR 一律當作沒看見。**做一個小 pipeline、一份小 dashboard，比履歷上加 5 個工具名字有用**。

### 坑二：只會 BI 拖拉、不會寫 SQL
Tableau、Power BI 拖拉介面看起來很高效，但**底層原理不懂的人會在面試裸考時當場露餡**。SQL 是基本功，沒得跳過。

### 坑三：忽略商業 sense
資料職位（特別是 DA、PM）面試常問：「這個指標為什麼會跌？你會看哪些次指標？」這不是純技術題，是「資料 + 商業」的綜合題。**多看公司財報、產品 PRD、行銷案例**，比多刷一本 SQL 教科書值錢。

## 十四、FAQ：學生最常問的問題

**Q1：商管 / 統計系適合走這條路嗎？**
非常適合。資料分析師、資料科學家職缺中，商管 + 統計背景的學生反而比純資工有優勢，因為**「能聽懂商業問題、再翻成 SQL / 模型」是核心稀缺能力**。資工同學寫得快，商管同學問得對，兩個能搭起來最強。

**Q2：不會程式只會 SQL 行嗎？**
DA 入門可以，純 SQL + Excel + Looker Studio 確實能找到實習。但中長期你還是要學 Python，因為自動化、API、ML 都離不開。**你可以從 SQL 入門，三個月後加學 pandas，半年後加學 scikit-learn**。

**Q3：資料工程 vs 軟體工程哪個好找？**
2026 年台灣資料相關職缺仍在擴張，但**競爭者也快速增加**。如果你只會初階 SQL + pandas，難度跟 SWE 入門差不多；但如果你能加上 dbt + Airflow + 雲端 SDK，相對於同年級對手能直接拉開距離。

**Q4：要不要修統計學、機率論？**
要。如果你目標是 DS / ML，統計（特別是假設檢定、回歸、A/B test 設計）是面試會問的。即使是 DA，懂 confidence interval 與 p-value 會讓你的分析比同事多一個量級的可信度。

**Q5：有沒有推薦的入門 side project？**
三個常見題型：
1. **公開資料集 + Looker Studio dashboard**（例如政府開放資料、電競賽事資料）。
2. **API 抓資料 → DuckDB → 分析**（例如 PTT、Reddit、Twitter / X 公開 API）。
3. **個人習慣追蹤 + dbt 模型**（自己每天記錄、做時間序列分析）。

**Q6：實習薪資大概多少？**
台灣資料相關實習生月薪通常從 NT$30,000 起，外商與大型科技公司可達 NT$45,000 以上。但**會 SQL 的學生薪資中位數普遍高於不會 SQL 的同類職位**，這是進場門檻最划算的投資。

## 十五、結語：選一條你看得懂商業的路

資料這條路最迷人也最危險的地方在於——技術變動很快，但**真正讓你脫穎而出的，往往不是「我又學了一個新工具」，而是「我能用資料講出一個別人沒看見的故事」**。

**請記得三個關鍵原則**：
1. **SQL 與 Python 是地基**：先把這兩個練到能寫出 30 行流暢查詢與資料清理腳本，再談學 dbt、Airflow。
2. **作品集要有商業故事**：你的 dashboard 要能回答「為什麼」，而不只是 show 數字。
3. **把雲端當成必修，不是選修**：GCP 或 AWS 至少摸熟一個，否則你的 pipeline 永遠跑在筆電上。

**行動建議**：今天就到實習通搜尋資料分析、資料工程、商業分析、PM 類實習的真實心得，看看不同公司在意的工具與面試題型差在哪。把你看到的工具列成一張表，比對你目前會的，缺什麼就往那裡補。下個月你就會比現在的自己看得清楚太多。

## 十六、補充：給「想轉資料」的非本科生

如果你不是資工、統計、商管系出身，看到這篇文章可能會擔心「我科系不對，是不是不該想？」其實近年資料圈最大的特色就是**背景多元**：有人類學、心理學、外文系出身的資料分析師，也有醫學、法律、金融背景的資料科學家。轉行三步曲：

### 1. 第一個月：把 SQL 練到能寫 30 行
鎖定 SQLBolt、LeetCode SQL、Mode Analytics SQL Tutorial，每天一小時。一個月後，你能看懂多數實習職缺的 SQL 面試題在問什麼。

### 2. 第二到三個月：用 Python 做一個小分析
找一份你關心的公開資料（政府開放資料、運動賽事、Pokemon 資料、PTT 文章），用 pandas 做一份完整分析報告，發在個人 medium 或 substack。把過程寫清楚：問題、資料來源、清理步驟、發現、限制。

### 3. 第四到六個月：做一份 dashboard 並部署
用 Looker Studio 或 Metabase 把上面的分析做成互動 dashboard。把連結放在履歷上。**面試官能點進去看的東西，永遠贏過履歷上的 bullet point**。

### 4. 不要急著拚證照
Google Data Analytics、IBM Data Science Professional 等線上證照價值因人而異。在台灣，**「實作作品」與「實習經驗」永遠比證照重要**。如果你預算有限，先把錢花在雲端服務的免費額度與資料訂閱上，比刷證照更划算。

走完這四步，你會發現：轉資料這條路雖然門檻不低，但你的非本科背景反而會在面試中變成記憶點——當你能用「行銷思維 + SQL 能力」一起回答「這個指標為什麼下滑」，你已經跟純技術背景的競爭者拉開差距。
