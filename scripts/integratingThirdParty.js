docs.integratingThirdParty = `
<h1 class="heading">Integrating Third-Party Services</h1>
<p>This guide explains how to integrate third-party services for Ethereum (using Infura/Alchemy) and Solana (using QuickNode) step by step.</p>

<h2 class="subHeading">A. Using Infura/Alchemy for Ethereum</h2>
<p>Infura and Alchemy provide reliable Ethereum node services, enabling developers to interact with the Ethereum blockchain without running their own nodes.</p>

<h3>Step 1: Set Up Infura</h3>
<ol>
  <li>Go to <a href="https://infura.io" target="_blank">Infura</a> and sign up.</li>
  <li>Create a new project and copy your Project ID.</li>
  <li>Select your desired network and copy the endpoint URL.</li>
</ol>

<h3>Step 2: Set Up Alchemy</h3>
<ol>
  <li>Go to <a href="https://www.alchemy.com" target="_blank">Alchemy</a> and sign up.</li>
  <li>Create a new app and select your desired network.</li>
  <li>Copy your API key and HTTPS endpoint.</li>
</ol>

<h3>Step 3: Integrate with Your Application</h3>
<div class="code-container">
  <pre><code>
<span class="keyword">npm install</span> ethers
  </code></pre>
</div>

<p><strong>Using Infura:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> &#123; ethers &#125; = <span class="string">"ethers"</span>;

<span class="keyword">const</span> provider = <span class="keyword">new</span> ethers.providers.JsonRpcProvider(
  <span class="string">"https://mainnet.infura.io/v3/YOUR_PROJECT_ID"</span>
);

<span class="keyword">async</span> <span class="function-name">function</span> getBlockNumber() &#123;
  <span class="keyword">const</span> blockNumber = <span class="keyword">await</span> provider.getBlockNumber();
  console.log(<span class="string">"Current Block Number:"</span>, blockNumber);
&#125;

getBlockNumber();
  </code></pre>
</div>

<p><strong>Using Alchemy:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> provider = <span class="keyword">new</span> ethers.providers.JsonRpcProvider(
  <span class="string">"https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY"</span>
);

<span class="keyword">async</span> <span class="function-name">function</span> getBlockNumber() &#123;
  <span class="keyword">const</span> blockNumber = <span class="keyword">await</span> provider.getBlockNumber();
  console.log(<span class="string">"Current Block Number:"</span>, blockNumber);
&#125;

getBlockNumber();
  </code></pre>
</div>

<p><strong>Interact with Smart Contracts:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> contractAddress = <span class="string">"YOUR_CONTRACT_ADDRESS"</span>;
<span class="keyword">const</span> abi = [<span class="comment">/* Contract ABI */</span>];

<span class="keyword">const</span> contract = <span class="keyword">new</span> ethers.Contract(contractAddress, abi, provider);

<span class="keyword">async</span> <span class="function-name">function</span> getValue() &#123;
  <span class="keyword">const</span> value = <span class="keyword">await</span> contract.value();
  console.log(<span class="string">"Contract Value:"</span>, value);
&#125;

getValue();
  </code></pre>
</div>

<h2 class="subHeading">B. Using QuickNode for Solana</h2>
<p>QuickNode provides API services for interacting with the Solana blockchain, including RPC (Remote Procedure Call) and WebSocket endpoints.</p>

<h3>Step 1: Set Up QuickNode</h3>
<ol>
  <li>Go to <a href="https://www.quicknode.com" target="_blank">QuickNode</a> and sign up.</li>
  <li>Create an endpoint and copy the RPC URL.</li>
</ol>

<h3>Step 2: Integrate with Your Application</h3>
<div class="code-container">
  <pre><code>
<span class="keyword">npm install</span> @solana/web3.js
  </code></pre>
</div>

<p><strong>Set Up a Connection:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> &#123; Connection &#125; = require(<span class="string">"@solana/web3.js"</span>);

<span class="keyword">const</span> QUICKNODE_RPC = <span class="string">"YOUR_QUICKNODE_RPC_URL"</span>;
<span class="keyword">const</span> connection = <span class="keyword">new</span> Connection(QUICKNODE_RPC, <span class="string">"confirmed"</span>);

<span class="keyword">async</span> <span class="function-name">function</span> getBlockHeight() &#123;
  <span class="keyword">const</span> blockHeight = <span class="keyword">await</span> connection.getBlockHeight();
  console.log(<span class="string">"Current Block Height:"</span>, blockHeight);
&#125;

getBlockHeight();
  </code></pre>
</div>

<p><strong>Fetch Account Info:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> &#123; PublicKey &#125; = require(<span class="string">"@solana/web3.js"</span>);

<span class="keyword">const</span> publicKey = <span class="keyword">new</span> PublicKey(<span class="string">"YOUR_WALLET_ADDRESS"</span>);

<span class="keyword">async</span> <span class="function-name">function</span> getAccountInfo() &#123;
  <span class="keyword">const</span> accountInfo = <span class="keyword">await</span> connection.getAccountInfo(publicKey);
  console.log(<span class="string">"Account Info:"</span>, accountInfo);
&#125;

getAccountInfo();
  </code></pre>
</div>

<p><strong>Send Transactions:</strong></p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> &#123; Keypair, SystemProgram, Transaction, PublicKey &#125; = require(<span class="string">"@solana/web3.js"</span>);

<span class="keyword">const</span> payer = Keypair.generate();
<span class="keyword">const</span> recipient = <span class="keyword">new</span> PublicKey(<span class="string">"RECIPIENT_PUBLIC_KEY"</span>);

<span class="keyword">async</span> <span class="function-name">function</span> sendTransaction() &#123;
  <span class="keyword">const</span> transaction = <span class="keyword">new</span> Transaction().add(
    SystemProgram.transfer({
      fromPubkey: payer.publicKey,
      toPubkey: recipient,
      lamports: 1000,
    })
  );

  <span class="keyword">const</span> signature = <span class="keyword">await</span> connection.sendTransaction(transaction, [payer]);
  console.log(<span class="string">"Transaction Signature:"</span>, signature);
&#125;

sendTransaction();
  </code></pre>
</div>

<h3>Step 3: Monitor Transactions</h3>
<ul>
  <li>Navigate to your <strong>QuickNode Dashboard</strong>.</li>
  <li>View request volume, transaction logs, and performance metrics.</li>
</ul>
<h2 class="subHeading">Comparison of Infura, Alchemy, and QuickNode</h2>
<table style="width:100%; border-collapse:collapse; margin-top:20px;">
    <tr>
      <th>Feature</th>
      <th>Infura</th>
      <th>Alchemy</th>
      <th>QuickNode</th>
    </tr>
    <tr>
      <td>Supported Blockchains</td>
      <td>Ethereum, IPFS</td>
      <td>Ethereum, Polygon, Arbitrum</td>
      <td>Solana, Ethereum, Binance Smart Chain</td>
    </tr>
    <tr>
      <td>Analytics</td>
      <td>Limited</td>
      <td>Detailed (dashboard)</td>
      <td>Detailed (dashboard)</td>
    </tr>
    <tr>
      <td>Free Tier</td>
      <td>Yes (100K requests/month)</td>
      <td>Yes (100K requests/month)</td>
      <td>Yes (50M requests/month)</td>
    </tr>
    <tr>
      <td>Real-Time Notifications</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </table>


<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Ethereum:</strong>
    <ul>
      <li><strong>Infura:</strong> Use for simplicity and broad network support.</li>
      <li><strong>Alchemy:</strong> Use for enhanced analytics and developer tools.</li>
    </ul>
  </li>
  <li><strong>Solana:</strong>
    <ul>
      <li><strong>QuickNode:</strong> Use for robust API services and built-in analytics.</li>
    </ul>
  </li>
</ul>
<p>
  These services simplify blockchain interactions, allowing developers to focus on building scalable and secure decentralized applications.
</p>

`;