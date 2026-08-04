"use client";

import { useState, useEffect, useCallback } from "react";

const LIVE_URL = "https://replyai-labs.vercel.app";

// Ref: Birdeye's trust badge placement + Lemlist's dark navy hero background
export default function HeroA() {
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-1.5">
                ✨ 3つのAIツールを1つのプランで
              </span>
            </div>

            {/* H1 — Typewriter animation, 1文字ずつ打ち込み */}
            <HeroTypewriter />

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              ReplyAI は口コミ返信・コールドメール・契約書レビューの3つをまとめた
              AIアシスタント。毎日の単純作業から解放します。
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LIVE_URL}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-4 transition-colors shadow-lg shadow-emerald-500/25"
                data-track="hero-a-primary-cta"
              >
                14日間無料で始める →
              </a>
              <a
                href={`${LIVE_URL}/free/review-reply`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 transition-colors"
                data-track="hero-a-demo-cta"
              >
                デモを見る
              </a>
            </div>

            {/* Micro-copy */}
            <p className="text-sm text-slate-400">
              クレカ不要 · いつでも解約可 · 5分でスタート
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <span className="flex items-center gap-1.5 text-sm text-slate-300 font-medium">
                <span className="text-amber-400">⭐</span>
                4.8/5.0 満足度
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-300 font-medium">
                <span>🏢</span>
                導入企業300社+
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-300 font-medium">
                <span>⚡</span>
                30秒で返信生成
              </span>
            </div>
          </div>

          {/* Right: Before/After animated demo */}
          <div className="animate-slide-in-left animate-delay-200">
            <BeforeAfterDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── H1 Typewriter — 1文字ずつ打ち込み、最終行を強調 ── */

const TITLE_LINES = [
  { text: "レビュー返信も、", accent: false },
  { text: "営業メールも、", accent: false },
  { text: "契約チェックも。", accent: false },
  { text: "もう手動でやらなくていい。", accent: true },
];

const TITLE_TYPING_SPEED = 60;
const TITLE_LINE_PAUSE = 300;
const TITLE_ACCENT_PAUSE = 600;

function HeroTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    if (done) return;

    const currentLine = TITLE_LINES[lineIndex];
    if (!currentLine) return;

    if (charIndex < currentLine.text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), TITLE_TYPING_SPEED);
      return () => clearTimeout(timer);
    }

    // Line complete — move to next
    const isLast = lineIndex === TITLE_LINES.length - 1;
    if (isLast) {
      const doneTimer = setTimeout(() => setDone(true), 0);
      const underlineTimer = setTimeout(() => setShowUnderline(true), 200);
      return () => {
        clearTimeout(doneTimer);
        clearTimeout(underlineTimer);
      };
    }

    const pause = TITLE_LINES[lineIndex + 1]?.accent ? TITLE_ACCENT_PAUSE : TITLE_LINE_PAUSE;
    const timer = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, pause);
    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, done]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] min-h-[220px] sm:min-h-[280px] md:min-h-[340px]">
      {TITLE_LINES.map((line, i) => {
        const isCurrentLine = i === lineIndex;
        const isPastLine = i < lineIndex;
        const isFutureLine = i > lineIndex;
        const displayText = isPastLine || done
          ? line.text
          : isCurrentLine
            ? line.text.slice(0, charIndex)
            : "";

        if (isFutureLine && !done) return <span key={i} className="block">&nbsp;</span>;

        return (
          <span
            key={i}
            className={`block ${line.accent ? "text-emerald-400" : ""}`}
          >
            {line.accent ? (
              <>
                {/* 「手動」にアンダーライン強調 */}
                {done ? (
                  <>
                    もう<span className="relative inline-block">手動<span className={showUnderline ? "hero-line-accent-underline" : ""} /></span>でやらなくていい。
                  </>
                ) : (
                  <>
                    {displayText}
                    {isCurrentLine && !done && (
                      <span className="ml-0.5 inline-block h-[0.85em] w-[3px] align-middle bg-current animate-pulse" />
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {displayText}
                {isCurrentLine && !done && (
                  <span className="ml-0.5 inline-block h-[0.85em] w-[3px] align-middle bg-current animate-pulse" />
                )}
              </>
            )}
          </span>
        );
      })}
    </h1>
  );
}

/* ── Before/After typing animation demo ── */

const DEMOS = [
  {
    review: "接客が最悪でした。料理が来るのに40分。二度と行きません。★1",
    reply:
      "貴重なご意見をいただき誠にありがとうございます。お食事のご提供にお時間をいただき、大変申し訳ございませんでした。オペレーション体制を見直し、全てのお客様にスムーズなお食事体験をお届けできるよう改善に努めてまいります。改めてのご来店をスタッフ一同お待ちしております。",
    star: 1,
  },
  {
    review: "Amazing experience! The wagyu was cooked to perfection and the staff was incredibly attentive. Will definitely be back! ★5",
    reply:
      "Thank you so much for your wonderful review! We're thrilled to hear you enjoyed the wagyu — our chef takes great pride in sourcing and preparing the finest cuts. Your kind words about our staff mean the world to us. We look forward to welcoming you back soon for another memorable dining experience.",
    star: 5,
  },
  {
    review: "雰囲気は良かったけど、注文を間違えられて残念。デザートも品切れでした。★2",
    reply:
      "ご来店いただきありがとうございます。ご注文の誤りとデザートの品切れ、重ねてお詫び申し上げます。在庫管理とオーダー確認のフローを早急に見直します。次回お越しの際にはより良いお時間をお過ごしいただけるよう、スタッフ一同精進いたします。",
    star: 2,
  },
  {
    review: "ランチのコスパが最高です！特にハンバーグセットは絶品。毎週通ってます。★5",
    reply:
      "いつもご愛顧いただき本当にありがとうございます。ハンバーグセットをお気に入りいただけてとても嬉しいです。毎週お越しいただけるとのこと、シェフもスタッフも大変励みになります。今後も変わらない味とサービスでお迎えいたします。",
    star: 5,
  },
  {
    review: "The food was bland and overpriced. Service was rude. Would not recommend. ★2",
    reply:
      "Thank you for taking the time to share your experience. We sincerely apologize that our food and service did not meet your expectations. Your feedback has been shared with our kitchen and front-of-house teams to address these issues directly. We would love the opportunity to make it right — please reach out to us for a complimentary visit.",
    star: 2,
  },
];

const TYPING_SPEED = 25;
const PAUSE_AFTER_REVIEW = 800;
const PROCESSING_DURATION = 1500;
const PAUSE_AFTER_REPLY = 4000;

type Phase = "typing-review" | "processing" | "typing-reply" | "done";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count}つ星`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i <= count ? "text-yellow-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProcessingDots() {
  return (
    <div className="flex items-center gap-2 text-sm text-indigo-300">
      <div className="flex gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:0ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:300ms]" />
      </div>
      <span>ReplyAI が返信を生成中...</span>
    </div>
  );
}

function BeforeAfterDemo() {
  const [demoIndex, setDemoIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-review");
  const [reviewChars, setReviewChars] = useState(0);
  const [replyChars, setReplyChars] = useState(0);

  const demo = DEMOS[demoIndex];

  const resetAndNext = useCallback(() => {
    setDemoIndex((prev) => (prev + 1) % DEMOS.length);
    setPhase("typing-review");
    setReviewChars(0);
    setReplyChars(0);
  }, []);

  // Review typing
  useEffect(() => {
    if (phase !== "typing-review") return;
    if (reviewChars >= demo.review.length) {
      const timer = setTimeout(() => setPhase("processing"), PAUSE_AFTER_REVIEW);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setReviewChars((c) => c + 1), TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [phase, reviewChars, demo.review.length]);

  // Processing phase
  useEffect(() => {
    if (phase !== "processing") return;
    const timer = setTimeout(() => setPhase("typing-reply"), PROCESSING_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  // Reply typing
  useEffect(() => {
    if (phase !== "typing-reply") return;
    if (replyChars >= demo.reply.length) return;
    const timer = setTimeout(() => {
      const next = replyChars + 1;
      setReplyChars(next);
      if (next >= demo.reply.length) setPhase("done");
    }, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [phase, replyChars, demo.reply.length]);

  // Auto-advance after done
  useEffect(() => {
    if (phase !== "done") return;
    const timer = setTimeout(resetAndNext, PAUSE_AFTER_REPLY);
    return () => clearTimeout(timer);
  }, [phase, resetAndNext]);

  const showReply = phase === "typing-reply" || phase === "done";
  const generationTime = phase === "done" ? `${(demo.reply.length * TYPING_SPEED / 1000).toFixed(1)}` : null;

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {/* Before: Review card */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/30 p-5 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
              BEFORE
            </span>
            <span className="text-xs text-slate-500">顧客レビュー</span>
          </div>
          <StarRating count={demo.star} />
          <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-slate-300">
            {demo.review.slice(0, reviewChars)}
            {phase === "typing-review" && reviewChars < demo.review.length && (
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-red-400" />
            )}
          </p>
        </div>

        {/* After: AI Reply card */}
        <div
          className={`rounded-2xl border p-5 backdrop-blur-sm transition-all duration-500 ${
            showReply
              ? "border-emerald-500/30 bg-emerald-950/30"
              : "border-slate-700/30 bg-slate-800/20"
          }`}
        >
          <div className="mb-3 flex items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
                showReply
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "bg-slate-700/30 text-slate-500"
              }`}
            >
              AFTER
            </span>
            <span className="text-xs text-slate-500">ReplyAI 生成</span>
          </div>

          <div className="min-h-[60px]">
            {phase === "typing-review" && (
              <p className="text-sm text-slate-600">レビューを待っています...</p>
            )}
            {phase === "processing" && <ProcessingDots />}
            {showReply && (
              <p className="text-sm leading-relaxed text-slate-300">
                {demo.reply.slice(0, replyChars)}
                {phase === "typing-reply" && (
                  <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-emerald-400" />
                )}
              </p>
            )}
          </div>

          {generationTime && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {generationTime}秒で生成
            </div>
          )}
        </div>
      </div>

      {/* Demo indicator dots */}
      <div className="flex justify-center gap-2">
        {DEMOS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDemoIndex(i);
              setPhase("typing-review");
              setReviewChars(0);
              setReplyChars(0);
            }}
            className={`h-2 rounded-full transition-all ${
              i === demoIndex ? "w-6 bg-indigo-400" : "w-2 bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`デモ ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
