#!/bin/bash

echo "🚀 Setting up StarkQuest deployment environment..."

# Check if tools are installed
if ! command -v scarb &> /dev/null; then
    echo "❌ Scarb not found. Installing..."
    curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
fi

if ! command -v starkli &> /dev/null; then
    echo "❌ Starkli not found. Installing..."
    curl https://get.starkli.sh | sh
    starkliup
fi

if ! command -v katana &> /dev/null; then
    echo "❌ Katana not found. Installing..."
    curl -L https://install.dojoengine.org | bash
    dojoup
fi

echo "✅ All tools installed successfully!"

# Create account if it doesn't exist
if [ ! -f ~/.starkli-wallets/deployer/account.json ]; then
    echo "🔑 Creating deployment account..."
    
    # Create keystore
    starkli signer keystore new ~/.starkli-wallets/deployer/keystore.json
    
    # Create account descriptor
    starkli account oz init ~/.starkli-wallets/deployer/account.json \
        --keystore ~/.starkli-wallets/deployer/keystore.json \
        --rpc https://starknet-testnet.public.blastapi.io
    
    # Deploy account
    starkli account deploy ~/.starkli-wallets/deployer/account.json \
        --keystore ~/.starkli-wallets/deployer/keystore.json \
        --rpc https://starknet-testnet.public.blastapi.io
fi

echo "✅ Setup complete! Ready for deployment."
