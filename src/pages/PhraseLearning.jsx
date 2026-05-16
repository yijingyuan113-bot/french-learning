import { SpeakButton } from '../components/SpeakButton';
import { phrases } from '../data/phrases';

export function PhraseLearning() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📝 短语学习</h1>

      {phrases.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.items.map((phrase, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">{phrase.french}</p>
                  <p className="text-gray-600">{phrase.chinese}</p>
                </div>
                <SpeakButton text={phrase.french} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}