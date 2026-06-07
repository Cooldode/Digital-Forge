import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#2D2D44] to-[#1A1A2E] rounded-2xl p-12 border border-[#E85D2C]/20 glow">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Forge Something?</h2>
          <p className="text-[#9C9CB0] text-lg max-w-xl mx-auto mb-8">
            Tell us what you need. We'll give you a timeline and a fixed price — no surprises.
          </p>
          <Link to="/contact" className="inline-block bg-[#E85D2C] hover:bg-[#d44d1f] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  )
}