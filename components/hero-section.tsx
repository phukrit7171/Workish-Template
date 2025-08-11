import { Button } from "@/components/ui/button"

const HERO_CONFIG = {
  backgroundImage: null, // Set to your image URL like "/hero-bg.jpg" or "https://example.com/image.jpg"
  title: "Transform Your Business Operations with Intelligent Technology",
  subtitle:
    "Streamline sales, automate processes, and optimize logistics with our integrated suite of AI-powered business solutions.",
  primaryCTA: "Schedule a Demo",
  secondaryCTA: "Get Started Today",
}

export default function HeroSection() {
  const useImageBackground = HERO_CONFIG.backgroundImage !== null

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32 overflow-hidden"
    >
      {useImageBackground ? (
        <>
          <div
            className="parallax absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${HERO_CONFIG.backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/20 backdrop-blur-[2px]"></div>
        </>
      ) : (
        <>
          <div className="parallax absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-blue-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_60%)]"></div>
          <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/5 via-transparent to-white/3"></div>
        </>
      )}

      <div className="floating-circle absolute top-16 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl shadow-blue-500/30 animate-float float-pause transition-all duration-700 hover:scale-110 hover:shadow-blue-500/50"></div>
      <div className="floating-circle absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-purple-500/30 to-blue-500/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl shadow-purple-500/30 animate-float delay-1000 float-pause transition-all duration-700 hover:scale-110 hover:shadow-purple-500/50"></div>
      <div className="floating-circle absolute top-1/2 left-8 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-300/25 to-purple-300/15 backdrop-blur-xl rounded-full border border-white/25 shadow-lg shadow-blue-300/25 animate-float delay-500 float-pause transition-all duration-700 hover:scale-110 hover:shadow-blue-300/40"></div>
      <div className="floating-circle absolute top-1/3 right-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/15 backdrop-blur-xl rounded-full border border-white/20 shadow-lg shadow-purple-400/20 animate-float delay-700 float-pause transition-all duration-700 hover:scale-110 hover:shadow-purple-400/35"></div>

      <div className="floating-circle absolute top-3/4 left-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/15 backdrop-blur-xl rounded-full border border-white/20 shadow-md shadow-cyan-400/20 animate-float delay-300 float-pause transition-all duration-700 hover:scale-110"></div>
      <div className="floating-circle absolute top-1/4 left-3/4 w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-indigo-400/20 to-purple-400/15 backdrop-blur-xl rounded-full border border-white/20 shadow-md shadow-indigo-400/20 animate-float delay-900 float-pause transition-all duration-700 hover:scale-110"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto animate-on-scroll opacity-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 via-purple-100 to-white bg-clip-text text-transparent leading-tight tracking-tight px-2">
          {HERO_CONFIG.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-4">
          {HERO_CONFIG.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/40 border border-white/20 backdrop-blur-sm btn-hover w-full sm:w-auto"
          >
            {HERO_CONFIG.primaryCTA}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/25 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-500 hover:scale-105 bg-white/15 backdrop-blur-xl shadow-xl hover:shadow-white/30 btn-hover w-full sm:w-auto"
          >
            {HERO_CONFIG.secondaryCTA}
          </Button>
        </div>
      </div>
    </section>
  )
}
