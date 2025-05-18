docs.advanceEth = `
<h1 class="heading">Advanced Ethereum Development</h1>

<h2 class="subHeading">1. Layer 2 Solutions</h2>
<p>Layer 2 solutions enhance Ethereum's scalability and reduce transaction costs by offloading computations from the Ethereum mainnet (Layer 1) while maintaining security through various mechanisms.</p>

<h3 class="subHeading">A. Understanding Rollups (Optimistic and ZK)</h3>

<h4>Optimistic Rollups</h4>
<ul>
  <li><strong>How They Work:</strong> Transactions are batched and executed off-chain. State changes are posted to Layer 1 as "optimistic" without proof. A fraud-proof mechanism is used.</li>
  <li><strong>Popular Optimistic Rollups:</strong> Arbitrum, Optimism</li>
</ul>

<h4>Zero-Knowledge (ZK) Rollups</h4>
<ul>
  <li><strong>How They Work:</strong> Transactions are executed off-chain, and cryptographic proofs (ZK-SNARKs) are generated and submitted to Layer 1.</li>
  <li><strong>Advantages:</strong> Faster finality, no fraud-proof window.</li>
  <li><strong>Popular ZK Rollups:</strong> zkSync, StarkNet</li>
</ul>

<h3 class="subHeading">B. Bridging Assets Between Layer 1 and Layer 2</h3>
<ul>
  <li><strong>Use Official Bridges:</strong> E.g., <a href="https://bridge.arbitrum.io/">Arbitrum Bridge</a></li>
  <li><strong>Steps for Bridging:</strong> Deposit and Withdrawal</li>
</ul>

<div class="code-container"><pre><code>
<span class="keyword">const</span> &#123; ethers &#125; = <span class="string">'ethers'</span>;

<span class="comment">// Layer 1 and Layer 2 providers</span>
<span class="keyword">const</span> l1Provider = <span class="keyword">new</span> ethers.providers.JsonRpcProvider(L1_RPC_URL);
<span class="keyword">const</span> l2Provider = <span class="keyword">new</span> ethers.providers.JsonRpcProvider(L2_RPC_URL);

<span class="comment">// Wallet</span>
<span class="keyword">const</span> wallet = <span class="keyword">new</span> ethers.Wallet(PRIVATE_KEY, l1Provider);

<span class="comment">// Deposit example</span>
<span class="keyword">const</span> bridgeContract = <span class="keyword">new</span> ethers.Contract(BRIDGE_ADDRESS, BRIDGE_ABI, wallet);
<span class="keyword">await</span> bridgeContract.deposit(&#123;
    value: ethers.utils.parseEther(<span class="string">"0.1"</span>)
&#125;);

console.log(<span class="string">"Deposit transaction sent!"</span>);
</code></pre></div>

<h2 class="subHeading">2. Gas Optimization</h2>
<h3 class="subHeading">A. Techniques to Reduce Gas Fees in Smart Contracts</h3>

<h4>Minimize Storage Writes</h4>
<div class="code-container"><pre><code>
// Inefficient
storageVar = 1;
storageVar = 2;

// Optimized
uint256 tempVar = 2;
storageVar = tempVar;
</code></pre></div>

<h4>Use Events Instead of State Variables</h4>
<div class="code-container"><pre><code>
event ValueChanged(uint256 newValue);

function updateValue(uint256 newValue) external &#123;
    emit ValueChanged(newValue);
&#125;
</code></pre></div>

<h4>Use Immutable Variables</h4>
<div class="code-container"><pre><code>
contract MyContract &#123;
    uint256 public immutable deployTime;

    constructor() &#123;
        deployTime = block.timestamp;
    &#125;
&#125;
</code></pre></div>

<h3 class="subHeading">B. Understanding Calldata, Storage, and Memory Costs</h3>
<ul>
  <li><strong>Storage:</strong> 20,000 gas per 32 bytes (most expensive)</li>
  <li><strong>Memory:</strong> Temporary and cheaper</li>
  <li><strong>Calldata:</strong> Cheapest, use for read-only inputs</li>
</ul>

<div class="code-container"><pre><code>
function processData(uint256[] calldata data) external &#123;
    uint256 length = data.length;
&#125;
</code></pre></div>

<h2 class="subHeading">3. DeFi on Ethereum</h2>

<h3 class="subHeading">A. Overview of Popular DeFi Protocols</h3>
<ul>
  <li><strong>Aave:</strong> Lending and borrowing protocol</li>
  <li><strong>Uniswap:</strong> Decentralized exchange using AMMs</li>
</ul>

<h3 class="subHeading">B. Writing Contracts That Interact with DeFi Protocols</h3>

<h4>1. Interact with Aave Lending Pool</h4>
<div class="code-container"><pre><code>
const &#123; ethers &#125; = require(<span class="string">'ethers'</span>);
const LENDING_POOL_ADDRESS = <span class="string">"0x..."</span>;
const DAI_ADDRESS = <span class="string">"0x..."</span>;

const depositToAave = async () => &#123;
    const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    const lendingPool = new ethers.Contract(LENDING_POOL_ADDRESS, AAVE_ABI, wallet);
    const amount = ethers.utils.parseUnits(<span class="string">"100"</span>, 18);

    await lendingPool.deposit(DAI_ADDRESS, amount, wallet.address, 0);
    console.log(<span class="string">"Deposit successful!"</span>);
&#125;;

depositToAave();
</code></pre></div>

<h4>Withdraw Assets</h4>
<div class="code-container"><pre><code>
await lendingPool.withdraw(DAI_ADDRESS, amount, wallet.address);
</code></pre></div>

<h4>2. Interact with Uniswap</h4>
<div class="code-container"><pre><code>
const &#123; ethers &#125; = require(<span class="string">'ethers'</span>);
const &#123; Fetcher, Route, Trade, TokenAmount, TradeType &#125; = require(<span class="string">'@uniswap/sdk'</span>);

const performSwap = async () => &#123;
    const DAI = await Fetcher.fetchTokenData(1, DAI_ADDRESS);
    const WETH = await Fetcher.fetchTokenData(1, WETH_ADDRESS);

    const pair = await Fetcher.fetchPairData(DAI, WETH);
    const route = new Route([pair], WETH);

    const trade = new Trade(
        route,
        new TokenAmount(WETH, ethers.utils.parseUnits(<span class="string">"1"</span>, 18)),
        TradeType.EXACT_INPUT
    );

    console.log(<span class="string">"Trade Details:"</span>, trade);
&#125;;

performSwap();
</code></pre></div>

<h4>Add Liquidity to a Pool</h4>
<div class="code-container"><pre><code>
await uniswapRouter.addLiquidity(
    WETH_ADDRESS,
    DAI_ADDRESS,
    amountWETH,
    amountDAI,
    minWETH,
    minDAI,
    wallet.address,
    deadline
);
</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Layer 2 Solutions:</strong> Use Rollups like Arbitrum and zkSync for scalability.</li>
  <li><strong>Gas Optimization:</strong> Reduce gas through calldata, minimal storage, and loop optimization.</li>
  <li><strong>DeFi:</strong> Interact with protocols like Aave and Uniswap for lending and token swaps.</li>
</ul>
<p>These skills equip developers to build high-performance, cost-efficient DeFi applications on Ethereum.</p>
`;
