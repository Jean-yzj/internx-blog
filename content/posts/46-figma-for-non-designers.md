---
num: 46
title: "Figma 速成：行銷與 PM 也要看得懂的設計工具"
intro: "「Figma 不是設計師才用的嗎？」在 2026 年該打破這個誤會。行銷實習生用 Figma 做活動視覺草稿、PM 實習生畫 wireframe 對需求、業務做提案、HR 設計招募 LP。本篇 30 分鐘帶你掌握 Frame、Auto Layout、Dev Mode、Comment 這四個非設計師最常用的功能。"
slug: 46-figma-for-non-designers
series_slug: digital-tools
series_name: "數位工具"
source: https://internx-blog.zeabur.app/posts/46-figma-for-non-designers
---
# Figma 速成：行銷與 PM 也要看得懂的設計工具

「Figma 不是設計師才用的嗎？」這個誤會在 2026 年該打破了。今天的行銷實習生要用 Figma 做活動視覺草稿、PM 實習生要用 Figma 畫 wireframe 跟工程師對需求、業務實習生要用 Figma 做提案海報、甚至 HR 都會用 Figma 設計招募的 LP。會看 Figma 不再是 nice to have，而是 must have。本篇用最少時間帶你看懂 Figma 的核心觀念，足以讓你在第一週進公司時不被「打開這個 mockup」這句話嚇到。

> **本文時間錨點**：2026-05。Figma 在 Config 2024（Slides）、Config 2025（Make / Sites / Buzz / Draw）大幅擴張產品線；Adobe 收購案已於 2023-12 因歐盟與英國監管壓力中止，Figma 維持獨立公司。各項功能與價格頻繁調整，**請以 figma.com 官網當期公告為準**。

## 一、為什麼 2026 年的非設計師也要會 Figma？

### 1. 跨部門溝通的共同語言

工程師、設計師、PM、行銷主管都用 Figma。當你能進到同一個檔案、留 comment、看 prototype，**你就進入了跨部門協作的核心圈**。否則永遠只能等別人 export 圖給你。

實習通上不少新創、外商與台灣科技公司（台積電、聯發科、Google Taiwan、Microsoft Taiwan、KKday、Dcard、17LIVE、Pinkoi 等）的 PM／行銷／UX 職缺都會在 JD 寫「Familiar with Figma」或「能看懂 Figma 規格」。

### 2. 替代 PowerPoint 與 Photoshop（而且還能直接做網站）

做提案、做海報、做 social media 圖卡，Figma 都比 PPT 漂亮、比 Photoshop 簡單。**2026 年的 Figma 已經不只是設計工具**，Config 2025 之後它擁有 8 條產品線：Figma Design、FigJam、Slides、Dev Mode、Make（AI 生成 prototype/code）、Sites（直接出網站）、Buzz（行銷素材模板化）、Draw（向量繪圖）。免費版功能對實習生綽綽有餘。

### 3. 看得懂規格書

工程師問你「這個按鈕要 16px 還是 14px？」「這個間距是 8 還是 12？」你打開 Figma 一看就有答案，不需要打擾設計師。

### 4. 雲端協作的代表作

Figma 是少數真正做到「即時多人協作」的設計工具。你可以邊跟設計師講話邊在他畫面上點，這個流暢感是 Sketch、Adobe XD 比不上的。Adobe 在 2022-09 宣布要以 200 億美元收購 Figma，但 2023-12-18 兩家公司宣布**因歐盟與英國競爭法監管壓力中止合併**（Adobe 支付 10 億美元分手費），所以 Figma 至今仍是獨立公司，產品路線沒有受到干擾。

## 二、Figma 帳號方案：實習生怎麼開最划算？

2026 年 Figma 主要分四個方案（**正確金額請至 figma.com/pricing 確認**）：

| 方案 | 適合對象 | 公告價格（USD） |
| --- | --- | --- |
| Free（Starter） | 個人試用 / 學生 side project | $0，但限制 3 個 Figma 檔案、3 個 FigJam 檔案 |
| Professional | 小團隊 / 一般公司一般員工 | 年繳約 $12／編輯者／月、月繳約 $15／編輯者／月 |
| Organization | 中大型公司（有 SSO、設計系統需求） | 年繳約 $45／編輯者／月（**僅提供年繳**） |
| Enterprise | 跨國／高合規企業 | 年繳約 $75／編輯者／月（**僅提供年繳**） |

**實習生省錢路線**：

1. **Education Plan 學生免費**：Figma 與 SheerID 合作驗證學生身份，**驗證通過後享 2 年 Professional 等級功能免費**。大專／研究所／博士生／受認可的 bootcamp 學員都符合資格，用學校 email（@xxx.edu.tw、@xxx.ntu.edu.tw 等）申請最快。申請網址：figma.com/education/apply（**請以官網當期資格說明為準**）。
2. **進公司用公司帳號**：實習通上的中大型公司通常會直接給你 Organization 等級的 viewer 或 editor seat，你不用自己付錢。

> 寫文章時的版本：Education plan 約莫每 2 年要重新驗證；過去曾傳出「education plan 即將結束」的傳言，**但官方仍維持此方案至 2026-05**。若你正在大三、大四，現在就申請，這是 Figma 對學生最大的補貼。

## 三、Figma 介面：5 分鐘看懂

打開 Figma 後，畫面分成五個區塊：

| 區塊 | 位置 | 功能 |
| --- | --- | --- |
| Toolbar | 頂部 | 選取、框架、文字、圖形、註解、AI 動作（2025 後新增） |
| Layers Panel | 左側 | 圖層樹、頁面切換、Components 庫 |
| Canvas | 中間 | 你畫東西的主舞台 |
| Properties Panel | 右側 | 選中物件後的屬性編輯（位置、顏色、字體） |
| Comments | 浮動 | 點任何位置可留言 |

### 最重要的快捷鍵

- `V`：選取工具（最常用）
- `F`：建立 Frame
- `R`：建立矩形
- `T`：建立文字
- `K`：縮放（放大縮小元素含內部）
- `Cmd/Ctrl + D`：複製貼上
- `Cmd/Ctrl + G`：群組
- `Cmd/Ctrl + Alt + G`：取消群組
- `Cmd/Ctrl + /`：搜尋任何功能（**這招最重要**，忘記快捷鍵直接用搜尋）

**新手最大誤會**：把所有東西都放進 Group 而不是 Frame。Frame 才是 Figma 的標準容器，下面會解釋。

## 四、最關鍵的兩個概念：Frame 與 Component

### 1. Frame（框架）

Frame 是 Figma 的「畫布容器」。你可以把 Frame 想成一張紙，所有元素都該放在 Frame 裡，而不是直接放在 Canvas 上。

**Frame 的三個好處**：

- 有固定尺寸（手機 375×812、電腦 1440×900 等預設可選）
- 可裁切超出邊界的內容
- 可套用 Auto Layout（下面詳述）

**台灣實習生情境**：你是 Dcard 行銷實習生，要做一張 IG 限動視覺，先建一個 1080×1920 的 Frame，所有設計都在裡面，最後一鍵 export PNG，尺寸完全準確。

### 2. Component（元件）

Component 是「可重複使用的設計元素」。把一個按鈕做成 Component 後，所有用到這個按鈕的地方都會同步更新。

**台灣實習生情境**：你做一份 12 頁的 KKday 行銷活動提案，每頁都有「公司 logo + 標題 + slogan」的 header。把它做成 Component，之後 logo 改了，12 頁同步改，省下 1 小時手動修改。

### 3. Instance（實例）

從 Component 拖出來的副本叫 Instance。你可以在不影響其他 instance 的情況下，覆蓋某個 instance 的文字或顏色。**這就是設計系統的基本單位**——當你聽到工程師說「我們的 design system」，他指的就是「一整套 component + instance + variable」的集合。

## 五、Auto Layout：讓你的設計會「自己排版」

這是 Figma 最強功能，**也是讓你看起來像專業設計師的關鍵**。

### Auto Layout 在做什麼？

讓 Frame 內的元素自動依照「橫向 / 縱向 + 間距 + 內邊距」排列。文字變長時，Frame 自動拉長；新增元素時，自動往下推。**邏輯跟 CSS Flexbox 幾乎一樣**，這就是為什麼工程師能直接讀 Figma 的 spec。

### 三步驟啟用

1. 選中要套用的 Frame 或多個元素
2. 按 `Shift + A`
3. 在右側 Properties 設定方向、間距、padding

### 實習生情境

做一份「卡片列表」（例如台大職涯中心要的活動 listing），每張卡片有圖、標題、副標、按鈕。如果不用 Auto Layout，你要手動對齊每個元素的位置。用了之後，文字變長卡片自動延伸、新增卡片整列自動推開，**改稿時間從 30 分鐘降到 30 秒**。

### Auto Layout 的隱藏好處

你做的設計會「像工程師寫的 CSS」一樣，這讓開發者交接時不需要再「平移數字」，他們直接讀你的 padding 跟 gap，效率倍增。設計師會覺得你「懂」。

## 六、留 Comment 與 Review：實習生最常用的功能

按 `C` 切換到 Comment mode，在 Figma 任何位置點一下就能留言。@ 同事可以發通知。

### 實習生留 Comment 的三種場景

**場景一：Review 設計師的稿**
你是 17LIVE PM 實習生，設計師交一份新功能 mockup 給你 review。你打開逐項檢查：

- 「這裡的 CTA 文字太長，行動裝置會超出」
- 「這個錯誤狀態還沒設計，可以補嗎？」
- 「文案我建議從『送出』改成『立即購買』」

每個 comment 都標 location，設計師一目了然。

**場景二：和工程師對齊規格**
工程師看你的 wireframe，問：「這個 dropdown 的展開行為是什麼？」你直接 reply 在他的 comment 上回答，不用切到 Slack 講半天。

**場景三：客戶／主管 approval**
給主管的提案，主管打 comment 寫：「這頁的色調偏冷，可以調暖一點嗎？」你修完後 resolve 這條 comment，下次主管登入就知道哪些已處理。

## 七、Figma 不只是設計工具：Config 2024 / 2025 後的非典型用法

Figma 在過去兩年快速擴張產品線，**非設計師現在能用 Figma 做的事比 2023 年多很多**：

### 1. 用 Figma Slides 做簡報

Figma 在 **Config 2024（2024-06）發表 Figma Slides 並開放 beta**，目前已成為正式產品。在 Figma 內做投影片，比 PowerPoint 漂亮、比 Google Slides 協作好；可以直接從 Figma Design 拖元件進來。實習生用來做 review meeting、demo day、實習成果報告超適合。（**功能與授權持續演進，請以官方文件為準**。）

### 2. 用 Figma 畫 Wireframe

PM 實習生最大武器。畫一個低保真 wireframe（黑白、無 UI 細節），快速跟工程師、PM、Stakeholder 對齊「我們要做什麼」。比起寫 spec 文件，wireframe 一張勝過千字。Figma Community 上有大量免費 wireframe kit 可以拿來用。

### 3. 用 Figma Buzz 做行銷素材（2025 新產品）

**Figma Buzz 是 Config 2025（2025-05）發表的新產品**，專門給行銷／品牌團隊「在不破壞 brand consistency 的前提下大量產出視覺素材」。實務上：行銷主管把 IG／FB／LINE 素材模板做好，行銷實習生只要替換文案與圖片就能交稿，不會把 brand color 改錯。**價格與授權方式仍在演進，請以官網為準**。

### 4. 用 Figma Sites 直接出網站（2025 新產品）

**Figma Sites 同樣在 Config 2025 發表**。設計師畫好的 LP 可以直接發佈成網站，不用再交給工程師切版。行銷實習生做活動 LP、報名表單頁面，省下一輪 dev 排程。

### 5. 用 Figma Make 從文字描述生 prototype（2025 新產品 + AI）

**Figma Make 是 Config 2025 發表的 AI prompt-to-code 工具**，可以用一句話描述就生出可互動的 prototype 或 mini app。PM 實習生想驗證一個 idea，不用等工程師排兩週，自己先用 Figma Make 跑一版。（**AI 功能仍在快速迭代，credits 用量、輸出品質、可商用範圍請以官方政策為準**。）

### 6. 用 FigJam 跟 AI agent 共同腦力激盪（2026 新增）

FigJam 是 Figma 的白板產品，2021-04 推出。2026 年 Figma 把 FigJam 整合成「AI coding agent 的白板」，行銷／PM 實習生可以跟 AI 一起在 FigJam 上畫流程、發想點子、結構化 brainstorming，輸出可以直接餵給開發。

## 八、Dev Mode：跟工程師交接的橋樑

Figma 在 **2023-06 發表 Dev Mode**（開發者模式），2023 年下半年免費試用，**2024-01 起 Dev Mode 成為付費功能**：在 Professional/Organization/Enterprise 方案中，editor seat 內建 Dev Mode；也可以單買 Dev seat（價格約莫 Organization 每 seat $25／月、Enterprise 每 seat $35／月，**實際以官網為準**）。

### Dev Mode 顯示什麼？

- 元素的精確 px 尺寸與位置
- 顏色的 hex / rgba 值
- 字體名稱、字級、行高
- CSS / iOS（Swift）／Android（XML / Compose）程式碼片段（複製貼上即可）
- 圖片可一鍵 export 多倍率（1x、2x、3x）

### 實習生用 Dev Mode 的場景

**場景一：你跟工程師爭論「按鈕大小」**
打開 Dev Mode，按鈕高度寫得清清楚楚是 44px。爭論結束。

**場景二：你要寫文案 spec**
打開 Dev Mode 看每個文字 block 的字級、行高，能更準確判斷文案要寫多長。

**場景三：你要 export 一張圖**
不用麻煩設計師。Dev Mode 點 Export，PNG / SVG / PDF 任選格式跟倍率。

> **實習生注意**：很多新創的免費／Starter team 並沒有付費 Dev Mode seat。如果你發現自己只能看不能切到 Dev Mode，先問主管「我們公司有沒有開 Dev Mode？」而不是以為是 bug。

## 九、實習生最常踩的 Figma 坑

### 坑一：用 Group 而不是 Frame

Group 沒有尺寸、不能套 Auto Layout、不能設背景色。**90% 的時候你應該用 Frame**。

### 坑二：忘記命名圖層

左側的 layers panel 全是「Frame 1」「Rectangle 47」。三天後你自己也找不到東西。**好習慣是建好 Frame 立刻命名**（例：`btn/primary/default`、`card/event`，斜線會自動建立資料夾結構）。

### 坑三：在 main file 直接亂改

公司的設計師主檔（master file / library file）是有版本控制的。你進去改一改 publish 上去，會搞砸所有人。**永遠先 Duplicate 自己的副本**。如果不確定哪些檔案是 library，去問你的 mentor。

### 坑四：export 解析度錯誤

要給社群用的圖卡 export 1x 太糊；要印刷用 export 1x 直接馬賽克。基本原則：**螢幕用 2x、印刷用 4x 或 PDF**。

### 坑五：以為 Figma 等於 Sketch / Adobe XD

2026 年的 Figma 是「一整個產品生態系」（8 條產品線）而不是單一檔案編輯器。當你看到「FigJam」「Slides」「Make」「Sites」「Buzz」「Dev Mode」「Draw」這些名字，那是 Figma 的不同產品線，**不是不同公司**。

## 十、FAQ：非設計師問 Figma 常見問題

**Q1：Figma 跟 Canva 哪個好？**
Canva 適合「套模板、做完成品」；Figma 適合「結構化設計、跨部門協作」。實習進公司，台灣中大型公司 PM／設計／工程 90% 用 Figma；台灣中小企業／NPO／個人接案的行銷素材有時候會用 Canva。最佳組合：**Figma 用來做需要跟工程師交接的東西，Canva 用來快速套模板做 IG 圖卡**。

**Q2：免費版夠用嗎？**
2026 年的免費版有限制：**3 個 Figma 設計檔、3 個 FigJam 檔案**（過去曾經是無限／3 個團隊檔，方案結構在 2024-2025 經歷改版，**以 figma.com/pricing 為準**）。學生身份建議直接申請 Education plan 解鎖 Professional 等級。

**Q3：要學到什麼程度？**
「能打開、能看 Dev Mode、能留 Comment、能用 Frame 跟 Auto Layout 排簡單版面」就贏 70% 的非設計師同事。不需要會畫插畫、不需要會設計 logo。

**Q4：有什麼快速練習方法？**
做三件事：

1. 把你最近一份 PPT 用 Figma 重做（或用 Figma Slides 重做）
2. 把你常用 app（Dcard、LINE、街口、PChome、MyVideo 等）的某個畫面用 Figma 仿做（不是抄 design，是練排版）
3. 加入 Figma Community 找免費模板拆解（搜尋 "Taiwan"、"Mandarin"、"中文" 也能找到台灣設計師分享的中文排版模板）

**Q5：手機可以編輯嗎？**
不太行。Figma 手機 app 主要是「看」跟「demo」，編輯還是要用電腦。iPad 配 Apple Pencil 可以畫一些，FigJam iPad 版本相對好用。

**Q6：Adobe 不是要收購 Figma 了嗎？**
**已經沒有了**。Adobe 在 2022-09 宣布以 200 億美元收購 Figma，但 2023-12-18 雙方因歐盟與英國競爭法監管中止合併，Adobe 支付 10 億美元分手費。Figma 維持獨立公司至今（2026-05），產品路線並未被整併。

**Q7：Figma AI 功能要錢嗎？**
Figma 在 Config 2024 / 2025 大量推出 AI 功能（Make、AI actions、Auto-naming、First Draft 等）。**用量計算方式（credits）與付費規則仍在演進**，不同方案有不同的 AI 配額，**請以 figma.com/pricing 與 release notes 當期公告為準**，不要以一年前的部落格文章為準。

## 十一、結語：Figma 是跨職能協作的入場券

實習生最容易被低估的能力，是「能與不同職能的人溝通」。Figma 是這個能力的物質載體：你打開檔案、留下 comment、看懂規格，**你就在所有討論的桌邊有了一個位置**。

**三個關鍵原則**：

1. **先學會看，再學會做**：你不需要會設計，但你必須能讀別人的設計。Dev Mode + Comment + Frame，這三件事就能走遍 80% 的場景。
2. **Auto Layout 是分水嶺**：學會它你的設計會「會自己長」。沒學它你永遠在手動對齊。
3. **永遠 Duplicate 再改**：公司的 master file / library 動不得，這是實習生最重要的工作倫理。

**行動建議**：

1. 今天就到 figma.com/education/apply 申請學生 Education plan（2 年 Professional 免費）。
2. 到實習通搜尋「Figma」「UX」「PM」「行銷實習」職缺，看 JD 上會列哪些 Figma 相關要求，把這些當成你的學習清單。
3. 把你最近做的一份 PPT 用 Figma redo 一次，下週你會比同梯實習生領先一個檔次。

---

**本文時間錨點 2026-05；Figma 產品線、價格、AI credits 計費規則變動非常頻繁，文中所有具體價格、功能授權、教育方案資格，皆以 figma.com 官網當期公告為準。**
