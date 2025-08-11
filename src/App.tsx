import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import TechnologySection from "./components/TechnologySection"
import BenefitsSection from "./components/BenefitsSection"
import SocialProofSection from "./components/SocialProofSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologySection />
        <BenefitsSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
