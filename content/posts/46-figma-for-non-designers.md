# Figma 速成：行銷與 PM 也要看得懂的設計工具

「Figma 不是設計師才用的嗎？」這個誤會在 2026 年該打破了。今天的行銷實習生要用 Figma 做活動視覺草稿、PM 實習生要用 Figma 畫 wireframe 跟工程師對需求、業務實習生要用 Figma 做提案海報、甚至 HR 都會用 Figma 設計招募的 LP。會看 Figma 不再是 nice to have，而是 must have。本篇用最少時間帶你看懂 Figma 的核心觀念，足以讓你在第一週進公司時不被「打開這個 mockup」這句話嚇到。

## 一、為什麼非設計師也要會 Figma？

### 1. 跨部門溝通的共同語言
工程師、設計師、PM、行銷主管都用 Figma。當你能進到同一個檔案、留 comment、看 prototype，**你就進入了跨部門協作的核心圈**。否則永遠只能等別人 export 圖給你。

### 2. 替代 PowerPoint 與 Photoshop
做提案、做海報、做 social media 圖卡，Figma 都比 PPT 漂亮、比 Photoshop 簡單。免費版功能對實習生綽綽有餘。

### 3. 看得懂規格書
工程師問你「這個按鈕要 16px 還是 14px？」「這個間距是 8 還是 12？」你打開 Figma 一看就有答案，不需要打擾設計師。

### 4. 雲端協作的代表作
Figma 是少數真正做到「即時多人協作」的設計工具。你可以邊跟設計師講話邊在他畫面上點，這個流暢感是 Sketch、Adobe XD 比不上的。

## 二、Figma 介面：5 分鐘看懂

打開 Figma 後，畫面分成五個區塊：

| 區塊 | 位置 | 功能 |
|------|------|------|
| Toolbar | 頂部 | 選取、框架、文字、圖形、註解 |
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
- `Cmd/Ctrl + /`：搜尋任何功能

**新手最大誤會**：把所有東西都放進 Group 而不是 Frame。Frame 才是 Figma 的標準容器，下面會解釋。

## 三、最關鍵的兩個概念：Frame 與 Component

### 1. Frame（框架）
Frame 是 Figma 的「畫布容器」。你可以把 Frame 想成一張紙，所有元素都該放在 Frame 裡，而不是直接放在 Canvas 上。

**Frame 的三個好處**：
- 有固定尺寸（手機 375x812、電腦 1440x900 等預設可選）
- 可裁切超出邊界的內容
- 可套用 Auto Layout（下面詳述）

**實習生情境**：你要做一張 IG 限動視覺，先建一個 1080x1920 的 Frame，所有設計都在裡面，最後一鍵 export PNG，尺寸完全準確。

### 2. Component（元件）
Component 是「可重複使用的設計元素」。把一個按鈕做成 Component 後，所有用到這個按鈕的地方都會同步更新。

**實習生情境**：你做一份 12 頁的活動提案，每頁都有「公司 logo + 標題 + slogan」的 header。把它做成 Component，之後 logo 改了，12 頁同步改，省下 1 小時手動修改。

### 3. Instance（實例）
從 Component 拖出來的副本叫 Instance。你可以在不影響其他 instance 的情況下，覆蓋某個 instance 的文字或顏色。**這就是設計系統的基本單位**。

## 四、Auto Layout：讓你的設計會「自己排版」

這是 Figma 最強功能，**也是讓你看起來像專業設計師的關鍵**。

### Auto Layout 在做什麼？
讓 Frame 內的元素自動依照「橫向 / 縱向 + 間距 + 內邊距」排列。文字變長時，Frame 自動拉長；新增元素時，自動往下推。

### 三步驟啟用
1. 選中要套用的 Frame 或多個元素
2. 按 `Shift + A`
3. 在右側 Properties 設定方向、間距、padding

### 實習生情境
做一份「卡片列表」，每張卡片有圖、標題、副標、按鈕。如果不用 Auto Layout，你要手動對齊每個元素的位置。用了之後，文字變長卡片自動延伸、新增卡片整列自動推開，**改稿時間從 30 分鐘降到 30 秒**。

### Auto Layout 的隱藏好處
你做的設計會「像工程師寫的 CSS」一樣，這讓開發者交接時不需要再「平移數字」，他們直接讀你的 padding 跟 gap，效率倍增。設計師會覺得你「懂」。

## 五、留 Comment 與 Review：實習生最常用的功能

按 `C` 切換到 Comment mode，在 Figma 任何位置點一下就能留言。@ 同事可以發通知。

### 實習生留 Comment 的三種場景

**場景一：Review 設計師的稿**
你是 PM 實習生，設計師交一份新功能 mockup 給你 review。你打開逐項檢查：
- 「這裡的 CTA 文字太長，行動裝置會超出」
- 「這個錯誤狀態還沒設計，可以補嗎？」
- 「文案我建議從『送出』改成『立即購買』」

每個 comment 都標 location，設計師一目了然。

**場景二：和工程師對齊規格**
工程師看你的 wireframe，問：「這個 dropdown 的展開行為是什麼？」你直接 reply 在他的 comment 上回答，不用切到 Slack 講半天。

**場景三：客戶／主管 approval**
給主管的提案，主管打 comment 寫：「這頁的色調偏冷，可以調暖一點嗎？」你修完後 resolve 這條 comment，下次主管登入就知道哪些已處理。

## 六、Figma 不只是設計工具：3 個非典型用法

### 1. 用 Figma 做簡報（Figma Slides）
近年 Figma 推出 Slides 功能，能直接在 Figma 內做投影片。比 PowerPoint 漂亮、比 Google Slides 協作好。實習生用來做 review meeting、demo day、實習成果報告超適合（功能可能持續演進，請以官方文件為準）。

### 2. 用 Figma 畫 Wireframe
PM 實習生最大武器。畫一個低保真 wireframe（黑白、無 UI 細節），快速跟工程師、PM、Stakeholder 對齊「我們要做什麼」。比起寫 spec 文件，wireframe 一張勝過千字。

### 3. 用 Figma 設計海報、社群圖卡
行銷實習生超實用。Frame 設成 IG 1080x1080、限動 1080x1920、FB cover 1640x624。直接畫、直接 export PNG，不用打開 Photoshop。

## 七、Dev Mode：跟工程師交接的橋樑

Figma 的 Dev Mode（開發者模式）讓非設計師也能讀懂設計規格。

### Dev Mode 顯示什麼？
- 元素的精確 px 尺寸與位置
- 顏色的 hex / rgba 值
- 字體名稱、字級、行高
- CSS / iOS / Android 程式碼片段（複製貼上即可）
- 圖片可一鍵 export 多倍率（1x、2x、3x）

### 實習生用 Dev Mode 的場景

**場景一：你跟工程師爭論「按鈕大小」**
打開 Dev Mode，按鈕高度寫得清清楚楚是 44px。爭論結束。

**場景二：你要寫文案 spec**
打開 Dev Mode 看每個文字 block 的字級、行高，能更準確判斷文案要寫多長。

**場景三：你要 export 一張圖**
不用麻煩設計師。Dev Mode 點 Export，PNG / SVG / PDF 任選格式跟倍率。

## 八、實習生最常踩的 Figma 坑

### 坑一：用 Group 而不是 Frame
Group 沒有尺寸、不能套 Auto Layout、不能設背景色。**90% 的時候你應該用 Frame**。

### 坑二：忘記命名圖層
左側的 layers panel 全是「Frame 1」「Rectangle 47」。三天後你自己也找不到東西。**好習慣是建好 Frame 立刻命名**。

### 坑三：在 main file 直接亂改
公司的設計師主檔（master file）是有版本控制的。你進去改一改 commit 上去，會搞砸所有人。**永遠先 Duplicate 自己的副本**。

### 坑四：export 解析度錯誤
要給社群用的圖卡 export 1x 太糊；要印刷用 export 1x 直接馬賽克。基本原則：螢幕用 2x、印刷用 4x 或 PDF。

## 九、FAQ：非設計師問 Figma 常見問題

**Q1：Figma 跟 Canva 哪個好？**
Canva 適合「套模板、做完成品」；Figma 適合「結構化設計、跨部門協作」。實習進公司，你 90% 會用 Figma，因為它能跟設計、工程整合。Canva 適合個人 side project。

**Q2：免費版夠用嗎？**
完全夠。免費版能建無限個人檔案、3 個團隊檔案、無限 Component。實習進公司，公司會給你企業帳號使用。

**Q3：要學到什麼程度？**
「能打開、能看 Dev Mode、能留 Comment、能用 Frame 跟 Auto Layout 排簡單版面」就贏 70% 的非設計師同事。不需要會畫插畫、不需要會設計 logo。

**Q4：有什麼快速練習方法？**
做三件事：(1) 把你最近的一份 PPT 用 Figma 重做；(2) 把你常用 app 的某個畫面用 Figma 仿做（不是抄 design，是練排版）；(3) 加入 Figma Community 找免費模板拆解。

**Q5：手機可以編輯嗎？**
不太行。Figma 手機 app 主要是「看」跟「demo」，編輯還是要用電腦。iPad 配 Apple Pencil 可以畫一些。

## 十、結語：Figma 是跨職能協作的入場券

實習生最容易被低估的能力，是「能與不同職能的人溝通」。Figma 是這個能力的物質載體：你打開檔案、留下 comment、看懂規格，**你就在所有討論的桌邊有了一個位置**。

**三個關鍵原則**：
1. **先學會看，再學會做**：你不需要會設計，但你必須能讀別人的設計。Dev Mode + Comment + Frame，這三件事就能走遍 80% 的場景。
2. **Auto Layout 是分水嶺**：學會它你的設計會「會自己長」。沒學它你永遠在手動對齊。
3. **永遠 Duplicate 再改**：公司的 master file 動不得，這是實習生最重要的工作倫理。

**行動建議**：到實習通看你目標公司的工作描述，留意「需要與設計團隊協作」「能讀懂 Figma 規格」這類關鍵字。今天就申請一個 Figma 帳號，把你最近做的一份簡報 redo 一次，下週你會比同梯實習生領先一個檔次。
