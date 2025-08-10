import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function MarketplaceFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium mb-3 block text-white">Price Range</Label>
            <Slider defaultValue={[0, 500]} max={500} step={10} className="mb-2" />
            <div className="flex justify-between text-sm text-white">
              <span>0 tokens</span>
              <span>500+ tokens</span>
            </div>
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block text-white">Rarity</Label>
            <div className="space-y-2">
              {["Common", "Uncommon", "Rare", "Epic", "Legendary"].map((rarity) => (
                <div key={rarity} className="flex items-center space-x-2">
                  <Checkbox id={rarity} />
                  <Label htmlFor={rarity} className="text-sm text-white">
                    {rarity}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base font-medium mb-3 block text-white">Category</Label>
            <div className="space-y-2">
              {["Achievement Badges", "Course Certificates", "Creator NFTs", "Special Events"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <Label htmlFor={category} className="text-sm text-white">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
