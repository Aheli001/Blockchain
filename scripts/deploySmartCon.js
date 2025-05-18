docs.deploySmartCon=`
<h1 class="heading">Deploying Smart Contracts</h1>
<p>This guide provides step-by-step instructions for deploying smart contracts on Ethereum (using Hardhat/Truffle) and Solana (using Solana CLI and Anchor).</p>

<h2 class="subHeading">1. Deploying Ethereum Smart Contracts</h2>

<h3>A. Using Hardhat</h3>

<p>Install Hardhat:</p>
<div class="code-container"><pre><code>
npm install --save-dev hardhat
</code></pre></div>

<p>Initialize Hardhat Project:</p>
<div class="code-container"><pre><code>
npx hardhat
</code></pre></div>
<p>Choose "Create a basic sample project".</p>

<p>Create a Smart Contract (contracts/MyContract.sol):</p>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

contract MyContract {
    uint256 public value;

    function setValue(uint256 _value) public {
        value = _value;
    }
}
</code></pre></div>

<p>Deployment Script (scripts/deploy.js):</p>
<div class="code-container"><pre><code>
const hre = require("hardhat");

async function main() {
    const MyContract = await hre.ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();
    console.log("MyContract deployed to:", myContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
</code></pre></div>

<p>Compile the Contract:</p>
<div class="code-container"><pre><code>
npx hardhat compile
</code></pre></div>

<p>Start Local Network:</p>
<div class="code-container"><pre><code>
npx hardhat node
</code></pre></div>

<p>Deploy Locally:</p>
<div class="code-container"><pre><code>
npx hardhat run scripts/deploy.js --network localhost
</code></pre></div>

<p>Configure Rinkeby in hardhat.config.js:</p>
<div class="code-container"><pre><code>
require("@nomiclabs/hardhat-waffle");

module.exports = {
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: ["YOUR_PRIVATE_KEY"],
        },
    },
    solidity: "0.8.0",
};
</code></pre></div>

<p>Deploy to Rinkeby:</p>
<div class="code-container"><pre><code>
npx hardhat run scripts/deploy.js --network rinkeby
</code></pre></div>

<h3>B. Using Truffle</h3>

<p>Install Truffle:</p>
<div class="code-container"><pre><code>
npm install -g truffle
</code></pre></div>

<p>Initialize Truffle Project:</p>
<div class="code-container"><pre><code>
truffle init
</code></pre></div>

<p>Migration Script (migrations/2_deploy_contracts.js):</p>
<div class="code-container"><pre><code>
const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
    deployer.deploy(MyContract);
};
</code></pre></div>

<p>Start Ganache:</p>
<div class="code-container"><pre><code>
ganache-cli
</code></pre></div>

<p>Deploy:</p>
<div class="code-container"><pre><code>
truffle migrate --network development
</code></pre></div>

<p>Configure truffle-config.js for Rinkeby:</p>
<div class="code-container"><pre><code>
networks: {
    rinkeby: {
        provider: () =>
            new HDWalletProvider(
                "YOUR_MNEMONIC",
                "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"
            ),
        network_id: 4,
    },
},
</code></pre></div>

<p>Deploy to Rinkeby:</p>
<div class="code-container"><pre><code>
truffle migrate --network rinkeby
</code></pre></div>

<h2 class="subHeading">2. Deploying Solana Programs</h2>

<h3>A. Using Solana CLI</h3>

<p>Install Solana CLI:</p>
<div class="code-container"><pre><code>
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
</code></pre></div>

<p>Create Wallet:</p>
<div class="code-container"><pre><code>
solana-keygen new --outfile ~/.config/solana/id.json
solana config set --keypair ~/.config/solana/id.json
solana config set --url https://api.devnet.solana.com
</code></pre></div>

<p>Basic Program (src/lib.rs):</p>
<div class="code-container"><pre><code>
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana!");
    Ok(())
}
</code></pre></div>

<p>Build and Deploy:</p>
<div class="code-container"><pre><code>
cargo build-bpf
solana program deploy target/deploy/your_program.so
solana program show --program-id YOUR_PROGRAM_ID
</code></pre></div>

<h3>B. Using Anchor</h3>

<p>Install Anchor:</p>
<div class="code-container"><pre><code>
cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked
</code></pre></div>

<p>Initialize Project:</p>
<div class="code-container"><pre><code>
anchor init my_solana_project
cd my_solana_project
</code></pre></div>

<p>Program (programs/my_solana_project/src/lib.rs):</p>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

declare_id!("YourProgramIDHere");

#[program]
pub mod my_solana_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Program initialized successfully!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct BaseAccount {
    pub data: u64,
}
</code></pre></div>

<p>Build and Deploy:</p>
<div class="code-container"><pre><code>
anchor build
anchor deploy
</code></pre></div>

<p>Test File (tests/my_solana_project.js):</p>
<div class="code-container"><pre><code>
const anchor = require("@project-serum/anchor");

describe("my_solana_project", () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    it("Initializes the program", async () => {
        const program = anchor.workspace.MySolanaProject;
        const tx = await program.rpc.initialize();
        console.log("Transaction signature:", tx);
    });
});
</code></pre></div>

<p>Run Tests:</p>
<div class="code-container"><pre><code>
anchor test
</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>Ethereum:</strong> Hardhat for modern workflows, Truffle for structured projects.</li>
  <li><strong>Solana:</strong> CLI for low-level deployment, Anchor for efficient development.</li>
</ul>
<p>Use these tools to streamline smart contract deployment for your blockchain applications.</p>

`;