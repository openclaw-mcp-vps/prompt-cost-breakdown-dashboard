export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Cost Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI costs per feature<br />
          <span className="text-[#58a6ff]">in your app</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Drop in our middleware, tag your LLM calls by feature, user, or endpoint, and watch real-time cost breakdowns appear in your dashboard. No more mystery bills.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $39/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚡", title: "1-line integration", desc: "Wrap your fetch or SDK call. Done." },
          { icon: "📊", title: "Real-time dashboard", desc: "Costs by feature, user, or route — live." },
          { icon: "🔔", title: "Budget alerts", desc: "Get notified before costs spiral." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-sm text-[#8b949e] mb-6">/month · cancel anytime</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Middleware SDK (Node.js / Edge)",
              "Unlimited tracked endpoints",
              "Cost breakdown by feature & user",
              "Real-time analytics dashboard",
              "Budget alerts & email reports",
              "OpenAI, Anthropic, Gemini support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Tracking Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I integrate the middleware?",
              a: "Install our npm package, wrap your LLM calls with our trackCost() helper, and add your API key. Costs start appearing in your dashboard within seconds."
            },
            {
              q: "Which LLM providers are supported?",
              a: "OpenAI, Anthropic, Google Gemini, Mistral, and any provider with a token-based pricing model. Custom providers can be added via config."
            },
            {
              q: "What happens if I go over my tracked volume?",
              a: "Nothing breaks — tracking continues and you'll receive an alert. You can upgrade or adjust your plan at any time from the dashboard."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Prompt Cost Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
