import { useProgress } from '../hooks/useProgress';
import { words, phrases, dialogues } from '../data';

export function Progress() {
  const { progress } = useProgress();

  const levels = ['A1', 'A2', 'B1', 'B2'];
  const totalWords = levels.reduce((sum, level) => sum + (words[level]?.length || 0), 0);
  const learnedWords = levels.reduce((sum, level) => sum + (progress[level]?.length || 0), 0);
  const totalPhrases = phrases.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📊 学习进度</h1>

      {/* 总体进度 */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">总体进度</h2>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-200 rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full transition-all"
              style={{ width: `${totalWords > 0 ? (learnedWords / totalWords) * 100 : 0}%` }}
            />
          </div>
          <span className="font-semibold">{learnedWords}/{totalWords}</span>
        </div>
      </div>

      {/* 各级别进度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {levels.map((level) => {
          const levelWords = words[level]?.length || 0;
          const learned = progress[level]?.length || 0;
          return (
            <div key={level} className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Level {level}</span>
                <span>{learned}/{levelWords}</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${levelWords > 0 ? (learned / levelWords) * 100 : 0}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 短语和对话进度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">📝 短语</h3>
          <p className="text-gray-600">共 {totalPhrases} 个短语</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">💬 对话</h3>
          <p className="text-gray-600">共 {dialogues.length} 个场景对话</p>
        </div>
      </div>
    </div>
  );
}