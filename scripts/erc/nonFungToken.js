docs.nonFungToken = `
<h1 class="heading">ERC-721: Non-Fungible Tokens (NFTs)</h1>

<h2 class="subHeading" style="text-decoration: underline; font-weight: bold;">Overview</h2>
<p class="contentText"><strong>Non-Fungible Tokens (NFTs):</strong> Represent unique digital or physical assets. Each token is distinct and not interchangeable, making them ideal for digital art, collectibles, gaming items, and more.</p>
<p class="contentText"><strong>Purpose:</strong> Provide a standard interface for representing ownership of unique assets on the Ethereum blockchain.</p>

<h2 class="subHeading">Key Features</h2>
<ul>
  <li><strong>Uniqueness:</strong> Each token is identified by a unique <code>tokenId</code>.</li>
  <li><strong>Metadata:</strong> Describes the asset, often linked to off-chain files using IPFS or other decentralized storage.</li>
  <li><strong>Ownership:</strong> Each token can be owned by only one address at a time.</li>
</ul>

<h2 class="subHeading">Standard Functions</h2>
<p class="contentText">ERC-721 defines a standard set of functions for managing ownership and interaction:</p>
<div class="code-container"><pre><code>
function balanceOf(address owner) external view returns (uint256);
function ownerOf(uint256 tokenId) external view returns (address);
function safeTransferFrom(address from, address to, uint256 tokenId) external;
function transferFrom(address from, address to, uint256 tokenId) external;
function approve(address to, uint256 tokenId) external;
function getApproved(uint256 tokenId) external view returns (address);
function setApprovalForAll(address operator, bool approved) external;
function isApprovedForAll(address owner, address operator) external view returns (bool);
</code></pre></div>

<h3 class="subHeading">Events</h3>
<ul>
  <li><strong>Transfer:</strong> Emitted when a token is transferred between owners.</li>
  <li><strong>Approval:</strong> Emitted when approval is granted for token transfers.</li>
</ul>

<h3 class="subHeading">Metadata Extension</h3>
<p>Additional optional functions for accessing descriptive metadata:</p>
<div class="code-container"><pre><code>
function name() external view returns (string memory);
function symbol() external view returns (string memory);
function tokenURI(uint256 tokenId) external view returns (string memory);
</code></pre></div>

<h2 class="subHeading">Example Contract</h2>
<p>This example demonstrates a simple ERC-721 contract using OpenZeppelin's implementation:</p>
<div class="code-container"><pre><code>
pragma ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("MyNFT", "MNFT") {
        admin = msg.sender;
    }

    function mint(address to) external {
        require(msg.sender == admin, "Only admin can mint");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }
}
</code></pre></div>

<h2 class="subHeading">Use Cases</h2>
<ul>
  <li><strong>Digital Art:</strong> One-of-a-kind collectibles (e.g., CryptoPunks, Bored Ape Yacht Club)</li>
  <li><strong>Gaming:</strong> Tradable in-game items and assets with real-world value</li>
  <li><strong>Real Estate:</strong> Tokenized ownership of physical property</li>
</ul>
`;
