# 後端實習生 2026 必懂：Node.js、Python FastAPI、Go 三選一

「我想做後端實習，但不知道學哪個語言。」「Java / Spring 還值得學嗎？」「面試官問我『你怎麼設計 REST API』，我該怎麼回答？」後端實習比前端隱晦：你的成果使用者看不到，但只要 API 慢一秒、資料一筆寫錯，整個產品都會出包。本篇文章會幫你看清 2026 年台灣後端實習的三大主流語言、什麼時候該選 Node、Python 還是 Go、以及實習生最常被問到的資料庫、ORM、API 設計與部署知識。

## 一、為什麼後端實習要先選對「語言陣營」？

後端不像前端那樣「全業界都用 React」，**不同產業偏好不同語言**。選錯陣營會讓你投履歷時打不到目標公司。

### 1. 三大陣營的服務類型差異

- **Node.js（TypeScript）**：新創、SaaS、全端整合產品最愛，與前端共用語言。
- **Python（FastAPI / Django）**：AI 公司、資料導向產品、研究型新創、後台工具最常用。
- **Go**：基礎設施、雲端服務、效能敏感的微服務、影音串流、付款系統偏好。

### 2. 台灣實習市場觀察

新創與消費型產品（KKBOX、Dcard、Pinkoi、17LIVE 等公開可查）多以 Node.js / TypeScript 為主，AI / 資料相關公司大量使用 Python，金融、支付、雲端基礎設施則 Go 與 Java 並用。**沒有單一答案，要看你想去哪裡**。

### 3. 不要學十項皮毛，先精通一項

實習生最常見錯誤是「Node 學一點、Go 學一點、Java 學一點」，結果什麼都不熟。**先把一個陣營從 web framework 到資料庫到部署做完一個能上線的小專案**，比同時學三個語言有用十倍。

## 二、三選一：Node.js、Python、Go 怎麼選？

### 1. Node.js（TypeScript）：通才路線

**何時選 Node.js？**

- 你已經學過前端（React），想往全端走。
- 你想進新創或產品型公司，台灣的軟體新創 50% 以上後端用 Node.js。
- 你想做 SaaS、即時聊天、Webhook、API gateway。

**生態系亮點**：

- **Express**：最廣泛採用、最多教學資源、面試官最熟。
- **Fastify**：Express 的高效能後繼者，效能與 Express 不在同一級。
- **Hono**：輕量、跨 runtime（Node、Bun、Cloudflare Workers），新興主流。
- **NestJS**：類似 Spring Boot 的企業級框架，模組化、依賴注入完整，大型團隊愛。
- **tRPC**：端對端 type-safe API，與 Next.js 整合無痛，是 TypeScript 全端的招牌組合。

### 2. Python（FastAPI）：資料與 AI 路線

**何時選 Python？**

- 你想做 AI / LLM 應用實習。
- 你想進資料導向公司（推薦系統、資料分析、ML pipeline）。
- 你科系是資工、資管以外（如統計、財金、生科），用 Python 切入比較自然。

**生態系亮點**：

- **FastAPI**：2026 仍是 Python API 主流首選，型別友善、自動生成 OpenAPI 文件、效能優於 Flask。
- **Django**：傳統大型專案、後台管理（admin panel 一鍵生成）。
- **Flask**：輕量但發展速度緩，新專案越來越少選。
- **Pydantic**：FastAPI 的型別驗證基礎，也常獨立使用。
- **SQLAlchemy**：Python 主流 ORM。

### 3. Go：基礎設施與效能路線

**何時選 Go？**

- 你想進雲端基礎設施、開發者工具、付款系統、影音平台。
- 你已會其他語言、想加一個低延遲 / 高並發的選項。
- 你想往 Site Reliability Engineering（SRE）、平台工程方向走。

**生態系亮點**：

- **Gin**：最廣泛採用、教學資源多。
- **Echo**：類似 Gin，社群活躍。
- **Fiber**：寫法接近 Express，前端轉 Go 最容易上手。
- **Chi**：輕量、貼近標準函式庫風格。

### 4. 三選一比較表

| 面向 | Node.js（TS） | Python（FastAPI） | Go |
|------|--------------|------------------|----|
| 學習曲線 | 中 | 低 | 中 |
| 與前端共用 | ✓（同語言） | ✗ | ✗ |
| AI / 資料生態 | 中等 | 極強 | 弱 |
| 執行效能 | 中 | 中（GIL 限制） | 高 |
| 並發處理 | 事件驅動 | async 不錯 | goroutine 原生強 |
| 型別安全 | TS 強 | mypy / Pyright 中 | 強（編譯期） |
| 部署便利 | 高 | 高 | 極高（單一 binary） |
| 新創常用度 | 極高 | 高 | 中 |
| 實習職缺數量（台灣） | 最多 | 多 | 中 |
| 適合誰 | 想做產品 / 全端 | 想做 AI / 資料 | 想做基礎設施 / SRE |

> **提醒**：技術變動快，本文整理於 2026 年 5 月，建議每年至少自查一次。可追蹤台灣公司公開的職缺描述、TIOBE / GitHub Octoverse、Stack Overflow Developer Survey 來校準。

## 三、Node.js 生態深入：從 Express 到 tRPC

### 1. Express vs Fastify vs Hono

**Express** 是入門首選，幾乎所有教學影片都用 Express，缺點是中介軟體（middleware）寫法老派、效能不如後輩。

**Fastify** 寫法跟 Express 接近，但效能、外掛系統、JSON schema 驗證都更現代。如果你已熟 Express，再花一週學 Fastify 是高 CP 值的升級。

**Hono** 是新興主流，特別適合 Cloudflare Workers、Bun、Deno。寫法極簡：

```ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello InternX"));
app.get("/users/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ id, name: "實習生" });
});

export default app;
```

### 2. NestJS：企業級

NestJS 是模仿 Angular 架構的後端框架，依賴注入、模組化、裝飾器一應俱全。學習曲線較陡，但若你瞄準大公司或有「結構嚴謹」需求的團隊，NestJS 履歷加分。

### 3. tRPC：TypeScript 全端神兵

tRPC 讓你在前端直接呼叫後端函式，型別自動共享，不用手寫 OpenAPI、不用手對 type。**搭配 Next.js + Prisma + tRPC 是 2024 起最熱的全端組合**，許多新創用這套就能寫完整個產品。

## 四、Python 生態深入：FastAPI 為什麼贏 Flask？

### 1. FastAPI 的三大優勢

- **型別驅動**：用 Pydantic model 定義 request / response，自動驗證、自動產生 Swagger 文件。
- **效能**：基於 Starlette + ASGI，在 Python 圈是高效能代表。
- **開發體驗**：IDE 自動補全、錯誤提示完整。

### 2. Django 還值得學嗎？

值得，但**不是首選**。Django 適合：

- 企業內部後台、CMS、admin panel 重的產品。
- 公司已有 Django 大量遺產。
- 想用「全套電池內建」的開發風格。

### 3. Flask 該不該學？

新專案不要選 Flask。學習資源仍多，但**FastAPI 在型別、效能、文件全勝**。看到 Flask 就當成 legacy 就好。

## 五、Go 生態深入：Gin / Echo / Fiber 三選一

實習生若選 Go，建議從 **Gin** 開始（資源最多），熟練後再看 Echo 或 Fiber。

範例：用 Gin 寫一個簡單的使用者查詢端點：

```go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

    r.GET("/users/:id", func(c *gin.Context) {
        id := c.Param("id")
        c.JSON(http.StatusOK, gin.H{
            "id":   id,
            "name": "實習生",
        })
    })

    r.Run(":8080")
}
```

Go 的優勢在於：**單一 binary 部署**、goroutine 原生並發、編譯期錯誤抓得早。台灣有部分支付、雲端、CDN、影音公司大量使用 Go。

## 六、資料庫：PostgreSQL 是 2026 的「正確答案」

### 1. 關聯式資料庫

**PostgreSQL** 在 2026 是業界第一首選，原因：

- 完整 SQL 支援、ACID 強。
- JSON 欄位、全文檢索、向量擴充（pgvector）一應俱全。
- 雲端 serverless 選項多（Supabase、Neon）。

**MySQL / MariaDB** 仍非常常見，特別在傳統企業與部分新創。

**SQLite** 適合本地開發、小型 App、嵌入式情境，Cloudflare D1 就是 SQLite-based。

### 2. NoSQL

- **MongoDB**：文件型，schema 彈性高，新創常用於初期快速迭代。
- **Redis**：cache、session、queue 標配，幾乎每個正式專案都會用到。
- **Firebase Firestore**：BaaS（後端即服務），快速上線小專案首選。

### 3. 雲端 / Serverless

- **Supabase**：PostgreSQL + Auth + Realtime + Storage 全包。
- **Neon**：PostgreSQL serverless，分支（branching）功能像 Git 一樣方便。
- **Cloudflare D1**：SQLite-based，跟 Workers 整合好。
- **PlanetScale**：MySQL serverless，2024 取消免費方案，僅在團隊已付費時建議。

### 4. 向量資料庫（為 AI 做準備）

- **pgvector**：PostgreSQL 擴充，最簡單入門。
- **Pinecone、Qdrant、Weaviate、Chroma**：專業向量 DB，AI 應用使用率高。

## 七、ORM：Prisma 與 Drizzle 是 TypeScript 圈的雙雄

### 1. Prisma

**Prisma** 是 TypeScript 後端最主流 ORM。優勢：

- 用 Prisma schema 定義模型，自動生成 type-safe client。
- migration 工具完整。
- 支援 PostgreSQL、MySQL、SQLite、MongoDB。

### 2. Drizzle

**Drizzle** 是 2024 後興起的輕量 ORM，特色：

- 寫起來更像原生 SQL，沒 Prisma 的「魔法感」。
- bundle size 小，適合 Cloudflare Workers / Edge runtime。
- type-safe 程度不輸 Prisma。

### 3. Python：SQLAlchemy

SQLAlchemy 仍是 Python 主流 ORM，搭配 Alembic 做 migration。FastAPI 範例多用 SQLAlchemy + Pydantic。

### 4. TypeORM、Sequelize

仍存在，但新專案逐漸被 Prisma 與 Drizzle 取代。**履歷上若已是新專案，不建議只列 TypeORM**。

## 八、API 設計：REST、GraphQL、tRPC 怎麼選？

### 1. REST：永遠的基本盤

- 路徑：`/users/123`、`/posts/456/comments`
- 動詞：GET、POST、PUT、PATCH、DELETE
- 狀態碼：200、201、400、401、403、404、500

實習生 90% 會被指派 REST API 開發，**面試一定要能講清楚 REST 的資源命名與狀態碼**。

### 2. GraphQL：複雜資料關聯時值得

GraphQL 適合：

- 前端要的欄位變動大、不想反覆改後端。
- 多資料來源整合。
- 大型團隊、前後端分離明顯。

但**對小專案是過度工程**。實習生先把 REST 寫好，再評估是否補 GraphQL。

### 3. tRPC：TypeScript 專屬

如前述，tRPC 適合 Next.js + TypeScript 全端，端對端 type-safe，無需 OpenAPI 中介。

## 九、認證：JWT、OAuth、現成方案

### 1. JWT 基本概念

JWT（JSON Web Token）是把使用者資訊簽章後放在 token 裡，後端不用查 session table 就能驗證。實習生要懂：

- 結構：header.payload.signature。
- 不要把敏感資料放 payload（任何人都能解碼，只是不能改）。
- access token 短（例如 15 分鐘）、refresh token 長（例如 7 天）。

### 2. OAuth 2.0

OAuth 2.0 是「使用者授權第三方存取」的標準流程，例如「用 Google 登入」就是。實習生要會：

- Authorization Code Flow（最常見）。
- redirect_uri、scope、state 參數。

### 3. 現成方案：能用就別自己刻

- **Clerk**：UI 完整、整合超快，有 React / Next.js SDK。
- **Auth.js（原 NextAuth）**：Next.js 生態主流，免費開源。
- **Supabase Auth**：搭配 Supabase 使用最順。
- **Firebase Auth**：BaaS 一條龍，本網站（實習通）就是用 Firebase Auth。
- **Lucia Auth**：輕量、完全自管。

> **提醒**：實習階段不要花一個月手刻認證系統，公司的安全標準遠超你能在學期內掌握。**用現成方案上線，再學底層原理**比較務實。

## 十、部署：把後端送上線

### 1. PaaS / Serverless

- **Vercel**：Next.js / Node.js API 最快，serverless functions 自動 scale。
- **Cloudflare Workers**：邊緣運算、全球低延遲、適合輕量 API。
- **Zeabur**：台灣本地、UI 親切、支援多種 runtime 與資料庫，台灣實習生友善選項。
- **Railway、Render、Fly.io**：各有定位，Railway 對小型全端最便利、Fly.io 全球分散好。

### 2. AWS / GCP / Azure

進大廠或外商必碰：

- **AWS**：EC2、Lambda、ECS、RDS、S3、CloudFront、API Gateway。
- **GCP**：Cloud Run、Cloud Functions、Cloud SQL、BigQuery。
- **Azure**：在企業客戶為主的公司常見。

### 3. 容器：Docker 必學

實習生履歷上有 Docker 是明顯加分項。最低門檻：

- 會寫一份 Dockerfile（Node 或 Python）。
- 會用 docker compose 跑「應用 + Postgres + Redis」三件套。
- 知道 image 與 container 的差異。

Kubernetes（K8s）對實習生是 nice-to-have，不是 must-have，先把 Docker 練熟即可。

## 十一、實戰範例一：FastAPI 的最小 API

下面是一個 FastAPI 端點，用 Pydantic 驗證輸入、用型別自動產生文件：

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()

class CreateUserRequest(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    email: str
    age: int = Field(ge=18, le=100)

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

# 假裝這是 DB
fake_db: dict[int, UserResponse] = {}
next_id = 1

@app.post("/users", response_model=UserResponse, status_code=201)
def create_user(req: CreateUserRequest) -> UserResponse:
    global next_id
    user = UserResponse(id=next_id, name=req.name, email=req.email)
    fake_db[next_id] = user
    next_id += 1
    return user

@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int) -> UserResponse:
    user = fake_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

跑起來後，到 `http://localhost:8000/docs` 就能看到自動生成的 Swagger 文件，實習生交付時直接傳這個 URL 給前端，省下大量溝通成本。

## 十二、實戰範例二：Express + PostgreSQL + Prisma

下面是一個 Express + Prisma 的最小範例。先在 `schema.prisma` 定義模型：

```
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
}
```

跑 `npx prisma migrate dev` 建立 table，然後寫 Express 路由：

```ts
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "title and content required" });
  }
  const post = await prisma.post.create({ data: { title, content } });
  res.status(201).json(post);
});

app.listen(3000, () => console.log("API on :3000"));
```

重點觀察：

- Prisma 的 `findMany`、`create` 都有完整型別。
- 真實專案會用 Zod 驗證 request body，加上錯誤處理 middleware、log。
- DB 連線字串放 `.env`，不要 hard code。

## 十三、履歷該展示什麼：一個能跑的小服務

### 1. 主題建議

- 為自己學校或社團做的活動報名系統（API + DB）。
- 個人筆記同步 API（搭配前端作品）。
- 簡易 webhook 處理服務（接 GitHub、Slack 通知）。
- 個人記帳 API（PostgreSQL + JWT）。

### 2. 技術棧建議

- **Node.js 路線**：Next.js + tRPC + Prisma + PostgreSQL，部署到 Vercel + Neon。
- **Python 路線**：FastAPI + SQLAlchemy + PostgreSQL + Docker，部署到 Zeabur。
- **Go 路線**：Gin + sqlc + PostgreSQL + Docker，部署到 Fly.io。

### 3. README 必備

- API 文件（Swagger URL 或 Postman collection）。
- 線上 demo 端點（可以 curl 看到回應）。
- 如何在本地跑起來（`docker compose up`）。
- 一兩個整合測試腳本。

> **提醒**：台北後端實習薪水普遍從每月 NT$28,590 起跳，外商或大型新創後端實習生月薪可達 NT$45,000 以上。這數字告訴你的是「值得多投資多少時間在打磨技術」，不是拿來開條件的承諾。

## 十四、FAQ：學生最常問的 5 個問題

**Q1：沒學過 SQL 來得及嗎？**
完全來得及。SQL 是後端最高 ROI 的學習項目，用一個週末就能學會 80% 常用語法（SELECT、JOIN、GROUP BY、子查詢、index 概念）。建議路徑：

1. 找一份 PostgreSQL 教學（官方 tutorial 或 PostgreSQL Exercises）。
2. 在本地用 Docker 跑一個 Postgres，自己建 table 練查詢。
3. 學會 EXPLAIN，知道為什麼查詢慢。

**Q2：Java / Spring 還值得學嗎？**
看你想去哪。Java + Spring Boot 在金融、電信、傳統大企業仍是主流，且台灣半導體、銀行、保險公司大量使用。但**消費型新創普遍不用 Java**。如果你瞄準大公司或外商銀行的後端實習，Java + Spring 仍是強選項；瞄準新創就選 Node 或 Python。

**Q3：直接做全端會不會比較好？**
是個好策略。台灣多數實習生履歷上「會 React + Node」就比「只會 React」競爭力高很多。建議的全端路徑：

1. 先把 React + Next.js + TypeScript 學熟。
2. 用 Next.js Server Actions 或 Route Handlers 練後端基礎。
3. 加一個 Postgres + Prisma，做出一個能 CRUD 的小產品。
4. 部署到 Vercel + Neon 或 Zeabur。

走完這條，你已經是「能交付一條完整 feature」的實習生。

**Q4：要學微服務、Kubernetes、Kafka 嗎？**
**不是實習生階段該優先學的**。微服務與 K8s 是給「已經做過單體應用、有規模問題要解」的工程師。實習生先把單體應用寫好、會用 Docker、能部署、能 debug，已經贏 80% 同學。

**Q5：MongoDB vs PostgreSQL，先學哪個？**
強烈建議**先學 PostgreSQL**。SQL 是後端工程的通用語言，學會後 MongoDB 大概一週能上手。反過來不成立——只會 MongoDB 的實習生在傳統公司或多數新創會卡關。

## 十五、進階：你做完上面後再學什麼？

### 1. 系統設計

了解快取（Redis）、queue（BullMQ、SQS）、rate limiting、idempotency、事件驅動架構。

### 2. 觀測

學會用 Sentry 抓錯、Datadog 或 Grafana + Prometheus 看指標、結構化 log（pino、structlog）。

### 3. 效能

懂 N+1 query、index 設計、connection pool、批次處理、串流 response。

### 4. 安全

OWASP Top 10（SQL Injection、XSS、CSRF、SSRF）、密碼雜湊（bcrypt / argon2）、機敏資料加密、最小權限原則。

### 5. AI 後端整合

呼叫 LLM API、設計 RAG pipeline、向量 DB 索引（pgvector）、embedding 快取、串流 response。AI 後端工程師是 2026 的明星職位。

## 十六、結語：後端是「穩」「快」「對」的綜合競賽

後端的價值不在「炫」，而在**正確、穩定、可維護**。當前端工程師展示一個漂亮 UI 時，後端工程師要保證資料寫對、不掉、能擴展、出錯時看得到 log。把 Node、Python、Go 三選一，搭配 PostgreSQL + Redis + Docker + 一個雲端平台，你的後端實習履歷就能在 2026 站穩腳步。

**三個關鍵原則**：

1. **先精通一個語言陣營，不要當三腳貓**：把 Node、Python、Go 選一個練到能交付完整 feature，比同時學三個都半吊子有用十倍。
2. **資料庫優於框架**：實習面試最常死在 SQL，不是死在框架。先把 PostgreSQL 練熟比學第二個 web framework 重要。
3. **能上線比能寫漂亮 code 更值錢**：HR 不會 review 你的 controller 結構，但會打開你的 API 看回應對不對。先把「能跑」做好，再追求「寫得美」。

**行動建議**：到實習通搜尋你目標公司的後端實習心得，看看他們提到的「實際 stack」「面試考題」「工作內容」。再對照本文清單找出缺口，從這週開始補一個語言、一個資料庫、一個部署平台。三個月後，你的後端履歷會跟 GitHub 上一堆「跟著教學做 todo list」的同學完全不同層級。
