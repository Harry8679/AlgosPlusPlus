import { Algorithm } from './index';

export const algorithms: Algorithm[] = [
  // ==========================================
  // 🔰 NIVEAU 1 : BASES (30 algorithmes)
  // ==========================================
  
  {
    id: 'reverse-array',
    title: '1. Retourner un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 1,
    description: 'Inverser l\'ordre des éléments d\'un tableau',
    explanation: `Il existe plusieurs façons d'inverser un tableau en JavaScript. 
    
La méthode native .reverse() est la plus simple mais modifie le tableau original.
Une boucle for permet de créer un nouveau tableau sans modifier l'original.
La récursion est une approche élégante mais moins performante pour cette tâche.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : .reverse() (Built-in)',
        approach: 'Built-in',
        code: `function reverseArray(arr) {
  return arr.reverse();
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]`,
        explanation: 'Utilise la méthode native .reverse() de JavaScript. Simple et performant.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Une seule ligne', 'Très performant', 'Lisible'],
        cons: ['Modifie le tableau original']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for (Impérative)',
        approach: 'Impérative',
        code: `function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]`,
        explanation: 'Parcourt le tableau de la fin vers le début et crée un nouveau tableau.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Ne modifie pas l\'original', 'Facile à comprendre'],
        cons: ['Plus verbeux', 'Utilise plus de mémoire']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Récursion',
        approach: 'Récursive',
        code: `function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1], ...reverseArray(arr.slice(0, -1))];
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]`,
        explanation: 'Approche récursive : prend le dernier élément et concat avec le reste inversé.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Élégant', 'Démontre la récursion'],
        cons: ['Moins performant', 'Risque de stack overflow sur grands tableaux']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : reduce() (Fonctionnelle)',
        approach: 'Fonctionnelle',
        code: `function reverseArray(arr) {
  return arr.reduce((acc, val) => [val, ...acc], []);
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]`,
        explanation: 'Utilise reduce pour construire le tableau inversé de manière fonctionnelle.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Style fonctionnel', 'Une ligne'],
        cons: ['Moins lisible pour débutants', 'Moins performant que .reverse()']
      }
    ],
    
    examples: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: '[5, 4, 3, 2, 1]',
        explanation: 'Le tableau est inversé'
      },
      {
        input: '["a", "b", "c"]',
        output: '["c", "b", "a"]',
        explanation: 'Fonctionne aussi avec des chaînes'
      }
    ],
    
    tips: [
      'Préférez .reverse() si vous pouvez modifier le tableau original',
      'Utilisez la boucle for si vous devez préserver l\'original',
      'La récursion est surtout pédagogique ici',
      'reduce() est élégant mais moins performant'
    ],
    
    tags: ['array', 'reverse', 'basics']
  },

  {
    id: 'sort-array-asc',
    title: '2. Trier un tableau du plus petit au plus grand',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 2,
    description: 'Trier les éléments d\'un tableau par ordre croissant',
    explanation: `Le tri croissant peut être fait avec .sort(), une boucle for, ou des algorithmes de tri personnalisés.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : .sort() (Built-in)',
        approach: 'Built-in',
        code: `function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortAscending(arr)); // [1, 2, 5, 8, 9]`,
        explanation: 'Utilise la méthode native .sort() avec une fonction de comparaison.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Performant', 'Une ligne'],
        cons: ['Modifie le tableau original']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Tri à bulles (Bubble Sort)',
        approach: 'Impérative',
        code: `function sortAscending(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortAscending(arr)); // [1, 2, 5, 8, 9]`,
        explanation: 'Implémente l\'algorithme de tri à bulles : compare et échange les éléments adjacents.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n)',
        pros: ['Algorithme simple à comprendre', 'Ne modifie pas l\'original'],
        cons: ['Très lent sur grands tableaux']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Tri par sélection',
        approach: 'Impérative',
        code: `function sortAscending(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  return result;
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortAscending(arr)); // [1, 2, 5, 8, 9]`,
        explanation: 'Trouve le minimum et le place au début, puis recommence sur le reste.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Moins d\'échanges que bubble sort'],
        cons: ['Lent sur grands tableaux']
      }
    ],
    
    examples: [
      {
        input: '[5, 2, 8, 1, 9]',
        output: '[1, 2, 5, 8, 9]',
        explanation: 'Tableau trié par ordre croissant'
      }
    ],
    
    tips: [
      'Utilisez .sort() pour la performance',
      'Attention : .sort() sans fonction compare en chaînes !',
      'Pour apprendre : implémentez bubble sort ou selection sort'
    ],
    
    tags: ['array', 'sort', 'basics'],
    relatedAlgorithms: ['sort-array-desc', 'bubble-sort']
  },

  {
    id: 'remove-duplicates',
    title: '4. Supprimer les doublons d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 4,
    description: 'Retirer tous les éléments en double d\'un tableau',
    explanation: `Plusieurs approches pour éliminer les doublons : Set, filter, reduce, ou boucle for.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Set (Built-in)',
        approach: 'Built-in',
        code: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Exemple
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]`,
        explanation: 'Utilise Set qui ne garde que les valeurs uniques, puis le convertit en tableau.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Une ligne', 'Très performant', 'Lisible'],
        cons: ['Nécessite ES6']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : filter() + indexOf()',
        approach: 'Fonctionnelle',
        code: `function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Exemple
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]`,
        explanation: 'Garde seulement la première occurrence de chaque élément.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Assez lisible'],
        cons: ['Moins performant (O(n²))']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : reduce() + includes()',
        approach: 'Fonctionnelle',
        code: `function removeDuplicates(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

// Exemple
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]`,
        explanation: 'Construit un nouveau tableau en vérifiant si l\'élément existe déjà.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n)',
        pros: ['Style fonctionnel'],
        cons: ['Moins performant', 'Moins lisible']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : Boucle for + Object',
        approach: 'Impérative',
        code: `function removeDuplicates(arr) {
  const seen = {};
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  
  return result;
}

// Exemple
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]`,
        explanation: 'Utilise un objet pour suivre les éléments déjà vus.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Performant O(n)', 'Fonctionne même sans ES6'],
        cons: ['Plus verbeux']
      }
    ],
    
    examples: [
      {
        input: '[1, 2, 2, 3, 4, 4, 5]',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'Les doublons sont supprimés'
      },
      {
        input: '["a", "b", "a", "c"]',
        output: '["a", "b", "c"]',
        explanation: 'Fonctionne aussi avec des chaînes'
      }
    ],
    
    tips: [
      'Set est la méthode la plus simple et performante',
      'filter + indexOf est élégant mais O(n²)',
      'Utilisez un objet/Map pour O(n) sans ES6'
    ],
    
    tags: ['array', 'duplicates', 'set', 'filter']
  }
];