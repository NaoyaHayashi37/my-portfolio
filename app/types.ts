// 1つの「制作実績」データの形を定義
export type Project = {
  id: number;              // 管理用ID
  title: string;           // 作品タイトル
  description: string;     // 説明文
  imageUrl: string;        // 画像のパス
  techStack: string[];     // 使用技術（例: ["React", "Python"]）
  githubUrl?: string;      // GitHubのURL
  demoUrl?: string;        // デモサイトのURL
};
