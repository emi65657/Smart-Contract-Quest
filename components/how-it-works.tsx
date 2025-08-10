import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Connect Your Wallet",
    description: "Connect your Starknet wallet to get started on your learning journey.",
  },
  {
    step: "02",
    title: "Choose Your Path",
    description:
      "Browse courses or create content. Learners earn by completing milestones, creators earn from engagement.",
  },
  {
    step: "03",
    title: "Complete & Earn",
    description: "Finish courses, reach milestones, and automatically receive tokens and NFT achievements.",
  },
  {
    step: "04",
    title: "Level Up",
    description: "Use your earnings to unlock premium content or showcase your achievements in the marketplace.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 starkquest-steps-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">How StarkQuest Works</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Get started in just a few simple steps and begin your journey to earning while learning
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full starkquest-card-bronze">
                <CardHeader>
                  <div className="starkquest-step-number mb-4">{step.step}</div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white opacity-80">{step.description}</CardDescription>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 starkquest-icon-cyan" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
