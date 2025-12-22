import { algorithms } from '../data/algorithms';
import { useAlgoStore } from '../store/useAlgoStore';
import LevelList from '../components/LevelList';
import { BookOpen, Code2, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const { progress } = useAlgoStore();

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Maîtrisez les Algorithmes JavaScript
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          100+ algorithmes organisés en 6 niveaux avec plusieurs méthodes de résolution pour chaque exercice
        </p>
        
        {/* Statistiques */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 min-w-37.5">
            <div className="text-4xl font-bold text-primary-600">
              {progress.completedAlgorithms.length}
            </div>
            <div className="text-sm text-gray-600 mt-2">Algorithmes complétés</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 min-w-37.5">
            <div className="text-4xl font-bold text-yellow-600">
              {progress.favorites.length}
            </div>
            <div className="text-sm text-gray-600 mt-2">Favoris</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 min-w-37.5">
            <div className="text-4xl font-bold text-green-600">
              {algorithms.length}
            </div>
            <div className="text-sm text-gray-600 mt-2">Total d'algorithmes</div>
          </div>
        </div>
      </div>

      {/* Liste des niveaux */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Parcourir par niveau</h2>
        <LevelList showStats={true} />
      </div>

      {/* Section d'aide */}
      <div className="bg-linear-to-br from-primary-50 to-blue-50 rounded-lg p-8 border border-primary-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
          Comment utiliser Algo Master ?
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Progressez à votre rythme en explorant les 6 niveaux, comparez les différentes solutions et maîtrisez chaque algorithme
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 mx-auto">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Apprenez</h3>
            <p className="text-sm text-gray-600 text-center">
              Explications détaillées avec plusieurs méthodes de résolution pour chaque algorithme
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-lg mb-4 mx-auto">
              <Code2 className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Comparez</h3>
            <p className="text-sm text-gray-600 text-center">
              2 à 4 solutions par algorithme : Built-in, Impérative, Fonctionnelle, Récursive
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-lg mb-4 mx-auto">
              <TrendingUp className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Progressez</h3>
            <p className="text-sm text-gray-600 text-center">
              6 niveaux de difficulté croissante, de débutant à expert FAANG
            </p>
          </div>
        </div>
      </div>

      {/* Section niveaux détaillés */}
      <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 6 niveaux de progression</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl">🔰</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 1 : Bases</h3>
              <p className="text-sm text-gray-600">Manipuler tableaux, chaînes, nombres, boucles (30 algorithmes)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-3xl">🔄</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 2 : Boucles & Logique</h3>
              <p className="text-sm text-gray-600">Raisonner, optimiser la logique (20 algorithmes)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-3xl">🟡</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 3 : Algorithmes Classiques</h3>
              <p className="text-sm text-gray-600">Tri et recherche académiques (12 algorithmes)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-3xl">🏗️</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 4 : Structures de Données</h3>
              <p className="text-sm text-gray-600">Piles, files, listes chaînées (13 algorithmes)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="text-3xl">🟠</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 5 : Récursivité & Backtracking</h3>
              <p className="text-sm text-gray-600">Penser récursif (10 algorithmes)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-3xl">🔴</div>
            <div>
              <h3 className="font-semibold text-gray-900">Niveau 6 : Algorithmes Avancés</h3>
              <p className="text-sm text-gray-600">Niveau interview FAANG (15 algorithmes)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}