---
category: 运行轻节点
---

# 运行轻节点

## 1. Introduction

Melodot 网络的轻客户端，目前可在开发网络中运行，轻节点可以通过 RPC 与 Melodot 网络获取终结区块的区块头，并通过抽样验证数据有效性。

## 2. 运行机制

Melodot 轻节点通过抽样来获取数据可用性，它无需信任任何节点，也不需要下载整个数据。

轻节点首先会通过全节点获取最新的终结区块的区块头，然后通过区块头中的元数据来构建样本 ID ，随后在单独的数据网络中抽样这些随机样本，
并通过区块头中的 KZG 承诺验证数据。

## 3. 编译

从源码构建
    
```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
make build-light
```

## 4. 运行

首先确保已启动了 Melodot 开发网络，然后运行轻节点加入开发网络中

```bash
make run-light-dev
```

## 5. RPC 接口

### POST /das_blockConfidence

通过区块hash获取置信度, 将返回以百万分之一为单位的置信度。
    
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

通过区块hash获取该区块的数据是否可用，如果返回 null 表示没有该区块的数据。
    
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