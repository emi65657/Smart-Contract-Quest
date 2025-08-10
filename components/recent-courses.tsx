import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star } from "lucide-react"

const recentCourses = [
  {
    title: "Cairo Basics",
    students: 245,
    rating: 4.9,
    status: "Published",
  },
  {
    title: "Starknet DApps",
    students: 189,
    rating: 4.7,
    status: "Published",
  },
  {
    title: "Advanced Cairo",
    students: 0,
    rating: 0,
    status: "Draft",
  },
]

export function RecentCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white">Recent Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentCourses.map((course, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium text-white">{course.title}</h4>
              <div className="flex items-center gap-4 text-sm text-white mt-1">
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {course.students}
                </div>
                {course.rating > 0 && (
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                    {course.rating}
                  </div>
                )}
              </div>
            </div>
            <Badge variant={course.status === "Published" ? "default" : "secondary"}>{course.status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
