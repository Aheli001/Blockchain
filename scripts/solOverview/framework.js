docs.framework = `
<h1 class="heading">Anchor Framework for Solana Development</h1>
<p>The Anchor framework simplifies Solana smart contract development by providing high-level abstractions, reducing boilerplate code, and improving developer productivity.</p>

<h2 class="subHeading">A. Setting Up the Anchor Project</h2>

<h3>Install Anchor Framework</h3>
<p>Ensure <code>cargo</code> is installed:</p>
<div class="code-container"><pre><code>curl --proto '=https' --tlsv1.2 -sSf https://sh.up.rs | sh</code></pre></div>

<p>Install Anchor CLI:</p>
<div class="code-container"><pre><code>cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked</code></pre></div>

<h3>Initialize a New Anchor Project</h3>
<div class="code-container"><pre><code>
anchor init my-anchor-project
cd my-anchor-project
</code></pre></div>

<h4>Project Structure:</h4>
<ul>
  <li><code>programs/</code>: Contains code for Solana programs.</li>
  <li><code>tests/</code>: Holds integration tests for the program.</li>
  <li><code>Anchor.toml</code>: Project configuration file.</li>
  <li><code>migrations/</code>: Contains deployment scripts.</li>
</ul>

<h3>Configure the Solana Cluster</h3>
<div class="code-container"><pre><code>solana config set --url https://api.devnet.solana.com</code></pre></div>

<h3>Build the Project</h3>
<div class="code-container"><pre><code>anchor build</code></pre></div>

<h3>Deploy the Program</h3>
<div class="code-container"><pre><code>anchor deploy</code></pre></div>
<p>After deployment, note the Program ID and update it in the <code>declare_id!</code> macro in your program.</p>

<h2 class="subHeading">B. Understanding Program Accounts and PDAs</h2>

<h3>1. Program Accounts</h3>
<p>In Solana, accounts store data and state for programs. Anchor simplifies account management with declarative syntax.</p>

<p><strong>Example:</strong></p>
<div class="code-container"><pre><code>
#[account]
pub struct Counter {
    pub value: u64,
}
</code></pre></div>

<h4>Account Initialization:</h4>
<div class="code-container"><pre><code>
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
</code></pre></div>

<h3>2. Program Derived Addresses (PDAs)</h3>
<p><strong>Generating a PDA:</strong></p>
<div class="code-container"><pre><code>
let (pda, bump) = Pubkey::find_program_address(&[b"seed"], program_id);
</code></pre></div>

<p><strong>Using a PDA:</strong></p>
<div class="code-container"><pre><code>
#[account(
    seeds = [b"seed"],
    bump,
)]
pub pda_account: AccountInfo<'info>,
</code></pre></div>

<h2 class="subHeading">C. Error Handling and Logging in Solana</h2>

<h3>1. Error Handling</h3>
<p><strong>Example:</strong></p>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

#[error_code]
pub enum CustomError {
    #[msg("Insufficient funds")]
    InsufficientFunds,
    #[msg("Unauthorized access")]
    Unauthorized,
}
</code></pre></div>

<h4>Returning Errors:</h4>
<div class="code-container"><pre><code>
pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    let account = &ctx.accounts.account;

    if account.balance < amount {
        return Err(CustomError::InsufficientFunds.into());
    }

    Ok(())
}
</code></pre></div>

<h3>2. Logging</h3>
<div class="code-container"><pre><code>
msg!("Counter value incremented to {}", counter.value);
</code></pre></div>

<h2 class="subHeading">Hands-On Example</h2>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

declare_id!("YourProgramIDHere");

#[program]
pub mod my_anchor_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.value = 0;

        msg!("Initialized counter to {}", counter.value);
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.value += 1;

        msg!("Counter incremented to {}", counter.value);
        Ok(())
    }
}

#[account]
pub struct Counter {
    pub value: u64,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}
</code></pre></div>

<h2 class="subHeading">Testing the Program</h2>
<div class="code-container"><pre><code>
const anchor = require('@project-serum/anchor');

describe('my-anchor-project', () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    it('Initializes the counter', async () => {
        const program = anchor.workspace.MyAnchorProject;
        const counter = anchor.web3.Keypair.generate();

        await program.rpc.initialize({
            accounts: {
                counter: counter.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: anchor.web3.SystemProgram.programId,
            },
            signers: [counter],
        });

        const account = await program.account.counter.fetch(counter.publicKey);
        console.log('Counter value:', account.value);
    });
});
</code></pre></div>

<div class="code-container"><pre><code>anchor test</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Setting Up:</strong> Anchor simplifies project initialization and deployment.</li>
  <li><strong>Program Accounts and PDAs:</strong> Anchor provides declarative syntax for account initialization and secure PDA management.</li>
  <li><strong>Error Handling and Logging:</strong> Anchor makes debugging and error handling efficient through enums and logging macros.</li>
</ul>
<p>With these concepts, you can build robust, scalable Solana programs using Anchor.</p>
`;