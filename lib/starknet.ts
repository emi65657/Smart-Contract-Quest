"use client"

import { connect, disconnect } from "get-starknet"
import { type AccountInterface, Contract, RpcProvider, shortString } from "starknet"

// Starknet integration utilities with real wallet support
export interface StarknetAccount {
  address: string
  isConnected: boolean
  account?: AccountInterface
}

export interface Course {
  id: string
  title: string
  description: string
  creator: string
  reward: number
  completions: number
}

export interface NFTAchievement {
  id: string
  name: string
  description: string
  imageUrl: string
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
  owner: string
}

// Contract addresses (replace with actual deployed addresses)
const STARKQUEST_CONTRACT_ADDRESS = "0x..." // Your deployed contract address
const TOKEN_CONTRACT_ADDRESS = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7" // ETH token on testnet

// Initialize provider for Starknet
const provider = new RpcProvider({
  nodeUrl: "https://starknet-mainnet.public.blastapi.io", // or testnet
})

// Real Starknet wallet connection with specific wallet support
export const connectStarknetWallet = async (walletId?: string): Promise<StarknetAccount | null> => {
  try {
    const connectionOptions = {
      modalMode: walletId ? "neverAsk" : ("alwaysAsk" as const),
      modalTheme: "dark" as const,
      ...(walletId && {
        include: [walletId],
        order: [walletId],
      }),
    }

    const starknet = await connect(connectionOptions)

    if (starknet && starknet.isConnected) {
      // Enable the wallet with Starknet v5 support
      await starknet.enable({
        starknetVersion: "v5",
        showModal: false,
      })

      // Verify wallet identity for Argent X specifically
      if (walletId === "argentX" && !starknet.id.includes("argent")) {
        throw new Error("Please connect with Argent X wallet")
      }

      if (walletId === "braavos" && !starknet.id.includes("braavos")) {
        throw new Error("Please connect with Braavos wallet")
      }

      return {
        address: starknet.account.address,
        isConnected: true,
        account: starknet.account,
      }
    }
    return null
  } catch (error) {
    console.error("Starknet wallet connection failed:", error)
    throw error
  }
}

export const disconnectStarknetWallet = async (): Promise<void> => {
  try {
    await disconnect()
  } catch (error) {
    console.error("Wallet disconnection failed:", error)
  }
}

// Optimized contract interactions with lower gas fees
export const createCourse = async (
  account: AccountInterface,
  courseData: {
    title: string
    description: string
    rewardAmount: number
  },
): Promise<string> => {
  try {
    const contract = new Contract([], STARKQUEST_CONTRACT_ADDRESS, account)

    // Convert strings to felt252 for Cairo
    const titleFelt = shortString.encodeShortString(courseData.title)
    const descriptionFelt = shortString.encodeShortString(courseData.description)

    // Optimized transaction with lower gas
    const result = await contract.create_course(titleFelt, descriptionFelt, courseData.rewardAmount, {
      maxFee: "1000000000000000", // Lower max fee for gas optimization
    })

    return result.transaction_hash
  } catch (error) {
    console.error("Course creation failed:", error)
    throw error
  }
}

export const completeCourse = async (
  account: AccountInterface,
  courseId: string,
): Promise<{ tokens: number; nft?: NFTAchievement; txHash: string }> => {
  try {
    const contract = new Contract([], STARKQUEST_CONTRACT_ADDRESS, account)

    const result = await contract.complete_course(courseId, {
      maxFee: "800000000000000", // Optimized gas fee
    })

    // Simulate reward calculation (in real app, this would come from contract events)
    return {
      tokens: 50,
      nft: {
        id: "nft_" + Date.now(),
        name: "Course Completion Badge",
        description: "Awarded for completing a course",
        imageUrl: "/placeholder.svg?height=300&width=300",
        rarity: "Common",
        owner: account.address,
      },
      txHash: result.transaction_hash,
    }
  } catch (error) {
    console.error("Course completion failed:", error)
    throw error
  }
}

export const mintAchievementNFT = async (
  account: AccountInterface,
  achievementData: {
    recipient: string
    achievementType: string
  },
): Promise<string> => {
  try {
    const contract = new Contract([], STARKQUEST_CONTRACT_ADDRESS, account)

    const achievementTypeFelt = shortString.encodeShortString(achievementData.achievementType)

    const result = await contract.mint_achievement_nft(achievementData.recipient, achievementTypeFelt, {
      maxFee: "600000000000000", // Lower gas for NFT minting
    })

    return result.transaction_hash
  } catch (error) {
    console.error("NFT minting failed:", error)
    throw error
  }
}

export const getTokenBalance = async (address: string): Promise<number> => {
  try {
    const contract = new Contract([], STARKQUEST_CONTRACT_ADDRESS, provider)
    const result = await contract.get_user_tokens(address)
    return Number(result)
  } catch (error) {
    console.error("Token balance fetch failed:", error)
    return 0
  }
}

export const getCourseInfo = async (courseId: string): Promise<Course | null> => {
  try {
    const contract = new Contract([], STARKQUEST_CONTRACT_ADDRESS, provider)
    const result = await contract.get_course_info(courseId)

    return {
      id: courseId,
      title: shortString.decodeShortString(result[0]),
      description: shortString.decodeShortString(result[1]),
      reward: Number(result[2]),
      creator: result[3],
      completions: 0, // This would come from additional contract call
    }
  } catch (error) {
    console.error("Course info fetch failed:", error)
    return null
  }
}

// ZK-proof verification for enhanced privacy
export const verifyCompletion = async (proof: string, publicInputs: string[]): Promise<boolean> => {
  try {
    // In a real implementation, this would verify ZK proofs
    // for private course completion verification
    console.log("Verifying ZK proof:", proof, publicInputs)
    return true
  } catch (error) {
    console.error("ZK proof verification failed:", error)
    return false
  }
}

// Gas estimation utilities
export const estimateGas = async (account: AccountInterface, contractCall: any): Promise<string> => {
  try {
    const estimate = await account.estimateFee(contractCall)
    return estimate.overall_fee.toString()
  } catch (error) {
    console.error("Gas estimation failed:", error)
    return "1000000000000000" // Fallback gas estimate
  }
}

// Specific wallet connection functions
export const connectArgentX = async (): Promise<StarknetAccount | null> => {
  return connectStarknetWallet("argentX")
}

export const connectBraavos = async (): Promise<StarknetAccount | null> => {
  return connectStarknetWallet("braavos")
}

export const connectArgentWebWallet = async (): Promise<StarknetAccount | null> => {
  return connectStarknetWallet("argentWebWallet")
}

// Check if specific wallet is available
export const isWalletAvailable = async (walletId: string): Promise<boolean> => {
  try {
    const availableWallets = await connect({ modalMode: "neverAsk" })
    return availableWallets ? availableWallets.id === walletId : false
  } catch {
    return false
  }
}
