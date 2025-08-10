import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Coins, BookOpen, Award } from "lucide-react"

export function LearningStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="flex items-center p-6">
          <BookOpen className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-sm text-white">Courses Completed</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <Coins className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">1,250</div>
            <div className="text-sm text-white">Tokens Earned</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <Trophy className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-sm text-white">NFT Achievements</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <Award className="h-8 w-8 text-primary mr-3" />
          <div>
            <div className="text-2xl font-bold text-white">Level 5</div>
            <div className="text-sm text-white">Current Level</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
