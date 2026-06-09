// The Digital Forge — Knowledge Base for Demo AI Agent
// This powers the showcase chat widget on the website

const knowledgeBase = [
  {
    keywords: ['what', 'digital forge', 'who', 'you', 'about', 'company', 'business'],
    response: `The Digital Forge is a digital product studio that builds production-ready websites, AI agents, and apps for growing businesses. We skip the agency overhead — you get a custom digital product delivered fast, with ongoing management included. Think of us as your technical team, without the full-time hire.`,
    priority: 1,
  },
  {
    keywords: ['pricing', 'price', 'cost', 'how much', 'fee', 'pay', 'afford', 'budget', '500', 'dollar'],
    response: `Our pricing is simple: **$500 setup fee** gets you a custom website, AI agent, and app — all built fresh for your business. The monthly fee ranges from **$10 to $100/month**, scaling with complexity. A simple brochure site with a basic chatbot is around $10/month, while a full e-commerce store with a lead gen AI agent and booking app is around $100/month. No tiers, no hidden fees, no surprises.`,
    priority: 1,
  },
  {
    keywords: ['website', 'site', 'landing', 'web', 'page'],
    response: `We build custom websites using **Vite + React + Tailwind CSS** — fast, responsive, and SEO-optimized. Every site is mobile-first, includes contact forms, Google Analytics, and is designed to match your brand. Typical turnaround: **3-5 days**. We handle hosting, SSL, and ongoing updates as part of the monthly fee.`,
    priority: 2,
  },
  {
    keywords: ['ai agent', 'chatbot', 'chat', 'bot', 'automation', 'automate', 'ai', 'agent'],
    response: `Our AI agents are intelligent chatbots that work 24/7 on your website. They handle customer questions, capture leads, book appointments, and qualify prospects. We train them on your business knowledge — just upload your docs and we handle the rest. Built with LLM technology (OpenAI/Anthropic) and embeddable as a simple widget. **Built in 3-5 days.**`,
    priority: 2,
  },
  {
    keywords: ['app', 'application', 'booking', 'portal', 'system', 'software', 'tool'],
    response: `We build custom full-stack apps for your business — booking systems, client portals, lead trackers, or whatever tool you need most. Built with **React + Node.js**, with Stripe payments, email notifications, and an admin dashboard. **Built in 5-7 days.** All managed and maintained for you.`,
    priority: 2,
  },
  {
    keywords: ['how', 'process', 'works', 'step', 'start', 'begin', 'get started'],
    response: `Getting started is easy:
1. **Discovery Call** (30 min) — We learn about your business and what you need
2. **Proposal** — We give you a fixed price and timeline
3. **Build Sprint** — We build your website, AI agent, and app in 7-14 days
4. **Launch** — We deploy everything and you're live
5. **Ongoing** — We handle hosting, updates, security, and support`,
    priority: 2,
  },
  {
    keywords: ['timeline', 'how long', 'delivery', 'when', 'days', 'weeks', 'time', 'fast', 'speed'],
    response: `Typical turnaround times:
• **Custom Website**: 3-5 days
• **AI Agent**: 3-5 days  
• **Custom App**: 5-7 days
• **Full Bundle (all three)**: 7-14 days

We move fast because we use pre-built, battle-tested templates as starting points, customized to your brand and needs.`,
    priority: 2,
  },
  {
    keywords: ['monthly', 'management', 'maintenance', 'hosting', 'support', 'update', 'fee'],
    response: `The monthly fee ($10-$100/month) covers everything:
• **Hosting** on a fast global CDN
• **SSL certificate** management & renewal
• **Security patches** & dependency updates
• **Uptime monitoring** & incident response
• **Up to 2 hours** of content changes per month
• **Priority email support** (24hr response SLA)
• **Monthly performance reports**`,
    priority: 2,
  },
  {
    keywords: ['contact', 'reach', 'talk', 'human', 'call', 'quote', 'inquiry', 'email'],
    response: `You can reach us through the contact form on this site! Just head to our **Contact** page, fill in your details, and we'll get back to you within 24 hours with a timeline and fixed price. Or click the "Get a Quote" button in the navigation. We'd love to hear about your project!`,
    priority: 2,
  },
  {
    keywords: ['template', 'design', 'look', 'customize', 'brand', 'custom'],
    response: `Every project is custom-built for your brand. We start with our library of battle-tested templates (Solo Pro, Local Biz, Realty, Legal, E-Com Lite) and customize everything — colors, fonts, layout, content — to match your brand identity. You get a unique site that doesn't look like a template.`,
    priority: 3,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greeting', 'good morning', 'good afternoon', 'sup', 'yo'],
    response: `Hey there! 👋 Welcome to The Digital Forge. I'm your AI assistant. I can tell you about our services, pricing, process, or anything else about how we can help your business. What can I help you with?`,
    priority: 0,
  },
  {
    keywords: ['thanks', 'thank', 'appreciate', 'cool', 'awesome', 'great', 'nice'],
    response: `You're welcome! 😊 If you have any other questions, just ask. When you're ready to get started, head to our Contact page and we'll take it from there!`,
    priority: 3,
  },
  {
    keywords: ['portfolio', 'work', 'examples', 'past', 'client', 'showcase', 'case study'],
    response: `We're just getting started with our client work, but our own website is our portfolio piece! This site itself — built with Vite + React + Tailwind — showcases the quality you can expect. We're happy to share more specific examples during a discovery call.`,
    priority: 3,
  },
  {
    keywords: ['refund', 'guarantee', 'money back', 'satisfaction', 'warranty'],
    response: `We stand behind our work. If you're not satisfied with what we deliver, we'll make it right. Every project includes a revision cycle, and we don't consider a project complete until you're happy. The monthly fee can be cancelled at any time — no long-term contracts.`,
    priority: 3,
  },
  {
    keywords: ['competitor', 'comparison', 'vs', 'different', 'why', 'better'],
    response: `What makes us different:
• **No agency markup** — We're a lean team, not a big agency
• **Fixed pricing** — $500 setup + $10-100/mo, no hourly billing
• **Fast delivery** — 7-14 days for a full bundle
• **Ongoing management** — We don't just build and disappear
• **All-in-one** — Website, AI agent, and app in one package

Most agencies charge $5,000-$15,000+ for what we do for $500.`,
    priority: 2,
  },
]

export default knowledgeBase