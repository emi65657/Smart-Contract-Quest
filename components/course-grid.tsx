import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Coins } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Introduction to Starknet",
    description: "Learn the fundamentals of Starknet and Cairo programming",
    image: "/images/cairo-course.png",
    instructor: "Alex Chen",
    duration: "4 hours",
    students: 1250,
    rating: 4.8,
    reward: 50,
    level: "Beginner",
    category: "Blockchain",
  },
  {
    id: 2,
    title: "Advanced Cairo Development",
    description: "Master Cairo smart contract development on Starknet",
    image: "/images/cairo-course.png",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    students: 890,
    rating: 4.9,
    reward: 100,
    level: "Advanced",
    category: "Development",
  },
  {
    id: 3,
    title: "DeFi on Starknet",
    description: "Build decentralized finance applications on Starknet",
    image: "/images/defi-course.png",
    instructor: "Mike Rodriguez",
    duration: "6 hours",
    students: 675,
    rating: 4.7,
    reward: 75,
    level: "Intermediate",
    category: "DeFi",
  },
  {
    id: 4,
    title: "NFT Marketplace Development",
    description: "Create your own NFT marketplace using Starknet",
    image: "/images/nft-course.png",
    instructor: "Emma Davis",
    duration: "10 hours",
    students: 432,
    rating: 4.6,
    reward: 120,
    level: "Advanced",
    category: "NFTs",
  },
  {
    id: 5,
    title: "Web3 Frontend with React",
    description: "Build modern Web3 frontends that interact with Starknet",
    image: "/images/cairo-course.png",
    instructor: "David Kim",
    duration: "7 hours",
    students: 980,
    rating: 4.8,
    reward: 85,
    level: "Intermediate",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Starknet Security Best Practices",
    description: "Learn how to secure your Starknet applications",
    image: "/images/cairo-course.png",
    instructor: "Lisa Wang",
    duration: "5 hours",
    students: 567,
    rating: 4.9,
    reward: 90,
    level: "Intermediate",
    category: "Security",
  },
]

const levelColors = {
  Beginner: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Intermediate: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Advanced: "bg-chart-5/10 text-chart-5 border-chart-5/20",
}

export function CourseGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden card-hover shadow-professional glass-morphism">
          <div className="relative">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <Badge
              className={`absolute top-3 right-3 ${levelColors[course.level as keyof typeof levelColors]} font-medium`}
            >
              {course.level}
            </Badge>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <CardHeader className="space-y-3">
            <div className="flex justify-between items-start">
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                {course.category}
              </Badge>
              <div className="flex items-center text-primary bg-primary/10 px-2 py-1 rounded-lg">
                <Coins className="h-3 w-3 mr-1" />
                <span className="font-semibold text-sm">{course.reward}</span>
              </div>
            </div>
            <CardTitle className="text-lg heading-professional">{course.title}</CardTitle>
            <CardDescription className="text-professional">{course.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{course.students.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-current text-primary" />
                <span>{course.rating}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
              <Button asChild className="w-full btn-professional shadow-professional">
                <Link href={`/learn/course/${course.id}`}>Start Learning</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
