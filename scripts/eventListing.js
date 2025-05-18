docs.eventListing = `
<h1 class="heading">Event Listening</h1>

<h2 class="subHeading">A. Listening to Ethereum Events Using Web3.js</h2>

<p><strong>Set Up Event Listening:</strong></p>
<div class="code-container"><pre><code>
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

contract.events.MyEvent(&#123;&#125;, (error, event) =&gt; &#123;
    if (error) console.error(error);
    else console.log('Event:', event);
&#125;);
</code></pre></div>

<p><strong>Run the Listener:</strong> Start the listener alongside your backend.</p>

<h2 class="subHeading">B. Subscribing to Solana Account Changes Using WebSocket</h2>

<p><strong>Set Up WebSocket Subscription:</strong></p>
<div class="code-container"><pre><code>
const connection = new solanaWeb3.Connection('wss://api.devnet.solana.com', 'confirmed');

connection.onAccountChange(new PublicKey('AccountPublicKeyHere'), (accountInfo) =&gt; &#123;
    console.log('Account Info:', accountInfo);
&#125;);
</code></pre></div>

`;