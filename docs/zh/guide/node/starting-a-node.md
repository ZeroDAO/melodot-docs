---
category: 运行节点
---

# 运行 Melodot 节点

## 1. 编译 Melodot

## Installation

```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
make init
```

## Build

```bash
make build-release
```

# 2. 运行开发网络

## 1. Run as dev

```bash
make run-dev
```

## 2. Run as local

Start the local blockchain node using the `alice` account by running the following command:

```bash
./target/release/melodot \
  --base-path /tmp/alice \
  --chain local \
  --alice \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001
  --validator
```

Start a second local blockchain node using the `bob` account by running the following command:

```bash
./target/release/melodot \
  --base-path /tmp/bob \
  --chain local \
  --bob \
  --port 30334 \
  --bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp
  --validator
```