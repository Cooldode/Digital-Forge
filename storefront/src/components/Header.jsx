import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="text-[#E85D2C] text-2xl">⛓️</span>
            <span>The Digital <span className="text-[#E85D2C]">Forge</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#E85D2C] ${
                  location.pathname === link.to ? 'text-[#E85D2C]' : 'text-[#9C9CB0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-[#E85D2C] hover:bg-[#d44d1f] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200">
              Get a Quote
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-gray-800 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm ${
                  location.pathname === link.to ? 'text-[#E85D2C]' : 'text-[#9C9CB0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="inline-block mt-3 bg-[#E85D2C] hover:bg-[#d44d1f] text-white text-sm font-semibold px-5 py-2 rounded-lg">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}