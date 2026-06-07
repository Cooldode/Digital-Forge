import { Link } from 'react-router-dom'

const products = [
  {
    icon: '🌐',
    title: 'Website Packages',
    desc: 'Professional, mobile-first websites delivered in 3 days. Clean templates customized for your brand.',
    price: 'From $899',
    monthly: '$29/mo',
    features: ['Mobile-first responsive design', 'Contact forms & SEO', 'Live in 3 days', 'Ongoing maintenance'],
    slug: 'websites',
  },
  {
    icon: '🤖',
    title: 'AI Agents',
    desc: 'Smart chatbots and automation agents for customer support, lead gen, and more.',
    price: 'From $1,499',
    monthly: '$49/mo',
    features: ['24/7 automated responses', 'Knowledge base Q&A', 'Lead capture & booking', 'Custom training'],
    slug: 'ai-agents',
  },
  {
    icon: '📱',
    title: 'Pre-built Apps',
    desc: 'Booking systems, client portals, and business apps ready to deploy and use.',
    price: 'From $1,999',
    monthly: '$49/mo',
    features: ['Booking & scheduling', 'Payment processing', 'Admin dashboard', 'Email notifications'],
    slug: 'apps',
  },
]

export default function Offerings() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-[#9C9CB0] text-lg max-w-2xl mx-auto">
            Three productized offerings. One build fee. Ongoing management included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-[#2D2D44] rounded-xl p-8 border border-gray-700/30 hover:border-[#E85D2C]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 flex flex-col">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
              <p className="text-[#9C9CB0] mb-6 flex-1">{product.desc}</p>

              <div className="mb-6">
                <span className="text-2xl font-bold text-white">{product.price}</span>
                <span className="text-[#9C9CB0] ml-2">+ {product.monthly}</span>
              </div>

              <ul className="space-y-2 mb-8">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#9C9CB0]">
                    <span className="text-[#2EC4B6]">✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link to={`/products#${product.slug}`} className="text-center border border-[#E85D2C] text-[#E85D2C] hover:bg-[#E85D2C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}