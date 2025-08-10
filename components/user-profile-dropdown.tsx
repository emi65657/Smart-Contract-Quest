"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Settings, Wallet, LogOut, Trophy, Coins, ChevronDown } from "lucide-react"
import Link from "next/link"

interface UserProfileDropdownProps {
  user: {
    address: string
    balance: number
    avatar?: string
    username?: string
  }
  onDisconnect: () => void
}

export function UserProfileDropdown({ user, onDisconnect }: UserProfileDropdownProps) {
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const formatBalance = (balance: number) => {
    return balance.toLocaleString()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-3 p-2 h-auto bg-black/20 border border-primary/20 hover:bg-primary/10"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt="Profile" />
            <AvatarFallback className="bg-primary/20 text-primary text-xs">
              {user.username ? user.username.slice(0, 2).toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-xs text-white font-medium">{user.username || formatAddress(user.address)}</span>
            <div className="flex items-center space-x-1">
              <Coins className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary font-semibold">{formatBalance(user.balance)}</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-white/60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 bg-black/95 border-primary/20">
        <div className="p-3 border-b border-primary/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt="Profile" />
              <AvatarFallback className="bg-primary/20 text-primary">
                {user.username ? user.username.slice(0, 2).toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-white">{user.username || "Anonymous User"}</p>
              <p className="text-xs text-white/60 font-mono">{formatAddress(user.address)}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                  <Coins className="h-3 w-3 mr-1" />
                  {formatBalance(user.balance)} tokens
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
          <Link href="/profile" className="flex items-center text-white">
            <User className="h-4 w-4 mr-2" />
            View Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
          <Link href="/dashboard" className="flex items-center text-white">
            <Trophy className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
          <Link href="/wallets" className="flex items-center text-white">
            <Wallet className="h-4 w-4 mr-2" />
            Wallet Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
          <Link href="/settings" className="flex items-center text-white">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-primary/20" />

        <DropdownMenuItem
          onClick={onDisconnect}
          className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-500/10"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
