"use client";

import { useInView } from "@/hooks/useInView";

const LIVE_URL = "https://replyai-labs.vercel.app";

export default function FinalCTA() {
  const { ref, isInView } = useInView({ threshold: 0.4 });

  return (
    <section
      className="bg-slate-900 py-20 md:py-28"
      aria-label="最終CTAセクション"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`flex flex-col items-center gap-8 transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-balance tracking-tight">
            今日から、手動作業を終わらせよう
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            14日間の無料トライアルで、ReplyAIの3つのAIツールをすべて体験してください。
          </p>

          <a
            href={LIVE_URL}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-4 transition-colors shadow-xl shadow-emerald-500/30"
            data-track="final-cta"
          >
            無料で始める →
          </a>

          <p className="text-sm text-slate-400">
            クレカ不要 · 5分でスタート · いつでも解約可
          </p>
        </div>
      </div>
    </section>
  );
}
