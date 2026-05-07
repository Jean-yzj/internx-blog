# 實習通部落格 (InternX Blog)

30 篇實戰文章，涵蓋找實習、面試準備、職涯選擇、文科生進科技業、累積經驗等主題。

## 技術

- Next.js 14（pages router）
- Tailwind CSS + `@tailwindcss/typography`
- Markdown 渲染：`gray-matter` + `remark` + `remark-gfm` + `remark-html`
- 部署：Zeabur（GitHub 連動，push 自動部署）

## 本地開發

```bash
npm install
npm run dev
```

開啟 http://localhost:3000

## 加 / 改文章

把 `.md` 放進 `content/posts/`，檔名遵守 `<NN>-<slug>.md` 格式（例：`31-new-topic.md`）。

每篇第一行 `# 大標題` 會被當成文章標題。`lib/posts.js` 的 `SERIES_MAP` 控制每篇歸在哪個系列、用哪個顏色。

## 部署

Push 到 main 分支，Zeabur 會自動 build 並部署。

## 文章系列

- 1–6：找實習
- 7–11：面試準備
- 12–16：找方向
- 17–21：文科進科技
- 22–27：累積經驗
- 28–30：進階主題
