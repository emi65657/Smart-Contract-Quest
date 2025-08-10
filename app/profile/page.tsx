"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, BookOpen, Coins, Calendar, MapPin, Edit, Share, Award, TrendingUp } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    coursesCompleted: 12,
    tokensEarned: 1950,
    nftsOwned: 8,
    studyStreak: 15,
    totalStudyHours: 47,
    rank: 234,
  }

  const achievements = [
    { name: "Cairo Master", rarity: "Legendary", earned: true },
    { name: "DeFi Expert", rarity: "Epic", earned: true },
    { name: "Security Specialist", rarity: "Rare", earned: false },
    { name: "Speed Learner", rarity: "Uncommon", earned: false },
  ]

  const recentCourses = [
    { title: "Advanced Cairo Development", progress: 100, completed: true },
    { title: "DeFi Protocol Design", progress: 75, completed: false },
    { title: "Smart Contract Security", progress: 45, completed: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                  <AvatarImage src="/images/profile-avatar.png" alt="Profile" />
                  <AvatarFallback className="text-2xl">EMI</AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">EMI65657</h1>
                    <p className="text-muted-foreground">@emi65657</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Blockchain Developer
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Joined March 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground max-w-2xl">
                  Passionate blockchain developer learning Cairo and building on Starknet. Love exploring DeFi protocols
                  and smart contract security.
                </p>

                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="flex items-center">
                    <Trophy className="h-3 w-3 mr-1" />
                    Rank #{userStats.rank}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {userStats.studyStreak} day streak
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <BookOpen className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">{userStats.coursesCompleted}</div>
                <div className="text-xs text-muted-foreground">Courses</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <Coins className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{userStats.tokensEarned}</div>
                <div className="text-xs text-muted-foreground">Tokens</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <Trophy className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold">{userStats.nftsOwned}</div>
                <div className="text-xs text-muted-foreground">NFTs</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">{userStats.studyStreak}</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                <div className="text-2xl font-bold">{userStats.totalStudyHours}h</div>
                <div className="text-xs text-muted-foreground">Study Time</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 mx-auto mb-2 text-red-500" />
                <div className="text-2xl font-bold">#{userStats.rank}</div>
                <div className="text-xs text-muted-foreground">Global Rank</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="achievements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievement Collection</CardTitle>
                <CardDescription>Your earned badges and NFTs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-4 border rounded-lg text-center ${
                        achievement.earned ? "border-primary bg-primary/5" : "border-muted opacity-60"
                      }`}
                    >
                      <Trophy
                        className={`h-8 w-8 mx-auto mb-2 ${
                          achievement.earned ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <Badge variant={achievement.earned ? "default" : "secondary"} className="mt-2">
                        {achievement.rarity}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course, index) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{course.title}</h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                      </div>
                      <Badge variant={course.completed ? "default" : "secondary"}>
                        {course.completed ? "Completed" : "In Progress"}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest achievements and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <div className="flex-1">
                      <p className="font-medium">Earned Cairo Master Badge</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Coins className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium">Earned 50 tokens</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="font-medium">Completed Advanced Cairo course</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
