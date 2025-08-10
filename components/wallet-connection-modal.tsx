"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cpu, ExternalLink, Download } from "lucide-react"

interface WalletOption {
  id: string
  name: string
  icon: string
  description: string
  downloadUrl: string
  isInstalled: boolean
}

interface WalletConnectionModalProps {
  isOpen: boolean
  onClose: () => void
  onConnect: (walletId: string) => void
  isConnecting: boolean
}

export function WalletConnectionModal({ isOpen, onClose, onConnect, isConnecting }: WalletConnectionModalProps) {
  const [wallets, setWallets] = useState<WalletOption[]>([
    {
      id: "argentX",
      name: "Argent X",
      icon: "🦊",
      description: "Most popular Starknet wallet with account abstraction",
      downloadUrl: "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb",
      isInstalled: false,
    },
    {
      id: "braavos",
      name: "Braavos",
      icon: "⚔️",
      description: "Advanced security features and hardware wallet support",
      downloadUrl: "https://chrome.google.com/webstore/detail/braavos-smart-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
      isInstalled: false,
    },
    {
      id: "argentWebWallet",
      name: "Argent Web Wallet",
      icon: "🌐",
      description: "Browser-based wallet with email recovery",
      downloadUrl: "https://web.argent.xyz",
      isInstalled: true,
    },
  ])

  useEffect(() => {
    checkWalletAvailability()
  }, [])

  const checkWalletAvailability = async () => {
    const updatedWallets = wallets.map((wallet) => ({
      ...wallet,
      isInstalled: wallet.id === "argentWebWallet" || !!(window as any)[`starknet_${wallet.id}`],
    }))
    setWallets(updatedWallets)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center text-white">
            <Cpu className="h-5 w-5 mr-2 text-primary" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Choose your preferred Starknet wallet to get started
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {wallets.map((wallet, index) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-primary/20 hover:border-primary/40 transition-all duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{wallet.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{wallet.name}</h3>
                        <p className="text-xs text-white/60">{wallet.description}</p>
                      </div>
                    </div>

                    {wallet.isInstalled ? (
                      <Button
                        onClick={() => onConnect(wallet.id)}
                        disabled={isConnecting}
                        className="bg-primary hover:bg-primary/80"
                      >
                        {isConnecting ? "Connecting..." : "Connect"}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(wallet.downloadUrl, "_blank")}
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Install
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-white text-sm">Secure Connection</h4>
              <p className="text-xs text-white/70 mt-1">
                Your wallet connection is encrypted and secure. We never store your private keys.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
