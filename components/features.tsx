import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Coins, Trophy, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Learn & Earn",
    description: "Complete courses and milestones to earn tokens and unlock exclusive NFT achievements.",
  },
  {
    icon: Coins,
    title: "Creator Monetization",
    description: "Creators earn tokens from student engagement, course completions, and premium content.",
  },
  {
    icon: Trophy,
    title: "NFT Achievements",
    description: "Unlock unique NFT badges and certificates as you progress through your learning journey.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a vibrant community of learners and creators building the future of education.",
  },
  {
    icon: Zap,
    title: "Starknet Powered",
    description: "Built on Starknet for lightning-fast transactions and minimal fees.",
  },
  {
    icon: Shield,
    title: "Transparent & Secure",
    description: "All transactions and achievements are recorded on-chain for complete transparency.",
  },
]

export function Features() {
  return (
    <section className="py-24 starkquest-features-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Why Choose StarkQuest?</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience the future of education with our innovative Pay-to-Earn and Learn-to-Earn platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 starkquest-card-bronze">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 starkquest-icon-cyan" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-white opacity-80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
