docs.eventErr = `
<h1 class="heading">Solidity: Events and Error Handling</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">A. Events</h2>

<p class="contentText"><strong>What Are Events?</strong></p>
<p>Events enable logging of contract activities. These logs are stored on the blockchain and can be accessed externally (e.g., through Web3.js or front-end applications).</p>

<h3 class="subHeading">Syntax</h3>
<div class="code-container"><pre><code>
event Transfer(address indexed from, address indexed to, uint256 value);

function transfer(address _to, uint256 _value) public {
    emit Transfer(msg.sender, _to, _value);
}
</code></pre></div>

<h3 class="subHeading">Indexed Parameters</h3>
<p>Indexed parameters enable efficient filtering of logs. A maximum of three parameters can be indexed per event.</p>

<h3 class="subHeading">Use Cases</h3>
<ul>
  <li>Logging token transfers</li>
  <li>Tracking state changes</li>
  <li>Auditing contract activity</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">B. Error Handling</h2>

<h3 class="subHeading">1. <code>require()</code></h3>
<p>Used to validate conditions such as input values or contract state. If the condition fails, the transaction is reverted.</p>
<div class="code-container"><pre><code>
function withdraw(uint _amount) public {
    require(_amount <= balances[msg.sender], "Insufficient balance");
    balances[msg.sender] -= _amount;
}
</code></pre></div>

<h3 class="subHeading">2. <code>revert()</code></h3>
<p>Explicitly reverts the transaction and provides a custom error message.</p>
<div class="code-container"><pre><code>
function failTransaction() public {
    revert("Transaction failed");
}
</code></pre></div>

<h3 class="subHeading">3. <code>assert()</code></h3>
<p>Checks for internal errors or invariants. Use sparingly, as it consumes all gas if it fails.</p>
<div class="code-container"><pre><code>
function checkInvariant() public view {
    assert(totalSupply >= 0);
}
</code></pre></div>

<h3 class="subHeading">4. Custom Errors (Since Solidity 0.8.4)</h3>
<p>Custom errors are more gas-efficient than <code>require()</code> with strings.</p>
<div class="code-container"><pre><code>
error Unauthorized();

function restrictedAction() public {
    if (msg.sender != owner) {
        revert Unauthorized();
    }
}
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Example: Complete Contract</h2>
<div class="code-container"><pre><code>
pragma ^0.8.0;

contract Token {
    // State variables
    string public name = "MyToken";
    string public symbol = "MTK";
    uint256 public totalSupply;
    address public owner;

    mapping(address => uint256) public balances;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    // Constructor
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
        owner = msg.sender;
        balances[owner] = _initialSupply;
    }

    // Transfer function
    function transfer(address _to, uint256 _value) public {
        require(balances[msg.sender] >= _value, "Insufficient balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;

        emit Transfer(msg.sender, _to, _value);
    }

    // Owner-only function
    function mint(uint256 _amount) public onlyOwner {
        totalSupply += _amount;
        balances[owner] += _amount;

        emit Transfer(address(0), owner, _amount);
    }
}
</code></pre></div>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Conclusion</h2>
<ul>
  <li><strong>Data Types, Functions, and Modifiers:</strong> Define the structure and access of smart contracts.</li>
  <li><strong>Contract Structure and Inheritance:</strong> Encourage modular and reusable code.</li>
  <li><strong>Events and Error Handling:</strong> Ensure transparency and robust contract behavior.</li>
</ul>

<p>Mastering these building blocks is essential for writing secure and maintainable smart contracts on Ethereum.</p>
`;
