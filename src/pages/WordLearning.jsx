import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpeakButton } from '../components/SpeakButton';
import { useProgress } from '../hooks/useProgress';
import { words } from '../data/words';

export function WordLearning() {
  const { level } = useParams();
  const { markLearned, isLearned, getProgress } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordList = words[level] || [];

  if (wordList.length === 0) {
    return <div className="text-center py-10">该级别暂无单词数据</div>;
  }

  const currentWord = wordList[currentIndex];
  const progress = getProgress(level, wordList.length);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wordList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wordList.length) % wordList.length);
  };

  const handleMarkLearned = () => {
    markLearned(level, currentWord.id);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Level {level}</h1>
        <div className="text-gray-600">{currentIndex + 1} / {wordList.length}</div>
      </div>

      {/* 进度条 */}
      <div className="bg-gray-200 rounded-full h-3 mb-8">
        <div
          className="bg-primary h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 单词卡片 */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-6">
        <div className="text-6xl mb-4">{currentWord.emoji}</div>
        <h2 className="text-4xl font-bold mb-2">{currentWord.french}</h2>
        <p className="text-gray-600 mb-2">{currentWord.chinese}</p>
        <p className="text-gray-400 text-sm">[{currentWord.pronunciation}]</p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <SpeakButton text={currentWord.french} size="lg" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ← 上一个
        </button>
        <button
          onClick={handleMarkLearned}
          className={`px-6 py-2 rounded-lg ${
            isLearned(level, currentWord.id)
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {isLearned(level, currentWord.id) ? '✓ 已学会' : '标记已学'}
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
        >
          下一个 →
        </button>
      </div>
    </div>
  );
}