docs.coreConcepts = `
<h1 class="heading">Core Concepts of Blockchain</h1>
<div class="contentText">
<ol style="list-style-type:upper-alpha;">
          <li>
          <strong>
            Decentralization
            </strong>
            <ol>
              <li>
                <strong>
                Definition:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Decentralization removes the need for a central authority, such as banks or governments, to validate and store data.
                </li>
                <li>
                Instead, control and data storage are distributed across a network of nodes (computers).
                </li>
                </ul>
              </li>
              <li>
                <strong>
                How It Works:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Every node in the network maintains a copy of the blockchain.
                </li>
                <li>
                Transactions are validated through consensus mechanisms (e.g., Proof of Work or Proof of Stake).
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Advantages:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Resilience: No single point of failure (unlike centralized systems).
                </li>
                <li>
                Censorship Resistance: No single entity can alter or block transactions.
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Real-World Examples:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Bitcoin: Decentralized peer-to-peer currency.
                </li>
                <li>
                IPFS (InterPlanetary File System): Decentralized file storage.
                </li>
                </ul>
              </li>
              </ol>
          </li>
          <li>
            <strong>
            Immutability
            </strong>
            <ol>
              <li>
                <strong>
                Definition:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Data once added to the blockchain cannot be altered or deleted. Each block contains a cryptographic hash of the previous block, ensuring integrity.
                </li>
                </ul>
              </li>
              <li>
                <strong>
                How It Works:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Blocks are linked together in a chain using cryptographic hashes.
                </li>
                <li>
                If any data in a block is modified, its hash changes, invalidating the entire chain.
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Benefits:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Data Integrity: Ensures a permanent, tamper-proof record of transactions.
                </li>
                <li>
                Auditability: Every transaction can be traced back to its origin.
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Real-World Applications:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Supply Chain: Tracking goods to prevent fraud.
                </li>
                <li>
                Healthcare: Maintaining tamper-proof patient records.
                </li>
                </ul>
              </li>
              </ol>
          </li>
          <li>
            <strong>
            Consensus Mechanisms
            </strong>
            <ol>
              <li>
                <strong>
                Definition:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Consensus mechanisms are protocols used by blockchain networks to agree on the validity of transactions.
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Key Types of Consensus Mechanisms:
                </strong>
                <ul style="list-style-type:circle;">
                <li><strong>
                Proof of Work (PoW):
                </strong>
                <ul style="list-style-type:square;">
                <li>
                Used by Bitcoin and Ethereum (pre-merge).
                </li>
                <li>
                Miners solve complex mathematical problems to validate transactions and create new blocks.
                </li>
                <li>
                Drawbacks: Energy-intensive.
                </li>

                </ul>
                </li>
                <li>
                <strong>
                Proof of Stake (PoS):
                </strong>
                <ul style="list-style-type:square;">
                <li>
                Used by Ethereum (post-merge) and Cardano.
                </li>
                <li>
                Validators are chosen based on the amount of cryptocurrency staked.
                </li>
                <li>
                Benefits: Energy-efficient and faster than PoW.
                </li>

                </ul>
                </li>
                <li>
                <strong>
                Proof of History (PoH):
                </strong>
                <ul style="list-style-type:square;">
                <li>
                Used by Solana.
                </li>
                <li>
                Transactions are time-stamped, reducing validation times.
                </li>
                <li>
                Benefits: High throughput and scalability.
                </li>

                </ul>
                </li>
                <li>
                <strong>
                Delegated Proof of Stake (DPoS):
                </strong>
                <ul style="list-style-type:square;">
                <li>
                Used by EOS and TRON.
                </li>
                <li>
                Stakeholders elect delegates to validate transactions.
                </li>
                <li>
                Benefits: High scalability but less decentralized.
                </li>

                </ul>
                </li>
                <li>
                <strong>
                Practical Byzantine Fault Tolerance (PBFT):
                </strong>
                <ul style="list-style-type:square;">
                <li>
                Used by Hyperledger.
                </li>
                <li>
                Nodes reach consensus even if some nodes are faulty or malicious.
                </li>
                </ul>
                </li>
                </ul>
              </li>
              <li>
                <strong>
                Importance of Consensus Mechanisms:
                </strong>
                <ul style="list-style-type:circle;">
                <li>
                Prevents double-spending.
                </li>
                <li>
                Ensures agreement among distributed participants.
                </li>
                </ul>
              </li>              
              </ol>
          </li>
        </ol>
</div>
`;