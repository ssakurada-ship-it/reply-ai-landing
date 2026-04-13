"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const NAV_LINKS = [
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "導入事例", href: "#testimonials" },
];

const LIVE_URL = "https://replyai-labs.vercel.app";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
      aria-label="サイトナビゲーション"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 font-bold text-xl text-slate-900">
            ReplyAI
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mb-1" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="メインメニュー">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${LIVE_URL}/free/review-reply`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              data-track="navbar-free-tool"
            >
              無料ツール
            </a>
            <a
              href={LIVE_URL}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 transition-colors"
              data-track="navbar-cta"
            >
              無料で始める
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS transition replaces AnimatePresence */}
      <div
        className={`md:hidden border-t border-slate-100 bg-white overflow-hidden transition-all duration-200 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1" aria-label="モバイルメニュー">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-slate-900 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`${LIVE_URL}/free/review-reply`}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-slate-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              data-track="navbar-mobile-free-tool"
            >
              無料ツール（登録不要）
            </a>
            <a
              href={LIVE_URL}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
              data-track="navbar-mobile-cta"
            >
              無料で始める
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
