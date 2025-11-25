# Sanity Studio Configuration

## Setup Instructions

1. **Create a Sanity Account**
   - Go to [sanity.io](https://www.sanity.io/)
   - Sign up for a free account

2. **Initialize Sanity**
   ```bash
   cd studio
   npm install -g @sanity/cli
   sanity init
   ```

3. **Configure Project**
   - Follow the CLI prompts to create a new project or select an existing one
   - Choose the dataset name (default: production)
   - Update `sanity.json` with your project ID

4. **Update Environment Variables**
   - Copy your project ID from `sanity.json`
   - Update `../app/.env.local` with:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `SANITY_API_TOKEN` (generate from Sanity dashboard)

5. **Deploy Studio**
   ```bash
   sanity deploy
   ```

## Schemas

This studio defines the following schemas:

- **users**: User profiles with wallet addresses
- **transactions**: Transaction records from the blockchain

## Running Locally

```bash
yarn start
# or
npm start
```

The studio will be available at http://localhost:3333

## Documentation

For more information, see the [Sanity documentation](https://www.sanity.io/docs).
