import { Project } from "./types";

// 型「Project」の配列としてデータを定義
export const projects: Project[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用して作成した個人のポートフォリオサイトです。Vercelでホスティングし、CI/CD環境を構築しました。",
    imageUrl: "/images/portfolio.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/NaoyaHayashi37/my-portfolio",
    demoUrl: "https://my-portfolio-three-eta-83.vercel.app/",
  },
  {
    id: 2,
    title: "Chappy",
    description: "LINEを用いた通知システムです。",
    imageUrl: "/images/chappy.jpg",
    techStack: ["Python", "AWS", "LINE Messaging API"],
    //githubUrl: "",
    //demoUrl: "",
  },
];
