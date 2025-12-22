import { useParams, useNavigate } from 'react-router-dom';
import { algorithms } from '../data/algorithms';
import { levels } from '../data/levels';
import { useAlgoStore } from '../store/useAlgoStore';
import { ArrowLeft, BookOpen, TrendingUp } from 'lucide-react';
import AlgorithmCard from '../components/AlgorithmCard';

export default function LevelPage() {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const { progress } = useAlgoStore();

  const level = levels.find(l => l.id === levelId);
  const levelAlgos = algorithms.filter(a => a.level === levelId);

  if (!level) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Niveau introuvable
        </h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-600 hover:text-primary-700 underline"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  // Calculer les statistiques du niveau
  const completedInLevel = levelAlgos.filter(algo => 
    progress.completedAlgorithms.includes(algo.id)
  ).length;
  const progressPercent = levelAlgos.length > 0 
    ? Math.round((completedInLevel / levelAlgos.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Bouton retour */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Retour aux niveaux</span>
      </button>

      {/* En-tête du niveau */}
      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-lg ${level.color} flex items-center justify-center text-4xl flex-shrink-0`}>
              {level.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {level.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {levelAlgos.length} algorithmes disponibles
              </p>
            </div>
          </div>

          {/* Statistiques du niveau */}
          <div className="flex gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 min-w-[120px]">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600">
                {progressPercent}%
              </div>
              <div className="text-xs text-gray-600">Progression</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 min-w-[120px]">
              <div className="flex items-center justify-center mb-1">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {completedInLevel}/{levelAlgos.length}
              </div>
              <div className="text-xs text-gray-600">Complétés</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mt-6">
          {level.description}
        </p>

        {/* Objectif */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl">🎯</span>
            <h3 className="font-semibold text-gray-900">Objectif pédagogique</h3>
          </div>
          <p className="text-gray-700">
            {level.objective}
          </p>
        </div>

        {/* Barre de progression */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progression du niveau</span>
            <span className="font-semibold text-primary-600">{progressPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`${level.color} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Liste des algorithmes */}
      {levelAlgos.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Tous les algorithmes ({levelAlgos.length})
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {levelAlgos
              .sort((a, b) => a.order - b.order) // Trier par ordre
              .map((algo) => (
                <AlgorithmCard key={algo.id} algorithm={algo} />
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucun algorithme disponible
          </h3>
          <p className="text-gray-600">
            Ce niveau sera bientôt enrichi avec de nouveaux algorithmes.
          </p>
        </div>
      )}
    </div>
  );
}