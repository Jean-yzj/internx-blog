# Notion 全攻略：把實習筆記變成你的個人知識庫

「為什麼別人實習結束有滿滿的作品集，我只有一個 Slack 對話紀錄？」這是很多實習生在 offboarding 那天最大的痛。問題不在你做的事不夠多，而在於**你沒有一個地方把每天的學習持續累積下來**。Notion 是目前最適合解決這件事的工具，它能同時當筆記、專案管理、資料庫、個人 wiki。本篇帶你從第一天的工作日誌一路設計到實習結束的 portfolio 整理，把每段實習都變成下一段的籌碼。

## 一、為什麼選 Notion，不選 Google Docs 或 Apple Notes？

### 1. Notion 是「結構化筆記」
Google Docs 是線性文件，找一個三個月前的會議紀錄要爬 30 個檔案。Notion 用 Database 把所有筆記變成「可篩選、可排序、可標籤」的結構化資料，**找東西的速度比一般文件快上許多**。

### 2. Notion 是「個人 wiki」
你的「行銷術語表」「公司流程 SOP」「主管偏好整理」可以用內部連結串起來，下次寫提案時，相關資料一鍵跳轉，不用再翻舊檔。

### 3. Notion 對實習生免費
個人方案完全免費，無限頁數、無限 Block。教育方案還能再升級。比起付費的 Roam Research、Obsidian 同步服務，Notion 的成本是零。

### 4. 帶得走的資產
實習結束你能整批匯出 Markdown，永久保存。下一段實習、下一份工作、面試的 portfolio，全部都用得到。

## 二、Notion 三大基礎概念，先搞懂

### 1. Page（頁面）
最基本單位。任何東西都是 Page，Page 裡可以放 Page，可以無限巢狀。

### 2. Block（區塊）
頁面內的每一個元素：標題、段落、圖片、表格、code block、callout、toggle。Block 是 Notion 的基本積木。

### 3. Database（資料庫）
Notion 最強大的功能。一個 Database 可以同時用「Table（表格）」「Board（看板）」「Calendar（日曆）」「Gallery（圖卡）」「Timeline（甘特圖）」五種視圖呈現相同的資料。

**理解這三層後，下面的模板才看得懂。**

## 三、模板一：每日工作日誌（Daily Log）

實習第一天就建一個 Database，叫「Daily Log」。屬性如下：

| 欄位 | 型別 | 用途 |
|------|------|------|
| Date | Date | 日期，每天一筆 |
| Tasks | Multi-select | 今天做了什麼類型的任務 |
| Wins | Text | 今天的小勝利、被誇獎的事 |
| Stuck | Text | 卡住的地方、不會的東西 |
| Learned | Text | 今天學到的新觀念、新工具 |
| Mood | Select | 心情指標（高 / 中 / 低） |

### 為什麼這份日誌值得每天花 10 分鐘？

**1. 寫年終 self-review 時**：你不需要回憶 6 個月前做過什麼，打開 Daily Log 就有完整時間軸。

**2. 寫履歷時**：那些「你做了什麼讓 KPI 提升 X%」的成果，都來自於 Wins 欄位的累積。

**3. 寫推薦信請求時**：你能具體告訴主管「我想請你提到我在 4 月 12 日那次活動專案中⋯⋯」，主管會驚訝你居然記得這麼清楚。

### 進階：用 Filter 篩選 Wins
在 Daily Log Database 上開一個新視圖叫「Wins Wall」，filter 條件設為「Wins is not empty」。這就是你的「成就牆」，履歷素材庫永遠不缺彈藥。

## 四、模板二：會議筆記（Meeting Notes）

開另一個 Database，叫「Meetings」。屬性建議：

| 欄位 | 型別 | 用途 |
|------|------|------|
| Title | Title | 會議名稱 |
| Date | Date | 會議日期 |
| Attendees | Multi-select | 與會者 |
| Type | Select | 1on1 / 團隊週會 / 專案會議 / 客戶會議 |
| Action Items | Checkbox-list | 我要做的事 |
| Decisions | Text | 會議裡拍板的決定 |
| Follow-up | Date | 下次該追蹤的日期 |

### 會議筆記的三段式格式
每則筆記內容用三個 H2 切：

```
## 1. Context（背景）
為什麼開這場會？目標是什麼？

## 2. Discussion（討論）
誰提出了什麼觀點？哪些被反對？

## 3. Action Items（決議）
誰要做什麼？什麼時候交？
```

**實習生最容易踩的坑**：只記「老闆說了什麼」，不記「決議與分工」。回到位置後忘記自己被指派什麼，下週被罵。三段式格式強迫你把 action items 寫清楚。

## 五、模板三：專案管理（Projects Database）

每個你參與的專案開一筆，屬性：

- **Name**：專案名稱
- **Status**：Backlog / In Progress / Review / Done
- **Owner**：你或同事
- **Deadline**：截止日
- **Priority**：P0 / P1 / P2
- **Related Meetings**：關聯到 Meetings Database
- **Outcome**：專案結束後的量化成果

### 用 Board View 看專案進度
切換成 Board View，按 Status 分四欄。每天早上看一眼，就知道今天該推進哪個。

### 用 Linked Database 在每日日誌引用
這是 Notion 最強功能。在 Daily Log 的 page 裡，你可以「inline」嵌入 Projects Database 的「今日相關」視圖，**讓你寫今天日誌時，相關專案就在右邊**，不需要切換頁面。

## 六、模板四：學習筆記（Learning Library）

實習中學到的所有「可帶走的知識」都進這個 Database：

| 欄位 | 型別 | 用途 |
|------|------|------|
| Topic | Title | 主題（例如「Meta 廣告 ROAS 計算」） |
| Category | Select | 行銷 / 數據 / 工具 / 軟技能 |
| Source | URL | 來源連結 |
| Confidence | Select | 看過 / 用過一次 / 熟練 |
| Related Project | Relation | 關聯到 Projects |

### 為什麼這份庫比讀文章重要？
你在公司看的內部 SOP、外部 webinar、ChatGPT 的回答，**如果不寫下來、不分類，三天後就忘了**。Learning Library 強迫你把資訊「處理一次」進腦袋。

### 進階：用 Toggle 寫「半年後的我能看懂的解釋」
每則筆記用 toggle block 寫一段「給未來的我」的白話解釋。半年後重看時，你會慶幸自己當初寫了。

## 七、模板五：與主管共享頁面

很多實習生忽略這點：**你可以主動建立一個「與主管共享」的頁面**，把 1on1 議程、本週進度、卡點問題寫上去，每週主動 share 給主管。

### 共享頁面建議結構

```
# Weekly 1on1 with [主管名]

## This Week's Progress
- 完成的事項 1
- 完成的事項 2

## Blockers
- 我目前卡在 X，需要 Y 的協助

## Discussion Topics
- 想跟你討論 Z
- 想徵詢你對 W 的意見

## Career
- 對於下個月，我希望挑戰⋯⋯
```

這個動作會讓你在主管心中的形象從「實習生」升級成「能獨立 own 進度的人」。**1on1 的會議效率往往會明顯提升**，主管也會更願意把時間花在跟你討論真正重要的事情。

## 八、實習結束：把筆記變成 Portfolio

實習最後一週，做這件事的長期價值遠超過寫一封漂亮的離職信。

### 步驟一：建一個「Portfolio」頁面
標題寫上實習公司、職位、起訖時間。

### 步驟二：用三個 H2 切結構

```
## 1. What I Did（我負責什麼）
3-5 個 bullet point，每個都包含「動詞 + 動作 + 量化結果」

## 2. What I Learned（我學到什麼）
工具、方法論、產業 know-how 的具體列表

## 3. Impact（我的影響）
專案的最終結果，能講故事的 1-2 個成就
```

### 步驟三：把 Daily Log、Wins、Projects 的精華 link 進來
不是直接貼長篇日誌，是「連結」。讓未來面試時，你能在電腦螢幕上邊講邊跳轉。

### 步驟四：匯出 Markdown 備份
Notion 右上角「Export」→「Markdown & CSV」。永久保存到 GitHub 私人 repo 或本機，避免哪天 Notion 帳號出狀況。

## 九、Notion 進階技巧三選

### 1. Templates Button
建一個「新增今日 Daily Log」按鈕，按一下就自動生成預填欄位的新 entry。每天少花 30 秒設定，一年累積下來省 3 小時。

### 2. Synced Block
在多個頁面同步顯示同一個 block。例如「公司 OKR」block，在你的 Daily Log、Projects、Meetings 三個頁面都顯示同一份內容。任一處更新，全部同步。

### 3. Notion AI（付費）
寫會議紀錄時用 Notion AI 自動 summarize、自動列 action items、自動翻譯。需另外付費（價格依方案而異），但對實習生來說，公司常會有 team 訂閱，順便用。

## 十、FAQ：實習生問 Notion 常見問題

**Q1：每天寫日誌不會很煩嗎？**
前兩週會。第三週開始，你會發現它讓你「不再為昨天做過什麼焦慮」。10 分鐘的投入換半天的腦袋空間，CP 值極高。

**Q2：Notion 跟 Obsidian 哪個好？**
Obsidian 更適合「個人深度知識管理」（雙向連結、本地檔案）；Notion 更適合「協作 + 結構化資料」。實習場景 Notion 勝出，研究生寫論文 Obsidian 勝出。

**Q3：公司不讓我用 Notion 怎麼辦？**
那就用個人帳號做「私人筆記」，不放公司機敏資料。把 metadata（你做的事、學到的東西）寫進去就好，內容細節放公司內部工具。

**Q4：頁面結構怎麼設計？**
頂層只放 5 個 page：Dashboard / Daily Log / Meetings / Projects / Learning。其他都從這五個延伸出去。**深度不要超過 3 層**，否則找東西比沒整理還慢。

**Q5：可以用手機 app 嗎？**
可以，但建議「捷徑式」使用。手機適合「快速記下一個想法」，深度整理還是要回到電腦。

## 十一、結語：筆記是實習生最被低估的複利

實習結束後，技能會生鏽、人脈會疏遠、專案細節會忘。**唯一不會消失的，是你寫下的東西**。Notion 不是為了讓你看起來很有條理，是為了讓 6 個月後找下一份工作的你，有彈藥可用。

**三個關鍵原則**：
1. **每天 10 分鐘 > 每週 1 小時**：頻率比深度重要。一個有缺漏但每天寫的 Daily Log，比完美但只寫過幾次的版本更有實際參考價值。
2. **結構化 > 美化**：不要花時間調 emoji、配色、icon。Database 屬性設好，內容寫對，比版面重要。
3. **離開時記得備份**：Notion 帳號是你的，公司也許不希望你帶走機敏資訊，但「你做了什麼、學到什麼」永遠是你的。

**行動建議**：到實習通逛逛你目標公司的心得區，看看那些寫得最好的心得作者具備什麼共通點——你會發現他們都「記得住細節」。今晚就建一個 Notion workspace，從明天的 Daily Log 第一筆開始。
