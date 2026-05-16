import { useState } from 'react';
import { SpeakButton } from '../components/SpeakButton';
import { dialogues } from '../data/dialogues';

export function DialogueLearning() {
  const [selectedDialogue, setSelectedDialogue] = useState(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">💬 日常对话</h1>

      {!selectedDialogue ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dialogues.map((dialogue) => (
            <button
              key={dialogue.id}
              onClick={() => setSelectedDialogue(dialogue)}
              className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{dialogue.title}</h3>
              <p className="text-gray-600">{dialogue.scene}</p>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedDialogue(null)}
            className="mb-4 text-primary hover:underline"
          >
            ← 返回对话列表
          </button>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">{selectedDialogue.title}</h2>
            <p className="text-gray-600 mb-6">{selectedDialogue.scene}</p>
            <div className="space-y-4">
              {selectedDialogue.lines.map((line, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    line.speaker === 'A' ? 'bg-blue-50 ml-4' : 'bg-green-50 mr-4'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">
                      {line.speaker === 'A' ? '👤 A' : '👤 B'}
                    </span>
                    <SpeakButton text={line.french} size="sm" />
                  </div>
                  <p className="text-lg">{line.french}</p>
                  <p className="text-gray-600">{line.chinese}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}