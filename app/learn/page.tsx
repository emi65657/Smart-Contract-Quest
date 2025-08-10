import { CourseGrid } from "@/components/course-grid"
import { LearningStats } from "@/components/learning-stats"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Learn & Earn</h1>
        <p className="text-xl text-white mb-6">
          Discover courses, complete milestones, and earn tokens and NFT achievements
        </p>

        <LearningStats />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search courses..." className="pl-10 text-white placeholder-white/70" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <CourseGrid />
    </div>
  )
}
