import { algorithms } from '../data/algorithms';
import { chapters } from '../data/chapters';
// Export des types
export type Difficulty = 'débutant' | 'intermédiaire' | 'avancé';

export type Chapter = 
  | 'bases-js'
  | 'variables-types'
  | 'fonctions'
  | 'tableaux'
  | 'objets'
  | 'stacks'
  | 'queues'
  | 'linked-lists'
  | 'trees'
  | 'graphs'
  | 'hash-tables';

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Algorithm {
  id: string;
  title: string;
  chapter: Chapter;
  difficulty: Difficulty;
  description: string;
  explanation: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
  examples: Example[];
  tips?: string[];
  tags?: string[];
}

export interface ChapterInfo {
  id: Chapter;
  title: string;
  description: string;
  icon: string;
  order: number;
  color: string;
}

// Export des données
// export { algorithms } from './algorithms';
// export { chapters } from './chapters';
export { algorithms };
export { chapters };