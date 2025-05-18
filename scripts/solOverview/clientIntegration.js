docs.clientIntegration = `
<h1 class="heading">Client Integration with Solana Web3.js</h1>
<p>Integrating a Solana program with a client involves using Solana Web3.js, the official library for interacting with Solana programs. It allows you to send transactions, query accounts, and interact with smart contracts (programs).</p>

<h2 class="subHeading">Step-by-Step Guide</h2>

<h3>1. Setting Up the Environment</h3>
<div class="code-container"><pre><code>
node -v
npm -v
mkdir solana-client
cd solana-client
npm init -y
npm install @solana/web3.js
npm install dotenv
</code></pre></div>

<h3>2. Set Up Your Wallet</h3>
<div class="code-container"><pre><code>
solana-keygen new --outfile ~/.config/solana/id.json
solana airdrop 2
solana address
</code></pre></div>

<p>Copy contents of <code>id.json</code> for use in your Web3.js script. Save as:</p>
<div class="code-container"><pre><code>
SECRET_KEY=[YOUR_SECRET_KEY_ARRAY]
</code></pre></div>

<h3>3. Basic Setup for Solana Web3.js</h3>
<div class="code-container"><pre><code>
const solanaWeb3 = require('@solana/web3.js');
require('dotenv').config();

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
const secretKey = Uint8Array.from(JSON.parse(process.env.SECRET_KEY));
const payer = solanaWeb3.Keypair.fromSecretKey(secretKey);

(async () => {
    const balance = await connection.getBalance(payer.publicKey);
    console.log(\`Wallet Public Key: \${payer.publicKey.toBase58()}\`);
    console.log(\`Wallet Balance: \${balance / solanaWeb3.LAMPORTS_PER_SOL} SOL\`);
})();
</code></pre></div>

<h3>4. Querying Accounts</h3>
<div class="code-container"><pre><code>
const queryBalance = async (publicKey) => {
    const balance = await connection.getBalance(publicKey);
    console.log(\`Balance for \${publicKey.toBase58()}: \${balance / solanaWeb3.LAMPORTS_PER_SOL} SOL\`);
};

queryBalance(payer.publicKey);
</code></pre></div>

<h3>5. Sending Transactions</h3>
<div class="code-container"><pre><code>
const transferSol = async (to, amount) => {
    const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: new solanaWeb3.PublicKey(to),
            lamports: amount * solanaWeb3.LAMPORTS_PER_SOL,
        })
    );

    const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [payer]);
    console.log(\`Transaction Signature: \${signature}\`);
};

transferSol('RecipientPublicKeyHere', 0.5);
</code></pre></div>

<h3>6. Interacting with a Deployed Program</h3>
<div class="code-container"><pre><code>
const PROGRAM_ID = new solanaWeb3.PublicKey('YourProgramIDHere');

const getProgramAccounts = async () => {
    const accounts = await connection.getProgramAccounts(PROGRAM_ID);
    console.log('Program Accounts:', accounts);
};

getProgramAccounts();

const incrementCounter = async (counterPublicKey) => {
    const instruction = new solanaWeb3.TransactionInstruction({
        keys: [{ pubkey: counterPublicKey, isSigner: false, isWritable: true }],
        programId: PROGRAM_ID,
        data: Buffer.from([]),
    });

    const transaction = new solanaWeb3.Transaction().add(instruction);
    const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [payer]);
    console.log(\`Transaction Signature: \${signature}\`);
};

incrementCounter(new solanaWeb3.PublicKey('CounterPublicKeyHere'));
</code></pre></div>

<h3>7. Advanced Topics: Using PDAs</h3>
<div class="code-container"><pre><code>
const [pda, bump] = await solanaWeb3.PublicKey.findProgramAddress(
    [Buffer.from('seed')],
    PROGRAM_ID
);
console.log('PDA:', pda.toBase58(), 'Bump:', bump);
</code></pre></div>

<h3>8. Logging and Debugging</h3>
<div class="code-container"><pre><code>
const txSignature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [payer], {
    commitment: 'confirmed',
});
console.log('Transaction Logs:', txSignature);
</code></pre></div>

<h3>9. Example: Complete Script</h3>
<div class="code-container"><pre><code>
const solanaWeb3 = require('@solana/web3.js');
require('dotenv').config();

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
const secretKey = Uint8Array.from(JSON.parse(process.env.SECRET_KEY));
const payer = solanaWeb3.Keypair.fromSecretKey(secretKey);

const transferSol = async (to, amount) => {
    const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: new solanaWeb3.PublicKey(to),
            lamports: amount * solanaWeb3.LAMPORTS_PER_SOL,
        })
    );

    const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [payer]);
    console.log(\`Transaction Signature: \${signature}\`);
};

const queryBalance = async (publicKey) => {
    const balance = await connection.getBalance(publicKey);
    console.log(\`Balance for \${publicKey.toBase58()}: \${balance / solanaWeb3.LAMPORTS_PER_SOL} SOL\`);
};

(async () => {
    console.log(\`Wallet Public Key: \${payer.publicKey.toBase58()}\`);
    await queryBalance(payer.publicKey);
    // await transferSol('RecipientPublicKeyHere', 0.5);
})();
</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li>Query account balances.</li>
  <li>Send SOL transactions.</li>
  <li>Interact with Solana programs.</li>
</ul>
<p>This foundation enables you to build client-side applications for the Solana blockchain.</p>
`;
