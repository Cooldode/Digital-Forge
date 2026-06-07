import { Link } from 'react-router-dom'

export default function Products() {
  const bundle = {
    title: 'The All-in-One Bundle',
    tagline: 'Custom Website + AI Agent + App — built fresh for your business.',
    desc: 'Stop choosing between a website, an AI chatbot, or a business app. You get all three, built custom for your business, delivered in days. One setup fee. One monthly management fee. No agency markup.',
    price: '$500 setup + $10–$100/mo',
    items: [
      {
        icon: '🌐',
        title: 'Custom Website',
        desc: 'A fast, responsive, professional website built with Vite + React + Tailwind. SEO-optimized, mobile-first, and designed to match your brand. Includes contact forms, analytics, and easy content management.',
        features: [
          'Mobile-first responsive design',
          'SEO meta tags & Google Analytics',
          'Contact forms with email notifications',
          'Blazing fast load times (90+ PageSpeed)',
          'SSL certificate & security',
          'Ongoing maintenance included',
        ],
      },
      {
        icon: '🤖',
        title: 'AI Agent',
        desc: 'An intelligent chatbot or automation agent that works 24/7. Handles customer questions, captures leads, books appointments, and qualifies prospects — so your team can focus on closing deals.',
        features: [
          '24/7 automated customer responses',
          'Knowledge base integration (your docs)',
          'Lead capture with CRM-ready data',
          'Appointment booking via calendar sync',
          'Custom-trained on your business',
          'Conversation analytics dashboard',
        ],
      },
      {
        icon: '📱',
        title: 'Custom App',
        desc: 'The tool your business needs most — a booking system, lead tracker, client portal, or whatever will make the biggest impact. Full-stack app built with React + Node.js, deployed and managed for you.',
        features: [
          'Booking & scheduling with calendar views',
          'Stripe payment processing built in',
          'Admin dashboard for full control',
          'Email confirmations & reminders',
          'Client self-service portal',
          'Multi-user support with roles',
        ],
      },
    ],
  }

  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#E85D2C]/10 border border-[#E85D2C]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#2EC4B6] rounded-full animate-pulse" />
            <span className="text-[#2EC4B6] text-sm font-medium">All-in-One Bundle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{bundle.title}</h1>
          <p className="text-xl text-[#E85D2C] font-semibold mb-4">{bundle.tagline}</p>
          <p className="text-lg text-[#9C9CB0] max-w-3xl mx-auto mb-8 leading-relaxed">{bundle.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <div className="text-3xl font-bold text-white">$500</div>
            <div className="text-[#E85D2C] text-lg font-semibold">+ $10–$100/mo</div>
          </div>
          <p className="text-sm text-[#9C9CB0] mb-8">Built in 7–14 days. No tiers. No hidden fees.</p>

          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="bg-[#E85D2C] hover:bg-[#d44d1f] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
              Get Started — $500
            </Link>
            <Link to="/pricing" className="border-2 border-[#E85D2C] text-[#E85D2C] hover:bg-[#E85D2C] hover:text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {bundle.items.map((item, i) => (
        <section key={i} className={`py-16 ${i % 2 === 1 ? 'bg-[#2D2D44]/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-[#9C9CB0] mb-6 leading-relaxed">{item.desc}</p>

                <h4 className="text-white font-semibold mb-3">What's included:</h4>
                <ul className="space-y-2 mb-6">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#9C9CB0]">
                      <span className="text-[#2EC4B6] mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2D2D44] rounded-xl p-8 border border-gray-700/30">
                <div className="text-center py-12">
                  <div className="text-8xl mb-4 opacity-50">{item.icon}</div>
                  <p className="text-[#9C9CB0] text-sm">Included in every bundle</p>
                  <p className="text-white font-bold text-lg mt-2">No extra charge</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get all three?</h2>
          <p className="text-[#9C9CB0] mb-8 max-w-xl mx-auto">
            $500 setup. Everything included. We'll build it in 7–14 days.
          </p>
          <Link to="/contact" className="inline-block bg-[#E85D2C] hover:bg-[#d44d1f] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}