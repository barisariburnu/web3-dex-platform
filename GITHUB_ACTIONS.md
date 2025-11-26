# GitHub Actions CI/CD Setup

## Overview

This guide explains the Continuous Integration and Continuous Deployment (CI/CD) setup for the Web3 DEX Platform using GitHub Actions.

## Workflow Configuration

The CI/CD pipeline runs on:
- **Push** to `main` or `develop` branches
- **Pull Requests** to `main` or `develop` branches

## Jobs

### 1. Frontend Tests (`frontend-test`)

Tests the Next.js application in the `app/` directory.

**Node.js Version**: 18.x (only)

**Steps**:
1. Checkout code
2. Setup Node.js 18.x with Yarn cache
3. Install dependencies with `yarn install --frozen-lockfile`
4. Run linting (continues on error)
5. Build application with test environment variables

**Environment Variables** (for testing):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=test
NEXT_PUBLIC_SANITY_DATASET=test
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
```

### 2. Smart Contract Tests (`smart-contract-test`)

Tests Solidity smart contracts in the `smart_contract/` directory.

**Node.js Version**: 18.x (only)

**Steps**:
1. Checkout code
2. Setup Node.js 18.x with npm cache
3. Install dependencies with `npm ci`
4. **Compile contracts** with `npx hardhat compile` ⚠️ **Critical step!**
5. Run tests with `npx hardhat test`
6. Generate coverage report (continues on error)

**Important**: Contracts **must** be compiled before testing, otherwise you'll get:
```
HH700: Artifact for contract "Greeter" not found
```

### 3. Security Scan (`security-scan`)

Runs Trivy vulnerability scanner on the entire codebase.

**Steps**:
1. Checkout code
2. Run Trivy scanner
3. Upload results to GitHub Security tab

## Node.js Version Strategy

**Only Node.js 18.x is used** for both frontend and smart contract tests.

### Why Node.js 18.x?

1. **Hardhat Compatibility**: Recent Hardhat versions work best with Node 18.x
2. **Next.js Performance**: Optimal performance and features
3. **Long-term Support (LTS)**: Active LTS until April 2025
4. **Consistency**: Same version across all environments

### Previous Issue

The workflow previously tested on both Node.js 16.x and 18.x, but:
- Hardhat showed warnings on Node 18.x
- Node 16.x reached end-of-life in September 2023
- Running on multiple versions unnecessarily increased CI time

## Local Testing

### Frontend Testing

```bash
cd app
yarn install
yarn lint
yarn build
```

### Smart Contract Testing

```bash
cd smart_contract
npm install
npm run compile  # Or: npx hardhat compile
npm test        # Now automatically compiles first
```

The `test` script in `smart_contract/package.json` now includes compilation:
```json
{
  "scripts": {
    "test": "hardhat compile && hardhat test"
  }
}
```

## Troubleshooting CI/CD Issues

### ❌ Error: "Artifact for contract not found"

**Cause**: Tests running before contracts are compiled

**Solution**: Workflow now includes explicit compile step:
```yaml
- name: Compile contracts
  run: npx hardhat compile

- name: Run tests
  run: npx hardhat test
```

### ❌ Error: "yarn install --frozen-lockfile failed"

**Cause**: `yarn.lock` out of sync with `package.json`

**Solution**:
```bash
cd app
yarn install
git add yarn.lock
git commit -m "Update yarn.lock"
git push
```

### ❌ Error: "npm ci failed"

**Cause**: `package-lock.json` out of sync with `package.json`

**Solution**:
```bash
cd smart_contract
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push
```

### ⚠️ Warning: "Node.js version will automatically upgrade"

**Cause**: Generic version specification in `engines`

**Solution**: Already fixed! Now specifies Node 18.x:
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

## Secrets Configuration

No secrets are currently required for CI/CD, but if needed in the future:

1. Go to GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add secret name and value
5. Reference in workflow:
   ```yaml
   env:
     MY_SECRET: ${{ secrets.MY_SECRET }}
   ```

## Workflow File Location

`.github/workflows/ci.yml`

## Triggering Workflows

### Automatic Triggers

```bash
# Pushes to main or develop
git push origin main

# Pull requests to main or develop
git push origin feature-branch
# Then create PR on GitHub
```

### Manual Trigger (Optional)

To enable manual triggering, add to `.github/workflows/ci.yml`:
```yaml
on:
  workflow_dispatch:  # Enables manual trigger
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
```

## Viewing Results

1. Go to your GitHub repository
2. Click **"Actions"** tab
3. Click on a workflow run
4. View job results and logs

## Status Badges

Add to your `README.md`:

```markdown
[![CI/CD](https://github.com/barisariburnu/web3-dex-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/barisariburnu/web3-dex-platform/actions/workflows/ci.yml)
```

## Performance Optimization

Current optimizations:
- ✅ Reduced from 2 Node versions to 1 (50% faster)
- ✅ Caching dependencies (yarn, npm)
- ✅ Running jobs in parallel
- ✅ Continuing on non-critical errors (lint, coverage)

## Future Enhancements

Potential improvements:
- [ ] Add deployment step after successful tests
- [ ] Run E2E tests with Playwright or Cypress
- [ ] Add notification on failure (Slack, Discord, Email)
- [ ] Implement caching for Hardhat artifacts
- [ ] Add performance benchmarking

---

**Last Updated**: After fixing Node.js version and smart contract compilation issues
