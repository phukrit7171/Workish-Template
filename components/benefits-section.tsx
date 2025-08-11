export default function BenefitsSection() {
  const benefits = [
    {
      title: "Increase Efficiency",
      description: "Up to 40% reduction in operational overhead",
      metric: "40%",
      metricLabel: "Efficiency Boost",
    },
    {
      title: "Boost Revenue",
      description: "Average 25% increase in sales performance",
      metric: "25%",
      metricLabel: "Revenue Growth",
    },
    {
      title: "Scale Seamlessly",
      description: "Cloud-native architecture grows with your business",
      metric: "∞",
      metricLabel: "Scalability",
    },
    {
      title: "Data-Driven Insights",
      description: "Real-time analytics for informed decision-making",
      metric: "24/7",
      metricLabel: "Analytics",
    },
  ]

  return (
    <section id="benefits" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Why Leading Companies Choose Workish</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business with measurable results and proven performance
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group">
                <div className="text-5xl font-bold text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.metric}
                </div>
                <div className="text-sm text-slate-400 mb-6 uppercase tracking-wider">{benefit.metricLabel}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
