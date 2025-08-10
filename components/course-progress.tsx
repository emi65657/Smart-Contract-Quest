"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Play, Clock, BookOpen } from "lucide-react"

const currentCourses = [
  {
    id: 1,
    title: "Advanced Cairo Development",
    progress: 75,
    nextLesson: "Smart Contract Security",
    timeRemaining: "2h 30m",
    totalLessons: 12,
    completedLessons: 9,
  },
  {
    id: 2,
    title: "DeFi Protocol Design",
    progress: 45,
    nextLesson: "Liquidity Pool Mechanics",
    timeRemaining: "4h 15m",
    totalLessons: 10,
    completedLessons: 4,
  },
]

export function CourseProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <BookOpen className="h-5 w-5 mr-2" />
          Current Courses
        </CardTitle>
        <CardDescription className="text-white">Continue your learning journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">{course.title}</h3>
                <p className="text-sm text-white">
                  {course.completedLessons}/{course.totalLessons} lessons completed
                </p>
              </div>
              <span className="text-sm font-medium text-white">{course.progress}%</span>
            </div>

            <Progress value={course.progress} className="h-2" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center space-x-4 text-sm text-white">
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-1" />
                  Next: {course.nextLesson}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.timeRemaining}
                </div>
              </div>
              <Button size="sm">Continue</Button>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
