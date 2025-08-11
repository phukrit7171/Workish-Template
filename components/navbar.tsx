"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const NAVBAR_CONFIG = {
  brand: "Workish",
  navItems: [
    { label: "Solutions", target: "services" },
    { label: "Technology", target: "technology" },
    { label: "Benefits", target: "benefits" },
    { label: "Contact", target: "contact" },
  ],
  ctaText: "Get Demo",
}

interface NavbarProps {
  isVisible: boolean
}

export default function Navbar({ isVisible }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const smoothScrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToHome = () => {
    const heroSection = document.getElementById("hero")
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      // Fallback to scroll to top if hero section not found
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToHome}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1 will-change-transform"
            >
              {NAVBAR_CONFIG.brand}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {NAVBAR_CONFIG.navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollToSection(item.target)}
                  className="relative text-slate-300 hover:text-white py-2 px-3 rounded-lg transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100 origin-left"></span>
                </button>
              ))}
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full border border-white/20 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 will-change-transform"
              >
                {NAVBAR_CONFIG.ctaText}
              </Button>
            </div>

            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/60 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-200 ease-out transform ${
                    isMobileMenuOpen ? "rotate-45 translate-y-0" : "translate-y-[-4px]"
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-200 ease-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100 my-1"
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-200 ease-out transform ${
                    isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[4px]"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
              isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-white/20 p-6 space-y-4">
              {NAVBAR_CONFIG.navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollToSection(item.target)}
                  className="block w-full text-left text-slate-300 hover:text-white py-3 px-4 rounded-lg hover:bg-slate-700/40 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 rounded-lg transition-colors duration-200 ease-out"
              >
                {NAVBAR_CONFIG.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
