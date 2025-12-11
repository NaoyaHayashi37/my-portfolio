import { Project } from "./types";

// 型「Project」の配列としてデータを定義
export const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用して作成した個人のポートフォリオサイトです。Vercelでホスティングし、CI/CD環境を構築しました。",
    imageUrl: "/images/portfolio.jpg", // 画像は後で置きます
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourname/my-portfolio",
    demoUrl: "https://your-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "研究用データ分析スクリプト",
    description: "Pythonを用いた実験データの自動解析ツール。従来手作業だった処理を自動化し、作業時間を90%削減しました。",
    imageUrl: "/images/research.jpg",
    techStack: ["Python", "Pandas", "Matplotlib"],
    // githubUrlなどが無い場合は書かなくてOK（型定義で ? にしたためエラーにならない）
  },
];
