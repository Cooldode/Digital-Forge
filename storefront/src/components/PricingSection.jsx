import { Link } from 'react-router-dom'

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-[#9C9CB0] text-lg max-w-2xl mx-auto">
            One price. Everything included. No tiers, no upsells.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-[#2D2D44] rounded-2xl p-8 md:p-10 border border-[#E85D2C]/30 hover:border-[#E85D2C]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#E85D2C] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
              Best Value
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">The All-in-One Bundle</h3>
              <p className="text-[#9C9CB0]">Custom Website + AI Agent + App</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-extrabold text-white mb-2">$500</div>
              <div className="text-lg text-[#E85D2C] font-semibold">+ $10–$100/mo</div>
              <p className="text-sm text-[#9C9CB0] mt-2">Monthly fee scales with complexity</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                { label: 'Custom Website', desc: 'Vite + React + Tailwind, responsive, SEO-optimized, contact forms' },
                { label: 'AI Agent', desc: '24/7 lead capture, FAQ handling, appointment booking, client intake' },
                { label: 'Custom App', desc: 'Booking system, lead tracker, client portal, or whatever you need most' },
                { label: 'Built in 7–14 days', desc: 'From kickoff to launch — fast turnaround' },
                { label: 'Ongoing Management', desc: 'Hosting, updates, security, monitoring, support included' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#2EC4B6] mt-1 flex-shrink-0">✓</span>
                  <div>
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-[#9C9CB0] text-sm block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="block w-full bg-[#E85D2C] hover:bg-[#d44d1f] text-white text-center font-bold text-lg px-6 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
              Get Started — $500
            </Link>

            <p className="text-center text-[#9C9CB0] text-xs mt-4">
              Simple brochure site + basic chatbot: ~$10/mo &middot; Full e-commerce + lead gen + booking: ~$100/mo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}