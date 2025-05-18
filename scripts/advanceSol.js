docs.advanceSol = `
<h1 class="heading">Advanced Solana Development: SPL Tokens</h1>

<p>Solana Program Library (SPL) tokens are the equivalent of ERC-20 tokens on Ethereum. They are implemented as a standard for fungible and non-fungible tokens on the Solana blockchain. This guide covers creating and managing SPL tokens and understanding token accounts and associated addresses.</p>

<h2 class="subHeading">1. Creating SPL Tokens</h2>

<h3>A. Prerequisites</h3>
<div class="code-container"><pre><code>
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
cargo install spl-token-cli
solana config set --url https://api.devnet.solana.com
solana-keygen new --outfile ~/.config/solana/id.json
</code></pre></div>

<h3>B. Create an SPL Token</h3>
<p><strong>Create the Token Mint:</strong></p>
<div class="code-container"><pre><code>
spl-token create-token
</code></pre></div>

<p><strong>Create an Associated Token Account:</strong></p>
<div class="code-container"><pre><code>
spl-token create-account &lt;TOKEN_MINT_ADDRESS&gt;
</code></pre></div>

<p><strong>Mint Tokens:</strong></p>
<div class="code-container"><pre><code>
spl-token mint &lt;TOKEN_MINT_ADDRESS&gt; 1000 &lt;TOKEN_ACCOUNT_ADDRESS&gt;
</code></pre></div>

<p><strong>Check Token Balance:</strong></p>
<div class="code-container"><pre><code>
spl-token balance &lt;TOKEN_ACCOUNT_ADDRESS&gt;
</code></pre></div>

<h3>C. Transfer SPL Tokens</h3>
<p><strong>Send Tokens:</strong></p>
<div class="code-container"><pre><code>
spl-token transfer &lt;TOKEN_MINT_ADDRESS&gt; &lt;AMOUNT&gt; &lt;RECIPIENT_ADDRESS&gt;
</code></pre></div>

<p><strong>Verify the Recipient’s Balance:</strong></p>
<div class="code-container"><pre><code>
spl-token accounts
</code></pre></div>

<h2 class="subHeading">2. Token Accounts and Associated Addresses</h2>

<h3>A. Token Accounts</h3>
<p><strong>What Are Token Accounts?</strong> Token accounts hold balances of SPL tokens. Each token mint has a unique token account for each holder.</p>

<h3>B. Associated Token Addresses</h3>
<div class="code-container"><pre><code>
const &#123; PublicKey &#125; = require('@solana/web3.js');
const &#123; getAssociatedTokenAddress &#125; = require('@solana/spl-token');

const mintAddress = new PublicKey('&lt;TOKEN_MINT_ADDRESS&gt;');
const walletAddress = new PublicKey('&lt;WALLET_PUBLIC_KEY&gt;');

const associatedTokenAddress = await getAssociatedTokenAddress(
    mintAddress,
    walletAddress
);

console.log('Associated Token Address:', associatedTokenAddress.toBase58());
</code></pre></div>

<p><strong>Create an Associated Token Account:</strong></p>
<div class="code-container"><pre><code>
const &#123; createAssociatedTokenAccountInstruction &#125; = require('@solana/spl-token');

const instruction = createAssociatedTokenAccountInstruction(
    walletPublicKey,
    associatedTokenAddress,
    walletPublicKey,
    mintAddress
);

const transaction = new Transaction().add(instruction);
const signature = await connection.sendTransaction(transaction, [payer]);
console.log('Transaction Signature:', signature);
</code></pre></div>

<h2 class="subHeading">3. Advanced SPL Token Management</h2>

<h3>A. Freezing and Thawing Token Accounts</h3>
<p><strong>Freeze a Token Account:</strong></p>
<div class="code-container"><pre><code>
spl-token authorize &lt;TOKEN_ACCOUNT_ADDRESS&gt; freeze &lt;NEW_AUTHORITY&gt;
spl-token freeze &lt;TOKEN_ACCOUNT_ADDRESS&gt;
</code></pre></div>

<p><strong>Thaw a Token Account:</strong></p>
<div class="code-container"><pre><code>
spl-token thaw &lt;TOKEN_ACCOUNT_ADDRESS&gt;
</code></pre></div>

<h3>B. Burn Tokens</h3>
<div class="code-container"><pre><code>
spl-token burn &lt;TOKEN_ACCOUNT_ADDRESS&gt; &lt;AMOUNT&gt;
</code></pre></div>

<h2 class="subHeading">4. Programmatic Token Interaction Using Solana Web3.js</h2>

<h3>Create a New Mint Programmatically:</h3>
<div class="code-container"><pre><code>
const &#123; createMint &#125; = require('@solana/spl-token');
const &#123; Connection, Keypair &#125; = require('@solana/web3.js');

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const payer = Keypair.generate();

const mint = await createMint(
    connection,
    payer,
    payer.publicKey,
    null,
    9
);

console.log('Mint Address:', mint.toBase58());
</code></pre></div>

<h3>Mint Tokens Programmatically:</h3>
<div class="code-container"><pre><code>
const &#123; mintTo &#125; = require('@solana/spl-token');

const mint = new PublicKey('&lt;MINT_ADDRESS&gt;');
const destination = new PublicKey('&lt;TOKEN_ACCOUNT_ADDRESS&gt;');
const amount = 1000 * 10 ** 9;

await mintTo(connection, payer, mint, destination, payer, amount);
console.log('Minted Tokens');
</code></pre></div>

<h3>Transfer Tokens Programmatically:</h3>
<div class="code-container"><pre><code>
const &#123; transfer &#125; = require('@solana/spl-token');

const source = new PublicKey('&lt;SOURCE_ACCOUNT_ADDRESS&gt;');
const destination = new PublicKey('&lt;DESTINATION_ACCOUNT_ADDRESS&gt;');
const amount = 500 * 10 ** 9;

await transfer(connection, payer, source, destination, payer, amount);
console.log('Transferred Tokens');
</code></pre></div>

<h2 class="subHeading">5. Real-World Use Cases</h2>
<ul>
  <li><strong>Tokenized Assets:</strong> Use SPL tokens for tokenizing real-world assets like real estate or art.</li>
  <li><strong>DeFi Protocols:</strong> Use SPL tokens as liquidity tokens in decentralized finance platforms.</li>
  <li><strong>NFTs:</strong> Create fungible or non-fungible tokens for collectibles or gaming.</li>
</ul>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Creating SPL Tokens:</strong> Set up a token mint, create associated token accounts, mint, and transfer tokens.</li>
  <li><strong>Token Accounts and Addresses:</strong> Token accounts hold balances; associated addresses simplify usage.</li>
  <li><strong>Programmatic Interaction:</strong> Automate token operations using Solana Web3.js and SPL Token libraries.</li>
</ul>
<p>This guide provides the foundation for managing SPL tokens effectively, enabling you to build applications like DeFi platforms, NFT marketplaces, and tokenized ecosystems.</p>
`;