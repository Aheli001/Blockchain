docs.installation = `
<h1 class="heading">Setting Up Development Environment for Blockchain Development</h1>
<p class="contentText">This guide explains the step-by-step process for setting up a blockchain development environment for Solana and Ethereum development. It includes installing required tools, configuring your IDE, and ensuring readiness for deploying and interacting with smart contracts or programs.</p>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">1. Installing Node.js and npm</h1>

<p class="contentText"><strong>Why Node.js and npm?</strong></p>
<ul>
  <li><strong>Node.js:</strong> A runtime required for Ethereum tools like Web3.js, Hardhat, and Truffle.</li>
  <li><strong>npm (Node Package Manager):</strong> Used to manage dependencies for blockchain projects.</li>
</ul>

<h2 class="subHeading">Installation Steps</h2>
<ol>
  <li><strong>Download Node.js:</strong>
    <ul>
      <li>Visit the <a href="https://nodejs.org/" target="_blank">Node.js Official Website</a>.</li>
      <li>Choose the <strong>LTS (Long-Term Support)</strong> version for stability.</li>
    </ul>
  </li>

  <li><strong>Install Node.js:</strong>
    <ul>
      <li>Follow the installer instructions for your operating system (Windows, macOS, or Linux).</li>
      <li>Ensure that npm is installed alongside Node.js.</li>
    </ul>
  </li>

  <li><strong>Verify Installation:</strong>
    
      <div class="code-container"><pre><code>node -v</code></pre></div>
      <div class="code-container"><pre><code>npm -v</code></pre></div>
    
  </li>

  <li><strong>Update npm (Optional):</strong>
    <ul>
      <li><div class="code-container"><pre><code>npm install -g npm@latest</code></pre></div></li>
    </ul>
  </li>
</ol>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">2. Installing Solana CLI</h1>

<p class="contentText"><strong>Why Solana CLI?</strong></p>
<p>The Solana Command Line Interface (CLI) is used for creating wallets, deploying programs, and managing accounts on the Solana blockchain.</p>

<h2 class="subHeading">Installation Steps</h2>
<ol>
  <li><strong>Install Solana CLI:</strong>
    <div class="code-container"><pre><code>sh -c "$(curl -sSfL https://release.solana.com/stable/install)"</code></pre></div>
  </li>
  <li><strong>Verify Installation:</strong>
    <div class="code-container"><pre><code>solana --version</code></pre></div>
  </li>
  <li><strong>Configure Solana CLI:</strong>
    <div class="code-container"><pre><code>solana config set --url https://api.devnet.solana.com</code></pre></div>
  </li>
  <li><strong>Create a Wallet:</strong>
    <div class="code-container"><pre><code>solana-keygen new --outfile ~/solana-wallet.json</code></pre></div>
    <p>Save the seed phrase securely for recovery.</p>
  </li>
  <li><strong>Airdrop Test Tokens:</strong>
    <div class="code-container"><pre><code>solana airdrop 2</code></pre></div>
  </li>
</ol>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">3. Installing Ethereum Development Tools</h1>

<h2 class="subHeading">Tools Overview</h2>
<ul>
  <li><strong>Hardhat:</strong> Ethereum development environment for deploying and testing smart contracts.</li>
  <li><strong>Truffle:</strong> Framework for Ethereum smart contract development.</li>
  <li><strong>Web3.js:</strong> JavaScript library for interacting with Ethereum.</li>
</ul>

<h2 class="subHeading">Hardhat Installation</h2>
<div class="code-container"><pre><code>npm install --save-dev hardhat</code></pre></div>

<p>Initialize a Hardhat project:</p>
<div class="code-container"><pre><code>npx hardhat</code></pre></div>
<p>Choose the project type (e.g., basic or sample contract).</p>

<p>Install plugins:</p>
<div class="code-container"><pre><code>npm install --save-dev @nomiclabs/hardhat-ethers ethers</code></pre></div>

<h2 class="subHeading">Truffle Installation</h2>
<div class="code-container"><pre><code>npm install -g truffle</code></pre></div>
<div class="code-container"><pre><code>truffle version</code></pre></div>

<p>Initialize a Truffle project:</p>
<div class="code-container"><pre><code>truffle init</code></pre></div>

<h2 class="subHeading">Web3.js Installation</h2>
<div class="code-container"><pre><code>npm install web3</code></pre></div>

<p>Example code to connect to an Ethereum node:</p>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
console.log(await web3.eth.getBlockNumber());
</code></pre></div>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">4. IDE Setup: VS Code with Essential Extensions</h1>

<h2 class="subHeading">Why Visual Studio Code?</h2>
<p>Lightweight, feature-rich, and customizable for blockchain development.</p>

<h2 class="subHeading">Installation</h2>
<p>Download and install from <a href="https://code.visualstudio.com/" target="_blank">VS Code Official Website</a>.</p>

<h2 class="subHeading">Essential Extensions</h2>
<ul>
  <li><strong>Solidity:</strong> Adds support for writing and debugging Solidity smart contracts.</li>
  <li><strong>Rust Analyzer:</strong> Adds support for Rust programming (for Solana).</li>
  <li><strong>Prettier:</strong> Code formatter for consistent style.</li>
  <li><strong>ESLint:</strong> Linting for JavaScript and TypeScript.</li>
  <li><strong>REST Client:</strong> Test blockchain APIs directly from VS Code.</li>
</ul>

<h2 class="subHeading">Setting Up Environment for Solidity</h2>
<p>Configure the Solidity compiler version:</p>
<div class="code-container"><pre><code>{
  ".compileUsingRemoteVersion": "v0.8.17+commit.8df45f5f"
}</code></pre></div>

<h2 class="subHeading">Setting Up Environment for Rust</h2>
<p>Install the Rust toolchain:</p>
<div class="code-container"><pre><code>curl --proto '=https' --tlsv1.2 -sSf https://sh.up.rs | sh</code></pre></div>

<p>Install dependencies for Solana programs:</p>
<div class="code-container"><pre><code>
up install stable
up component add fmt
</code></pre></div>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">5. Testing Environment</h1>

<h2 class="subHeading">Solana Programs</h2>
<div class="code-container"><pre><code>
anchor init my-solana-program
cd my-solana-program
anchor build
anchor deploy
</code></pre></div>

<h2 class="subHeading">Ethereum Smart Contracts</h2>
<p>Write and deploy a simple contract:</p>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10 ** decimals);

    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}
</code></pre></div>

<p>Deploy using Hardhat:</p>
<div class="code-container"><pre><code>npx hardhat run scripts/deploy.js --network rinkeby</code></pre></div>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">6. Verifying the Setup</h1>
<ul>
  <li><strong>Verify Ethereum:</strong> Connect to a testnet (e.g., Rinkeby or Goerli) and deploy a contract.</li>
  <li><strong>Verify Solana:</strong> Deploy a program on the devnet and interact with it via CLI.</li>
</ul>

<h1 class="subHeading" style="text-decoration: underline; font-weight: bold;">Conclusion</h1>
<p>With the tools and configurations outlined above, you will have a robust development environment for building, deploying, and interacting with blockchain applications on Solana and Ethereum. This setup supports both smart contract development and programmatic interaction with blockchain networks.</p>

<h2 class="subHeading">Hands-On: Create and Deploy Your First Wallet on Solana and Ethereum</h2>
<p>This guide walks you through creating and deploying your first wallet on both Solana and Ethereum using their respective tools.</p>
`;
