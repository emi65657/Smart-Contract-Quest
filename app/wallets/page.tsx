"use client"

import { motion } from "framer-motion"
import { WalletDetector } from "@/components/wallet-detector"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Lock, Smartphone } from "lucide-react"

export default function WalletsPage() {
  const walletFeatures = [
    {
      icon: Shield,
      title: "Secure by Design",
      description: "All Starknet wallets use advanced cryptography to keep your assets safe",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience near-instant transactions with minimal fees on Starknet",
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "You own your private keys and have full control over your assets",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      description: "Available on desktop, mobile, and web for seamless access",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Starknet Wallets</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your preferred Starknet wallet to start learning and earning on StarkQuest
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <WalletDetector />

          <Card>
            <CardHeader>
              <CardTitle>Why Use Starknet Wallets?</CardTitle>
              <CardDescription>
                Starknet wallets provide the best experience for interacting with our platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {walletFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Wallet Comparison</CardTitle>
            <CardDescription>Choose the wallet that best fits your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Wallet</th>
                    <th className="text-left p-4">Type</th>
                    <th className="text-left p-4">Features</th>
                    <th className="text-left p-4">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🦊</span>
                        <span className="font-semibold">Argent X</span>
                      </div>
                    </td>
                    <td className="p-4">Browser Extension</td>
                    <td className="p-4">Account Abstraction, Social Recovery</td>
                    <td className="p-4">Beginners & Power Users</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">⚔️</span>
                        <span className="font-semibold">Braavos</span>
                      </div>
                    </td>
                    <td className="p-4">Browser Extension</td>
                    <td className="p-4">Hardware Wallet Support, Multi-sig</td>
                    <td className="p-4">Security-Focused Users</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🌐</span>
                        <span className="font-semibold">Argent Web</span>
                      </div>
                    </td>
                    <td className="p-4">Web Application</td>
                    <td className="p-4">No Installation, Email Recovery</td>
                    <td className="p-4">Quick Access Users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
