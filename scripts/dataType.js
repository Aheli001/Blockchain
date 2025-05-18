docs.dataType = `
<h1 class="heading">Solidity: Data Types, Functions, and Modifiers</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">A. Data Types</h2>

<h3 class="subHeading">1. Value Types</h3>
<p>Stored directly in memory. These include:</p>
<ul>
  <li><strong>Booleans:</strong></li>
</ul>
<div class="code-container"><pre><code>bool isActive = true;</code></pre></div>

<ul>
  <li><strong>Integers:</strong> <code>int</code> (signed) and <code>uint</code> (unsigned), with size variants like <code>uint8</code>, <code>uint16</code>, <code>uint256</code> (default).</li>
</ul>
<div class="code-container"><pre><code>
uint256 count = 100;
int256 temperature = -20;
</code></pre></div>

<ul>
  <li><strong>Addresses:</strong> Stores a 20-byte Ethereum address.</li>
</ul>
<div class="code-container"><pre><code>address wallet = 0x1234567890abcdef1234567890abcdef12345678;</code></pre></div>

<ul>
  <li><strong>Enums:</strong> Used to define a set of named constants.</li>
</ul>
<div class="code-container"><pre><code>
enum Status { Pending, Shipped, Delivered }
Status orderStatus = Status.Pending;
</code></pre></div>

<h3 class="subHeading">2. Reference Types</h3>
<p>Stored as references in memory or storage. These include:</p>
<ul>
  <li><strong>Arrays:</strong> Can be fixed or dynamic in size.</li>
</ul>
<div class="code-container"><pre><code>
uint[] numbers; // Dynamic array
uint[5] fixedArray; // Fixed-size array
</code></pre></div>

<ul>
  <li><strong>Mappings:</strong> Key-value data structures for efficient lookups.</li>
</ul>
<div class="code-container"><pre><code>mapping(address => uint256) balances;</code></pre></div>

<h3 class="subHeading">3. Special Types</h3>
<ul>
  <li><code>msg.sender</code>: Address of the caller of the function.</li>
  <li><code>block.timestamp</code>: Current block timestamp.</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">B. Functions</h2>

<h3 class="subHeading">Basic Structure</h3>
<div class="code-container"><pre><code>
function functionName(Type parameter) public returns (ReturnType) {
    // Function logic
}
</code></pre></div>

<h3 class="subHeading">Function Visibility</h3>
<ul>
  <li><strong>public:</strong> Accessible by anyone.</li>
  <li><strong>private:</strong> Accessible only within the contract.</li>
  <li><strong>internal:</strong> Accessible within the contract and derived contracts.</li>
  <li><strong>external:</strong> Callable only from outside the contract.</li>
</ul>

<h3 class="subHeading">Function Types</h3>
<ul>
  <li><strong>View:</strong> Does not modify the contract state.</li>
</ul>
<div class="code-container"><pre><code>
function getBalance() public view returns (uint256) {
    return balance;
}
</code></pre></div>

<ul>
  <li><strong>Pure:</strong> Does not read or write state variables.</li>
</ul>
<div class="code-container"><pre><code>
function add(uint a, uint b) public pure returns (uint) {
    return a + b;
}
</code></pre></div>

<ul>
  <li><strong>Payable:</strong> Allows receiving Ether.</li>
</ul>
<div class="code-container"><pre><code>
function deposit() public payable {
    balances[msg.sender] += msg.value;
}
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">C. Modifiers</h2>

<p><strong>What Are Modifiers?</strong></p>
<p>Modifiers are used to change the behavior of functions. They are useful for access control and code reuse.</p>

<h3 class="subHeading">Creating Modifiers</h3>
<div class="code-container"><pre><code>
modifier onlyOwner() {
    require(msg.sender == owner, "Not the contract owner");
    _;
}
</code></pre></div>

<h3 class="subHeading">Using Modifiers</h3>
<div class="code-container"><pre><code>
function restrictedAction() public onlyOwner {
    // Only the owner can execute this function
}
</code></pre></div>
`;
