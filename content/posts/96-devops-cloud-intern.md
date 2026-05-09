# DevOps / 雲端 / SRE 實習生：Docker、K8s、CI/CD、AWS / GCP 入門

「我寫過幾個專案，但每次部署都是 ssh 進去 git pull、然後祈禱不要爆」「公司在徵 DevOps 實習，可是我連 Docker 都沒玩過」「SRE、DevOps、Platform Engineer 到底差在哪？」這些問題在工程系實習圈每年都會被問一輪。本篇用 2026 年仍主流的工具，帶你看清楚 DevOps / 雲端 / SRE 這條路的入門順序、必備技能、以及實習生最容易卡關的地方。

## 一、DevOps、SRE、Platform Engineer 角色差異

這三個 title 在不同公司可能定義不一樣，但拿主流共識來看：

### 1. DevOps Engineer
- 核心任務：把開發到部署的流程自動化。
- 主要技能：CI/CD、Docker、雲端、監控。
- 跟誰合作：軟體工程師、QA。
- 常見產出：GitHub Actions workflow、部署腳本、環境管理。

### 2. SRE（Site Reliability Engineer）
- 核心任務：保證線上服務穩定、可靠。
- 主要技能：監控、可觀測性、事故處理（incident response）、Capacity Planning。
- 跟誰合作：所有開發團隊、產品。
- 常見產出：SLI / SLO / SLA、事故事後檢討、自動化告警。

### 3. Platform Engineer
- 核心任務：建公司內部的「開發者平台」（Internal Developer Platform）。
- 主要技能：Kubernetes、Terraform、平台抽象設計。
- 跟誰合作：所有開發團隊。
- 常見產出：自助式部署平台、開發者文件、抽象工具。

### 實習階段你需要分清楚嗎？
不需要。**實習階段三個職位的技能集高度重疊**：Docker、CI/CD、Linux、雲端是共同基礎。你先打好這層底，正職再決定深耕哪個方向。

## 二、為什麼 2026 年台灣這條路機會增加？

### 1. 台灣新創與 SaaS 規模擴大
過去十年「DevOps」常由全端工程師兼任。當公司從 10 人擴到 50 人、再擴到 200 人，部署流程、環境管理、監控的工作量會指數成長，**這時公司就一定要找專職 DevOps 或 SRE**。

### 2. 雲端遷移仍在進行
即使 AWS / GCP / Azure 已經很成熟，台灣仍有大量企業在做「從機房搬到雲」的轉型。這意味著熟雲端架構、會寫 Terraform 的實習生會被搶。

### 3. AI 應用上線潮
2024–2026 年大量 AI 產品上線，每個產品背後都需要部署、擴容、監控。**會 GPU instance、會處理 LLM 推論成本的人，市場上極度稀缺**。

### 4. 中段提醒
這份技術 stack 變動快，每年至少自查一次。雲端服務 SKU、Kubernetes 版本、CI/CD 工具的功能與計價時有調整，學的時候請以官方文件為主。

## 三、容器：Docker 是必學

### 1. 為什麼 Docker 變成入場券？
- **環境一致性**：你筆電跑得起來、同事筆電跑得起來、production 也跑得起來。
- **隔離**：每個服務各自一個容器，不會互相污染。
- **部署簡單**：一個 image 推到 registry，到處都能拉下來跑。

### 2. Dockerfile：Node.js app 範例

```dockerfile
# 使用 LTS 版的 Node 作為 base
FROM node:20-alpine AS base
WORKDIR /app

# 1. 先複製 lock 檔，利用 layer cache 加速 install
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# 2. 複製原始碼並 build
FROM base AS build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 3. production image：只放 runtime 必須的東西
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup -S app && adduser -S app -G app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

USER app
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

這份 Dockerfile 用了三個重要技巧：
- **multi-stage build**：deps、build、runner 三階段，最終 image 不含 build 工具，體積小得多。
- **alpine base**：image 大幅縮小（從 1 GB 降到 100 MB 以內常見）。
- **non-root user**：用 `app` 使用者跑，提升安全性。

實習生學 Docker 時，**至少要把這三個概念寫進你的 Dockerfile，否則面試官一看就知道你只是「複製貼上 hello world」**。

### 3. Docker Compose：本地多服務
寫一個 `docker-compose.yml`，一鍵啟動「Node app + PostgreSQL + Redis」：很多實習面試會直接給你一份 compose file，要你解釋每個 service 的關係、volume 怎麼掛、network 怎麼接。

## 四、編排：Kubernetes（中階）

### 1. 為什麼是「中階」？
Kubernetes（K8s）幾乎是大型企業的部署預設，但**對實習生來說不必一開始就深入**。你先把 Docker 會用，再用「託管 K8s」（如 GKE、EKS、AKS）跑過幾次，**比一頭栽進 K8s 內部架構更務實**。

### 2. 實習生 K8s 學習順序
1. 看懂 `kubectl get pods / svc / deploy / nodes`。
2. 寫一份 `Deployment + Service` YAML，把你的 Docker image 部到 K8s。
3. 看懂 `Ingress`、`ConfigMap`、`Secret`。
4. 了解 HPA（Horizontal Pod Autoscaler）。
5. 研究 Helm chart 與 Kustomize（套件管理）。

學完前三步你已經能應付多數實習場景。第四五步是更進階的議題。

### 3. 別嚇自己
許多學生看到 K8s 文件就退縮。**事實是，多數中小型公司用 Vercel、Cloud Run、Fly.io 就夠了，根本不會碰 K8s**。你不會 K8s 也能拿到很好的實習，只是進大型平台團隊時會吃虧。

## 五、CI/CD：GitHub Actions、GitLab CI、CircleCI

### 1. GitHub Actions
- OSS 與中小團隊主流。
- 跟 GitHub 深度整合、免費額度足以做完作品集。
- 文件好、社群豐富、市集裡的 reusable action 多。

### 2. GitLab CI/CD
- 自架 GitLab 的公司常用。
- 與 issue、container registry 整合好。

### 3. CircleCI、Jenkins
- 仍在企業（特別是傳統製造業、金融業）使用。
- Jenkins 很老但仍存在大量 legacy pipeline，知道有這東西即可。

### 4. GitHub Actions 自動部署 yaml 範例

```yaml
# .github/workflows/deploy.yml
name: build-and-deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test --silent

      - name: Build
        run: npm run build

      - name: Build Docker image
        run: docker build -t ghcr.io/${{ github.repository }}:${{ github.sha }} .

      - name: Login to GHCR
        run: echo "${{ secrets.GHCR_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: docker push ghcr.io/${{ github.repository }}:${{ github.sha }}

      - name: Trigger deploy
        run: |
          curl -X POST "$DEPLOY_HOOK_URL" \
            -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \
            -d '{"image":"ghcr.io/${{ github.repository }}:${{ github.sha }}"}'
        env:
          DEPLOY_HOOK_URL: ${{ secrets.DEPLOY_HOOK_URL }}
```

這份 workflow 完整走過：checkout → install → test → build → 打 image → push → 觸發部署。實習生若能在 GitHub repo 看到這份檔案、看懂每一步，已經比八成同學深入。

## 六、IaC（基礎設施即程式碼）：Terraform、Pulumi

### 1. Terraform
- HashiCorp 出品，業界主流。
- 自有 DSL（HCL），跨雲端通用。
- 寫一份 `main.tf`，定義 VPC、EC2、RDS、S3，一鍵 apply 全部建好。

### 2. Pulumi
- 用 TypeScript / Python / Go 寫 IaC。
- 對工程背景學生語法門檻較低。
- 適合喜歡用「真正程式語言」描述基礎設施的人。

實習階段不必兩個都會，**先學 Terraform**（市佔仍最大），未來進到全 TS 團隊再考慮 Pulumi。

## 七、雲端三大：AWS、GCP、Azure

### 1. AWS
- 全球最大、服務最齊全。
- 核心服務：EC2、S3、Lambda、ECS、EKS、RDS、CloudFront、IAM。
- 在外商、金融、傳統企業滲透率最高。
- 認證：AWS Certified Cloud Practitioner（入門）、Solutions Architect Associate（中階）。

### 2. GCP
- Google Cloud。
- 核心服務：Cloud Run、Cloud Functions、GCS、BigQuery、GKE、Vertex AI。
- 在台灣科技業（Dcard、KKBOX、Pinkoi、17LIVE 等）滲透率高。

### 3. Azure
- 微軟，與 Office、Active Directory 整合好。
- 核心服務：App Service、Functions、AKS、Synapse。
- 在傳統金融、企業 IT、政府機關常見。

### 4. 實習生先學什麼順序

| 階段 | 學什麼 | 目標 |
|------|--------|------|
| 第 1 個月 | Linux 基礎 + Docker | 能用 docker run / build / compose |
| 第 2 個月 | GitHub Actions + 一個小 CI/CD | 自動跑測試 + 自動部署 |
| 第 3 個月 | AWS 或 GCP 入門 | 會用 EC2 / Cloud Run + S3 / GCS |
| 第 4 個月 | Terraform 入門 | 用 IaC 建一份 VPC + EC2 |
| 第 5 個月 | 監控（Sentry、Grafana） | 你的服務有錯誤追蹤、有指標 dashboard |
| 第 6 個月 | Kubernetes 入門 | 部一個 deployment 到 GKE / EKS |

按這個順序走，半年內可以從零變成能投 DevOps 實習的水準。

## 八、觀測 / 監控：Sentry、Datadog、Grafana + Prometheus

實習生不需要全部會，但要有一個「能講得出細節」的工具。

### 1. Sentry
- 錯誤追蹤入門首選。
- 兩行程式碼就能裝好，立即看到 production 錯誤、stack trace、使用者影響範圍。
- 強烈建議：每個個人作品集都裝 Sentry，履歷可以寫「整合 Sentry，能在 production 錯誤發生時即時告警」。

### 2. Datadog
- 商用全方位觀測平台（log、metrics、APM、RUM 都有）。
- 多數中大型公司在用，但學生版較少接觸。

### 3. Grafana + Prometheus
- 開源黃金組合：Prometheus 收 metrics，Grafana 畫 dashboard。
- K8s 環境幾乎標配。
- 學生作品集：自架 Prometheus + Grafana，做一個顯示「我的 API 每分鐘請求數」的 dashboard，履歷瞬間升級。

### 4. New Relic
- 企業級 APM 老牌，仍有市佔但近年被 Datadog 蠶食。

## 九、部署平台：Vercel、Cloudflare Workers、Zeabur、Fly.io、Render

很多時候實習生作品集不需要硬要自架 K8s，用託管平台反而能展示「**會選對工具的判斷力**」。

### 1. Vercel
- Next.js 首選、zero-config。
- 適合前端與全端 Next.js 應用。
- 免費層適合作品集。

### 2. Cloudflare Workers / Pages
- 全球 edge 部署、冷啟動快。
- 適合 API、靜態網站、無伺服器函式。
- D1（SQLite）、R2（物件儲存）整合方便。

### 3. Zeabur
- 台灣本地部署平台，繁中介面友善。
- 對學生作品集特別友善：一鍵部署常見模板（Next.js、PostgreSQL、Redis）。
- 對台灣使用者來說，台灣本地服務 + 帳單台幣計價是優勢。

### 4. Fly.io、Render、Railway
- 都是面向開發者的「現代 PaaS」。
- 適合長駐後端、Worker、Cron job。
- 免費層因供應商政策時有調整，學的時候建議實際看當下文件。

### 5. 不要碰的（或要小心）
- **Heroku 免費方案**：2022 年起取消，**不要再寫信給學生說可以用免費 Heroku**。
- **Cordova / PhoneGap**（行動 App）：已停止維護。

## 十、實習生最常踩的三個坑

### 坑一：以為 DevOps = 寫腳本
DevOps 不是「我會 bash 寫腳本」就好。**核心是「自動化思維」與「系統可靠性思維」**。會寫 100 行 bash 但不懂 idempotency（冪等性）、不懂 rollback、不懂 health check 的 DevOps 實習生，第一個月就會被罵。

### 坑二：YAML 寫到瘋掉、忘記學 Linux
GitHub Actions、Kubernetes、Docker Compose、Helm 都是 YAML。但**底層仍是 Linux**：權限、檔案系統、網路、process、systemd。Linux 不會的人在 production 出事時無法 debug。

### 坑三：只會託管雲端、不會看帳單
現代 DevOps 的隱藏戰場是「成本」。你的部署如果一個月花 20 萬、客戶營收 5 萬，你就是公司的負擔。**會看 AWS Cost Explorer、會用 Terraform 控制資源規格、能對主管講「這個服務每月成本約 X 元」的實習生才是真正的稀缺人才**。

## 十一、FAQ：學生最常問的問題

**Q1：需要 CCNA / AWS 認證嗎？**
不必為了實習而硬考 CCNA。AWS Certified Cloud Practitioner 是 AWS 入門認證，CP值高、考題不難，可以考。但**真實作品（GitHub repo + 部署網址 + Terraform 程式碼）永遠比一張紙重要**。

**Q2：沒寫過 Linux 來得及嗎？**
來得及。Linux 不是要你變成內核工程師，而是熟悉 shell、檔案系統、process、網路工具（curl、netstat、ss、tcpdump）。建議：在筆電裝 Ubuntu 虛擬機，每天用一個小時當作「主作業系統」操作，一個月就能熟悉。

**Q3：DevOps 適合文科生嗎？**
適合，但會比工程背景的人多花時間在補基礎程式底子。文科生的優勢是**溝通與文件能力**——DevOps 工作很大一部分是寫 runbook、寫事故報告、跟多團隊協調，這些技能文科生不弱。

**Q4：實習面試會考什麼？**
常見題型：
1. **情境題**：「production 服務突然 5xx 升高，你怎麼 debug？」
2. **YAML 題**：給你一份 GitHub Actions / Dockerfile，問每一段在做什麼。
3. **網路題**：HTTP / HTTPS / DNS / TCP 三次握手 / TLS 基本概念。
4. **雲端題**：「你的 EC2 instance 連不上資料庫，你會檢查哪些東西？」

**Q5：要學 Bash、Python 還是 Go？**
- **Bash**：必會基本指令、簡單腳本。
- **Python**：自動化腳本、API 串接、資料處理。
- **Go**：當你要寫高效能 CLI、K8s controller 時很重要。

實習生階段：**Bash 必會、Python 是加分項、Go 是進階武器**。

**Q6：實習薪資大概多少？**
台灣 DevOps / 雲端 / SRE 實習生月薪通常從 NT$32,000 起，外商與大型科技公司可達 NT$50,000 以上。**會 K8s + Terraform + 雲端的學生，市場上稀缺度仍高，敘薪空間相對寬**。但具體金額會隨公司、地區、學經歷波動，不是絕對承諾。

## 十二、結語：選一條「隱形高槓桿」的路

DevOps、SRE、Platform 這條路在工程系裡相對冷門，但**正因為冷門、又是公司不可少的一環，反而比拼前端、拼演算法多一條低競爭、高回報的賽道**。當你的同學還在比誰的 React UI 動畫做得花俏，你已經能講出「我的服務上線後一個月的 SLO 是 99.9%、平均部署時間從 30 分鐘壓到 4 分鐘」。這種敘事在面試官眼裡是另一個量級的成熟度。

**請記得三個關鍵原則**：
1. **每個個人作品都要有 CI/CD 與監控**：不要只交「會跑就好」的東西，做到「自動部署 + 錯誤追蹤」才算完整。
2. **Linux 與網路是地基**：YAML 與雲端是樓上，沒地基你蓋不高。
3. **學會看帳單**：成本控制是 2026 DevOps 最被低估、但最被欣賞的軟實力。

**行動建議**：今天就把你最近的一個個人專案，加上 Dockerfile + GitHub Actions workflow + Sentry 整合，部署到 Vercel 或 Zeabur。一個週末就能完成，履歷立刻就有東西可寫。然後到實習通搜尋 DevOps、SRE、雲端、Platform 相關實習的真實心得，看看不同公司在面試與工作日常會丟什麼難題給實習生，把這些情境變成你下一個練習目標。

## 十三、補充：給準備 DevOps 實習面試的學生

最後留三個面試準備建議，這幾年實際從學生回饋中歸納出來，對實習生特別有用。

### 1. 準備一個「我修好過的 production 事故」故事
即使你還沒進過正職，個人作品也可以有「事故」。例如：你的部落格忽然 500 錯誤、API 響應時間從 100 ms 飆到 3 秒、部署到 production 後資料庫連線數爆掉。把這些故事整理成「**症狀 → 假設 → 驗證 → 根因 → 修復 → 預防**」六段式，面試碰到「請分享一次你印象深刻的 debug 經驗」就能直接拿出來。

### 2. 把「成本意識」寫進履歷
履歷敘述時別只寫「我建了一套 K8s cluster」，而要寫「我建了一套 K8s cluster，每月雲端成本控制在 X 元以內」。即使數字不大，這種敘述會立刻讓面試官覺得你有 production sense。

### 3. 學會用文字解釋系統
DevOps / SRE 的面試常考「畫一張你最熟悉系統的架構圖」。練習方法：把你的個人作品畫成一張架構圖，標出每個元件、流量方向、資料流。能用三分鐘把這張圖講完整的學生，已經是面試官印象深刻的少數。

走完這三個準備，你會發現面試從「被考」變成「分享自己做過的事」——這個心態轉換，往往是 offer 與被刷之間的差別。
