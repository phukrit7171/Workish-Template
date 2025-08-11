"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechnologySection from "@/components/technology-section"
import BenefitsSection from "@/components/benefits-section"
import SocialProofSection from "@/components/social-proof-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function WorkishLanding() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const scrollThreshold = 100
      const mouseTopZone = 100

      if (scrolled > scrollThreshold) {
        // Show navbar if mouse is in top zone OR scrolling up
        if (mouseY <= mouseTopZone || scrolled < lastScrollY) {
          setIsNavbarVisible(true)
        } else if (scrolled > lastScrollY && mouseY > mouseTopZone) {
          setIsNavbarVisible(false)
        }
      } else {
        setIsNavbarVisible(true)
      }
      setLastScrollY(scrolled)

      requestAnimationFrame(() => {
        const parallaxElements = document.querySelectorAll(".parallax")
        parallaxElements.forEach((element) => {
          const speed = 0.3
          const yPos = -(scrolled * speed)
          ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
        })
      })
    }

    let mouseTimeout: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY)

      // Show navbar immediately when mouse enters top zone
      if (e.clientY <= 100 && window.pageYOffset > 100) {
        setIsNavbarVisible(true)
      }

      // Clear existing timeout and set new one for smooth hiding
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        if (e.clientY > 100 && window.pageYOffset > 100 && window.pageYOffset > lastScrollY) {
          setIsNavbarVisible(false)
        }
      }, 1000) // Hide after 1 second of no mouse movement in top zone
    }

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")?.slice(1)
        const targetElement = document.getElementById(targetId || "")
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Add event listeners with passive options for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("click", handleAnchorClick)

    return () => {
      observer.disconnect()
      clearTimeout(mouseTimeout)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [lastScrollY, mouseY])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <Navbar isVisible={isNavbarVisible} />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <BenefitsSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  )
}
