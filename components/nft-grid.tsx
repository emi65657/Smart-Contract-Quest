import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, Heart } from "lucide-react"
import Image from "next/image"

const nfts = [
  {
    id: 1,
    name: "Cairo Master Badge",
    description: "Awarded for completing advanced Cairo course",
    image: "/images/achievement-badge-gold.png",
    price: 150,
    creator: "Alex Chen",
    rarity: "Rare",
    likes: 42,
  },
  {
    id: 2,
    name: "Starknet Pioneer",
    description: "Early adopter achievement NFT",
    image: "/images/achievement-badge-gold.png",
    price: 200,
    creator: "Sarah Johnson",
    rarity: "Epic",
    likes: 89,
  },
  {
    id: 3,
    name: "DeFi Expert Certificate",
    description: "Certification for DeFi mastery",
    image: "/images/achievement-badge-silver.png",
    price: 120,
    creator: "Mike Rodriguez",
    rarity: "Uncommon",
    likes: 31,
  },
  {
    id: 4,
    name: "Smart Contract Auditor",
    description: "Security expert achievement",
    image: "/images/achievement-badge-gold.png",
    price: 300,
    creator: "Lisa Wang",
    rarity: "Legendary",
    likes: 156,
  },
  {
    id: 5,
    name: "Web3 Builder",
    description: "Frontend development achievement",
    image: "/images/achievement-badge-bronze.png",
    price: 100,
    creator: "David Kim",
    rarity: "Common",
    likes: 23,
  },
  {
    id: 6,
    name: "NFT Creator Badge",
    description: "Achievement for creating NFT marketplace",
    image: "/images/achievement-badge-silver.png",
    price: 180,
    creator: "Emma Davis",
    rarity: "Rare",
    likes: 67,
  },
]

const rarityColors = {
  Common: "bg-gray-500",
  Uncommon: "bg-green-500",
  Rare: "bg-blue-500",
  Epic: "bg-purple-500",
  Legendary: "bg-orange-500",
}

export function NFTGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={nft.image || "/placeholder.svg"}
              alt={nft.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <Badge
              className={`absolute top-2 right-2 text-white ${rarityColors[nft.rarity as keyof typeof rarityColors]}`}
            >
              {nft.rarity}
            </Badge>
            <Button variant="ghost" size="icon" className="absolute top-2 left-2 bg-background/80 hover:bg-background">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <CardHeader>
            <CardTitle className="text-lg text-white">{nft.name}</CardTitle>
            <CardDescription className="text-white">{nft.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-primary">
                <Coins className="h-4 w-4 mr-1" />
                <span className="font-semibold">{nft.price}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-sm">{nft.likes}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-white">by {nft.creator}</p>
            </div>

            <Button className="w-full">Buy Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
