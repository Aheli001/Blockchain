docs.build = `
<h1 class="heading">Build a dApp to Interact with an ERC-20 Token Contract</h1>

<p class="contentText">This step-by-step guide helps you create a decentralized application (dApp) that connects to an Ethereum wallet, displays token balances, and enables token transfers using React and Web3.js.</p>

<h2 class="subHeading">1. Prerequisites</h2>
<p><strong>Technologies Used:</strong></p>
<ul>
  <li>Frontend: React.js</li>
  <li>Blockchain Interaction: Web3.js</li>
  <li>Wallet Connection: MetaMask</li>
</ul>

<p><strong>Install Required Tools:</strong></p>
<div class="code-container"><pre><code>npx create-react-app erc20-dapp
cd erc20-dapp</code></pre></div>

<h2 class="subHeading">2. Set Up the Project</h2>

<p><strong>Install Web3.js:</strong></p>
<div class="code-container"><pre><code>npm install web3</code></pre></div>

<p><strong>Install React-Bootstrap (Optional):</strong></p>
<div class="code-container"><pre><code>npm install react-bootstrap bootstrap</code></pre></div>

<p><strong>Add Bootstrap CSS:</strong> In <code>src/index.js</code>:</p>
<div class="code-container"><pre><code>import 'bootstrap/dist/css/bootstrap.min.css';</code></pre></div>

<h2 class="subHeading">3. Connect to the Blockchain</h2>

<h3>Step 1: Create <code>config.js</code> for Contract Details</h3>
<p>Create <code>src/config.js</code> and add:</p>
<div class="code-container"><pre><code>
export const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";

export const CONTRACT_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{ "name": "", "type": "string" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];
</code></pre></div>

<h2 class="subHeading">4. Complete App Code (App.js)</h2>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, &#123; useState, useEffect &#125; <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">import</span> Web3 <span class="keyword">from</span> <span class="string">"web3"</span>;
<span class="keyword">import</span> &#123; CONTRACT_ADDRESS, CONTRACT_ABI &#125; <span class="keyword">from</span> <span class="string">"./config"</span>;

<span class="keyword">const</span> App = () =&gt; &#123;
  <span class="keyword">const</span> [account, setAccount] = useState(<span class="string">""</span>);
  <span class="keyword">const</span> [contract, setContract] = useState(<span class="literal">null</span>);
  <span class="keyword">const</span> [balance, setBalance] = useState(<span class="string">"0"</span>);
  <span class="keyword">const</span> [recipient, setRecipient] = useState(<span class="string">""</span>);
  <span class="keyword">const</span> [amount, setAmount] = useState(<span class="string">""</span>);

  useEffect(() =&gt; &#123;
    <span class="keyword">const</span> loadBlockchainData = <span class="keyword">async</span> () =&gt; &#123;
      <span class="keyword">if</span> (window.ethereum) &#123;
        <span class="keyword">const</span> web3 = <span class="keyword">new</span> Web3(window.ethereum);
        <span class="keyword">await</span> window.ethereum.request(&#123; method: <span class="string">"eth_requestAccounts"</span> &#125;);

        <span class="keyword">const</span> accounts = <span class="keyword">await</span> web3.eth.getAccounts();
        setAccount(accounts[0]);

        <span class="keyword">const</span> tokenContract = <span class="keyword">new</span> web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        setContract(tokenContract);

        <span class="keyword">const</span> userBalance = <span class="keyword">await</span> tokenContract.methods.balanceOf(accounts[0]).call();
        setBalance(web3.utils.fromWei(userBalance, <span class="string">"ether"</span>));
      &#125; <span class="keyword">else</span> &#123;
        alert(<span class="string">"Please install MetaMask!"</span>);
      &#125;
    &#125;;

    loadBlockchainData();
  &#125;, []);

  <span class="keyword">const</span> transferTokens = <span class="keyword">async</span> (e) =&gt; &#123;
    e.preventDefault();
    <span class="keyword">try</span> &#123;
      <span class="keyword">const</span> web3 = <span class="keyword">new</span> Web3(window.ethereum);
      <span class="keyword">const</span> value = web3.utils.toWei(amount, <span class="string">"ether"</span>);

      <span class="keyword">await</span> contract.methods.transfer(recipient, value).send(&#123; from: account &#125;);

      <span class="keyword">const</span> userBalance = <span class="keyword">await</span> contract.methods.balanceOf(account).call();
      setBalance(web3.utils.fromWei(userBalance, <span class="string">"ether"</span>));
      alert(<span class="string">"Transfer Successful!"</span>);
    &#125; <span class="keyword">catch</span> (error) &#123;
      alert(<span class="string">"Transfer Failed: "</span> + error.message);
    &#125;
  &#125;;

  <span class="keyword">return</span> (
    <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"container mt-5"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h1&gt;</span>ERC-20 dApp<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;p&gt;</span><span class="tag">&lt;strong&gt;</span>Connected Account:<span class="tag">&lt;/strong&gt;</span> &#123;account&#125;<span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;p&gt;</span><span class="tag">&lt;strong&gt;</span>Token Balance:<span class="tag">&lt;/strong&gt;</span> &#123;balance&#125; MTK<span class="tag">&lt;/p&gt;</span>

      <span class="tag">&lt;form</span> <span class="attr">onSubmit=</span>&#123;transferTokens&#125;<span class="tag">&gt;</span>
        <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mb-3"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;label</span> <span class="attr">htmlFor=</span><span class="string">"recipient"</span> <span class="attr">className=</span><span class="string">"form-label"</span><span class="tag">&gt;</span>Recipient Address<span class="tag">&lt;/label&gt;</span>
          <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"text"</span>
            <span class="attr">className=</span><span class="string">"form-control"</span>
            <span class="attr">id=</span><span class="string">"recipient"</span>
            <span class="attr">value=</span>&#123;recipient&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setRecipient(e.target.value)&#125;
            <span class="attr">required</span>
          <span class="tag">/&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
        <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mb-3"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;label</span> <span class="attr">htmlFor=</span><span class="string">"amount"</span> <span class="attr">className=</span><span class="string">"form-label"</span><span class="tag">&gt;</span>Amount<span class="tag">&lt;/label&gt;</span>
          <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"number"</span>
            <span class="attr">className=</span><span class="string">"form-control"</span>
            <span class="attr">id=</span><span class="string">"amount"</span>
            <span class="attr">value=</span>&#123;amount&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setAmount(e.target.value)&#125;
            <span class="attr">required</span>
          <span class="tag">/&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
        <span class="tag">&lt;button</span> <span class="attr">type=</span><span class="string">"submit"</span> <span class="attr">className=</span><span class="string">"btn btn-primary"</span><span class="tag">&gt;</span>Transfer Tokens<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/form&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  );
&#125;;

<span class="keyword">export default</span> App;
  </code></pre>
</div>

<h2 class="subHeading">Conclusion</h2>
<p class="contentText">You’ve built a complete ERC-20 dApp with React and Web3.js that connects to MetaMask, displays token balances, and allows token transfers. This project forms a practical foundation for Ethereum dApp development.</p>
`;
