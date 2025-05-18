docs.layers = `
<h1 class="heading">Layer 1 vs. Layer 2 Blockchains</h1>

<ol style="list-style-type:upper-alpha;">
  <li>
    <strong>Layer 1 Blockchains</strong>
    <ol>
      <li>
        <strong>Definition:</strong>
        <ul style="list-style-type:circle;">
          <li>
            Layer 1 refers to the base blockchain protocol that processes transactions and ensures security. These are the foundational blockchains like Ethereum, Bitcoin, and Solana.
          </li>
        </ul>
      </li>

      <li>
        <strong>Key Features:</strong>
        <ul style="list-style-type:circle;">
          <li>Directly processes and validates transactions.</li>
          <li>Manages consensus, smart contracts, and token issuance.</li>
        </ul>
      </li>

      <li>
        <strong>Challenges:</strong>
        <ul style="list-style-type:circle;">
          <li>Scalability: Limited throughput (transactions per second, or TPS).</li>
          <li>High transaction costs, especially during network congestion (e.g., Ethereum gas fees).</li>
        </ul>
      </li>

      <li>
        <strong>Examples:</strong>
        <ul style="list-style-type:circle;">
          <li>
            <strong>Ethereum:</strong>
            <ul>
              <li>Consensus: PoS (previously PoW).</li>
              <li>Smart contracts and decentralized applications (dApps).</li>
            </ul>
          </li>
          <li>
            <strong>Solana:</strong>
            <ul>
              <li>Consensus: Proof of History (PoH) combined with PoS.</li>
              <li>High throughput (65,000 TPS) and low fees.</li>
            </ul>
          </li>
          <li>
            <strong>Bitcoin:</strong>
            <ul>
              <li>Primary use: Peer-to-peer digital currency.</li>
              <li>Limited programmability compared to Ethereum.</li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <strong>Advantages:</strong>
        <ul style="list-style-type:circle;">
          <li>Strong decentralization and security.</li>
          <li>Fully independent ecosystems.</li>
          <li>Broad developer and community support.</li>
        </ul>
      </li>

      <li>
        <strong>Disadvantages:</strong>
        <ul style="list-style-type:circle;">
          <li>Scalability limitations.</li>
          <li>High resource consumption in some cases (e.g., Bitcoin’s PoW).</li>
        </ul>
      </li>
    </ol>
  </li>
  <li>
    <strong>Layer 2 Blockchains</strong>
    <ol>
      <li>
        <strong>Definition:</strong>
        <ul style="list-style-type:circle;">
          <li>Layer 2 refers to protocols built on top of Layer 1 blockchains to enhance their scalability and efficiency. They process transactions off-chain and settle them on the Layer 1 blockchain.</li>
        </ul>
      </li>

      <li>
        <strong>Key Features:</strong>
        <ul style="list-style-type:circle;">
          <li>Off-chain processing reduces Layer 1 congestion.</li>
          <li>Faster transaction speeds and lower costs.</li>
        </ul>
      </li>

      <li>
        <strong>Techniques Used in Layer 2:</strong>
        <ul style="list-style-type:circle;">
          <li>State Channels:</li>
          <ul>
            <li>Off-chain transactions are conducted, and only the final state is recorded on the blockchain.</li>
            <li>Example: Lightning Network (Bitcoin).</li>
          </ul>
          <li>Rollups:</li>
          <ul>
            <li>Transactions are bundled and processed off-chain, with proofs submitted to Layer 1.</li>
            <li>Types: Optimistic Rollups (e.g., Optimism) and Zero-Knowledge Rollups (e.g., zkSync).</li>
          </ul>
          <li>Sidechains:</li>
          <ul>
            <li>Independent chains connected to Layer 1, offering faster and cheaper processing.</li>
            <li>Example: Polygon.</li>
          </ul>
        </ul>
      </li>

      <li>
        <strong>Examples:</strong>
        <ul style="list-style-type:circle;">
          <li><strong>Polygon:</strong>
          <ul>
            <li>A Layer 2 solution for Ethereum, providing scalable infrastructure.</li>
            <li>Uses sidechains and supports EVM compatibility.</li>
          </ul>
          </li>
          <li><strong>Arbitrum:</strong>
          <ul>
            <li>An Optimistic Rollup solution for Ethereum.</li>
            <li>Reduces gas costs and increases transaction throughput.</li>
          </ul>
          </li>
          <li><strong>Lightning Network:</strong>
          <ul>
            <li>A state channel implementation for Bitcoin, enabling microtransactions.</li>
          </li>
        </ul>
      </li>

      <li>
        <strong>Advantages:</strong>
        <ul style="list-style-type:circle;">
          <li>Enhances scalability of Layer 1 blockchains.</li>
          <li>Reduces transaction fees.</li>
          <li>Preserves Layer 1 security through periodic settlement.</li>
        </ul>
      </li>

      <li>
        <strong>Disadvantages:</strong>
        <ul style="list-style-type:circle;">
          <li>Additional complexity in integration.</li>
          <li>Dependency on Layer 1 for security.</li>
        </ul>
      </li>

    </ol>
  </li>
</ol>

<h1 class="contentHeading">Comparison: Public vs. Private Blockchains</h1>

<table style="width:100%; border-collapse:collapse; margin-top:20px;">
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Layer 1</th>
      <th>Layer 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Functionality</td>
      <td>Base blockchain protocol</td>
      <td>Scaling solution built on Layer 1</td>
    </tr>
    <tr>
      <td>Transaction Speed</td>
      <td>Slower</td>
      <td>Faster</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Higher</td>
      <td>Lower</td>
    </tr>
    <tr>
      <td>Security</td>
      <td>Native security</td>
      <td>Relies on Layer 1 for security</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>Bitcoin, Ethereum, Solana</td>
      <td>Polygon, Arbitrum, Lightning Network</td>
    </tr>
  </tbody>
</table>
<h1 class="contentHeading" style="margin-top: 20px;">Conclusion</h1>
<ul style="list-style-type:circle;">
<li>
<strong>
Public vs. Private Blockchains:</strong> Public blockchains prioritize decentralization and transparency, while private blockchains focus on efficiency and controlled access for enterprise use cases.
</li>
<li>
<strong>Layer 1 vs. Layer 2 Blockchains:</strong> Layer 1 serves as the foundation for decentralized ecosystems, and Layer 2 enhances scalability and reduces costs without compromising security.
</li>
</ul>
`;