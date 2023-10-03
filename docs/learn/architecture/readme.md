---
category: How Melodot Works
---

# How Melodot Works

## Data Availability Sampling

In a decoupled data availability layer, it's crucial that any module using it can achieve consensus on data availability at low costs. This requires the data availability layer not to ponder "how secure it is to what extent" but to function "without introducing additional assumptions". Melodot achieves this by encoding data into a 2D matrix and adopting availability sampling. Specifically, data is expanded to double its size in both row and column directions, where any half of any row and column can recover the original data. Thus, successfully sampling a single data block indicates a 75% probability of data availability. Repeated sampling provides sufficient confidence in data availability.

## Polynomial Commitments

Melodot employs polynomial commitments to ensure accurate data encoding. The original data availability layer uses Merkle encoding, relying on a robust full node to acquire all data, generate, and disseminate fraud proofs. We've avoided this, not only because it's less efficient but also since it introduces additional assumptions.

In detail, we generate KZG commitments in the row direction. Data blocks in a specific quantity are encoded into segments, each sharing a common proof. Sampling is also based on these segments for improved efficiency.

Furthermore, our design maintains compatibility and continues to explore alternative cryptographic solutions, keeping up with the latest advancements in areas like STARK, FRI, IPA, etc.

## Minimum Honest Samplers

When there's an insufficient number of honest samplers in the network, data providers may only release part of the data, just enough to give the impression of its availability, and then withhold the rest, making data irrecoverable. This emphasizes the need for a substantial number of honest samplers in the network. Thus, one might argue that system throughput depends on the number of these samplers.

It's challenging to observe and predict the number of samplers for each block. As light clients are more concerned about data relevant to them and, for economic reasons, don't sample blocks they're not interested in, there's a potential significant disparity in the number of samplers across blocks. Hence, the statement "system throughput increases with the number of samplers" must be approached cautiously.

Melodot addresses this by introducing farmers who are incentivized to sample an ample amount of data, store it for a specified duration, and provide bandwidth for the P2P network. We can gauge the number of active farmers from reward distributions, thereby safely determining system throughput.

## Distributed Generation

The original data availability layer required proposers to independently handle expensive polynomial commitments and RS encoding for all data during the proposal phase, demanding high bandwidth and performance. Not only does this deepen system centralization, but it also throttles system throughput.

Melodot, however, sees validators acting more like light clients without the need for hefty encoding. The task of expanding data in the column direction is delegated to different farmers. They first acquire the original commitments from the block header and then expand it to double the size. This is achieved through direct expansion without actual polynomial commitment calculations. Farmers search for the "jackpot" in these data to earn rewards. Once distributed generation is complete, the P2P network should already contain all data blocks after 2D erasure coding. Note that in the worst case, if all farmers go offline, the final sampling will fail, and the data becomes unavailable, ensuring that farmers don't compromise system security.

This distributed generation is vital for system throughput. We've effectively made system throughput scale with the number of farmers without sacrificing decentralization.

## PoSpace

Melodot employs a Chia-style PoSpace to ensure farmers store data honestly. It requires farmers to perform a one-time "P-plate" procedure, committing to a certain hard drive size. Subsequently, farmers can farm on this hard drive for an extended period with minimal resource consumption. This allows consumer-grade PCs to join the network, signifying a highly decentralized incentive mechanism.

In the official version, users can set their data storage duration. Expired data won't earn rewards, prompting farmers to periodically update their data. Users can reliably fetch availability data from the predominantly farmer-based distributed storage. In the final version, we'll introduce adversarial techniques to motivate farmers to participate more in data exchange.
