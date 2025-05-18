docs.frontendIntegration = `
<h1 class="heading">Frontend Integration</h1>

<h2 class="subHeading">A. Setting Up a React.js Frontend for a dApp</h2>
<p><strong>Create a React.js Project:</strong></p>
<div class="code-container"><pre><code>
npx create-react-app blockchain-dapp
cd blockchain-dapp
</code></pre></div>

<p><strong>Install Required Dependencies:</strong><br/>Install Web3.js and Solana Web3.js for blockchain interaction:</p>
<div class="code-container"><pre><code>
npm install @solana/web3.js @metamask/detect-provider web3
</code></pre></div>

<p><strong>Install wallet adapters:</strong></p>
<div class="code-container"><pre><code>
npm install @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-base @solana/wallet-adapter-wallets
</code></pre></div>

<p><strong>Add Wallet UI:</strong><br/>Add styles for Solana Wallet Adapter UI:</p>
<div class="code-container"><pre><code>
import '@solana/wallet-adapter-react-ui/styles.css';
</code></pre></div>

<p><strong>Create the Basic App Structure:</strong><br/>Update <code>src/App.js</code>:</p>
<div class="code-container"><pre><code>
import React from 'react';

const App = () => {
    return (
        &lt;div className="container"&gt;
            &lt;h1&gt;Blockchain dApp&lt;/h1&gt;
        &lt;/div&gt;
    );
};

export default App;
</code></pre></div>

<h2 class="subHeading">B. Integrating Wallet Adapters</h2>

<p><strong>Add Phantom Wallet Adapter for Solana:</strong><br/>Update <code>src/App.js</code>:</p>
<div class="code-container"><pre><code>
import React, { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

const App = () => {
    const network = WalletAdapterNetwork.Devnet;

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

    return (
        &lt;ConnectionProvider endpoint="https://api.devnet.solana.com"&gt;
            &lt;WalletProvider wallets={wallets} autoConnect&gt;
                &lt;WalletModalProvider&gt;
                    &lt;div&gt;
                        &lt;h1&gt;Solana dApp&lt;/h1&gt;
                    &lt;/div&gt;
                &lt;/WalletModalProvider&gt;
            &lt;/WalletProvider&gt;
        &lt;/ConnectionProvider&gt;
    );
};

export default App;
</code></pre></div>

<p><strong>Add Metamask Integration for Ethereum:</strong><br/>Detect and connect MetaMask:</p>
<div class="code-container"><pre><code>
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

const connectMetaMask = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.requestAccounts();
        console.log('Connected account:', accounts[0]);
    } else {
        console.error('MetaMask not installed');
    }
};
</code></pre></div>

<p><strong>Add a button in the UI:</strong></p>
<div class="code-container"><pre><code>
&lt;button onClick={connectMetaMask}&gt;Connect MetaMask&lt;/button&gt;
</code></pre></div>`;
