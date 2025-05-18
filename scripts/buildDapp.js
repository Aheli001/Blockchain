docs.buildDapp = `
<h1 class="heading">Building dApps</h1>

<h2 class="subHeading">A. Ethereum: Token Swap Interface Using Uniswap</h2>

<p><strong>Set Up the Frontend: Install Uniswap SDK:</strong></p>
<div class="code-container"><pre><code>
npm install @uniswap/sdk ethers
</code></pre></div>

<p><strong>Integrate Uniswap Contracts:</strong></p>
<div class="code-container"><pre><code>
import &#123; ChainId, Token, Fetcher, Trade, Route, TradeType, TokenAmount, Pair &#125; from '@uniswap/sdk';

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18);

const fetchPairData = async () =&gt; &#123;
    const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);
    console.log(pair);
&#125;;
</code></pre></div>

<h2 class="subHeading">B. Solana: NFT Minting and Listing Platform</h2>

<p><strong>Set Up NFT Minting: Use Metaplex’s Candy Machine for minting NFTs:</strong></p>
<div class="code-container"><pre><code>
npm install @metaplex-foundation/js
</code></pre></div>

<p><strong>Mint NFT:</strong></p>
<div class="code-container"><pre><code>
import &#123; Metaplex &#125; from '@metaplex-foundation/js';

const metaplex = new Metaplex(connection);

const mintNFT = async () =&gt; &#123;
    const &#123; nft &#125; = await metaplex.nfts().create(&#123;
        uri: 'https://metadata-url',
        name: 'My NFT',
        sellerFeeBasisPoints: 500,
    &#125;);
    console.log('NFT minted:', nft);
&#125;;
</code></pre></div>

<p><strong>List NFTs on a Marketplace:</strong> Integrate the SolSea or Magic Eden marketplace SDKs for listing.</p>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li>Frontend integration with React.js and wallet adapters for Solana (Phantom) and Ethereum (MetaMask).</li>
  <li>Backend services for secure off-chain storage and API interactions.</li>
  <li>Event listening for Ethereum and Solana.</li>
  <li>dApps: A token swap interface for Ethereum and an NFT minting platform for Solana.</li>
</ul>
<p>These steps provide a strong foundation for building robust and interactive dApps on Ethereum and Solana.</p>

`;