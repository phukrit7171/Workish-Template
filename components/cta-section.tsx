import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/5"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-on-scroll opacity-0">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Revolutionize Your Business?</h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Discover how Workish can streamline your operations, boost productivity, and drive growth. Our experts are
          ready to design a solution tailored to your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Schedule Your Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
