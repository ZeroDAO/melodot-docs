---
category: 运行农民客户端
---

# 运行农民客户端

## 1. Introduction

Melodot 的农民客户端承担了分布式生成和存储数据的任务，它们通过诚实地生成和存储数据获得奖励。目前的版本是一个简化的 PoC 版本，它演示了
PoSpace 在 Melodot 网络中的工作原理。

## 2. 编译

从源码构建
    
```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
make build-farmer
```

## 3. 运行

首先确保已启动了 Melodot 开发网络，然后你可以通过一下命名启动农民客户端。

```bash
make run-farmer
```
