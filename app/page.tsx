import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center p-8 text-center">
      {/* ヒーローセクション */}
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Hi, I'm N.H.
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        電気工学専攻の大学院生です。<br />
        アプリケーション開発、機械学習も取り組んでいます。
      </p>

      {/* アクションボタン */}
      <div className="flex gap-4">
        <Link
          href="/works"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Works
        </Link>
        <Link
          href="/about"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          About
        </Link>
      </div>
    </main>
  );
}
