import { LeaderboardTable } from "@/components/leaderboard-table"
import { LeaderboardStats } from "@/components/leaderboard-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Leaderboard</h1>
        <p className="text-xl text-white">See how you rank among learners and creators in the StarkQuest community</p>
      </div>

      <LeaderboardStats />

      <Tabs defaultValue="learners" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="learners">Top Learners</TabsTrigger>
          <TabsTrigger value="creators">Top Creators</TabsTrigger>
        </TabsList>

        <TabsContent value="learners">
          <LeaderboardTable type="learners" />
        </TabsContent>

        <TabsContent value="creators">
          <LeaderboardTable type="creators" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
