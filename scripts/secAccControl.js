docs.secAccControl = `
<h1 class="heading">Implementing Secure Access Control in a Token Contract</h1>

<h2 class="subHeading">1. Prerequisites</h2>
<p>Install OpenZeppelin Contracts:</p>
<div class="code-container"><pre><code>
npm install @openzeppelin/contracts
</code></pre></div>

<h2 class="subHeading">2. Define the Requirements</h2>
<ul>
  <li>Only the owner or authorized accounts should mint, pause/unpause, or burn tokens.</li>
  <li>Use Ownable or AccessControl module from OpenZeppelin for secure role handling.</li>
</ul>

<h2 class="subHeading">3. Implement Secure Access Control</h2>

<h3>A. Contract with Ownable for Simple Ownership Control</h3>
<h4>Step 1: Token Contract</h4>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
</code></pre></div>

<h4>Step 2: Deploy the Contract</h4>
<p>Compile the Contract:</p>
<div class="code-container"><pre><code>
npx hardhat compile
</code></pre></div>
<p>Deploy Script (scripts/deploy.js):</p>
<div class="code-container"><pre><code>
const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();
    console.log("MyToken deployed to:", myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
</code></pre></div>

<h4>Step 3: Test Access Control</h4>
<div class="code-container"><pre><code>
await myToken.connect(owner).mint(user.address, 100);

try {
    await myToken.connect(nonOwner).mint(user.address, 100);
} catch (err) {
    console.log("Unauthorized access blocked:", err.message);
}
</code></pre></div>

<h3>B. Contract with Role-Based Access Control (RBAC)</h3>
<h4>Step 1: Token Contract with Roles</h4>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyTokenWithRoles is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor() ERC20("MyToken", "MTK") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}
</code></pre></div>

<h4>Step 2: Configure Roles</h4>
<div class="code-container"><pre><code>
await myToken.connect(admin).grantRole(ethers.utils.id("MINTER_ROLE"), minter.address);
await myToken.connect(admin).grantRole(ethers.utils.id("BURNER_ROLE"), burner.address);
</code></pre></div>

<h4>Step 3: Test Roles</h4>
<div class="code-container"><pre><code>
await myToken.connect(minter).mint(user.address, 100);

try {
    await myToken.connect(otherUser).mint(user.address, 100);
} catch (err) {
    console.log("Unauthorized minting blocked:", err.message);
}

await myToken.connect(admin).revokeRole(ethers.utils.id("MINTER_ROLE"), minter.address);
</code></pre></div>

<h3>C. Add a Pause Mechanism</h3>
<div class="code-container"><pre><code>
import "@openzeppelin/contracts/security/Pausable.sol";

contract MyTokenWithPause is ERC20, Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    constructor() ERC20("MyToken", "MTK") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
</code></pre></div>

<h4>Deploy and Configure</h4>
<div class="code-container"><pre><code>
await myToken.connect(pauser).pause();

try {
    await myToken.transfer(user.address, 100);
} catch (err) {
    console.log("Transfers blocked during pause:", err.message);
}

await myToken.connect(pauser).unpause();
</code></pre></div>

<h2 class="subHeading">4. Best Practices</h2>
<ul>
  <li>Use granular roles with AccessControl.</li>
  <li>Restrict admin privileges to minimize attack surface.</li>
  <li>Add pause mechanisms for emergencies.</li>
  <li>Use MythX and Slither for contract audits.</li>
</ul>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Ownable:</strong> Simple ownership-based access control.</li>
  <li><strong>AccessControl:</strong> Role-based permissions.</li>
  <li><strong>Pausable:</strong> Emergency control for transfers.</li>
</ul>
<p>These practices ensure your token contract is secure and aligned with industry standards.</p>

`;