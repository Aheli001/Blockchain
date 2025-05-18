docs.deploySPLTok = `
<h1 class="heading">Deploy an SPL Token and Integrate It with a Solana dApp</h1>

<h2 class="subHeading">A. Deploy an SPL Token</h2>
<p>SPL tokens are fungible tokens on the Solana blockchain. This section covers creating and managing an SPL token.</p>

<h3>Install Prerequisites</h3>
<div class="code-container"><pre><code>
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
cargo install spl-token-cli
solana config set --url https://api.devnet.solana.com
solana-keygen new --outfile ~/.config/solana/id.json
</code></pre></div>

<h3>Create an SPL Token</h3>
<div class="code-container"><pre><code>
spl-token create-token
spl-token create-account &lt;TOKEN_MINT_ADDRESS&gt;
spl-token mint &lt;TOKEN_MINT_ADDRESS&gt; &lt;AMOUNT&gt; &lt;TOKEN_ACCOUNT_ADDRESS&gt;
spl-token balance &lt;TOKEN_ACCOUNT_ADDRESS&gt;
</code></pre></div>

<h2 class="subHeading">B. Integrate SPL Token with a Solana dApp</h2>

<h3>Initialize a React.js Project</h3>
<div class="code-container"><pre><code>
npx create-react-app solana-dapp
cd solana-dapp
npm install @solana/web3.js @solana/spl-token @solana/wallet-adapter-react @solana/wallet-adapter-react-ui
</code></pre></div>

<h3>Configure Wallet Adapter</h3>
<div class="code-container"><pre><code>
<span class="keyword">import</span> React, &#123; useMemo &#125; <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> &#123; ConnectionProvider, WalletProvider &#125; <span class="keyword">from</span> <span class="string">'@solana/wallet-adapter-react'</span>;
<span class="keyword">import</span> &#123; WalletModalProvider &#125; <span class="keyword">from</span> <span class="string">'@solana/wallet-adapter-react-ui'</span>;
<span class="keyword">import</span> &#123; PhantomWalletAdapter &#125; <span class="keyword">from</span> <span class="string">'@solana/wallet-adapter-wallets'</span>;

<span class="keyword">const</span> App = () =&gt; &#123;
    <span class="keyword">const</span> wallets = useMemo(() =&gt; [<span class="keyword">new</span> PhantomWalletAdapter()], []);

    <span class="keyword">return</span> (
        <span class="tag">&lt;ConnectionProvider</span> <span class="attr">endpoint=</span><span class="string">"https://api.devnet.solana.com"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;WalletProvider</span> <span class="attr">wallets=</span>&#123;wallets&#125; <span class="attr">autoConnect</span><span class="tag">&gt;</span>
                <span class="tag">&lt;WalletModalProvider&gt;</span>
                    <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"App"</span><span class="tag">&gt;</span>
                        <span class="tag">&lt;h1&gt;</span>Solana SPL Token dApp<span class="tag">&lt;/h1&gt;</span>
                    <span class="tag">&lt;/div&gt;</span>
                <span class="tag">&lt;/WalletModalProvider&gt;</span>
            <span class="tag">&lt;/WalletProvider&gt;</span>
        <span class="tag">&lt;/ConnectionProvider&gt;</span>
    );
&#125;;

<span class="keyword">export default</span> App;
</code></pre></div>

<h3>Interact with SPL Token</h3>
<div class="code-container"><pre><code>
<span class="keyword">import</span> &#123; PublicKey, Connection &#125; <span class="keyword">from</span> <span class="string">'@solana/web3.js'</span>;
<span class="keyword">import</span> &#123; createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer &#125; <span class="keyword">from</span> <span class="string">'@solana/spl-token'</span>;

<span class="keyword">const</span> connection = <span class="keyword">new</span> Connection(<span class="string">'https://api.devnet.solana.com'</span>, <span class="string">'confirmed'</span>);

<span class="keyword">const</span> createToken = <span class="keyword">async</span> () =&gt; &#123;
    <span class="keyword">const</span> mint = <span class="keyword">await</span> createMint(
        connection,
        payer,
        payer.publicKey,
        <span class="literal">null</span>,
        9
    );
    console.log(<span class="string">'Token Mint Address:'</span>, mint.toBase58());
&#125;;
</code></pre></div>

<h3>Run the dApp</h3>
<div class="code-container"><pre><code>
npm start
</code></pre></div>

<h2 class="contentHeading">2. Write a Gas-Efficient Ethereum Smart Contract for Token Staking</h2>

<h3>Install Development Tools</h3>
<div class="code-container"><pre><code>
npm install -g truffle
truffle init
</code></pre></div>

<h3>Smart Contract Code</h3>
<div class="code-container"><pre><code>
// SPDX-License-Identifier: MIT
pragma ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenStaking &#123;
    IERC20 public stakingToken;

    uint256 public totalStaked;
    mapping(address =&gt; uint256) public balances;
    mapping(address =&gt; uint256) public rewardDebt;

    uint256 public rewardRate = 1e18;
    uint256 public lastRewardBlock;
    uint256 public accRewardPerToken;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);

    constructor(IERC20 _stakingToken) &#123;
        stakingToken = _stakingToken;
        lastRewardBlock = block.number;
    &#125;

    function _updateRewards() internal &#123;
        if (totalStaked &gt; 0) &#123;
            uint256 blocks = block.number - lastRewardBlock;
            uint256 reward = blocks * rewardRate;
            accRewardPerToken += (reward * 1e18) / totalStaked;
        &#125;
        lastRewardBlock = block.number;
    &#125;

    function stake(uint256 amount) external &#123;
        _updateRewards();
        stakingToken.transferFrom(msg.sender, address(this), amount);

        if (balances[msg.sender] &gt; 0) &#123;
            uint256 pending = (balances[msg.sender] * accRewardPerToken) / 1e18 - rewardDebt[msg.sender];
            rewardDebt[msg.sender] += pending;
        &#125;

        balances[msg.sender] += amount;
        rewardDebt[msg.sender] = (balances[msg.sender] * accRewardPerToken) / 1e18;
        totalStaked += amount;

        emit Staked(msg.sender, amount);
    &#125;

    function withdraw(uint256 amount) external &#123;
        _updateRewards();

        require(balances[msg.sender] &gt;= amount, "Insufficient balance");
        uint256 pending = (balances[msg.sender] * accRewardPerToken) / 1e18 - rewardDebt[msg.sender];

        balances[msg.sender] -= amount;
        rewardDebt[msg.sender] = (balances[msg.sender] * accRewardPerToken) / 1e18;
        totalStaked -= amount;

        stakingToken.transfer(msg.sender, amount + pending);

        emit Withdrawn(msg.sender, amount);
        emit RewardsClaimed(msg.sender, pending);
    &#125;
&#125;
</code></pre></div>

<h3>Deploy the Contract</h3>
<div class="code-container"><pre><code>
truffle migrate --network development
</code></pre></div>

<h3>Interact Programmatically</h3>
<div class="code-container"><pre><code>
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [...]; // ABI from the compiled contract

const stakingContract = new web3.eth.Contract(abi, contractAddress);

const stakeTokens = async () =&gt; &#123;
    await stakingContract.methods.stake(web3.utils.toWei('100', 'ether')).send(&#123; from: 'YOUR_WALLET_ADDRESS' &#125;);
    console.log("Tokens Staked!");
&#125;;

stakeTokens();
</code></pre></div>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li><strong>SPL Token Deployment and Integration:</strong> You deployed an SPL token and integrated it with a Solana dApp.</li>
  <li><strong>Ethereum Staking Contract:</strong> A gas-efficient staking contract was written using minimal storage and optimized reward logic.</li>
</ul>
<p>These steps establish a foundation for creating robust blockchain-based applications.</p>
`;
