import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#1A1A2E] to-[#2D2D44]/50" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E85D2C]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#F4A261]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#E85D2C]/10 border border-[#E85D2C]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-[#2EC4B6] rounded-full animate-pulse" />
          <span className="text-[#2EC4B6] text-sm font-medium">Production-ready digital products</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          We Forge Digital Products<br />
          for{' '}
          <span className="bg-gradient-to-r from-[#E85D2C] to-[#F4A261] bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#9C9CB0] max-w-2xl mx-auto mb-10">
          Skip the agency. Get a production-ready website, AI agent, or app delivered in days —
          with ongoing management included.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-[#E85D2C] hover:bg-[#d44d1f] text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25">
            Get Your Quote
          </Link>
          <Link to="/products" className="border-2 border-[#E85D2C] text-[#E85D2C] hover:bg-[#E85D2C] hover:text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200">
            See Our Work
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-[#E85D2C] text-3xl font-bold">3-10</div>
            <div className="text-[#9C9CB0] text-sm">Days to Launch</div>
          </div>
          <div>
            <div className="text-[#E85D2C] text-3xl font-bold">1x</div>
            <div className="text-[#9C9CB0] text-sm">Build Fee</div>
          </div>
          <div>
            <div className="text-[#E85D2C] text-3xl font-bold">24/7</div>
            <div className="text-[#9C9CB0] text-sm">Managed</div>
          </div>
        </div>
      </div>
    </section>
  )
}