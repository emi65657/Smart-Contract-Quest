"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Zap, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { connect, disconnect } from "get-starknet"
import type { AccountInterface } from "starknet"
import { WalletConnectionModal } from "./wallet-connection-modal"
import { UserProfileDropdown } from "./user-profile-dropdown"

interface User {
  address: string
  balance: number
  avatar?: string
  username?: string
}

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<AccountInterface | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shouldPulse, setShouldPulse] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    checkConnection()
  }, [])

  useEffect(() => {
    // Stop pulsing after 10 seconds or when connected
    const timer = setTimeout(() => {
      setShouldPulse(false)
    }, 10000)

    if (isConnected) {
      setShouldPulse(false)
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [isConnected])

  const checkConnection = async () => {
    try {
      const starknet = await connect({ silent: true })
      if (starknet?.isConnected) {
        setAccount(starknet.account)
        const balance = await fetchUserBalance(starknet.account.address)
        setUser({
          address: starknet.account.address,
          balance,
          username: `User${starknet.account.address.slice(-4)}`,
        })
        setIsConnected(true)
        setShouldPulse(false)
      }
    } catch (error) {
      console.log("No existing connection")
    }
  }

  const fetchUserBalance = async (address: string): Promise<number> => {
    // Simulate fetching balance from contract
    // In real implementation, this would call the smart contract
    try {
      // Mock balance for demo - replace with actual contract call
      return Math.floor(Math.random() * 5000) + 1000
    } catch (error) {
      console.error("Failed to fetch balance:", error)
      return 0
    }
  }

  const connectWallet = async (walletId: string) => {
    setIsConnecting(true)

    try {
      const starknet = await connect({
        modalMode: "neverAsk",
        modalTheme: "dark",
        include: [walletId],
        exclude: [],
        order: [walletId],
      })

      if (starknet && starknet.isConnected) {
        await starknet.enable({ starknetVersion: "v5" })

        setAccount(starknet.account)
        const balance = await fetchUserBalance(starknet.account.address)
        setUser({
          address: starknet.account.address,
          balance,
          username: `User${starknet.account.address.slice(-4)}`,
        })
        setIsConnected(true)
        setShowModal(false)
        setShouldPulse(false)

        toast({
          title: "🎉 Wallet Connected!",
          description: `Successfully connected to Starknet with ${balance.toLocaleString()} tokens`,
        })
      } else {
        throw new Error("Wallet not available or connection failed")
      }
    } catch (error) {
      console.error("Connection error:", error)
      toast({
        title: "Connection Failed",
        description: "Please make sure your wallet is installed and unlocked.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      await disconnect()
      setIsConnected(false)
      setAccount(null)
      setUser(null)
      setShouldPulse(true)

      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been safely disconnected.",
      })
    } catch (error) {
      console.error("Disconnect error:", error)
    }
  }

  if (isConnected && user) {
    return <UserProfileDropdown user={user} onDisconnect={disconnectWallet} />
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            boxShadow: shouldPulse
              ? ["0 0 0 0 rgba(0, 212, 255, 0.7)", "0 0 0 10px rgba(0, 212, 255, 0)", "0 0 0 20px rgba(0, 212, 255, 0)"]
              : "0 0 0 0 rgba(0, 212, 255, 0)",
          }}
          transition={{
            duration: 0.2,
            boxShadow: {
              duration: 2,
              repeat: shouldPulse ? Number.POSITIVE_INFINITY : 0,
              ease: "easeOut",
            },
          }}
        >
          <Button
            onClick={() => setShowModal(true)}
            disabled={isConnecting}
            className="relative overflow-hidden bg-primary hover:bg-primary/80 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>CONNECTING...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 relative z-10">
                <Wallet className="h-4 w-4" />
                <span>CONNECT WALLET</span>
                <Zap className="h-4 w-4" />
              </div>
            )}

            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </Button>
        </motion.div>
      </AnimatePresence>

      <WalletConnectionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConnect={connectWallet}
        isConnecting={isConnecting}
      />
    </>
  )
}
