# 🚀 Vercel Environment Variables Setup

## Critical Step: Add Environment Variables

After pushing your code and importing the project to Vercel, you **MUST** add these environment variables before deploying.

---

## 📋 Step-by-Step Instructions

### 1. Go to Your Vercel Project

1. Login to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **web3-dex-platform** project
3. Click **Settings** tab
4. Click **Environment Variables** in the left sidebar

### 2. Add Each Variable

Add the following variables **one by one**:

#### Variable 1: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Name**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Value**: Your actual Sanity project ID (e.g., `abc123xyz`)
- **Environment**: Check ✅ **Production**, **Preview**, and **Development**
- Click **Save**

#### Variable 2: `NEXT_PUBLIC_SANITY_DATASET`
- **Name**: `NEXT_PUBLIC_SANITY_DATASET`
- **Value**: `production` (or your dataset name)
- **Environment**: Check ✅ **Production**, **Preview**, and **Development**
- Click **Save**

#### Variable 3: `SANITY_API_TOKEN`
- **Name**: `SANITY_API_TOKEN`
- **Value**: Your Sanity API token (starts with `sk...`)
- **Environment**: Check ✅ **Production**, **Preview**, and **Development**
- Click **Save**

#### Variable 4: `NEXT_PUBLIC_CONTRACT_ADDRESS`
- **Name**: `NEXT_PUBLIC_CONTRACT_ADDRESS`
- **Value**: Your deployed contract address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)
- **Environment**: Check ✅ **Production**, **Preview**, and **Development**
- Click **Save**

---

## 🔑 Getting Your Values

### Get Sanity Project ID

**Method 1: From Sanity Dashboard**
1. Go to [Sanity.io Manage](https://www.sanity.io/manage)
2. Login and select your project
3. The Project ID is shown at the top

**Method 2: From CLI**
```bash
cd studio
sanity manage
```
This will open your browser with the project ID visible.

**Method 3: From sanity.json**
```bash
cd studio
cat sanity.json
# Look for "projectId" value
```

### Get Sanity API Token

1. Go to [Sanity.io Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** tab
4. Click **Tokens**
5. Click **+ Add New Token**
   - **Label**: `Vercel Production`
   - **Permissions**: Select **Editor**
6. Click **Save**
7. **COPY THE TOKEN IMMEDIATELY** (it won't be shown again!)
   - Token starts with `sk...`

### Get Contract Address

If you haven't deployed your contract yet:

```bash
cd smart_contract

# Deploy to Sepolia testnet
npm run deploy:sepolia

# Or to Goerli testnet
npm run deploy:goerli
```

Copy the contract address from the output:
```
Contract deployed to: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      Copy this address
```

---

## ✅ Verification

After adding all variables:

1. Go back to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait for build to complete
5. ✅ Build should succeed!

---

## 🖼️ Visual Guide

Here's what the Environment Variables page looks like:

```
┌─────────────────────────────────────────────────┐
│ Environment Variables                           │
├─────────────────────────────────────────────────┤
│                                                 │
│ [+ Add New]                                     │
│                                                 │
│ ┌─ NEXT_PUBLIC_SANITY_PROJECT_ID ─────────┐    │
│ │ Value: abc123xyz              [Edit] [×] │    │
│ │ Production ✓  Preview ✓  Development ✓   │    │
│ └──────────────────────────────────────────┘    │
│                                                 │
│ ┌─ NEXT_PUBLIC_SANITY_DATASET ────────────┐    │
│ │ Value: production             [Edit] [×] │    │
│ │ Production ✓  Preview ✓  Development ✓   │    │
│ └──────────────────────────────────────────┘    │
│                                                 │
│ ┌─ SANITY_API_TOKEN ──────────────────────┐    │
│ │ Value: sk...***hidden***      [Edit] [×] │    │
│ │ Production ✓  Preview ✓  Development ✓   │    │
│ └──────────────────────────────────────────┘    │
│                                                 │
│ ┌─ NEXT_PUBLIC_CONTRACT_ADDRESS ──────────┐    │
│ │ Value: 0x742d35...            [Edit] [×] │    │
│ │ Production ✓  Preview ✓  Development ✓   │    │
│ └──────────────────────────────────────────┘    │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ⚠️ Important Notes

1. **Sensitive Tokens**: The `SANITY_API_TOKEN` is sensitive. Never share it or commit it to Git.

2. **Public Variables**: Variables starting with `NEXT_PUBLIC_` are exposed to the browser. Only put non-sensitive data there.

3. **All Environments**: Make sure to check all three environment boxes (Production, Preview, Development) for each variable.

4. **Redeploy Required**: After adding variables, you MUST redeploy for them to take effect.

5. **No Secrets Needed**: We're using direct environment variables, not Vercel Secrets (the `@` syntax). This is simpler for getting started.

---

## 🐛 Troubleshooting

### Error: "Configuration must contain `projectId`"
- ✅ Fixed! The build will now succeed even without env vars
- But you still need to add them for the app to work properly
- Add variables as described above and redeploy

### Can't Find Sanity Project ID
```bash
cd studio
cat sanity.json | grep projectId
```

### Don't Have Sanity Project Yet
```bash
cd studio
npm install -g @sanity/cli
sanity init
```
Follow the prompts to create a new project.

### Contract Not Deployed
```bash
cd smart_contract
# Make sure .env file exists with ETHEREUM_RPC_URL and PRIVATE_KEY
npm run deploy:sepolia
```

---

## 📝 Checklist

Before you can use the deployed app:

- [ ] All 4 environment variables added in Vercel
- [ ] All variables set for Production, Preview, AND Development
- [ ] Sanity project created and API token generated
- [ ] Smart contract deployed to testnet
- [ ] Project redeployed after adding variables
- [ ] Build succeeded
- [ ] App accessible at Vercel URL

---

## 🎯 Quick Reference

| Variable | Example Value | Where to Get It |
|----------|---------------|-----------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `abc123xyz` | Sanity Dashboard → Project Settings |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Usually "production" |
| `SANITY_API_TOKEN` | `skXXXXXXXXXX` | Sanity Dashboard → API → Tokens |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | `0x742d35...` | From deployment script output |

---

**Need Help?** See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for more details.
