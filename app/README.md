# Web3 DEX Platform - Frontend

The Next.js frontend application for the Web3 DEX Platform.

## Tech Stack

- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ethers.js** - Ethereum library
- **Sanity Client** - CMS integration

## Getting Started

### Prerequisites

- Node.js 14+
- Yarn or npm
- MetaMask browser extension

### Installation

```bash
yarn install
# or
npm install
```

### Configuration

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
   ```

### Development

Run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
yarn build
# or
npm run build
```

### Start Production Server

```bash
yarn start
# or
npm start
```

## Project Structure

```
app/
├── components/          # React components
│   ├── Header.js       # Navigation and wallet connection
│   ├── Main.js         # Token swap interface
│   ├── TransactionHistory.js
│   └── TransactionLoader.js
├── context/            # React Context providers
│   └── TransactionContext.js
├── lib/                # Utilities and constants
│   ├── constants.js    # Contract ABI and address
│   ├── sanityClient.js # Sanity configuration
│   └── Transactions.json
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── index.js       # Home page
│   └── api/           # API routes
├── public/             # Static assets
├── styles/            # Global styles
└── assets/            # Images and icons
```

## Features

### Wallet Connection

Users can connect their MetaMask wallet to interact with the platform.

### Token Swapping

Send ETH to any Ethereum address through the swap interface.

### Transaction History

View all your past transactions with real-time updates from Sanity.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | `abc123xyz` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `SANITY_API_TOKEN` | Sanity API token with write access | `sk...` |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed smart contract address | `0x...` |

## Code Formatting

Format code with Prettier:

```bash
yarn format
# or
npm run format
```

## Linting

Run ESLint:

```bash
yarn lint
# or
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Troubleshooting

### MetaMask Connection Issues

- Ensure MetaMask is installed and unlocked
- Check that you're on the correct network
- Try refreshing the page

### Transaction Failures

- Check you have enough ETH for gas fees
- Verify the recipient address is valid
- Ensure the smart contract is deployed on the current network

### Sanity Connection Issues

- Verify your Sanity credentials in `.env.local`
- Check that your Sanity dataset exists
- Ensure the API token has write permissions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ethers.js Documentation](https://docs.ethers.io/)
- [Sanity Documentation](https://www.sanity.io/docs)

## License

MIT
