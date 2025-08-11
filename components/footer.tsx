export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Workish</h3>
            <p className="text-slate-400 text-lg mb-6">Intelligent Business Solutions</p>
            <p className="text-slate-400 leading-relaxed">
              Transform your business today. Contact our specialists to discover how Workish can revolutionize your
              operations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Solutions</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">PoS Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sales Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">AI Logistics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Workish. All rights reserved. Intelligent Business Solutions.</p>
        </div>
      </div>
    </footer>
  )
}
