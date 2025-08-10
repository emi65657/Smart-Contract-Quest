"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Bell, Trophy, Coins, BookOpen, Users } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "achievement",
    title: "New Achievement Unlocked!",
    message: "You've earned the Cairo Master badge",
    time: "2 min ago",
    icon: Trophy,
    unread: true,
  },
  {
    id: 2,
    type: "tokens",
    title: "Tokens Earned",
    message: "You received 50 tokens for completing a lesson",
    time: "1 hour ago",
    icon: Coins,
    unread: true,
  },
  {
    id: 3,
    type: "course",
    title: "New Course Available",
    message: "Advanced Starknet Development is now live",
    time: "3 hours ago",
    icon: BookOpen,
    unread: false,
  },
  {
    id: 4,
    type: "social",
    title: "Study Group Invitation",
    message: "You've been invited to join Cairo Developers",
    time: "1 day ago",
    icon: Users,
    unread: false,
  },
]

export function NotificationCenter() {
  const [unreadCount, setUnreadCount] = useState(notifications.filter((n) => n.unread).length)

  const markAsRead = (id: number) => {
    // In a real app, this would update the backend
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative bg-transparent">
          <Bell className="h-4 w-4" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2"
              >
                <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {unreadCount}
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-white">Notifications</h3>
          <p className="text-sm text-white">{unreadCount} unread notifications</p>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="p-4 cursor-pointer hover:bg-muted/50"
              onClick={() => notification.unread && markAsRead(notification.id)}
            >
              <div className="flex items-start space-x-3 w-full">
                <div className={`p-2 rounded-full ${notification.unread ? "bg-primary/10" : "bg-muted"}`}>
                  <notification.icon
                    className={`h-4 w-4 ${notification.unread ? "text-primary" : "text-muted-foreground"}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium text-sm text-white`}>{notification.title}</p>
                    {notification.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
                  </div>
                  <p className="text-xs text-white mt-1">{notification.message}</p>
                  <p className="text-xs text-white mt-1">{notification.time}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>

        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full text-sm text-white">
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
