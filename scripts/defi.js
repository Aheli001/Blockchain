docs.defi = `
<h1 class="heading">DeFi on Solana</h1>
<p>Solana's high throughput and low latency make it ideal for decentralized finance (DeFi) applications. Two major DeFi protocols on Solana are Serum (a decentralized order book) and Raydium (an automated market maker or AMM). This guide provides an overview of these protocols and explains how to integrate with them.</p>

<h2 class="subHeading">A. Overview of Solana DeFi Protocols</h2>

<h3>1. Serum</h3>
<ul>
  <li><strong>Order Book:</strong> Centralized-style order matching with on-chain settlement.</li>
  <li><strong>Cross-Protocol Liquidity:</strong> Accessible by other protocols like Raydium.</li>
  <li><strong>Low Fees:</strong> Enabled by Solana’s high performance.</li>
</ul>
<p><strong>Use Cases:</strong> Building trading interfaces, leveraging liquidity for other DeFi applications.</p>

<h3>2. Raydium</h3>
<ul>
  <li><strong>Liquidity Pools:</strong> Users can provide liquidity for token pairs.</li>
  <li><strong>Yield Farming:</strong> Earn rewards by staking LP tokens.</li>
  <li><strong>Integration with Serum:</strong> Enables interaction with Serum's order book.</li>
</ul>
<p><strong>Use Cases:</strong> Creating swaps between tokens, building interfaces for staking and farming.</p>

<h2 class="subHeading">B. Writing Programs to Integrate with These Protocols</h2>

<h3>1. Prerequisites</h3>
<div class="code-container"><pre><code>
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
solana config set --url https://api.devnet.solana.com
npm install @project-serum/serum @solana/web3.js
solana-keygen new --outfile ~/.config/solana/id.json
</code></pre></div>

<h3>2. Interacting with Serum</h3>

<h4>Step 1: Fetch Serum Markets</h4>
<div class="code-container"><pre><code>
const { Connection, PublicKey } = require('@solana/web3.js');
const { Market } = require('@project-serum/serum');

const connection = new Connection('https://api.devnet.solana.com');
const SERUM_PROGRAM_ID = new PublicKey('DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY');
const MARKET_ADDRESS = new PublicKey('MARKET_PUBLIC_KEY_HERE');

const loadMarket = async () => {
    const market = await Market.load(connection, MARKET_ADDRESS, {}, SERUM_PROGRAM_ID);
    console.log('Market Loaded:', market);
};
loadMarket();
</code></pre></div>

<h4>Retrieve the Order Book</h4>
<div class="code-container"><pre><code>
const fetchOrderBook = async () => {
    const market = await Market.load(connection, MARKET_ADDRESS, {}, SERUM_PROGRAM_ID);
    const bids = await market.loadBids(connection);
    const asks = await market.loadAsks(connection);

    console.log('Bids:', [...bids]);
    console.log('Asks:', [...asks]);
};
fetchOrderBook();
</code></pre></div>

<h4>Step 2: Place an Order</h4>
<div class="code-container"><pre><code>
const { Keypair } = require('@solana/web3.js');
const owner = Keypair.generate();

const placeOrder = async () => {
    const market = await Market.load(connection, MARKET_ADDRESS, {}, SERUM_PROGRAM_ID);
    const transaction = await market.makePlaceOrderTransaction(
        connection,
        {
            owner,
            payer: owner.publicKey,
            side: 'buy',
            price: 10,
            size: 1,
            orderType: 'limit',
            clientId: undefined,
        }
    );

    const signature = await connection.sendTransaction(transaction, [owner]);
    console.log('Order placed:', signature);
};
placeOrder();
</code></pre></div>

<h3>3. Interacting with Raydium</h3>

<h4>Step 1: Set Up the Environment</h4>
<div class="code-container"><pre><code>
npm install @raydium-io/raydium-sdk
</code></pre></div>

<div class="code-container"><pre><code>
const { Connection, PublicKey } = require('@solana/web3.js');
const { Swap } = require('@raydium-io/raydium-sdk');

const SWAP_POOL_ID = new PublicKey('POOL_PUBLIC_KEY_HERE');

const loadSwapPool = async () => {
    const poolInfo = await Swap.fetchPoolInfo(connection, SWAP_POOL_ID);
    console.log('Swap Pool Info:', poolInfo);
};
loadSwapPool();
</code></pre></div>

<h4>Step 2: Perform a Token Swap</h4>
<div class="code-container"><pre><code>
const performSwap = async () => {
    const poolInfo = await Swap.fetchPoolInfo(connection, SWAP_POOL_ID);
    const { instructions, signers } = await Swap.makeSwapTransaction(
        connection,
        poolInfo,
        {
            fromTokenAccount: new PublicKey('FROM_TOKEN_ACCOUNT'),
            toTokenAccount: new PublicKey('TO_TOKEN_ACCOUNT'),
            amountIn: 1000000,
            minimumAmountOut: 950000,
            userTransferAuthority: owner,
        }
    );

    const transaction = new Transaction().add(...instructions);
    const signature = await connection.sendTransaction(transaction, [owner, ...signers]);
    console.log('Swap Completed:', signature);
};
performSwap();
</code></pre></div>

<h3>4. Combined Serum and Raydium Integration</h3>
<ul>
  <li>Fetch Raydium Liquidity and Serum Prices</li>
  <li>Perform Arbitrage based on profit margin</li>
  <li>Create a frontend displaying both data sources</li>
</ul>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Serum:</strong> Load markets, order books, and place orders</li>
  <li><strong>Raydium:</strong> Execute token swaps with liquidity pools</li>
  <li><strong>Unified DeFi dApps:</strong> Combine data for enhanced trading experience</li>
</ul>
`;