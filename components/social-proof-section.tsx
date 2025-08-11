export default function SocialProofSection() {
  const companies = ["TechCorp", "RetailMax", "LogiFlow", "SalesForce Pro", "AutoMart"]

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-600/10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Join thousands of businesses that have transformed their operations with Workish technology.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl font-semibold text-slate-400 hover:text-white transition-colors duration-300"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
