docs.ethereumOverview = `
<h1 class="heading">Ethereum Basics Overview</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">A. EVM (Ethereum Virtual Machine) and Gas</h2>

<p class="contentText"><strong>What is the EVM?</strong></p>
<p>The Ethereum Virtual Machine (EVM) is the runtime environment for executing smart contracts on the Ethereum blockchain. It functions as a decentralized "world computer," with each Ethereum node running the EVM to process transactions and execute code.</p>

<p class="contentText"><strong>Key Features of the EVM:</strong></p>
<ul>
  <li><strong>Deterministic:</strong> Produces the same output for the same input across all nodes.</li>
  <li><strong>Turing Complete:</strong> Capable of executing any algorithm with enough resources.</li>
  <li><strong>Isolation:</strong> Smart contracts operate in sandboxed environments, enhancing security.</li>
</ul>

<p class="contentText"><strong>Gas in Ethereum:</strong></p>
<p><strong>Definition:</strong> Gas is the unit that measures computational effort in the EVM. It ensures fair resource allocation and prevents abuse (e.g., infinite loops).</p>

<p class="contentText"><strong>Components of Gas:</strong></p>
<ul>
  <li><strong>Gas Limit:</strong> The maximum gas a transaction is allowed to use.</li>
  <li><strong>Gas Price:</strong> The cost per unit of gas, typically measured in <code>gwei</code> (1 gwei = 10⁹ wei).</li>
</ul>

<p><strong>Calculating Transaction Fees:</strong></p>
<p><code>Fee = Gas Used × Gas Price</code></p>

<p class="contentText"><strong>Gas Optimization:</strong> Developers aim to write efficient code to reduce gas consumption.</p>

<p class="contentText"><strong>EIP-1559 Update:</strong> Introduced a new fee structure with:</p>
<ul>
  <li><strong>Base Fee:</strong> Burned portion of the fee.</li>
  <li><strong>Tip:</strong> Incentive for miners/validators.</li>
</ul>

<p class="contentText"><strong>Real-World Analogy:</strong></p>
<ul>
  <li><strong>The EVM:</strong> Like a car engine.</li>
  <li><strong>Gas:</strong> The fuel required to run the engine.</li>
  <li><strong>Efficient Code:</strong> A fuel-efficient car consumes less gas.</li>
</ul>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">B. Smart Contracts</h2>

<p class="contentText"><strong>What Are Smart Contracts?</strong></p>
<p>Smart contracts are self-executing programs stored on the Ethereum blockchain. They automatically enforce rules and execute actions once predefined conditions are met.</p>

<p class="contentText"><strong>Example:</strong> A vending machine that dispenses a product when the correct payment is inserted.</p>

<p class="contentText"><strong>How Smart Contracts Work:</strong></p>
<ul>
  <li><strong>Written In:</strong> Solidity is the primary language used.</li>
  <li><strong>Deployment:</strong> Deployed to the Ethereum blockchain with a unique contract address.</li>
  <li><strong>Interaction:</strong> Users interact through blockchain transactions.</li>
</ul>

<p class="contentText"><strong>Components of Smart Contracts:</strong></p>
<ul>
  <li><strong>State Variables:</strong> Store contract data on-chain.</li>
  <li><strong>Functions:</strong> Define contract behavior and logic.</li>
  <li><strong>Events:</strong> Log changes or important actions.</li>
  <li><strong>Modifiers:</strong> Add conditions or access controls to functions.</li>
</ul>

<p class="contentText"><strong>Example Smart Contract:</strong></p>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract SimpleStorage {
    uint256 public storedValue;

    function setValue(uint256 _value) public {
        storedValue = _value;
    }

    function getValue() public view returns (uint256) {
        return storedValue;
    }
}
</code></pre></div>

<p class="contentText"><strong>Benefits of Smart Contracts:</strong></p>
<ul>
  <li><strong>Automation:</strong> No need for intermediaries.</li>
  <li><strong>Transparency:</strong> Code is open and verifiable.</li>
  <li><strong>Security:</strong> Immutable and tamper-proof once deployed.</li>
</ul>

<p class="contentText"><strong>Challenges:</strong></p>
<ul>
  <li><strong>Gas Costs:</strong> Complex logic leads to higher costs.</li>
  <li><strong>Bugs:</strong> Mistakes in the code can be permanent and exploited.</li>
</ul>
`;
