# Contributing to Web3 DEX Platform

First off, thank you for considering contributing to Web3 DEX Platform! It's people like you that make this project such a great tool for the Web3 community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Style Guidelines](#style-guidelines)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [Solidity Style Guide](#solidity-style-guide)
- [Development Setup](#development-setup)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to barisariburnu@gmail.com.

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment (see [Development Setup](#development-setup))
4. Create a branch for your changes
5. Make your changes
6. Test your changes
7. Submit a pull request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots or animated GIFs** if possible
* **Include your environment details** (OS, browser, Node.js version, etc.)

#### Template for Bug Reports

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 120]
 - Node.js Version: [e.g. 18.17.0]
 - MetaMask Version: [e.g. 11.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**
* **List some other applications where this enhancement exists** (if applicable)

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the [JavaScript](#javascript-style-guide) and [Solidity](#solidity-style-guide) style guides
* Include thoughtful comments in your code
* End all files with a newline
* Avoid platform-dependent code
* Write tests for your changes when applicable

#### Pull Request Process

1. **Fork & Clone**: Fork the repo and clone it locally
2. **Branch**: Create a new branch from `main`
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Code**: Make your changes
4. **Test**: Ensure all tests pass
   ```bash
   cd smart_contract && npx hardhat test
   cd ../app && yarn test
   ```
5. **Commit**: Use clear commit messages (see [Git Commit Messages](#git-commit-messages))
6. **Push**: Push to your fork
   ```bash
   git push origin feature/my-new-feature
   ```
7. **PR**: Open a Pull Request against the `main` branch

## Style Guidelines

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when adding a new feature
  * 📝 `:memo:` when writing docs
  * 🚀 `:rocket:` when improving performance
  * ✅ `:white_check_mark:` when adding tests
  * 🔒 `:lock:` when dealing with security
  * ⬆️ `:arrow_up:` when upgrading dependencies
  * ⬇️ `:arrow_down:` when downgrading dependencies
  * 🔧 `:wrench:` when changing configuration files

Example:
```
✨ Add token approval functionality

- Implement ERC-20 token approval before swap
- Add loading state during approval
- Update UI to show approval status
- Add error handling for approval failures

Fixes #123
```

### JavaScript Style Guide

* Use 2 spaces for indentation
* Use single quotes for strings
* Use template literals for string interpolation
* Use arrow functions where appropriate
* Use `const` and `let` instead of `var`
* Use meaningful variable names
* Add comments for complex logic
* Follow the existing code style

Example:
```javascript
// ✅ Good
const getUserAddress = (account) => {
  return `${account.slice(0, 7)}...${account.slice(35)}`;
};

// ❌ Bad
var getAddress = function(a) {
  return a.slice(0, 7) + "..." + a.slice(35);
}
```

### Solidity Style Guide

* Follow the [official Solidity style guide](https://docs.soliditylang.org/en/latest/style-guide.html)
* Use 4 spaces for indentation
* Order functions: constructor, receive, fallback, external, public, internal, private
* Add NatSpec comments for all public/external functions
* Use meaningful variable names
* Include events for state changes

Example:
```solidity
// ✅ Good
/**
 * @notice Publishes a transaction to the blockchain
 * @param receiver Address of the receiver
 * @param amount Amount to transfer
 * @param message Transaction message
 * @param keyword Transaction keyword
 */
function publishTransaction(
    address payable receiver,
    uint256 amount,
    string memory message,
    string memory keyword
) external {
    // Implementation
}
```

## Development Setup

1. **Install dependencies** for all sub-projects:

```bash
# Frontend
cd app
yarn install

# Smart Contracts
cd ../smart_contract
npm install

# Sanity Studio
cd ../studio
yarn install
```

2. **Set up environment variables** (see main README.md)

3. **Run local development servers**:

```bash
# Terminal 1 - Hardhat local node
cd smart_contract
npx hardhat node

# Terminal 2 - Next.js app
cd app
yarn dev

# Terminal 3 - Sanity Studio
cd studio
yarn start
```

## Testing

### Smart Contract Tests

```bash
cd smart_contract
npx hardhat test
npx hardhat coverage
```

### Frontend Tests

```bash
cd app
yarn test
yarn test:watch
```

### Test Coverage

We strive for high test coverage. Please ensure your contributions include appropriate tests:

* Smart contract functions should have comprehensive test cases
* Frontend components should have unit tests
* Integration tests for critical user flows

## Questions?

Don't hesitate to ask questions! You can:

* Open an issue with the `question` label
* Email the maintainer at barisariburnu@gmail.com
* Join our community discussions

## Recognition

Contributors will be recognized in our README.md file. Thank you for your contributions!

---

**Happy Contributing! 🚀**
