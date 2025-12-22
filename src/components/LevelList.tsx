import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { algorithms } from '../data/algorithms';
import { useAlgoStore } from '../store/useAlgoStore';
import { ChevronRight } from 'lucide-react';

interface LevelListProps {
  showStats?: boolean;
}

export default function LevelList({ showStats = true }: LevelListProps) {
  const { progress } = useAlgoStore();

  const getLevelProgress = (levelId: string) => {
    const levelAlgos = algorithms.filter(a => a.level === levelId);
    const completed = levelAlgos.filter(a => progress.completedAlgorithms.includes(a.id));
    
    return levelAlgos.length > 0 
      ? Math.round((completed.length / levelAlgos.length) * 100)
      : 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {levels.map((level) => {
        const levelAlgos = algorithms.filter(a => a.level === level.id);
        const progressPercent = getLevelProgress(level.id);
        
        return (
          <Link
            key={level.id}
            to={`/level/${level.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 group"
          >
            {/* Icône et titre */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg ${level.color} flex items-center justify-center text-2xl`}>
                  {level.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {level.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {levelAlgos.length} algorithmes
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-2">
              {level.description}
            </p>

            {/* Objectif */}
            <p className="text-xs text-gray-500 mb-4 italic">
              🎯 {level.objective}
            </p>

            {/* Barre de progression */}
            {showStats && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progression</span>
                  <span className="font-semibold text-primary-600">
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${level.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}