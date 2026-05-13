---
num: 93
title: "AI / LLM 實習生入場券：Claude / GPT API + LangChain + RAG 基礎"
intro: "「我會 Python，但沒做過 ML，能投 AI 實習嗎？」「面試官問我什麼是 RAG，我支支吾吾答不出來。」「我看不懂論文、沒有 GPU，是不是無法做 AI？」2024 年起 AI 實習從『ML PhD 才有資格』變成『能呼叫 LLM API + 會接資料就有機會』，2026 年更是工程實習熱度最高的入口之一。本篇文章帶你看清現在 AI / LLM 實習真正會做的事、需要的最小技術棧、以及不寫死模型版本與價格的前提下，你該怎麼準備履歷與作品。"
slug: 93-ai-llm-intern-entry
series_slug: engineering-internship
series_name: "工程實習實戰"
source: https://internx-blog.zeabur.app/posts/93-ai-llm-intern-entry
last_updated: 2026-05
---
# AI / LLM 實習生入場券：Claude / GPT API + LangChain + RAG 基礎

「我會 Python，但沒做過 ML，能投 AI 實習嗎？」「面試官問我什麼是 RAG，我支支吾吾答不出來。」「我看不懂論文、沒有 GPU，是不是無法做 AI？」2024 年起 AI 實習從「ML PhD 才有資格」變成「能呼叫 LLM API + 會接資料就有機會」，2026 年更是工程實習熱度最高的入口之一。本篇文章帶你看清現在 AI / LLM 實習真正會做的事、需要的最小技術棧、以及不寫死任何模型版本與價格的前提下，你該怎麼準備履歷與作品。

> **時效提醒**：本文整理於 2026 年 5 月。LLM 領域變動極快——模型名稱、價格、context window、能力榜單、SDK API 介面**每季都可能變化**。文中提到的具體模型版本（GPT-5.5、Claude Opus 4.7、Gemini 3 Pro 等）皆為 2026-05 當下的旗艦線；半年後請務必回到各家官網重新確認。

## 一、為什麼 2026 年 AI 工程是工程實習的熱門入口？

### 1. 入門門檻變低

2022 年前要做 AI 必須會 PyTorch、CUDA、會調超參數，現在多數 AI 實習做的事是 **「呼叫 LLM API + 接資料 + 拼 prompt + 串流回應」**。Python 或 TypeScript 寫得出 fetch 的人，就能寫第一個 AI 應用。

### 2. 公司缺人

幾乎所有產品公司都在尋找「能幫產品加上 AI 功能」的工程師：客服 chatbot、文件問答、內容摘要、資料抽取、agent 流程。這些任務不需要訓練模型，需要的是**理解 LLM 行為、設計 prompt、整合外部資料**。

### 3. 履歷差異化

當所有人履歷上都寫「會 React、會 Node」，**你多寫一個「做過 RAG 文件問答系統，部署在 Vercel / Zeabur」會直接在一堆履歷中跳出來**。

### 4. 進可攻退可守

學了 LLM API + RAG，既能往「AI 工程師」深耕（接 fine-tune、agent、向量 DB 設計），也能回到普通後端 / 前端工作把 AI feature 加進產品。**對實習生這是最高 ROI 的方向之一**。

## 二、主流 LLM API：三大供應商總覽（2026-05 版）

### 1. Anthropic Claude

主要模型家族包括 Sonnet、Opus、Haiku 系列。2026 年 5 月當下旗艦為 **Claude Opus 4.7**（推理最強）、**Claude Sonnet 4.6**（性價比）、**Claude Haiku 4.5**（輕量便宜）。**特色**：長 context、推理品質強、Anthropic 自家不做 embedding（推薦搭配 Voyage AI）、agentic 能力強、以 Claude Code 為旗艦的 coding agent 生態完整。SDK：`@anthropic-ai/sdk`（Node）、`anthropic`（Python）。

> **注意**：Claude 3.5 / 3.7 / 4.0 / 4.5 系列在 2026-05 已屬於舊版命名，新專案請直接用 4.6 / 4.7 / Haiku 4.5。**模型版本與費率以 Anthropic 官方最新公告為準**。

### 2. OpenAI（ChatGPT 背後）

GPT-5 / GPT-5.5、o 系列推理模型。2026-05 旗艦為 **GPT-5.5**（2025 年中發表的 GPT-5 已不算最新）。GPT-4o 在 2026 已屬**過時模型**，請勿在新作品中使用。**特色**：生態最大、社群教學最多、跨領域能力強、語音與圖像整合廣。SDK：`openai`（Python 與 Node）。

### 3. Google Gemini

Gemini 3 Pro、Gemini 3 Flash 系列（2026-05 旗艦）；Gemini 2.5 系列已屬舊版。**特色**：與 Google 生態整合好、長 context、多模態（含影片）能力強。在台灣許多公司因 Google Cloud / Workspace 折扣成為主力之一。

### 4. Meta Llama（開源）

Llama 3、Llama 4 系列。**特色**：開源、可自託管。適合**有資料隱私需求**或想自己 fine-tune 的場景。對實習生而言入門難度高（要會 GPU、推論服務），但若你科系研究室有 GPU 資源，是極佳的學習標的。

### 5. 主流 LLM API 比較表（不寫具體價格）

| 面向 | Anthropic Claude | OpenAI | Google Gemini | Meta Llama |
| --- | --- | --- | --- | --- |
| 強項 | 長 context、推理、agent | 生態大、跨領域、多模態 | Google 整合、多模態、影片 | 開源、可自託管 |
| 旗艦 (2026-05) | Opus 4.7 / Sonnet 4.6 / Haiku 4.5 | GPT-5.5 / o 系列 | Gemini 3 Pro / 3 Flash | Llama 4 系列 |
| Context window | 長（百萬級規模） | 長 | 長 | 視部署而定 |
| 多模態 | 圖、文 | 圖、文、語音 | 圖、文、影片、音訊 | 視版本 |
| SDK | Node、Python | Node、Python、其他 | Node、Python | 多種 |
| 價格 | 請查官方最新 | 請查官方最新 | 請查官方最新 | 自託管成本 |
| 適合用途 | 文件分析、agent、長對話 | 通用、工具呼叫、語音 | Google 生態、多模態 | 私有部署、研究 |

> **重要提醒**：LLM 領域變動極快，本文整理於 2026 年 5 月，半年後可能多項細節變化。模型名稱、價格、context window、能力榜單都建議**每季自查一次**。訂閱與 API 計費方案請以官方公告為準。

## 三、申請與設定 API key：通用流程

雖然各家做法不同，**通用步驟**大致一樣：

1. 到該供應商官網（Anthropic Console、OpenAI Platform、Google AI Studio）註冊帳號。
2. 進入 API console / dashboard，建立一張 API key。
3. **立刻複製妥善保存**——多數供應商不會再次完整顯示。
4. 設定計費方式（信用卡或月配額），多數會給少量試用 credit。
5. 把 key 放在 `.env` 檔，**絕對不要 push 到 GitHub**。

範例 `.env`：

```
ANTHROPIC_API_KEY=sk-ant-xxxxx
OPENAI_API_KEY=sk-xxxxx
GEMINI_API_KEY=xxxxx
```

並在 `.gitignore` 加上 `.env`。實習生最常見的 GitHub 慘案是把 key 推上去，幾分鐘內就被機器人爬走、產生大筆費用。**Anthropic、OpenAI、GitHub 都有自動偵測機制**（GitHub Secret Scanning + 各家 push protection），發現後會通知你 revoke，但你要先做好基本防護，**不要把這個自動偵測當保險絲**。

## 四、第一次呼叫 LLM API：Python 與 TypeScript

### 1. Anthropic SDK（Python）

```python
import os
from anthropic import Anthropic

client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

message = client.messages.create(
    model="claude-opus-4-7",  # 範例：2026-05 旗艦；實際 model id 請查 Anthropic docs
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "用三句話介紹什麼是實習。"}
    ],
)

print(message.content[0].text)
```

### 2. OpenAI SDK（TypeScript）

```typescript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await client.chat.completions.create({
  model: "gpt-5.5", // 範例：2026-05 旗艦；實際 model id 請查 OpenAI docs
  messages: [
    { role: "system", content: "你是一個熱心的職涯顧問。" },
    { role: "user", content: "請用三句話介紹什麼是實習。" },
  ],
});

console.log(completion.choices[0].message.content);
```

### 3. 串流回應（streaming）

實際產品幾乎都用串流，讓使用者邊等邊看。Python 範例：

```python
with client.messages.stream(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[{"role": "user", "content": "用 200 字介紹 AI 實習。"}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

實習面試常問「你怎麼處理串流」，能講清楚 **Server-Sent Events（SSE）** 或 streaming chunk 的概念，會比只會非串流呼叫加分很多。

## 五、LangChain vs LlamaIndex vs Vercel AI SDK：選哪個？

### 1. LangChain

**入門最熱門的 LLM 框架**，提供 Chain、Agent、Memory、Tool 抽象。優點是文件多、社群大；缺點是 2024 起被部分工程師批評「過度抽象」，簡單任務用直接 SDK 反而清爽。2024 推出 0.3 版本後 API 較穩定，並與 **LangGraph**（狀態機式 agent 編排）形成主推組合。

**適合**：學習階段、需要快速串多個工具的 agent、需要 LangGraph 做多步驟流程。

### 2. LlamaIndex

**強於 RAG 與文件索引**，做文件問答、知識庫類產品時 LlamaIndex 比 LangChain 更精準。

**適合**：以 RAG 為主的應用、企業文件問答系統。

### 3. Vercel AI SDK

**前端與 Next.js 整合最佳**，提供 `useChat`、`useCompletion` 等 React hooks，串流 UI 寫法極簡。2025 年起 v4 / v5 支援 tool calling 與多模態。

**適合**：用 Next.js 做 AI chat UI、消費型 AI 產品的前端串接。

### 4. Pydantic AI

**Python 圈 2024 後的新興工具**，主打 type-safe agent 寫法、與 Pydantic 整合佳，2025 年起在資料抽取場景採用度上升。

**適合**：希望 agent 行為被型別約束的 Python 專案、結構化資料抽取。

### 5. 實習生該怎麼選？

**初學階段最簡單的路是「直接用 SDK」**：

1. 第一個專案用純 Anthropic / OpenAI SDK，理解 LLM 行為。
2. 第二個專案做 RAG 時，學 LlamaIndex 或 LangChain 其中一個。
3. 前端整合用 Vercel AI SDK 一週上手。

**不要一開始就學 LangChain**，會被它的抽象搞得失焦。

## 六、RAG 基礎：從 0 到 1 的流程

RAG（Retrieval-Augmented Generation）是 2026 年實習最常被指派的 AI 任務。核心想法：**LLM 的知識有上限、會幻覺，所以我們先去資料庫找最相關的文件，再連 prompt 一起餵給 LLM**。

### 1. 標準 RAG 流程

1. **文件切割（chunking）**：把長文件切成 200–800 token 的 chunk。
2. **embedding**：用 embedding 模型把每個 chunk 轉成向量（一串浮點數）。
3. **存進向量 DB**：建立向量索引（HNSW、IVF 等）。
4. **查詢時**：把使用者問題也 embed，到向量 DB 找最相似的 N 個 chunk。
5. **拼 prompt**：把找到的 chunk + 問題一起丟給 LLM。
6. **生成回答**：LLM 根據真實文件回答，減少幻覺。

進階做法還會加上 **re-ranking**（用 cross-encoder 重新排序前 50 個結果取前 5）、**hybrid search**（BM25 關鍵字 + 向量混合）、**Anthropic 提倡的 contextual retrieval**（把 chunk 加上文件上下文摘要再 embed）。

### 2. 常見坑

- **chunk 太大**：超過模型 context 或讓回答鬆散。
- **chunk 太小**：失去語意脈絡，回答片段化。
- **重複內容**：向量 DB 塞一堆幾乎一樣的 chunk，浪費 token。
- **過長 context**：把 50 個 chunk 全塞進 prompt，模型反而 confuse（lost in the middle）。
- **embedding 模型不一致**：建索引用 A 模型、查詢用 B 模型，相似度全錯。
- **沒做 chunking 評估**：盲調 chunk size 而沒設 eval set，是 RAG 失敗最常見原因。

### 3. embedding model 選擇（2026-05）

- **OpenAI text-embedding-3-small / text-embedding-3-large**：通用、效果穩定、生態最廣。`text-embedding-3-small` 預設 1536 維、`text-embedding-3-large` 預設 3072 維，皆支援 Matryoshka 維度縮減。
- **Voyage**：Anthropic 官方推薦的 embedding 夥伴（Anthropic 自家不做 embedding）。2025 起的 `voyage-3-large` / `voyage-3.5` 在多個 RAG benchmark 領先。
- **Jina embeddings v3**：多語言、開源權重可下載，台灣中英文場景表現不錯。
- **Cohere**：多語言不錯，企業端常見。
- **開源 sentence-transformers / BGE / GTE**：免費、可自託管，研究用首選。

> **規則**：建索引與查詢**一定要用同一個 embedding 模型**（含版本）。換模型 = 全部重建索引。

## 七、向量資料庫：選擇邏輯

### 1. pgvector（PostgreSQL 擴充，最簡單入門）

如果你已經在用 PostgreSQL，**直接裝 pgvector 擴充就有向量功能**，不用學新 DB、不用多開一個服務。**Supabase、Neon 預裝或一鍵啟用 pgvector**；Zeabur 上的 PostgreSQL 也能透過 `CREATE EXTENSION vector` 啟用（**最新支援狀況請查各家平台文件**）。

### 2. Pinecone

雲端向量 DB 老牌，效能與規模強，但要付費（價格請查官方最新方案），實習階段除非公司已用，否則建議先用 pgvector。

### 3. Qdrant

開源、可自託管、Rust 寫的高效能。社群活躍，適合需要私有部署的場景。

### 4. Weaviate

開源、功能完整、多模態支援好。

### 5. Chroma

輕量、本地開發友善，適合 prototype。

### 6. 怎麼選？

- **個人作品 / 實習小專案**：pgvector（搭配 Supabase 或 Neon）。
- **想學專業向量 DB**：Qdrant 自架或雲端。
- **公司已有方案**：跟著公司走。

## 八、實戰範例：用 pgvector 做最簡單的 RAG

下面這份範例用 Python + pgvector + OpenAI embedding，實作最簡 RAG。先在 PostgreSQL 啟用 pgvector：

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  embedding vector(1536)  -- OpenAI text-embedding-3-small 預設維度
);

-- 加上 HNSW 索引以加速近鄰查詢（資料量上千筆以上強烈建議）
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);
```

寫一段 Python 把文件 embed 後存進去，並做查詢：

```python
import os
import psycopg
from openai import OpenAI

openai = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
DB_URL = os.environ["DATABASE_URL"]

def embed(text: str) -> list[float]:
    res = openai.embeddings.create(
        model="text-embedding-3-small",
        input=text,
    )
    return res.data[0].embedding

def index_documents(docs: list[str]) -> None:
    with psycopg.connect(DB_URL) as conn, conn.cursor() as cur:
        for content in docs:
            vec = embed(content)
            cur.execute(
                "INSERT INTO documents (content, embedding) VALUES (%s, %s)",
                (content, vec),
            )
        conn.commit()

def retrieve(question: str, top_k: int = 3) -> list[str]:
    qvec = embed(question)
    with psycopg.connect(DB_URL) as conn, conn.cursor() as cur:
        cur.execute(
            """
            SELECT content
            FROM documents
            ORDER BY embedding <=> %s::vector
            LIMIT %s
            """,
            (qvec, top_k),
        )
        return [row[0] for row in cur.fetchall()]

def answer(question: str) -> str:
    chunks = retrieve(question)
    context = "\n\n".join(chunks)
    prompt = f"""根據以下資料回答問題，若資料中沒有則回答「不確定」。

資料：
{context}

問題：{question}
"""
    res = openai.chat.completions.create(
        model="gpt-5.5",  # 範例：2026-05 旗艦；實際 model id 請查官方
        messages=[{"role": "user", "content": prompt}],
    )
    return res.choices[0].message.content

if __name__ == "__main__":
    docs = [
        "實習通是一個提供台灣大學生分享實習與工作心得的平台。",
        "在實習通上你可以查到不同公司的工作環境、薪資範圍、面試心得。",
        "平台主要服務對象為大學生與社會新鮮人。",
    ]
    index_documents(docs)
    print(answer("實習通的服務對象是誰？"))
```

**重點觀察**：

- `embedding <=> %s::vector` 是 pgvector 的 **cosine distance** 運算子（值越小越相似；`cosine_similarity = 1 - cosine_distance`）。其他運算子：`<->` 歐氏距離、`<#>` 負內積。
- 真實專案會把 chunk 切割、metadata、檔案來源、版本一起存。
- 真實專案應該批次 embed（避免逐筆 API 呼叫）、加 cache、加錯誤處理、加 HNSW 索引。
- 模型名稱寫實際版本要查官方，本範例以 2026-05 當下旗艦為例。

## 九、常見實習任務：你會做什麼？

### 1. 客服 chatbot

- 餵公司 FAQ + 知識庫到向量 DB。
- 使用者提問 → 檢索 → 拼 prompt → LLM 回答。
- 加上「找不到答案就轉真人」的 fallback。

### 2. 文件問答

- 餵內部 wiki、產品手冊、法律文件。
- 給回答時附上引用來源（哪一份文件、哪一段）。

### 3. 摘要

- 長文件 → 切段 → 各段摘要 → 整體摘要（map-reduce 模式）。
- 對 podcast 逐字稿、會議紀錄、論文都實用。

### 4. 資料抽取

- 把非結構化文字（合約、發票、履歷）抽成 JSON 結構。
- 搭配 Pydantic / Zod schema 強制型別。
- OpenAI structured outputs、Anthropic tool use 都能保證 schema。

### 5. Agent

- LLM 自己決定要呼叫哪些工具（搜尋、SQL 查詢、計算機）。
- 比較進階，做出來在履歷上很搶眼。常見框架：Claude Code、LangGraph、OpenAI Agents SDK、Pydantic AI。

## 十、成本控制：實習生最容易忽略的事

### 1. 模型選擇

便宜、輕量模型（如 Claude Haiku 4.5、GPT-5.5 mini、Gemini 3 Flash）對「分類、抽取、簡單問答」就夠。**不要全部任務都用最大模型**，成本會炸。**模型版本與費率以官方最新為準**。

### 2. Token 計費

API 是按 input + output token 計費。實習生第一週踩雷的常見原因：

- 把整份 PDF（10 萬 token）丟進去當 context。
- 沒設 `max_tokens`，模型自由發揮回了 4000 字。
- 在迴圈裡反覆呼叫沒加 cache。

### 3. Prompt 快取（Prompt caching）

Anthropic、OpenAI 等都有 prompt caching 機制，**重複的 system prompt 與 context 可以被快取**，大幅降低成本與延遲。實習生會用是大加分。

### 4. Batch API

非即時任務（報表、批次資料抽取、夜間摘要）可用 batch API：**Anthropic 與 OpenAI 目前都對 batch 提供 50% 折扣**（24 小時內回傳；折扣比例與條件以官方最新公告為準）。Batch + Prompt cache 可以疊加省更多。

### 5. 開發階段的 spending limit

到 console 設一個月的 spending limit。實習生練習階段一個月 USD 5–10 通常很夠，**設好上限避免帳單失控**。

> **提醒**：訂閱方案、API 價格隨時變動，本文不寫具體數字。請查官方最新方案。

## 十一、AI Coding 工具：寫 code 的新標配（2026-05）

### 1. Cursor

獨立 AI IDE，VS Code fork。內建 Claude / GPT 等模型，能讀整個 codebase、改多檔案、跑命令。**新一代工程師的主力編輯器之一**。

### 2. GitHub Copilot

VS Code 與 JetBrains 的 AI 補全外掛。Copilot Chat 支援對話、Workspace、Agent mode。學生有教育版優惠（請查 GitHub Education 最新方案）。

### 3. Claude Code

Anthropic 出的 CLI / IDE agent，能跑指令、改檔案、處理長任務。終端機派工程師的選擇，2025-2026 在開源圈採用度大漲。

### 4. Windsurf / Cline / Zed

- **Windsurf**：另一款 AI-first IDE，與 Cursor 競爭。
- **Cline**：VS Code 擴充，開源 agent，自帶多模型支援。
- **Zed**：新一代高效能編輯器，內建 AI 整合，速度極快。

### 5. 實習生該怎麼用？

- **初學階段**：用 Copilot / Cursor 提高打字效率。
- **要 review AI 寫的 code**：每一行都要看懂、能解釋為什麼、能改。
- **不要當 AI 的傳聲筒**：實習面試時被問「為什麼這樣寫」，答「Cursor 幫我寫的」會直接被淘汰。

## 十二、履歷該展示什麼：一個能跑的 AI 小作品

### 1. 主題建議

- 對某個你熟悉的領域（學校課程、社團活動、家裡店面）做文件問答。
- 抓你個人 newsletter / 部落格內容做語意搜尋。
- 把學長姐筆記做成可問答的 RAG 系統。
- 做一個簡單的 PDF 摘要 + 問答 app。

### 2. 技術棧建議

- 後端：Python + FastAPI 或 Node + Hono。
- 向量 DB：pgvector（搭配 Supabase 或 Neon）。
- 前端：Next.js + Vercel AI SDK 做串流 chat UI。
- 部署：Vercel + Neon 或 Zeabur 一條龍。

### 3. README 必備

- 線上 demo URL（讓 HR 直接點開玩）。
- 用了哪些 LLM、為什麼選。
- 你怎麼做 chunking、embedding、retrieval。
- 一個 token 用量與成本的粗估。
- 清楚註明「本作品學習用途，不保證生產級可靠度」。

> **薪資提醒（2026-05 概況）**：AI 相關實習在台灣 2026 年薪水普遍偏高，台北月薪常見從 NT$30,000 起跳，外商或大型 AI 新創甚至 NT$50,000 以上。**實際數字以公司公告為準，且各公司、職務、年級差異很大**——以上僅供你判斷「值得投入多少時間」的參考。具體市場行情請至 Yourator、CakeResume、實習通等平台查詢當期實際職缺。

## 十三、FAQ：學生最常問的 5 個問題

**Q1：我會 Python 但沒做過 ML，能做 AI 實習嗎？**
能。2026 年多數 AI 實習做的是「LLM 應用」，不是「訓練模型」。會 Python（或 TypeScript）+ 會呼叫 API + 會基本資料處理就有資格投。**先把一個 RAG 小作品做出來，比讀完整本機器學習課本有用**。

**Q2：不會數學能做嗎？**
**LLM 應用層大多不需要深數學**。你只需要直觀理解：

- embedding 是「把語意變成向量」，相似的東西向量距離近（cosine distance 小）。
- temperature 是「隨機度」，越高越發散、越低越確定。
- top-k / top-p 是「採樣策略」。

如果你之後要走「訓練模型、寫 paper、做研究」就需要線性代數、機率論、最佳化，但**先做應用層累積成果，需求再補理論**。

**Q3：AI 實習生會不會被 AI 取代？**
短期內不會，**會被 AI 強化**。LLM 寫程式快但會錯，**懂 AI 行為、會 review、會設計流程的人反而更值錢**。實習生要做的是把 AI 工具納入工作流、提高交付速度，而不是擔心被取代。長期來說，能不斷學新技術的人永遠不會被取代——這在每個科技世代都成立。

**Q4：我沒 GPU 可以做 AI 嗎？**
完全可以。LLM 應用層**不需要 GPU**，呼叫 API 就好。需要 GPU 的是「訓練 / fine-tune 開源模型」，那是進階階段。實習階段先做應用層、不要被「沒 GPU」卡住。

**Q5：要不要先學完機器學習再做 LLM 應用？**
**不用**。傳統 ML（決策樹、SVM、深度學習基礎）是好底子，但**入門 LLM 應用不需要先精通 ML**。你可以邊做邊補，例如做 RAG 時遇到「embedding 怎麼比較」再去學 cosine similarity。**用「需要時補」的方式比「先讀完整本書」效率高十倍**。

## 十四、進階：你做完上面後再學什麼？

### 1. Agent / Tool use

讓 LLM 自己決定要呼叫哪些工具（搜尋、計算、SQL）。Anthropic 的 tool use、OpenAI 的 function calling / Agents SDK、LangGraph 都是入口。

### 2. Fine-tuning

當 prompt 工程已到極限、且你有大量領域資料，可考慮 fine-tune。LoRA、QLoRA 是常見技巧。OpenAI、Anthropic 也都提供託管 fine-tune（**支援的模型與費率以官方最新為準**）。

### 3. 評估（Evaluation）

LLM 應用最難的是「怎麼知道我改的版本變好還是變差」。學 LLM-as-judge、benchmark 設計、A/B 測試。Anthropic Workbench、OpenAI Evals、Promptfoo、Ragas 都是常見工具。

### 4. 多模態

圖、語音、影片整合進 LLM 應用。Whisper（語音轉文字）、Vision API、Gemini 多模態都是入口。

### 5. 模型部署

如果想自託管開源模型（Llama 系列），學 vLLM、TGI、llama.cpp、量化（quantization）。

## 十五、結語：AI 實習的入場券是「會做」，不是「懂理論」

AI 工程實習在 2026 不再屬於 ML 博士，而是屬於 **「能把 LLM 接進產品、能設計資料流、能控制成本」** 的工程師。Python 或 TypeScript 寫得出來、能呼叫 API、能做出一個 RAG 小作品，你就具備履歷上跟同期同學差異化的本錢。**這份技術 stack 變動極快，本文整理於 2026 年 5 月，半年後可能多項細節更新，請務必每季回頭自查**。

**三個關鍵原則**：

1. **先做能跑的小作品，再讀理論**：一個能上線的 RAG demo 勝過十篇你看不懂的論文。
2. **成本與效能要有概念**：實習公司不怕你用 LLM，怕你不會控制 token 與成本。會選對模型、會用 prompt cache、會設 `max_tokens` 的實習生最被信任。
3. **AI 工具當隊友，不當代寫**：用 Cursor、Copilot、Claude Code 提高生產力，但**每一行 AI 寫的 code 你都要看懂**。看不懂就 review 不出問題、就會被淘汰。

**行動建議**：今天就到實習通搜尋「AI / 軟體公司」相關實習心得，看看真實 AI 實習生在做什麼任務、用什麼 stack、踩過哪些坑。再對照本文清單，挑一個 LLM API、一個向量 DB、一個前端框架，這個週末就把第一個 RAG demo 做出來，下個月就能投出第一份有亮點的 AI 實習履歷。
