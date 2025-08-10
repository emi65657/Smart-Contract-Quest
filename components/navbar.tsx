"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Moon, Sun, Search } from "lucide-react"
import { ConnectWallet } from "@/components/connect-wallet"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black border-b border-primary/20"
      style={{ backgroundColor: "rgb(0, 0, 0)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* NEXUS OS style logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-2 rounded-lg bg-primary/20 border border-primary/30"
            >
              <Zap className="h-5 w-5 text-primary" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">STARKQUEST</span>
              <span className="text-xs text-white -mt-1">Learning OS</span>
            </div>
          </Link>

          {/* NEXUS OS style search bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses, creators..."
                className="w-full pl-10 pr-4 py-2 bg-white/90 rounded-lg border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-black placeholder-black/60"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: "/learn", label: "Learn" },
              { href: "/create", label: "Create" },
              { href: "/marketplace", label: "Marketplace" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/leaderboard", label: "Leaderboard" },
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-white hover:text-primary transition-all duration-200 font-medium hover:bg-primary/10"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-primary/20">
              {/* NEXUS OS style theme toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="bg-primary/10 rounded-lg hover:bg-primary/20 border border-primary/20"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-primary" />
                    ) : (
                      <Moon className="h-5 w-5 text-primary" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {/* Live indicator */}
              <div className="flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-medium text-primary">LIVE</span>
              </div>

              <ConnectWallet />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="bg-primary/10 rounded-lg hover:bg-primary/20 border border-primary/20"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary/10 rounded-lg hover:bg-primary/20 border border-primary/20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-2 border-t border-primary/20"
            >
              {/* Mobile search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-white/90 rounded-lg border border-primary/20 focus:border-primary/50 focus:outline-none text-sm text-black placeholder-black/60"
                />
              </div>

              {[
                { href: "/learn", label: "Learn" },
                { href: "/create", label: "Create" },
                { href: "/marketplace", label: "Marketplace" },
                { href: "/dashboard", label: "Dashboard" },
                { href: "/leaderboard", label: "Leaderboard" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-white hover:text-primary transition-all duration-200 font-medium hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <ConnectWallet />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
