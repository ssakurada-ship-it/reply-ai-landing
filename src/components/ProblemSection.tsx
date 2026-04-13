"use client";

import { useInView } from "@/hooks/useInView";
import { MessageSquare, Mail, FileText } from "lucide-react";

const PROBLEMS = [
  {
    icon: MessageSquare,
    persona: "飲食店オーナー",
    title: "毎晩レビュー返信に1時間",
    description:
      "星1〜2の口コミに冷静な返信を書くのは精神的にも辛い。毎晩閉店後に1時間かけて書いているが、適切な文面か自信が持てない。",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Mail,
    persona: "営業マネージャー",
    title: "コールドメールの返信率が低い",
    description:
      "テンプレートのままでは相手に刺さらない。かといって全件パーソナライズするには時間が足りない。返信率が2%以下で頭を抱えている。",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: FileText,
    persona: "経営者・法務担当",
    title: "契約書レビューに時間もお金もかかる",
    description:
      "弁護士に依頼すると1件数万円。かといって自分では見落としが怖い。重要な条項のリスクを素早く把握する手段がなかった。",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const DELAY_CLASSES = ["", "animate-delay-200", "animate-delay-400"];

export default function ProblemSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="problems"
      className="py-20 md:py-28 bg-white"
      aria-label="課題セクション"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            こんな悩み、ありませんか？
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-5 ${
                  isInView
                    ? `animate-fade-in-up ${DELAY_CLASSES[index]}`
                    : "opacity-0"
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bg}`}>
                  <Icon className={`w-6 h-6 ${problem.color}`} strokeWidth={2} />
                </div>

                {/* Persona badge */}
                <span className={`text-xs font-semibold tracking-wide uppercase ${problem.color}`}>
                  {problem.persona}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
