---
category: Node Types
---

# Node Types

Melodot nodes are categorized into three main types: consensus nodes, light clients, and farmer nodes. They work together to maintain the high throughput and security of the Melodot network. Consensus nodes are responsible for consensus, light clients for verification, and farmer nodes for data storage.

## Consensus Nodes

The role of consensus nodes is to handle data transactions and a minimal amount of other necessary transactions, such as transfers. The design principle of consensus nodes is to be light enough that validators undertake as few tasks as possible. This allows them to perform other duties without impacting consensus, thereby enhancing the scalability of the system.

Specifically, consensus nodes are responsible for:
- Processing data transactions
- Reaching consensus and producing blocks
- Handling transactions related to farmer incentives
- Preliminary sampling for data availability
- Handling a minimal amount of other necessary transactions like transfers

It should be noted that consensus nodes are not responsible for the ultimate data availability. Architecturally, validators do not need to be concerned about whether the data is available; they should only care if the data transactions are valid. However, for greater availability, we will introduce another role of data providers in the future to ensure data availability, while consensus nodes will only need to do simple sampling. Additionally, consensus nodes do not actually download and store data; that is the responsibility of farmer nodes.

Looking at a finer granularity, consensus nodes are further divided into validator nodes, full nodes, boot nodes, consensus light nodes, and so on.

## Light Clients

Light clients validate data availability through sampling without needing to trust third parties, including validators. Currently, light clients communicate with consensus nodes via RPC. In the future, we will introduce more communication methods, such as communicating with consensus nodes through a P2P network, and possessing the ability of final blocks, which will greatly enhance the security of light clients by making them not need to trust consensus nodes.

Light clients provide RPC services, which can be used to obtain the data confidence level and availability of each block. We will introduce SDKs in more languages in the future, making it more convenient to integrate light clients into applications.

From the system's perspective, light clients also become data providers while sampling. The scale of the light clients determines the amount of data that can be accommodated in a single block.

## Farmer Nodes

Farmer nodes earn rewards by storing data and provide samples to other sampling nodes through off-chain consensus. Farmer nodes are the backbone of the entire network, enhancing your ability to retrieve data.

It is important to note that farmer nodes do not affect the security of data availability.
