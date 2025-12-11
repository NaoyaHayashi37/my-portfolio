import { Project } from "./types";

// 型「Project」の配列としてデータを定義
export const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用して作成した個人のポートフォリオサイトです。Vercelでホスティングし、CI/CD環境を構築しました。",
    imageUrl: "/images/portfolio.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NaoyaHayashi37/my-portfolio",
    demoUrl: "https://my-portfolio-three-eta-83.vercel.app/",
  },
  {
    id: 2,
    title: "chappy",
    description: "AWSサーバーレスアーキテクチャ（Lambda + EventBridge + API Gateway）を使用した位置情報通知システムです。Python実装でWhoo API連携、LINE Bot機能を搭載しています。",
    imageUrl: "/images/chappy.jpg",
    techStack: ["Python"],
    //githubUrl: "",
    //demoUrl: "",
  },
];
