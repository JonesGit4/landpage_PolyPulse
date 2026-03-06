interface TelegramProps { dict: any; }

export default function Telegram({ dict }: TelegramProps) {
  return (
    <section className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">{dict.telegram.title}</h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">{dict.telegram.subtitle}</p>
            <ul className="space-y-5 mb-10">
              {[dict.telegram.feature1, dict.telegram.feature2, dict.telegram.feature3].map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" fill="none" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 7 5 11 13 3"/></svg>
                  </div>
                  <span className="text-gray-300 font-light">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0088cc] text-white font-semibold rounded-full hover:bg-[#006daa] hover:shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.03-1.98 1.26-5.61 3.71-.53.37-1.01.55-1.44.54-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.65-2.89 7.99-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/></svg>
              {dict.telegram.joinChannel}
            </a>
          </div>

          {/* Right: Telegram phone mockup */}
          <div className="relative flex justify-center">
            <div className="card-base p-4 max-w-[320px] w-full neon-border">
              {/* Phone header */}
              <div className="bg-[#0088cc] rounded-t-xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm">⚡</div>
                <div>
                  <div className="text-white text-sm font-semibold">PolyPulse Signals</div>
                  <div className="text-white/60 text-xs">1,247 subscribers</div>
                </div>
              </div>
              {/* Messages */}
              <div className="bg-[#0e1621] rounded-b-xl p-3 space-y-3">
                <div className="bg-[#182533] rounded-xl p-3.5">
                  <div className="text-xs text-[#0088cc] font-semibold mb-1.5">🔔 NEW SIGNAL</div>
                  <div className="text-sm text-white mb-1">📈 <strong>BUY</strong> — Will BTC hit $100K?</div>
                  <div className="text-xs text-gray-400">Entry: 0.62 | Target: 0.75 | Stop: 0.55</div>
                  <div className="text-xs text-secondary mt-1.5">Confidence: ⭐⭐⭐⭐⭐</div>
                </div>
                <div className="bg-[#182533] rounded-xl p-3.5">
                  <div className="text-xs text-yellow-400 font-semibold mb-1.5">🐋 WHALE ALERT</div>
                  <div className="text-sm text-white">$45,000 position opened on &quot;NBA MVP&quot;</div>
                  <div className="text-xs text-gray-400 mt-1">Smart money moving — Jokic 33%→38%</div>
                </div>
                <div className="bg-[#182533] rounded-xl p-3.5">
                  <div className="text-xs text-secondary font-semibold mb-1.5">✅ TRADE CLOSED</div>
                  <div className="text-sm text-white">Iran Supreme Leader — <span className="text-secondary font-bold">+$320 (+18.2%)</span></div>
                  <div className="text-xs text-gray-400 mt-1">Held for 2h 14m</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 card-base px-4 py-3 shadow-xl animate-float hidden lg:block">
              <div className="text-[11px] text-gray-500 uppercase tracking-wider">Today&#39;s P&amp;L</div>
              <div className="text-xl font-heading font-bold text-secondary">+$1,240</div>
            </div>
            <div className="absolute -bottom-3 -left-3 card-base px-4 py-3 shadow-xl animate-float hidden lg:block" style={{ animationDelay: '3s' }}>
              <div className="text-[11px] text-gray-500 uppercase tracking-wider">Active Bots</div>
              <div className="text-xl font-heading font-bold text-primary">3 running</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
