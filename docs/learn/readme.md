---
category: What is Melodot
---

# What is Melodot

Melodot is an independent data availability layer, serving as an upgraded version of the original data availability layer and acting as the foundational infrastructure for modular blockchain. Melodot is agnostic to data formats and is compatible with almost all forms of blockchains such as Substrate/EVM/Cosmos. The settlement layer doesn't need to introduce any additional assumptions but relies on efficient sampling to ensure data availability. From its inception, Melodot set out with the following design goals:

### GB-level Data Throughput

Melodot was designed to be a high-throughput data availability layer. Validators don't download the data in its entirety; they ensure its availability through sampling, which significantly boosts throughput. We introduced "farmers" and PoSpace to address the traditional assumptions of the "minimum number of samplers" in data availability layers, enhancing system robustness and further increasing throughput.

### Cryptographically Secure Guarantees

Currently, Melodot uses polynomial commitments to ensure data is correctly encoded. It doesn't require fraud proofs, thus avoiding the introduction of additional security assumptions.

### Distributed Generation and Storage

Melodot adopts distributed generation, allowing validators to operate like light clients. It delegates the task of expanding data column-wise to multiple farmers, effectively increasing the system's throughput and reducing centralization.

Melodot employs the PoSpace incentive mechanism to ensure that farmers store data honestly. It allows consumer-grade personal computers to participate, achieving highly decentralized distributed storage while encouraging farmers to actively engage in data exchange.

### Shard-Friendly

Melodot's validators are extremely lightweight, acting more like a light client in data processing, making it very shard-friendly. In the future, we can effortlessly implement vertical sharding by merely grouping validators randomly. When the number of vertical shards reaches 30, a single block can accommodate a maximum data volume of 15GB.

Melodot doesn't support smart contracts, so there's no "Train Ticket-Hotel" problem, making it very horizontal shard-friendly. After implementing horizontal sharding, the data payload within a block time can theoretically reach PB levels. However, achieving this in practice is challenging, as we'll face new bottlenecks, such as the settlement layer and other participants needing to enter numerous networks for sampling, which will soon hit performance limitations. We'll continuously identify these bottlenecks and seek solutions.
