// Export des types
// export type Difficulty = 'débutant' | 'intermédiaire' | 'avancé';
export type Difficulty = 
  | 'débutant'
  | 'intermédiaire'
  | 'avancé'
  // valeurs présentes dans algorithms.ts
  | 'facile'
  | 'moyen'
  | 'difficile';


export type Level = 
  | 'niveau-1'  // Bases
  | 'niveau-2'  // Boucles & logique
  | 'niveau-3'  // Algorithmes classiques
  | 'niveau-4'  // Structures de données
  | 'niveau-5'  // Récursivité & backtracking
  | 'niveau-6'; // Algorithmes avancés

export type Category =
  | 'tableaux'
  | 'chaines'
  | 'nombres'
  | 'tri'
  | 'recherche'
  | 'structures-donnees'
  | 'recursivite'
  | 'backtracking'
  | 'programmation-dynamique'
  // valeurs déjà présentes dans algorithms.ts
  | 'array'
  | 'patterns'
  | 'string'
  | 'linked-list'
  | 'search'
  | 'dynamic-programming'
  | 'recursion';

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

// 🆕 Interface pour les solutions multiples
export interface Solution {
  id: string;
  title: string;              // "Méthode 1 : Avec .reverse()"
  approach: string;           // "Built-in", "Impérative", "Fonctionnelle", "Récursive"
  code: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
  pros?: string[];           // Avantages
  cons?: string[];           // Inconvénients
}

// 🆕 Interface Algorithm mise à jour
export interface Algorithm {
  id: string;
  title: string;
  level: Level;              // 🆕 Remplace "chapter"
  category: Category;        // 🆕 Catégorie (tableaux, tri, etc.)
  difficulty: Difficulty;
  order: number;             // 🆕 Position dans le niveau (1, 2, 3...)
  description: string;
  explanation: string;
  
  // 🆕 Plusieurs solutions au lieu d'un seul code
  solutions: Solution[];
  
  examples: Example[];
  tips?: string[];
  tags?: string[];
  relatedAlgorithms?: string[];  // 🆕 IDs d'algos similaires
}

// 🆕 Interface pour les niveaux
export interface LevelInfo {
  id: Level;
  title: string;
  description: string;
  objective: string;
  icon: string;
  order: number;
  color: string;
  totalAlgorithms: number;
}

export interface ProgressData {
  completedAlgorithms: string[];
  favorites: string[];
  lastVisited?: string;
}