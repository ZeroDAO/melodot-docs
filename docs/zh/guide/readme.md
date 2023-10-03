---
category: 环境配置
---

# 环境配置

### 安装 Rust

```bash
curl https://sh.rustup.rs -sSf | sh
rustup update stable
```

### 安装依赖

#### Mac

```bash
brew install cmake pkg-config openssl git llvm
```

#### Linux

```bash
sudo apt install cmake pkg-config libssl-dev git clang libclang-dev
```

::: tip 更多

Melodot 基于 Substrate 开发，了解更多请至 [Substrate](https://docs.substrate.io/install/) 。

:::