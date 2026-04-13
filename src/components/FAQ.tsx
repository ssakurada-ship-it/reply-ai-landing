"use client";

import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "無料トライアルに期限はありますか？",
    answer:
      "14日間の無料トライアルをご用意しています。期間中はStarterプランの全機能をご利用いただけます。14日が経過すると自動的にFreeプラン（5回/月）に移行します。",
  },
  {
    question: "クレジットカードの登録は必要ですか？",
    answer:
      "いいえ、無料トライアルにクレジットカードは不要です。メールアドレスだけで5分以内にご利用を開始できます。有料プランへのアップグレード時に初めてお支払い情報をご入力いただきます。",
  },
  {
    question: "どんな言語に対応していますか？",
    answer:
      "日本語、英語、中国語（簡体字・繁体字）、韓国語に対応しています。入力された口コミの言語を自動検出し、同じ言語で返信を生成します。異なる言語での返信生成もご指定いただけます。",
  },
  {
    question: "契約の縛りはありますか？",
    answer:
      "月額プランはいつでも解約可能です。解約後も請求期間の末日までサービスをご利用いただけます。年払いプランは年間契約となりますが、途中解約の場合は残期間に応じて返金対応を検討します。",
  },
  {
    question: "APIは使えますか？",
    answer:
      "Starter以上のプランでREST APIをご利用いただけます。自社システムやCRMとの連携、バッチ処理による大量生成など、幅広いユースケースに対応しています。APIドキュメントはダッシュボードからアクセス可能です。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer:
      "データはAES-256で暗号化して保存されます。入力されたテキストはAIモデルの再学習に使用しません。通信はすべてTLS 1.3で保護されており、定期的なセキュリティ監査を実施しています。",
  },
  {
    question: "既存のツールと連携できますか？",
    answer:
      "Slack、Google Workspace（Gmail・スプレッドシート）、Zapier経由で数百のアプリと連携可能です。APIを利用すれば独自のCRMやPOSシステムとの連携も実現できます。",
  },
  {
    question: "サポート体制は？",
    answer:
      "メールサポートは全プランでご利用いただけます（平日10時〜18時、原則24時間以内に返信）。Starter以上では優先サポート（4時間以内の返信目安）に対応。Enterpriseプランでは専任のカスタマーサクセスマネージャーをご用意します。",
  },
];

export default function FAQ() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-slate-50"
      aria-label="よくある質問"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            よくある質問
          </h2>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Accordion
            className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            multiple={false}
          >
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={String(i)} className="px-6">
                <AccordionTrigger className="py-5 text-sm sm:text-base font-semibold text-slate-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
