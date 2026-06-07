import { Link } from 'react-router-dom'

export default function Offerings() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need, One Bundle</h2>
          <p className="text-[#9C9CB0] text-lg max-w-2xl mx-auto">
            Custom website + AI agent + app — built together, managed for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#2D2D44] rounded-xl p-6 border border-gray-700/30 text-center hover:border-[#E85D2C]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Custom Website</h3>
              <p className="text-[#9C9CB0] text-sm">Responsive, SEO-optimized, and designed to match your brand.</p>
            </div>
            <div className="bg-[#2D2D44] rounded-xl p-6 border border-gray-700/30 text-center hover:border-[#E85D2C]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Agent</h3>
              <p className="text-[#9C9CB0] text-sm">24/7 lead capture, FAQ handling, and appointment booking.</p>
            </div>
            <div className="bg-[#2D2D44] rounded-xl p-6 border border-gray-700/30 text-center hover:border-[#E85D2C]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-white mb-2">Custom App</h3>
              <p className="text-[#9C9CB0] text-sm">Booking system, client portal, or the tool your business needs.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2D2D44] to-[#1A1A2E] rounded-2xl p-8 md:p-10 border border-[#E85D2C]/20 text-center">
            <div className="text-5xl font-extrabold text-white mb-2">$500</div>
            <div className="text-lg text-[#E85D2C] font-semibold mb-2">+ $10–$100/mo</div>
            <p className="text-[#9C9CB0] text-sm mb-6">Built in 7–14 days. Ongoing management included.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-[#E85D2C] hover:bg-[#d44d1f] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
                Get Started
              </Link>
              <Link to="/products" className="border-2 border-[#E85D2C] text-[#E85D2C] hover:bg-[#E85D2C] hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}