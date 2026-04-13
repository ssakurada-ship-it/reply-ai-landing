"use client";

const LIVE_URL = "https://replyai-labs.vercel.app";

// HeroB: 結果訴求型 (Result-focused variant)
// Ref: Podium's orange action color + outcome-first headlines
export default function HeroB() {
  return (
    <section
      className="bg-slate-900 text-white"
      aria-label="ヒーローセクション"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium px-4 py-1.5">
                🚀 導入企業の92%が満足と回答
              </span>
            </div>

            {/* H1 — result-focused */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.05]">
              返信率3倍。<br />
              作業時間<span className="text-emerald-400">90%カット。</span><br />
              AIがあなたの<br className="hidden sm:block" />
              右腕になる。
            </h1>

            {/* Subtitle — results focused */}
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              口コミ返信・コールドメール・契約書レビューを自動化。
              ReplyAI を使えば、毎日2〜3時間の単純作業がゼロになります。
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LIVE_URL}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-4 transition-colors shadow-lg shadow-emerald-500/25"
                data-track="hero-b-primary-cta"
              >
                14日間無料で始める →
              </a>
              <a
                href={`${LIVE_URL}/free/review-reply`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 transition-colors"
                data-track="hero-b-demo-cta"
              >
                デモを見る
              </a>
            </div>

            {/* Micro-copy */}
            <p className="text-sm text-slate-400">
              クレカ不要 · いつでも解約可 · 5分でスタート
            </p>

            {/* Results metrics */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {[
                { value: "3x", label: "返信率向上" },
                { value: "90%", label: "作業時間削減" },
                { value: "30秒", label: "返信生成時間" },
              ].map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-emerald-400">{m.value}</span>
                  <span className="text-xs text-slate-400">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Metrics mockup */}
          <div
            className="hidden lg:block animate-slide-in-left animate-delay-200"
            aria-hidden="true"
          >
            <MetricsMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsMockup() {
  const bars = [
    { label: "返信時間（旧）", value: 90, color: "bg-slate-600" },
    { label: "返信時間（新）", value: 10, color: "bg-emerald-500" },
    { label: "返信率（旧）", value: 30, color: "bg-slate-600" },
    { label: "返信率（新）", value: 90, color: "bg-indigo-500" },
  ];

  return (
    <div className="rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/60 border-b border-slate-700">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">ReplyAI — パフォーマンスレポート</span>
      </div>

      <div className="p-6 space-y-5">
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">導入前後の比較</p>

        <div className="space-y-4">
          {bars.map((bar) => (
            <div key={bar.label} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">{bar.label}</span>
                <span className="text-xs text-slate-400 font-mono">{bar.value}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${bar.color} bar-animated`}
                  style={{ "--bar-width": `${bar.value}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mt-2">
          <p className="text-xs text-emerald-400 font-medium">月次サマリー</p>
          <p className="text-lg font-bold text-white mt-1">作業時間 58時間 → 6時間</p>
          <p className="text-xs text-slate-400 mt-0.5">52時間の削減 / 月あたり</p>
        </div>
      </div>
    </div>
  );
}
