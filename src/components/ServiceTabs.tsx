"use client";

import { CheckCircle, MessageSquare, Mail, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const LIVE_URL = "https://replyai-labs.vercel.app";

const TABS = [
  {
    value: "review",
    label: "口コミ返信AI",
    icon: MessageSquare,
    headline: "プロ品質の返信を30秒で生成",
    description:
      "Google・食べログ・G2などあらゆるプラットフォームの口コミに対応。トーン調整機能で、ブランドの声に合わせた返信を自動生成します。",
    features: [
      "星1〜5すべての口コミに対応",
      "返信トーンをフォーマル〜カジュアルで調整",
      "多言語（英語・中国語・韓国語）対応",
      "ワンクリックでコピー",
    ],
    mockup: <ReviewMockup />,
  },
  {
    value: "email",
    label: "営業メールAI",
    icon: Mail,
    headline: "返信率を上げるパーソナライズメール",
    description:
      "相手の会社URLを貼り付けるだけで、その企業の事業内容・課題に合わせた完全パーソナライズのコールドメールを自動生成します。",
    features: [
      "企業サイトを自動解析・パーソナライズ",
      "SPIN/AIDA フレームワーク内蔵",
      "業種別テンプレート50種以上",
      "フォローアップメールも自動生成",
    ],
    mockup: <EmailMockup />,
  },
  {
    value: "contract",
    label: "契約確認AI",
    icon: FileText,
    headline: "リスク条項を色分けで即把握",
    description:
      "PDFを貼り付けるだけで、不利な条項・曖昧な記述・リスクの高い箇所を赤・黄・緑でハイライト。弁護士に渡す前の一次チェックに最適です。",
    features: [
      "リスクレベルを赤・黄・緑で可視化",
      "重要条項の1ページ要約レポート",
      "修正提案文も自動生成",
      "業務委託・秘密保持・雇用契約に対応",
    ],
    mockup: <ContractMockup />,
  },
];

export default function ServiceTabs() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-slate-50"
      aria-label="機能タブ"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            3つのAIツール、1つのプラン
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            それぞれ別のSaaSを契約する必要はありません
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="review" className="gap-6">
          <TabsList
            className="w-full max-w-lg mx-auto flex h-auto p-1 rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden"
            variant="default"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 py-2 px-1 sm:py-2.5 sm:px-2 text-xs sm:text-sm font-medium rounded-lg data-active:bg-indigo-600 data-active:text-white text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-center sm:text-left">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {/* CSS fade-in replaces AnimatePresence */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 animate-fade-in">
                {/* Left: description */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {tab.headline}
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                    {tab.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {tab.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <a
                      href={LIVE_URL}
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 transition-colors"
                      data-track={`service-tabs-cta-${tab.value}`}
                    >
                      無料で試してみる →
                    </a>
                  </div>
                </div>

                {/* Right: mockup */}
                <div aria-hidden="true">{tab.mockup}</div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

// --- Mockup components ---

function ReviewMockup() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-xs text-slate-500 font-mono">口コミ返信AI</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="rounded-lg bg-slate-800 border border-slate-700 p-3.5">
          <p className="text-xs text-slate-500 mb-1.5">★★★☆☆ 入力された口コミ</p>
          <p className="text-xs text-slate-300">「立地は良いが、接客がいまひとつ。料理は美味しかった。」</p>
        </div>
        <div className="rounded-lg bg-indigo-950/50 border border-indigo-800/40 p-3.5">
          <p className="text-xs text-indigo-400 mb-2">✦ AI生成返信</p>
          <p className="text-xs text-slate-200 leading-relaxed">
            この度はご来店いただき、またご意見をお寄せくださりありがとうございます。料理をお楽しみいただけたとのこと、大変嬉しく思います。接客面についてのご指摘は真摯に受け止め、スタッフ全員で改善に取り組んでまいります。またのご来店を心よりお待ちしております。
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg px-3 py-1">コピー</span>
          <span className="text-xs bg-slate-700 text-slate-400 rounded-lg px-3 py-1">フォーマル</span>
          <span className="text-xs bg-slate-700 text-slate-400 rounded-lg px-3 py-1">再生成</span>
        </div>
      </div>
    </div>
  );
}

function EmailMockup() {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-xs text-slate-500 font-mono">営業メールAI</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="rounded-lg bg-slate-800 border border-slate-700 p-3.5">
          <p className="text-xs text-slate-500 mb-1.5">URL入力</p>
          <p className="text-xs text-indigo-400 font-mono">https://example-company.co.jp</p>
        </div>
        <div className="rounded-lg bg-indigo-950/50 border border-indigo-800/40 p-3.5">
          <p className="text-xs text-indigo-400 mb-2">✦ パーソナライズメール</p>
          <div className="space-y-1.5 text-xs text-slate-300">
            <p><span className="text-slate-500">件名：</span>御社の口コミ返信業務を自動化する方法について</p>
            <p className="mt-2 leading-relaxed">田中様、はじめまして。御社がGoogleマップで200件以上の口コミを管理されていることを拝見しました。ReplyAI を活用すれば、返信作業を月30時間から3時間に削減できます…</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg px-3 py-1">送信準備完了</span>
          <span className="text-xs bg-slate-700 text-slate-400 rounded-lg px-3 py-1">編集</span>
        </div>
      </div>
    </div>
  );
}

function ContractMockup() {
  const clauses = [
    { risk: "red", text: "損害賠償の上限を定めない条項が含まれています" },
    { risk: "yellow", text: "解約予告期間が90日と長めに設定されています" },
    { risk: "green", text: "秘密保持条項は標準的な内容です" },
  ];

  const riskColor = {
    red: "bg-rose-500/20 border-rose-500/40 text-rose-300",
    yellow: "bg-amber-500/20 border-amber-500/40 text-amber-300",
    green: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-xs text-slate-500 font-mono">契約確認AI</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-slate-700 text-slate-400 rounded px-2 py-0.5">業務委託契約書.pdf</span>
          <span className="text-xs text-slate-500">解析完了</span>
        </div>
        <p className="text-xs text-slate-500">リスク検出結果 (3件)</p>
        {clauses.map((clause) => (
          <div
            key={clause.text}
            className={`rounded-lg border p-3 text-xs leading-relaxed ${riskColor[clause.risk as keyof typeof riskColor]}`}
          >
            {clause.risk === "red" ? "🔴 " : clause.risk === "yellow" ? "🟡 " : "🟢 "}
            {clause.text}
          </div>
        ))}
      </div>
    </div>
  );
}
