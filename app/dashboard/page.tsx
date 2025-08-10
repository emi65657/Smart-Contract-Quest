"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, Users, Play, Clock, Award, Target, Zap } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { CourseProgress } from "@/components/course-progress"
import { AchievementGrid } from "@/components/achievement-grid"
import { NotificationCenter } from "@/components/notification-center"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">Dashboard</h1>
            <p className="text-xl text-white">Track your learning progress and earnings</p>
          </div>
          <NotificationCenter />
        </div>

        <DashboardStats />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <CourseProgress />
                <RecentActivity />
              </div>
              <div className="space-y-6">
                <QuickActions />
                <WeeklyGoals />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-6">
            <EnrolledCourses />
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <AchievementGrid />
          </TabsContent>

          <TabsContent value="earnings" className="mt-6">
            <EarningsOverview />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Zap className="h-5 w-5 mr-2" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start bg-transparent text-white" variant="outline">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse New Courses
        </Button>
        <Button className="w-full justify-start bg-transparent text-white" variant="outline">
          <Trophy className="h-4 w-4 mr-2" />
          View Achievements
        </Button>
        <Button className="w-full justify-start bg-transparent text-white" variant="outline">
          <Users className="h-4 w-4 mr-2" />
          Join Study Group
        </Button>
      </CardContent>
    </Card>
  )
}

function WeeklyGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Target className="h-5 w-5 mr-2" />
          Weekly Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">Complete 3 courses</span>
            <span className="text-white">2/3</span>
          </div>
          <Progress value={66} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">Earn 500 tokens</span>
            <span className="text-white">350/500</span>
          </div>
          <Progress value={70} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">Study 10 hours</span>
            <span className="text-white">7/10</span>
          </div>
          <Progress value={70} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

function EnrolledCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced Cairo Development",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      instructor: "Sarah Johnson",
      nextLesson: "Smart Contract Security",
      timeLeft: "2h 30m",
    },
    {
      id: 2,
      title: "DeFi on Starknet",
      progress: 45,
      totalLessons: 8,
      completedLessons: 4,
      instructor: "Mike Rodriguez",
      nextLesson: "Liquidity Pools",
      timeLeft: "1h 45m",
    },
  ]

  return (
    <div className="space-y-6">
      {courses.map((course) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
                  <p className="text-white/70">by {course.instructor}</p>
                </div>
                <Badge variant="secondary">{course.progress}% Complete</Badge>
              </div>

              <Progress value={course.progress} className="mb-4" />

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm text-white">
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                </div>
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm text-white">Next: {course.nextLesson}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm text-white">{course.timeLeft} remaining</span>
                </div>
              </div>

              <Button className="w-full lg:w-auto">Continue Learning</Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

function EarningsOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Token Earnings</CardTitle>
          <CardDescription className="text-white/70">Your total earnings breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white">Course Completions</span>
              <span className="font-semibold text-white">1,250 tokens</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Milestone Rewards</span>
              <span className="font-semibold text-white">500 tokens</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Referral Bonuses</span>
              <span className="font-semibold text-white">200 tokens</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-white">Total Earned</span>
              <span className="text-primary">1,950 tokens</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-white">NFT Collection</CardTitle>
          <CardDescription className="text-white/70">Your achievement NFTs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 border border-white/20 rounded-lg">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="font-semibold text-white">Gold Badges</div>
              <div className="text-2xl font-bold text-white">3</div>
            </div>
            <div className="text-center p-4 border border-white/20 rounded-lg">
              <Award className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <div className="font-semibold text-white">Silver Badges</div>
              <div className="text-2xl font-bold text-white">7</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
