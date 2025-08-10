import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Coins, BookOpen, Users } from "lucide-react"

const learners = [
  {
    rank: 1,
    name: "Alice Johnson",
    avatar: "/images/profile-avatar.png",
    tokensEarned: 2450,
    coursesCompleted: 18,
    nftsEarned: 12,
    level: "Expert",
  },
  {
    rank: 2,
    name: "Bob Chen",
    avatar: "/images/instructor-1.png",
    tokensEarned: 2200,
    coursesCompleted: 16,
    nftsEarned: 10,
    level: "Advanced",
  },
  {
    rank: 3,
    name: "Carol Davis",
    avatar: "/images/instructor-2.png",
    tokensEarned: 1980,
    coursesCompleted: 15,
    nftsEarned: 9,
    level: "Advanced",
  },
]

const creators = [
  {
    rank: 1,
    name: "Dr. Sarah Wilson",
    avatar: "/images/instructor-2.png",
    tokensEarned: 5200,
    coursesCreated: 8,
    totalStudents: 1250,
    rating: 4.9,
  },
  {
    rank: 2,
    name: "Prof. Mike Rodriguez",
    avatar: "/images/instructor-3.png",
    tokensEarned: 4800,
    coursesCreated: 6,
    totalStudents: 980,
    rating: 4.8,
  },
  {
    rank: 3,
    name: "Alex Thompson",
    avatar: "/images/instructor-1.png",
    tokensEarned: 4200,
    coursesCreated: 7,
    totalStudents: 890,
    rating: 4.7,
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />
    case 3:
      return <Award className="h-5 w-5 text-amber-600" />
    default:
      return <span className="text-lg font-bold text-white">#{rank}</span>
  }
}

interface LeaderboardTableProps {
  type: "learners" | "creators"
}

export function LeaderboardTable({ type }: LeaderboardTableProps) {
  const data = type === "learners" ? learners : creators

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white">
          {type === "learners" ? "Top Learners This Month" : "Top Creators This Month"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8">{getRankIcon(user.rank)}</div>

                <Avatar>
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-semibold text-white">{user.name}</h3>
                  {type === "learners" && "level" in user && <Badge variant="secondary">{user.level}</Badge>}
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center text-primary">
                  <Coins className="h-4 w-4 mr-1" />
                  <span className="font-semibold text-white">{user.tokensEarned}</span>
                </div>

                {type === "learners" && "coursesCompleted" in user && (
                  <>
                    <div className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span className="text-white">{user.coursesCompleted}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-white">{user.nftsEarned}</span>
                    </div>
                  </>
                )}

                {type === "creators" && "coursesCreated" in user && (
                  <>
                    <div className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span className="text-white">{user.coursesCreated}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-white">{user.totalStudents}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
