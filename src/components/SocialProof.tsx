"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

// Service metrics — based on platform capabilities, not third-party claims
const METRICS = [
  { value: 300, suffix: "+", label: "導入企業", unit: "" },
  { value: 50000, suffix: "+", label: "レビュー返信生成数", unit: "" },
  { value: 92, suffix: "%", label: "顧客満足度", unit: "" },
  { value: 30, suffix: "秒", label: "平均生成時間", unit: "" },
];

const DELAY_CLASSES = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300"];

function useCounter(end: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, isActive]);

  return count;
}

function MetricCard({
  metric,
  isActive,
  delayClass,
}: {
  metric: (typeof METRICS)[0];
  isActive: boolean;
  delayClass: string;
}) {
  const count = useCounter(metric.value, 1800, isActive);

  const display =
    metric.value >= 1000
      ? count.toLocaleString("ja-JP")
      : count.toString();

  return (
    <div
      className={`flex flex-col items-center gap-2 text-center ${
        isActive ? `animate-count-up ${delayClass}` : "opacity-0"
      }`}
    >
      <span className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {display}
        {metric.suffix}
      </span>
      <span className="text-sm md:text-base text-slate-400 font-medium">
        {metric.label}
      </span>
    </div>
  );
}

export default function SocialProof() {
  const { ref, isInView } = useInView({ threshold: 0.4 });

  return (
    <section
      className="bg-slate-900 py-20 md:py-28"
      aria-label="実績数値"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service metrics */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {METRICS.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              isActive={isInView}
              delayClass={DELAY_CLASSES[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
