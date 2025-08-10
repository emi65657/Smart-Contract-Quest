"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Coins, BookOpen, Users } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "achievement",
    title: "Earned Cairo Master Badge",
    description: "Completed Advanced Cairo Development course",
    time: "2 hours ago",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    id: 2,
    type: "tokens",
    title: "Earned 50 tokens",
    description: "Completed Smart Contract Security lesson",
    time: "5 hours ago",
    icon: Coins,
    color: "text-green-500",
  },
  {
    id: 3,
    type: "course",
    title: "Started new course",
    description: "DeFi Protocol Design",
    time: "1 day ago",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    id: 4,
    type: "social",
    title: "Joined study group",
    description: "Starknet Developers Community",
    time: "2 days ago",
    icon: Users,
    color: "text-purple-500",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <CardDescription className="text-white">Your latest achievements and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white">{activity.title}</p>
                <p className="text-sm text-white">{activity.description}</p>
                <p className="text-xs text-white mt-1">{activity.time}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {activity.type}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
