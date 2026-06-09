import { useState, useRef, useEffect } from 'react'
import { findBestResponse, suggestedQuestions } from '../utils/chat-engine'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'agent',
          text: "Hey there! 👋 I'm **Forge**, the demo AI assistant for The Digital Forge. I can answer questions about our services, pricing, process — or just chat! Try asking me something below.",
        },
      ])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSend = (text) => {
    const query = (text || input).trim()
    if (!query) return

    setShowSuggestions(false)
    setMessages(prev => [...prev, { role: 'user', text: query }])
    setInput('')

    // Simulate thinking delay
    setTimeout(() => {
      const { text: response } = findBestResponse(query)
      setMessages(prev => [...prev, { role: 'agent', text: response }])
    }, 400 + Math.random() * 300)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Bubble Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#E85D2C] hover:bg-[#d44d1f] rounded-full flex items-center justify-center shadow-lg shadow-[#E85D2C]/30 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-[#1A1A2E] border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-[#2D2D44] px-5 py-4 border-b border-gray-700/50 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E85D2C] rounded-full flex items-center justify-center text-sm font-bold text-white">
              F
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Forge — AI Demo</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#2EC4B6] rounded-full animate-pulse" />
                <span className="text-[#2EC4B6] text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#E85D2C] text-white rounded-br-md'
                      : 'bg-[#2D2D44] text-[#E8E8F0] rounded-bl-md border border-gray-700/30'
                  }`}
                >
                  {/* Render markdown-like formatting */}
                  <div className="whitespace-pre-wrap">{renderFormattedText(msg.text)}</div>
                </div>
              </div>
            ))}

            {/* Suggested questions */}
            {showSuggestions && messages.length > 0 && (
              <div className="pt-2">
                <p className="text-[#9C9CB0] text-xs mb-2 text-center">Try asking:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-xs bg-[#2D2D44] hover:bg-[#E85D2C]/20 text-[#9C9CB0] hover:text-white border border-gray-700/30 hover:border-[#E85D2C]/30 rounded-full px-3 py-1.5 transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-700/50 p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our services..."
                className="flex-1 bg-[#2D2D44] border border-gray-700/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#9C9CB0] focus:outline-none focus:border-[#E85D2C]/50 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-[#E85D2C] hover:bg-[#d44d1f] disabled:bg-[#E85D2C]/50 disabled:cursor-not-allowed text-white rounded-xl px-4 py-2.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[#9C9CB0] text-[10px] text-center mt-2 opacity-50">
              Demo AI agent — responses are pre-curated
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #2D2D44; border-radius: 4px; }
      `}</style>
    </>
  )
}

function renderFormattedText(text) {
  // Simple markdown-like rendering for bold text
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}