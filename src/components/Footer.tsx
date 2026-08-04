import Link from "next/link";
import { XIcon } from "lucide-react";

const LIVE_URL = "https://replyai-labs.vercel.app";

const FOOTER_LINKS = [
  {
    heading: "プロダクト",
    links: [
      { label: "口コミ返信AI", href: `${LIVE_URL}/free/review-reply` },
      { label: "営業メールAI", href: `${LIVE_URL}` },
      { label: "契約確認AI", href: `${LIVE_URL}` },
      { label: "料金プラン", href: "#pricing" },
    ],
  },
  {
    heading: "リソース",
    links: [
      { label: "よくある質問", href: "#faq" },
      { label: "機能一覧", href: "#features" },
      { label: "導入事例", href: "#testimonials" },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "運営会社", href: "https://globridge.co.jp", external: true },
      { label: "お問い合わせ", href: "mailto:info@replyai.jp" },
      { label: "X (Twitter)", href: "https://x.com/ReplyAI_app", external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-950 text-slate-400"
      aria-label="サイトフッター"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 font-bold text-xl text-white">
              ReplyAI
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mb-1" />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              AIで日常業務を自動化。<br />
              口コミ返信・営業メール・契約チェックを1つのプランで。
            </p>
            <p className="text-xs text-slate-600">
              © {currentYear} ReplyAI Labs. All rights reserved.
            </p>
          </div>

          {/* Cols 2-4: Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 order-2 sm:order-1">
            © {currentYear} ReplyAI Labs. All rights reserved.
          </p>

          {/* SNS icons */}
          <div className="flex items-center gap-4 order-1 sm:order-2" aria-label="ソーシャルリンク">
            <a
              href="https://x.com/ReplyAI_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ssakurada-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              {/* GitHub mark — no GithubIcon in this lucide-react version */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
