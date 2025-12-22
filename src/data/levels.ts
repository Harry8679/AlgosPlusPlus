import { LevelInfo } from './index';

export const levels: LevelInfo[] = [
  {
    id: 'niveau-1',
    title: 'Niveau 1 : Bases',
    description: 'Fondations absolues',
    objective: 'Manipuler tableaux, chaînes, nombres, boucles',
    icon: '🔰',
    order: 1,
    color: 'bg-green-500',
    totalAlgorithms: 30
  },
  {
    id: 'niveau-2',
    title: 'Niveau 2 : Boucles & Logique',
    description: 'Raisonner et optimiser',
    objective: 'Raisonner, optimiser la logique',
    icon: '🔄',
    order: 2,
    color: 'bg-blue-500',
    totalAlgorithms: 20
  },
  {
    id: 'niveau-3',
    title: 'Niveau 3 : Algorithmes Classiques',
    description: 'Tri et recherche',
    objective: 'Comprendre les bases de l\'algorithmique académique',
    icon: '🟡',
    order: 3,
    color: 'bg-yellow-500',
    totalAlgorithms: 12
  },
  {
    id: 'niveau-4',
    title: 'Niveau 4 : Structures de Données',
    description: 'Piles, files, listes',
    objective: 'Penser comme un ingénieur',
    icon: '🏗️',
    order: 4,
    color: 'bg-orange-500',
    totalAlgorithms: 13
  },
  {
    id: 'niveau-5',
    title: 'Niveau 5 : Récursivité & Backtracking',
    description: 'Penser récursif',
    objective: 'Maîtriser la récursion et le backtracking',
    icon: '🟠',
    order: 5,
    color: 'bg-red-500',
    totalAlgorithms: 10
  },
  {
    id: 'niveau-6',
    title: 'Niveau 6 : Algorithmes Avancés',
    description: 'Niveau interview FAANG',
    objective: 'Niveau interview FAANG',
    icon: '🔴',
    order: 6,
    color: 'bg-purple-500',
    totalAlgorithms: 15
  }
];