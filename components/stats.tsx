import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Active Learners", value: "25,000+" },
  { label: "Content Creators", value: "1,500+" },
  { label: "Courses Available", value: "10,000+" },
  { label: "Tokens Distributed", value: "2.5M+" },
  { label: "NFTs Minted", value: "50,000+" },
  { label: "Total Transactions", value: "500K+" },
]

export function Stats() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">StarkQuest by the Numbers</h2>
          <p className="text-xl text-white">Join thousands of learners and creators already earning on our platform</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center starkquest-card-teal">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
