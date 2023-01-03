# solidity Coverage with ViaIR

Showcase how solidity coverage workaround fails with "stack too deep" while using to use viaIR

## Prerequisites

What things you need to install the software and how to install them

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# Install proper node version
nvm use
```

Create `.env` file (you can base on [`.env.example`](./.env.example))

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```bash
# Install the dependencies
npm install
```

### Compile and Generate Types (VIA_IR=true)

In order to get contract types you can generate those typings when compiling

```bash
npm run compile
```

## Running the tests (VIA_IR=false)

```bash
npm run test
```

## Running the coverage (VIA_IR=true)

```bash
npm run coverage
```
