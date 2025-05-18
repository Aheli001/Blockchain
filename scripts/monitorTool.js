docs.monitorTool = `
<h1 class="heading">Monitoring Tools: Using Etherscan and Solscan</h1>

<h2 class="subHeading">A. Ethereum Monitoring with Etherscan</h2>

<h3>Step 1: Accessing Etherscan</h3>
<ul>
  <li>Open Etherscan: <a href="https://etherscan.io" target="_blank">etherscan.io</a></li>
  <li>Switch Networks:
    <ul>
      <li>Mainnet: etherscan.io</li>
      <li>Testnets (e.g., Goerli): goerli.etherscan.io</li>
    </ul>
  </li>
</ul>

<h3>Step 2: Track Transactions</h3>
<p><strong>Using Transaction Hash:</strong></p>
<div class="code-container"><pre><code>
0x123abc...
</code></pre></div>
<ul>
  <li>Status: Success</li>
  <li>Block: 12345678</li>
  <li>Gas Used: 21,000</li>
</ul>

<h3>Step 3: Monitor Wallet Addresses</h3>
<ul>
  <li>Search for Wallet Address in the search bar.</li>
  <li>View current ETH balance and list of transactions.</li>
  <li>Create an Etherscan account and set up:
    <ul>
      <li>Wallet Watchlist</li>
      <li>Email alerts</li>
    </ul>
  </li>
</ul>

<h3>Step 4: Analyze Smart Contract Activity</h3>
<ul>
  <li>Search for the contract address.</li>
  <li>Check if the contract is verified.</li>
  <li>Navigate to the <strong>“Contract”</strong> tab to:
    <ul>
      <li>Read Contract</li>
      <li>Write Contract</li>
    </ul>
  </li>
  <li>Use the “Input Data” to decode transaction calls.</li>
</ul>

<h3>Step 5: View Token Transfers</h3>
<ul>
  <li>Go to “ERC-20 Token Txns” or “ERC-721 Token Txns”.</li>
  <li>Track:
    <ul>
      <li>Token transfers</li>
      <li>Minting</li>
      <li>Burning</li>
    </ul>
  </li>
</ul>

<h2 class="subHeading">B. Solana Monitoring with Solscan</h2>

<h3>Step 1: Accessing Solscan</h3>
<ul>
  <li>Open Solscan: <a href="https://solscan.io" target="_blank">solscan.io</a></li>
  <li>Switch Networks:
    <ul>
      <li>Mainnet: solscan.io</li>
      <li>Testnet: <a href="https://solscan.io/?cluster=testnet" target="_blank">?cluster=testnet</a></li>
    </ul>
  </li>
</ul>

<h3>Step 2: Track Transactions</h3>
<p><strong>Using Transaction Signature:</strong></p>
<div class="code-container"><pre><code>
5sd8fn...
</code></pre></div>
<ul>
  <li>Status: Confirmed</li>
  <li>Block: 12345678</li>
  <li>Fee: 0.00001 SOL</li>
</ul>

<h3>Step 3: Monitor Wallet Activity</h3>
<ul>
  <li>Paste wallet address into the search bar.</li>
  <li>View SOL balance, token balances, and transaction history.</li>
  <li>Use <strong>“Token Balances”</strong> to see SPL token holdings.</li>
</ul>

<h3>Step 4: Monitor Programs</h3>
<ul>
  <li>Search for program’s public key.</li>
  <li>View:
    <ul>
      <li>Associated accounts</li>
      <li>Program instructions</li>
      <li>Decoded actions (e.g., mint, transfer)</li>
    </ul>
  </li>
</ul>

<h3>Step 5: Track Account Changes</h3>
<ul>
  <li>View Solana account details:
    <ul>
      <li>Owner program</li>
      <li>Account data</li>
      <li>Account history</li>
    </ul>
  </li>
</ul>
<h2 class="subHeading">B. Comparison of Etherscan and Solscan</h2>
<table style="width:100%; border-collapse:collapse; margin-top:20px;">
    <tr>
      <th>Feature</th>
      <th>Etherscan</th>
      <th>Solscan</th>
    </tr>
    <tr>
      <td>Transaction Tracking</td>
      <td>Transaction hash, gas used, input data</td>
      <td>Transaction signature, instructions</td>
    </tr>
    <tr>
      <td>Account Monitoring</td>
      <td>ETH balance, transaction history</td>
      <td>SOL balance, associated token accounts</td>
    </tr>
    <tr>
      <td>Smart Contract Analysis</td>
      <td>Verified contracts, read/write options</td>
      <td>Program decoding, account changes</td>
    </tr>
    <tr>
      <td>Token Transfers</td>
      <td>ERC-20 and ERC-721 token tracking</td>
      <td>SPL token tracking</td>
    </tr>
    <tr>
      <td>Notifications</td>
      <td>Email alerts for watched addresses</td>
      <td>Not available</td>
    </tr>
  </table>
<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Etherscan:</strong>
    <ul>
      <li>Best for tracking Ethereum transactions, wallet activity, and interacting with smart contracts.</li>
      <li>Features like verified contracts and input data decoding make it a powerful tool for Ethereum developers.</li>
    </ul>
  </li>
  <li><strong>Solscan:</strong>
    <ul>
      <li>Provides insights into Solana transactions, accounts, and programs.</li>
      <li>Decodes program instructions and account changes, making it indispensable for Solana developers.</li>
    </ul>
  </li>
</ul>
<p>By using Etherscan and Solscan effectively, you can monitor blockchain activity, debug smart contracts, and ensure transparency in your decentralized applications.</p>

`;