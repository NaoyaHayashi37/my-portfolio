import { projects } from "../constants"; // データ読み込み

export default function Works() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Works</h1>

      {/* データの数だけループして表示する準備 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded shadow">
            {/* とりあえずタイトルだけ表示してみる */}
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              {project.techStack.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
