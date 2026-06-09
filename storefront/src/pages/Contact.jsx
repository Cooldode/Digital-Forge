import { useState } from 'react'

// The Formspree form ID — update once the owner signs up
const FORMSPREE_ID = 'xvznrnqw'
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const json = await res.json()
        setError(json?.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Build Something</h1>
            <p className="text-lg text-[#9C9CB0] max-w-2xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours with a timeline and fixed price.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#2D2D44] rounded-xl p-12 text-center border border-[#2EC4B6]/30 max-w-lg mx-auto">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-white mb-3">Thanks for reaching out!</h2>
              <p className="text-[#9C9CB0]">
                We'll review your project and get back to you within 24 hours with a timeline and a fixed price quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} action={FORMSPREE_URL} method="POST" className="max-w-lg mx-auto space-y-6" noValidate>
              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="New Digital Forge Inquiry" />
              <input type="hidden" name="_next" value="/" />

              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="name">Name *</label>
                <input id="name" name="name" type="text" required className="w-full bg-[#2D2D44] border border-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-[#9C9CB0] focus:outline-none focus:border-[#E85D2C] transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required className="w-full bg-[#2D2D44] border border-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-[#9C9CB0] focus:outline-none focus:border-[#E85D2C] transition-colors" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="company">Company</label>
                <input id="company" name="company" type="text" className="w-full bg-[#2D2D44] border border-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-[#9C9CB0] focus:outline-none focus:border-[#E85D2C] transition-colors" placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="interest">What are you interested in? *</label>
                <select id="interest" name="interest" required className="w-full bg-[#2D2D44] border border-gray-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E85D2C] transition-colors">
                  <option value="">Select an option</option>
                  <option value="website">Website Package</option>
                  <option value="ai-agent">AI Agent</option>
                  <option value="app">Pre-built App</option>
                  <option value="multiple">Multiple / Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="message">Tell us about your project *</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-[#2D2D44] border border-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-[#9C9CB0] focus:outline-none focus:border-[#E85D2C] transition-colors" placeholder="What do you need built? What's your timeline? Any specific features?" />
              </div>

              {error && (
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#E85D2C] hover:bg-[#d44d1f] disabled:bg-[#E85D2C]/50 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#E85D2C]/25"
              >
                {sending ? 'Sending...' : 'Send Request'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}