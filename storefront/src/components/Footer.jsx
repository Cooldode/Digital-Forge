import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-[#E85D2C]">⛓️</span>
              <span>The Digital <span className="text-[#E85D2C]">Forge</span></span>
            </div>
            <p className="text-[#9C9CB0] max-w-sm">
              We build production-ready websites, AI agents, and apps for growing businesses.
              One build fee. Ongoing management. No agency hassle.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <Link to="/products#websites" className="block text-[#9C9CB0] hover:text-[#E85D2C] text-sm transition-colors">Website Packages</Link>
              <Link to="/products#ai-agents" className="block text-[#9C9CB0] hover:text-[#E85D2C] text-sm transition-colors">AI Agents</Link>
              <Link to="/products#apps" className="block text-[#9C9CB0] hover:text-[#E85D2C] text-sm transition-colors">Pre-built Apps</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/pricing" className="block text-[#9C9CB0] hover:text-[#E85D2C] text-sm transition-colors">Pricing</Link>
              <Link to="/contact" className="block text-[#9C9CB0] hover:text-[#E85D2C] text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9C9CB0] text-sm">© {new Date().getFullYear()} The Digital Forge. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-[#9C9CB0] text-sm">Built with ⚡ for SMBs</span>
          </div>
        </div>
      </div>
    </footer>
  )
}