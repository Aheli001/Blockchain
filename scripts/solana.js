docs.solana = `
<h1 class="heading">Blockchain − Solana: Create and Deploy a Wallet</h1>
<ol>
  <li><strong>Install Solana CLI:</strong>
    <div class="code-container"><pre><code>sh -c "$(curl -sSfL https://release.solana.com/stable/install)"</code></pre></div>
  </li>
  <li><strong>Verify Installation:</strong>
    <div class="code-container"><pre><code>solana --version</code></pre></div>
  </li>
  <li><strong>Configure the Solana Environment:</strong>
    <p>Set the network to devnet (a test environment for Solana development):</p>
    <div class="code-container"><pre><code>solana config set --url https://api.devnet.solana.com</code></pre></div>
    <p>Check the configuration:</p>
    <div class="code-container"><pre><code>solana config get</code></pre></div>
  </li>
  <li><strong>Create a Wallet:</strong>
    <p>Generate a new wallet keypair:</p>
    <div class="code-container"><pre><code>solana-keygen new --outfile ~/solana-wallet.json</code></pre></div>
    <p>You will be prompted to save the keypair securely. Save the seed phrase in a safe location.</p>
  </li>
  <li><strong>Fund Your Wallet:</strong>
    <p>Request free test SOL tokens on devnet:</p>
    <div class="code-container"><pre><code>solana airdrop 2</code></pre></div>
    <p>Check wallet balance:</p>
    <div class="code-container"><pre><code>solana balance</code></pre></div>
  </li>
  <li><strong>Deploy a Sample Wallet Transaction:</strong>
    <p>Create a recipient wallet:</p>
    <div class="code-container"><pre><code>solana-keygen new --outfile ~/recipient-wallet.json</code></pre></div>
    <p>Get the public key of the recipient wallet:</p>
    <div class="code-container"><pre><code>solana-keygen pubkey ~/recipient-wallet.json</code></pre></div>
    <p>Send 1 SOL to the recipient:</p>
    <div class="code-container"><pre><code>solana transfer RecipientPubKey 1 --from ~/solana-wallet.json</code></pre></div>
    <p>Verify the balances:</p>
    <div class="code-container"><pre><code>solana balance</code></pre></div>
    <div class="code-container"><pre><code>solana balance RecipientPubKey</code></pre></div>
  </li>
  <li><strong>Interact with Solana Wallet Programmatically:</strong>
    <p>Create a Node.js project:</p>
    <div class="code-container"><pre><code>mkdir solana-wallet
cd solana-wallet
npm init -y
npm install @solana/web3.js</code></pre></div>
    <p>Create and run the script (<code>index.js</code>):</p>
    <div class="code-container"><pre><code>
const {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
} = require('@solana/web3.js');

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const wallet = Keypair.generate();
console.log("Generated wallet address:", wallet.publicKey.toString());

(async () => {
    const airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(airdropSignature);

    const balance = await connection.getBalance(wallet.publicKey);
    console.log("Wallet balance:", balance / LAMPORTS_PER_SOL, "SOL");
})();
    </code></pre></div>
    <p>Run the script:</p>
    <div class="code-container"><pre><code>node index.js</code></pre></div>
  </li>
</ol>
`;
