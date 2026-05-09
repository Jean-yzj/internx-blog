# 前端實習生 2026 必懂技術棧：React + Next.js + TypeScript + Tailwind

「我會 HTML、CSS、一點 JavaScript，這樣可以投前端實習嗎？」「為什麼面試官一直問我 TypeScript？」「公司徵才寫『熟 React 與 Next.js App Router 者佳』，App Router 又是什麼？」這幾年前端實習的門檻明顯在抬高，當你還在背 jQuery 語法、複習 Bootstrap 時，同期同學已經在 GitHub 上放好 Next.js + TypeScript 的個人作品。本篇文章帶你看清 2026 年前端實習真正在用的技術棧、該丟掉哪些舊知識、以及如何在大三、大四前就把履歷練到能投旗艦級實習。

## 一、為什麼前端實習門檻在升高？

十年前的前端是「會切版」就能進門，五年前要會 React 才有人面試，到了 2026 年，大廠與好的新創普遍要求實習生**第一天進公司就能看懂 TypeScript、能在 Next.js 專案裡新增頁面、能用 Tailwind 寫出 design system 風格的元件**。

### 1. 工具鏈成熟，企業期待提高

過去寫前端要花三個月配 Webpack、處理 Babel、調 ESLint，現在 Vite、Next.js、Bun 都把這些事情包好。企業既然不用你「設定環境」，就會期待你「直接生產功能」。實習生第一週交不出元件已經會被主管在心裡記一筆。

### 2. AI 輔助降低「寫得出來」的門檻，提高「看得懂」的門檻

Cursor、Claude Code、GitHub Copilot 把產生程式碼的速度提高十倍，但 AI 寫出的 code 你看不懂、不會 review、無法判斷是否符合規範，企業反而更不敢用你。**新一代前端實習生最重要的能力是「閱讀」與「審查」，不只是「會打字」。**

### 3. 設計系統與元件庫普及

shadcn/ui、Radix UI、Headless UI 等 a11y 友善元件庫成為主流。實習生若還在用 Bootstrap 4 或自己手刻所有元件，會被視為跟不上時代。

### 4. 全端化趨勢

Next.js App Router、tRPC、Vercel AI SDK 把前後端的界線抹平，企業更願意把資源放在「能寫一條 feature 從 UI 到 API 的人」，純切版工程師的位置正在縮小。

## 二、核心技術棧：六樣缺一不可

以下六樣是 2026 年前端實習最常被點名的技術，建議在投履歷前每一項至少做過一個小專案。

### 1. React 19

React 19 已是穩定版，伺服器元件（Server Components）、Actions、`use` hook、自動 memoization（透過 React Compiler）都是焦點。實習生要懂：

- 元件的 props、state、lifecycle 心智模型
- Hooks：`useState`、`useEffect`、`useMemo`、`useCallback`、`useRef`、`useContext`
- 伺服器元件 vs 客戶端元件的差異（"use client" 指令）
- Suspense 與資料載入的搭配

### 2. Next.js（App Router 為主）

Next.js 是 2026 年台灣與全球前端實習最常見的全端框架。**App Router** 是現在主流，Pages Router 雖然還能用，但新專案幾乎都用 App Router。要會：

- File-based routing（資料夾結構即路由）
- Layout、Loading、Error、Not Found 慣例
- Server Actions（表單直接呼叫伺服器函式）
- Route Handlers（取代舊版 API Routes）
- Middleware、ISR、Streaming

### 3. TypeScript

新專案幾乎全 TS。實習生要會的不是「能寫複雜泛型」，而是：

- 基本型別：`string`、`number`、`boolean`、`array`、`object`
- Interface vs Type、Union、Intersection
- 泛型基礎（看得懂 `Array<T>`、`Promise<T>`）
- React 元件的 props 型別寫法
- 跟 Zod 搭配做 runtime 驗證

### 4. Tailwind CSS

Tailwind 是業界主流的 utility-first CSS 框架。會 Tailwind 比會「寫 BEM」「會 SCSS」更有競爭力。重點是：

- 知道常用 utility（spacing、color、flex、grid、responsive prefix）
- 會用 `@apply` 與 `tailwind.config.ts` 客製主題
- 搭配 shadcn/ui 直接生產美觀元件

### 5. shadcn/ui

shadcn/ui 不是「npm 安裝的元件庫」，而是用 CLI 把元件原始碼複製到你的專案，搭配 Radix UI 與 Tailwind。優點是 a11y 完整、可深度客製、不會被鎖在第三方版本。2024 起在台灣新創與外商爆紅，2026 仍是首選。

### 6. Radix UI / Headless UI

無樣式（headless）但 a11y 完整的元件庫。Modal、Dropdown、Tabs 這種互動元件，自己手刻常出 bug，用 Radix 或 Headless 包好的 primitives 才符合產業標準。

## 三、工具鏈：你的開發環境長這樣

### 1. Vite

Vite 是新前端專案的首選 dev server / bundler，啟動快、HMR 順暢，幾乎完全取代 Create React App（CRA）。CRA 從 2023 起官方不再推薦，**履歷上不要寫「使用 CRA 建立專案」**。

### 2. Bun

Bun 是新一代 JavaScript runtime，可作為 Node 的替代，啟動速度快很多、內建 bundler 與 test runner。許多新專案 dev 環境改用 Bun，但 production 仍多以 Node 為主。實習生會用 `bun install`、`bun dev` 是加分項。

### 3. ESLint + Prettier

程式碼品質與格式化的標配。實習生要會：

- 在 VS Code 設定存檔自動格式化
- 看得懂 ESLint 報錯、能根據 rule 修正
- 知道團隊有 `.eslintrc` 或 `eslint.config.js` 時要遵守

### 4. Git + GitHub

每個前端實習都會問你 GitHub。建議至少：

- 會 branch、commit、PR 流程
- 會 rebase 與 merge 的差異
- GitHub 上有 1–2 個能 demo 的專案

## 四、狀態管理：別再用 Redux 了

### 1. TanStack Query（原 React Query）

2026 年實習公司問「你怎麼處理 server state」時，標準答案是 TanStack Query。它幫你管理快取、重試、refetch、樂觀更新，不用自己寫一堆 `useEffect` + `fetch`。

### 2. Zustand

純 client state（如 UI 開關、表單暫存）用 Zustand 已是主流。Redux 仍存在於大型 legacy 專案，但**新專案 95% 不會選 Redux**。Zustand 學習曲線小到一個下午就能掌握。

### 3. React Context

Context 適合「全域少量、變動不頻繁」的資料（語系、主題、登入使用者）。實習生常見錯誤是把所有 state 都塞進 Context，導致整個 App 重 render。

## 五、表單與驗證：React Hook Form + Zod

幾乎所有前端實習都會碰到表單。2026 主流組合：

- **React Hook Form（RHF）**：表單狀態管理，效能優於 Formik
- **Zod**：runtime 型別驗證，且能直接推導 TypeScript 型別

兩者搭配 `@hookform/resolvers/zod`，能在前端與後端用同一份 schema 驗證，是現代前端的黃金組合。

## 六、測試：實習生最被低估的加分項

### 1. Vitest

Vite 生態的 test runner，與 Jest 介面相容但快很多。寫單元測試與元件測試的標配。

### 2. Playwright

E2E 測試的主流工具，支援多瀏覽器、自動等待、screenshot 比對。Cypress 仍存在但 Playwright 在新專案中更常見。

### 3. 為什麼實習生要會寫測試？

**多數實習生履歷上沒有「測試」兩字，這正是你脫穎而出的機會。** 在 GitHub 個人專案上加上 Vitest 與一兩支 Playwright 測試，HR 看到會直接幫你貼上「有專業意識」的標籤。

## 七、部署：把作品送上線

實習面試官最常問的一句是：「我可以開哪個網址看你的作品？」如果你只能傳壓縮檔，瞬間扣分。

### 1. Vercel

Next.js 的爸爸，部署最快、預覽 PR 最方便。個人作品優先選 Vercel。

### 2. Cloudflare Pages / Workers

效能極佳，全球邊緣節點，適合靜態網站與輕量 API。Cloudflare Workers 在 2026 是 serverless 重要選項。

### 3. Zeabur

台灣本地服務，UI 親切、支援多種服務（前端、後端、DB），對台灣實習生很友善，特別是要部署全端專案時。

### 4. Netlify、Railway、Render、Fly.io

各有定位，但實習生先學 Vercel + Cloudflare 即可，多個平台精通不如一個用熟。

## 八、過時技術 vs 2026 主流：對照表

| 類別 | 過時 / 不要寫 | 2026 主流 |
|------|--------------|----------|
| 建立專案 | Create React App（CRA） | Vite、Next.js、Bun |
| Bundler | Webpack（手刻設定） | Vite、Turbopack |
| 樣式 | Bootstrap 4 以前、純 CSS 全手刻 | Tailwind CSS + shadcn/ui |
| 路由 | Next.js Pages Router（legacy） | Next.js App Router |
| 狀態管理 | Redux 全包式架構 | TanStack Query + Zustand |
| 表單 | 純手刻 onChange 全套 | React Hook Form + Zod |
| 測試 | 沒寫 | Vitest + Playwright |
| 型別 | 純 JavaScript | TypeScript |
| 元件庫 | 老牌 UI kit、自己手刻所有元件 | shadcn/ui + Radix UI |
| 框架 | AngularJS（Angular 1）、Vue 2 | React 19、Vue 3 + Nuxt 3、SvelteKit |
| 行動 App | Cordova / PhoneGap | React Native + Expo、Flutter |

> **提醒**：技術棧每年至少自查一次。本表整理於 2026 年 5 月，半年到一年內就可能出現新工具或主流轉移，要養成定期到 GitHub trending、State of JS、Vercel 部落格、Next.js 官方更新追蹤的習慣。

## 九、實戰範例一：React 19 + TypeScript 元件

下面是一個用 TypeScript 寫的「按讚按鈕」元件，包含 props 型別、`useState`、事件處理：

```tsx
import { useState } from "react";

type LikeButtonProps = {
  initialCount?: number;
  onLike?: (count: number) => void;
};

export function LikeButton({ initialCount = 0, onLike }: LikeButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function handleClick() {
    const next = liked ? count - 1 : count + 1;
    setCount(next);
    setLiked(!liked);
    onLike?.(next);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
    >
      {liked ? "已按讚" : "按讚"} · {count}
    </button>
  );
}
```

重點觀察：

- `LikeButtonProps` 是元件 props 的型別（用 `type` 也可以用 `interface`）。
- `initialCount?: number` 表示 optional，預設值寫在解構時。
- `onLike?.(next)` 是 optional chaining，呼叫前先檢查存在。
- Tailwind class 直接寫在 className，不需要外部 CSS 檔。

## 十、實戰範例二：Next.js App Router 路由與資料載入

下面是 Next.js App Router 的一個動態路由頁面 `app/posts/[slug]/page.tsx`，它在伺服器端取資料、再丟給客戶端元件：

```tsx
// app/posts/[slug]/page.tsx
type Params = { slug: string };

async function fetchPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    next: { revalidate: 60 }, // ISR：60 秒內重用快取
  });
  if (!res.ok) throw new Error("Failed to load post");
  return res.json() as Promise<{ title: string; body: string }>;
}

export default async function PostPage({ params }: { params: Params }) {
  const post = await fetchPost(params.slug);

  return (
    <article className="prose mx-auto py-8">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
```

重點觀察：

- 整個 `PostPage` 是 **Server Component**（檔案上方沒有 `"use client"`），可直接 `await` 資料。
- `next: { revalidate: 60 }` 是 Next.js 內建的 ISR（增量靜態再生）。
- 動態路由 `[slug]` 透過 `params.slug` 取得。
- 真實專案會把 `fetchPost` 放在獨立 `lib/api.ts`，並加上錯誤處理與 loading UI（透過 `loading.tsx`）。

## 十一、履歷該展示什麼：一個能上線的個人作品

實習生履歷上「會 React」的人成千上萬，能讓 HR 多看你三秒的，是**一個能點開的真實作品**。建議規格：

### 1. 主題

不要做「TODO List」「天氣 App」這種百搭題目。改做：

- 你大學社團活動報名表（搭配 Google Sheets 或 Supabase 後端）
- 為某科系課程做的學長姐筆記分享平台
- 解決你自己生活問題的小工具（追劇進度、健身紀錄、語言學習打卡）

### 2. 技術棧

至少包含：Next.js（App Router）+ TypeScript + Tailwind + shadcn/ui + 一個資料庫（Supabase 或 Firebase 最快）+ 部署到 Vercel 或 Zeabur。

### 3. README 寫清楚

- 線上 Demo URL
- 截圖或 GIF
- 用了哪些技術、為什麼選
- 未來要加什麼功能

### 4. 加分項

- 一兩支 Vitest 測試
- 一個 GitHub Actions CI workflow
- 一份簡短的 architecture 圖

> **提醒**：實習薪水台北普遍落在每月 NT$28,590（基本工資）以上，外商或大型新創前端實習生月薪可超過 NT$40,000。這數字不是給你拿來開條件的，而是讓你知道**值得投資多少時間打磨作品**。

## 十二、常見錯誤訊號（履歷上千萬不要寫）

1. 「精通 jQuery」——jQuery 不是 2026 主流，**寫精通會被當成卡在 2015 的求職者**。
2. 「使用 Create React App 建立專案」——直接把你打成跟不上時代的人。
3. 「熟悉 Webpack 設定」——除非你應徵的是 build tool 團隊，不然這句話對 99% 職位無加分。
4. 「Vue 2 + Vuex」——Vue 2 已 EOL，新公司不會用。
5. 「精通 Bootstrap」——除非是 legacy 專案，不然要寫 Tailwind。
6. 「會 AngularJS（Angular 1）」——AngularJS 已停止支援多年。

## 十三、FAQ：學生最常問的 5 個問題

**Q1：我還在學 jQuery，來得及學現代前端嗎？**
完全來得及。jQuery 在 2026 仍會出現在 legacy 專案，但**不要把學 jQuery 當主軸**。你應該直接跳 React + TypeScript + Next.js。jQuery 的概念（DOM 操作、事件）放在小章節學就夠，不要花一個學期。

**Q2：要不要學 Vue 還是直接學 React？**
台灣實習市場 React 職缺明顯多於 Vue，建議**先精通 React**。Vue 3 + Nuxt 3 是優秀生態，但如果你只能選一個，選 React。等到入行後再評估是否補 Vue。

**Q3：沒學過 TypeScript 該怎麼補？**
最快的方法是**直接在新專案就用 TS**，不要分「先學 JS 再學 TS」。建議路徑：

1. 看 `typescriptlang.org/docs/handbook` 前五章（一個下午）
2. 用 Vite + React + TS 模板開一個小專案
3. 寫的時候不要用 `any`，逼自己定 type
4. 兩週後你會比沒碰過的同學強很多

**Q4：要學 Webpack 嗎？**
不用花時間學設定。看得懂概念即可，新專案都用 Vite。除非你要做 build tool 工程師，否則 Webpack 設定的 ROI 在 2026 已經很低。

**Q5：AI 工具會不會讓前端工程師被取代？**
短期內不會取代，但會大幅改變工作內容。AI 工具（Cursor、Claude Code、Copilot）會把「打字」自動化，**剩下值錢的是「判斷品質、設計架構、與人合作」**。實習生越早把 AI 工具納入工作流程越好，但不要因此偷懶不學底層。看不懂 AI 寫的 code 就無法 review，反而會被淘汰。

## 十四、進階：你做完上面後再學什麼？

當你已經熟悉 React + Next.js + TypeScript + Tailwind 的核心，可以擴展：

### 1. 前端效能

Web Vitals（LCP、FID、CLS）、bundle 分析（`next build` 後看 size）、code splitting、image 最佳化。

### 2. 後端基礎

Server Actions、Route Handlers、tRPC、Prisma 或 Drizzle ORM。**會一點後端的前端最值錢**。

### 3. 動畫

Framer Motion 是 React 生態最主流的動畫庫，UI/UX 細節做出層次的關鍵。

### 4. 行動端

React Native + Expo 是現在跨平台 App 的首選，前端轉行動端最自然。

### 5. AI 整合

Vercel AI SDK 讓你在前端整合 LLM 變得超簡單。會用 `useChat`、串流回應，是 2026 履歷的差異化亮點。

### 6. 無障礙（a11y）

實習生很少主動學 a11y，但這正是進大廠的差異化能力。基本要會：semantic HTML、`alt` 屬性、ARIA role、鍵盤導覽（Tab、Enter、Esc）、focus 狀態。Radix UI 與 Headless UI 已替你處理大半，但你要懂背後在做什麼。

### 7. 國際化（i18n）

許多台灣實習公司產品要支援繁中、英文、有時還有日文或東南亞語系。Next.js 內建 i18n routing，搭配 `next-intl` 或 `react-i18next` 是實務常見組合。會處理多語系資料、字串複數、日期/數字本地化的實習生很受歡迎。

## 十五、結語：前端是「快」「美」「實」的綜合競賽

前端實習不是只考「會不會 React」，而是考你**能不能把一個構想，從設計到上線、再到能維護**。React 是工具、Next.js 是平台、TypeScript 是保險、Tailwind 是手感、shadcn/ui 是品味、Vercel 是讓人看得到的舞台。把這六件事練熟，你的履歷就會跟同期同學拉開明顯距離。

**三個關鍵原則**：

1. **學主流而非冷僻**：React + Next.js + TypeScript + Tailwind 是 2026 最大公約數，不要花時間學 90% 公司不會用的技術。
2. **作品能上線比什麼都重要**：HR 不會花十分鐘看你的 GitHub README，但會花三秒鐘點開你的 Demo URL。
3. **每年自查一次技術棧**：前端工具汰換快，今天的最佳解可能十二個月後就被取代。把「主動更新」當成這份職業的基本費用。

**行動建議**：今天就到實習通搜尋你想去的公司，看看真實實習生在心得中提到的「他們公司用什麼框架」「實際工作的開發流程」。再對照本文清單，找出你最缺的那一塊，從這週開始補。一個月後你會發現，自己的履歷已經跟同期同學完全不同層級。
