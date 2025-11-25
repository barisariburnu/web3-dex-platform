# Smart Contracts

This directory contains the Ethereum smart contracts for the Web3 DEX Platform.

## Contracts

### Transactions.sol

The main contract that handles transaction recording on the blockchain.

**Functions:**
- `publishTransaction(address payable receiver, uint256 amount, string memory message, string memory keyword)` - Records a transaction on-chain

## Development

### Prerequisites

- Node.js v14+
- Hardhat

### Installation

```bash
npm install
```

### Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your credentials:
   ```env
   ETHEREUM_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY
   PRIVATE_KEY=your_private_key_without_0x
   ```

   **Get API Key:**
   - [Alchemy](https://www.alchemy.com/) - Free tier available
   - [Infura](https://infura.io/) - Alternative provider

### Compile

```bash
npm run compile
```

### Test

```bash
npm test
```

### Deploy

#### Local Network

1. Start a local Hardhat node:
   ```bash
   npm run node
   ```

2. Deploy to local network:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

#### Testnet (Sepolia)

```bash
npm run deploy:sepolia
```

#### Testnet (Goerli)

```bash
npm run deploy:goerli
```

#### Mainnet (Use with extreme caution!)

```bash
npm run deploy:mainnet
```

### After Deployment

1. Copy the deployed contract address from the console
2. Update `../app/lib/constants.js` with the new address
3. Update `../app/.env.local`:
   ```env
   NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
   ```

## Testing

Run the test suite:

```bash
npm test
```

Run with coverage:

```bash
npx hardhat coverage
```

## Gas Optimization

Before deploying to mainnet, optimize gas usage:

```bash
REPORT_GAS=true npm test
```

## Security

⚠️ **Important Security Notes:**

1. **Never commit `.env` file** - It contains your private key
2. **Test on testnet first** - Always test thoroughly before mainnet
3. **Audit contracts** - Get professional audit before production
4. **Use hardware wallet** - For mainnet deployments
5. **Verify contracts** - Verify on Etherscan after deployment

## Verify Contract on Etherscan

After deployment, verify your contract:

```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

## Network Information

### Testnets

- **Sepolia**: ChainID 11155111 (Recommended)
  - Faucet: https://sepoliafaucet.com/

- **Goerli**: ChainID 5 (Being deprecated)
  - Faucet: https://goerlifaucet.com/

### Mainnet

- **Ethereum**: ChainID 1
  - **Warning**: Use real ETH, double-check everything!

## Useful Commands

```bash
# Clean artifacts
npm run clean

# Compile contracts
npm run compile

# Run tests
npm test

# Start local node
npm run node

# Deploy to network
npm run deploy:sepolia
npm run deploy:goerli
npm run deploy:mainnet
```

## Resources

- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethers.js Documentation](https://docs.ethers.io/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

## Troubleshooting

### "insufficient funds for gas * price + value"
- Your wallet doesn't have enough ETH for gas fees
- Get testnet ETH from a faucet

### "nonce has already been used"
- Reset your MetaMask account: Settings > Advanced > Reset Account

### "invalid contract address"
- Make sure the contract is deployed to the correct network
- Check the contract address in `constants.js`

## License

MIT
