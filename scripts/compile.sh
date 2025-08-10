#!/bin/bash

echo "🔨 Compiling StarkQuest contracts..."

# Clean previous builds
scarb clean

# Build contracts
scarb build

if [ $? -eq 0 ]; then
    echo "✅ Compilation successful!"
    echo "📁 Artifacts saved to target/dev/"
    
    # List generated files
    ls -la target/dev/
else
    echo "❌ Compilation failed!"
    exit 1
fi
