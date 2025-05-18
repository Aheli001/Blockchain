docs.deployToken = `
<h1 class="heading">Write and Deploy an ERC-20 Token on Ethereum Using Remix and Web3.js</h1>
<p class="contentText">This step-by-step guide explains how to write, deploy, and interact with an ERC-20 token on the Ethereum blockchain using <strong>Remix IDE</strong> for deployment and <strong>Web3.js</strong> for interaction.</p>

<h2 class="subHeading">1. Write the ERC-20 Token Contract</h2>

<h3>Step 1: Open Remix IDE</h3>
<p>Visit <a href="https://remix.ethereum.org" target="_blank">Remix IDE</a> – a browser-based IDE for smart contracts.</p>

<h3>Step 2: Create a New File</h3>
<p>Click the "+" icon in the file explorer and name the new file <code>MyToken.sol</code>.</p>

<h3>Step 3: Paste the ERC-20 Contract Code</h3>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract MyToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "Allowance exceeded");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
</code></pre></div>

<h2 class="subHeading">2. Compile the ERC-20 Token Contract</h2>

<h3>Step 1: Select the Compiler</h3>
<p>Click the <strong>Solidity Compiler</strong> tab and choose version <code>0.8.0</code> or higher.</p>

<h3>Step 2: Compile</h3>
<p>Click <strong>Compile MyToken.sol</strong> and ensure there are no errors.</p>

<h2 class="subHeading">3. Deploy the Contract Using Remix</h2>

<h3>Step 1: Set Up a Wallet</h3>
<p>Install and connect MetaMask. If using testnet (Goerli, Sepolia), get test ETH from a <a href="https://goerlifaucet.com/" target="_blank">faucet</a>.</p>

<h3>Step 2: Configure Deployment</h3>
<p>Go to the <strong>Deploy & Run Transactions</strong> tab. Select <strong>Injected Provider - MetaMask</strong> and choose your account.</p>

<h3>Step 3: Deploy the Contract</h3>
<p>Enter the initial token supply (e.g., <code>1000000</code>) and click <strong>Deploy</strong>. Confirm the transaction in MetaMask and note the deployed contract address.</p>

<h2 class="subHeading">4. Interact with the Deployed Contract Using Remix</h2>
<ul>
  <li><strong>Check Total Supply:</strong> Click <code>totalSupply()</code>.</li>
  <li><strong>Check Balance:</strong> Use <code>balanceOf(address)</code> with your MetaMask address.</li>
  <li><strong>Transfer Tokens:</strong> Use <code>transfer(recipient, amount)</code> to send tokens.</li>
</ul>

<h2 class="subHeading">5. Interact with the Contract Using Web3.js</h2>

<h3>Step 1: Install Web3.js</h3>
<div class="code-container"><pre><code>npm install web3</code></pre></div>

<h3>Step 2: Create a Script File</h3>
<div class="code-container"><pre><code>touch interact.js</code></pre></div>

<h3>Step 3: Write the Interaction Script</h3>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contractABI = [ /* Paste your contract's ABI here */ ];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getTotalSupply() {
    const supply = await contract.methods.totalSupply().call();
    console.log("Total Supply:", web3.utils.fromWei(supply, 'ether'), "MTK");
}

async function getBalance(address) {
    const balance = await contract.methods.balanceOf(address).call();
    console.log("Balance of", address, ":", web3.utils.fromWei(balance, 'ether'), "MTK");
}

async function transferTokens(sender, privateKey, recipient, amount) {
    const tx = {
        to: contractAddress,
        gas: 2000000,
        data: contract.methods.transfer(recipient, web3.utils.toWei(amount, 'ether')).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("Transaction Hash:", receipt.transactionHash);
}

// Example Usage
(async () => {
    const sender = 'SENDER_WALLET_ADDRESS';
    const privateKey = 'SENDER_PRIVATE_KEY';
    const recipient = 'RECIPIENT_WALLET_ADDRESS';

    await getTotalSupply();
    await getBalance(sender);
    await transferTokens(sender, privateKey, recipient, '10'); // Transfer 10 MTK
    await getBalance(recipient);
})();
</code></pre></div>

<h2 class="subHeading">6. Run the Interaction Script</h2>
<div class="code-container"><pre><code>node interact.js</code></pre></div>

<h2 class="subHeading">Expected Outputs</h2>
<ul>
  <li><strong>Total Supply:</strong> <code>Total Supply: 1000000 MTK</code></li>
  <li><strong>Token Balance:</strong> <code>Balance of 0x123...456: 1000000 MTK</code></li>
  <li><strong>Transfer:</strong> <code>Transaction Hash: 0xabc...123</code></li>
  <li><strong>Updated Balance:</strong> <code>Balance of 0x789...abc: 10 MTK</code></li>
</ul>

<h2 class="subHeading">Conclusion</h2>
<p class="contentText">You have now written and deployed a fully functional ERC-20 token using Remix, and built a Node.js script using Web3.js to interact with your deployed contract. This workflow is foundational for Ethereum-based token and dApp development.</p>
`;
