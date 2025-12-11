import { projects } from "../constants";
import Link from "next/link";
import Image from "next/image"; // Next.js最適化画像コンポーネント

export default function Works() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Works</h1>

      {/* グリッドレイアウト: スマホで1列、タブレット以上で2列 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">

            {/* 画像エリア */}
            <div className="relative h-48 w-full bg-gray-200">
              {/* ※本来はNext.jsの<Image>推奨ですが、設定簡易化のため今回は通常の<img>タグを使います */}
              {/* 画像がない場合の代替テキスト(alt)は必須です */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* テキストエリア */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

              {/* 使用技術のタグ表示 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* リンクボタン */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                    GitHub ↗
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                    Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
