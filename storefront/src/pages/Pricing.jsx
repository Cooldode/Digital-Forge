import PricingSection from '../components/PricingSection'

export default function Pricing() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Transparent Pricing</h1>
          <p className="text-lg text-[#9C9CB0] max-w-2xl mx-auto">
            One build fee. One monthly management fee. No hidden costs, no surprises.
          </p>
        </div>
      </section>
      <PricingSection />
      <section className="pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left bg-[#2D2D44]/30 rounded-xl p-8 border border-gray-700/30">
          <h3 className="text-xl font-bold text-white mb-4">What's included in the monthly fee?</h3>
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
      </section>
    </div>
  )
}