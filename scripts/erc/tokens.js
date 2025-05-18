docs.tokens = `
<h1 class="heading">ERC Standards: Token Development on Ethereum</h1>

<p class="contentText">Ethereum Request for Comments (ERC) standards define rules and guidelines for creating tokens and smart contracts on the Ethereum blockchain. Each standard serves specific use cases, including fungible tokens, non-fungible tokens (NFTs), or multi-token implementations.</p>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">1. ERC-20: Fungible Tokens</h2>

<h3 class="subHeading">Overview</h3>
<p class="contentText"><strong>Fungible Tokens:</strong> Each unit is identical and interchangeable (e.g., 1 USDT = 1 USDT).</p>
<p class="contentText"><strong>Purpose:</strong> Defines a standardized smart contract interface for creating fungible tokens like stablecoins, governance tokens, and utility tokens.</p>

<h3 class="subHeading">Key Features</h3>
<ul>
  <li><strong>Uniformity:</strong> Ensures ERC-20 tokens are compatible with wallets and exchanges.</li>
  <li><strong>Interoperability:</strong> Supported by most Ethereum-based applications and tools.</li>
</ul>

<h3 class="subHeading">Standard Functions</h3>
<p>The ERC-20 standard specifies a set of mandatory functions every compliant token contract must implement:</p>
<div class="code-container"><pre><code>
function totalSupply() external view returns (uint256);
function balanceOf(address account) external view returns (uint256);
function transfer(address recipient, uint256 amount) external returns (bool);
function approve(address spender, uint256 amount) external returns (bool);
function allowance(address owner, address spender) external view returns (uint256);
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
</code></pre></div>

<h3 class="subHeading">Events</h3>
<ul>
  <li><strong>Transfer:</strong> Emitted when tokens are transferred between addresses.</li>
  <li><strong>Approval:</strong> Emitted when a spender is approved to spend tokens on behalf of the owner.</li>
</ul>

<h3 class="subHeading">Example ERC-20 Token Contract</h3>
<div class="code-container"><pre><code>
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

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(balanceOf[sender] >= amount, "Insufficient balance");
        require(allowance[sender][msg.sender] >= amount, "Allowance exceeded");
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        allowance[sender][msg.sender] -= amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }
}
</code></pre></div>

<h3 class="subHeading">Use Cases</h3>
<ul>
  <li><strong>Cryptocurrencies:</strong> e.g., USDT (Tether), DAI</li>
  <li><strong>Governance Tokens:</strong> e.g., UNI, COMP</li>
  <li><strong>Utility Tokens:</strong> e.g., BAT (Basic Attention Token)</li>
</ul>
`;
