// import { algorithms } from '@/data';
// import { useAlgoStore } from '@/store/useAlgoStore';
// import ChapterList from '@/components/ChapterList';

export default function HomePage() {
  const { progress } = useAlgoStore();

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Maîtrisez les Algorithmes JavaScript
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          200 algorithmes et structures de données pour réussir vos entretiens techniques
        </p>
        
        {/* Statistiques */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">
              {progress.completedAlgorithms.length}
            </div>
            <div className="text-sm text-gray-600">Algorithmes complétés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">
              {progress.favorites.length}
            </div>
            <div className="text-sm text-gray-600">Favoris</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">
              {algorithms.length}
            </div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>
      </div>

      {/* Liste des chapitres */}
      <ChapterList />

      {/* Section d'aide */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Comment utiliser Algo Master ?
        </h2>
        <p className="text-gray-600 mb-4">
          Parcourez les chapitres, étudiez les algorithmes, testez le code et marquez vos favoris
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">Apprenez</h3>
            <p className="text-sm text-gray-600">
              Explications détaillées de chaque concept
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl mb-2">💻</div>
            <h3 className="font-semibold mb-1">Pratiquez</h3>
            <p className="text-sm text-gray-600">
              Code exécutable avec exemples
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-semibold mb-1">Suivez</h3>
            <p className="text-sm text-gray-600">
              Marquez vos progrès et favoris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}