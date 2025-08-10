"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, CheckCircle, XCircle } from "lucide-react"

interface WalletStatus {
  id: string
  name: string
  isInstalled: boolean
  downloadUrl: string
  icon: string
}

const starknetWallets: WalletStatus[] = [
  {
    id: "argentX",
    name: "Argent X",
    isInstalled: false,
    downloadUrl: "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb",
    icon: "🦊",
  },
  {
    id: "braavos",
    name: "Braavos",
    isInstalled: false,
    downloadUrl: "https://chrome.google.com/webstore/detail/braavos-smart-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma",
    icon: "⚔️",
  },
  {
    id: "argentWebWallet",
    name: "Argent Web Wallet",
    isInstalled: false,
    downloadUrl: "https://web.argent.xyz",
    icon: "🌐",
  },
]

export function WalletDetector() {
  const [wallets, setWallets] = useState<WalletStatus[]>(starknetWallets)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    checkWalletAvailability()
  }, [])

  const checkWalletAvailability = async () => {
    setIsChecking(true)

    const updatedWallets = await Promise.all(
      wallets.map(async (wallet) => {
        try {
          // Check if wallet extension is available
          const isInstalled = await checkWalletInstalled(wallet.id)
          return { ...wallet, isInstalled }
        } catch {
          return { ...wallet, isInstalled: false }
        }
      }),
    )

    setWallets(updatedWallets)
    setIsChecking(false)
  }

  const checkWalletInstalled = async (walletId: string): Promise<boolean> => {
    // Check for Argent X
    if (walletId === "argentX") {
      return typeof window !== "undefined" && !!(window as any).starknet_argentX
    }

    // Check for Braavos
    if (walletId === "braavos") {
      return typeof window !== "undefined" && !!(window as any).starknet_braavos
    }

    // Argent Web Wallet is always "available" as it's web-based
    if (walletId === "argentWebWallet") {
      return true
    }

    return false
  }

  const installedCount = wallets.filter((w) => w.isInstalled).length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Starknet Wallets
          <Badge variant={installedCount > 0 ? "default" : "secondary"}>
            {installedCount}/{wallets.length} Available
          </Badge>
        </CardTitle>
        <CardDescription>Install Starknet wallets to connect and start earning</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {isChecking ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-sm text-muted-foreground mt-2">Checking wallet availability...</p>
          </div>
        ) : (
          wallets.map((wallet, index) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 border rounded-lg ${
                wallet.isInstalled ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{wallet.icon}</div>
                <div>
                  <h3 className="font-semibold flex items-center">
                    {wallet.name}
                    {wallet.isInstalled ? (
                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500 ml-2" />
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {wallet.isInstalled ? "Ready to connect" : "Not installed"}
                  </p>
                </div>
              </div>

              {!wallet.isInstalled && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(wallet.downloadUrl, "_blank")}
                  className="flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Install</span>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              )}
            </motion.div>
          ))
        )}

        <div className="pt-4 border-t">
          <Button variant="ghost" onClick={checkWalletAvailability} className="w-full" disabled={isChecking}>
            {isChecking ? "Checking..." : "Refresh Wallet Status"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
