import { CreateCourseForm } from "@/components/create-course-form"
import { CreatorStats } from "@/components/creator-stats"
import { RecentCourses } from "@/components/recent-courses"

export default function CreatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Create & Monetize</h1>
        <p className="text-xl text-white">Share your knowledge and earn tokens from student engagement</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CreateCourseForm />
        </div>

        <div className="space-y-6">
          <CreatorStats />
          <RecentCourses />
        </div>
      </div>
    </div>
  )
}
