docs.introToWebJs = `
<h1 class="heading">Introduction to Web3.js</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">A. Connecting to Ethereum Nodes (Infura, Alchemy)</h2>

<p class="contentText"><strong>What Are Ethereum Nodes?</strong></p>
<p>Ethereum nodes are computers that maintain and verify the Ethereum blockchain. Developers connect to these nodes to:</p>
<ul>
  <li>Interact with smart contracts</li>
  <li>Read blockchain data (e.g., balances, transactions)</li>
  <li>Submit transactions</li>
</ul>

<p class="contentText"><strong>Connecting to Nodes:</strong></p>
<p>Running a full Ethereum node requires significant resources. Instead, most developers use APIs from node providers like Infura and Alchemy.</p>

<h3 class="subHeading">Infura</h3>
<p>A cloud-based Ethereum node service offering access to multiple networks like Mainnet, Goerli, and Polygon.</p>
<p><strong>Setup:</strong></p>
<ol>
  <li>Create an account at <a href="https://infura.io" target="_blank">Infura</a>.</li>
  <li>Create a new project and copy the API endpoint.</li>
  <li>Connect using Web3.js:</li>
</ol>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');
</code></pre></div>

<h3 class="subHeading">Alchemy</h3>
<p>Another leading blockchain API provider with advanced developer tools.</p>
<p><strong>Setup:</strong></p>
<ol>
  <li>Create an account at <a href="https://alchemy.com" target="_blank">Alchemy</a>.</li>
  <li>Create a project and get your API URL.</li>
  <li>Connect using Web3.js:</li>
</ol>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY');
</code></pre></div>

<p class="contentText"><strong>Benefits of Using Infura/Alchemy:</strong></p>
<ul>
  <li>No need to run your own node</li>
  <li>Reliable and scalable access to Ethereum</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">B. Understanding Wallets and Private Keys</h2>

<p class="contentText"><strong>What Is a Wallet?</strong></p>
<p>A wallet is a software or hardware tool that manages Ethereum accounts. It allows users to store keys, send and receive ETH, and interact with decentralized applications (dApps).</p>

<p class="contentText"><strong>Public and Private Keys:</strong></p>
<ul>
  <li><strong>Public Key:</strong> Derived from the private key; used to generate wallet addresses and can be shared publicly.</li>
  <li><strong>Private Key:</strong> A 256-bit number that grants access to the wallet. It must be kept secure and confidential.</li>
</ul>

<p class="contentText"><strong>Types of Wallets:</strong></p>
<ul>
  <li><strong>Hot Wallets:</strong> Connected to the internet (e.g., MetaMask, Trust Wallet).</li>
  <li><strong>Cold Wallets:</strong> Offline storage for added security (e.g., Ledger, Trezor).</li>
</ul>

<h3 class="subHeading">Creating a Wallet with Web3.js</h3>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3();

// Generate a random wallet
const wallet = web3.eth.accounts.create();
console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">C. Sending Transactions</h2>
<p>Example code to send ETH using Web3.js:</p>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');

const sender = 'SENDER_ADDRESS';
const privateKey = 'SENDER_PRIVATE_KEY';
const recipient = 'RECIPIENT_ADDRESS';

async function sendTransaction() {
    const tx = {
        to: recipient,
        value: web3.utils.toWei('0.01', 'ether'),
        gas: 21000,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction Hash:', receipt.transactionHash);
}

sendTransaction();
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">D. Security Best Practices</h2>
<ul>
  <li><strong>Backup Your Seed Phrase:</strong> Needed to recover your wallet.</li>
  <li><strong>Never Share Private Keys:</strong> Treat them like a password; sharing gives full control to others.</li>
  <li><strong>Use Cold Storage:</strong> For large holdings, use a hardware wallet for better security.</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Conclusion</h2>
<ul>
  <li><strong>EVM and Gas:</strong> The Ethereum Virtual Machine processes smart contract logic using gas as computational fuel.</li>
  <li><strong>Smart Contracts:</strong> Automate actions and logic on the blockchain without intermediaries.</li>
  <li><strong>Web3.js:</strong> Enables programmatic interaction with Ethereum nodes, wallets, and contracts.</li>
  <li><strong>Wallets and Keys:</strong> Central to identity, access, and transaction signing in Ethereum.</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Solidity Basics</h2>
<p><strong>Solidity</strong> is the most popular programming language for writing smart contracts on Ethereum. It is statically typed and inspired by JavaScript, Python, and C++.</p>
`;
