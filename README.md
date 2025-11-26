# Web3 DEX Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.x-black)](https://nextjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.4-blue)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-2.x-yellow)](https://hardhat.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)](https://tailwindcss.com/)

A decentralized exchange (DEX) platform built with Next.js, Solidity, and Sanity.io. This Uniswap-inspired application allows users to swap Ethereum tokens directly from their MetaMask wallet while tracking transaction history on the blockchain.

![Web3 DEX Platform](https://via.placeholder.com/1200x600/191B1F/2172E5?text=Web3+DEX+Platform)

## ✨ Features

- 🔐 **MetaMask Integration** - Connect your wallet seamlessly
- 💱 **Token Swapping** - Exchange ETH and ERC-20 tokens
- 📊 **Transaction History** - Track all your swaps in real-time
- 🎨 **Modern UI** - Beautiful, responsive interface inspired by Uniswap
- ⛓️ **Smart Contracts** - Secure Solidity contracts deployed on Ethereum
- 💾 **Data Persistence** - Transaction data stored via Sanity.io CMS
- 🌐 **Web3 Enabled** - Full blockchain integration with ethers.js

## 🏗️ Project Structure

This is a monorepo containing three main components:

```
web3-dex-platform/
├── app/                    # Next.js frontend application
│   ├── components/         # React components
│   ├── context/           # React context providers
│   ├── lib/               # Utilities and constants
│   ├── pages/             # Next.js pages
│   └── styles/            # CSS and Tailwind styles
├── smart_contract/        # Hardhat Ethereum development environment
│   ├── contracts/         # Solidity smart contracts
│   ├── scripts/           # Deployment scripts
│   └── test/              # Contract tests
└── studio/               # Sanity.io CMS configuration
    └── schemas/          # Data schemas for transactions and users
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher) ⚠️ **Node.js 18.x is required**
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) browser extension
- [Git](https://git-scm.com/)

> **📖 Deployment Guides**: 
> - [Vercel Deployment Guide](VERCEL_DEPLOYMENT.md) - Step-by-step Vercel deployment
> - [GitHub Actions CI/CD](GITHUB_ACTIONS.md) - Understanding the CI/CD pipeline


### Installation

1. **Clone the repository**

```bash
git clone https://github.com/barisariburnu/web3-dex-platform.git
cd web3-dex-platform
```

2. **Set up the frontend application**

```bash
cd app
yarn install
# or
npm install
```

3. **Set up the smart contract environment**

```bash
cd ../smart_contract
npm install
```

4. **Set up Sanity Studio**

```bash
cd ../studio
yarn install
# or
npm install
```

### Configuration

#### 1. Environment Variables

Create a `.env.local` file in the `app` directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Ethereum Contract
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

Create a `.env` file in the `smart_contract` directory:

```env
# Alchemy or Infura API
ETHEREUM_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key

# Deployer Private Key (NEVER commit this!)
PRIVATE_KEY=your_private_key_here
```

⚠️ **IMPORTANT**: Never commit your `.env` files or expose your private keys!

#### 2. Sanity.io Setup

1. Create a free account at [sanity.io](https://www.sanity.io/)
2. Create a new project or use the CLI:

```bash
cd studio
sanity init
```

3. Update `studio/sanity.json` with your project ID
4. Generate an API token from the Sanity dashboard
5. Add the token to your `app/.env.local` file

#### 3. Smart Contract Deployment

1. Get test ETH from a faucet (for testnet deployment)
   - [Sepolia Faucet](https://sepoliafaucet.com/)
   - [Goerli Faucet](https://goerlifaucet.com/)

2. Deploy the contract:

```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network sepolia
```

3. Copy the deployed contract address to `app/lib/constants.js`

### Running the Application

1. **Start Sanity Studio** (in one terminal):

```bash
cd studio
yarn start
# Visit http://localhost:3333
```

2. **Start the Next.js app** (in another terminal):

```bash
cd app
yarn dev
# Visit http://localhost:3000
```

## 📖 Usage

1. **Connect Wallet**: Click the "Connect Wallet" button and approve the MetaMask connection
2. **Enter Amount**: Type the amount of ETH you want to send
3. **Enter Recipient**: Paste the recipient's Ethereum address
4. **Confirm Transaction**: Click "Confirm" and approve the transaction in MetaMask
5. **View History**: Your transaction will appear in the transaction history panel

## 🛠️ Development

### Running Tests

```bash
cd smart_contract
npx hardhat test
```

### Compile Smart Contracts

```bash
cd smart_contract
npx hardhat compile
```

### Local Blockchain

Run a local Hardhat node for development:

```bash
npx hardhat node
```

### Code Formatting

The project uses Prettier for code formatting:

```bash
cd app
yarn format
```

## 🧱 Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)** - React framework
- **[React](https://reactjs.org/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[ethers.js](https://docs.ethers.io/)** - Ethereum library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### Backend
- **[Solidity](https://soliditylang.org/)** - Smart contract language
- **[Hardhat](https://hardhat.org/)** - Ethereum development environment
- **[Sanity.io](https://www.sanity.io/)** - Headless CMS

### Blockchain
- **Ethereum** - Blockchain network
- **MetaMask** - Wallet integration

## 📝 Smart Contract

The `Transactions` smart contract includes:

- `publishTransaction()` - Records transaction details on-chain
- Event emission for tracking
- Gas-optimized operations

```solidity
// Simplified example
function publishTransaction(
    address payable receiver,
    uint amount,
    string memory message,
    string memory keyword
) public {
    // Transaction logic
}
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This project is for educational purposes only. Use at your own risk. Always audit smart contracts before deploying to mainnet with real funds.

## 🙏 Acknowledgments

- Inspired by [Uniswap](https://uniswap.org/)
- Built with guidance from the Web3 development community
- UI/UX design influenced by modern DEX platforms

## 📧 Contact

**Baris Ariburnu**

- GitHub: [@barisariburnu](https://github.com/barisariburnu)
- Email: barisariburnu@gmail.com

## 🔗 Links

- [Live Demo](https://your-demo-url.vercel.app) (Deploy and add your URL)
- [Documentation](https://github.com/barisariburnu/web3-dex-platform/wiki)
- [Report Bug](https://github.com/barisariburnu/web3-dex-platform/issues)
- [Request Feature](https://github.com/barisariburnu/web3-dex-platform/issues)

---

⭐ If you found this project helpful, please consider giving it a star!
