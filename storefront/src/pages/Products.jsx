import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'websites',
    icon: '🌐',
    title: 'Website Packages',
    tagline: 'Professional websites in 3 days.',
    desc: 'We build mobile-first, lightning-fast websites for your business. Choose from our library of pre-built templates, customized to your brand. No waiting weeks or months — we deliver in days.',
    features: [
      'Responsive design that looks great on all devices',
      'Contact forms with email notifications',
      'SEO meta tags and Google Analytics ready',
      'Fast loading (scores 90+ on PageSpeed)',
      'Easy content updates via our management dashboard',
      'SSL certificate and security included',
    ],
    templates: ['Solo Pro', 'Local Biz', 'Realty', 'Legal', 'E-Com Lite'],
    price: 'From $899 + $29/mo',
  },
  {
    id: 'ai-agents',
    icon: '🤖',
    title: 'AI Agents',
    tagline: 'Automate customer support and lead generation.',
    desc: 'Deploy an AI agent on your website that answers questions, captures leads, books appointments, and more. Your customers get 24/7 support, and you get more time to run your business.',
    features: [
      'Natural language understanding for accurate responses',
      'Knowledge base integration (upload your docs)',
      'Lead capture with CRM integration',
      'Appointment booking via Calendar sync',
      'Custom instructions and personality',
      'Analytics dashboard with conversation history',
    ],
    templates: ['FAQ Bot', 'Lead Gen Bot', 'Custom Agent'],
    price: 'From $1,499 + $49/mo',
  },
  {
    id: 'apps',
    icon: '📱',
    title: 'Pre-built Apps',
    tagline: 'Ready-to-deploy business applications.',
    desc: 'Full-stack applications for scheduling, booking, client management, and more. No complex setup — just configure, brand, and launch. Perfect for service-based businesses.',
    features: [
      'Booking and scheduling with calendar views',
      'Stripe payment processing built in',
      'Admin dashboard for managing everything',
      'Email confirmations and reminders',
      'Client self-service portal',
      'Multi-user support with roles',
    ],
    templates: ['Booking System', 'Client Portal', 'Waitlist Manager'],
    price: 'From $1,999 + $49/mo',
  },
]

export default function Products() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Products</h1>
          <p className="text-lg text-[#9C9CB0] max-w-2xl mx-auto">
            Three productized offerings, battle-tested and ready to deploy. Pick the one that fits your business.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section key={cat.id} id={cat.id} className={`py-16 ${i % 2 === 1 ? 'bg-[#2D2D44]/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-2">{cat.title}</h2>
                <p className="text-[#E85D2C] font-semibold mb-4">{cat.tagline}</p>
                <p className="text-[#9C9CB0] mb-6 leading-relaxed">{cat.desc}</p>

                <h4 className="text-white font-semibold mb-3">What's included:</h4>
                <ul className="space-y-2 mb-6">
                  {cat.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#9C9CB0]">
                      <span className="text-[#2EC4B6] mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Available templates:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.templates.map((t, j) => (
                      <span key={j} className="bg-[#1A1A2E] text-[#9C9CB0] text-sm px-3 py-1 rounded-full border border-gray-700/30">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="text-xl font-bold text-white mb-4">{cat.price}</div>
                <Link to="/contact" className="inline-block bg-[#E85D2C] hover:bg-[#d44d1f] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                  Get Started
                </Link>
              </div>

              <div className="bg-[#2D2D44] rounded-xl p-8 border border-gray-700/30">
                <div className="text-center py-12">
                  <div className="text-8xl mb-4 opacity-50">{cat.icon}</div>
                  <p className="text-[#9C9CB0] text-sm">Production-ready. Deployed in days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which is right for you?</h2>
          <p className="text-[#9C9CB0] mb-8">We'll help you figure it out in a 15-minute call. No pressure, just advice.</p>
          <Link to="/contact" className="inline-block bg-[#E85D2C] hover:bg-[#d44d1f] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}