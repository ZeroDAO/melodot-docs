---
category: Running node
---

# Running node

## 1. Building Melodot

## Installation

```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
```

## Build

```bash
make build-default
```

# 2. Running a development network

## 1. Run as dev

```bash
make run-dev
```

## 2. Run as local

Start the local blockchain node using the `alice` account by running the following command:

```bash
./target/release/melodot-node \
  --base-path /tmp/alice \
  --chain local \
  --alice \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001
  --validator
```

Start a second local blockchain node using the `bob` account by running the following command:

```bash
./target/release/melodot-node \
  --base-path /tmp/bob \
  --chain local \
  --bob \
  --port 30334 \
  --bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp
  --validator
```