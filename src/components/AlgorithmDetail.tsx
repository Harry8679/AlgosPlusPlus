import { useState } from 'react';
import type { Algorithm } from '../types';
import { useAlgoStore } from '../store/useAlgoStore';
import { Check, Star, Clock, Database, Lightbulb, Code2, ThumbsUp, ThumbsDown } from 'lucide-react';
import CodeEditor from './CodeEditor';

interface AlgorithmDetailProps {
  algorithm: Algorithm;
}

export default function AlgorithmDetail({ algorithm }: AlgorithmDetailProps) {
  const { isCompleted, isFavorite, toggleComplete, toggleFavorite } = useAlgoStore();
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);

  const completed = isCompleted(algorithm.id);
  const favorite = isFavorite(algorithm.id);
  const selectedSolution = algorithm.solutions[selectedSolutionIndex];

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
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {algorithm.category}
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

        {/* Nombre de solutions */}
        <div className="flex items-center space-x-2 text-primary-600 mt-4">
          <Code2 className="w-5 h-5" />
          <span className="font-semibold">
            {algorithm.solutions.length} {algorithm.solutions.length > 1 ? 'méthodes différentes' : 'méthode'}
          </span>
        </div>
      </div>

      {/* Explication générale */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Explication</h2>
        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
          {algorithm.explanation}
        </div>
      </div>

      {/* Onglets des solutions */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex overflow-x-auto">
            {algorithm.solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setSelectedSolutionIndex(index)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSolutionIndex === index
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {solution.title}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu de la solution sélectionnée */}
        <div className="p-8">
          {/* Badge approche */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Approche : {selectedSolution.approach}
            </span>
          </div>

          {/* Explication de la solution */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Comment ça marche ?</h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedSolution.explanation}
            </p>
          </div>

          {/* Complexités */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <div className="text-sm text-blue-600 font-medium">Complexité temporelle</div>
                <div className="text-lg font-semibold text-gray-900">{selectedSolution.timeComplexity}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Database className="w-6 h-6 text-purple-600" />
              <div>
                <div className="text-sm text-purple-600 font-medium">Complexité spatiale</div>
                <div className="text-lg font-semibold text-gray-900">{selectedSolution.spaceComplexity}</div>
              </div>
            </div>
          </div>

          {/* Avantages / Inconvénients */}
          {(selectedSolution.pros || selectedSolution.cons) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Avantages */}
              {selectedSolution.pros && selectedSolution.pros.length > 0 && (
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-900">Avantages</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedSolution.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-green-800">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Inconvénients */}
              {selectedSolution.cons && selectedSolution.cons.length > 0 && (
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <ThumbsDown className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-900">Inconvénients</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedSolution.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-red-800">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Code */}
          <CodeEditor 
            code={selectedSolution.code} 
            language="javascript"
            title={`Code : ${selectedSolution.title}`}
          />
        </div>
      </div>

      {/* Exemples */}
      {algorithm.examples && algorithm.examples.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Exemples</h2>
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
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-8 border border-yellow-200">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">💡 Conseils</h2>
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