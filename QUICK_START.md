# 🚀 Quick Start Guide

## Project Status: ✅ All Systems Ready

### ✅ Recent Fixes (2025-11-26)
- Vercel deployment configuration
- Smart contract tests (5/5 passing)
- CI/CD pipeline on Node.js 18.x
- Complete deployment documentation

---

## 📦 Prerequisites

- **Node.js**: 18.x or higher ([Download](https://nodejs.org/))
- **Package Manager**: Yarn or npm
- **Wallet**: MetaMask browser extension
- **Git**: For version control

Check your Node version:
```bash
node --version  # Should be v18.x.x or higher
```

---

## 🛠️ Local Development

### 1. Clone & Install

```bash
git clone https://github.com/barisariburnu/web3-dex-platform.git
cd web3-dex-platform
```

### 2. Frontend Setup

```bash
cd app
yarn install  # or: npm install
cp .env.example .env.local
# Edit .env.local with your values
yarn dev
```

Visit: http://localhost:3000

### 3. Smart Contract Setup

```bash
cd smart_contract
npm install
cp .env.example .env
# Edit .env with your values
npm run compile
npm test
```

### 4. Sanity Studio (Optional)

```bash
cd studio
yarn install
sanity init  # First time only
yarn start
```

Visit: http://localhost:3333

---

## 🔐 Environment Variables

### Frontend (`app/.env.local`)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
```

### Smart Contract (`smart_contract/.env`)
```env
ETHEREUM_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY
PRIVATE_KEY=your_private_key_here
```

⚠️ **Never commit `.env` files!**

---

## 🧪 Testing

### Frontend
```bash
cd app
yarn lint           # Check code style
yarn build          # Production build
```

### Smart Contracts
```bash
cd smart_contract
npm test            # Run all tests (auto-compiles)
npm run compile     # Compile only
```

**Expected Test Results**:
```
✔ Should deploy successfully
✔ Should emit Transfer event with correct parameters
✔ Should allow multiple transactions
✔ Should record transaction from any address
✔ Should accept empty message and keyword

5 passing (3s)
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your repository

3. **Set Environment Variables**
   - Add all variables from `.env.example`
   - Deploy!

📖 **Full Guide**: [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

### Smart Contract Deployment

```bash
cd smart_contract

# Sepolia Testnet
npm run deploy:sepolia

# Goerli Testnet
npm run deploy:goerli

# Mainnet (⚠️ Use with caution!)
npm run deploy:mainnet
```

Copy the deployed contract address to your frontend `.env.local`

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Project overview and setup |
| [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) | Vercel deployment guide |
| [GITHUB_ACTIONS.md](GITHUB_ACTIONS.md) | CI/CD pipeline docs |
| [FIXES_SUMMARY.md](FIXES_SUMMARY.md) | Recent fixes explained |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contribution guidelines |
| [CHANGELOG.md](CHANGELOG.md) | Version history |

---

## 🔧 Common Commands

### Project Management
```bash
# Update all dependencies
cd app && yarn install && cd ../smart_contract && npm install

# Clean everything
rm -rf node_modules app/node_modules smart_contract/node_modules
rm -rf app/.next smart_contract/artifacts smart_contract/cache

# Reinstall
cd app && yarn install && cd ../smart_contract && npm install
```

### Development
```bash
# Start frontend dev server
cd app && yarn dev

# Run Hardhat local network
cd smart_contract && npm run node

# Watch for changes and rebuild
cd app && yarn dev
```

### Verification
```bash
# Check versions
node --version
npm --version
yarn --version

# Verify builds
cd app && yarn build
cd smart_contract && npm test
```

---

## 🐛 Troubleshooting

### Issue: "Module not found"
```bash
rm -rf node_modules
npm install
```

### Issue: "Contract artifact not found"
```bash
cd smart_contract
npm run compile
npm test
```

### Issue: "Vercel build failed"
- Check environment variables in Vercel dashboard
- Ensure all required vars are set
- Review build logs

### Issue: "MetaMask not connecting"
- Refresh page
- Check MetaMask is unlocked
- Try different network (Sepolia, Goerli, Mainnet)

---

## ✅ Deployment Checklist

### Before Deploying:
- [ ] All tests passing locally
- [ ] Environment variables documented
- [ ] Smart contracts deployed to testnet
- [ ] `.env.example` files up to date
- [ ] Documentation reviewed

### Vercel Deployment:
- [ ] Environment variables set in Vercel
- [ ] Build succeeds
- [ ] Site accessible
- [ ] MetaMask connection works
- [ ] Transactions work on testnet

### Post-Deployment:
- [ ] Monitor Vercel logs
- [ ] Test all features
- [ ] Check console for errors
- [ ] Verify smart contract interactions

---

## 🆘 Getting Help

1. **Check Documentation**: Start with README.md and deployment guides
2. **Review Issues**: [GitHub Issues](https://github.com/barisariburnu/web3-dex-platform/issues)
3. **Deployment Problems**: See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
4. **CI/CD Issues**: See [GITHUB_ACTIONS.md](GITHUB_ACTIONS.md)
5. **Create Issue**: If problem persists, create a new issue with:
   - Clear description
   - Steps to reproduce
   - Error messages
   - Environment details

---

## 🎯 Quick Links

- 🌐 **Repository**: https://github.com/barisariburnu/web3-dex-platform
- 📖 **Documentation**: See all `.md` files in root directory
- 🐛 **Issues**: https://github.com/barisariburnu/web3-dex-platform/issues
- 💬 **Discussions**: https://github.com/barisariburnu/web3-dex-platform/discussions

---

**Last Updated**: 2025-11-26  
**Status**: ✅ Production Ready  
**Node.js Version**: 18.x  
**Test Coverage**: 5/5 Passing
