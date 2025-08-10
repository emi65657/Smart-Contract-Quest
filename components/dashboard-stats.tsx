"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Coins, Trophy, TrendingUp, Users, Star } from "lucide-react"

const stats = [
  {
    title: "Courses Completed",
    value: "12",
    change: "+2 this week",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Tokens Earned",
    value: "1,950",
    change: "+150 this week",
    icon: Coins,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "NFT Achievements",
    value: "8",
    change: "+1 this week",
    icon: Trophy,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Learning Streak",
    value: "15 days",
    change: "Personal best!",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Study Hours",
    value: "47h",
    change: "+8h this week",
    icon: Star,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Rank",
    value: "#234",
    change: "↑12 positions",
    icon: Users,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className={`inline-flex p-2 rounded-lg ${stat.bgColor} mb-3`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white">{stat.title}</p>
                <p className="text-xs text-green-400">{stat.change}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
