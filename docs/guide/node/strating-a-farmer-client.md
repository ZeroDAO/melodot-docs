---
category: Running the Farmer Client
---

# Running the Farmer Client

## 1. Introduction

The farmer client in Melodot undertakes the task of distributed generation and storage of data, earning rewards through the honest generation and storage of data. The current version is a simplified Proof of Concept (PoC) version, demonstrating the workings of Proof of Space (PoSpace) within the Melodot network.

## 2. Compilation

Building from source
    
```bash
git clone git@github.com:ZeroDAO/melodot.git
cd melodot
make build-farmer
```

## 3. Running

First, make sure that the Melodot development network is up and running, then you can start the farmer client with the following command.

```bash
make run-farmer
```
