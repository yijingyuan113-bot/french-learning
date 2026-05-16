import { Link } from 'react-router-dom';

export function Home() {
  const levels = [
    { id: 'A1', name: 'A1 入门', desc: '基础问候和简单词汇', color: 'bg-green-500' },
    { id: 'A2', name: 'A2 基础', desc: '日常交流和简单对话', color: 'bg-blue-500' },
    { id: 'B1', name: 'B1 中级', desc: '流畅交流和观点表达', color: 'bg-yellow-500' },
    { id: 'B2', name: 'B2 进阶', desc: '复杂话题和深入讨论', color: 'bg-red-500' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">🇫🇷 法语学习系统</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {levels.map(level => (
          <Link
            key={level.id}
            to={`/words/${level.id}`}
            className="block bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
          >
            <div className="flex items-center gap-4">
              <div className={`${level.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                {level.id}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{level.name}</h2>
                <p className="text-gray-600">{level.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/phrases" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition text-center">
          <span className="text-4xl mb-2 block">📝</span>
          <h3 className="font-semibold">短语学习</h3>
        </Link>
        <Link to="/dialogues" className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition text-center">
          <span className="text-4xl mb-2 block">💬</span>
          <h3 className="font-semibold">日常对话</h3>
        </Link>
      </div>
    </div>
  );
}