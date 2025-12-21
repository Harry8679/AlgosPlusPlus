import { useParams, useNavigate } from 'react-router-dom';
// import { algorithms, chapters, Chapter } from '@/data';
import { ArrowLeft } from 'lucide-react';
import { chapters, algorithms } from '../types';
// import AlgorithmCard from '@/components/AlgorithmCard';

export default function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();

  const chapter = chapters.find(c => c.id === chapterId);
  const chapterAlgos = algorithms.filter(a => a.chapter === chapterId as Chapter);

  if (!chapter) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Chapitre introuvable
        </h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-600 hover:text-primary-700"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Bouton retour */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour aux chapitres</span>
      </button>

      {/* En-tête du chapitre */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-16 h-16 rounded-lg ${chapter.color} flex items-center justify-center text-4xl`}>
            {chapter.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {chapter.title}
            </h1>
            <p className="text-gray-600 mt-1">
              {chapterAlgos.length} algorithmes disponibles
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          {chapter.description}
        </p>
      </div>

      {/* Liste des algorithmes */}
      <div className="grid grid-cols-1 gap-4">
        {chapterAlgos.map((algo) => (
          <AlgorithmCard key={algo.id} algorithm={algo} />
        ))}
      </div>

      {chapterAlgos.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">
            Aucun algorithme disponible pour ce chapitre pour le moment.
          </p>
        </div>
      )}
    </div>
  );
}