docs.auditSmartCont = `
<h1 class="heading">Auditing Smart Contracts for Ethereum and Solana</h1>

<h2 class="subHeading">1. Auditing an Ethereum Smart Contract</h2>

<h3>Step 1: Sample Contract</h3>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract Token {
    mapping(address => uint256) private balances;
    uint256 public totalSupply;
    address public owner;

    constructor(uint256 initialSupply) {
        owner = msg.sender;
        totalSupply = initialSupply;
        balances[owner] = initialSupply;
    }

    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
</code></pre></div>

<h3>Step 2: Auditing with Slither</h3>
<div class="code-container"><pre><code>
pip install slither-analyzer
slither Token.sol
</code></pre></div>

<h3>Step 3: Auditing with MythX</h3>
<div class="code-container"><pre><code>
npm install -g mythx-cli
myth analyze Token.sol
</code></pre></div>

<h3>Step 4: Fix Identified Issues</h3>
<div class="code-container"><pre><code>
event Transfer(address indexed from, address indexed to, uint256 amount);

function transfer(address to, uint256 amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount;
    balances[to] += amount;
    emit Transfer(msg.sender, to, amount);
}

modifier onlyOwner() {
    require(msg.sender == owner, "Not authorized");
    _;
}
</code></pre></div>

<h2 class="subHeading">2. Auditing a Solana Smart Contract</h2>

<h3>Step 1: Sample Program</h3>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

declare_id!("Example11111111111111111111111111111111111");

#[program]
pub mod sample {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, amount: u64) -> Result<()> {
        let data = &mut ctx.accounts.data_account;
        data.amount = amount;
        Ok(())
    }
}

#[account]
pub struct DataAccount {
    pub amount: u64,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub data_account: Account<'info, DataAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
</code></pre></div>

<h3>Step 2: Set Up Anchor Testing</h3>
<div class="code-container"><pre><code>
cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked
</code></pre></div>

<h3>Step 3: Test File (tests/sample.js)</h3>
<div class="code-container"><pre><code>
const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('Sample Program', () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.Sample;

    it('Initializes a data account', async () => {
        const dataAccount = anchor.web3.Keypair.generate();

        await program.methods
            .initialize(new anchor.BN(1000))
            .accounts({
                dataAccount: dataAccount.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId,
            })
            .signers([dataAccount])
            .rpc();

        const account = await program.account.dataAccount.fetch(dataAccount.publicKey);
        console.log('Account Data:', account);
        assert.equal(account.amount, 1000);
    });
});
</code></pre></div>

<h3>Step 4: Fix Identified Issues</h3>
<div class="code-container"><pre><code>
require!(amount > 0, ErrorCode::InvalidAmount);
</code></pre></div>

<h2 class="subHeading">3. General Security Best Practices</h2>

<h3>Ethereum</h3>
<ul>
  <li>Use OpenZeppelin libraries.</li>
  <li>Run tests with Hardhat or Truffle.</li>
</ul>

<h3>Solana</h3>
<ul>
  <li>Use #[account(zero_copy)] for zero-copy deserialization.</li>
  <li>Validate account ownership for CPI calls.</li>
</ul>

<h2 class="subHeading">Summary</h2>
<ul>
  <li>Ethereum: Use MythX and Slither for vulnerability scanning.</li>
  <li>Solana: Use Anchor testing and simulations for audits.</li>
  <li>Fix issues with proper events, access control, and compute optimization.</li>
</ul>

`;