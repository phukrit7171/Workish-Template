import { Card } from "@/components/ui/card"

const SERVICES_CONFIG = {
  title: "Complete Business Solutions",
  subtitle: "Three powerful products designed to revolutionize your business operations",
  services: [
    {
      title: "Smart PoS Technology",
      description:
        "Revolutionary point-of-sale systems that adapt to your business needs. Real-time analytics, seamless integrations, and intuitive interfaces that accelerate transactions and enhance customer experiences.",
      icon: "💳",
      gradient: "from-blue-500/20 to-cyan-500/10",
      shadowColor: "blue-500/20",
    },
    {
      title: "Intelligent Sales Automation",
      description:
        "Eliminate manual processes and boost revenue with AI-driven sales workflows. From lead qualification to deal closure, our automation tools optimize every stage of your sales funnel.",
      icon: "📊",
      gradient: "from-purple-500/20 to-blue-500/10",
      shadowColor: "purple-500/20",
    },
    {
      title: "AI-Powered Logistics",
      description:
        "Transform your supply chain with predictive analytics and intelligent routing. Reduce costs, improve delivery times, and gain complete visibility across your logistics operations.",
      icon: "🚀",
      gradient: "from-emerald-500/20 to-blue-500/10",
      shadowColor: "emerald-500/20",
    },
  ],
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/5 backdrop-blur-xl rounded-full border border-white/10 animate-float float-pause"></div>
      <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-emerald-500/5 backdrop-blur-xl rounded-full border border-white/10 animate-float float-pause delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {SERVICES_CONFIG.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {SERVICES_CONFIG.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES_CONFIG.services.map((service, index) => (
            <Card
              key={index}
              className={`animate-on-scroll opacity-0 card-hover glass-hover bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-white/20 p-10 group cursor-pointer focus-smooth`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon text-6xl mb-8 filter drop-shadow-lg">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-blue-100 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-500">
                {service.description}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
