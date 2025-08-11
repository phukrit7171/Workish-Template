export default function TechnologySection() {
  const features = [
    "Real-time analytics for informed decision-making",
    "Predictive AI that anticipates market trends",
    "Seamless integration across all business systems",
    "Cloud-native architecture that grows with you",
  ]

  return (
    <section id="technology" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-600/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Built for the Future</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Our platform leverages cutting-edge artificial intelligence, machine learning, and cloud infrastructure to
            deliver solutions that scale with your ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Experience the power of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                integrated business technology
              </span>
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-16 bg-gradient-to-br from-blue-500/30 to-blue-400/20 rounded-xl animate-pulse backdrop-blur-sm border border-white/10`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">AI Processing</div>
                <div className="text-slate-400 text-lg">Real-time business optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
