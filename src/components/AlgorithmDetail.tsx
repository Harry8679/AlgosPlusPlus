// import { Algorithm } from '@/data';
// import { useAlgoStore } from '@/store/useAlgoStore';
import { Check, Star, Clock, Database, Lightbulb } from 'lucide-react';
import CodeEditor from './CodeEditor';
import type { Algorithm } from '../types';
import { useAlgoStore } from '../store/useAlgoStore';

interface AlgorithmDetailProps {
  algorithm: Algorithm;
}

export default function AlgorithmDetail({ algorithm }: AlgorithmDetailProps) {
  const { isCompleted, isFavorite, toggleComplete, toggleFavorite } = useAlgoStore();

  const completed = isCompleted(algorithm.id);
  const favorite = isFavorite(algorithm.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'débutant':
        return 'bg-green-100 text-green-800';
      case 'intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
                {algorithm.difficulty}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {algorithm.title}
            </h1>
            
            <p className="text-lg text-gray-600">
              {algorithm.description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => toggleComplete(algorithm.id)}
              className={`p-3 rounded-lg border transition-colors ${
                completed
                  ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
              title={completed ? 'Marquer comme non complété' : 'Marquer comme complété'}
            >
              <Check className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => toggleFavorite(algorithm.id)}
              className={`p-3 rounded-lg border transition-colors ${
                favorite
                  ? 'bg-yellow-50 border-yellow-300 text-yellow-600 hover:bg-yellow-100'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
              title={favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              <Star className={`w-6 h-6 ${favorite ? 'fill-yellow-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Complexités */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-sm text-blue-600 font-medium">Complexité temporelle</div>
              <div className="text-lg font-semibold text-gray-900">{algorithm.timeComplexity}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
            <Database className="w-6 h-6 text-purple-600" />
            <div>
              <div className="text-sm text-purple-600 font-medium">Complexité spatiale</div>
              <div className="text-lg font-semibold text-gray-900">{algorithm.spaceComplexity}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Explication */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Explication</h2>
        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
          {algorithm.explanation}
        </div>
      </div>

      {/* Code */}
      <CodeEditor code={algorithm.code} language="javascript" />

      {/* Exemples */}
      {algorithm.examples && algorithm.examples.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exemples</h2>
          <div className="space-y-4">
            {algorithm.examples.map((example, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Entrée</div>
                    <code className="block bg-white p-3 rounded border border-gray-200 text-sm">
                      {example.input}
                    </code>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 mb-1">Sortie</div>
                    <code className="block bg-white p-3 rounded border border-gray-200 text-sm">
                      {example.output}
                    </code>
                  </div>
                </div>
                {example.explanation && (
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Explication:</strong> {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conseils */}
      {algorithm.tips && algorithm.tips.length > 0 && (
        <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-8 border border-yellow-200">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Conseils</h2>
          </div>
          <ul className="space-y-2">
            {algorithm.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-yellow-600 font-bold mt-1">•</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {algorithm.tags && algorithm.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {algorithm.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}