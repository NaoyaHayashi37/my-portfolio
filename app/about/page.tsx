export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">About Me</h1>

      {/* プロフィールセクション */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">プロフィール</h2>
        <p className="leading-relaxed text-gray-700">
          はじめまして、N.H.です。<br />
          現在、大阪大学大学院 工学研究科でプラズマ物理学を専攻しています。<br />
          研究では高強度レーザーを用いたイオン加速に関する現象を研究しており、
          個人開発ではアプリケーション制作、機械学習などを行っています。
        </p>
      </section>

      {/* スキルセクション */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">スキル</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-gray-600 mb-2">Languages</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>TypeScript / JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-600 mb-2">Tools</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Git / GitHub</li>
              <li>AWS</li>
              <li>Terraform</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 経歴セクション */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">経歴</h2>
        <ul className="space-y-4">
          <li className="flex flex-col md:flex-row md:items-center justify-between border-l-4 border-gray-300 pl-4">
            <div>
              <h3 className="font-bold">大阪大学 入学</h3>
              <p className="text-sm text-gray-600">工学部 情報工学科</p>
            </div>
            <span className="text-sm text-gray-500">2022年 4月</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-center justify-between border-l-4 border-gray-300 pl-4">
            <div>
              <h3 className="font-bold">大阪大学 卒業</h3>
              <p className="text-sm text-gray-600">工学部 電子情報工学科</p>
            </div>
            <span className="text-sm text-gray-500">2026年 3月</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-center justify-between border-l-4 border-blue-500 pl-4">
            <div>
              <h3 className="font-bold">大阪大学大学院 入学</h3>
              <p className="text-sm text-gray-600">工学研究科 修士課程</p>
            </div>
            <span className="text-sm text-gray-500">2026年 4月</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
