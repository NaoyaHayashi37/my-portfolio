import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N.H.'s Portfolio",
  description: "N.H.のポートフォリオサイト",
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
              <Link href="/works" className="hover:text-gray-300">Works</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
            </div>
          </nav>
        </header>
        {/* ヘッダー終了 */}

        {/* 各ページの中身がここに挿入される */}
        {children}

        {/* フッター */}
        <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-auto">
          <small>&copy; 2025 N.H. All rights reserved.</small>
        </footer>
      </body>
    </html>
  );
}
