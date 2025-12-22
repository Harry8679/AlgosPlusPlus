import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { algorithms } from '../data/algorithms';
import { levels } from '../data/levels';
import { useAlgoStore } from '../store/useAlgoStore';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import AlgorithmDetail from '../components/AlgorithmDetail';

export default function AlgorithmPage() {
  const { algoId } = useParams<{ algoId: string }>();
  const navigate = useNavigate();
  const { setLastVisited } = useAlgoStore();

  const algo = algorithms.find(a => a.id === algoId);
  const level = algo ? levels.find(l => l.id === algo.level) : null;

  // Trouver l'algorithme précédent et suivant dans le même niveau
  const levelAlgos = algo 
    ? algorithms.filter(a => a.level === algo.level).sort((a, b) => a.order - b.order)
    : [];
  const currentIndex = levelAlgos.findIndex(a => a.id === algoId);
  const prevAlgo = currentIndex > 0 ? levelAlgos[currentIndex - 1] : null;
  const nextAlgo = currentIndex < levelAlgos.length - 1 ? levelAlgos[currentIndex + 1] : null;

  useEffect(() => {
    if (algoId) {
      setLastVisited(algoId);
    }
  }, [algoId, setLastVisited]);

  if (!algo || !level) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Algorithme introuvable
        </h2>
        <p className="text-gray-600 mb-4">
          L'algorithme que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(`/level/${level.id}`)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à {level.title}</span>
        </button>

        {/* Navigation entre algorithmes */}
        <div className="flex items-center space-x-2">
          {prevAlgo ? (
            <button
              onClick={() => navigate(`/algorithm/${prevAlgo.id}`)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              title={prevAlgo.title}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Précédent</span>
            </button>
          ) : (
            <div className="w-24"></div>
          )}

          <span className="text-sm text-gray-600 px-4">
            {currentIndex + 1} / {levelAlgos.length}
          </span>

          {nextAlgo ? (
            <button
              onClick={() => navigate(`/algorithm/${nextAlgo.id}`)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              title={nextAlgo.title}
            >
              <span className="hidden md:inline">Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="w-24"></div>
          )}
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <button
          onClick={() => navigate('/')}
          className="hover:text-primary-600 transition-colors"
        >
          Accueil
        </button>
        <span>/</span>
        <button
          onClick={() => navigate(`/level/${level.id}`)}
          className="hover:text-primary-600 transition-colors"
        >
          {level.title}
        </button>
        <span>/</span>
        <span className="text-gray-900 font-medium">{algo.title}</span>
      </div>

      {/* Badge nombre de solutions */}
      <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <span className="text-2xl">💡</span>
        <div>
          <h3 className="font-semibold text-gray-900">
            {algo.solutions.length} {algo.solutions.length > 1 ? 'méthodes différentes' : 'méthode'} pour résoudre cet algorithme
          </h3>
          <p className="text-sm text-gray-600">
            Explorez les différentes approches : {algo.solutions.map(s => s.approach).join(', ')}
          </p>
        </div>
      </div>

      {/* Détails de l'algorithme */}
      <AlgorithmDetail algorithm={algo} />

      {/* Navigation bas de page */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200">
        {prevAlgo ? (
          <button
            onClick={() => navigate(`/algorithm/${prevAlgo.id}`)}
            className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all max-w-sm group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400 mt-1 group-hover:text-primary-600 group-hover:-translate-x-1 transition-all" />
            <div className="text-left">
              <div className="text-xs text-gray-500 mb-1">Précédent</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {prevAlgo.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {prevAlgo.solutions.length} {prevAlgo.solutions.length > 1 ? 'méthodes' : 'méthode'}
              </div>
            </div>
          </button>
        ) : (
          <div></div>
        )}

        {nextAlgo ? (
          <button
            onClick={() => navigate(`/algorithm/${nextAlgo.id}`)}
            className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all max-w-sm group"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500 mb-1">Suivant</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {nextAlgo.title}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {nextAlgo.solutions.length} {nextAlgo.solutions.length > 1 ? 'méthodes' : 'méthode'}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 mt-1 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
          </button>
        ) : (
          <div></div>
        )}
      </div>

      {/* Algorithmes similaires */}
      {algo.relatedAlgorithms && algo.relatedAlgorithms.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">📚 Algorithmes similaires</h3>
          <div className="flex flex-wrap gap-2">
            {algo.relatedAlgorithms.map(relatedId => {
              const relatedAlgo = algorithms.find(a => a.id === relatedId);
              if (!relatedAlgo) return null;
              
              return (
                <button
                  key={relatedId}
                  onClick={() => navigate(`/algorithm/${relatedId}`)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors text-sm"
                >
                  {relatedAlgo.title}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}