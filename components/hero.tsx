import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Coins, Trophy, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center starkquest-hero-bg">
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-nexus-slide-in">
            <div className="space-y-6">
              {/* StarkQuest status badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full starkquest-card-teal">
                <div className="starkquest-status-live w-2 h-2 rounded-full mr-3"></div>
                <span className="starkquest-text-cyan text-sm font-medium">LIVE ON STARKNET</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                Learn, Create, and <span className="text-primary animate-nexus-glow">Earn</span> on Starknet
              </h1>

              <p className="text-xl text-white max-w-lg leading-relaxed">
                StarkQuest empowers creators to monetize their content and rewards learners for reaching milestones —
                all powered by Starknet's lightning-fast infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 starkquest-btn-primary">
                <Link href="/learn">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 starkquest-btn-secondary bg-transparent"
              >
                <Link href="/create">Create Content</Link>
              </Button>
            </div>

            {/* StarkQuest metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="starkquest-card-teal p-4 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                    <BookOpen className="h-6 w-6 starkquest-icon-cyan" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-sm text-white">Courses</div>
                </div>
              </div>

              <div className="starkquest-card-teal p-4 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-white">Tokens</div>
                </div>
              </div>

              <div className="starkquest-card-teal p-4 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-white">5K+</div>
                  <div className="text-sm text-white">NFTs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-nexus-slide-in" style={{ animationDelay: "0.2s" }}>
            {/* StarkQuest main display */}
            <div className="aspect-square rounded-3xl starkquest-card-teal p-8 relative overflow-hidden">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-nexus-pulse"></div>

              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center relative">
                <div className="text-center space-y-6 z-10">
                  <div className="relative">
                    <img
                      src="/images/starkquest-logo.png"
                      alt="StarkQuest Logo"
                      className="w-24 h-24 mx-auto drop-shadow-2xl"
                    />
                    <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl animate-nexus-pulse"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xl font-semibold text-white">STARKQUEST OS</div>
                    <div className="text-sm text-white">Next-Gen Learning Platform</div>

                    {/* System status indicators */}
                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="starkquest-status-live w-2 h-2 rounded-full"></div>
                        <span className="text-xs text-white">ONLINE</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="starkquest-status-live w-2 h-2 rounded-full"></div>
                        <span className="text-xs text-white">SECURE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
                    `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 starkquest-card-teal rounded-2xl flex items-center justify-center animate-nexus-pulse">
              <Zap className="h-8 w-8 starkquest-icon-cyan" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 starkquest-card-teal rounded-xl flex items-center justify-center animate-nexus-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              <Trophy className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
