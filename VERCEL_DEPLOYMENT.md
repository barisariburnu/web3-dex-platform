# Vercel Deployment Guide

## 🚀 Deploying to Vercel

This guide will help you deploy your Web3 DEX Platform to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Sanity.io project created with Project ID
3. Deployed smart contract address (from Ethereum testnet/mainnet)

## Step-by-Step Deployment

### 1. Push to GitHub

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `barisariburnu/web3-dex-platform`
4. Vercel will automatically detect Next.js

### 3. Configure Build Settings

Vercel should use these settings (already configured in `vercel.json`):

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as root, configuration handles it)
- **Build Command**: `cd app && yarn install && yarn build`
- **Output Directory**: `app/.next`
- **Install Command**: `cd app && yarn install`

### 4. Add Environment Variables

In the Vercel project settings, add these environment variables:

#### Required Variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_actual_api_token
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress
```

#### How to Add Variables in Vercel:

1. Go to your project in Vercel
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in the sidebar
4. Add each variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
   - **Value**: Your actual value
   - **Environment**: Select all (Production, Preview, Development)
5. Click **"Save"**

### 5. Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 2-5 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## 🔧 Getting Your Configuration Values

### Sanity.io Configuration

1. **Get Project ID**:
   ```bash
   cd studio
   sanity manage
   ```
   Or login to [Sanity.io Dashboard](https://www.sanity.io/manage)

2. **Get API Token**:
   - Go to Sanity.io Dashboard
   - Select your project
   - Go to **API** → **Tokens**
   - Create a new token with **Editor** permissions
   - Copy the token immediately (it won't be shown again)

3. **Dataset**: Usually `production`

### Smart Contract Address

After deploying your smart contract:

```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network sepolia
```

Copy the deployed contract address from the output.

## 🔍 Troubleshooting

### Build Error: "Configuration must contain `projectId`"

**Cause**: Missing or incorrect Sanity environment variables

**Solution**:
1. Verify environment variables are set in Vercel
2. Check variable names match exactly (case-sensitive)
3. Ensure no extra spaces in values
4. Redeploy after adding variables

### Build Error: "Module not found"

**Cause**: Dependencies not installed correctly

**Solution**:
1. Check `package.json` in `app/` directory
2. Clear Vercel cache and redeploy:
   - Go to **Deployments**
   - Click on failed deployment
   - Click **"..."** → **"Redeploy"**
   - Check **"Clear cache and retry"**

### Node Version Warnings

**Cause**: Using outdated Node.js version

**Solution**: Already configured to use Node.js 18.x in `package.json`:
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0"
}
```

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | `abc123xyz` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `SANITY_API_TOKEN` | Sanity API authentication token | `skXXXXXXXXXXXX` |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed smart contract address | `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb` |

⚠️ **Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put sensitive secrets in them.

## 🔄 Redeployment

Vercel automatically redeploys when you push to your main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

### Manual Redeploy:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Deployments**
4. Click **"..."** on latest deployment
5. Click **"Redeploy"**

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## 📊 Monitoring

After deployment, monitor your application:

- **Analytics**: Vercel Dashboard → Analytics
- **Logs**: Vercel Dashboard → Logs (real-time)
- **Performance**: Vercel Dashboard → Speed Insights

## ✅ Post-Deployment Checklist

- [ ] All environment variables set correctly
- [ ] Build completed successfully
- [ ] Site is accessible at Vercel URL
- [ ] MetaMask connection works
- [ ] Sanity data loads correctly
- [ ] Smart contract interactions work
- [ ] No console errors in browser

## 🆘 Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in Vercel Dashboard
3. Check [GitHub Issues](https://github.com/barisariburnu/web3-dex-platform/issues)
4. Review Sanity.io connection in local development first

---

**Note**: This configuration uses the monorepo structure where the Next.js app is in the `app/` directory. The `vercel.json` file handles this automatically.
