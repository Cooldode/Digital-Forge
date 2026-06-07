export default function HowItWorks() {
  const steps = [
    {
      icon: '🎯',
      title: 'Tell Us What You Need',
      desc: 'A quick call to understand your business, goals, and what you want built.',
    },
    {
      icon: '🔨',
      title: 'We Build It',
      desc: 'We forge your product in 3–10 days. Clean code. Production-ready. No shortcuts.',
    },
    {
      icon: '🚀',
      title: 'Launch & We Handle It',
      desc: 'We deploy, maintain, and support it. You focus on running your business.',
    },
  ]

  return (
    <section className="py-24 bg-[#2D2D44]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-[#9C9CB0] text-lg max-w-2xl mx-auto">
            From idea to launch in days, not months. No agencies, no endless meetings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#E85D2C]/10 rounded-full flex items-center justify-center text-3xl border border-[#E85D2C]/20">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-[#E85D2C]/20" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-[#9C9CB0]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}