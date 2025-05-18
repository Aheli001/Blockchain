docs.keyTypes = `
<h1 class="heading">Key Blockchain Types</h1>
<p class="contentText">Blockchain technology can be categorized based on its accessibility, participants, and functional layers. This categorization helps in understanding the scope, purpose, and utility of different blockchain solutions.</p>
<h1 class="contentHeading">Public vs. Private Blockchains</h1>
<ol style="list-style-type:upper-alpha;">
          <li>
          <strong>
            Public Blockchains
            </strong>
            <ol>
                <li>
                <strong>Definition:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Public blockchains are decentralized networks where anyone can participate, view transactions, and maintain the ledger without requiring special permissions.
                </li>
                </ul>
                </li>
                <li>
                <strong>Key Features:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Decentralization:</strong>
                <ul>
                <li>
                No single authority controls the network.
                </li>
                <li>
                Transactions are validated by distributed participants (miners or validators).
                </li>
                </ul>
                <li>
                <strong>Transparency:</strong>
                <ul>
                <li>
                All transactions are publicly visible and verifiable.
                </li>
                </ul>
                </li>
                <li>
                <strong>Immutability:</strong>
                <ul>
                <li>
                Data once added cannot be altered or deleted.
                </li>
                </ul>
                </li>
                <li>
                <strong>Open Access:</strong>
                <ul>
                <li>
                Anyone with an internet connection can join the network.
                </li>
                </ul>
                </li>
                </ul>
                </li>
                <li>
                <strong>Consensus Mechanisms:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Proof of Work (PoW): </strong>
                Used by Bitcoin, Ethereum (pre-merge).
                </li>
                <li>
                <strong>Proof of Stake (PoS): </strong>
                Used by Ethereum (post-merge), Solana, and Cardano.
                </li>
                </ul>
                </li>
                <li>
                <strong>Examples:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Bitcoin:</strong>
                Cryptocurrency for decentralized payments.
                </li>
                <li>
                <strong>Ethereum:</strong>
                Platform for decentralized applications (dApps) and smart contracts.
                </li>
                <li>
                <strong>Solana:</strong>
                High-performance blockchain for DeFi and NFTs.
                </li>
                </ul>
                </li>
                <li>
                <strong>Use Cases:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Cryptocurrencies.
                </li>
                <li>
                Decentralized Finance (DeFi).
                </li>
                <li>
                Supply Chain Tracking.
                </li>
                <li>
                Tokenized assets and NFTs.
                </li>
                </ul>
                </li>
                <li>
                <strong>Advantages:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Fully transparent and tless.
                </li>
                <li>
                Highly secure due to decentralization.
                </li>
                <li>
                Community-driven innovation and governance.
                </li>
                </ul>
                </li>
                <li>
                <strong>Disadvantages:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Slower transaction speeds due to consensus mechanisms.
                </li>
                <li>
                Higher energy consumption (e.g., Bitcoin's PoW).
                </li>
                <li>
                Scalability challenges
                </li>
                </ul>
                </li>
            </ol>
          </li>
          <li>
          <strong>
            Private Blockchains
            </strong>
            <ol>
                <li>
                <strong>Definition:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Private blockchains are permissioned networks where only authorized participants can access the system, view transactions, and validate data.
                </li>
                </ul>
                </li>
                <li>
                <strong>Key Features:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Centralized Control:</strong>
                <ul>
                <li>
                Managed by a single organization or a group of entities.
                </li>
                </ul>
                <li>
                <strong>Restricted Access:</strong>
                <ul>
                <li>
                Only authorized nodes can participate.
                </li>
                </ul>
                </li>
                <li>
                <strong>Higher Efficiency:</strong>
                <ul>
                <li>
                Faster transaction speeds due to fewer participants and less complex consensus mechanisms.
                </li>
                </ul>
                </li>
                </ul>
                </li>
                <li>
                <strong>Consensus Mechanisms:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Practical Byzantine Fault Tolerance (PBFT). </strong>
                </li>
                <li>
                <strong>Proof of Authority (PoA): </strong>
                Validators are pre-approved and known.
                </li>
                </ul>
                </li>
                <li>
                <strong>Examples:</strong>
                <ul style="list-style-type:circle;">
                <li>
                <strong>Hyperledger Fabric:</strong>
                Enterprise-focused blockchain for supply chain, finance, and healthcare.
                </li>
                <li>
                <strong>Corda:</strong>
                Blockchain platform optimized for financial institutions.
                </li>
                </ul>
                </li>
                <li>
                <strong>Use Cases:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Enterprise solutions.
                </li>
                <li>
                Supply chain management.
                </li>
                <li>
                Banking and financial systems.
                </li>
                </ul>
                </li>
                <li>
                <strong>Advantages:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Faster and more scalable compared to public blockchains.
                </li>
                <li>
                Greater privacy and control over data.
                </li>
                <li>
                Tailored to specific business needs.
                </li>
                </ul>
                </li>
                <li>
                <strong>Disadvantages:</strong>
                <ul style="list-style-type:circle;">
                <li>
                Centralization reduces tlessness and transparency.
                </li>
                <li>
                Restricted innovation due to limited participation.
                </li>
                <li>
                Less secure compared to public blockchains.
                </li>
                </ul>
                </li>
            </ol>
          </li>
        </ol>

<h1 class="contentHeading">Comparison: Public vs. Private Blockchains</h1>
<table style="width:100%; border-collapse:collapse; margin-top:20px;">
    <tr>
      <th>Aspect</th>
      <th>Public Blockchain</th>
      <th>Private Blockchain</th>
    </tr>
    <tr>
      <td>Accessibility</td>
      <td>Open to anyone</td>
      <td>Restricted to authorized participants</td>
    </tr>
    <tr>
      <td>Decentralization</td>
      <td>Fully decentralized</td>
      <td>Semi-centralized</td>
    </tr>
    <tr>
      <td>Transparency</td>
      <td>Completely transparent</td>
      <td>Partially transparent</td>
    </tr>
    <tr>
      <td>Consensus</td>
      <td>PoW, PoS, etc.</td>
      <td>PoA, PBFT</td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>Relatively slower</td>
      <td>High performance</td>
    </tr>
    <tr>
      <td>Security</td>
      <td>Highly secure</td>
      <td>Secure but less robust</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>Bitcoin, Ethereum</td>
      <td>Hyperledger, Corda</td>
    </tr>
  </table>

`;
