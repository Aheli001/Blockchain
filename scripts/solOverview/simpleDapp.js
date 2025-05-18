docs.simpleDapp = `
<h1 class="heading">Build a Simple dApp to Interact with a Solana Program</h1>

<h2 class="subHeading">1. Prerequisites</h2>
<div class="code-container"><pre><code>
node -v
npm -v
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
</code></pre></div>
<p>Deploy the Solana Program and get the Program ID before starting.</p>

<h2 class="subHeading">2. Initialize the React Project</h2>
<div class="code-container"><pre><code>
npx create-react-app solana-dapp
cd solana-dapp
npm install @solana/web3.js @solana/spl-token react-bootstrap bootstrap
</code></pre></div>
<p>Import Bootstrap in <code>src/index.js</code>:</p>
<div class="code-container"><pre><code>
import 'bootstrap/dist/css/bootstrap.min.css';
</code></pre></div>

<h2 class="subHeading">3. Create dApp Components</h2>

<h3>A. Setup Solana Connection</h3>
<p>Create <code>src/config.js</code>:</p>
<div class="code-container"><pre><code>
import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';

export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const payer = Keypair.generate();
</code></pre></div>

<h3>B. Main App Component</h3>
<p>Replace contents of <code>src/App.js</code>:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, &#123; useState &#125; <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">import</span> &#123; PublicKey &#125; <span class="keyword">from</span> <span class="string">"@solana/web3.js"</span>;
<span class="keyword">import</span> &#123; connection, payer &#125; <span class="keyword">from</span> <span class="string">"./config"</span>;
<span class="keyword">import</span> &#123;
    createMint,
    getOrCreateAssociatedTokenAccount,
    mintTo,
&#125; <span class="keyword">from</span> <span class="string">"@solana/spl-token"</span>;

<span class="keyword">const</span> App = () =&gt; &#123;
    <span class="keyword">const</span> [mintAddress, setMintAddress] = useState(<span class="string">""</span>);
    <span class="keyword">const</span> [tokenAccount, setTokenAccount] = useState(<span class="string">""</span>);
    <span class="keyword">const</span> [amount, setAmount] = useState(<span class="string">""</span>);

    <span class="keyword">const</span> initializeMint = <span class="keyword">async</span> () =&gt; &#123;
        <span class="keyword">try</span> &#123;
            <span class="keyword">const</span> mint = <span class="keyword">await</span> createMint(
                connection,
                payer,
                payer.publicKey,
                <span class="literal">null</span>,
                9
            );
            setMintAddress(mint.toBase58());
            alert(<span class="string">Mint Address: $&#123;mint.toBase58()&#125;</span>);
        &#125; <span class="keyword">catch</span> (err) &#123;
            console.error(<span class="string">"Error initializing mint:"</span>, err);
        &#125;
    &#125;;

    <span class="keyword">const</span> createTokenAccount = <span class="keyword">async</span> () =&gt; &#123;
        <span class="keyword">try</span> &#123;
            <span class="keyword">const</span> tokenAcc = <span class="keyword">await</span> getOrCreateAssociatedTokenAccount(
                connection,
                payer,
                <span class="keyword">new</span> PublicKey(mintAddress),
                payer.publicKey
            );
            setTokenAccount(tokenAcc.address.toBase58());
            alert(<span class="string">Token Account: $&#123;tokenAcc.address.toBase58()&#125;</span>);
        &#125; <span class="keyword">catch</span> (err) &#123;
            console.error(<span class="string">"Error creating token account:"</span>, err);
        &#125;
    &#125;;

    <span class="keyword">const</span> mintTokens = <span class="keyword">async</span> () =&gt; &#123;
        <span class="keyword">try</span> &#123;
            <span class="keyword">const</span> mintAmount = Number(amount) * 10 ** 9;
            <span class="keyword">await</span> mintTo(
                connection,
                payer,
                <span class="keyword">new</span> PublicKey(mintAddress),
                <span class="keyword">new</span> PublicKey(tokenAccount),
                payer,
                mintAmount
            );
            alert(<span class="string">Minted $&#123;amount&#125; tokens to $&#123;tokenAccount&#125;</span>);
        &#125; <span class="keyword">catch</span> (err) &#123;
            console.error(<span class="string">"Error minting tokens:"</span>, err);
        &#125;
    &#125;;

    <span class="keyword">return</span> (
        <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"container mt-5"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;h1&gt;</span>Solana Token Mint dApp<span class="tag">&lt;/h1&gt;</span>
            <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mt-4"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;button</span> <span class="attr">className=</span><span class="string">"btn btn-primary"</span> <span class="attr">onClick=</span>&#123;initializeMint&#125;<span class="tag">&gt;</span>
                    Initialize Mint
                <span class="tag">&lt;/button&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mt-4"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;button</span>
                    <span class="attr">className=</span><span class="string">"btn btn-secondary"</span>
                    <span class="attr">onClick=</span>&#123;createTokenAccount&#125;
                    <span class="attr">disabled=</span>&#123;!mintAddress&#125;
                <span class="tag">&gt;</span>
                    Create Token Account
                <span class="tag">&lt;/button&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mt-4"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;input</span>
                    <span class="attr">type=</span><span class="string">"number"</span>
                    <span class="attr">className=</span><span class="string">"form-control"</span>
                    <span class="attr">placeholder=</span><span class="string">"Amount to Mint"</span>
                    <span class="attr">value=</span>&#123;amount&#125;
                    <span class="attr">onChange=</span>&#123;(e) =&gt; setAmount(e.target.value)&#125;
                <span class="tag">/&gt;</span>
                <span class="tag">&lt;button</span>
                    <span class="attr">className=</span><span class="string">"btn btn-success mt-2"</span>
                    <span class="attr">onClick=</span>&#123;mintTokens&#125;
                    <span class="attr">disabled=</span>&#123;!tokenAccount&#125;
                <span class="tag">&gt;</span>
                    Mint Tokens
                <span class="tag">&lt;/button&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"mt-4"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;p&gt;</span><span class="tag">&lt;strong&gt;</span>Mint Address:<span class="tag">&lt;/strong&gt;</span> &#123;mintAddress || 'Not Initialized'&#125;<span class="tag">&lt;/p&gt;</span>
                <span class="tag">&lt;p&gt;</span><span class="tag">&lt;strong&gt;</span>Token Account:<span class="tag">&lt;/strong&gt;</span> &#123;tokenAccount || 'Not Created'&#125;<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
    );
&#125;;

<span class="keyword">export default</span> App;
  </code></pre>
</div>

<h2 class="subHeading">4. Run the dApp</h2>
<div class="code-container"><pre><code>
npm start
</code></pre></div>

<h2 class="subHeading">5. Verify on Solana Explorer</h2>
<ul>
  <li>Search for the mint or token account address.</li>
  <li>Confirm the token balance appears correctly.</li>
</ul>

<h2 class="subHeading">6. Optional Enhancements</h2>
<ul>
  <li>Add wallet integration (e.g., Phantom).</li>
  <li>Host with Vercel or Netlify.</li>
  <li>Enhance UI with Material-UI or Tailwind CSS.</li>
</ul>

<h2 class="subHeading">Conclusion</h2>
<ul>
  <li>Set up a React.js project to interact with Solana.</li>
  <li>Initialized token mints and accounts using Web3.js and SPL Token.</li>
  <li>Minted tokens and displayed results in the frontend.</li>
</ul>
<p>This forms the foundation for building more complex dApps on the Solana blockchain.</p>
`;
