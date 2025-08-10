#!/bin/bash

echo "🔗 Interacting with deployed StarkQuest contract..."

# Load contract address
if [ -f deployed_address.txt ]; then
    CONTRACT_ADDRESS=$(cat deployed_address.txt)
    echo "📍 Using contract at: $CONTRACT_ADDRESS"
else
    echo "❌ No deployed contract found. Run deploy.sh first."
    exit 1
fi

# Set environment variables
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/account.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/keystore.json
export STARKNET_RPC=https://starknet-testnet.public.blastapi.io

echo "🎓 Creating a test course..."

# Create course
starkli invoke $CONTRACT_ADDRESS create_course \
    0x48656c6c6f20576f726c64 \
    0x4d7920666972737420636f75727365 \
    50 \
    --rpc $STARKNET_RPC \
    --account $STARKNET_ACCOUNT \
    --keystore $STARKNET_KEYSTORE

echo "📚 Getting course info..."

# Get course info
starkli call $CONTRACT_ADDRESS get_course_info 1 \
    --rpc $STARKNET_RPC

echo "💰 Checking token balance..."

# Get user tokens
USER_ADDRESS=$(starkli account address $STARKNET_ACCOUNT)
starkli call $CONTRACT_ADDRESS get_user_tokens $USER_ADDRESS \
    --rpc $STARKNET_RPC
