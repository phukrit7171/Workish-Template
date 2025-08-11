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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-black/50 backdrop-blur-3xl border-b border-white/30 shadow-2xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToHome}
              className="logo-hover gradient-text-hover text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
            >
              {NAVBAR_CONFIG.brand}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {NAVBAR_CONFIG.navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollToSection(item.target)}
                  className="nav-link text-slate-300 hover:text-white py-2 focus-smooth"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="btn-hover bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-full border border-white/20 hover:shadow-xl hover:shadow-blue-500/30"
              >
                {NAVBAR_CONFIG.ctaText}
              </Button>
            </div>

            <button
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:from-white/20 hover:to-white/10 transition-all duration-500 ease-out hover:scale-110 active:scale-95 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span
                  className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500 ease-out transform ${
                    isMobileMenuOpen ? "rotate-45 translate-y-0 scale-110" : "translate-y-[-6px] group-hover:scale-110"
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 group-hover:scale-110"
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500 ease-out transform ${
                    isMobileMenuOpen ? "-rotate-45 translate-y-0 scale-110" : "translate-y-[6px] group-hover:scale-110"
                  }`}
                ></span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="glass-hover bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/30 p-8 space-y-6 shadow-2xl shadow-black/20">
              {NAVBAR_CONFIG.navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollToSection(item.target)}
                  className={`mobile-menu-item block w-full text-left text-slate-300 hover:text-white py-3 focus-smooth relative group transition-all duration-300 ${
                    isMobileMenuOpen ? "animate-slide-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button
                size="sm"
                className={`btn-hover w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-full mt-6 border border-white/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 ${
                  isMobileMenuOpen ? "animate-slide-in" : ""
                }`}
                style={{ animationDelay: `${NAVBAR_CONFIG.navItems.length * 100}ms` }}
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
