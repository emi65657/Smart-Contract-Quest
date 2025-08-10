import Link from "next/link"
import { Zap, Github, MessageCircle, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white">StarkQuest</span>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Empowering creators and learners on Starknet through innovative Pay-to-Earn and Learn-to-Earn experiences.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Users className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-white text-lg border-b border-primary/20 pb-2">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/learn"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-white text-lg border-b border-primary/20 pb-2">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-white text-lg border-b border-primary/20 pb-2">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href="mailto:eoche912@gmail.com"
                  className="text-white/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80">
                &copy; 2024 StarkQuest. All rights reserved. Built on
                <span className="text-primary font-semibold ml-1">Starknet</span>
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium">LIVE</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-primary/10">
            <p className="text-sm text-white/60">
              Built by <span className="font-semibold text-primary">EMI65657</span> | Contact:{" "}
              <a
                href="mailto:eoche912@gmail.com"
                className="text-primary hover:text-white transition-colors hover:underline"
              >
                eoche912@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  )
}
