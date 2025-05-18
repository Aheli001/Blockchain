docs.backendServices = `
<h1 class="heading">Backend Services</h1>

<h2 class="subHeading">A. Setting Up API Services for Blockchain Interactions</h2>

<p><strong>Install Express.js:</strong></p>
<div class="code-container"><pre><code>
npm install express body-parser cors
</code></pre></div>

<p><strong>Create a Backend Service:</strong><br/>Create a file <code>server.js</code>:</p>
<div class="code-container"><pre><code>
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to fetch blockchain data
app.get('/api/blockchain-data', (req, res) =&gt; &#123;
    res.json(&#123; data: 'Blockchain Data' &#125;);
&#125;);

const PORT = 5000;
app.listen(PORT, () =&gt; &#123;
    console.log(Server running on port &#36;&#123;PORT&#125;);
&#125;);
</code></pre></div>

<p><strong>Run the Backend:</strong></p>
<div class="code-container"><pre><code>
node server.js
</code></pre></div>

<h2 class="subHeading">B. Storing and Retrieving Off-Chain Data Securely</h2>

<p><strong>Use MongoDB or PostgreSQL for storage.</strong></p>

<p><strong>MongoDB:</strong></p>
<div class="code-container"><pre><code>
npm install mongoose
</code></pre></div>

<ul>
  <li>Store off-chain metadata, such as user profiles or NFT details.</li>
  <li>Secure API access with JWT or OAuth2.</li>
</ul>

`;