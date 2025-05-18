docs.introToSyntax = `
<h1 class="heading">Introduction to  Syntax and Memory Safety</h1>

<h2 class="subHeading">A.  Basics</h2>

<h3>Hello, World Program:</h3>
<div class="code-container"><pre><code>fn main() {
    println!("Hello, world!");
}</code></pre></div>

<h3>Key Features of :</h3>
<ul>
  <li>Statically Typed</li>
  <li>Ownership System</li>
  <li>Borrowing and Lifetimes</li>
  <li>Concurrency without Fear</li>
</ul>

<h2 class="subHeading">B. Variables and Data Types</h2>
<h4>Immutable and Mutable Variables:</h4>
<div class="code-container"><pre><code>
let x = 5; // Immutable
let mut y = 10; // Mutable
y = 15; // Allowed
</code></pre></div>

<h4>Data Types:</h4>
<div class="code-container"><pre><code>
let tuple: (i32, f64, u8) = (500, 6.4, 1);
let array = [1, 2, 3, 4, 5];
</code></pre></div>

<h4>Strings:</h4>
<p>String Literal:</p>
<div class="code-container"><pre><code>let s = "Hello";</code></pre></div>
<p>String Object:</p>
<div class="code-container"><pre><code>
let mut s = String::from("Hello");
s.push_str(", world!");
</code></pre></div>

<h2 class="subHeading">C. Control Flow</h2>
<h4>If-Else:</h4>
<div class="code-container"><pre><code>
if x < 5 {
    println!("x is less than 5");
} else {
    println!("x is 5 or more");
}
</code></pre></div>

<h4>Loops:</h4>
<p>Infinite loop:</p>
<div class="code-container"><pre><code>
loop {
    println!("Running forever");
}
</code></pre></div>

<p>While loop:</p>
<div class="code-container"><pre><code>
while x < 10 {
    x += 1;
}
</code></pre></div>

<p>For loop:</p>
<div class="code-container"><pre><code>
for i in 0..5 {
    println!("Iteration: {}", i);
}
</code></pre></div>

<h2 class="subHeading">D. Ownership and Borrowing</h2>
<h4>Ownership:</h4>
<div class="code-container"><pre><code>
let s1 = String::from("hello");
let s2 = s1;
// println!("{}", s1); // Error: s1 is no longer valid
</code></pre></div>

<h4>Borrowing:</h4>
<div class="code-container"><pre><code>
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

let s = String::from("hello");
print_length(&s);
</code></pre></div>

<h4>Mutable Borrowing:</h4>
<div class="code-container"><pre><code>
let mut s = String::from("hello");
let s_ref = &mut s;
s_ref.push_str(", world");
</code></pre></div>

<h2 class="subHeading">E. Functions and Error Handling</h2>
<h4>Functions:</h4>
<div class="code-container"><pre><code>
fn add(x: i32, y: i32) -> i32 {
    x + y
}

let result = add(5, 10);
</code></pre></div>

<h4>Error Handling:</h4>
<p>Result Enum:</p>
<div class="code-container"><pre><code>
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}
</code></pre></div>

<p>Unwrapping Results:</p>
<div class="code-container"><pre><code>
match divide(10, 0) {
    Ok(result) => println!("Result: {}", result),
    Err(err) => println!("Error: {}", err),
}
</code></pre></div>

<h2 class="subHeading">2. Writing and Compiling Solana Programs</h2>

<h3>A. Installation for Solana Development</h3>
<div class="code-container"><pre><code>curl --proto '=https' --tlsv1.2 -sSf https://sh.up.rs | sh</code></pre></div>

<p>Install Solana CLI:</p>
<div class="code-container"><pre><code>sh -c "$(curl -sSfL https://release.solana.com/stable/install)"</code></pre></div>

<p>Install Anchor Framework:</p>
<div class="code-container"><pre><code>cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli --locked</code></pre></div>

<h3>B. Writing a Simple Solana Program</h3>
<div class="code-container"><pre><code>
anchor init my-solana-program
cd my-solana-program
</code></pre></div>

<p><strong>Sample Program (lib.rs):</strong></p>
<div class="code-container"><pre><code>
use anchor_lang::prelude::*;

declare_id!("YourProgramIDHere");

#[program]
pub mod my_solana_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.value = 0;
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.value += 1;
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

<h3>C. Compile and Deploy the Program</h3>
<div class="code-container"><pre><code>
anchor build
solana config set --url https://api.devnet.solana.com
anchor deploy
</code></pre></div>

<h3>D. Interact with the Program (test script)</h3>
<div class="code-container"><pre><code>
const anchor = require('@project-serum/anchor');

describe('my-solana-program', () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    it('Initializes the counter', async () => {
        const program = anchor.workspace.MySolanaProgram;
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
  <li><strong> Syntax:</strong> Enables safe, efficient, and high-performance blockchain development.</li>
  <li><strong>Solana Programs:</strong>  + Anchor provides the tooling needed to build scalable dApps on Solana.</li>
</ul>
`;
