import { useSpeech } from '../hooks/useSpeech';

export function SpeakButton({ text, size = 'md' }) {
  const { speak } = useSpeech();

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2',
    lg: 'px-4 py-2 text-lg'
  };

  return (
    <button
      onClick={() => speak(text)}
      className={`bg-primary text-white rounded-lg hover:bg-blue-700 transition ${sizeClasses[size]}`}
    >
      🔊 发音
    </button>
  );
}