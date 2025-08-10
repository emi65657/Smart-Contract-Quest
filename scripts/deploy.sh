#!/bin/bash

echo "🚀 Deploying StarkQuest to Starknet..."

# Set environment variables
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/account.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/keystore.json
export STARKNET_RPC=https://starknet-testnet.public.blastapi.io

# Deploy StarkQuest contract
echo "📤 Deploying StarkQuest contract..."

DEPLOYMENT_RESULT=$(starkli deploy \
    target/dev/starkquest_StarkQuest.contract_class.json \
    0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 \
    0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 \
    --rpc $STARKNET_RPC \
    --account $STARKNET_ACCOUNT \
    --keystore $STARKNET_KEYSTORE)

if [ $? -eq 0 ]; then
    CONTRACT_ADDRESS=$(echo $DEPLOYMENT_RESULT | grep -o '0x[0-9a-fA-F]*' | head -1)
    echo "✅ StarkQuest deployed successfully!"
    echo "📍 Contract Address: $CONTRACT_ADDRESS"
    
    # Save contract address
    echo $CONTRACT_ADDRESS > deployed_address.txt
    
    # Verify deployment
    echo "🔍 Verifying deployment..."
    starkli call $CONTRACT_ADDRESS get_course_info 1 \
        --rpc $STARKNET_RPC
        
else
    echo "❌ Deployment failed!"
    exit 1
fi
