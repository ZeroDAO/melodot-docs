---
category: Running a Light Client
---

# Running a Light Client

## 1. Introduction

The light client of the Melodot network is currently operational on the development network. Light nodes can obtain block headers of final blocks from the Melodot network via RPC and verify data validity through sampling.

## 2. Operating Mechanism

Melodot light nodes obtain data availability through sampling. They do not need to trust any node, nor do they need to download the entire data set.

Light nodes first obtain the block headers of the latest final blocks from full nodes. Then they construct sample IDs from the metadata in the block headers and sample these random samples in a separate data network, verifying the data through the KZG commitments in the block headers.

## 3. Building

Building from source:
    
```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
make build-light
```

## 4. Execution

Ensure that the Melodot development network is started first, and then run the light node to join the development network:

```bash
make run-light-dev
```

## 5. RPC Interface

### POST /das_blockConfidence

Obtain the confidence level by block hash, which will return the confidence level as parts per million.
    
```bash
curl --data '{"method":"das_blockConfidence",\
"params":["0xc964c3636fdf33bcc4ccc7ad854b32862e02ec50f02a00ba43f0b02c4fbb67e3"],\
"id":1,"jsonrpc":"2.0"}' \
-H "Content-Type: application/json" \
-X POST localhost:4177
```

***Responses***

```json
{"jsonrpc":"2.0","result":937500,"id":1}
```

### POST /das_isAvailable

Obtain whether the data of a block is available by block hash. If it returns null, it means there is no data for that block.
    
```bash
curl --data '{"method":"das_isAvailable",\
"params":["0xc964c3636fdf33bcc4ccc7ad854b32862e02ec50f02a00ba43f0b02c4fbb67e3"],\
"id":1,"jsonrpc":"2.0"}' \
-H "Content-Type: application/json" \
-X POST localhost:4177
```

***Responses***

```json
{"jsonrpc":"2.0","result":false,"id":1}
```