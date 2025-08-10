import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Coins, BookOpen } from "lucide-react"

export function LeaderboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="flex items-center p-6">
          <Trophy className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">1,234</div>
            <div className="text-sm text-white">Your Rank</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <Users className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">25,000</div>
            <div className="text-sm text-white">Total Users</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <Coins className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">2.5M</div>
            <div className="text-sm text-white">Tokens Distributed</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <BookOpen className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">10,000</div>
            <div className="text-sm text-white">Courses Available</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
