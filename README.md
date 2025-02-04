# Web Wallet

## Overview

The Web Wallet is a web application that allows users to generate and manage HD (Hierarchical Deterministic) wallets for Ethereum and Solana blockchains. Users can create wallets based on a seed phrase and view details such as addresses, private keys, and balances.

## Features

- **Generate HD Wallets**: Create Ethereum and Solana wallets using a seed phrase.
- **View Wallet Details**: Display wallet addresses, private keys, and balances.
- **Network Selection**: Choose between Ethereum Mainnet and Goerli testnet for balance queries.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **Solana Web3.js**: Library for interacting with the Solana blockchain.
- **BIP39**: Library for mnemonic and seed phrase generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Access to Infura or Alchemy for Ethereum network endpoints.
- Solana wallet for network interactions.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/web-wallet.git
    cd web-wallet
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

### Usage

1. **Generate Wallets**: Enter a mnemonic seed phrase and click "Generate Wallet" to create a new HD wallet.

2. **Select Network**: Use the dropdown menu to select the Ethereum network (Mainnet or Goerli) or Solana.

3. **View Wallet Details**: After generating a wallet, its address, private key, and balance will be displayed.

### Example

Here is a basic example of how to use the application:

1. Open the application in your browser.
2. Enter a valid mnemonic seed phrase.
3. Select the desired Ethereum network or Solana.
4. Click "Generate Wallet" to create a new wallet.
5. The wallet's address, private key, and balance will be displayed.
