docs.interact = `
<h1 class="heading">Interacting with Smart Contracts Using Web3.js</h1>

<p class="contentText">Interacting with smart contracts on Ethereum involves reading data (e.g., token balances) and writing transactions (e.g., token transfers). <strong>Web3.js</strong> is a JavaScript library that provides APIs for connecting to Ethereum nodes and smart contracts.</p>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Step-by-Step Guide</h2>

<h3 class="subHeading">1. Set Up Your Environment</h3>
<p><strong>Install Node.js and npm:</strong></p>
<div class="code-container"><pre><code>node -v
npm -v</code></pre></div>

<p><strong>Install Web3.js:</strong></p>
<div class="code-container"><pre><code>npm install web3</code></pre></div>

<p><strong>Create a Project Directory:</strong></p>
<div class="code-container"><pre><code>
mkdir ethereum-contract
cd ethereum-contract
npm init -y
</code></pre></div>

<h3 class="subHeading">2. Deploy a Sample Smart Contract</h3>
<p>Write a basic ERC-20 style token:</p>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        return true;
    }
}
</code></pre></div>

<p><strong>Deploy the Contract:</strong> Use Remix IDE to deploy on Goerli or Sepolia testnet. Note the contract address.</p>

<h3 class="subHeading">3. Interact with the Contract Using Web3.js</h3>

<h4>A. Initialize Web3 and Connect to Ethereum</h4>
<p><strong>Install Dependencies:</strong></p>
<div class="code-container"><pre><code>npm install web3</code></pre></div>

<p><strong>Create a Script File:</strong></p>
<div class="code-container"><pre><code>touch index.js</code></pre></div>

<p><strong>Initialize Web3:</strong></p>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID');
</code></pre></div>

<h4>B. Set Up the Contract Instance</h4>
<p><strong>Define the ABI:</strong> Copy from Remix after compiling your contract.</p>
<div class="code-container"><pre><code>const contractABI = [ /* ... ABI from Remix ... */ ];</code></pre></div>

<p><strong>Set Contract Address:</strong></p>
<div class="code-container"><pre><code>const contractAddress = 'YOUR_CONTRACT_ADDRESS';</code></pre></div>

<p><strong>Create the Contract Instance:</strong></p>
<div class="code-container"><pre><code>const contract = new web3.eth.Contract(contractABI, contractAddress);</code></pre></div>

<h4>C. Reading Data from the Contract</h4>
<p><strong>Get Token Name:</strong></p>
<div class="code-container"><pre><code>
async function getTokenName() {
    const name = await contract.methods.name().call();
    console.log('Token Name:', name);
}
getTokenName();
</code></pre></div>

<p><strong>Get Total Supply:</strong></p>
<div class="code-container"><pre><code>
async function getTotalSupply() {
    const supply = await contract.methods.totalSupply().call();
    console.log('Total Supply:', supply);
}
getTotalSupply();
</code></pre></div>

<p><strong>Get Balance:</strong></p>
<div class="code-container"><pre><code>
async function getBalance(address) {
    const balance = await contract.methods.balanceOf(address).call();
    console.log('Balance of', address, ':', balance);
}
getBalance('ADDRESS_TO_CHECK');
</code></pre></div>

<h4>D. Writing Data to the Contract</h4>
<p><strong>Transfer Tokens:</strong></p>
<div class="code-container"><pre><code>
const senderPrivateKey = 'YOUR_PRIVATE_KEY';
const senderAddress = 'YOUR_ADDRESS';
const recipientAddress = 'RECIPIENT_ADDRESS';
const amountToSend = web3.utils.toWei('1', 'ether'); // 1 token with 18 decimals

async function transferTokens() {
    const tx = {
        from: senderAddress,
        to: contractAddress,
        gas: 2000000,
        data: contract.methods.transfer(recipientAddress, amountToSend).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction Hash:', receipt.transactionHash);
}
transferTokens();
</code></pre></div>

<p><strong>Check Updated Balance:</strong></p>
<div class="code-container"><pre><code>getBalance(recipientAddress);</code></pre></div>

<h3 class="subHeading">4. Run the Script</h3>
<div class="code-container"><pre><code>node index.js</code></pre></div>

<h3 class="subHeading">5. Example Output</h3>
<p><strong>Reading Data:</strong></p>
<div class="code-container"><pre><code>
Token Name: MyToken
Total Supply: 1000000000000000000000000
Balance of 0x123...456: 1000000000000000000000
</code></pre></div>

<p><strong>Writing Data:</strong></p>
<div class="code-container"><pre><code>
Transaction Hash: 0xabc...123
Balance of 0x789...abc: 1000000000000000000
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Conclusion</h2>
<p class="contentText">With Web3.js, developers can interact with Ethereum smart contracts to read data (like balances or metadata) and send transactions (like transfers). This step-by-step process provides the foundation for building powerful dApps that communicate directly with smart contracts.</p>
`;
