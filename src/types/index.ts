interface Algorithm {
  id: string;
  title: string;
  chapter: Chapter;
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
  description: string;
  explanation: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
  examples: Example[];
  tips?: string[];
}

type Chapter = 
  | 'bases-js'
  | 'stacks'
  | 'queues'
  | 'linked-lists'
  | 'trees'
  | 'graphs'
  | 'hash-tables';