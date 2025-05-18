
docs.deploySolProgram = `
<h1 class="heading">Write and Deploy a Solana Program to Manage a Token Mint</h1>

<h2 class="subHeading">Step 1: Prerequisites</h2>
<div class="code-container"><pre><code>
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
curl --proto '=https' --tlsv1.2 -sSf https://sh.up.rs | sh
cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked
solana config set --url https://api.devnet.solana.com
solana-keygen new --outfile ~/.config/solana/id.json
</code></pre></div>

<h2 class="subHeading">Step 2: Initialize an Anchor Project</h2>
<div class="code-container"><pre><code>
anchor init token-mint-manager
cd token-mint-manager
</code></pre></div>

<h2 class="subHeading">Step 3: Write the Solana Program</h2>
<p>Replace <code>programs/token-mint-manager/src/lib.rs</code> with:</p>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, MintTo, TokenAccount, Token};

declare_id!("YourProgramIDHere");

#[program]
pub mod token_mint_manager {
    use super::*;

    pub fn initialize_mint(
        ctx: Context<InitializeMint>,
        decimals: u8,
    ) -> Result<()> {
        let mint = &mut ctx.accounts.mint;
        mint.decimals = decimals;
        mint.mint_authority = Some(ctx.accounts.authority.key());
        Ok(())
    }

    pub fn mint_tokens(
        ctx: Context<MintTokens>,
        amount: u64,
    ) -> Result<()> {
        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.token_account.to_account_info(),
            authority: ctx.accounts.authority.to_account_info(),
        };

        let cpi_context = CpiContext::new(ctx.accounts.token_program.to_account_info(), cpi_accounts);
        token::mint_to(cpi_context, amount)?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeMint<'info> {
    #[account(init, payer = authority, mint::decimals = decimals, mint::authority = authority, mint::freeze_authority = authority)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    pub authority: Signer<'info>,
    pub token_program: Program<'info, Token>,
}
</code></pre></div>

<h2 class="subHeading">Step 4: Build and Deploy the Program</h2>
<div class="code-container"><pre><code>
anchor build
anchor deploy
</code></pre></div>

<h2 class="subHeading">Step 5: Interact with the Program Using Solana CLI</h2>
<div class="code-container"><pre><code>
solana program create-token
solana program create-token-account &lt;mint-address&gt;
</code></pre></div>

<h2 class="subHeading">Step 6: Interact with the Program Using JavaScript</h2>
<div class="code-container"><pre><code>
npm install @solana/web3.js @solana/spl-token @project-serum/anchor
</code></pre></div>

<p>Create <code>index.js</code>:</p>
<div class="code-container"><pre><code>
const anchor = require('@project-serum/anchor');
const { TOKEN_PROGRAM_ID, createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');

const main = async () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.TokenMintManager;

    const mint = await createMint(
        provider.connection,
        provider.wallet.payer,
        provider.wallet.publicKey,
        null,
        9
    );
    console.log('Mint Address:', mint.toBase58());

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        provider.connection,
        provider.wallet.payer,
        mint,
        provider.wallet.publicKey
    );
    console.log('Token Account Address:', tokenAccount.address.toBase58());

    await mintTo(
        provider.connection,
        provider.wallet.payer,
        mint,
        tokenAccount.address,
        provider.wallet.payer,
        1000 * 10 ** 9
    );
    console.log('Minted 1000 tokens');
};

main().catch(console.error);
</code></pre></div>

<div class="code-container"><pre><code>
node index.js
</code></pre></div>

<h2 class="subHeading">Step 7: Verify</h2>
<div class="code-container"><pre><code>
spl-token balance &lt;mint-address&gt;
spl-token balance &lt;token-account-address&gt;
</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li>You created a Solana program to initialize a token mint and manage token minting.</li>
  <li>The Anchor framework simplified program development with high-level abstractions.</li>
  <li>You used CLI and Solana Web3.js to interact with the program and mint tokens.</li>
</ul>
<p>This setup is the foundation for building token-based dApps on Solana.</p>
`;

