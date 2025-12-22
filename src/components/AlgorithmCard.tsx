import { Link } from 'react-router-dom';
import type { Algorithm } from '../types';
import { useAlgoStore } from '../store/useAlgoStore';
import { Check, Star, Code2 } from 'lucide-react';

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export default function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  const { isCompleted, isFavorite } = useAlgoStore();

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
    <Link
      to={`/algorithm/${algorithm.id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Titre et badges */}
          <div className="flex items-center flex-wrap gap-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {algorithm.title}
            </h3>
            
            {/* Badge difficulté */}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
              {algorithm.difficulty}
            </span>
            
            {/* Icône complété */}
            {completed && (
              <div className="flex items-center space-x-1 text-green-600" title="Complété">
                <Check className="w-5 h-5" />
              </div>
            )}
            
            {/* Icône favori */}
            {favorite && (
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-3">
            {algorithm.description}
          </p>

          {/* Nombre de solutions */}
          <div className="flex items-center space-x-2 text-sm text-primary-600 mb-3">
            <Code2 className="w-4 h-4" />
            <span className="font-medium">
              {algorithm.solutions.length} {algorithm.solutions.length > 1 ? 'méthodes' : 'méthode'}
            </span>
          </div>

          {/* Complexités */}
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div>
              <span className="font-medium">Temps:</span> {algorithm.solutions[0].timeComplexity}
            </div>
            <div>
              <span className="font-medium">Espace:</span> {algorithm.solutions[0].spaceComplexity}
            </div>
          </div>

          {/* Tags */}
          {algorithm.tags && algorithm.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {algorithm.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}