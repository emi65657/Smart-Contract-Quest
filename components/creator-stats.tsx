import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Users, BookOpen, TrendingUp } from "lucide-react"

export function CreatorStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white">Your Creator Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Coins className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-white">Total Earnings</span>
          </div>
          <span className="font-semibold">2,450 tokens</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-white">Total Students</span>
          </div>
          <span className="font-semibold">1,234</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-white">Courses Created</span>
          </div>
          <span className="font-semibold">8</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-white">Avg. Rating</span>
          </div>
          <span className="font-semibold">4.8/5</span>
        </div>
      </CardContent>
    </Card>
  )
}
