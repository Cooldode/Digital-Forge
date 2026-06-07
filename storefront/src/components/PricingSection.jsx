import { Link } from 'react-router-dom'

const pricingPlans = [
  {
    title: 'Websites',
    tiers: [
      { name: 'Starter', price: '$899', monthly: '$29/mo', popular: false, features: ['1-page website', 'Solo Pro template', 'Contact form', 'Mobile responsive', 'SEO meta tags', '1 hr handoff call'] },
      { name: 'Standard', price: '$1,499', monthly: '$49/mo', popular: true, features: ['Multi-page (up to 5)', 'Any template', 'Image gallery', 'Blog section', 'Google Analytics', 'Priority support'] },
      { name: 'E-Com', price: '$2,499', monthly: '$79/mo', popular: false, features: ['Up to 50 products', 'Shopping cart', 'Stripe checkout', 'Inventory management', 'Order notifications', 'Dedicated support'] },
    ],
  },
  {
    title: 'AI Agents',
    tiers: [
      { name: 'FAQ Bot', price: '$1,499', monthly: '$49/mo', popular: false, features: ['Knowledge base Q&A', '500 queries/month', 'Embeddable widget', 'Basic analytics', 'Email support', '1 revision cycle'] },
      { name: 'Lead Gen Bot', price: '$2,499', monthly: '$99/mo', popular: true, features: ['Lead capture forms', '2,000 queries/month', 'Appointment booking', 'CRM integration', 'Custom training', 'Priority support'] },
      { name: 'Custom Agent', price: '$4,999+', monthly: '$199/mo', popular: false, features: ['Custom tool plugins', 'Unlimited queries', 'Multi-channel', 'Dedicated infrastructure', 'SLA guarantee', '24/7 support'] },
    ],
  },
  {
    title: 'Pre-built Apps',
    tiers: [
      { name: 'Starter', price: '$1,999', monthly: '$49/mo', popular: false, features: ['1 staff account', 'Up to 5 services', 'Email confirmations', 'Calendar view', 'Basic admin panel', '1hr setup call'] },
      { name: 'Pro', price: '$3,499', monthly: '$99/mo', popular: true, features: ['Multiple staff', 'Stripe payments', 'Calendar sync', 'Custom domain', 'Client portal', 'Priority support'] },
      { name: 'Enterprise', price: '$5,999+', monthly: '$199/mo', popular: false, features: ['White-label branding', 'Custom integrations', 'Dedicated infra', 'API access', 'SLA guarantee', '24/7 support'] },
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan, i) => (
          <div key={i} className="mb-20 last:mb-0">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{plan.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plan.tiers.map((tier, j) => (
                <div key={j} className={`rounded-xl p-6 border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-[#E85D2C]/10 border-[#E85D2C]/40 relative'
                    : 'bg-[#2D2D44] border-gray-700/30 hover:border-[#E85D2C]/30'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E85D2C] text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">{tier.name}</h4>
                    <div className="text-3xl font-bold text-white">{tier.price}</div>
                    <div className="text-sm text-[#9C9CB0]">+ {tier.monthly}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-[#9C9CB0]">
                        <span className="text-[#2EC4B6] mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${
                    tier.popular
                      ? 'bg-[#E85D2C] hover:bg-[#d44d1f] text-white shadow-lg shadow-[#E85D2C]/25'
                      : 'border border-[#E85D2C] text-[#E85D2C] hover:bg-[#E85D2C] hover:text-white'
                  }`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}