"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { CheckIcon } from "lucide-react";

const LIVE_URL = "https://replyai-labs.vercel.app";

interface Plan {
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  currency: string;
  badge?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  ctaStyle: "outline" | "emerald" | "indigo";
  recommended?: boolean;
  trackId: string;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "まずは試したい方に",
    monthlyPrice: 0,
    annualPrice: 0,
    currency: "¥",
    features: [
      "5回/月の生成",
      "口コミ返信AI",
      "営業メールAI",
      "契約確認AI",
    ],
    cta: "無料で始める",
    ctaHref: LIVE_URL,
    ctaStyle: "outline",
    trackId: "pricing-free",
  },
  {
    name: "Starter",
    tagline: "個人事業主・小規模チームに",
    monthlyPrice: 4980,
    annualPrice: 3980,
    currency: "¥",
    badge: "最も選ばれています",
    features: [
      "無制限生成",
      "全機能",
      "優先サポート",
      "APIアクセス",
      "トーンカスタマイズ",
    ],
    cta: "14日間無料トライアル",
    ctaHref: LIVE_URL,
    ctaStyle: "emerald",
    recommended: true,
    trackId: "pricing-starter",
  },
  {
    name: "Enterprise",
    tagline: "大規模チーム・代理店に",
    monthlyPrice: 19800,
    annualPrice: 15800,
    currency: "¥",
    features: [
      "全Starter機能",
      "チーム5名まで",
      "カスタムテンプレート",
      "専任サポート",
      "SLA保証",
      "SSO",
    ],
    cta: "お問い合わせ",
    ctaHref: "mailto:info@replyai.jp",
    ctaStyle: "indigo",
    trackId: "pricing-enterprise",
  },
];

const CTA_STYLES = {
  outline:
    "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400",
  emerald:
    "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25",
  indigo:
    "bg-indigo-600 hover:bg-indigo-700 text-white",
};

const DELAY_CLASSES = ["", "animate-delay-200", "animate-delay-400"];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-white"
      aria-label="料金プラン"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            シンプルな料金プラン
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            すべてのプランで3つのAIツールが使えます
          </p>
        </div>

        {/* Annual/Monthly toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-400"}`}>
            月払い
          </span>
          <button
            role="switch"
            aria-checked={isAnnual}
            onClick={() => setIsAnnual((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${isAnnual ? "bg-indigo-600" : "bg-slate-300"}`}
          >
            <span className="sr-only">年払いに切り替え</span>
            <span
              className="inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200"
              style={{ transform: isAnnual ? "translateX(24px)" : "translateX(4px)" }}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-400"}`}>
            年払い
          </span>
          <span
            className={`inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 transition-all duration-200 ${
              isAnnual ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            2ヶ月分お得
          </span>
        </div>

        {/* Plan cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 md:p-8 flex flex-col gap-6 ${
                  plan.recommended
                    ? "ring-2 ring-indigo-600 shadow-xl scale-[1.02]"
                    : "border-slate-200 shadow-sm"
                } ${
                  isInView
                    ? `animate-fade-in-up ${DELAY_CLASSES[index]}`
                    : "opacity-0"
                }`}
              >
                {/* Recommended badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-indigo-600 text-white text-xs font-semibold px-3 py-1 whitespace-nowrap shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Name & tagline */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1">
                  {price === 0 ? (
                    <span className="text-4xl font-extrabold text-slate-900">無料</span>
                  ) : (
                    <>
                      <span className="text-lg font-bold text-slate-500 mb-1">{plan.currency}</span>
                      <span className="text-4xl font-extrabold text-slate-900 tabular-nums">
                        {price?.toLocaleString("ja-JP")}
                      </span>
                      <span className="text-sm text-slate-500 mb-1">/月</span>
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`inline-flex items-center justify-center rounded-xl font-semibold text-sm px-6 py-3 transition-colors ${CTA_STYLES[plan.ctaStyle]}`}
                  data-track={plan.trackId}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-500 mt-10">
          全プラン14日間無料トライアル付き。クレカ登録不要。
        </p>
      </div>
    </section>
  );
}
