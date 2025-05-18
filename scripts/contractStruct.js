docs.contractStruct = `
<h1 class="heading">Solidity: Contract Structure and Inheritance</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">A. Contract Structure</h2>

<h3 class="subHeading">Basic Structure</h3>
<div class="code-container"><pre><code>
pragma ^0.8.0;

contract MyContract {
    // State variables
    uint public count;

    // Constructor
    constructor() {
        count = 0;
    }

    // Functions
    function increment() public {
        count += 1;
    }
}
</code></pre></div>

<p class="contentText"><strong>Components:</strong></p>
<ul>
  <li><strong>State Variables:</strong> Store data on the blockchain and maintain contract state.</li>
  <li><strong>Constructor:</strong> Special function run once during deployment, used for initialization.</li>
  <li><strong>Functions:</strong> Contain the contract's logic and are invoked by users or other contracts.</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">B. Inheritance</h2>

<p class="contentText"><strong>What Is Inheritance?</strong></p>
<p>Solidity allows one contract to inherit properties and functions from another. This promotes code reuse and modularity.</p>

<h3 class="subHeading">Syntax</h3>
<div class="code-container"><pre><code>
contract Parent {
    uint public parentValue;

    function setParentValue(uint _value) public {
        parentValue = _value;
    }
}

contract Child is Parent {
    uint public childValue;

    function setChildValue(uint _value) public {
        childValue = _value;
    }
}
</code></pre></div>

<h3 class="subHeading">Multiple Inheritance</h3>
<p>Solidity supports multiple inheritance. When using it, make sure to resolve ambiguities using the <code>super</code> keyword to address the Diamond Problem.</p>

<h3 class="subHeading">Overriding Functions</h3>
<p>To override a function in a derived contract, mark the base function with <code>virtual</code> and the overriding function with <code>override</code>.</p>
<div class="code-container"><pre><code>
contract Base {
    function greet() public pure virtual returns (string memory) {
        return "Hello from Base";
    }
}

contract Derived is Base {
    function greet() public pure override returns (string memory) {
        return "Hello from Derived";
    }
}
</code></pre></div>
`;
