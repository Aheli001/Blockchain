docs.multiToken = `
<h1 class="heading">ERC-1155: Multi-Token Standard</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Overview</h2>
<p class="contentText"><strong>Multi-Tokens:</strong> ERC-1155 allows a single smart contract to manage multiple token types—both fungible and non-fungible—under one standard.</p>
<p class="contentText"><strong>Purpose:</strong> Designed for efficiency, particularly in use cases like gaming and marketplaces where multiple asset types must be managed together.</p>

<h2 class="subHeading">Key Features</h2>
<ul>
  <li><strong>Batch Operations:</strong> Supports batch transfers and queries to minimize transaction overhead.</li>
  <li><strong>Gas Efficiency:</strong> More cost-effective than deploying separate ERC-20 or ERC-721 contracts for each token type.</li>
</ul>

<h2 class="subHeading">Standard Functions</h2>
<p class="contentText">ERC-1155 includes core functions for balance tracking, transfers, and metadata:</p>
<div class="code-container"><pre><code>
function balanceOf(address account, uint256 id) external view returns (uint256);
function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory);
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;
</code></pre></div>

<h3 class="subHeading">Events</h3>
<ul>
  <li><strong>TransferSingle:</strong> Emitted for individual token transfers.</li>
  <li><strong>TransferBatch:</strong> Emitted when multiple tokens are transferred at once.</li>
</ul>

<h3 class="subHeading">Metadata</h3>
<p>Each token ID can return a unique URI for its metadata:</p>
<div class="code-container"><pre><code>
function uri(uint256 id) external view returns (string memory);
</code></pre></div>

<h2 class="subHeading">Example Contract</h2>
<div class="code-container"><pre><code>
pragma ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyMultiToken is ERC1155 {
    constructor() ERC1155("https://api.example.com/metadata/{id}.json") {}

    function mint(address to, uint256 id, uint256 amount, bytes memory data) public {
        _mint(to, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public {
        _mintBatch(to, ids, amounts, data);
    }
}
</code></pre></div>

<h2 class="subHeading">Use Cases</h2>
<ul>
  <li><strong>Gaming:</strong> Manage both fungible (e.g., gold coins) and non-fungible (e.g., weapons) assets from a single contract.</li>
  <li><strong>Marketplaces:</strong> Efficiently handle diverse digital assets in decentralized platforms.</li>
</ul>

<h1 class="contentHeading">Comparison of ERC Standards</h1>
<table style="width:100%; border-collapse:collapse; margin-top:20px;">
    <tr>
      <th>Aspect</th>
      <th>ERC-20</th>
      <th>ERC-721</th>
      <th>ERC-1155</th>
    </tr>
    <tr>
      <td>Token Type</td>
      <td>Fungible</td>
      <td>Non-Fungible</td>
      <td>Multi-Token</td>
    </tr>
    <tr>
      <td>Key Use Cases</td>
      <td>Cryptocurrencies</td>
      <td>NFTs (art, collectibles)</td>
      <td>Gaming, Marketplaces</td>
    </tr>
    <tr>
      <td>Batch Support</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Metadata</td>
      <td>None</td>
      <td>tokenURI for individual tokens</td>
      <td>URI for multiple tokens</td>
    </tr>
</table>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold; margin-top: 30px;">Conclusion</h2>
<ul>
  <li><strong>ERC-20:</strong> Ideal for fungible tokens like cryptocurrencies or utility tokens.</li>
  <li><strong>ERC-721:</strong> Powers unique assets like digital art and collectibles.</li>
  <li><strong>ERC-1155:</strong> Combines fungible and non-fungible tokens efficiently, suitable for complex ecosystems like gaming and marketplaces.</li>
</ul>
<p class="contentText">Understanding these standards is essential for designing and developing Ethereum-based blockchain solutions tailored to specific use cases.</p>
`;
