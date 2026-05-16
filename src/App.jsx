import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { WordLearning } from './pages/WordLearning';
import { PhraseLearning } from './pages/PhraseLearning';
import { DialogueLearning } from './pages/DialogueLearning';
import { Progress } from './pages/Progress';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/words/:level" element={<WordLearning />} />
            <Route path="/phrases" element={<PhraseLearning />} />
            <Route path="/dialogues" element={<DialogueLearning />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}