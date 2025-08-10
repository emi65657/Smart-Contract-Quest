import { NFTGrid } from "@/components/nft-grid"
import { MarketplaceFilters } from "@/components/marketplace-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">NFT Marketplace</h1>
        <p className="text-xl text-white">Trade achievement NFTs and exclusive content from top creators</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64">
          <MarketplaceFilters />
        </div>

        <div className="flex-1">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search NFTs..." className="pl-10 text-white placeholder-white/70" />
            </div>
            <Button variant="outline">Sort by Price</Button>
          </div>

          <NFTGrid />
        </div>
      </div>
    </div>
  )
}
