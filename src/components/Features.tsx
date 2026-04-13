"use client";

import { useInView } from "@/hooks/useInView";
import {
  Sparkles,
  Globe,
  SlidersHorizontal,
  Link,
  LayoutTemplate,
  Clock,
  Shield,
  FileCheck,
  Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI返信生成",
    description: "口コミに合わせたプロ品質の返信を瞬時に生成。トーンや文体も調整可能です。",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Globe,
    title: "多言語対応",
    description: "英語・中国語・韓国語のレビューにも自動対応。インバウンド対応もReplyAI一つで。",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: SlidersHorizontal,
    title: "トーン調整",
    description: "フォーマル〜カジュアルまで返信トーンをカスタマイズ。ブランドの声を守ります。",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Link,
    title: "URL解析",
    description: "相手の企業サイトを自動解析してメールをパーソナライズ。返信率が大幅に改善します。",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: LayoutTemplate,
    title: "テンプレート",
    description: "業種別のメールテンプレートを内蔵。飲食・IT・不動産など50種類以上を収録。",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "フォローアップ",
    description: "最適なタイミングでフォローメールを提案。商談の取りこぼしを防ぎます。",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "リスク検出",
    description: "契約書の不利な条項を色分けでハイライト。見落としリスクをゼロに近づけます。",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: FileCheck,
    title: "要約レポート",
    description: "契約書の重要ポイントを1ページで要約。弁護士との打ち合わせ時間を短縮します。",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Users,
    title: "チーム共有",
    description: "チームメンバーと結果を共有・コメント。レビューや承認フローをスムーズに。",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const DELAY_CLASSES = [
  "",
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
  "animate-delay-500",
  "animate-delay-600",
  "animate-delay-100",
  "animate-delay-200",
];

export default function Features() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="all-features"
      className="py-20 md:py-28 bg-slate-50"
      aria-label="全機能一覧"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            すべてのプランに含まれる機能
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Free プランから全機能が使えます
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group ${
                  isInView
                    ? `animate-fade-in-up ${DELAY_CLASSES[index % DELAY_CLASSES.length]}`
                    : "opacity-0"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.bg} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
