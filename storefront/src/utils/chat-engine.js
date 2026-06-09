import knowledgeBase from '../data/knowledge-base'

// Simple but effective keyword-based matching engine
// Scores each knowledge base entry against the user's question
// Returns the best matching response

function tokenize(text) {
  return text.toLowerCase()
    .replace(/[?.!,;:]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 1)
}

function scoreEntry(entry, queryTokens) {
  const entryTokens = new Set(entry.keywords)
  let score = 0

  for (const token of queryTokens) {
    for (const keyword of entry.keywords) {
      // Exact match
      if (keyword === token) {
        score += 3
      }
      // Partial match (keyword is part of token or vice versa)
      else if (keyword.includes(token) || token.includes(keyword)) {
        score += 1.5
      }
      // Bigram match
      else if (keyword.includes(' ') && token.length > 3) {
        const kwParts = keyword.split(' ')
        for (const part of kwParts) {
          if (part === token || token.includes(part) || part.includes(token)) {
            score += 1
          }
        }
      }
    }
  }

  // Boost multi-token queries that match more keywords
  score += (score / Math.max(queryTokens.length, 1)) * 0.5

  return score
}

function getFallbackResponse(query) {
  const q = query.toLowerCase()

  if (q.includes('help') || q.includes('can you')) {
    return `I can help you with questions about:
• Our services (websites, AI agents, apps)
• Pricing ($500 setup + $10-100/mo)
• How the process works
• Timelines and delivery
• What's included in the monthly fee

Just ask me anything! 🚀`
  }

  return `Great question! I'd recommend checking out our **Products** page for more details, or head over to the **Contact** page to get a custom quote. In the meantime, feel free to ask me about pricing, process, or any of our services!`
}

export function findBestResponse(query) {
  if (!query || query.trim().length === 0) {
    return { text: "Hi! 👋 I'm here to help. Ask me anything about The Digital Forge!", score: 0 }
  }

  const queryTokens = tokenize(query)
  let bestEntry = null
  let bestScore = 0

  for (const entry of knowledgeBase) {
    const score = scoreEntry(entry, queryTokens)
    if (score > bestScore) {
      bestScore = score
      bestEntry = entry
    }
  }

  // Threshold: minimum score to consider a match
  if (bestEntry && bestScore >= 2) {
    return { text: bestEntry.response, score: bestScore }
  }

  return { text: getFallbackResponse(query), score: 0 }
}

// Pre-canned suggested questions for first-time users
export const suggestedQuestions = [
  "What does The Digital Forge do?",
  "How much does it cost?",
  "How does the process work?",
  "What's included in the monthly fee?",
  "How long does it take?",
]