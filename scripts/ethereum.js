docs.ethereum = `
<h1 class="heading">Blockchain − Ethereum: Create and Deploy a Wallet</h1>
<ol>
  <li><strong>Install Node.js and npm:</strong>
    <p>Ensure Node.js and npm are installed:</p>
    <div class="code-container"><pre><code>node -v</code></pre></div>
    <div class="code-container"><pre><code>npm -v</code></pre></div>
  </li>

  <li><strong>Install Ethereum Tools:</strong>
    <p>Install <code>ethers.js</code> for wallet and transaction handling:</p>
    <div class="code-container"><pre><code>npm install ethers</code></pre></div>
  </li>

  <li><strong>Create a Wallet:</strong>
    <p>Create a file named <code>wallet.js</code> and add the following code:</p>
    <div class="code-container"><pre><code>
const { ethers } = require("ethers");

// Generate a wallet
const wallet = ethers.Wallet.createRandom();

console.log("Wallet Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
console.log("Mnemonic:", wallet.mnemonic.phrase);
    </code></pre></div>
    <p>Run the script:</p>
    <div class="code-container"><pre><code>node wallet.js</code></pre></div>
  </li>

  <li><strong>Fund Your Wallet:</strong>
    <p>Use the generated wallet address and visit a Goerli testnet faucet (e.g., <a href="https://goerlifaucet.com" target="_blank">Goerli Faucet</a>) to request test ETH.</p>
  </li>

  <li><strong>Deploy a Transaction:</strong>
    <p>Use the following code to send ETH to another wallet (add this to <code>wallet.js</code> or create a new script):</p>
    <div class="code-container"><pre><code>
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID"
);

const privateKey = "YOUR_PRIVATE_KEY"; // Replace with the private key
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTransaction() {
    const recipient = "RECIPIENT_WALLET_ADDRESS"; // Replace with recipient address
    const tx = {
        to: recipient,
        value: ethers.utils.parseEther("0.01"), // Send 0.01 ETH
    };

    const txResponse = await wallet.sendTransaction(tx);
    console.log("Transaction Hash:", txResponse.hash);

    const txReceipt = await txResponse.wait();
    console.log("Transaction was mined in block:", txReceipt.blockNumber);
}

sendTransaction();
    </code></pre></div>
    <p>Run the script:</p>
    <div class="code-container"><pre><code>node wallet.js</code></pre></div>
  </li>

  <li><strong>Interact with Ethereum Wallet Programmatically:</strong>
    <p>Install Hardhat for contract development:</p>
    <div class="code-container"><pre><code>npm install --save-dev hardhat</code></pre></div>

    <p>Initialize a Hardhat project:</p>
    <div class="code-container"><pre><code>npx hardhat</code></pre></div>

    <p>Create a smart contract in <code>contracts/MyToken.sol</code>:</p>
    <div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    uint256 public totalSupply;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
    }
}
    </code></pre></div>

    <p>Create a deployment script in <code>scripts/deploy.js</code>:</p>
    <div class="code-container"><pre><code>
const { ethers } = require("hardhat");

async function main() {
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(1000);
    await token.deployed();
    console.log("Token deployed to:", token.address);
}

main();
    </code></pre></div>

    <p>Deploy the contract to the Goerli testnet:</p>
    <div class="code-container"><pre><code>npx hardhat run scripts/deploy.js --network goerli</code></pre></div>
  </li>
</ol>
<h2 class="contentHeading">Conclusion</h2>
<p class="contentText">By following these steps, you have successfully created and deployed wallets on Solana and Ethereum. You also interacted programmatically with the wallets and executed transactions using Node.js. These foundational skills are crucial for blockchain development.</p>
`;
