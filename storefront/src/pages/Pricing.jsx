import PricingSection from '../components/PricingSection'

export default function Pricing() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">One Price. Everything Included.</h1>
          <p className="text-lg text-[#9C9CB0] max-w-2xl mx-auto">
            $500 setup gets you a custom website, AI agent, and app — built fresh for your business.
            No tiers. No hidden fees. No surprises.
          </p>
        </div>
      </section>
      <PricingSection />
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2D2D44]/30 rounded-xl p-8 border border-gray-700/30">
            <h3 className="text-xl font-bold text-white mb-4">What does the monthly fee cover?</h3>
            <p className="text-[#9C9CB0] mb-4">The monthly fee ($10–$100/mo) scales based on your needs:</p>
            <ul className="space-y-3 mb-6">
              {[
                ['Simple brochure site + basic chatbot', '~$10/mo'],
                ['Multi-page site + lead gen AI + basic app', '~$30/mo'],
                ['Full e-commerce + advanced AI agent + booking app', '~$50/mo'],
                ['Custom enterprise + multi-agent AI + full-stack app', '~$100/mo'],
              ].map(([scenario, price], i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-gray-800/50 last:border-0">
                  <span className="text-[#9C9CB0]">{scenario}</span>
                  <span className="text-white font-semibold">{price}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-white mb-4 mt-8">Every plan includes:</h3>
            <ul className="space-y-3">
              {[
                'Web hosting on fast, global CDN',
                'SSL certificate management & renewal',
                'Security patches & dependency updates',
                'Uptime monitoring & incident response',
                'Up to 2 hours of content changes per month',
                'Priority email support (24hr response SLA)',
                'Monthly performance reports',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#9C9CB0]">
                  <span className="text-[#2EC4B6] mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}