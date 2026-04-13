"use client";

import { useInView } from "@/hooks/useInView";

const TESTIMONIALS = [
  {
    quote:
      "毎日30分かかっていた返信作業が5分で終わるようになりました。星1レビューへの返信も、冷静で丁寧な文面を提案してくれるので安心です。",
    name: "田中 健太",
    title: "焼肉店オーナー",
    initials: "田",
    color: "bg-indigo-600",
    rating: 5,
  },
  {
    quote:
      "テンプレメールから脱却できました。相手の会社サイトを読み込んで個別化してくれるので、返信率が明らかに上がっています。",
    name: "佐藤 美咲",
    title: "IT企業 営業部長",
    initials: "佐",
    color: "bg-emerald-600",
    rating: 5,
  },
  {
    quote:
      "弁護士に渡す前の一次チェックに使っています。赤黄緑のハイライトで論点が一目瞭然。レビュー時間が大幅に短縮されました。",
    name: "山田 太郎",
    title: "スタートアップCEO",
    initials: "山",
    color: "bg-violet-600",
    rating: 4,
  },
];

const DELAY_CLASSES = ["", "animate-delay-200", "animate-delay-400"];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count}点満点5点`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-label="お客様の声"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            導入企業の声
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl border border-slate-200 p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow ${
                isInView
                  ? `animate-fade-in-up ${DELAY_CLASSES[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="text-slate-700 text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Person */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
