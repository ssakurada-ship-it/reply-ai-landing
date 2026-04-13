import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReplyAI — 口コミ返信・営業メール・契約チェックのAIアシスタント",
  description:
    "ReplyAI は口コミ返信・コールドメール生成・契約書リスク検出の3つをまとめたAIアシスタント。毎日の単純作業から解放されます。14日間無料トライアル、クレカ不要。",
  keywords: [
    "口コミ返信AI",
    "営業メール AI",
    "契約書チェック AI",
    "AI SaaS",
    "Google レビュー 返信",
    "コールドメール 自動化",
  ],
  openGraph: {
    title: "ReplyAI — 口コミ返信・営業メール・契約チェックのAIアシスタント",
    description:
      "3つのAIツールを1つのプランで。口コミ返信・営業メール・契約書チェックを自動化します。",
    url: "https://replyai-labs.vercel.app",
    siteName: "ReplyAI",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReplyAI — 口コミ返信・営業メール・契約チェックのAIアシスタント",
    description: "3つのAIツールを1つのプランで。毎日の単純作業から解放されます。",
    site: "@ReplyAI_app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
