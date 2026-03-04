# Self Mirror 🪞

> 你以為的自己和真實的你

8 道情境題，幫你看見你說的和你做的之間，那個有趣的距離。

## 上線步驟

### 1. 申請 Anthropic API Key
前往 https://console.anthropic.com 註冊，新帳號有 $5 免費額度。

### 2. 本地測試（可略過）
```bash
npm install
cp .env.local.example .env.local
# 把 .env.local 裡的 key 換成你的
npm run dev
```

### 3. 推上 GitHub
```bash
git init
git add .
git commit -m "init self mirror"
# 去 github.com 建一個新 repo，然後：
git remote add origin https://github.com/你的帳號/self-mirror.git
git push -u origin main
```

### 4. 部署到 Vercel
1. 前往 https://vercel.com，用 GitHub 登入
2. 點 **Add New Project**，選你剛建的 repo
3. 在 **Environment Variables** 加入：
   - Name: `ANTHROPIC_API_KEY`
   - Value: 你的 key
4. 點 **Deploy**

完成！你會得到一個 `xxx.vercel.app` 的連結。

## 費用估算
- 每次分析約 $0.002-0.003 USD
- $5 免費額度 ≈ 1500-2000 次
