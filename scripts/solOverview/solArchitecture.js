docs.solArchitecture = `
<h1 class="heading">Solana Architecture</h1>

<h2 class="subHeading">A. Proof of History (PoH) and Tower BFT</h2>

<h3>Proof of History (PoH)</h3>
<p><strong>What is PoH?</strong></p>
<p>PoH is a cryptographic clock that ensures a verifiable order and timestamp for all events in the blockchain. It reduces the overhead of achieving consensus by allowing validators to agree on the sequence of transactions without extensive communication.</p>

<p><strong>How PoH Works:</strong></p>
<ul>
  <li>PoH generates a hash sequence where each hash depends on the previous one.</li>
  <li>Validators verify the sequence to confirm transaction order.</li>
  <li>A cryptographic timestamp is added to transactions.</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
  <li>High Throughput</li>
  <li>Energy Efficiency</li>
  <li>Low Latency</li>
</ul>

<h3>Tower Byzantine Fault Tolerance (Tower BFT)</h3>
<p><strong>What is Tower BFT?</strong></p>
<p>Solana’s consensus mechanism built on PoH, optimized for fast confirmation and low energy usage.</p>

<p><strong>How It Works:</strong></p>
<ul>
  <li>Validators vote on transaction blocks based on PoH sequence.</li>
  <li>Votes are weighted by staked SOL tokens.</li>
  <li>Up to 1/3 malicious validators can be tolerated.</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
  <li>Fast Finality</li>
  <li>Scalability</li>
  <li>Security</li>
</ul>

<h2 class="subHeading">B. Accounts, Instructions, and Transactions</h2>

<h3>Accounts</h3>
<p><strong>What Are Accounts?</strong></p>
<p>Accounts store data and SOL. All programs and interactions use accounts.</p>

<p><strong>Types:</strong></p>
<ul>
  <li><strong>Owned Accounts:</strong> Controlled by specific programs.</li>
  <li><strong>System Accounts:</strong> Created by Solana runtime.</li>
</ul>

<p><strong>Structure:</strong></p>
<ul>
  <li>Public Key</li>
  <li>Data</li>
  <li>Owner</li>
  <li>Lamports (SOL)</li>
</ul>

<h3>Instructions</h3>
<p>Define actions for programs.</p>
<ul>
  <li>Program ID</li>
  <li>Accounts involved</li>
  <li>Instruction data</li>
</ul>

<h3>Transactions</h3>
<p>Group of instructions submitted to the network.</p>
<ul>
  <li>Signatures</li>
  <li>Messages containing instructions and accounts</li>
</ul>

<h2 class="subHeading">2. Key Solana Tools</h2>

<h3>A. Solana CLI</h3>
<p><strong>What is Solana CLI?</strong></p>
<p>Tool for managing wallets, deploying programs, and interacting with Solana.</p>

<p><strong>Installation:</strong></p>
<div class="code-container"><pre><code>sh -c "$(curl -sSfL https://release.solana.com/stable/install)"</code></pre></div>

<p><strong>Set Cluster:</strong></p>
<div class="code-container"><pre><code>solana config set --url https://api.devnet.solana.com</code></pre></div>

<p><strong>Wallet Commands:</strong></p>
<div class="code-container"><pre><code>
solana-keygen new --outfile ~/my-solana-wallet.json
solana balance
solana airdrop 2
</code></pre></div>

<p><strong>Deploy Programs:</strong></p>
<div class="code-container"><pre><code>
solana program deploy /path/to/program.so
solana program show &lt;PROGRAM_ID&gt;
</code></pre></div>

<h3>B. Anchor Framework</h3>
<p><strong>What is Anchor?</strong></p>
<p>Framework that simplifies Solana smart contract development with Rust.</p>

<p><strong>Installation:</strong></p>
<div class="code-container"><pre><code>
curl --proto '=https' --tlsv1.2 -sSf https://sh.up.rs | sh
cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked
</code></pre></div>

<p><strong>Create a New Project:</strong></p>
<div class="code-container"><pre><code>
anchor init my-anchor-project
cd my-anchor-project
</code></pre></div>

<p><strong>Example Program (Counter):</strong></p>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

declare_id!("YourProgramIDHere");

#[program]
pub mod counter {
    use super::*;

    pub fn initialize(ctx: Context&lt;Initialize&gt;) -&gt; Result&lt;&gt; {
        let counter = &amp;mut ctx.accounts.counter;
        counter.count = 0;
        Ok(())
    }

    pub fn increment(ctx: Context&lt;Increment&gt;) -&gt; Result&lt;&gt; {
        let counter = &amp;mut ctx.accounts.counter;
        counter.count += 1;
        Ok(())
    }
}

#[account]
pub struct Counter {
    pub count: u64,
}

#[derive(Accounts)]
pub struct Initialize&lt;'info&gt; {
    #[account(init, payer = user, space = 8 + 8)]
    pub counter: Account&lt;'info, Counter&gt;,
    #[account(mut)]
    pub user: Signer&lt;'info&gt;,
    pub system_program: Program&lt;'info, System&gt;,
}

#[derive(Accounts)]
pub struct Increment&lt;'info&gt; {
    #[account(mut)]
    pub counter: Account&lt;'info, Counter&gt;,
}
</code></pre></div>

<p><strong>Build &amp; Deploy:</strong></p>
<div class="code-container"><pre><code>
anchor build
anchor deploy
</code></pre></div>

<p><strong>Run Tests:</strong></p>
<div class="code-container"><pre><code>anchor test</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>PoH &amp; Tower BFT:</strong> Deliver high speed, low-latency consensus.</li>
  <li><strong>Accounts, Instructions, Transactions:</strong> Fundamental for Solana programs.</li>
  <li><strong>Solana CLI &amp; Anchor:</strong> Provide a productive environment for building high-performance dApps.</li>
</ul>
<p><strong>Rust</strong> is the primary language for writing Solana programs, chosen for its performance, safety, and concurrency support.</p>
`;
