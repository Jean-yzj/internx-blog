# 全端實習生 90 天養成路徑：從 0 到能交出可上線專案

「我想找全端實習，但完全不知道從哪開始」「網路上資源太多，學了三個月還是只會切版」「履歷上要怎麼證明我會全端？」這是工程系、資工系、甚至跨領域學生最常遇到的卡關。本篇用 90 天 / 12 週的明確進度表，帶你從零開始，最後交出一個有完整 README、有測試、有部署網址的個人作品。重點不是學一堆技術，而是把「能上線」這件事走完一次。

## 一、為什麼是 90 天？

90 天大約是一個學期、或一個暑假再加一點。比這個短，你來不及把全端流程走完一輪；比這個長，你的動力會被「無限學新東西」的焦慮稀釋掉。三個月恰好是一個「能逼自己交件」的長度。

### 1. 全端實習生真正被檢驗的是什麼？
不是你會多少 framework，而是「**你能不能獨立把一個想法做成可以上線的網站**」。HR 與面試官最在乎的是：你有沒有 GitHub repo、有沒有部署網址、有沒有寫 README、有沒有處理過真實的資料庫與認證。

### 2. 90 天的目標不是「精通」，是「打通」
你不需要在 90 天內學完 React 所有 hooks、Next.js 所有 API、Tailwind 所有 utility class。你需要的是「能夠拼起一條從前端到後端、從本地到部署的完整路徑」。打通了這條路，後面要深化哪一段都好辦。

### 3. 一份能上線的作品 > 三份未完成的教學跟做
許多學生卡在「跟著 YouTube 教學做了三個 todo list」，但都沒有真正部署、沒有寫 README、沒有處理真實使用者註冊。實習面試官一眼就看穿。**完整度永遠勝過花俏度**。

## 二、Week 1-2：環境設置與基礎複習

第一週很多人會想跳過，覺得「我已經會 HTML 了」。錯。第一週的重點不是學語法，而是把整個開發環境弄到位，讓未來 10 週都不用再分心處理工具問題。

### 1. 編輯器與 AI 協作工具
- **VS Code**：免費、社群最大，幾乎所有實習公司預設用這個。
- **Cursor**：以 VS Code 為基底加上強大的 AI 編輯能力，2026 年實習生幾乎人手一套。
- **GitHub Copilot**：在 VS Code 內提供 AI 補全；學生方案門檻較低。

選一個用順就好，建議 Cursor 或 VS Code + Copilot。AI 工具會讓你的學習速度翻倍，但記得**不要讓 AI 幫你跳過理解**——你還是要看得懂它寫的每一行。

### 2. Runtime 與套件管理
- **Node.js**：裝 LTS 版本即可。
- **Bun**：新一代 JS runtime，安裝套件比 npm 快非常多。實習常見一邊用 Node，一邊在新專案試 Bun。
- **pnpm**：許多公司用 pnpm 管理 monorepo，建議也裝起來。

### 3. Git 與 GitHub
這兩週至少要做完三件事：
1. 在 GitHub 建立帳號，用真實名字、放專業頭像。
2. 學會 `git init / add / commit / push / pull / branch / merge`。
3. 練習一次「fork → clone → branch → PR → merge」的完整流程。

### 4. HTML / CSS / JavaScript 基礎複習
不要看完整本《You Don't Know JS》。建議每天花 1 小時複習：
- HTML 語意化標籤（`section`、`article`、`nav`、`main`）
- CSS Flexbox 與 Grid（這兩個搞清楚，95% 切版場景都能解決）
- JS：`let / const`、箭頭函式、解構、`async / await`、`fetch`、`Array.map / filter / reduce`

### 5. 兩週交件
做一個**靜態履歷網站**，純 HTML/CSS/JS，部署到 GitHub Pages 或 Vercel。這個小作品讓你完整走過「寫 → commit → push → 部署」的流程。

## 三、Week 3-4：React + TypeScript 基礎

到這裡你已經有開發環境了，正式進入主菜。

### 1. 為什麼是 React + TypeScript？
2026 年台灣與全球前端職缺的最大公約數就是 React，而新專案幾乎都是 TypeScript（簡稱 TS）。你只學 JavaScript 不寫 TS，履歷投出去就會自動降一個段位。

### 2. 兩週重點
- **React 19 核心**：function component、JSX、props、`useState`、`useEffect`、event handler、條件渲染、列表渲染。
- **TypeScript 基礎**：`type` vs `interface`、`string` / `number` / `boolean` 基礎、Array 與 Object 型別、`Props` 型別怎麼宣告、`useState<T>()` 怎麼寫。
- **建立專案的方式**：用 **Vite** 建 React + TS 專案（不要用已經被官方退場的 Create React App / CRA）。

### 3. Week 3-4 交件：Todo List
不要小看這個練習。一個完整的 Todo List 要包含：
- 新增、刪除、編輯、勾選完成
- 分類（全部 / 未完成 / 已完成）
- 用 `localStorage` 把資料存下來
- 用 TypeScript 寫，每個元件都有明確型別
- 部署到 Vercel

完成後你可以在履歷上寫第一個「**有 GitHub repo + 部署網址**」的作品。

## 四、Week 5-6：Next.js App Router

純 React 已經能做出單頁應用 SPA，但實習公司最愛的是 **Next.js**——因為它幫你解決路由、SEO、資料載入、API 等一連串問題。

### 1. App Router vs Pages Router
Next.js 過去有兩套系統：Pages Router（舊）與 App Router（新）。新專案幾乎全部走 App Router，這也是 Next.js 官方推薦的方向。Pages Router 仍會在 legacy 專案出現，知道有這東西即可。

### 2. 兩週重點
- **路由**：用資料夾結構決定 URL；`app/about/page.tsx` 對應 `/about`。
- **layout.tsx**：共用的版面（如 navbar、footer）。
- **Server Component 與 Client Component**：預設是 Server，加上 `"use client"` 才會變 Client。Server 適合資料抓取、Client 適合互動（按鈕、表單、狀態）。
- **動態路由**：`app/posts/[slug]/page.tsx`。
- **資料抓取**：在 Server Component 裡直接 `await fetch(...)`。

### 3. 一個最簡 page.tsx 範例

```tsx
// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json() as Promise<{ title: string; body: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
    </main>
  );
}
```

這就是 2026 年最典型的 Next.js App Router server component。看懂這段，你已經贏過一半投實習的學生。

### 4. Week 5-6 交件：個人 Blog
做一個 Next.js + TypeScript 的個人 blog，文章可以先用 markdown 檔放在 repo 裡。之後 Week 7-8 再升級成「從資料庫讀文章」。

## 五、Week 7-8：後端與資料庫

到這裡你還只會「讀靜態資料」。實習公司要的是會「寫資料庫」的人。

### 1. 為什麼選 PostgreSQL + Prisma 或 Drizzle？
- **PostgreSQL** 是 2026 年新專案的第一首選關聯式資料庫。
- **Prisma** 是 TypeScript 圈最主流的 ORM，型別安全、語法直覺。
- **Drizzle** 是 2024 年起興起的輕量 ORM，效能好、SQL 風格更明顯。

兩個都值得會，先學 Prisma，行有餘力再看 Drizzle。

### 2. 雲端 PostgreSQL 怎麼挑？
本機可以裝 PostgreSQL 練習，但部署時建議用：
- **Supabase**：PostgreSQL + Auth + Realtime，免費層友善。
- **Neon**：PostgreSQL serverless，冷啟動快。

不要用已經取消免費方案的 PlanetScale 當作「免費教學首選」。

### 3. Prisma schema 範例

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  body      String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 4. Next.js Route Handlers
取代過去 Pages Router 的 API Routes，App Router 用 `app/api/posts/route.ts`：

- `GET` 撈列表
- `POST` 新增
- `PATCH` 更新
- `DELETE` 刪除

兩週交件：把 Week 5-6 的 blog 升級成「文章存資料庫、可從後台新增 / 編輯 / 刪除」。

### 5. 中段提醒
這份技術 stack 變動快，每年至少自查一次。Next.js、Prisma、Drizzle 等工具大版本更迭頻繁，文章寫的 API 隔半年就可能略有調整，學的時候**永遠以官方文件為準**。

## 六、Week 9-10：認證與美化

### 1. 認證怎麼做？
- **Clerk**：開箱即用，UI 完整，免費層適合作品集。
- **Auth.js（原 NextAuth）**：免費、可自架，掌控度高，但設定較細。
- **Supabase Auth**：如果你用 Supabase 當資料庫，認證也順便整合。

實習生作品集建議從 Clerk 或 Auth.js 開始；如果你後端已經選 Supabase，就用 Supabase Auth 一條龍。

### 2. Tailwind CSS + shadcn/ui
- **Tailwind CSS**：utility-first 的 CSS 框架，2026 業界主流。
- **shadcn/ui**：基於 Radix UI 的元件樣式系統，把元件（Button、Dialog、DropdownMenu）直接「複製」到你的 repo，可自由改寫。

不要再寫純 CSS 一個個 class。Tailwind + shadcn/ui 是現代前端的「省力組合」。

### 3. 額外推薦
- **TanStack Query**：管理伺服器狀態（fetch、cache、refetch）。
- **React Hook Form + Zod**：表單與驗證的黃金組合。
- **Framer Motion**：要做動畫時，比手寫 CSS animation 直覺很多。

兩週交件：把 blog 加上「使用者註冊登入」「只有作者能編輯自己文章」「整體用 Tailwind + shadcn/ui 重新美化」。

## 七、Week 11-12：部署、README、收尾

最後兩週往往是學生最常省略的，但**這是把作品從「自己做的小東西」變成「可以投實習的作品集」的關鍵階段**。

### 1. 部署
- **Vercel**：Next.js 首選，幾乎 zero-config。
- **Cloudflare Pages**、**Netlify**：靜態與 Edge Function。
- **Zeabur**：台灣本地的部署平台，繁中介面友善。
- **Railway**、**Render**、**Fly.io**：適合需要長駐服務的後端。

實習作品集 90% 用 Vercel 就夠了。記得把 `DATABASE_URL` 等敏感資訊放在 Vercel 的 Environment Variables，**絕對不要 commit 進 repo**。

### 2. README 該寫什麼？
HR 與面試官打開你的 repo 第一眼就是 README。一份合格的 README 包含：

1. **一句話介紹**：這是什麼、為誰做的。
2. **截圖或 GIF**：放在最上方，視覺先行。
3. **Demo 連結**：vercel 部署網址。
4. **技術 stack**：清楚列出 Next.js / TypeScript / Prisma / PostgreSQL / Tailwind / Clerk。
5. **本地啟動方式**：clone → install → env → dev。
6. **架構簡圖**：哪些是 server component、資料流怎麼走。
7. **未來可優化方向**：展現你知道哪裡還不夠。

### 3. 加上測試
寫一兩個測試就好，但要有：
- **Vitest**：單元測試。
- **Playwright** 或 **Cypress**：E2E 測試（例如登入流程）。

不需要追求高覆蓋率，能讓履歷寫「使用 Vitest 與 Playwright 撰寫單元與 E2E 測試」就大勝多數同學。

### 4. GitHub repo 整理
- 寫清楚的 commit message（推薦 Conventional Commits：`feat:`、`fix:`、`chore:`）。
- 把 README 的截圖放在 `docs/` 資料夾。
- 在 repo 描述欄寫一句話 + 部署網址。
- 在你的 GitHub profile pin 這個 repo。

## 八、12 週進度檢核表

| 週次 | 主題 | 應該完成 | 自我檢查 |
|------|------|----------|----------|
| 1-2 | 環境設置 + 基礎複習 | 靜態履歷網站部署到 Vercel | 你能用 Git 完成 PR 流程嗎？ |
| 3-4 | React + TypeScript | Todo List（含 localStorage） | 你能解釋 props 與 state 差別嗎？ |
| 5-6 | Next.js App Router | 個人 blog（檔案版） | 你知道 server vs client component 差別嗎？ |
| 7-8 | 後端 + 資料庫 | blog 改用 PostgreSQL + Prisma | 你能畫出資料流圖嗎？ |
| 9-10 | 認證 + Tailwind | blog 有登入、有美化 | 你能說明 Clerk / Auth.js 怎麼選嗎？ |
| 11-12 | 部署 + README + 測試 | 完整可上線作品 | 陌生人看 README 能跑起來嗎？ |

## 九、實習生最常踩的三個坑

### 坑一：學太多東西、做不完一個
與其學了 React、Vue、Svelte、Astro，每個都做半個作品，不如把 React + Next.js 那一條路走到底。**深度比廣度值錢**，至少在實習階段是這樣。

### 坑二：只跟教學影片做，沒寫過自己的需求
教學影片做完的 Todo 與你「自己想做的功能」中間差了一條鴻溝。**至少在 Week 5 之後，每週要花一半時間做自己想做的東西，而不是繼續看教學**。

### 坑三：忘記部署、忘記寫 README
本機跑得起來不算數。**沒有部署網址的作品，在 HR 眼裡幾乎等於沒做**。記得把部署當作每個專案的「驗收標準」。

## 十、FAQ：學生最常問的問題

**Q1：沒學過 React 來得及在 90 天內走完嗎？**
來得及，但前提是你每天能投入 2–3 小時、週末多花一點。如果你還在學期中、課業重，可以把進度拉長到 16 週（一個學期）。**重點不是準時，是有完成**。

**Q2：沒寫過後端能做全端嗎？**
能。Next.js Route Handlers 已經把後端門檻降得很低，搭配 Prisma 自動生成 SQL，你不用先學一年 Express 再學前端。許多 2026 年的全端實習就是「Next.js 一條龍」。

**Q3：90 天結束後我能投實習嗎？**
能，且應該投。你會擁有：一個有資料庫、有認證、有部署、有 README 的完整作品。比起多數只會「跟著做 todo」的同學，這已是中段班水準。中型新創、SaaS 公司、台灣本地科技公司（Dcard、KKBOX、Pinkoi、17LIVE 等）的全端實習都會看這種完整度。

**Q4：要不要學 Bun / Hono / tRPC 這些新工具？**
有餘力可以加碼，但不要因此延誤進度。**90 天的目標是走完一輪 Next.js + Prisma + Vercel，其他工具等你開始實習再加學**。

**Q5：要不要刷 LeetCode？**
全端實習面試很少考 LeetCode 中等以上題目，多半考前端基礎、JS 觀念、簡單 DOM / async 題。每天 1 題簡單到中等的 JS 題目就夠，不要把 90 天的時間都拿去刷題。

**Q6：實習薪資大概多少？**
台灣全端實習生月薪通常從 NT$28,590（基本工資線）起跳，外商與大型科技公司可達 NT$45,000 以上，部分頂尖實習計畫會更高。但**作品集成熟度**比薪資更會決定你能不能拿到 offer。

## 十一、結語：90 天不是終點，是入場券

90 天結束時，你不會變成資深工程師，也不會懂分散式系統。但你會擁有：能跟面試官 30 分鐘流暢聊技術選型的底氣、一個面試官打開就能跑的 repo、以及繼續往前走的肌肉記憶。

**請記得三個關鍵原則**：
1. **完整度勝於花俏度**：能上線、能跑、有 README 比用很潮的工具重要。
2. **每週一定要交件**：再小的功能也要 commit、push、部署，避免無盡學習迴圈。
3. **AI 工具是加速器，不是替身**：用 Cursor 與 Copilot 加速，但每行程式碼都要看得懂。

**行動建議**：今天就在 GitHub 開一個新 repo，名字叫 `90days-fullstack`，把 README 第一行寫上「Day 1: starting today」。明天第二行寫「Day 2: ...」。一個月後回頭看，你已經比 80% 的同學走得遠。然後到實習通搜尋全端、前端、Next.js 相關實習心得，看看真實面試官最在意什麼，把那些重點放回你的 90 天計畫裡。

## 十二、補充：90 天結束後該做什麼？

很多學生問完 90 天會迷茫：「我做完了第一個作品，下一步呢？」這裡給你三個方向，挑一條走半年，履歷與技術深度會再翻一倍。

### 1. 把作品「商業化」
找一個你身邊真的有人在用的小痛點：宿舍訂飲料分帳、學校社團報名表、家裡長輩的健身紀錄。把作品做成「真的有十個使用者」的小產品。實習面試最有殺傷力的故事不是「我用 Next.js 做了部落格」，而是「我做了一個工具，有 30 個學弟妹在用，每週活躍 12 人」。

### 2. 加深一個方向
- **效能與最佳化**：學 React Server Component 的進階用法、Suspense、Streaming、ISR。
- **資料庫進階**：學索引設計、N+1 query 問題、connection pool。
- **AI 整合**：把作品加上 LLM 功能（聊天、摘要、推薦）。

選一個你覺得有趣的方向，做兩到三個小實驗，把過程寫成部落格文章。

### 3. 開始貢獻 Open Source
找一個你常用的小工具（例如 shadcn/ui、Drizzle、Hono），翻它的 issue 列表，找標記為 `good first issue` 的開始。一個 PR 被 merge，履歷上就能寫「貢獻 OSS 工具，被合併進 main branch」。這對工程實習面試官的吸引力，遠大於多做一個 todo list。

完成這三個方向之一，你已經不只是「會走完一輪全端」的學生，而是「能持續往一個專業方向深耕」的工程實習生。下一次投履歷時，這個差別會直接反映在你拿到的面試邀請數量上。
