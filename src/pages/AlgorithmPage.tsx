import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { algorithms, chapters } from '@/data';
// import { useAlgoStore } from '@/store/useAlgoStore';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAlgoStore } from '../store/useAlgoStore';
import { algorithms, chapters } from '../types';
import AlgorithmDetail from '../components/AlgorithmDetail';
// import AlgorithmDetail from '@/components/AlgorithmDetail';

export default function AlgorithmPage() {
  const { algoId } = useParams<{ algoId: string }>();
  const navigate = useNavigate();
  const { setLastVisited } = useAlgoStore();

  const algo = algorithms.find(a => a.id === algoId);
  const chapter = algo ? chapters.find(c => c.id === algo.chapter) : null;

  // Trouver l'algorithme précédent et suivant dans le même chapitre
  const chapterAlgos = algo ? algorithms.filter(a => a.chapter === algo.chapter) : [];
  const currentIndex = chapterAlgos.findIndex(a => a.id === algoId);
  const prevAlgo = currentIndex > 0 ? chapterAlgos[currentIndex - 1] : null;
  const nextAlgo = currentIndex < chapterAlgos.length - 1 ? chapterAlgos[currentIndex + 1] : null;

  useEffect(() => {
    if (algoId) {
      setLastVisited(algoId);
    }
  }, [algoId, setLastVisited]);

  if (!algo || !chapter) {
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
          onClick={() => navigate(`/chapter/${chapter.id}`)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à {chapter.title}</span>
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
            {currentIndex + 1} / {chapterAlgos.length}
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
          onClick={() => navigate(`/chapter/${chapter.id}`)}
          className="hover:text-primary-600 transition-colors"
        >
          {chapter.title}
        </button>
        <span>/</span>
        <span className="text-gray-900 font-medium">{algo.title}</span>
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
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 mt-1 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
} 