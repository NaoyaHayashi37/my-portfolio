import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "ポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ヘッダー開始 */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between max-w-5xl mx-auto">
            <Link href="/" className="font-bold text-xl">
              My Portfolio
            </Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/works" className="hover:text-gray-300">Works</Link>
            </div>
          </nav>
        </header>
        {/* ヘッダー終了 */}

        {/* 各ページの中身がここに挿入される */}
        {children}

        {/* フッター（必要ならここに追加） */}
        <footer className="bg-gray-100 text-center p-4 mt-8">
          <small>&copy; 2025 Naoya Hayashi</small>
        </footer>
      </body>
    </html>
  );
}
