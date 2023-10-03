---
category: Setup
---

# Setup

## Install Rust

```bash
curl https://sh.rustup.rs -sSf | sh
rustup update stable
```

## Install Dependencies

### Mac

```bash
brew install cmake pkg-config openssl git llvm
```

### Linux

```bash
sudo apt install cmake pkg-config libssl-dev git clang libclang-dev
```

::: tip Note

Melodot is developed based on Substrate. For more information, please visit [Substrate](https://docs.substrate.io/install/) 。

:::