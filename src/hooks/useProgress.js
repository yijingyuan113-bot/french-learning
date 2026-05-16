import { useState, useEffect } from 'react';

const STORAGE_KEY = 'french-learning-progress';

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLearned = (level, wordId) => {
    setProgress(prev => ({
      ...prev,
      [level]: [...(prev[level] || []), wordId]
    }));
  };

  const isLearned = (level, wordId) => {
    return progress[level]?.includes(wordId) || false;
  };

  const getProgress = (level, total) => {
    const learned = progress[level]?.length || 0;
    return Math.round((learned / total) * 100);
  };

  return { progress, markLearned, isLearned, getProgress };
}