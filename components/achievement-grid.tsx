"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Award, Shield, Zap, Target } from "lucide-react"

const achievements = [
  {
    id: 1,
    name: "Cairo Master",
    description: "Completed 5 Cairo courses",
    icon: Trophy,
    rarity: "Legendary",
    earned: true,
    progress: 100,
    color: "text-yellow-500",
  },
  {
    id: 2,
    name: "DeFi Expert",
    description: "Master DeFi protocols",
    icon: Star,
    rarity: "Epic",
    earned: true,
    progress: 100,
    color: "text-purple-500",
  },
  {
    id: 3,
    name: "Security Specialist",
    description: "Complete security courses",
    icon: Shield,
    rarity: "Rare",
    earned: false,
    progress: 60,
    color: "text-blue-500",
  },
  {
    id: 4,
    name: "Speed Learner",
    description: "Complete course in 24h",
    icon: Zap,
    rarity: "Uncommon",
    earned: false,
    progress: 0,
    color: "text-green-500",
  },
  {
    id: 5,
    name: "Perfectionist",
    description: "Score 100% on 10 quizzes",
    icon: Target,
    rarity: "Rare",
    earned: false,
    progress: 30,
    color: "text-red-500",
  },
  {
    id: 6,
    name: "Community Helper",
    description: "Help 50 fellow learners",
    icon: Award,
    rarity: "Epic",
    earned: false,
    progress: 20,
    color: "text-orange-500",
  },
]

const rarityColors = {
  Common: "bg-gray-500",
  Uncommon: "bg-green-500",
  Rare: "bg-blue-500",
  Epic: "bg-purple-500",
  Legendary: "bg-yellow-500",
}

export function AchievementGrid() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-white">Achievements</h2>
        <p className="text-white">Unlock badges and NFTs as you progress</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className={`relative overflow-hidden ${achievement.earned ? "border-primary" : "opacity-60"}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full ${achievement.earned ? "bg-primary/10" : "bg-muted"}`}>
                    <achievement.icon
                      className={`h-6 w-6 ${achievement.earned ? achievement.color : "text-muted-foreground"}`}
                    />
                  </div>
                  <Badge className={`text-white ${rarityColors[achievement.rarity as keyof typeof rarityColors]}`}>
                    {achievement.rarity}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-white">{achievement.name}</CardTitle>
                <CardDescription className="text-white">{achievement.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {!achievement.earned && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">Progress</span>
                      <span className="text-white">{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${achievement.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                )}

                {achievement.earned && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-primary font-semibold text-white"
                  >
                    ✨ Unlocked!
                  </motion.div>
                )}
              </CardContent>

              {achievement.earned && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
