const testimonials = [
  {
    quote: "We had a website up in 3 days. The monthly management means I never have to think about it. Exactly what a small business needs.",
    name: "Sarah Chen",
    role: "Owner, Chen Realty",
  },
  {
    quote: "The AI agent handles 80% of our customer inquiries. Our team can focus on actual sales now. Game changer.",
    name: "Marcus Johnson",
    role: "CEO, Johnson & Associates Law",
  },
  {
    quote: "Our booking system went from 'we need this' to 'it's working' in under two weeks. Stripe payments built right in.",
    name: "Emma Torres",
    role: "Founder, Torres Fitness Studio",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#2D2D44]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Businesses Like Yours</h2>
          <p className="text-[#9C9CB0] text-lg max-w-2xl mx-auto">
            Real results from real clients who skipped the agency and went with The Digital Forge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#1A1A2E] rounded-xl p-8 border border-gray-700/30">
              <div className="text-[#E85D2C] text-3xl mb-4">"</div>
              <p className="text-[#9C9CB0] mb-6 leading-relaxed">{t.quote}</p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-[#9C9CB0]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}