import type { Algorithm } from '../types';

export const algorithms: Algorithm[] = [
  // ==========================================
  // 🔰 NIVEAU 1 : BASES (Algorithmes 1-10)
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
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1] - Le tableau original est modifié !`,
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
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5] - Le tableau original n'est pas modifié`,
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
    explanation: `Le tri croissant peut être fait avec .sort(), une boucle for, ou des algorithmes de tri personnalisés.
    
ATTENTION : .sort() sans fonction de comparaison trie en ordre alphabétique (même pour les nombres) !`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : .sort() (Built-in)',
        approach: 'Built-in',
        code: `function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortAscending(arr)); // [1, 2, 5, 8, 9]
console.log(arr); // [5, 2, 8, 1, 9] - Original préservé`,
        explanation: 'Utilise la méthode native .sort() avec une fonction de comparaison.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Performant', 'Une ligne'],
        cons: ['Nécessite de copier le tableau pour ne pas modifier l\'original']
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
        // Échange (swap)
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
        pros: ['Algorithme simple à comprendre', 'Ne modifie pas l\'original', 'Pédagogique'],
        cons: ['Très lent sur grands tableaux', 'Complexité quadratique']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Tri par sélection (Selection Sort)',
        approach: 'Impérative',
        code: `function sortAscending(arr) {
  const result = [...arr];
  
  for (let i = 0; i < result.length; i++) {
    let minIndex = i;
    
    // Trouve l'index du minimum dans la partie non triée
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Échange si nécessaire
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
      },
      {
        input: '[10, -5, 0, 3]',
        output: '[-5, 0, 3, 10]',
        explanation: 'Fonctionne avec nombres négatifs'
      }
    ],
    
    tips: [
      'IMPORTANT : Utilisez toujours (a, b) => a - b pour trier des nombres',
      '.sort() sans fonction compare en chaînes : [1, 10, 2] devient [1, 10, 2]',
      'Pour apprendre : implémentez bubble sort ou selection sort',
      'En production : utilisez toujours .sort() natif'
    ],
    
    tags: ['array', 'sort', 'basics'],
    relatedAlgorithms: ['sort-array-desc']
  },

  {
    id: 'sort-array-desc',
    title: '3. Trier un tableau du plus grand au plus petit',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 3,
    description: 'Trier les éléments d\'un tableau par ordre décroissant',
    explanation: `Le tri décroissant inverse simplement la logique du tri croissant.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : .sort() avec fonction inversée',
        approach: 'Built-in',
        code: `function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortDescending(arr)); // [9, 8, 5, 2, 1]`,
        explanation: 'Utilise .sort() avec (b - a) au lieu de (a - b).',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Performant', 'Une ligne'],
        cons: ['Crée une copie du tableau']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : .sort() + .reverse()',
        approach: 'Built-in',
        code: `function sortDescending(arr) {
  return [...arr].sort((a, b) => a - b).reverse();
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(sortDescending(arr)); // [9, 8, 5, 2, 1]`,
        explanation: 'Trie d\'abord croissant puis inverse.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        pros: ['Facile à comprendre', 'Deux opérations connues'],
        cons: ['Deux opérations au lieu d\'une', 'Moins efficace']
      }
    ],
    
    examples: [
      {
        input: '[5, 2, 8, 1, 9]',
        output: '[9, 8, 5, 2, 1]',
        explanation: 'Tableau trié par ordre décroissant'
      }
    ],
    
    tips: [
      'Utilisez (b - a) pour un tri décroissant direct',
      'Évitez .reverse() après .sort() (moins performant)',
      'Pensez à la logique : b - a signifie "b d\'abord si b > a"'
    ],
    
    tags: ['array', 'sort', 'basics'],
    relatedAlgorithms: ['sort-array-asc']
  },

  {
    id: 'remove-duplicates',
    title: '4. Supprimer les doublons d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 4,
    description: 'Retirer tous les éléments en double d\'un tableau',
    explanation: `Plusieurs approches pour éliminer les doublons : Set, filter, reduce, ou boucle for.
    
Set est la structure de données parfaite car elle ne conserve que des valeurs uniques.`,
    
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
        pros: ['Une ligne', 'Très performant', 'Lisible', 'Solution moderne'],
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
        explanation: 'Garde seulement la première occurrence de chaque élément (indexOf retourne toujours le premier index).',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Assez lisible'],
        cons: ['Moins performant (O(n²)) car indexOf parcourt le tableau à chaque fois']
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
        pros: ['Style fonctionnel avec reduce'],
        cons: ['Moins performant', 'Moins lisible que Set']
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
        explanation: 'Utilise un objet pour suivre les éléments déjà vus (lookup O(1)).',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Performant O(n)', 'Fonctionne même sans ES6'],
        cons: ['Plus verbeux', 'Utilise un objet auxiliaire']
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
      'Set est LA méthode à utiliser en JavaScript moderne',
      'filter + indexOf est élégant mais O(n²)',
      'Utilisez un objet/Map pour O(n) sans ES6',
      'Set préserve l\'ordre d\'insertion (depuis ES6)'
    ],
    
    tags: ['array', 'duplicates', 'set', 'filter']
  },

  {
    id: 'find-max',
    title: '5. Trouver le maximum d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 5,
    description: 'Trouver la plus grande valeur d\'un tableau',
    explanation: `Plusieurs méthodes pour trouver le maximum : Math.max, reduce, ou boucle for.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Math.max() avec spread',
        approach: 'Built-in',
        code: `function findMax(arr) {
  return Math.max(...arr);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMax(arr)); // 9`,
        explanation: 'Utilise Math.max avec le spread operator pour passer tous les éléments comme arguments.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Une ligne', 'Simple', 'Lisible'],
        cons: ['Peut échouer sur très grands tableaux (limite d\'arguments de fonction)']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : reduce()',
        approach: 'Fonctionnelle',
        code: `function findMax(arr) {
  return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMax(arr)); // 9`,
        explanation: 'Utilise reduce pour comparer chaque élément avec le maximum actuel.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Fonctionnel', 'Performant', 'Fonctionne sur tous tableaux'],
        cons: ['Moins lisible pour débutants']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for',
        approach: 'Impérative',
        code: `function findMax(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMax(arr)); // 9`,
        explanation: 'Parcourt le tableau et garde le maximum trouvé.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Facile à comprendre', 'Performant', 'Explicite'],
        cons: ['Plus verbeux']
      }
    ],
    
    examples: [
      {
        input: '[5, 2, 8, 1, 9]',
        output: '9',
        explanation: '9 est le plus grand nombre'
      },
      {
        input: '[-5, -2, -10]',
        output: '-2',
        explanation: 'Fonctionne avec nombres négatifs'
      }
    ],
    
    tips: [
      'Math.max(...arr) est simple mais attention aux très grands tableaux (>100k éléments)',
      'reduce() est élégant et sûr',
      'La boucle for est la plus fiable et performante',
      'Pensez à gérer le cas du tableau vide !'
    ],
    
    tags: ['array', 'math', 'max'],
    relatedAlgorithms: ['find-min']
  },

  {
    id: 'find-min',
    title: '6. Trouver le minimum d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 6,
    description: 'Trouver la plus petite valeur d\'un tableau',
    explanation: `Même logique que pour le maximum, mais en inversant la comparaison.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Math.min() avec spread',
        approach: 'Built-in',
        code: `function findMin(arr) {
  return Math.min(...arr);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMin(arr)); // 1`,
        explanation: 'Utilise Math.min avec le spread operator.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Une ligne', 'Simple'],
        cons: ['Peut échouer sur très grands tableaux']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : reduce()',
        approach: 'Fonctionnelle',
        code: `function findMin(arr) {
  return arr.reduce((min, current) => current < min ? current : min, arr[0]);
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMin(arr)); // 1`,
        explanation: 'Utilise reduce pour trouver le minimum.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Fonctionnel', 'Performant'],
        cons: ['Moins lisible']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for',
        approach: 'Impérative',
        code: `function findMin(arr) {
  let min = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return min;
}

// Exemple
const arr = [5, 2, 8, 1, 9];
console.log(findMin(arr)); // 1`,
        explanation: 'Parcourt le tableau et garde le minimum.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Performant', 'Clair'],
        cons: ['Verbeux']
      }
    ],
    
    examples: [
      {
        input: '[5, 2, 8, 1, 9]',
        output: '1',
        explanation: '1 est le plus petit nombre'
      }
    ],
    
    tips: [
      'Math.min(...arr) est la méthode la plus simple',
      'Préférez la boucle for pour de très grands tableaux',
      'N\'oubliez pas de gérer le cas du tableau vide'
    ],
    
    tags: ['array', 'math', 'min'],
    relatedAlgorithms: ['find-max']
  },

  {
    id: 'array-sum',
    title: '7. Calculer la somme des éléments d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 7,
    description: 'Additionner tous les éléments d\'un tableau',
    explanation: `Calculer la somme est un exercice classique qui peut se faire avec reduce, une boucle, ou récursivement.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : reduce()',
        approach: 'Fonctionnelle',
        code: `function arraySum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr)); // 15`,
        explanation: 'reduce accumule la somme de tous les éléments.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Concis', 'Idiomatique JavaScript', 'Une ligne'],
        cons: ['Moins lisible pour débutants']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function arraySum(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr)); // 15`,
        explanation: 'Boucle classique qui accumule la somme.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Facile à comprendre', 'Performant', 'Explicite'],
        cons: ['Plus verbeux']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Récursion',
        approach: 'Récursive',
        code: `function arraySum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + arraySum(arr.slice(1));
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr)); // 15`,
        explanation: 'Approche récursive : premier élément + somme du reste.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Élégant', 'Démontre la récursion'],
        cons: ['Moins performant', 'Stack overflow possible', 'Crée des copies avec slice']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : for...of',
        approach: 'Impérative',
        code: `function arraySum(arr) {
  let sum = 0;
  
  for (let num of arr) {
    sum += num;
  }
  
  return sum;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr)); // 15`,
        explanation: 'Boucle for...of moderne, plus lisible que for classique.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Moderne', 'Lisible', 'Pas besoin d\'index'],
        cons: ['Légèrement moins performant que for classique']
      }
    ],
    
    examples: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15'
      },
      {
        input: '[]',
        output: '0',
        explanation: 'Tableau vide retourne 0'
      }
    ],
    
    tips: [
      'reduce() est la méthode préférée en JavaScript moderne',
      'La boucle for est plus explicite pour les débutants',
      'Toujours initialiser reduce avec 0 pour éviter les erreurs sur tableau vide',
      'for...of est un bon compromis entre lisibilité et modernité'
    ],
    
    tags: ['array', 'sum', 'reduce'],
    relatedAlgorithms: ['array-average']
  },

  {
    id: 'array-average',
    title: '8. Calculer la moyenne d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 8,
    description: 'Calculer la moyenne des éléments d\'un tableau',
    explanation: `La moyenne est la somme divisée par le nombre d'éléments.
    
Moyenne = (somme des éléments) / (nombre d'éléments)`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : reduce() + length',
        approach: 'Fonctionnelle',
        code: `function arrayAverage(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr)); // 3`,
        explanation: 'Calcule la somme avec reduce puis divise par la longueur.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Concis', 'Une ligne (hors vérification)', 'Fonctionnel'],
        cons: ['Nécessite vérification tableau vide']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function arrayAverage(arr) {
  if (arr.length === 0) return 0;
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum / arr.length;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr)); // 3`,
        explanation: 'Accumule la somme puis divise.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Clair', 'Facile à comprendre', 'Explicite'],
        cons: ['Plus verbeux']
      }
    ],
    
    examples: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: '3',
        explanation: '(1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3'
      },
      {
        input: '[10, 20, 30]',
        output: '20',
        explanation: '(10 + 20 + 30) / 3 = 60 / 3 = 20'
      },
      {
        input: '[]',
        output: '0',
        explanation: 'Tableau vide retourne 0 par convention'
      }
    ],
    
    tips: [
      'Toujours vérifier si le tableau est vide (division par zéro !)',
      'Pensez à arrondir le résultat si nécessaire : Math.round(average)',
      'Pour arrondir à 2 décimales : Math.round(average * 100) / 100',
      'Alternative : toFixed(2) mais retourne une string'
    ],
    
    tags: ['array', 'average', 'math'],
    relatedAlgorithms: ['array-sum']
  },

  {
    id: 'count-occurrences',
    title: '9. Compter le nombre d\'occurrences d\'un élément',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 9,
    description: 'Compter combien de fois un élément apparaît dans un tableau',
    explanation: `Compter les occurrences d'une valeur spécifique dans un tableau.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : filter() + length',
        approach: 'Fonctionnelle',
        code: `function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}

// Exemple
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr, 2)); // 3`,
        explanation: 'Filtre les éléments égaux à la valeur et compte le résultat.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Lisible', 'Une ligne'],
        cons: ['Crée un tableau intermédiaire (gaspillage mémoire)']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : reduce()',
        approach: 'Fonctionnelle',
        code: `function countOccurrences(arr, value) {
  return arr.reduce((count, item) => item === value ? count + 1 : count, 0);
}

// Exemple
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr, 2)); // 3`,
        explanation: 'Accumule le compteur à chaque occurrence.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Performant', 'Pas de tableau intermédiaire', 'Fonctionnel'],
        cons: ['Moins lisible pour débutants']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for',
        approach: 'Impérative',
        code: `function countOccurrences(arr, value) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  
  return count;
}

// Exemple
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr, 2)); // 3`,
        explanation: 'Parcourt et incrémente le compteur à chaque match.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Performant', 'Explicite'],
        cons: ['Verbeux']
      }
    ],
    
    examples: [
      {
        input: 'arr = [1, 2, 3, 2, 4, 2, 5], value = 2',
        output: '3',
        explanation: 'Le chiffre 2 apparaît 3 fois'
      },
      {
        input: 'arr = ["a", "b", "a", "c"], value = "a"',
        output: '2',
        explanation: 'La lettre "a" apparaît 2 fois'
      }
    ],
    
    tips: [
      'reduce() est le plus performant (pas de tableau intermédiaire)',
      'filter() est le plus lisible mais moins efficace',
      'Pour compter TOUTES les occurrences de chaque élément, utilisez un objet ou Map'
    ],
    
    tags: ['array', 'count', 'occurrences']
  },

  {
    id: 'reverse-string',
    title: '10. Inverser une chaîne de caractères',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 10,
    description: 'Inverser l\'ordre des caractères d\'une chaîne',
    explanation: `Inverser une chaîne nécessite de la convertir en tableau, l'inverser, puis reconvertir.
    
Les chaînes sont immutables en JavaScript, on ne peut pas les modifier directement.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : split + reverse + join',
        approach: 'Built-in',
        code: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Exemple
console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('JavaScript')); // 'tpircSavaJ'`,
        explanation: 'Convertit en tableau, inverse, puis rejoint en chaîne.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Une ligne', 'Lisible', 'Méthode standard'],
        cons: ['Crée plusieurs copies intermédiaires']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function reverseString(str) {
  let result = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  
  return result;
}

// Exemple
console.log(reverseString('hello')); // 'olleh'`,
        explanation: 'Parcourt la chaîne de la fin vers le début.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Facile à comprendre', 'Pas de méthodes complexes'],
        cons: ['Verbeux', 'Concaténation de strings coûteuse']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : reduce()',
        approach: 'Fonctionnelle',
        code: `function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Exemple
console.log(reverseString('hello')); // 'olleh'`,
        explanation: 'Utilise reduce pour construire la chaîne inversée.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Élégant'],
        cons: ['Moins lisible', 'Pas nécessairement plus performant']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : Array.from() + reverse',
        approach: 'Built-in',
        code: `function reverseString(str) {
  return Array.from(str).reverse().join('');
}

// Exemple
console.log(reverseString('hello')); // 'olleh'`,
        explanation: 'Utilise Array.from pour convertir en tableau, puis inverse.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Moderne', 'Gère mieux les emoji et caractères Unicode'],
        cons: ['Légèrement plus verbeux que split']
      }
    ],
    
    examples: [
      {
        input: '"hello"',
        output: '"olleh"',
        explanation: 'La chaîne est inversée caractère par caractère'
      },
      {
        input: '"JavaScript"',
        output: '"tpircSavaJ"'
      },
      {
        input: '"racecar"',
        output: '"racecar"',
        explanation: 'Un palindrome reste identique'
      }
    ],
    
    tips: [
      'split-reverse-join est la méthode standard',
      'Attention aux emoji et caractères spéciaux ! "👋🏼" peut donner des résultats inattendus',
      'Pour Unicode : utilisez Array.from() ou [...str] au lieu de split(\'\')',
      'La concaténation de strings (+=) est coûteuse en performance'
    ],
    
    tags: ['string', 'reverse'],
    relatedAlgorithms: ['reverse-array', 'is-palindrome']
  },
  {
    id: 'is-palindrome',
    title: '11. Vérifier si un mot est un palindrome',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 11,
    description: 'Vérifier si une chaîne se lit de la même façon dans les deux sens',
    explanation: `Un palindrome est un mot qui se lit pareil à l'endroit et à l'envers (ex: "kayak", "radar", "elle").

Il existe plusieurs approches pour vérifier un palindrome :
1. Comparer avec la version inversée
2. Utiliser deux pointeurs (plus efficace en mémoire)
3. Approche récursive`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Comparer avec reverse',
        approach: 'Built-in',
        code: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Exemples
console.log(isPalindrome('kayak'));     // true
console.log(isPalindrome('hello'));     // false
console.log(isPalindrome('A man a plan a canal Panama')); // true`,
        explanation: 'Nettoie la chaîne (minuscules, supprime espaces/ponctuation), puis compare avec sa version inversée.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Lisible', 'Facile à comprendre'],
        cons: ['Crée une copie de la chaîne', 'Utilise plus de mémoire']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Two Pointers',
        approach: 'Impérative',
        code: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Exemples
console.log(isPalindrome('kayak'));     // true
console.log(isPalindrome('hello'));     // false`,
        explanation: 'Compare les caractères depuis les deux extrémités en se rapprochant vers le centre.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)', // Pour la chaîne nettoyée
        pros: ['Plus performant', 'Early return possible', 'Algorithme classique'],
        cons: ['Légèrement plus complexe']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Récursion',
        approach: 'Récursive',
        code: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  function check(s, left, right) {
    if (left >= right) return true;
    if (s[left] !== s[right]) return false;
    return check(s, left + 1, right - 1);
  }
  
  return check(cleaned, 0, cleaned.length - 1);
}

// Exemples
console.log(isPalindrome('kayak'));     // true
console.log(isPalindrome('hello'));     // false`,
        explanation: 'Approche récursive : compare les extrémités puis récurse sur la partie intérieure.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)', // Stack de récursion
        pros: ['Élégant', 'Démonstratif'],
        cons: ['Moins performant', 'Stack overflow possible']
      }
    ],
    
    examples: [
      {
        input: '"kayak"',
        output: 'true',
        explanation: 'Se lit pareil dans les deux sens'
      },
      {
        input: '"hello"',
        output: 'false',
        explanation: '"hello" ≠ "olleh"'
      },
      {
        input: '"A man a plan a canal Panama"',
        output: 'true',
        explanation: 'En ignorant espaces et casse : "amanaplanacanalpanama"'
      }
    ],
    
    tips: [
      'Toujours normaliser : toLowerCase() pour ignorer la casse',
      'Pour palindromes stricts : supprimez espaces et ponctuation avec regex',
      'Two pointers est plus efficace en mémoire',
      'Pensez aux palindromes avec espaces : "race car", "never odd or even"'
    ],
    
    tags: ['string', 'palindrome', 'two-pointers'],
    relatedAlgorithms: ['reverse-string']
  },

  {
    id: 'merge-arrays',
    title: '12. Fusionner deux tableaux',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 12,
    description: 'Combiner deux tableaux en un seul',
    explanation: `Plusieurs façons de fusionner des tableaux : concat, spread, ou push en boucle.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Spread operator',
        approach: 'Built-in',
        code: `function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Exemple
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]`,
        explanation: 'Utilise le spread operator pour décomposer et combiner les tableaux.',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(n + m)',
        pros: ['Moderne (ES6)', 'Concis', 'Très lisible'],
        cons: ['Nécessite ES6+']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : concat()',
        approach: 'Built-in',
        code: `function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Exemple
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]`,
        explanation: 'Utilise la méthode native concat().',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(n + m)',
        pros: ['Compatible tous navigateurs', 'Lisible', 'Standard'],
        cons: ['Moins moderne que spread']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for',
        approach: 'Impérative',
        code: `function mergeArrays(arr1, arr2) {
  const result = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

// Exemple
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]`,
        explanation: 'Copie le premier tableau puis ajoute les éléments du second.',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(n + m)',
        pros: ['Contrôle total', 'Facile à comprendre'],
        cons: ['Verbeux', 'Moins idiomatique']
      }
    ],
    
    examples: [
      {
        input: 'arr1 = [1, 2, 3], arr2 = [4, 5, 6]',
        output: '[1, 2, 3, 4, 5, 6]',
        explanation: 'Les deux tableaux sont combinés'
      },
      {
        input: 'arr1 = ["a"], arr2 = ["b", "c"]',
        output: '["a", "b", "c"]'
      }
    ],
    
    tips: [
      'Préférez le spread operator en JavaScript moderne',
      'concat() et spread ne modifient pas les tableaux originaux',
      'Pour fusionner plusieurs tableaux : [...arr1, ...arr2, ...arr3]'
    ],
    
    tags: ['array', 'merge', 'concat']
  },

  {
    id: 'array-intersection',
    title: '13. Trouver les éléments communs entre deux tableaux',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 13,
    description: 'Trouver les éléments présents dans les deux tableaux',
    explanation: `L'intersection retourne les éléments qui existent dans les deux tableaux.

Attention aux doublons : décidez si vous les gardez ou non.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : filter() + includes()',
        approach: 'Fonctionnelle',
        code: `function arrayIntersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

// Exemple
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arrayIntersection(arr1, arr2)); // [3, 4]`,
        explanation: 'Filtre les éléments de arr1 qui sont présents dans arr2.',
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(k)', // k = taille résultat
        pros: ['Simple', 'Lisible', 'Une ligne'],
        cons: ['Peut contenir des doublons', 'O(n*m) pas optimal']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Set + filter() (sans doublons)',
        approach: 'Built-in',
        code: `function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

// Exemple
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 3, 4, 5, 6];
console.log(arrayIntersection(arr1, arr2)); // [2, 3, 4]`,
        explanation: 'Utilise Set pour une recherche O(1) et élimine les doublons.',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(m)',
        pros: ['Performant O(n+m)', 'Pas de doublons', 'Optimal'],
        cons: ['Un peu plus complexe']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for + Set',
        approach: 'Impérative',
        code: `function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];
  
  for (let item of arr1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  
  return [...new Set(result)]; // Enlever doublons
}

// Exemple
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arrayIntersection(arr1, arr2)); // [3, 4]`,
        explanation: 'Utilise Set pour lookup rapide et boucle explicite.',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(m)',
        pros: ['Performant', 'Contrôle total'],
        cons: ['Plus verbeux']
      }
    ],
    
    examples: [
      {
        input: 'arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]',
        output: '[3, 4]',
        explanation: '3 et 4 sont présents dans les deux tableaux'
      }
    ],
    
    tips: [
      'Utilisez Set pour de meilleures performances O(n+m)',
      'filter + includes est simple mais O(n*m)',
      'Décidez si vous voulez garder les doublons ou non'
    ],
    
    tags: ['array', 'intersection', 'set'],
    relatedAlgorithms: ['array-difference']
  },

  {
    id: 'array-difference',
    title: '14. Trouver la différence entre deux tableaux',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 14,
    description: 'Trouver les éléments présents dans le premier mais pas dans le second',
    explanation: `La différence retourne les éléments de arr1 qui ne sont pas dans arr2.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : filter() + includes()',
        approach: 'Fonctionnelle',
        code: `function arrayDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

// Exemple
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arrayDifference(arr1, arr2)); // [1, 2]`,
        explanation: 'Filtre les éléments de arr1 absents de arr2.',
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(k)',
        pros: ['Simple', 'Lisible', 'Une ligne'],
        cons: ['O(n*m) pas optimal']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Set + filter()',
        approach: 'Built-in',
        code: `function arrayDifference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

// Exemple
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(arrayDifference(arr1, arr2)); // [1, 2]`,
        explanation: 'Utilise Set pour une recherche rapide O(1).',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(m)',
        pros: ['Performant O(n+m)', 'Optimal'],
        cons: ['Utilise plus de mémoire']
      }
    ],
    
    examples: [
      {
        input: 'arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]',
        output: '[1, 2]',
        explanation: '1 et 2 sont dans arr1 mais pas dans arr2'
      }
    ],
    
    tips: [
      'Set améliore drastiquement les performances',
      'Pour la différence symétrique : combinez les deux directions',
      'arrayDifference(A, B) ≠ arrayDifference(B, A)'
    ],
    
    tags: ['array', 'difference', 'set'],
    relatedAlgorithms: ['array-intersection']
  },

  {
    id: 'rotate-array-right',
    title: '15. Décaler un tableau vers la droite',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 15,
    description: 'Décaler tous les éléments d\'un tableau vers la droite de k positions',
    explanation: `Rotation à droite : les éléments de la fin reviennent au début.

Exemple : [1, 2, 3, 4, 5] avec k=2 → [4, 5, 1, 2, 3]`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : slice() + concat()',
        approach: 'Built-in',
        code: `function rotateRight(arr, k) {
  k = k % arr.length; // Normaliser k
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2)); // [4, 5, 1, 2, 3]`,
        explanation: 'Coupe les k derniers éléments et les met au début.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Lisible', 'Immutable'],
        cons: ['Crée de nouveaux tableaux']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Spread + slice()',
        approach: 'Built-in',
        code: `function rotateRight(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2)); // [4, 5, 1, 2, 3]`,
        explanation: 'Version moderne avec spread operator.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Moderne', 'Concis', 'ES6'],
        cons: ['Même chose que slice + concat']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for (modification in-place)',
        approach: 'Impérative',
        code: `function rotateRight(arr, k) {
  k = k % arr.length;
  
  // Effectue k rotations d'une position
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  
  return arr;
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2)); // [4, 5, 1, 2, 3]
// Attention : arr est modifié !`,
        explanation: 'Retire le dernier élément et le met au début, k fois.',
        timeComplexity: 'O(k * n)',
        spaceComplexity: 'O(1)',
        pros: ['In-place (modifie le tableau)', 'Économe en mémoire'],
        cons: ['Moins performant si k est grand', 'Modifie l\'original']
      }
    ],
    
    examples: [
      {
        input: 'arr = [1, 2, 3, 4, 5], k = 2',
        output: '[4, 5, 1, 2, 3]',
        explanation: 'Les 2 derniers éléments (4, 5) vont au début'
      },
      {
        input: 'arr = [1, 2, 3], k = 7',
        output: '[3, 1, 2]',
        explanation: 'k % length = 7 % 3 = 1, donc 1 rotation'
      }
    ],
    
    tips: [
      'Utilisez k % arr.length pour gérer k > longueur',
      'slice() + concat() est la méthode la plus claire',
      'La boucle for est in-place mais moins performante'
    ],
    
    tags: ['array', 'rotate', 'shift'],
    relatedAlgorithms: ['rotate-array-left']
  },

  {
    id: 'rotate-array-left',
    title: '16. Décaler un tableau vers la gauche',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 16,
    description: 'Décaler tous les éléments d\'un tableau vers la gauche de k positions',
    explanation: `Rotation à gauche : les éléments du début vont à la fin.

Exemple : [1, 2, 3, 4, 5] avec k=2 → [3, 4, 5, 1, 2]`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : slice() + concat()',
        approach: 'Built-in',
        code: `function rotateLeft(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2)); // [3, 4, 5, 1, 2]`,
        explanation: 'Coupe à partir de k et met le début à la fin.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Clair', 'Immutable'],
        cons: ['Crée des copies']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Spread + slice()',
        approach: 'Built-in',
        code: `function rotateLeft(arr, k) {
  k = k % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

// Exemple
const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2)); // [3, 4, 5, 1, 2]`,
        explanation: 'Version ES6 avec spread.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Moderne', 'Lisible'],
        cons: ['ES6+']
      }
    ],
    
    examples: [
      {
        input: 'arr = [1, 2, 3, 4, 5], k = 2',
        output: '[3, 4, 5, 1, 2]',
        explanation: 'Les 2 premiers éléments (1, 2) vont à la fin'
      }
    ],
    
    tips: [
      'Rotation gauche de k = rotation droite de (n - k)',
      'Toujours normaliser k avec modulo',
      'slice() ne modifie pas le tableau original'
    ],
    
    tags: ['array', 'rotate', 'shift'],
    relatedAlgorithms: ['rotate-array-right']
  },

  {
    id: 'remove-element',
    title: '17. Supprimer un élément spécifique d\'un tableau',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 17,
    description: 'Retirer toutes les occurrences d\'une valeur donnée',
    explanation: `Supprimer toutes les instances d'une valeur spécifique du tableau.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : filter()',
        approach: 'Fonctionnelle',
        code: `function removeElement(arr, value) {
  return arr.filter(item => item !== value);
}

// Exemple
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(removeElement(arr, 2)); // [1, 3, 4, 5]`,
        explanation: 'Garde tous les éléments différents de la valeur.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Immutable', 'Lisible', 'Une ligne'],
        cons: ['Crée un nouveau tableau']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle while + splice() (in-place)',
        approach: 'Impérative',
        code: `function removeElement(arr, value) {
  const result = [...arr]; // Copie pour ne pas modifier l'original
  let i = 0;
  
  while (i < result.length) {
    if (result[i] === value) {
      result.splice(i, 1); // Supprime 1 élément à l'index i
    } else {
      i++;
    }
  }
  
  return result;
}

// Exemple
const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(removeElement(arr, 2)); // [1, 3, 4, 5]`,
        explanation: 'Supprime in-place avec splice (attention aux indices).',
        timeComplexity: 'O(n²)', // splice est O(n)
        spaceComplexity: 'O(n)',
        pros: ['Modifie sur place (si souhaité)'],
        cons: ['Moins performant O(n²)', 'Plus complexe', 'Gestion indices délicate']
      }
    ],
    
    examples: [
      {
        input: 'arr = [1, 2, 3, 2, 4, 2, 5], value = 2',
        output: '[1, 3, 4, 5]',
        explanation: 'Toutes les occurrences de 2 sont supprimées'
      }
    ],
    
    tips: [
      'filter() est LA méthode recommandée (simple et performante)',
      'splice() modifie le tableau original, attention !',
      'Si vous utilisez splice(), n\'incrémentez pas i après suppression'
    ],
    
    tags: ['array', 'remove', 'filter']
  },

  {
    id: 'insert-at-position',
    title: '18. Insérer un élément à une position donnée',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 18,
    description: 'Ajouter un élément à un index spécifique',
    explanation: `Insertion d'un élément à une position précise sans écraser les éléments existants.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : splice()',
        approach: 'Built-in',
        code: `function insertAt(arr, index, value) {
  const result = [...arr];
  result.splice(index, 0, value); // 0 = ne supprime rien
  return result;
}

// Exemple
const arr = [1, 2, 4, 5];
console.log(insertAt(arr, 2, 3)); // [1, 2, 3, 4, 5]`,
        explanation: 'Utilise splice(index, 0, value) pour insérer sans supprimer.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Méthode native', 'Directe'],
        cons: ['Crée une copie (si on veut préserver l\'original)']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : slice() + spread',
        approach: 'Built-in',
        code: `function insertAt(arr, index, value) {
  return [...arr.slice(0, index), value, ...arr.slice(index)];
}

// Exemple
const arr = [1, 2, 4, 5];
console.log(insertAt(arr, 2, 3)); // [1, 2, 3, 4, 5]`,
        explanation: 'Découpe et reconstruit avec le nouvel élément au milieu.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Immutable', 'Fonctionnel', 'Moderne'],
        cons: ['Moins lisible', 'Crée plusieurs tableaux intermédiaires']
      }
    ],
    
    examples: [
      {
        input: 'arr = [1, 2, 4, 5], index = 2, value = 3',
        output: '[1, 2, 3, 4, 5]',
        explanation: '3 est inséré à l\'index 2, décalant 4 et 5'
      },
      {
        input: 'arr = ["a", "c"], index = 1, value = "b"',
        output: '["a", "b", "c"]'
      }
    ],
    
    tips: [
      'splice(index, 0, value) : 0 signifie "ne rien supprimer"',
      'Vérifiez toujours que l\'index est valide (>= 0 et <= arr.length)',
      'Pour insérer à la fin : arr.push(value) ou index = arr.length'
    ],
    
    tags: ['array', 'insert', 'splice']
  },

  {
    id: 'is-array-sorted',
    title: '19. Vérifier si un tableau est trié',
    level: 'niveau-1',
    category: 'tableaux',
    difficulty: 'débutant',
    order: 19,
    description: 'Vérifier si un tableau est trié par ordre croissant',
    explanation: `Parcourt le tableau et vérifie que chaque élément est <= au suivant.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : every()',
        approach: 'Fonctionnelle',
        code: `function isSorted(arr) {
  return arr.every((val, i) => i === 0 || val >= arr[i - 1]);
}

// Exemples
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4]));    // false
console.log(isSorted([5, 5, 5]));       // true (égalité ok)`,
        explanation: 'Vérifie que chaque élément est >= au précédent.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Concis', 'Fonctionnel', 'Une ligne'],
        cons: ['Moins lisible', 'Parcourt toujours tout le tableau']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false; // Early return
    }
  }
  return true;
}

// Exemples
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4]));    // false`,
        explanation: 'Parcourt et compare chaque paire adjacente.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Clair', 'Early return possible', 'Plus performant'],
        cons: ['Plus verbeux']
      }
    ],
    
    examples: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: 'true',
        explanation: 'Chaque élément est >= au précédent'
      },
      {
        input: '[1, 3, 2, 4]',
        output: 'false',
        explanation: '3 > 2 : le tableau n\'est pas trié'
      },
      {
        input: '[5, 5, 5]',
        output: 'true',
        explanation: 'Éléments égaux = trié'
      }
    ],
    
    tips: [
      'La boucle for permet un early return (plus performant)',
      'every() parcourt toujours tout même si faux trouvé',
      'Pour ordre décroissant : arr[i] > arr[i - 1]',
      'Gérez le cas du tableau vide ou à 1 élément (toujours trié)'
    ],
    
    tags: ['array', 'sorted', 'validation']
  },

  {
    id: 'count-vowels',
    title: '20. Compter les voyelles dans une chaîne',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 20,
    description: 'Compter le nombre de voyelles (a, e, i, o, u) dans une chaîne',
    explanation: `Parcourt la chaîne et compte les voyelles (insensible à la casse).

Les voyelles françaises : a, e, i, o, u (+ variantes é, è, à, etc. si souhaité)`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Boucle for + includes()',
        approach: 'Impérative',
        code: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Exemples
console.log(countVowels('Hello World')); // 3 (e, o, o)
console.log(countVowels('JavaScript')); // 3 (a, a, i)`,
        explanation: 'Parcourt chaque caractère et vérifie si c\'est une voyelle.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Lisible', 'Facile à étendre'],
        cons: ['Un peu verbeux']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : filter() + includes()',
        approach: 'Fonctionnelle',
        code: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}

// Exemples
console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript')); // 3`,
        explanation: 'Filtre les voyelles et compte le résultat.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Concis'],
        cons: ['Crée un tableau intermédiaire']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Regex + match()',
        approach: 'Regex',
        code: `function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Exemples
console.log(countVowels('Hello World')); // 3
console.log(countVowels('JavaScript')); // 3
console.log(countVowels('xyz')); // 0`,
        explanation: 'Utilise une regex pour trouver toutes les voyelles (flag i = insensible casse).',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)', // k = nombre de voyelles
        pros: ['Très concis', 'Puissant', 'Une ligne'],
        cons: ['Regex peut être intimidant', 'Retourne null si aucune']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : reduce()',
        approach: 'Fonctionnelle',
        code: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => 
    vowels.includes(char) ? count + 1 : count
  , 0);
}

// Exemples
console.log(countVowels('Hello World')); // 3`,
        explanation: 'Accumule le compteur avec reduce.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Pas de variable externe'],
        cons: ['Moins lisible', 'Crée un tableau']
      }
    ],
    
    examples: [
      {
        input: '"Hello World"',
        output: '3',
        explanation: 'e, o, o sont des voyelles'
      },
      {
        input: '"JavaScript"',
        output: '3',
        explanation: 'a, a, i sont des voyelles'
      },
      {
        input: '"xyz"',
        output: '0',
        explanation: 'Aucune voyelle'
      }
    ],
    
    tips: [
      'Regex est la solution la plus élégante : /[aeiou]/gi',
      'Le flag g = global (toutes), i = insensitive (casse)',
      'Pour le français, ajoutez é, è, ê, à, etc. : /[aeiouéèêàù]/gi',
      'match() retourne null si aucune correspondance (vérifiez !)'
    ],
    
    tags: ['string', 'vowels', 'count', 'regex'],
    relatedAlgorithms: ['count-words']
  },
  {
    id: 'capitalize-words',
    title: '21. Mettre en majuscule la première lettre de chaque mot',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 21,
    description: 'Transformer "hello world" en "Hello World"',
    explanation: `Met en majuscule la première lettre de chaque mot (title case).

Aussi appelé "capitalize" ou "title case", c'est utile pour les titres, noms, etc.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : split + map + join',
        approach: 'Fonctionnelle',
        code: `function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Exemples
console.log(capitalizeWords('hello world')); // 'Hello World'
console.log(capitalizeWords('javaScript is AWESOME')); // 'Javascript Is Awesome'`,
        explanation: 'Découpe en mots, capitalise chaque mot (première lettre en majuscule, reste en minuscule), puis rejoint.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Clair', 'Fonctionnel', 'Prévisible'],
        cons: ['Crée plusieurs tableaux intermédiaires']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Regex + replace()',
        approach: 'Regex',
        code: `function capitalizeWords(str) {
  return str.replace(/\\b\\w/g, char => char.toUpperCase());
}

// Exemples
console.log(capitalizeWords('hello world')); // 'Hello World'
console.log(capitalizeWords('javaScript is awesome')); // 'JavaScript Is Awesome'`,
        explanation: 'Remplace chaque première lettre de mot (\\b = word boundary) par sa majuscule.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Très concis', 'Élégant', 'Une ligne'],
        cons: ['Regex moins évident', 'Ne force pas le reste en minuscule']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for avec flag',
        approach: 'Impérative',
        code: `function capitalizeWords(str) {
  let result = '';
  let capitalizeNext = true;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char === ' ') {
      result += char;
      capitalizeNext = true;
    } else {
      result += capitalizeNext ? char.toUpperCase() : char.toLowerCase();
      capitalizeNext = false;
    }
  }
  
  return result;
}

// Exemples
console.log(capitalizeWords('hello world')); // 'Hello World'`,
        explanation: 'Parcourt caractère par caractère, utilise un flag pour savoir quand capitaliser.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Contrôle total', 'Gère bien les cas spéciaux'],
        cons: ['Verbeux', 'Concaténation de strings coûteuse']
      }
    ],
    
    examples: [
      {
        input: '"hello world"',
        output: '"Hello World"',
        explanation: 'Chaque mot commence par une majuscule'
      },
      {
        input: '"javascript is awesome"',
        output: '"Javascript Is Awesome"',
        explanation: 'Fonctionne avec plusieurs mots'
      },
      {
        input: '"a"',
        output: '"A"',
        explanation: 'Un seul caractère'
      }
    ],
    
    tips: [
      'split-map-join est plus lisible',
      'Regex est plus court mais moins intuitif',
      '\\b détecte les limites de mots (word boundaries)',
      'Pour capitaliser uniquement la première lettre de TOUTE la phrase : str[0].toUpperCase() + str.slice(1)'
    ],
    
    tags: ['string', 'capitalize', 'title-case', 'regex']
  },

  {
    id: 'longest-word',
    title: '22. Trouver le mot le plus long d\'une phrase',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 22,
    description: 'Retourner le mot ayant le plus de caractères',
    explanation: `Découpe la phrase en mots et trouve celui avec la plus grande longueur.

En cas d'égalité, retourne généralement le premier trouvé.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : reduce()',
        approach: 'Fonctionnelle',
        code: `function longestWord(str) {
  return str.split(' ').reduce((longest, word) => 
    word.length > longest.length ? word : longest
  , '');
}

// Exemples
console.log(longestWord('The quick brown fox')); // 'quick' (ou 'brown')
console.log(longestWord('JavaScript is awesome')); // 'JavaScript'`,
        explanation: 'Compare chaque mot avec le plus long trouvé jusqu\'à présent.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Concis', 'Élégant'],
        cons: ['Moins lisible pour débutants']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function longestWord(str) {
  const words = str.split(' ');
  let longest = '';
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}

// Exemples
console.log(longestWord('The quick brown fox')); // 'quick'
console.log(longestWord('JavaScript is awesome')); // 'JavaScript'`,
        explanation: 'Parcourt tous les mots et garde le plus long.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Clair', 'Facile à débugger'],
        cons: ['Plus verbeux']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : sort() par longueur',
        approach: 'Built-in',
        code: `function longestWord(str) {
  const words = str.split(' ');
  return words.sort((a, b) => b.length - a.length)[0];
}

// Exemples
console.log(longestWord('The quick brown fox')); // 'quick' ou 'brown'
console.log(longestWord('JavaScript is awesome')); // 'JavaScript'`,
        explanation: 'Trie les mots par longueur décroissante et prend le premier.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis'],
        cons: ['Moins performant (tri O(n log n))', 'Modifie le tableau']
      }
    ],
    
    examples: [
      {
        input: '"The quick brown fox"',
        output: '"quick" (ou "brown")',
        explanation: 'Les deux font 5 caractères, retourne le premier'
      },
      {
        input: '"JavaScript is awesome"',
        output: '"JavaScript"',
        explanation: '10 caractères'
      }
    ],
    
    tips: [
      'Si égalité, retourne le premier trouvé (ordre d\'apparition)',
      'Pensez à gérer la ponctuation si nécessaire : str.replace(/[^a-z ]/gi, \'\')',
      'reduce() et for sont O(n), sort() est O(n log n)',
      'Pour retourner TOUS les plus longs : filter par longueur max'
    ],
    
    tags: ['string', 'longest', 'words'],
    relatedAlgorithms: ['count-words']
  },

  {
    id: 'count-words',
    title: '23. Compter les mots dans une phrase',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 23,
    description: 'Compter le nombre de mots séparés par des espaces',
    explanation: `Découpe la phrase en mots et compte-les.

Attention aux espaces multiples et aux espaces en début/fin !`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : split() + length',
        approach: 'Built-in',
        code: `function countWords(str) {
  return str.trim().split(/\\s+/).length;
}

// Exemples
console.log(countWords('Hello world from JavaScript')); // 4
console.log(countWords('  Multiple   spaces  ')); // 2
console.log(countWords('')); // 1 (attention !)`,
        explanation: 'trim() enlève espaces début/fin, split(/\\s+/) découpe sur un ou plusieurs espaces.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Gère espaces multiples', 'Concis'],
        cons: ['Crée un tableau', 'Retourne 1 pour chaîne vide']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Regex + match()',
        approach: 'Regex',
        code: `function countWords(str) {
  const matches = str.match(/\\S+/g);
  return matches ? matches.length : 0;
}

// Exemples
console.log(countWords('Hello world from JavaScript')); // 4
console.log(countWords('  Multiple   spaces  ')); // 2
console.log(countWords('')); // 0`,
        explanation: 'Trouve tous les groupes de caractères non-espaces (\\S = non-whitespace).',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Robuste', 'Gère chaîne vide correctement'],
        cons: ['Regex', 'Retourne null si aucun mot']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for avec compteur',
        approach: 'Impérative',
        code: `function countWords(str) {
  str = str.trim();
  if (str.length === 0) return 0;
  
  let count = 1; // Au moins 1 mot si non vide
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && str[i + 1] !== ' ') {
      count++;
    }
  }
  
  return count;
}

// Exemples
console.log(countWords('Hello world from JavaScript')); // 4`,
        explanation: 'Compte les transitions espace → non-espace.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Économe en mémoire O(1)', 'Contrôle total'],
        cons: ['Verbeux', 'Plus complexe']
      }
    ],
    
    examples: [
      {
        input: '"Hello world from JavaScript"',
        output: '4',
        explanation: '4 mots séparés par des espaces'
      },
      {
        input: '"  Multiple   spaces  "',
        output: '2',
        explanation: 'Gère espaces multiples correctement'
      },
      {
        input: '""',
        output: '0',
        explanation: 'Chaîne vide = 0 mots'
      }
    ],
    
    tips: [
      'trim() enlève les espaces de début/fin',
      '/\\s+/ gère les espaces multiples (un ou plus)',
      '/\\S+/g trouve tous les groupes de non-espaces',
      'Attention : split() sur chaîne vide retourne [\'\'] (longueur 1)',
      'match() retourne null si aucun match → vérifiez toujours !'
    ],
    
    tags: ['string', 'count', 'words', 'regex'],
    relatedAlgorithms: ['longest-word']
  },

  {
    id: 'replace-char',
    title: '24. Remplacer un caractère dans une chaîne',
    level: 'niveau-1',
    category: 'chaines',
    difficulty: 'débutant',
    order: 24,
    description: 'Remplacer toutes les occurrences d\'un caractère',
    explanation: `Remplace toutes les instances d'un caractère par un autre.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : replace() avec regex',
        approach: 'Built-in',
        code: `function replaceChar(str, oldChar, newChar) {
  return str.replace(new RegExp(oldChar, 'g'), newChar);
}

// Exemples
console.log(replaceChar('hello', 'l', 'L')); // 'heLLo'
console.log(replaceChar('banana', 'a', 'o')); // 'bonono'`,
        explanation: 'Utilise replace avec regex globale (flag g = remplacer toutes).',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Natif'],
        cons: ['Attention aux caractères spéciaux regex ($, ., *, etc.)']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : replaceAll() (ES2021)',
        approach: 'Built-in',
        code: `function replaceChar(str, oldChar, newChar) {
  return str.replaceAll(oldChar, newChar);
}

// Exemples
console.log(replaceChar('hello', 'l', 'L')); // 'heLLo'
console.log(replaceChar('banana', 'a', 'o')); // 'bonono'`,
        explanation: 'Méthode moderne qui remplace toutes les occurrences directement.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Très simple', 'Moderne', 'Pas de regex'],
        cons: ['ES2021 seulement (vérifiez compatibilité)']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : split() + join()',
        approach: 'Built-in',
        code: `function replaceChar(str, oldChar, newChar) {
  return str.split(oldChar).join(newChar);
}

// Exemples
console.log(replaceChar('hello', 'l', 'L')); // 'heLLo'
console.log(replaceChar('banana', 'a', 'o')); // 'bonono'`,
        explanation: 'Découpe sur l\'ancien caractère et rejoint avec le nouveau.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionne partout', 'Pas de regex', 'Astucieux'],
        cons: ['Moins évident', 'Crée un tableau intermédiaire']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : Boucle for',
        approach: 'Impérative',
        code: `function replaceChar(str, oldChar, newChar) {
  let result = '';
  
  for (let char of str) {
    result += char === oldChar ? newChar : char;
  }
  
  return result;
}

// Exemples
console.log(replaceChar('hello', 'l', 'L')); // 'heLLo'`,
        explanation: 'Reconstruit la chaîne caractère par caractère.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Contrôle total', 'Facile à comprendre'],
        cons: ['Verbeux', 'Concaténation coûteuse']
      }
    ],
    
    examples: [
      {
        input: 'str = "hello", oldChar = "l", newChar = "L"',
        output: '"heLLo"',
        explanation: 'Tous les "l" deviennent "L"'
      },
      {
        input: 'str = "banana", oldChar = "a", newChar = "o"',
        output: '"bonono"',
        explanation: 'Tous les "a" deviennent "o"'
      }
    ],
    
    tips: [
      'replaceAll() est le plus simple (ES2021+)',
      'split-join fonctionne sur tous les navigateurs',
      'replace() avec /g nécessite d\'échapper les caractères spéciaux regex',
      'Pour remplacer plusieurs caractères : chaînez les appels',
      'Attention : replace() SANS flag g ne remplace que la première occurrence'
    ],
    
    tags: ['string', 'replace', 'characters']
  },

  {
    id: 'generate-even-numbers',
    title: '25. Générer un tableau de nombres pairs',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 25,
    description: 'Créer un tableau des N premiers nombres pairs',
    explanation: `Génère les N premiers nombres pairs : [2, 4, 6, 8, 10, ...]

Formule : le i-ème nombre pair = (i + 1) * 2`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Array.from()',
        approach: 'Built-in',
        code: `function generateEvenNumbers(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * 2);
}

// Exemples
console.log(generateEvenNumbers(5)); // [2, 4, 6, 8, 10]
console.log(generateEvenNumbers(3)); // [2, 4, 6]`,
        explanation: 'Crée un tableau de longueur n et mappe chaque index à (i+1)*2.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Fonctionnel', 'Moderne'],
        cons: ['Syntaxe moins évidente pour débutants']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function generateEvenNumbers(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    result.push(i * 2);
  }
  
  return result;
}

// Exemples
console.log(generateEvenNumbers(5)); // [2, 4, 6, 8, 10]`,
        explanation: 'Boucle qui ajoute chaque nombre pair.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Clair', 'Facile à comprendre'],
        cons: ['Plus verbeux']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Spread + map()',
        approach: 'Fonctionnelle',
        code: `function generateEvenNumbers(n) {
  return [...Array(n)].map((_, i) => (i + 1) * 2);
}

// Exemples
console.log(generateEvenNumbers(5)); // [2, 4, 6, 8, 10]`,
        explanation: 'Spread un tableau vide puis mappe les indices.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Fonctionnel'],
        cons: ['Moins lisible']
      }
    ],
    
    examples: [
      {
        input: '5',
        output: '[2, 4, 6, 8, 10]',
        explanation: 'Les 5 premiers nombres pairs'
      },
      {
        input: '3',
        output: '[2, 4, 6]',
        explanation: 'Les 3 premiers'
      }
    ],
    
    tips: [
      'Array.from() est très pratique pour générer des séquences',
      'Formule : i-ème nombre pair = i * 2 (si index commence à 1)',
      'Alternative : [...Array(n).keys()].map(i => (i + 1) * 2)',
      'Les nombres pairs commencent à 2 (pas 0 pour les "premiers N pairs")'
    ],
    
    tags: ['array', 'numbers', 'even', 'generate'],
    relatedAlgorithms: ['generate-odd-numbers', 'generate-n-numbers']
  },

  {
    id: 'generate-odd-numbers',
    title: '26. Générer un tableau de nombres impairs',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 26,
    description: 'Créer un tableau des N premiers nombres impairs',
    explanation: `Génère les N premiers nombres impairs : [1, 3, 5, 7, 9, ...]

Formule : le i-ème nombre impair = i * 2 + 1 (index commence à 0)`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Array.from()',
        approach: 'Built-in',
        code: `function generateOddNumbers(n) {
  return Array.from({ length: n }, (_, i) => i * 2 + 1);
}

// Exemples
console.log(generateOddNumbers(5)); // [1, 3, 5, 7, 9]
console.log(generateOddNumbers(3)); // [1, 3, 5]`,
        explanation: 'Crée un tableau avec formule i*2+1 pour chaque index.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Fonctionnel', 'Formule claire'],
        cons: ['Syntaxe moins intuitive']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Boucle for',
        approach: 'Impérative',
        code: `function generateOddNumbers(n) {
  const result = [];
  
  for (let i = 0; i < n; i++) {
    result.push(i * 2 + 1);
  }
  
  return result;
}

// Exemples
console.log(generateOddNumbers(5)); // [1, 3, 5, 7, 9]`,
        explanation: 'Boucle qui génère chaque nombre impair.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Simple', 'Lisible', 'Explicite'],
        cons: ['Verbeux']
      }
    ],
    
    examples: [
      {
        input: '5',
        output: '[1, 3, 5, 7, 9]',
        explanation: 'Les 5 premiers nombres impairs'
      },
      {
        input: '1',
        output: '[1]',
        explanation: 'Le premier nombre impair'
      }
    ],
    
    tips: [
      'Formule : i * 2 + 1 pour le i-ème nombre impair (i commence à 0)',
      'Les impairs commencent à 1',
      'Alternative : for (let i = 1; i <= 2*n; i += 2)',
      'Différence avec pairs : pairs = (i+1)*2, impairs = i*2+1'
    ],
    
    tags: ['array', 'numbers', 'odd', 'generate'],
    relatedAlgorithms: ['generate-even-numbers', 'generate-n-numbers']
  },

  {
    id: 'generate-n-numbers',
    title: '27. Générer les N premiers nombres',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 27,
    description: 'Créer un tableau de 1 à N',
    explanation: `Génère une séquence de 1 à N : [1, 2, 3, ..., N]

Très utile pour itérations, tests, et génération de données.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Array.from()',
        approach: 'Built-in',
        code: `function generateNumbers(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// Exemples
console.log(generateNumbers(5)); // [1, 2, 3, 4, 5]
console.log(generateNumbers(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
        explanation: 'Crée un tableau de longueur n et mappe les indices +1.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Concis', 'Moderne', 'Standard'],
        cons: ['Syntaxe peut être déroutante']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Spread + keys()',
        approach: 'Built-in',
        code: `function generateNumbers(n) {
  return [...Array(n).keys()].map(i => i + 1);
}

// Exemples
console.log(generateNumbers(5)); // [1, 2, 3, 4, 5]`,
        explanation: 'Utilise keys() pour obtenir les indices [0..n-1] puis +1.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Élégant', 'Fonctionnel'],
        cons: ['Moins évident', 'Deux opérations']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Boucle for',
        approach: 'Impérative',
        code: `function generateNumbers(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  
  return result;
}

// Exemples
console.log(generateNumbers(5)); // [1, 2, 3, 4, 5]`,
        explanation: 'Simple boucle qui remplit le tableau de 1 à n.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Très clair', 'Simple', 'Facile à débugger'],
        cons: ['Verbeux']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : fill() + map()',
        approach: 'Built-in',
        code: `function generateNumbers(n) {
  return Array(n).fill(0).map((_, i) => i + 1);
}

// Exemples
console.log(generateNumbers(5)); // [1, 2, 3, 4, 5]`,
        explanation: 'Remplit un tableau de 0, puis mappe les indices.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Alternative intéressante'],
        cons: ['fill(0) inutile (gaspille une itération)']
      }
    ],
    
    examples: [
      {
        input: '5',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'Séquence de 1 à 5'
      },
      {
        input: '1',
        output: '[1]',
        explanation: 'Un seul élément'
      },
      {
        input: '0',
        output: '[]',
        explanation: 'Tableau vide'
      }
    ],
    
    tips: [
      'Array.from() est la méthode moderne préférée',
      'Utile pour beaucoup d\'algorithmes (range, sequence)',
      'Pour commencer à 0 : Array.from({length: n}, (_, i) => i)',
      'Pour range(start, end) : Array.from({length: end-start}, (_, i) => start + i)',
      'Cette fonction s\'appelle souvent "range" dans d\'autres langages'
    ],
    
    tags: ['array', 'numbers', 'range', 'sequence']
  },
  {
    id: 'factorial',
    title: '28. Calculer la factorielle d\'un nombre',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 28,
    description: 'Calculer n! = n × (n-1) × (n-2) × ... × 1',
    explanation: `La factorielle de n (notée n!) est le produit de tous les entiers de 1 à n.

Exemples :
- 5! = 5 × 4 × 3 × 2 × 1 = 120
- 0! = 1 (par définition)
- 1! = 1

La factorielle croît TRÈS rapidement : 20! = 2,432,902,008,176,640,000`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Boucle for',
        approach: 'Impérative',
        code: `function factorial(n) {
  if (n < 0) return undefined; // Pas défini pour négatifs
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Exemples
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(10)); // 3628800`,
        explanation: 'Multiplie tous les nombres de 2 à n de manière itérative.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Performant', 'Itératif (pas de stack overflow)', 'Économe en mémoire'],
        cons: ['Un peu verbeux']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Récursion',
        approach: 'Récursive',
        code: `function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  return n * factorial(n - 1);
}

// Exemples
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(10)); // 3628800`,
        explanation: 'Définition récursive : n! = n × (n-1)!',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Élégant', 'Suit la définition mathématique', 'Concis'],
        cons: ['Stack overflow si n trop grand (>~10000)', 'Utilise la pile d\'appels']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : reduce()',
        approach: 'Fonctionnelle',
        code: `function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((acc, val) => acc * val, 1);
}

// Exemples
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1`,
        explanation: 'Génère [1, 2, 3, ..., n] puis multiplie tous les éléments avec reduce.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Fonctionnel', 'Déclaratif'],
        cons: ['Crée un tableau intermédiaire', 'Moins performant', 'Plus verbeux que récursion']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : Récursion terminale (tail recursive)',
        approach: 'Récursive',
        code: `function factorial(n, accumulator = 1) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return accumulator;
  
  return factorial(n - 1, n * accumulator);
}

// Exemples
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(10)); // 3628800`,
        explanation: 'Récursion terminale : l\'appel récursif est la dernière opération (optimisable par certains compilateurs).',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        pros: ['Élégant', 'Optimisable (tail call optimization)', 'Pas de multiplication après retour'],
        cons: ['JS n\'optimise pas toujours les tail calls', 'Plus complexe à comprendre']
      }
    ],
    
    examples: [
      {
        input: '5',
        output: '120',
        explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120'
      },
      {
        input: '0',
        output: '1',
        explanation: '0! = 1 par définition mathématique'
      },
      {
        input: '10',
        output: '3628800',
        explanation: '10! = 3,628,800'
      }
    ],
    
    tips: [
      'La boucle for est la plus performante et la plus sûre',
      'La récursion est élégante mais limitée par la stack (~10000)',
      'Attention : factorielle croît TRÈS vite (overflow après ~170 en JS)',
      '0! = 1 par convention mathématique',
      'Les nombres négatifs n\'ont pas de factorielle',
      'Pour de grands nombres, utilisez BigInt en JavaScript'
    ],
    
    tags: ['math', 'factorial', 'recursion', 'iteration'],
    relatedAlgorithms: ['fibonacci']
  },

  {
    id: 'is-even-odd',
    title: '29. Vérifier si un nombre est pair ou impair',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 29,
    description: 'Déterminer si un nombre est pair (divisible par 2) ou impair',
    explanation: `Un nombre est pair si divisible par 2 sans reste (n % 2 === 0).
Un nombre est impair dans le cas contraire (n % 2 !== 0).

Exemples :
- Pairs : 0, 2, 4, 6, 8, 10, -2, -4...
- Impairs : 1, 3, 5, 7, 9, -1, -3...`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Modulo %',
        approach: 'Impérative',
        code: `function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

// Exemples
console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isOdd(7));    // true
console.log(isOdd(4));    // false

// Fonctionne avec négatifs
console.log(isEven(-4));  // true
console.log(isOdd(-3));   // true`,
        explanation: 'Utilise le modulo pour vérifier le reste de la division par 2.',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Standard', 'Rapide', 'Universel', 'Lisible'],
        cons: ['Aucun']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Bitwise AND (&)',
        approach: 'Bitwise',
        code: `function isEven(n) {
  return (n & 1) === 0;
}

function isOdd(n) {
  return (n & 1) === 1;
}

// Exemples
console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isOdd(7));    // true

// Explication binaire :
// 4 = 0100 & 0001 = 0000 (0) → pair
// 7 = 0111 & 0001 = 0001 (1) → impair`,
        explanation: 'Vérifie le bit de poids faible (rightmost bit) : 0 = pair, 1 = impair.',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        pros: ['Légèrement plus rapide (opération CPU niveau bas)', 'Astucieux'],
        cons: ['Moins lisible', 'Optimisation prématurée', 'Peut être déroutant']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : Math.abs() + modulo (gestion négatifs explicite)',
        approach: 'Impérative',
        code: `function isEven(n) {
  return Math.abs(n) % 2 === 0;
}

function isOdd(n) {
  return Math.abs(n) % 2 !== 0;
}

// Exemples
console.log(isEven(-4));  // true
console.log(isOdd(-3));   // true`,
        explanation: 'Utilise Math.abs() pour gérer explicitement les négatifs (mais c\'est inutile car % gère déjà).',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        pros: ['Explicite sur les négatifs'],
        cons: ['Inutile (% gère déjà les négatifs)', 'Appel de fonction supplémentaire']
      }
    ],
    
    examples: [
      {
        input: '4',
        output: 'pair (true)',
        explanation: '4 % 2 = 0'
      },
      {
        input: '7',
        output: 'impair (false)',
        explanation: '7 % 2 = 1'
      },
      {
        input: '0',
        output: 'pair (true)',
        explanation: '0 % 2 = 0, zéro est pair'
      },
      {
        input: '-4',
        output: 'pair (true)',
        explanation: 'Les négatifs suivent la même règle'
      }
    ],
    
    tips: [
      'Utilisez le modulo (%) - c\'est le standard',
      'Le modulo fonctionne parfaitement avec les nombres négatifs',
      'Le bitwise AND (&) est une micro-optimisation rarement utile',
      'Attention : en JavaScript, -3 % 2 donne -1 (pas 1), mais !== 0 fonctionne',
      '0 est pair par définition',
      'Pour des performances critiques en boucle, bitwise peut aider, sinon utilisez %'
    ],
    
    tags: ['math', 'even', 'odd', 'modulo', 'bitwise'],
    relatedAlgorithms: ['generate-even-numbers', 'generate-odd-numbers']
  },

  {
    id: 'is-prime',
    title: '30. Vérifier si un nombre est premier',
    level: 'niveau-1',
    category: 'nombres',
    difficulty: 'débutant',
    order: 30,
    description: 'Déterminer si un nombre n\'est divisible que par 1 et lui-même',
    explanation: `Un nombre premier n'a que deux diviseurs : 1 et lui-même.

Exemples de nombres premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

Notes importantes :
- 0 et 1 ne sont PAS premiers
- 2 est le seul nombre premier pair
- Les nombres négatifs ne sont pas premiers

Optimisation clé : il suffit de tester jusqu'à √n car si n a un diviseur > √n, il doit aussi avoir un diviseur < √n.`,
    
    solutions: [
      {
        id: 'method-1',
        title: 'Méthode 1 : Boucle basique',
        approach: 'Impérative',
        code: `function isPrime(n) {
  if (n < 2) return false;
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // Trouvé un diviseur
    }
  }
  
  return true;
}

// Exemples
console.log(isPrime(2));   // true
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(1));   // false`,
        explanation: 'Vérifie tous les diviseurs de 2 à n-1.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        pros: ['Simple', 'Facile à comprendre', 'Pédagogique'],
        cons: ['Très lent pour grands nombres', 'Teste trop de diviseurs inutiles']
      },
      {
        id: 'method-2',
        title: 'Méthode 2 : Optimisée (√n)',
        approach: 'Impérative',
        code: `function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; // Éliminer les pairs
  
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Exemples
console.log(isPrime(2));    // true
console.log(isPrime(7));    // true
console.log(isPrime(10));   // false
console.log(isPrime(97));   // true
console.log(isPrime(100));  // false`,
        explanation: 'Ne teste que jusqu\'à √n et saute les nombres pairs (sauf 2).',
        timeComplexity: 'O(√n)',
        spaceComplexity: 'O(1)',
        pros: ['Beaucoup plus rapide', 'Mathématiquement optimisé', 'Standard', 'Production-ready'],
        cons: ['Un peu plus complexe']
      },
      {
        id: 'method-3',
        title: 'Méthode 3 : every() (Fonctionnelle)',
        approach: 'Fonctionnelle',
        code: `function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  const sqrt = Math.sqrt(n);
  const divisors = Array.from(
    { length: Math.floor((sqrt - 1) / 2) },
    (_, i) => 2 * i + 3
  );
  
  return divisors.every(divisor => n % divisor !== 0);
}

// Exemples
console.log(isPrime(7));    // true
console.log(isPrime(10));   // false
console.log(isPrime(97));   // true`,
        explanation: 'Génère les diviseurs impairs de 3 à √n et teste avec every().',
        timeComplexity: 'O(√n)',
        spaceComplexity: 'O(√n)',
        pros: ['Fonctionnel', 'Élégant', 'Déclaratif'],
        cons: ['Crée un tableau (gaspille mémoire)', 'Moins lisible', 'Moins performant']
      },
      {
        id: 'method-4',
        title: 'Méthode 4 : Optimisée 6k±1',
        approach: 'Impérative',
        code: `function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  // Tous les premiers > 3 sont de la forme 6k±1
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

// Exemples
console.log(isPrime(7));    // true
console.log(isPrime(97));   // true
console.log(isPrime(1000)); // false`,
        explanation: 'Utilise le fait que tous les premiers > 3 sont de la forme 6k±1.',
        timeComplexity: 'O(√n)',
        spaceComplexity: 'O(1)',
        pros: ['Encore plus rapide (~3x)', 'Très optimisé', 'Utilisé en production'],
        cons: ['Plus complexe', 'Nécessite de comprendre la théorie des nombres']
      }
    ],
    
    examples: [
      {
        input: '2',
        output: 'true',
        explanation: '2 est le seul nombre premier pair'
      },
      {
        input: '7',
        output: 'true',
        explanation: '7 est premier (divisible que par 1 et 7)'
      },
      {
        input: '10',
        output: 'false',
        explanation: '10 = 2 × 5, donc pas premier'
      },
      {
        input: '1',
        output: 'false',
        explanation: '1 n\'est pas premier par définition'
      },
      {
        input: '97',
        output: 'true',
        explanation: '97 est un nombre premier'
      }
    ],
    
    tips: [
      'CRITIQUE : Il suffit de tester jusqu\'à √n (optimisation majeure)',
      'Éliminez d\'abord les cas simples : n < 2, n === 2, n % 2 === 0',
      'Pour de nombreux tests : utilisez le crible d\'Ératosthène',
      '2 est le seul nombre premier pair',
      '0 et 1 ne sont PAS premiers',
      'Les nombres négatifs ne sont pas premiers',
      'Pour n très grands : utilisez des algorithmes probabilistes (Miller-Rabin)',
      'Optimisation 6k±1 : tous les premiers > 3 sont de la forme 6k-1 ou 6k+1'
    ],
    
    tags: ['math', 'prime', 'number-theory', 'optimization'],
    relatedAlgorithms: ['generate-n-numbers', 'is-even-odd']
  },
  // ==========================================
  // 🔄 NIVEAU 2 : BOUCLES & LOGIQUE (Algorithmes 1-50)
  // ==========================================
  {
  id: 'second-largest',
  title: '31. Trouver le deuxième plus grand nombre',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 31,
  description: 'Trouver le deuxième plus grand élément d\'un tableau',
  explanation: `Trouver le deuxième plus grand nombre nécessite de parcourir le tableau en gardant trace des deux plus grandes valeurs.

Attention aux cas limites : doublons, tableaux de moins de 2 éléments.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Tri + accès à l\'index',
      approach: 'Built-in',
      code: `function secondLargest(arr) {
  if (arr.length < 2) return undefined;
  
  const sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[1];
}

// Exemples
console.log(secondLargest([5, 2, 8, 1, 9])); // 8
console.log(secondLargest([10, 10, 5, 3]));  // 5`,
      explanation: 'Supprime les doublons avec Set, trie par ordre décroissant, prend le deuxième.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Gère les doublons automatiquement'],
      cons: ['Moins performant (O(n log n))', 'Crée des copies']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Deux variables (une passe)',
      approach: 'Impérative',
      code: `function secondLargest(arr) {
  if (arr.length < 2) return undefined;
  
  let first = -Infinity;
  let second = -Infinity;
  
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  
  return second === -Infinity ? undefined : second;
}

// Exemples
console.log(secondLargest([5, 2, 8, 1, 9])); // 8
console.log(secondLargest([10, 10, 5, 3]));  // 5`,
      explanation: 'Maintient deux variables : le maximum et le deuxième maximum.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Optimal O(n)', 'Une seule passe', 'Économe en mémoire'],
      cons: ['Plus complexe', 'Gestion des cas limites']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Suppression du max + recherche',
      approach: 'Impérative',
      code: `function secondLargest(arr) {
  if (arr.length < 2) return undefined;
  
  const unique = [...new Set(arr)];
  if (unique.length < 2) return undefined;
  
  const max = Math.max(...unique);
  const remaining = unique.filter(n => n !== max);
  return Math.max(...remaining);
}

// Exemples
console.log(secondLargest([5, 2, 8, 1, 9])); // 8
console.log(secondLargest([10, 10, 5, 3]));  // 5`,
      explanation: 'Trouve le max, le retire, puis trouve le max du reste.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Facile à comprendre', 'Logique claire'],
      cons: ['Deux passes', 'Crée des tableaux intermédiaires']
    }
  ],
  
  examples: [
    {
      input: '[5, 2, 8, 1, 9]',
      output: '8',
      explanation: '9 est le plus grand, 8 est le deuxième'
    },
    {
      input: '[10, 10, 5, 3]',
      output: '5',
      explanation: 'Ignore les doublons de 10'
    },
    {
      input: '[5]',
      output: 'undefined',
      explanation: 'Pas assez d\'éléments'
    }
  ],
  
  tips: [
    'La méthode à deux variables est la plus efficace O(n)',
    'Attention aux doublons : [10, 10, 5] → le 2e est 5, pas 10',
    'Gérez les cas : tableau vide, 1 élément, tous identiques',
    'Utilisez -Infinity pour initialiser (gère les négatifs)'
  ],
  
  tags: ['array', 'max', 'sorting', 'optimization'],
  relatedAlgorithms: ['find-max', 'find-min', 'n-largest']
},

{
  id: 'n-largest',
  title: '32. Trouver les N plus grands éléments',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 32,
  description: 'Retourner les N plus grands éléments d\'un tableau',
  explanation: `Trouver les N éléments les plus grands d'un tableau, triés par ordre décroissant.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Tri + slice',
      approach: 'Built-in',
      code: `function nLargest(arr, n) {
  return [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, n);
}

// Exemples
console.log(nLargest([5, 2, 8, 1, 9, 3], 3)); // [9, 8, 5]
console.log(nLargest([10, 10, 5, 3, 7], 2));  // [10, 7]`,
      explanation: 'Supprime doublons, trie décroissant, prend les N premiers.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Une ligne', 'Lisible'],
      cons: ['Tri complet inutile si n << arr.length']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Boucle avec tableau de taille N',
      approach: 'Impérative',
      code: `function nLargest(arr, n) {
  const result = [];
  const unique = [...new Set(arr)];
  
  for (let i = 0; i < n && i < unique.length; i++) {
    const max = Math.max(...unique);
    result.push(max);
    const index = unique.indexOf(max);
    unique.splice(index, 1);
  }
  
  return result;
}

// Exemples
console.log(nLargest([5, 2, 8, 1, 9, 3], 3)); // [9, 8, 5]`,
      explanation: 'Trouve le max, l\'ajoute au résultat, le retire, répète N fois.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n)',
      pros: ['Logique claire', 'Arrête après N éléments'],
      cons: ['Moins performant O(n²)', 'Modifications du tableau']
    }
  ],
  
  examples: [
    {
      input: 'arr = [5, 2, 8, 1, 9, 3], n = 3',
      output: '[9, 8, 5]',
      explanation: 'Les 3 plus grands nombres'
    },
    {
      input: 'arr = [10, 10, 5, 3, 7], n = 2',
      output: '[10, 7]',
      explanation: 'Ignore les doublons'
    }
  ],
  
  tips: [
    'Pour n petit, le tri est acceptable',
    'Pour n très petit et tableau très grand, utilisez une heap',
    'Set élimine automatiquement les doublons'
  ],
  
  tags: ['array', 'sorting', 'top-n'],
  relatedAlgorithms: ['second-largest', 'n-smallest']
},

{
  id: 'n-smallest',
  title: '33. Trouver les N plus petits éléments',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 33,
  description: 'Retourner les N plus petits éléments d\'un tableau',
  explanation: `Trouver les N éléments les plus petits, triés par ordre croissant.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Tri + slice',
      approach: 'Built-in',
      code: `function nSmallest(arr, n) {
  return [...new Set(arr)]
    .sort((a, b) => a - b)
    .slice(0, n);
}

// Exemples
console.log(nSmallest([5, 2, 8, 1, 9, 3], 3)); // [1, 2, 3]
console.log(nSmallest([10, 10, 5, 3, 7], 2));  // [3, 5]`,
      explanation: 'Trie croissant et prend les N premiers.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Lisible'],
      cons: ['Tri complet pas optimal']
    }
  ],
  
  examples: [
    {
      input: 'arr = [5, 2, 8, 1, 9, 3], n = 3',
      output: '[1, 2, 3]',
      explanation: 'Les 3 plus petits nombres'
    }
  ],
  
  tips: [
    'Même logique que nLargest mais tri croissant',
    'Utilisez slice(0, n) pour limiter le résultat'
  ],
  
  tags: ['array', 'sorting', 'top-n'],
  relatedAlgorithms: ['n-largest', 'find-min']
},

{
  id: 'unique-chars',
  title: '34. Vérifier si tous les caractères sont uniques',
  level: 'niveau-2',
  category: 'chaines',
  difficulty: 'intermédiaire',
  order: 34,
  description: 'Vérifier si une chaîne contient uniquement des caractères uniques',
  explanation: `Déterminer si tous les caractères d'une chaîne sont différents (aucun doublon).`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Set',
      approach: 'Built-in',
      code: `function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

// Exemples
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('hello'));  // false (l répété)
console.log(hasUniqueChars(''));       // true`,
      explanation: 'Set ne garde que les valeurs uniques. Si sa taille = longueur de la chaîne, tous uniques.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Très simple', 'Une ligne', 'Performant'],
      cons: ['Utilise O(n) mémoire']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Boucle avec objet',
      approach: 'Impérative',
      code: `function hasUniqueChars(str) {
  const seen = {};
  
  for (let char of str) {
    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }
  
  return true;
}

// Exemples
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('hello'));  // false`,
      explanation: 'Utilise un objet pour suivre les caractères vus. Early return si doublon.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Early return possible', 'Explicite'],
      cons: ['Plus verbeux']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : indexOf vs lastIndexOf',
      approach: 'Built-in',
      code: `function hasUniqueChars(str) {
  return str.split('').every((char, index) => 
    str.indexOf(char) === str.lastIndexOf(char)
  );
}

// Exemples
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('hello'));  // false`,
      explanation: 'Pour chaque caractère, vérifie que indexOf = lastIndexOf (apparaît une seule fois).',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n)',
      pros: ['Astucieux', 'Pas de structure auxiliaire'],
      cons: ['O(n²) moins performant']
    }
  ],
  
  examples: [
    {
      input: '"abcdef"',
      output: 'true',
      explanation: 'Tous les caractères sont différents'
    },
    {
      input: '"hello"',
      output: 'false',
      explanation: 'Le "l" apparaît deux fois'
    },
    {
      input: '""',
      output: 'true',
      explanation: 'Chaîne vide = tous uniques'
    }
  ],
  
  tips: [
    'Set est la solution la plus simple et performante',
    'Pour optimiser la mémoire : utilisez un objet avec early return',
    'Sensible à la casse : "A" et "a" sont différents'
  ],
  
  tags: ['string', 'unique', 'set', 'validation'],
  relatedAlgorithms: ['remove-duplicates', 'first-non-repeating']
},

{
  id: 'first-non-repeating',
  title: '35. Trouver le premier caractère non répété',
  level: 'niveau-2',
  category: 'chaines',
  difficulty: 'intermédiaire',
  order: 35,
  description: 'Trouver le premier caractère qui n\'apparaît qu\'une fois',
  explanation: `Trouver le premier caractère dans une chaîne qui n'a qu'une seule occurrence.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Map pour compter',
      approach: 'Impérative',
      code: `function firstNonRepeating(str) {
  const counts = new Map();
  
  // Compter les occurrences
  for (let char of str) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
  
  // Trouver le premier avec count = 1
  for (let char of str) {
    if (counts.get(char) === 1) {
      return char;
    }
  }
  
  return null;
}

// Exemples
console.log(firstNonRepeating('swiss'));      // 'w'
console.log(firstNonRepeating('aabbcc'));     // null
console.log(firstNonRepeating('javascript')); // 'j'`,
      explanation: 'Deux passes : compte puis trouve le premier avec count = 1.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Optimal O(n)', 'Clair', 'Utilise Map'],
      cons: ['Deux passes du tableau']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : indexOf vs lastIndexOf',
      approach: 'Built-in',
      code: `function firstNonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

// Exemples
console.log(firstNonRepeating('swiss'));      // 'w'
console.log(firstNonRepeating('aabbcc'));     // null`,
      explanation: 'Pour chaque caractère, vérifie si indexOf = lastIndexOf.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      pros: ['Simple', 'Pas de structure auxiliaire'],
      cons: ['O(n²) moins performant']
    }
  ],
  
  examples: [
    {
      input: '"swiss"',
      output: '"w"',
      explanation: 's\' apparaît 3 fois, \'w\' et \'i\' 1 fois, \'w\' est le premier'
    },
    {
      input: '"aabbcc"',
      output: 'null',
      explanation: 'Tous les caractères sont répétés'
    }
  ],
  
  tips: [
    'Map est optimal pour compter les occurrences',
    'Conservez l\'ordre d\'apparition avec deux passes',
    'indexOf/lastIndexOf est O(n²) mais ne nécessite pas de mémoire'
  ],
  
  tags: ['string', 'frequency', 'map', 'optimization'],
  relatedAlgorithms: ['unique-chars', 'count-occurrences']
},

{
  id: 'remove-falsy',
  title: '36. Supprimer les valeurs falsy d\'un tableau',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 36,
  description: 'Retirer toutes les valeurs falsy (false, 0, "", null, undefined, NaN)',
  explanation: `En JavaScript, les valeurs falsy sont : false, 0, "", null, undefined, NaN.

Filtrer un tableau pour ne garder que les valeurs truthy.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : filter avec Boolean',
      approach: 'Fonctionnelle',
      code: `function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// Exemples
console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN]));
// [1, 2, 3]

console.log(removeFalsy([0, '0', false, 'false']));
// ['0', 'false'] - strings non vides sont truthy`,
      explanation: 'Boolean est une fonction qui convertit en booléen. filter(Boolean) garde les truthy.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Très concis', 'Une ligne', 'Idiomatique'],
      cons: ['Peut être surprenant pour débutants']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : filter explicite',
      approach: 'Fonctionnelle',
      code: `function removeFalsy(arr) {
  return arr.filter(item => item);
}

// Ou plus explicite :
function removeFalsy(arr) {
  return arr.filter(item => !!item);
}

// Exemples
console.log(removeFalsy([0, 1, false, 2, '', 3])); // [1, 2, 3]`,
      explanation: 'Filtre avec une condition truthy explicite.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Clair', 'Explicite'],
      cons: ['Légèrement plus verbeux que Boolean']
    }
  ],
  
  examples: [
    {
      input: '[0, 1, false, 2, "", 3, null, undefined, NaN]',
      output: '[1, 2, 3]',
      explanation: 'Seules les valeurs truthy sont gardées'
    },
    {
      input: '[0, "0", false, "false"]',
      output: '["0", "false"]',
      explanation: 'Les strings non vides sont truthy'
    }
  ],
  
  tips: [
    'filter(Boolean) est la méthode standard en JavaScript',
    'Attention : "0" et "false" (strings) sont truthy !',
    'Les valeurs falsy : false, 0, "", null, undefined, NaN',
    'Double négation !! convertit en booléen : !!0 = false, !!"text" = true'
  ],
  
  tags: ['array', 'filter', 'falsy', 'truthy'],
  relatedAlgorithms: ['remove-element', 'remove-duplicates']
},

{
  id: 'flatten-array',
  title: '37. Aplatir un tableau (1 niveau)',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 37,
  description: 'Aplatir un tableau d\'un niveau [[1, 2], [3, 4]] → [1, 2, 3, 4]',
  explanation: `Aplatir (flatten) un tableau signifie supprimer un niveau d'imbrication.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : flat()',
      approach: 'Built-in',
      code: `function flattenArray(arr) {
  return arr.flat();
}

// Exemples
console.log(flattenArray([[1, 2], [3, 4]]));        // [1, 2, 3, 4]
console.log(flattenArray([1, [2, 3], 4, [5]]));     // [1, 2, 3, 4, 5]
console.log(flattenArray([[1], [2], [3]]));         // [1, 2, 3]`,
      explanation: 'Méthode native flat() aplatit d\'un niveau par défaut.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Très simple', 'Une ligne', 'Moderne (ES2019)'],
      cons: ['ES2019+ seulement']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : concat + spread',
      approach: 'Built-in',
      code: `function flattenArray(arr) {
  return [].concat(...arr);
}

// Exemples
console.log(flattenArray([[1, 2], [3, 4]]));    // [1, 2, 3, 4]
console.log(flattenArray([1, [2, 3], 4, [5]])); // [1, 2, 3, 4, 5]`,
      explanation: 'Spread décompose les sous-tableaux, concat les combine.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Compatible partout', 'Concis'],
      cons: ['Moins lisible que flat()']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : reduce + concat',
      approach: 'Fonctionnelle',
      code: `function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

// Exemples
console.log(flattenArray([[1, 2], [3, 4]])); // [1, 2, 3, 4]`,
      explanation: 'Utilise reduce pour concaténer chaque sous-tableau.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Fonctionnel', 'Explicite'],
      cons: ['Plus verbeux']
    },
    {
      id: 'method-4',
      title: 'Méthode 4 : Boucle for',
      approach: 'Impérative',
      code: `function flattenArray(arr) {
  const result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  
  return result;
}

// Exemples
console.log(flattenArray([[1, 2], [3, 4]])); // [1, 2, 3, 4]`,
      explanation: 'Parcourt et décompose chaque sous-tableau.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Contrôle total', 'Gère les éléments non-tableaux'],
      cons: ['Verbeux']
    }
  ],
  
  examples: [
    {
      input: '[[1, 2], [3, 4]]',
      output: '[1, 2, 3, 4]',
      explanation: 'Aplatit un niveau'
    },
    {
      input: '[1, [2, 3], 4, [5]]',
      output: '[1, 2, 3, 4, 5]',
      explanation: 'Gère les éléments mélangés'
    }
  ],
  
  tips: [
    'flat() est la méthode moderne (ES2019)',
    'Pour aplatir complètement : flat(Infinity)',
    'concat + spread est une bonne alternative pré-ES2019',
    'Array.isArray() vérifie si c\'est un tableau'
  ],
  
  tags: ['array', 'flatten', 'nested'],
  relatedAlgorithms: ['merge-arrays']
},

{
  id: 'chunk-array',
  title: '38. Diviser un tableau en morceaux',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 38,
  description: 'Diviser un tableau en sous-tableaux de taille n',
  explanation: `Découper un tableau en morceaux (chunks) de taille fixe.

Exemple : [1, 2, 3, 4, 5], size=2 → [[1, 2], [3, 4], [5]]`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Boucle for + slice',
      approach: 'Impérative',
      code: `function chunkArray(arr, size) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  
  return result;
}

// Exemples
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
// [[1, 2, 3], [4, 5, 6]]`,
      explanation: 'Parcourt par pas de size et découpe avec slice.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Clair', 'Performant'],
      cons: ['Un peu verbeux']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Récursion',
      approach: 'Récursive',
      code: `function chunkArray(arr, size) {
  if (arr.length === 0) return [];
  
  return [
    arr.slice(0, size),
    ...chunkArray(arr.slice(size), size)
  ];
}

// Exemples
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]`,
      explanation: 'Prend les size premiers, puis récurse sur le reste.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Élégant', 'Fonctionnel'],
      cons: ['Stack overflow possible sur grands tableaux']
    }
  ],
  
  examples: [
    {
      input: 'arr = [1, 2, 3, 4, 5], size = 2',
      output: '[[1, 2], [3, 4], [5]]',
      explanation: 'Morceaux de 2, dernier incomplet'
    },
    {
      input: 'arr = [1, 2, 3, 4, 5, 6], size = 3',
      output: '[[1, 2, 3], [4, 5, 6]]',
      explanation: 'Morceaux de 3'
    }
  ],
  
  tips: [
    'La boucle for avec slice est la plus simple',
    'Le dernier chunk peut être plus petit si longueur non divisible',
    'Vérifiez que size > 0',
    'Utile pour pagination, traitement par lots'
  ],
  
  tags: ['array', 'chunk', 'split'],
  relatedAlgorithms: ['flatten-array']
},

{
  id: 'array-difference-symmetric',
  title: '39. Différence symétrique entre deux tableaux',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 39,
  description: 'Éléments présents dans l\'un OU l\'autre mais pas dans les deux',
  explanation: `La différence symétrique retourne les éléments uniques à chaque tableau.

A △ B = (A - B) ∪ (B - A)`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Filter + includes (deux directions)',
      approach: 'Fonctionnelle',
      code: `function symmetricDifference(arr1, arr2) {
  const diff1 = arr1.filter(item => !arr2.includes(item));
  const diff2 = arr2.filter(item => !arr1.includes(item));
  return [...diff1, ...diff2];
}

// Exemples
console.log(symmetricDifference([1, 2, 3], [2, 3, 4, 5]));
// [1, 4, 5]`,
      explanation: 'Trouve les éléments de arr1 pas dans arr2, et vice versa.',
      timeComplexity: 'O(n * m)',
      spaceComplexity: 'O(n + m)',
      pros: ['Facile à comprendre', 'Deux filtres séparés'],
      cons: ['O(n*m) pas optimal']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Set pour optimiser',
      approach: 'Built-in',
      code: `function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  
  const diff1 = arr1.filter(item => !set2.has(item));
  const diff2 = arr2.filter(item => !set1.has(item));
  
  return [...new Set([...diff1, ...diff2])];
}

// Exemples
console.log(symmetricDifference([1, 2, 3], [2, 3, 4, 5]));
// [1, 4, 5]`,
      explanation: 'Utilise Set pour lookup O(1), élimine les doublons finaux.',
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(n + m)',
      pros: ['Performant O(n+m)', 'Pas de doublons'],
      cons: ['Plus complexe']
    }
  ],
  
  examples: [
    {
      input: 'arr1 = [1, 2, 3], arr2 = [2, 3, 4, 5]',
      output: '[1, 4, 5]',
      explanation: '1 uniquement dans arr1, 4 et 5 uniquement dans arr2'
    }
  ],
  
  tips: [
    'Différence symétrique = (A-B) + (B-A)',
    'Set améliore drastiquement les performances',
    'Résultat sans doublons en utilisant Set final'
  ],
  
  tags: ['array', 'set', 'difference', 'symmetric'],
  relatedAlgorithms: ['array-difference', 'array-intersection']
},

{
  id: 'group-by',
  title: '40. Grouper les éléments par propriété',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 40,
  description: 'Grouper un tableau d\'objets selon une clé',
  explanation: `Regrouper les éléments d'un tableau selon une propriété commune.

Exemple : grouper des personnes par âge, des produits par catégorie, etc.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : reduce avec objet',
      approach: 'Fonctionnelle',
      code: `function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const groupKey = item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}

// Exemple
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

console.log(groupBy(people, 'age'));
/*
{
  25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  30: [{ name: 'Bob', age: 30 }]
}
*/`,
      explanation: 'Utilise reduce pour construire un objet avec des clés de groupe.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Standard', 'Performant', 'Fonctionnel'],
      cons: ['Un peu verbeux']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Boucle for',
      approach: 'Impérative',
      code: `function groupBy(arr, key) {
  const groups = {};
  
  for (let item of arr) {
    const groupKey = item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
  }
  
  return groups;
}

// Exemple
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

console.log(groupBy(people, 'age'));`,
      explanation: 'Boucle explicite pour remplir l\'objet de groupes.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Très clair', 'Facile à comprendre'],
      cons: ['Plus verbeux que reduce']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Map pour grouper',
      approach: 'Built-in',
      code: `function groupBy(arr, key) {
  const groups = new Map();
  
  for (let item of arr) {
    const groupKey = item[key];
    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }
    groups.get(groupKey).push(item);
  }
  
  return Object.fromEntries(groups);
}

// Exemple
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

console.log(groupBy(people, 'age'));`,
      explanation: 'Utilise Map puis convertit en objet.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Map gère mieux les clés non-string'],
      cons: ['Conversion finale en objet']
    }
  ],
  
  examples: [
    {
      input: '[{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 25}]',
      output: '{25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}], 30: [{name: "Bob", age: 30}]}',
      explanation: 'Groupés par âge'
    }
  ],
  
  tips: [
    'reduce est la méthode standard pour grouper',
    'Vérifiez toujours si la clé existe avant de push',
    'Map est meilleur si les clés ne sont pas des strings',
    'Utile pour agrégation, reporting, data processing'
  ],
  
  tags: ['array', 'object', 'grouping', 'reduce'],
  relatedAlgorithms: ['count-occurrences']
},
// ==========================================
// 🔄 NIVEAU 2 : BOUCLES & LOGIQUE (Algorithmes 41-50)
// ==========================================

{
  id: 'inverted-pyramid',
  title: '41. Générer une pyramide inversée',
  level: 'niveau-2',
  category: 'patterns',
  difficulty: 'intermédiaire',
  order: 41,
  description: 'Générer une pyramide d\'étoiles inversée de hauteur n',
  explanation: `Générer une pyramide inversée avec des étoiles.

Exemple pour n=5 :
*********
 *******
  *****
   ***
    *`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Boucle imbriquée',
      approach: 'Impérative',
      code: `function invertedPyramid(n) {
  let result = '';
  
  for (let i = 0; i < n; i++) {
    // Espaces au début
    result += ' '.repeat(i);
    
    // Étoiles
    const stars = 2 * (n - i) - 1;
    result += '*'.repeat(stars);
    
    // Nouvelle ligne (sauf dernière)
    if (i < n - 1) result += '\\n';
  }
  
  return result;
}

// Exemple
console.log(invertedPyramid(5));
/*
*********
 *******
  *****
   ***
    *
*/`,
      explanation: 'Pour chaque ligne i : i espaces, puis (2*(n-i)-1) étoiles.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n²)',
      pros: ['Simple', 'Formule claire'],
      cons: ['Concaténation de strings']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Array + map',
      approach: 'Fonctionnelle',
      code: `function invertedPyramid(n) {
  return Array.from({ length: n }, (_, i) => {
    const spaces = ' '.repeat(i);
    const stars = '*'.repeat(2 * (n - i) - 1);
    return spaces + stars;
  }).join('\\n');
}

// Exemple
console.log(invertedPyramid(5));`,
      explanation: 'Génère un tableau de lignes puis les joint.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n²)',
      pros: ['Fonctionnel', 'Concis'],
      cons: ['Crée un tableau intermédiaire']
    }
  ],
  
  examples: [
    {
      input: '3',
      output: `*****
 ***
  *`,
      explanation: 'Pyramide inversée de hauteur 3'
    },
    {
      input: '5',
      output: `*********
 *******
  *****
   ***
    *`,
      explanation: 'Pyramide inversée de hauteur 5'
    }
  ],
  
  tips: [
    'Formule des étoiles : 2 * (n - i) - 1 pour la ligne i',
    'Formule des espaces : i espaces pour la ligne i',
    'Ligne 0 : 0 espaces, 2n-1 étoiles',
    'Dernière ligne : n-1 espaces, 1 étoile'
  ],
  
  tags: ['pattern', 'loop', 'string'],
  relatedAlgorithms: ['pyramid']
},

{
  id: 'fibonacci',
  title: '42. Générer une suite de Fibonacci',
  level: 'niveau-2',
  category: 'nombres',
  difficulty: 'intermédiaire',
  order: 42,
  description: 'Générer les N premiers nombres de Fibonacci',
  explanation: `Suite de Fibonacci : chaque nombre est la somme des deux précédents.
  
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Itératif',
      approach: 'Impérative',
      code: `function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const fib = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib;
}

// Exemples
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
      explanation: 'Génère la suite de manière itérative, le plus efficace.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Optimal', 'Simple', 'Pas de stack overflow', 'O(n)'],
      cons: ['Moins élégant que récursion']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Récursif (naïf)',
      approach: 'Récursive',
      code: `function fibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Pour générer la suite
function fibonacci(n) {
  return Array.from({ length: n }, (_, i) => fibonacciRecursive(i));
}

// Exemples
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`,
      explanation: 'Récursion simple mais très inefficace (recalcule plusieurs fois).',
      timeComplexity: 'O(2^n)',
      spaceComplexity: 'O(n)',
      pros: ['Élégant', 'Suit la définition mathématique'],
      cons: ['TRÈS lent O(2^n)', 'Stack overflow', 'Ne PAS utiliser en production']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Récursif avec mémoïsation',
      approach: 'Récursive',
      code: `function fibonacci(n) {
  const memo = {};
  
  function fib(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    if (memo[num]) return memo[num];
    
    memo[num] = fib(num - 1) + fib(num - 2);
    return memo[num];
  }
  
  return Array.from({ length: n }, (_, i) => fib(i));
}

// Exemples
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`,
      explanation: 'Mémoïsation évite les recalculs, beaucoup plus rapide.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Récursif mais performant', 'Cache les résultats'],
      cons: ['Plus complexe', 'Utilise mémoire pour cache']
    },
    {
      id: 'method-4',
      title: 'Méthode 4 : Formule de Binet (mathématique)',
      approach: 'Mathématique',
      code: `function fibonacci(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const psi = (1 - Math.sqrt(5)) / 2;
  
  return Array.from({ length: n }, (_, i) => {
    return Math.round((Math.pow(phi, i) - Math.pow(psi, i)) / Math.sqrt(5));
  });
}

// Exemples
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]`,
      explanation: 'Formule mathématique directe (nombre d\'or).',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Mathématiquement intéressant', 'Calcul direct'],
      cons: ['Erreurs d\'arrondi pour grands n', 'Moins intuitif']
    }
  ],
  
  examples: [
    {
      input: '8',
      output: '[0, 1, 1, 2, 3, 5, 8, 13]',
      explanation: 'Les 8 premiers nombres de Fibonacci'
    },
    {
      input: '10',
      output: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
      explanation: 'Les 10 premiers'
    }
  ],
  
  tips: [
    'La méthode itérative est la meilleure pour la production',
    'Récursion naïve est O(2^n) - TRÈS lent, ne JAMAIS utiliser',
    'Mémoïsation transforme O(2^n) en O(n)',
    'Suite commence à 0, 1 (parfois 1, 1 selon définition)',
    'Croissance exponentielle : F(50) = 12,586,269,025'
  ],
  
  tags: ['math', 'fibonacci', 'recursion', 'dynamic-programming'],
  relatedAlgorithms: ['factorial']
},

{
  id: 'are-anagrams',
  title: '43. Vérifier si deux chaînes sont des anagrammes',
  level: 'niveau-2',
  category: 'chaines',
  difficulty: 'intermédiaire',
  order: 43,
  description: 'Vérifier si deux mots sont des anagrammes (mêmes lettres, ordre différent)',
  explanation: `Deux mots sont anagrammes s'ils contiennent exactement les mêmes lettres avec les mêmes fréquences.

Exemples : "listen" et "silent", "evil" et "vile"`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Tri des caractères',
      approach: 'Built-in',
      code: `function areAnagrams(str1, str2) {
  // Normaliser : minuscules, supprimer espaces
  const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (clean1.length !== clean2.length) return false;
  
  // Trier et comparer
  const sorted1 = clean1.split('').sort().join('');
  const sorted2 = clean2.split('').sort().join('');
  
  return sorted1 === sorted2;
}

// Exemples
console.log(areAnagrams('listen', 'silent'));     // true
console.log(areAnagrams('hello', 'world'));       // false
console.log(areAnagrams('The Eyes', 'They See')); // true`,
      explanation: 'Trie les caractères de chaque chaîne et compare.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Facile à comprendre', 'Gère espaces/ponctuation'],
      cons: ['O(n log n) à cause du tri']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Comptage de fréquences (Map)',
      approach: 'Impérative',
      code: `function areAnagrams(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (clean1.length !== clean2.length) return false;
  
  const freq = new Map();
  
  // Compter str1
  for (let char of clean1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  // Décompter str2
  for (let char of clean2) {
    if (!freq.has(char)) return false;
    freq.set(char, freq.get(char) - 1);
    if (freq.get(char) === 0) freq.delete(char);
  }
  
  return freq.size === 0;
}

// Exemples
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false`,
      explanation: 'Compte les fréquences de chaque caractère et compare.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k)', // k = nombre de caractères uniques
      pros: ['Optimal O(n)', 'Pas de tri nécessaire'],
      cons: ['Plus complexe', 'Utilise Map']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Objet pour compter',
      approach: 'Impérative',
      code: `function areAnagrams(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (clean1.length !== clean2.length) return false;
  
  const freq = {};
  
  for (let char of clean1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  for (let char of clean2) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  
  return Object.values(freq).every(count => count === 0);
}

// Exemples
console.log(areAnagrams('listen', 'silent')); // true`,
      explanation: 'Version avec objet au lieu de Map.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k)',
      pros: ['O(n)', 'Pas de Map nécessaire'],
      cons: ['every() à la fin ajoute une passe']
    }
  ],
  
  examples: [
    {
      input: '"listen", "silent"',
      output: 'true',
      explanation: 'Mêmes lettres : l, i, s, t, e, n'
    },
    {
      input: '"hello", "world"',
      output: 'false',
      explanation: 'Lettres différentes'
    },
    {
      input: '"The Eyes", "They See"',
      output: 'true',
      explanation: 'Anagrammes avec espaces (ignorés)'
    }
  ],
  
  tips: [
    'Le tri est simple mais O(n log n)',
    'Comptage de fréquences est O(n) - optimal',
    'Pensez à normaliser : minuscules, supprimer espaces/ponctuation',
    'Vérifiez d\'abord les longueurs (early return)',
    'Map ou objet pour compter les fréquences'
  ],
  
  tags: ['string', 'anagram', 'frequency', 'sorting'],
  relatedAlgorithms: ['is-palindrome', 'unique-chars']
},

{
  id: 'max-subarray-sum-brute',
  title: '44. Somme maximale de sous-tableau (brute force)',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 44,
  description: 'Trouver la somme maximale d\'un sous-tableau contigu (approche naïve)',
  explanation: `Trouver le sous-tableau contigu avec la plus grande somme.

Exemple : [-2, 1, -3, 4, -1, 2, 1, -5, 4] → [4, -1, 2, 1] = 6

Cette version brute force teste tous les sous-tableaux possibles.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Deux boucles imbriquées',
      approach: 'Impérative',
      code: `function maxSubarraySum(arr) {
  if (arr.length === 0) return 0;
  
  let maxSum = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  
  return maxSum;
}

// Exemples
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarraySum([1, 2, 3, 4]));                     // 10
console.log(maxSubarraySum([-1, -2, -3]));                     // -1`,
      explanation: 'Teste tous les sous-tableaux possibles : pour chaque début i, teste toutes les fins j.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      pros: ['Simple à comprendre', 'Brute force clair', 'Pas de mémoire'],
      cons: ['Lent O(n²)', 'Pas optimal']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Trois boucles (encore plus naïf)',
      approach: 'Impérative',
      code: `function maxSubarraySum(arr) {
  if (arr.length === 0) return 0;
  
  let maxSum = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      
      // Calculer la somme de arr[i] à arr[j]
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      
      maxSum = Math.max(maxSum, sum);
    }
  }
  
  return maxSum;
}

// Exemples
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6`,
      explanation: 'Trois boucles : i (début), j (fin), k (somme). Très inefficace.',
      timeComplexity: 'O(n³)',
      spaceComplexity: 'O(1)',
      pros: ['Très explicite'],
      cons: ['Extrêmement lent O(n³)', 'Recalcule les sommes']
    }
  ],
  
  examples: [
    {
      input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]',
      output: '6',
      explanation: 'Sous-tableau [4, -1, 2, 1] a la somme maximale'
    },
    {
      input: '[1, 2, 3, 4]',
      output: '10',
      explanation: 'Tous positifs, donc tout le tableau'
    },
    {
      input: '[-1, -2, -3]',
      output: '-1',
      explanation: 'Tous négatifs, prendre le moins négatif'
    }
  ],
  
  tips: [
    'Cette version brute force est O(n²) ou O(n³)',
    'Algorithme de Kadane résout en O(n) (Niveau 6)',
    'Deux boucles : i=début, j=fin, cumule la somme',
    'Trois boucles : recalcule tout à chaque fois (pire)',
    'Utile pour comprendre le problème avant optimisation'
  ],
  
  tags: ['array', 'subarray', 'brute-force', 'optimization'],
  relatedAlgorithms: ['kadane-algorithm']
},

{
  id: 'min-subarray-sum',
  title: '45. Somme minimale de sous-tableau',
  level: 'niveau-2',
  category: 'tableaux',
  difficulty: 'intermédiaire',
  order: 45,
  description: 'Trouver la somme minimale d\'un sous-tableau contigu',
  explanation: `Même principe que la somme maximale, mais on cherche le minimum.

Exemple : [3, -4, 2, -3, -1, 7, -5] → [-4, 2, -3, -1] = -6`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Brute force (deux boucles)',
      approach: 'Impérative',
      code: `function minSubarraySum(arr) {
  if (arr.length === 0) return 0;
  
  let minSum = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      minSum = Math.min(minSum, currentSum);
    }
  }
  
  return minSum;
}

// Exemples
console.log(minSubarraySum([3, -4, 2, -3, -1, 7, -5])); // -6
console.log(minSubarraySum([1, 2, 3, 4]));              // 1
console.log(minSubarraySum([-1, -2, -3]));              // -6`,
      explanation: 'Même logique que maxSubarraySum mais avec Math.min.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      pros: ['Simple', 'Même structure que max'],
      cons: ['O(n²) pas optimal']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Kadane inversé (optimal)',
      approach: 'Impérative',
      code: `function minSubarraySum(arr) {
  if (arr.length === 0) return 0;
  
  let minSum = arr[0];
  let currentMin = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentMin = Math.min(arr[i], currentMin + arr[i]);
    minSum = Math.min(minSum, currentMin);
  }
  
  return minSum;
}

// Exemples
console.log(minSubarraySum([3, -4, 2, -3, -1, 7, -5])); // -6`,
      explanation: 'Algorithme de Kadane adapté pour le minimum.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Optimal O(n)', 'Une seule passe'],
      cons: ['Plus complexe à comprendre']
    }
  ],
  
  examples: [
    {
      input: '[3, -4, 2, -3, -1, 7, -5]',
      output: '-6',
      explanation: 'Sous-tableau [-4, 2, -3, -1]'
    },
    {
      input: '[1, 2, 3, 4]',
      output: '1',
      explanation: 'Tous positifs, prendre le plus petit'
    }
  ],
  
  tips: [
    'Même concept que somme max mais inversé',
    'Math.min au lieu de Math.max',
    'Kadane inversé est O(n) optimal'
  ],
  
  tags: ['array', 'subarray', 'kadane', 'minimum'],
  relatedAlgorithms: ['max-subarray-sum-brute']
},

{
  id: 'longest-substring-no-repeat',
  title: '46. Plus longue sous-chaîne sans répétition',
  level: 'niveau-2',
  category: 'chaines',
  difficulty: 'intermédiaire',
  order: 46,
  description: 'Trouver la longueur de la plus longue sous-chaîne sans caractères répétés',
  explanation: `Trouver la plus longue sous-chaîne où tous les caractères sont uniques.

Exemple : "abcabcbb" → "abc" (longueur 3)`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Sliding Window avec Set',
      approach: 'Impérative',
      code: `function longestSubstringNoRepeat(str) {
  let maxLength = 0;
  let left = 0;
  const seen = new Set();
  
  for (let right = 0; right < str.length; right++) {
    // Si caractère déjà vu, avancer left
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    
    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Exemples
console.log(longestSubstringNoRepeat('abcabcbb')); // 3 ('abc')
console.log(longestSubstringNoRepeat('bbbbb'));    // 1 ('b')
console.log(longestSubstringNoRepeat('pwwkew'));   // 3 ('wke')`,
      explanation: 'Fenêtre glissante avec Set pour tracker les caractères vus.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k)', // k = taille de l'alphabet
      pros: ['Optimal O(n)', 'Sliding window efficace'],
      cons: ['Nécessite Set']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Brute force',
      approach: 'Impérative',
      code: `function longestSubstringNoRepeat(str) {
  let maxLength = 0;
  
  for (let i = 0; i < str.length; i++) {
    const seen = new Set();
    
    for (let j = i; j < str.length; j++) {
      if (seen.has(str[j])) {
        break;
      }
      seen.add(str[j]);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  
  return maxLength;
}

// Exemples
console.log(longestSubstringNoRepeat('abcabcbb')); // 3`,
      explanation: 'Teste toutes les sous-chaînes possibles.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(k)',
      pros: ['Simple à comprendre'],
      cons: ['Lent O(n²)']
    }
  ],
  
  examples: [
    {
      input: '"abcabcbb"',
      output: '3',
      explanation: 'Sous-chaîne "abc" (ou "bca", "cab")'
    },
    {
      input: '"bbbbb"',
      output: '1',
      explanation: 'Un seul caractère unique'
    },
    {
      input: '"pwwkew"',
      output: '3',
      explanation: 'Sous-chaîne "wke"'
    }
  ],
  
  tips: [
    'Sliding window est la technique optimale O(n)',
    'Deux pointeurs : left et right',
    'Set pour tracker les caractères dans la fenêtre',
    'Quand doublon trouvé, avancer left jusqu\'à l\'éliminer',
    'Problème classique d\'interview technique'
  ],
  
  tags: ['string', 'sliding-window', 'set', 'substring'],
  relatedAlgorithms: ['unique-chars', 'longest-word']
},

{
  id: 'count-digits',
  title: '47. Compter les chiffres d\'un nombre',
  level: 'niveau-2',
  category: 'nombres',
  difficulty: 'intermédiaire',
  order: 47,
  description: 'Compter le nombre de chiffres dans un nombre',
  explanation: `Déterminer combien de chiffres contient un nombre.

Exemples : 123 → 3, 9999 → 4, -456 → 3`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Conversion en string',
      approach: 'Built-in',
      code: `function countDigits(n) {
  return Math.abs(n).toString().length;
}

// Exemples
console.log(countDigits(123));    // 3
console.log(countDigits(9999));   // 4
console.log(countDigits(-456));   // 3
console.log(countDigits(0));      // 1`,
      explanation: 'Convertit en string et compte les caractères (abs pour gérer négatifs).',
      timeComplexity: 'O(log n)', // proportionnel au nombre de chiffres
      spaceComplexity: 'O(log n)',
      pros: ['Très simple', 'Une ligne'],
      cons: ['Conversion en string']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Division par 10',
      approach: 'Impérative',
      code: `function countDigits(n) {
  if (n === 0) return 1;
  
  n = Math.abs(n);
  let count = 0;
  
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  
  return count;
}

// Exemples
console.log(countDigits(123));  // 3
console.log(countDigits(9999)); // 4
console.log(countDigits(-456)); // 3`,
      explanation: 'Divise par 10 jusqu\'à 0, compte les itérations.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      pros: ['Mathématique', 'Pas de conversion string'],
      cons: ['Plus verbeux']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Logarithme (mathématique)',
      approach: 'Mathématique',
      code: `function countDigits(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

// Exemples
console.log(countDigits(123));  // 3
console.log(countDigits(9999)); // 4
console.log(countDigits(-456)); // 3`,
      explanation: 'Utilise log10 : nombre de chiffres = floor(log10(n)) + 1.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      pros: ['O(1) constant !', 'Formule mathématique'],
      cons: ['Erreurs d\'arrondi possibles', 'Moins intuitif']
    }
  ],
  
  examples: [
    {
      input: '123',
      output: '3',
      explanation: '3 chiffres'
    },
    {
      input: '-456',
      output: '3',
      explanation: 'Les négatifs comptent sans le signe'
    },
    {
      input: '0',
      output: '1',
      explanation: '0 a 1 chiffre'
    }
  ],
  
  tips: [
    'Conversion en string est la plus simple',
    'Math.abs() pour gérer les négatifs',
    'Log10 est O(1) mais attention aux arrondis',
    'Cas spécial : 0 a 1 chiffre'
  ],
  
  tags: ['math', 'numbers', 'digits'],
  relatedAlgorithms: ['reverse-number', 'digit-sum']
},

{
  id: 'reverse-number',
  title: '48. Inverser un nombre',
  level: 'niveau-2',
  category: 'nombres',
  difficulty: 'intermédiaire',
  order: 48,
  description: 'Inverser les chiffres d\'un nombre',
  explanation: `Inverser l'ordre des chiffres d'un nombre.

Exemples : 123 → 321, -456 → -654, 1200 → 21`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : String reverse',
      approach: 'Built-in',
      code: `function reverseNumber(n) {
  const sign = n < 0 ? -1 : 1;
  const reversed = parseInt(
    Math.abs(n).toString().split('').reverse().join('')
  );
  return sign * reversed;
}

// Exemples
console.log(reverseNumber(123));   // 321
console.log(reverseNumber(-456));  // -654
console.log(reverseNumber(1200));  // 21`,
      explanation: 'Convertit en string, inverse, reconvertit en nombre.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(log n)',
      pros: ['Simple', 'Utilise reverse()'],
      cons: ['Conversion string']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Mathématique (modulo)',
      approach: 'Impérative',
      code: `function reverseNumber(n) {
  const sign = n < 0 ? -1 : 1;
  n = Math.abs(n);
  
  let reversed = 0;
  
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  
  return sign * reversed;
}

// Exemples
console.log(reverseNumber(123));   // 321
console.log(reverseNumber(-456));  // -654
console.log(reverseNumber(1200));  // 21`,
      explanation: 'Extrait les chiffres un par un avec modulo, reconstruit inversé.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      pros: ['Mathématique pur', 'Pas de string'],
      cons: ['Plus complexe']
    }
  ],
  
  examples: [
    {
      input: '123',
      output: '321',
      explanation: 'Chiffres inversés'
    },
    {
      input: '-456',
      output: '-654',
      explanation: 'Garde le signe'
    },
    {
      input: '1200',
      output: '21',
      explanation: 'Les zéros de fin disparaissent'
    }
  ],
  
  tips: [
    'String reverse est plus simple',
    'Modulo extrait le dernier chiffre : n % 10',
    'Division par 10 supprime le dernier chiffre',
    'Attention : 1200 → 21 (zéros finaux perdus)',
    'Gérez le signe séparément'
  ],
  
  tags: ['math', 'numbers', 'reverse'],
  relatedAlgorithms: ['reverse-string', 'is-palindrome']
},

{
  id: 'to-binary',
  title: '49. Convertir un nombre en binaire',
  level: 'niveau-2',
  category: 'nombres',
  difficulty: 'intermédiaire',
  order: 49,
  description: 'Convertir un nombre décimal en binaire',
  explanation: `Convertir un nombre en sa représentation binaire.

Exemples : 5 → "101", 10 → "1010", 255 → "11111111"`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : toString(2)',
      approach: 'Built-in',
      code: `function toBinary(n) {
  return n.toString(2);
}

// Exemples
console.log(toBinary(5));   // '101'
console.log(toBinary(10));  // '1010'
console.log(toBinary(255)); // '11111111'
console.log(toBinary(0));   // '0'`,
      explanation: 'Méthode native toString avec base 2.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(log n)',
      pros: ['Très simple', 'Une ligne', 'Natif'],
      cons: ['Pas pédagogique']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Division par 2',
      approach: 'Impérative',
      code: `function toBinary(n) {
  if (n === 0) return '0';
  
  let binary = '';
  
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  
  return binary;
}

// Exemples
console.log(toBinary(5));   // '101'
console.log(toBinary(10));  // '1010'
console.log(toBinary(255)); // '11111111'`,
      explanation: 'Divise par 2, le reste donne le bit, prépend au résultat.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(log n)',
      pros: ['Pédagogique', 'Montre l\'algorithme'],
      cons: ['Plus verbeux', 'Concaténation strings']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Bitwise (récursif)',
      approach: 'Récursive',
      code: `function toBinary(n) {
  if (n === 0) return '0';
  if (n === 1) return '1';
  return toBinary(Math.floor(n / 2)) + (n % 2);
}

// Exemples
console.log(toBinary(5));   // '101'
console.log(toBinary(10));  // '1010'`,
      explanation: 'Approche récursive : divise par 2 puis ajoute le bit.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(log n)',
      pros: ['Élégant', 'Récursif'],
      cons: ['Stack pour petits nombres ok']
    }
  ],
  
  examples: [
    {
      input: '5',
      output: '"101"',
      explanation: '5 = 4 + 1 = 2² + 2⁰'
    },
    {
      input: '10',
      output: '"1010"',
      explanation: '10 = 8 + 2 = 2³ + 2¹'
    },
    {
      input: '255',
      output: '"11111111"',
      explanation: '255 = 2⁸ - 1'
    }
  ],
  
  tips: [
    'toString(2) est la méthode la plus simple',
    'Division par 2 + modulo : algorithme classique',
    'n % 2 donne le dernier bit',
    'n / 2 décale vers la droite',
    'Pour binaire → décimal : parseInt(str, 2)'
  ],
  
  tags: ['math', 'binary', 'conversion'],
  relatedAlgorithms: ['to-hex', 'count-bits']
},

{
  id: 'string-to-number',
  title: '50. Convertir une chaîne en nombre sans parseInt',
  level: 'niveau-2',
  category: 'chaines',
  difficulty: 'intermédiaire',
  order: 50,
  description: 'Convertir une chaîne en nombre sans utiliser parseInt ou Number',
  explanation: `Implémenter la conversion string → number manuellement.

Exemples : "123" → 123, "-456" → -456, "  789  " → 789`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Parcours + multiplication',
      approach: 'Impérative',
      code: `function stringToNumber(str) {
  str = str.trim();
  
  let result = 0;
  let sign = 1;
  let i = 0;
  
  // Gérer le signe
  if (str[0] === '-') {
    sign = -1;
    i = 1;
  } else if (str[0] === '+') {
    i = 1;
  }
  
  // Convertir chaque chiffre
  for (; i < str.length; i++) {
    const digit = str.charCodeAt(i) - '0'.charCodeAt(0);
    
    // Vérifier si c'est un chiffre
    if (digit < 0 || digit > 9) break;
    
    result = result * 10 + digit;
  }
  
  return sign * result;
}

// Exemples
console.log(stringToNumber('123'));      // 123
console.log(stringToNumber('-456'));     // -456
console.log(stringToNumber('  789  ')); // 789
console.log(stringToNumber('42abc'));    // 42`,
      explanation: 'Parcourt caractère par caractère, multiplie par 10 et ajoute le chiffre.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Algorithme complet', 'Gère signe et espaces'],
      cons: ['Plus complexe']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : reduce()',
      approach: 'Fonctionnelle',
      code: `function stringToNumber(str) {
  str = str.trim();
  
  const sign = str[0] === '-' ? -1 : 1;
  const start = str[0] === '-' || str[0] === '+' ? 1 : 0;
  
  return sign * str.slice(start).split('').reduce((num, char) => {
    const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
    return num * 10 + digit;
  }, 0);
}

// Exemples
console.log(stringToNumber('123'));  // 123
console.log(stringToNumber('-456')); // -456`,
      explanation: 'Utilise reduce pour accumuler le nombre.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Fonctionnel', 'Concis'],
      cons: ['Crée un tableau intermédiaire']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Unary + operator',
      approach: 'Built-in',
      code: `function stringToNumber(str) {
  return +str;
  // Ou : return str * 1;
  // Ou : return str - 0;
}

// Exemples
console.log(stringToNumber('123'));  // 123
console.log(stringToNumber('-456')); // -456`,
      explanation: 'Opérateur unaire + force la conversion en nombre.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Très simple', 'Built-in'],
      cons: ['Triche un peu', 'Pas manuel']
    }
  ],
  
  examples: [
    {
      input: '"123"',
      output: '123',
      explanation: 'Conversion simple'
    },
    {
      input: '"-456"',
      output: '-456',
      explanation: 'Gère les nombres négatifs'
    },
    {
      input: '"  789  "',
      output: '789',
      explanation: 'Ignore les espaces'
    }
  ],
  
  tips: [
    'charCodeAt() pour obtenir le code ASCII',
    '\'0\'.charCodeAt(0) = 48, donc digit = code - 48',
    'Multipliez par 10 puis ajoutez le nouveau chiffre',
    'Gérez le signe séparément',
    'trim() pour supprimer les espaces',
    'Opérateur unaire + est une astuce JS : +"123" = 123'
  ],
  
  tags: ['string', 'conversion', 'parsing'],
  relatedAlgorithms: ['count-digits', 'reverse-number']
},
// ==========================================
// 🟡 NIVEAU 3 : ALGORITHMES CLASSIQUES (Algorithmes 51-62)
// ==========================================

{
  id: 'bubble-sort',
  title: '51. Tri à bulles (Bubble Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'intermédiaire',
  order: 51,
  description: 'Algorithme de tri par comparaison successive d\'éléments adjacents',
  explanation: `Le tri à bulles compare des paires d'éléments adjacents et les échange s'ils sont dans le mauvais ordre.

Le nom vient du fait que les petits éléments "remontent" comme des bulles vers le début du tableau.

Complexité : O(n²) dans le pire cas, mais O(n) si déjà trié avec optimisation.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Bubble Sort classique',
      approach: 'Impérative',
      code: `function bubbleSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Échange (swap)
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  
  return result;
}

// Exemple
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]`,
      explanation: 'Compare chaque paire adjacente et échange si nécessaire. Répète n fois.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n)', // Copie du tableau
      pros: ['Simple à comprendre', 'Stable (préserve l\'ordre des égaux)'],
      cons: ['Très lent O(n²)', 'Inefficace sur grands tableaux']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Bubble Sort optimisé',
      approach: 'Impérative',
      code: `function bubbleSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // Si aucun échange, le tableau est trié
    if (!swapped) break;
  }
  
  return result;
}

// Exemple
console.log(bubbleSort([1, 2, 3, 4, 5])); // Déjà trié, s'arrête tôt`,
      explanation: 'Ajoute un flag pour détecter si le tableau est trié et arrêter tôt.',
      timeComplexity: 'O(n²) pire cas, O(n) meilleur cas',
      spaceComplexity: 'O(n)',
      pros: ['Optimisé pour tableaux presque triés', 'O(n) si déjà trié'],
      cons: ['Toujours O(n²) dans le pire cas']
    }
  ],
  
  examples: [
    {
      input: '[64, 34, 25, 12, 22, 11, 90]',
      output: '[11, 12, 22, 25, 34, 64, 90]',
      explanation: 'Tableau trié par ordre croissant'
    }
  ],
  
  tips: [
    'Après chaque passe, le plus grand élément est à sa place finale',
    'n-i-1 car les i derniers sont déjà triés',
    'Flag swapped pour optimisation O(n) si déjà trié',
    'Algorithme stable : préserve l\'ordre des éléments égaux',
    'Utilisé pour l\'enseignement, pas en production'
  ],
  
  tags: ['sorting', 'bubble-sort', 'algorithm'],
  relatedAlgorithms: ['selection-sort', 'insertion-sort']
},

{
  id: 'selection-sort',
  title: '52. Tri par sélection (Selection Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'intermédiaire',
  order: 52,
  description: 'Trouve le minimum et le place au début, répète',
  explanation: `Le tri par sélection divise le tableau en deux parties : triée et non triée.

À chaque itération, trouve le minimum dans la partie non triée et l'échange avec le premier élément non trié.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Selection Sort',
      approach: 'Impérative',
      code: `function selectionSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Trouver l'index du minimum dans [i, n)
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    
    // Échanger si nécessaire
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  
  return result;
}

// Exemple
console.log(selectionSort([64, 25, 12, 22, 11]));
// [11, 12, 22, 25, 64]`,
      explanation: 'Pour chaque position, trouve le minimum dans le reste et l\'échange.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Moins d\'échanges que bubble sort', 'Performant sur petits tableaux'],
      cons: ['O(n²) toujours', 'Non stable', 'Inefficace sur grands tableaux']
    }
  ],
  
  examples: [
    {
      input: '[64, 25, 12, 22, 11]',
      output: '[11, 12, 22, 25, 64]',
      explanation: 'Min 11 → position 0, min 12 → position 1, etc.'
    }
  ],
  
  tips: [
    'Moins d\'échanges que bubble sort (n échanges max)',
    'Toujours O(n²), même si déjà trié',
    'Non stable : peut changer l\'ordre des égaux',
    'Utile si les échanges sont coûteux (écriture mémoire)'
  ],
  
  tags: ['sorting', 'selection-sort', 'algorithm'],
  relatedAlgorithms: ['bubble-sort', 'insertion-sort']
},

{
  id: 'insertion-sort',
  title: '53. Tri par insertion (Insertion Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'intermédiaire',
  order: 53,
  description: 'Insère chaque élément à sa place dans la partie triée',
  explanation: `Le tri par insertion construit le tableau trié un élément à la fois.

Comme trier des cartes à jouer : on prend une carte et on l'insère à sa place dans la main déjà triée.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Insertion Sort',
      approach: 'Impérative',
      code: `function insertionSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 1; i < n; i++) {
    const key = result[i];
    let j = i - 1;
    
    // Décale les éléments > key vers la droite
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    
    // Insère key à sa place
    result[j + 1] = key;
  }
  
  return result;
}

// Exemple
console.log(insertionSort([12, 11, 13, 5, 6]));
// [5, 6, 11, 12, 13]`,
      explanation: 'Pour chaque élément, le décale vers la gauche jusqu\'à trouver sa place.',
      timeComplexity: 'O(n²) pire cas, O(n) meilleur cas',
      spaceComplexity: 'O(n)',
      pros: ['Efficace sur petits tableaux', 'O(n) si presque trié', 'Stable', 'In-place possible'],
      cons: ['O(n²) dans le pire cas']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Insertion Sort avec binary search',
      approach: 'Optimisée',
      code: `function insertionSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  for (let i = 1; i < n; i++) {
    const key = result[i];
    
    // Recherche binaire de la position d'insertion
    let left = 0;
    let right = i - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (result[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    
    // Décale et insère
    for (let j = i - 1; j >= left; j--) {
      result[j + 1] = result[j];
    }
    result[left] = key;
  }
  
  return result;
}

// Exemple
console.log(insertionSort([12, 11, 13, 5, 6]));`,
      explanation: 'Utilise la recherche binaire pour trouver la position, mais le décalage reste O(n).',
      timeComplexity: 'O(n²)', // Décalage toujours O(n)
      spaceComplexity: 'O(n)',
      pros: ['Moins de comparaisons', 'Intéressant théoriquement'],
      cons: ['Toujours O(n²) à cause des décalages', 'Plus complexe']
    }
  ],
  
  examples: [
    {
      input: '[12, 11, 13, 5, 6]',
      output: '[5, 6, 11, 12, 13]',
      explanation: 'Chaque élément est inséré à sa place dans la partie triée'
    }
  ],
  
  tips: [
    'Excellent pour tableaux presque triés : O(n)',
    'Utilisé dans le tri hybride (Timsort utilise insertion)',
    'Stable : préserve l\'ordre des égaux',
    'Très efficace sur petits tableaux (<10 éléments)',
    'Analogie : trier des cartes à jouer'
  ],
  
  tags: ['sorting', 'insertion-sort', 'algorithm'],
  relatedAlgorithms: ['bubble-sort', 'selection-sort']
},

{
  id: 'quick-sort',
  title: '54. Tri rapide (Quick Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'avancé',
  order: 54,
  description: 'Divise en partitions autour d\'un pivot, récurse',
  explanation: `Quick Sort utilise la stratégie "diviser pour régner".

1. Choisit un pivot
2. Partitionne : éléments < pivot à gauche, > pivot à droite
3. Récurse sur chaque partition

Un des algorithmes de tri les plus rapides en pratique.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Quick Sort (pivot dernier)',
      approach: 'Récursive',
      code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exemple
console.log(quickSort([10, 7, 8, 9, 1, 5]));
// [1, 5, 7, 8, 9, 10]`,
      explanation: 'Version simple : crée deux sous-tableaux (< pivot et > pivot) et récurse.',
      timeComplexity: 'O(n log n) moyen, O(n²) pire cas',
      spaceComplexity: 'O(n)', // Crée de nouveaux tableaux
      pros: ['Simple à comprendre', 'Élégant', 'Rapide en moyenne'],
      cons: ['O(n²) si pivot mal choisi', 'Utilise beaucoup de mémoire', 'Non stable']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Quick Sort in-place (Lomuto)',
      approach: 'Récursive',
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition
    const pivotIndex = partition(arr, low, high);
    
    // Récurse sur les deux partitions
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Exemple
const arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort([...arr]));`,
      explanation: 'Version in-place avec partition de Lomuto (modifie le tableau).',
      timeComplexity: 'O(n log n) moyen, O(n²) pire cas',
      spaceComplexity: 'O(log n)', // Stack de récursion
      pros: ['Économe en mémoire O(log n)', 'Rapide en pratique'],
      cons: ['O(n²) pire cas', 'Plus complexe', 'Non stable']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : Quick Sort avec pivot aléatoire',
      approach: 'Récursive',
      code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  // Pivot aléatoire pour éviter O(n²)
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  
  const left = [];
  const middle = [];
  const right = [];
  
  for (let num of arr) {
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else middle.push(num);
  }
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Exemple
console.log(quickSort([10, 7, 8, 9, 1, 5]));`,
      explanation: 'Pivot aléatoire évite le pire cas O(n²) sur tableaux triés.',
      timeComplexity: 'O(n log n) attendu',
      spaceComplexity: 'O(n)',
      pros: ['Évite O(n²) sur tableaux triés', 'Performances constantes'],
      cons: ['Utilise de la mémoire', 'Randomisé']
    }
  ],
  
  examples: [
    {
      input: '[10, 7, 8, 9, 1, 5]',
      output: '[1, 5, 7, 8, 9, 10]',
      explanation: 'Partition récursive autour des pivots'
    }
  ],
  
  tips: [
    'Un des algorithmes les plus rapides en pratique',
    'O(n log n) en moyenne, O(n²) pire cas (déjà trié)',
    'Pivot aléatoire ou médiane évite le pire cas',
    'In-place possible avec O(log n) mémoire',
    'Non stable : peut changer l\'ordre des égaux',
    'Utilisé par défaut dans beaucoup de langages'
  ],
  
  tags: ['sorting', 'quick-sort', 'divide-and-conquer', 'recursion'],
  relatedAlgorithms: ['merge-sort', 'heap-sort']
},

{
  id: 'merge-sort',
  title: '55. Tri fusion (Merge Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'avancé',
  order: 55,
  description: 'Divise en deux, trie récursivement, fusionne',
  explanation: `Merge Sort est un algorithme "diviser pour régner" stable et prévisible.

1. Divise le tableau en deux moitiés
2. Trie récursivement chaque moitié
3. Fusionne les deux moitiés triées

Toujours O(n log n), même dans le pire cas.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Merge Sort récursif',
      approach: 'Récursive',
      code: `function mergeSort(arr) {
  // Cas de base
  if (arr.length <= 1) return arr;
  
  // Diviser
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Conquérir (récurse)
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  // Fusion
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  // Copie les restes
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Exemple
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]`,
      explanation: 'Divise récursivement puis fusionne les moitiés triées.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['O(n log n) garanti', 'Stable', 'Prévisible', 'Excellent pour listes chaînées'],
      cons: ['Utilise O(n) mémoire supplémentaire', 'Pas in-place']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Merge Sort avec optimisation',
      approach: 'Récursive',
      code: `function mergeSort(arr) {
  // Optimisation : insertion sort pour petits tableaux
  if (arr.length <= 10) {
    return insertionSort(arr);
  }
  
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i), right.slice(j));
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Exemple
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));`,
      explanation: 'Utilise insertion sort pour les petits sous-tableaux (plus rapide).',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      pros: ['Plus rapide en pratique', 'Moins d\'appels récursifs'],
      cons: ['Plus de code']
    }
  ],
  
  examples: [
    {
      input: '[38, 27, 43, 3, 9, 82, 10]',
      output: '[3, 9, 10, 27, 38, 43, 82]',
      explanation: 'Divise, trie, fusionne récursivement'
    }
  ],
  
  tips: [
    'O(n log n) GARANTI dans tous les cas',
    'Stable : préserve l\'ordre des égaux',
    'Excellent pour trier des données sur disque (tri externe)',
    'Utilisé dans Arrays.sort() de plusieurs langages',
    'Timsort (Python, Java) est basé sur merge sort',
    'Préférable à quick sort si stabilité nécessaire'
  ],
  
  tags: ['sorting', 'merge-sort', 'divide-and-conquer', 'stable'],
  relatedAlgorithms: ['quick-sort', 'timsort']
},

{
  id: 'heap-sort',
  title: '56. Tri par tas (Heap Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'avancé',
  order: 56,
  description: 'Construit un tas max puis extrait les éléments',
  explanation: `Heap Sort utilise une structure de tas (heap) binaire.

1. Construit un max-heap
2. Échange la racine (max) avec le dernier élément
3. Réduit la taille du tas et réajuste
4. Répète jusqu'à ce que le tas soit vide

O(n log n) garanti, in-place.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Heap Sort',
      approach: 'Impérative',
      code: `function heapSort(arr) {
  const result = [...arr];
  const n = result.length;
  
  // Construire le max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i);
  }
  
  // Extraire les éléments un par un
  for (let i = n - 1; i > 0; i--) {
    // Échanger racine avec dernier
    [result[0], result[i]] = [result[i], result[0]];
    
    // Réajuster le tas réduit
    heapify(result, i, 0);
  }
  
  return result;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// Exemple
console.log(heapSort([12, 11, 13, 5, 6, 7]));
// [5, 6, 7, 11, 12, 13]`,
      explanation: 'Construit un tas max puis extrait le maximum répétitivement.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)', // Copie du tableau
      pros: ['O(n log n) garanti', 'In-place possible', 'Pas de pire cas'],
      cons: ['Non stable', 'Plus lent que quick sort en pratique', 'Complexe']
    }
  ],
  
  examples: [
    {
      input: '[12, 11, 13, 5, 6, 7]',
      output: '[5, 6, 7, 11, 12, 13]',
      explanation: 'Construit un tas puis extrait les max successifs'
    }
  ],
  
  tips: [
    'O(n log n) garanti, pas de pire cas',
    'In-place : O(1) mémoire supplémentaire',
    'Non stable : peut changer l\'ordre des égaux',
    'Moins rapide que quick sort en pratique',
    'Nécessite de comprendre les tas binaires',
    'Index parent : floor((i-1)/2), enfants : 2i+1 et 2i+2'
  ],
  
  tags: ['sorting', 'heap-sort', 'heap', 'in-place'],
  relatedAlgorithms: ['quick-sort', 'merge-sort', 'priority-queue']
},

{
  id: 'counting-sort',
  title: '57. Tri par comptage (Counting Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'avancé',
  order: 57,
  description: 'Compte les occurrences, reconstruit le tableau trié',
  explanation: `Counting Sort est un tri linéaire O(n+k) pour des entiers dans une plage connue.

1. Compte les occurrences de chaque valeur
2. Calcule les positions cumulées
3. Place chaque élément à sa position finale

Pas de comparaisons ! Fonctionne par comptage.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Counting Sort simple',
      approach: 'Impérative',
      code: `function countingSort(arr) {
  if (arr.length === 0) return [];
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  
  // Tableau de comptage
  const count = new Array(range).fill(0);
  
  // Compter les occurrences
  for (let num of arr) {
    count[num - min]++;
  }
  
  // Reconstruire le tableau trié
  const result = [];
  for (let i = 0; i < range; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i + min);
    }
  }
  
  return result;
}

// Exemple
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
// [1, 2, 2, 3, 3, 4, 8]`,
      explanation: 'Compte chaque valeur puis reconstruit le tableau dans l\'ordre.',
      timeComplexity: 'O(n + k)', // k = plage de valeurs
      spaceComplexity: 'O(n + k)',
      pros: ['Linéaire O(n+k)', 'Stable possible', 'Très rapide si k petit'],
      cons: ['Nécessite plage de valeurs connue', 'Utilise O(k) mémoire', 'Uniquement pour entiers']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Counting Sort stable',
      approach: 'Impérative',
      code: `function countingSort(arr) {
  if (arr.length === 0) return [];
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  
  const count = new Array(range).fill(0);
  const output = new Array(arr.length);
  
  // Compter
  for (let num of arr) {
    count[num - min]++;
  }
  
  // Positions cumulées
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  
  // Placer les éléments (de la fin pour stabilité)
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    output[count[num - min] - 1] = num;
    count[num - min]--;
  }
  
  return output;
}

// Exemple
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));`,
      explanation: 'Version stable qui préserve l\'ordre relatif des éléments égaux.',
      timeComplexity: 'O(n + k)',
      spaceComplexity: 'O(n + k)',
      pros: ['Stable', 'O(n+k) linéaire'],
      cons: ['Plus complexe', 'Nécessite tableau auxiliaire']
    }
  ],
  
  examples: [
    {
      input: '[4, 2, 2, 8, 3, 3, 1]',
      output: '[1, 2, 2, 3, 3, 4, 8]',
      explanation: 'Tri linéaire par comptage'
    }
  ],
  
  tips: [
    'O(n + k) où k = plage de valeurs (max - min + 1)',
    'Très rapide si k est petit (k << n)',
    'Pas de comparaisons, fonctionne par comptage',
    'Utilisé comme sous-routine dans radix sort',
    'Nécessite des entiers dans une plage connue',
    'Version stable nécessaire pour radix sort'
  ],
  
  tags: ['sorting', 'counting-sort', 'linear', 'non-comparison'],
  relatedAlgorithms: ['radix-sort', 'bucket-sort']
},

{
  id: 'radix-sort',
  title: '58. Tri radix (Radix Sort)',
  level: 'niveau-3',
  category: 'tri',
  difficulty: 'avancé',
  order: 58,
  description: 'Trie chiffre par chiffre (unités, dizaines, centaines...)',
  explanation: `Radix Sort trie les nombres en traitant chiffre par chiffre.

1. Trie par le chiffre des unités
2. Puis par le chiffre des dizaines
3. Puis centaines, etc.

Utilise counting sort comme sous-routine stable.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Radix Sort (LSD)',
      approach: 'Impérative',
      code: `function radixSort(arr) {
  if (arr.length === 0) return [];
  
  // Trouver le nombre avec le plus de chiffres
  const max = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(max)) + 1;
  
  let result = [...arr];
  
  // Trier pour chaque position de chiffre
  for (let digit = 0; digit < maxDigits; digit++) {
    result = countingSortByDigit(result, digit);
  }
  
  return result;
}

function countingSortByDigit(arr, digitPos) {
  const output = new Array(arr.length);
  const count = new Array(10).fill(0);
  const divisor = Math.pow(10, digitPos);
  
  // Compter les occurrences du chiffre
  for (let num of arr) {
    const digit = Math.floor((num / divisor) % 10);
    count[digit]++;
  }
  
  // Positions cumulées
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  // Placer les éléments (stable)
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  return output;
}

// Exemple
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
// [2, 24, 45, 66, 75, 90, 170, 802]`,
      explanation: 'Trie par chaque position de chiffre (unités, dizaines, etc.) avec counting sort.',
      timeComplexity: 'O(d * (n + k))', // d = nombre de chiffres, k = base (10)
      spaceComplexity: 'O(n + k)',
      pros: ['Linéaire si d constant', 'Stable', 'Pas de comparaisons'],
      cons: ['Uniquement pour entiers', 'Plus lent que quick sort en pratique', 'Complexe']
    }
  ],
  
  examples: [
    {
      input: '[170, 45, 75, 90, 802, 24, 2, 66]',
      output: '[2, 24, 45, 66, 75, 90, 170, 802]',
      explanation: 'Trie chiffre par chiffre de droite à gauche'
    }
  ],
  
  tips: [
    'LSD (Least Significant Digit) : commence par les unités',
    'MSD (Most Significant Digit) : commence par les chiffres de gauche',
    'O(d * (n + k)) où d = nombre de chiffres',
    'Utilise counting sort comme sous-routine stable',
    'Fonctionne pour base quelconque (base 10 ici)',
    'Peut être adapté pour strings'
  ],
  
  tags: ['sorting', 'radix-sort', 'linear', 'non-comparison'],
  relatedAlgorithms: ['counting-sort', 'bucket-sort']
},

{
  id: 'linear-search',
  title: '59. Recherche linéaire',
  level: 'niveau-3',
  category: 'recherche',
  difficulty: 'débutant',
  order: 59,
  description: 'Parcourt le tableau élément par élément',
  explanation: `La recherche linéaire parcourt séquentiellement jusqu'à trouver l'élément.

Simple mais lent : O(n) dans le pire cas.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Boucle for',
      approach: 'Impérative',
      code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Retourne l'index
    }
  }
  return -1; // Non trouvé
}

// Exemples
console.log(linearSearch([1, 3, 5, 7, 9], 5)); // 2
console.log(linearSearch([1, 3, 5, 7, 9], 6)); // -1`,
      explanation: 'Parcourt le tableau jusqu\'à trouver l\'élément ou atteindre la fin.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Simple', 'Fonctionne sur tableau non trié', 'O(1) mémoire'],
      cons: ['Lent O(n)', 'Pas optimal si tableau trié']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : indexOf()',
      approach: 'Built-in',
      code: `function linearSearch(arr, target) {
  return arr.indexOf(target);
}

// Exemples
console.log(linearSearch([1, 3, 5, 7, 9], 5)); // 2
console.log(linearSearch([1, 3, 5, 7, 9], 6)); // -1`,
      explanation: 'Utilise la méthode native indexOf.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Très simple', 'Une ligne'],
      cons: ['Même complexité O(n)']
    },
    {
      id: 'method-3',
      title: 'Méthode 3 : findIndex()',
      approach: 'Fonctionnelle',
      code: `function linearSearch(arr, target) {
  return arr.findIndex(item => item === target);
}

// Exemples
console.log(linearSearch([1, 3, 5, 7, 9], 5)); // 2`,
      explanation: 'Version fonctionnelle avec findIndex.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Fonctionnel', 'Flexible (condition custom)'],
      cons: ['O(n)']
    }
  ],
  
  examples: [
    {
      input: 'arr = [1, 3, 5, 7, 9], target = 5',
      output: '2',
      explanation: 'Élément trouvé à l\'index 2'
    },
    {
      input: 'arr = [1, 3, 5, 7, 9], target = 6',
      output: '-1',
      explanation: 'Élément non trouvé'
    }
  ],
  
  tips: [
    'O(n) dans le pire cas',
    'Fonctionne sur tableaux non triés',
    'Si tableau trié, utilisez binary search O(log n)',
    'Early return dès que trouvé',
    'Simple mais inefficace sur grands tableaux'
  ],
  
  tags: ['search', 'linear-search', 'algorithm'],
  relatedAlgorithms: ['binary-search']
},

{
  id: 'binary-search',
  title: '60. Recherche binaire',
  level: 'niveau-3',
  category: 'recherche',
  difficulty: 'intermédiaire',
  order: 60,
  description: 'Divise le tableau trié en deux à chaque étape',
  explanation: `La recherche binaire exploite le fait que le tableau est TRIÉ.

1. Compare avec l'élément du milieu
2. Si égal : trouvé
3. Si target < milieu : cherche à gauche
4. Si target > milieu : cherche à droite

O(log n) - très rapide !`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Itératif',
      approach: 'Impérative',
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Exemples
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7));  // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 6));  // -1`,
      explanation: 'Version itérative avec deux pointeurs.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      pros: ['Très rapide O(log n)', 'Économe en mémoire O(1)', 'Standard'],
      cons: ['Nécessite tableau trié', 'Plus complexe que linear search']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Récursif',
      approach: 'Récursive',
      code: `function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}

// Exemples
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7));  // 3`,
      explanation: 'Version récursive plus élégante.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(log n)', // Stack
      pros: ['Élégant', 'Suit la définition récursive'],
      cons: ['Utilise stack O(log n)', 'Légèrement moins performant']
    }
  ],
  
  examples: [
    {
      input: 'arr = [1, 3, 5, 7, 9, 11, 13], target = 7',
      output: '3',
      explanation: 'Trouve 7 à l\'index 3 en 3 comparaisons au lieu de 4'
    },
    {
      input: 'arr = [1, 3, 5, 7, 9, 11, 13], target = 6',
      output: '-1',
      explanation: 'Non trouvé après log₂(7) ≈ 3 comparaisons'
    }
  ],
  
  tips: [
    'CRITIQUE : Le tableau DOIT être trié',
    'O(log n) : divise par 2 à chaque étape',
    'Attention à l\'overflow : mid = left + (right - left) / 2',
    'Itératif préféré en production (pas de stack)',
    'Algorithme fondamental en informatique',
    'Base de beaucoup d\'autres algorithmes'
  ],
  
  tags: ['search', 'binary-search', 'divide-and-conquer', 'sorted'],
  relatedAlgorithms: ['linear-search', 'lower-bound', 'upper-bound']
},

{
  id: 'lower-bound',
  title: '61. Recherche du premier élément ≥ X (Lower Bound)',
  level: 'niveau-3',
  category: 'recherche',
  difficulty: 'avancé',
  order: 61,
  description: 'Trouver le premier élément supérieur ou égal à X',
  explanation: `Lower bound trouve le premier élément >= target dans un tableau trié.

Si target n'existe pas, retourne la position où il devrait être inséré.

Variante de binary search.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Binary Search modifié',
      approach: 'Impérative',
      code: `function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid; // Ne pas exclure mid
    }
  }
  
  return left;
}

// Exemples
console.log(lowerBound([1, 2, 4, 4, 5, 6, 8], 4));  // 2 (premier 4)
console.log(lowerBound([1, 2, 4, 4, 5, 6, 8], 3));  // 2 (position où 3 irait)
console.log(lowerBound([1, 2, 4, 4, 5, 6, 8], 9));  // 7 (après le dernier)`,
      explanation: 'Trouve le premier élément >= target, ou la position d\'insertion.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      pros: ['O(log n)', 'Utile pour insertions', 'Gère les doublons'],
      cons: ['Plus subtil que binary search standard']
    }
  ],
  
  examples: [
    {
      input: 'arr = [1, 2, 4, 4, 5, 6, 8], target = 4',
      output: '2',
      explanation: 'Index du premier 4'
    },
    {
      input: 'arr = [1, 2, 4, 4, 5, 6, 8], target = 3',
      output: '2',
      explanation: 'Position où 3 devrait être inséré'
    },
    {
      input: 'arr = [1, 2, 4, 4, 5, 6, 8], target = 9',
      output: '7',
      explanation: 'Après le dernier élément'
    }
  ],
  
  tips: [
    'Retourne l\'index du premier élément >= target',
    'Si aucun, retourne arr.length',
    'Utile pour l\'insertion dans un tableau trié',
    'Différence avec binary search : ne cherche pas égalité exacte',
    'Condition : arr[mid] < target (strictement inférieur)',
    'Utilisé dans C++ STL (lower_bound)'
  ],
  
  tags: ['search', 'binary-search', 'lower-bound', 'sorted'],
  relatedAlgorithms: ['binary-search', 'upper-bound']
},

{
  id: 'upper-bound',
  title: '62. Recherche du dernier élément ≤ X (Upper Bound)',
  level: 'niveau-3',
  category: 'recherche',
  difficulty: 'avancé',
  order: 62,
  description: 'Trouver le premier élément strictement supérieur à X',
  explanation: `Upper bound trouve le premier élément > target (strictement supérieur).

Complémentaire de lower bound.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Binary Search modifié',
      approach: 'Impérative',
      code: `function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// Exemples
console.log(upperBound([1, 2, 4, 4, 5, 6, 8], 4));  // 4 (après le dernier 4)
console.log(upperBound([1, 2, 4, 4, 5, 6, 8], 3));  // 2 (premier > 3 est à l'index 2)
console.log(upperBound([1, 2, 4, 4, 5, 6, 8], 8));  // 7 (aucun > 8)`,
      explanation: 'Trouve le premier élément > target (strictement supérieur).',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      pros: ['O(log n)', 'Complémentaire de lower bound'],
      cons: ['Confusion possible avec lower bound']
    }
  ],
  
  examples: [
    {
      input: 'arr = [1, 2, 4, 4, 5, 6, 8], target = 4',
      output: '4',
      explanation: 'Index après le dernier 4 (où commence 5)'
    },
    {
      input: 'arr = [1, 2, 4, 4, 5, 6, 8], target = 3',
      output: '2',
      explanation: 'Premier élément > 3 est 4 à l\'index 2'
    }
  ],
  
  tips: [
    'Retourne l\'index du premier élément > target (strictement)',
    'upper_bound(x) - lower_bound(x) = nombre d\'occurrences de x',
    'Condition : arr[mid] <= target (inférieur ou égal)',
    'Utilisé dans C++ STL (upper_bound)',
    'Utile pour compter les occurrences en O(log n)'
  ],
  
  tags: ['search', 'binary-search', 'upper-bound', 'sorted'],
  relatedAlgorithms: ['binary-search', 'lower-bound', 'count-occurrences']
},
// ==========================================
// 🏗️ NIVEAU 4 : STRUCTURES DE DONNÉES (Algorithmes 63-75)
// ==========================================

{
  id: 'dynamic-array',
  title: '63. Implémenter un tableau dynamique',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 63,
  description: 'Créer un tableau qui s\'agrandit automatiquement',
  explanation: `Un tableau dynamique (comme ArrayList en Java ou vector en C++) double sa capacité quand il est plein.

Opérations :
- push() : Ajouter un élément (O(1) amorti)
- pop() : Retirer le dernier (O(1))
- get(index) : Accès (O(1))
- resize() : Doubler la capacité (O(n))`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Classe DynamicArray',
      approach: 'Orientée objet',
      code: `class DynamicArray {
  constructor(capacity = 2) {
    this.capacity = capacity;
    this.length = 0;
    this.data = new Array(capacity);
  }
  
  // Ajouter un élément
  push(item) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = item;
    this.length++;
  }
  
  // Retirer le dernier
  pop() {
    if (this.length === 0) return undefined;
    const item = this.data[this.length - 1];
    this.length--;
    return item;
  }
  
  // Accès par index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }
  
  // Doubler la capacité
  resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }
  
  // Taille actuelle
  size() {
    return this.length;
  }
}

// Exemple d'utilisation
const arr = new DynamicArray();
arr.push(1);
arr.push(2);
arr.push(3); // Déclenche resize
console.log(arr.get(0)); // 1
console.log(arr.size()); // 3
console.log(arr.pop());  // 3`,
      explanation: 'Implémente un tableau qui double sa capacité automatiquement.',
      timeComplexity: 'O(1) amorti pour push',
      spaceComplexity: 'O(n)',
      pros: ['push() O(1) amorti', 'Accès O(1)', 'Gestion automatique'],
      cons: ['resize() coûteux O(n)', 'Gaspille de la mémoire']
    }
  ],
  
  examples: [
    {
      input: 'push(1), push(2), push(3)',
      output: 'Capacité passe de 2 à 4 au 3e push',
      explanation: 'Redimensionnement automatique'
    }
  ],
  
  tips: [
    'Doubler la capacité donne O(1) amorti',
    'Analyse amortie : moyenne des opérations sur le long terme',
    'JavaScript Array natif utilise ce principe',
    'Compromis mémoire/performance',
    'Shrink possible si taille < capacity/4'
  ],
  
  tags: ['data-structure', 'array', 'dynamic'],
  relatedAlgorithms: ['stack', 'queue']
},

{
  id: 'hash-map',
  title: '64. Implémenter un dictionnaire (HashMap)',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 64,
  description: 'Table de hachage avec clé-valeur',
  explanation: `Une HashMap stocke des paires clé-valeur avec accès O(1).

Utilise une fonction de hachage pour convertir la clé en index.

Opérations :
- set(key, value) : Ajouter/modifier
- get(key) : Récupérer
- delete(key) : Supprimer
- has(key) : Vérifier existence`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : HashMap simple',
      approach: 'Orientée objet',
      code: `class HashMap {
  constructor(size = 16) {
    this.size = size;
    this.buckets = new Array(size);
    this.count = 0;
  }
  
  // Fonction de hachage
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }
  
  // Ajouter ou modifier
  set(key, value) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    
    // Chercher si la clé existe déjà
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Modifier
        return;
      }
    }
    
    // Ajouter nouvelle clé
    bucket.push([key, value]);
    this.count++;
  }
  
  // Récupérer
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) return undefined;
    
    for (let [k, v] of bucket) {
      if (k === key) return v;
    }
    
    return undefined;
  }
  
  // Supprimer
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) return false;
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    
    return false;
  }
  
  // Vérifier existence
  has(key) {
    return this.get(key) !== undefined;
  }
}

// Exemple d'utilisation
const map = new HashMap();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name')); // 'Alice'
console.log(map.has('age'));  // true
map.delete('age');
console.log(map.has('age'));  // false`,
      explanation: 'Implémente une table de hachage avec chaînage pour les collisions.',
      timeComplexity: 'O(1) moyen, O(n) pire cas',
      spaceComplexity: 'O(n)',
      pros: ['O(1) en moyenne', 'Flexible', 'Gère collisions'],
      cons: ['O(n) pire cas (toutes collisions)', 'Fonction hash critique']
    }
  ],
  
  examples: [
    {
      input: 'set("name", "Alice"), get("name")',
      output: '"Alice"',
      explanation: 'Stockage et récupération O(1)'
    }
  ],
  
  tips: [
    'Fonction de hachage détermine les performances',
    'Bonne hash → peu de collisions → O(1)',
    'Load factor = count / size, resize si > 0.75',
    'JavaScript Map natif utilise ce principe',
    'Chaînage = liste pour chaque bucket'
  ],
  
  tags: ['data-structure', 'hash-map', 'dictionary'],
  relatedAlgorithms: ['hash-collision']
},

{
  id: 'hash-collision',
  title: '65. Gestion des collisions (chaînage)',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 65,
  description: 'Résoudre les collisions avec le chaînage',
  explanation: `Quand deux clés ont le même hash (collision), on utilise le chaînage : chaque bucket contient une liste.

Autres méthodes : open addressing, linear probing, quadratic probing.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Chaînage avec listes',
      approach: 'Orientée objet',
      code: `class HashMapWithChaining {
  constructor(size = 16) {
    this.size = size;
    this.buckets = Array.from({ length: size }, () => []);
    this.count = 0;
  }
  
  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash * 31 + char.charCodeAt(0)) % this.size;
    }
    return hash;
  }
  
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Chercher si existe
    for (let item of bucket) {
      if (item.key === key) {
        item.value = value;
        return;
      }
    }
    
    // Ajouter
    bucket.push({ key, value });
    this.count++;
    
    // Resize si load factor > 0.75
    if (this.count / this.size > 0.75) {
      this.resize();
    }
  }
  
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let item of bucket) {
      if (item.key === key) {
        return item.value;
      }
    }
    
    return undefined;
  }
  
  resize() {
    const oldBuckets = this.buckets;
    this.size *= 2;
    this.buckets = Array.from({ length: this.size }, () => []);
    this.count = 0;
    
    // Réinsérer tous les éléments
    for (let bucket of oldBuckets) {
      for (let { key, value } of bucket) {
        this.set(key, value);
      }
    }
  }
  
  getLoadFactor() {
    return this.count / this.size;
  }
  
  // Afficher les collisions
  showCollisions() {
    let collisions = 0;
    for (let bucket of this.buckets) {
      if (bucket.length > 1) {
        collisions += bucket.length - 1;
        console.log(\`Bucket with \${bucket.length} items:\`, bucket);
      }
    }
    console.log(\`Total collisions: \${collisions}\`);
  }
}

// Exemple
const map = new HashMapWithChaining(4);
map.set('cat', 1);
map.set('dog', 2);
map.set('tac', 3); // Collision possible avec 'cat'
map.showCollisions();`,
      explanation: 'Chaînage complet avec resize automatique basé sur load factor.',
      timeComplexity: 'O(1) moyen, O(k) avec k collisions',
      spaceComplexity: 'O(n)',
      pros: ['Gère bien les collisions', 'Resize automatique', 'Simple'],
      cons: ['Performance dépend de la fonction hash']
    }
  ],
  
  examples: [
    {
      input: 'Plusieurs clés avec même hash',
      output: 'Stockées dans la même liste',
      explanation: 'Le chaînage évite la perte de données'
    }
  ],
  
  tips: [
    'Chaînage = chaque bucket est une liste',
    'Load factor = nombre d\'éléments / taille',
    'Resize quand load factor > 0.75',
    'Bonne hash → O(1), mauvaise hash → O(n)',
    'Alternatives : open addressing, cuckoo hashing'
  ],
  
  tags: ['data-structure', 'hash-map', 'collision', 'chaining'],
  relatedAlgorithms: ['hash-map']
},

{
  id: 'stack',
  title: '66. Implémenter une pile (Stack)',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 66,
  description: 'Structure LIFO (Last In First Out)',
  explanation: `Une pile (stack) fonctionne comme une pile d'assiettes : le dernier ajouté est le premier retiré (LIFO).

Opérations :
- push(item) : Ajouter au sommet
- pop() : Retirer du sommet
- peek() : Voir le sommet sans retirer
- isEmpty() : Vérifier si vide`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Stack avec tableau',
      approach: 'Orientée objet',
      code: `class Stack {
  constructor() {
    this.items = [];
  }
  
  // Ajouter au sommet
  push(item) {
    this.items.push(item);
  }
  
  // Retirer du sommet
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  
  // Voir le sommet
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  
  // Vérifier si vide
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Taille
  size() {
    return this.items.length;
  }
  
  // Vider
  clear() {
    this.items = [];
  }
}

// Exemple d'utilisation
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.pop());  // 2
console.log(stack.size()); // 1`,
      explanation: 'Implémente une pile avec un tableau JavaScript.',
      timeComplexity: 'O(1) pour toutes les opérations',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Toutes opérations O(1)', 'Facile à implémenter'],
      cons: ['Utilise un tableau (peut gaspiller mémoire)']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Stack avec liste chaînée',
      approach: 'Orientée objet',
      code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }
  
  pop() {
    if (!this.top) return undefined;
    
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }
  
  peek() {
    return this.top ? this.top.value : undefined;
  }
  
  isEmpty() {
    return this.length === 0;
  }
  
  size() {
    return this.length;
  }
}

// Exemple
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2`,
      explanation: 'Implémente avec liste chaînée (pas de gaspillage mémoire).',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(n)',
      pros: ['Pas de gaspillage mémoire', 'Taille dynamique'],
      cons: ['Plus complexe', 'Overhead des pointeurs']
    }
  ],
  
  examples: [
    {
      input: 'push(1), push(2), push(3), pop()',
      output: '3',
      explanation: 'Le dernier ajouté (3) est le premier retiré'
    }
  ],
  
  tips: [
    'LIFO : Last In First Out',
    'Utilisé pour : navigation (back), undo, récursion',
    'Call stack du langage est une pile',
    'push() et pop() en O(1)',
    'Applications : évaluation d\'expressions, parenthèses'
  ],
  
  tags: ['data-structure', 'stack', 'lifo'],
  relatedAlgorithms: ['balanced-parentheses', 'postfix-evaluation', 'queue']
},

{
  id: 'balanced-parentheses',
  title: '67. Vérifier l\'équilibrage des parenthèses',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 67,
  description: 'Vérifier si les parenthèses/crochets/accolades sont bien équilibrées',
  explanation: `Vérifie si chaque ouvrante a sa fermante correspondante dans le bon ordre.

Exemples valides : "()", "()[]{}", "({[]})"
Exemples invalides : "(]", "(()", "())("

Utilise une pile pour suivre les ouvrantes.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Pile',
      approach: 'Impérative',
      code: `function isBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  for (let char of str) {
    // Si c'est une ouvrante
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    // Si c'est une fermante
    else if (char === ')' || char === ']' || char === '}') {
      // Vérifier correspondance
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  // Vérifier que tout est fermé
  return stack.length === 0;
}

// Exemples
console.log(isBalanced('()'));        // true
console.log(isBalanced('()[]{}'));    // true
console.log(isBalanced('({[]})'));    // true
console.log(isBalanced('(]'));        // false
console.log(isBalanced('((()'));      // false
console.log(isBalanced('())'));       // false`,
      explanation: 'Empile les ouvrantes, dépile à chaque fermante et vérifie la correspondance.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Une seule passe', 'Élégant avec pile'],
      cons: ['Nécessite une pile']
    }
  ],
  
  examples: [
    {
      input: '"({[]})"',
      output: 'true',
      explanation: 'Toutes les parenthèses sont bien équilibrées'
    },
    {
      input: '"(]"',
      output: 'false',
      explanation: '( est fermé par ] (mauvaise correspondance)'
    },
    {
      input: '"(()"',
      output: 'false',
      explanation: 'Une ( n\'est pas fermée'
    }
  ],
  
  tips: [
    'La pile est parfaite pour ce problème',
    'Ouvrante → push, Fermante → pop et vérifier',
    'À la fin, pile doit être vide',
    'Problème classique d\'interview',
    'Généralisable à n\'importe quels délimiteurs'
  ],
  
  tags: ['stack', 'string', 'validation', 'parentheses'],
  relatedAlgorithms: ['stack', 'postfix-evaluation']
},

{
  id: 'postfix-evaluation',
  title: '68. Évaluer une expression postfixée',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 68,
  description: 'Évaluer une expression en notation polonaise inversée (RPN)',
  explanation: `Notation postfixée (RPN) : les opérateurs viennent après les opérandes.

Exemples :
- Infix : (3 + 4)
- Postfix : 3 4 +

Algorithme : Parcourir de gauche à droite, empiler les nombres, dépiler pour les opérations.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Pile d\'évaluation',
      approach: 'Impérative',
      code: `function evaluatePostfix(expression) {
  const stack = [];
  const tokens = expression.split(' ');
  
  for (let token of tokens) {
    // Si c'est un nombre
    if (!isNaN(token)) {
      stack.push(Number(token));
    }
    // Si c'est un opérateur
    else {
      const b = stack.pop();
      const a = stack.pop();
      
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(Math.floor(a / b));
          break;
      }
    }
  }
  
  return stack.pop();
}

// Exemples
console.log(evaluatePostfix('3 4 +')); // 7
console.log(evaluatePostfix('3 4 + 2 *')); // 14 : (3+4)*2
console.log(evaluatePostfix('15 7 1 1 + - / 3 * 2 1 1 + + -')); // 5`,
      explanation: 'Empile les nombres, dépile deux nombres pour chaque opérateur, empile le résultat.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple avec pile', 'Une passe', 'Pas de parenthèses'],
      cons: ['Notation peu naturelle']
    }
  ],
  
  examples: [
    {
      input: '"3 4 +"',
      output: '7',
      explanation: '3 + 4'
    },
    {
      input: '"3 4 + 2 *"',
      output: '14',
      explanation: '(3 + 4) * 2'
    },
    {
      input: '"5 1 2 + 4 * + 3 -"',
      output: '14',
      explanation: '5 + ((1 + 2) * 4) - 3'
    }
  ],
  
  tips: [
    'RPN = Reverse Polish Notation',
    'Pas besoin de parenthèses',
    'Utilisé dans calculatrices HP',
    'Plus efficace à évaluer que infix',
    'Ordre : nombre nombre opérateur',
    'Algorithme : nombre → push, opérateur → pop 2, calcule, push'
  ],
  
  tags: ['stack', 'expression', 'postfix', 'rpn'],
  relatedAlgorithms: ['stack', 'infix-to-postfix']
},

{
  id: 'queue',
  title: '69. Implémenter une file (Queue)',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 69,
  description: 'Structure FIFO (First In First Out)',
  explanation: `Une file (queue) fonctionne comme une file d'attente : le premier arrivé est le premier servi (FIFO).

Opérations :
- enqueue(item) : Ajouter à la fin
- dequeue() : Retirer du début
- front() : Voir le premier
- isEmpty() : Vérifier si vide`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Queue avec tableau',
      approach: 'Orientée objet',
      code: `class Queue {
  constructor() {
    this.items = [];
  }
  
  // Ajouter à la fin
  enqueue(item) {
    this.items.push(item);
  }
  
  // Retirer du début
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift(); // O(n) !
  }
  
  // Voir le premier
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

// Exemple
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.front());   // 2`,
      explanation: 'Implémente une file avec un tableau (dequeue est O(n)).',
      timeComplexity: 'enqueue O(1), dequeue O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple', 'Facile à comprendre'],
      cons: ['dequeue() est O(n) avec shift()']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Queue optimisée avec deux indices',
      approach: 'Orientée objet',
      code: `class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }
  
  isEmpty() {
    return this.rear === this.front;
  }
  
  size() {
    return this.rear - this.front;
  }
}

// Exemple
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1`,
      explanation: 'Utilise un objet et deux indices (front, rear) pour O(1) partout.',
      timeComplexity: 'O(1) pour toutes opérations',
      spaceComplexity: 'O(n)',
      pros: ['dequeue() en O(1)', 'Optimal'],
      cons: ['Objets peuvent gaspiller mémoire', 'Plus complexe']
    }
  ],
  
  examples: [
    {
      input: 'enqueue(1), enqueue(2), enqueue(3), dequeue()',
      output: '1',
      explanation: 'Le premier ajouté (1) est le premier retiré'
    }
  ],
  
  tips: [
    'FIFO : First In First Out',
    'Utilisé pour : BFS, task scheduling, buffers',
    'Array.shift() est O(n), évitez-le',
    'Version optimisée avec indices : O(1) partout',
    'Applications : file d\'impression, gestion de tâches'
  ],
  
  tags: ['data-structure', 'queue', 'fifo'],
  relatedAlgorithms: ['stack', 'circular-queue', 'bfs']
},

{
  id: 'circular-queue',
  title: '70. File circulaire',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 70,
  description: 'File avec buffer circulaire de taille fixe',
  explanation: `Une file circulaire réutilise l'espace libéré au début.

Quand on atteint la fin du tableau, on revient au début (modulo).

Évite le gaspillage mémoire d'une queue normale.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : CircularQueue',
      approach: 'Orientée objet',
      code: `class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  
  enqueue(item) {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }
    
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return item;
  }
  
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  isFull() {
    return this.size === this.capacity;
  }
  
  getSize() {
    return this.size;
  }
}

// Exemple
const queue = new CircularQueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
queue.enqueue(4); // Réutilise l'espace de 1
console.log(queue.items); // [4, 2, 3]`,
      explanation: 'Utilise modulo pour boucler les indices et réutiliser l\'espace.',
      timeComplexity: 'O(1) pour toutes opérations',
      spaceComplexity: 'O(capacity)',
      pros: ['O(1) partout', 'Pas de gaspillage', 'Taille fixe'],
      cons: ['Capacité limitée', 'Plus complexe']
    }
  ],
  
  examples: [
    {
      input: 'Capacité 3: enqueue(1,2,3), dequeue(), enqueue(4)',
      output: 'Queue: [4, 2, 3]',
      explanation: 'L\'espace libéré par 1 est réutilisé pour 4'
    }
  ],
  
  tips: [
    'Modulo pour boucler : (index + 1) % capacity',
    'Taille fixe définie à la création',
    'Évite le gaspillage de la queue normale',
    'Utilisé dans buffers circulaires, streaming',
    'Suivre size ou utiliser un slot vide pour différencier vide/plein'
  ],
  
  tags: ['data-structure', 'queue', 'circular', 'buffer'],
  relatedAlgorithms: ['queue', 'ring-buffer']
},

{
  id: 'linked-list',
  title: '71. Liste chaînée simple',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 71,
  description: 'Structure de données linéaire avec nœuds',
  explanation: `Une liste chaînée est une séquence de nœuds où chaque nœud contient une valeur et un pointeur vers le suivant.

Avantages : insertion/suppression O(1) si on a la référence
Inconvénients : accès O(n), pas de cache-friendly`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : LinkedList',
      approach: 'Orientée objet',
      code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  // Ajouter à la fin
  append(value) {
    const node = new Node(value);
    
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    
    this.size++;
  }
  
  // Ajouter au début
  prepend(value) {
    const node = new Node(value);
    
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    
    this.size++;
  }
  
  // Afficher
  print() {
    const values = [];
    let current = this.head;
    
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    
    console.log(values.join(' -> '));
  }
  
  // Recherche
  find(value) {
    let current = this.head;
    
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    
    return null;
  }
}

// Exemple
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3`,
      explanation: 'Implémente une liste chaînée simple avec head et tail.',
      timeComplexity: 'append/prepend O(1), find O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Insertion/suppression O(1)', 'Taille dynamique'],
      cons: ['Accès O(n)', 'Overhead des pointeurs', 'Pas cache-friendly']
    }
  ],
  
  examples: [
    {
      input: 'append(1), append(2), prepend(0)',
      output: '0 -> 1 -> 2',
      explanation: 'Construction de la liste'
    }
  ],
  
  tips: [
    'Chaque nœud a value et next',
    'head = premier nœud, tail = dernier',
    'append O(1) avec tail, sinon O(n)',
    'prepend toujours O(1)',
    'Utilisé dans LRU cache, undo systems'
  ],
  
  tags: ['data-structure', 'linked-list', 'node'],
  relatedAlgorithms: ['insert-linked-list', 'delete-linked-list']
},

{
  id: 'insert-linked-list',
  title: '72. Insertion dans une liste chaînée',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 72,
  description: 'Insérer un nœud à une position donnée',
  explanation: `Insérer à une position spécifique nécessite de :
1. Parcourir jusqu'à position-1
2. Créer le nouveau nœud
3. Réajuster les pointeurs`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Insertion à l\'index',
      approach: 'Impérative',
      code: `class LinkedList {
  // ... (code précédent)
  
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bounds');
    }
    
    // Cas spécial : début
    if (index === 0) {
      this.prepend(value);
      return;
    }
    
    // Cas spécial : fin
    if (index === this.size) {
      this.append(value);
      return;
    }
    
    // Cas général
    const node = new Node(value);
    let current = this.head;
    let count = 0;
    
    // Aller à position - 1
    while (count < index - 1) {
      current = current.next;
      count++;
    }
    
    // Insérer
    node.next = current.next;
    current.next = node;
    this.size++;
  }
}

// Exemple
const list = new LinkedList();
list.append(1);
list.append(3);
list.insertAt(2, 1); // Insère 2 entre 1 et 3
list.print(); // 1 -> 2 -> 3`,
      explanation: 'Parcourt jusqu\'à position-1, insère en réajustant les pointeurs.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Insertion O(1) si on a le nœud', 'Flexible'],
      cons: ['Parcours O(n) pour trouver la position']
    }
  ],
  
  examples: [
    {
      input: 'Liste [1, 3], insertAt(2, 1)',
      output: '[1, 2, 3]',
      explanation: 'Insère 2 à l\'index 1'
    }
  ],
  
  tips: [
    'Gérez les cas spéciaux : début, fin',
    'Parcours O(n) pour trouver position',
    'Mais insertion elle-même O(1)',
    'Attention aux pointeurs null',
    'newNode.next = current.next, puis current.next = newNode'
  ],
  
  tags: ['linked-list', 'insertion', 'pointers'],
  relatedAlgorithms: ['linked-list', 'delete-linked-list']
},

{
  id: 'delete-linked-list',
  title: '73. Suppression dans une liste chaînée',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'intermédiaire',
  order: 73,
  description: 'Supprimer un nœud d\'une liste chaînée',
  explanation: `Supprimer nécessite de :
1. Trouver le nœud précédent
2. Réajuster son pointeur next pour sauter le nœud à supprimer`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Suppression par valeur',
      approach: 'Impérative',
      code: `class LinkedList {
  // ... (code précédent)
  
  delete(value) {
    if (!this.head) return false;
    
    // Cas spécial : supprimer head
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return true;
    }
    
    // Cas général
    let current = this.head;
    
    while (current.next) {
      if (current.next.value === value) {
        // Sauter le nœud
        current.next = current.next.next;
        
        // Mettre à jour tail si nécessaire
        if (!current.next) {
          this.tail = current;
        }
        
        this.size--;
        return true;
      }
      current = current.next;
    }
    
    return false; // Non trouvé
  }
  
  // Suppression par index
  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    
    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.size--;
      return;
    }
    
    let current = this.head;
    let count = 0;
    
    while (count < index - 1) {
      current = current.next;
      count++;
    }
    
    current.next = current.next.next;
    if (!current.next) {
      this.tail = current;
    }
    this.size--;
  }
}

// Exemple
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.delete(2);
list.print(); // 1 -> 3`,
      explanation: 'Trouve le nœud précédent, puis saute le nœud à supprimer.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Suppression O(1) si on a le nœud précédent'],
      cons: ['Parcours O(n) pour trouver']
    }
  ],
  
  examples: [
    {
      input: 'Liste [1, 2, 3], delete(2)',
      output: '[1, 3]',
      explanation: 'Supprime le nœud contenant 2'
    }
  ],
  
  tips: [
    'Gérez le cas head séparément',
    'previous.next = current.next',
    'Attention à mettre à jour tail si on supprime le dernier',
    'Si liste doublement chaînée, aussi mettre à jour prev',
    'Garbage collector libère automatiquement la mémoire'
  ],
  
  tags: ['linked-list', 'deletion', 'pointers'],
  relatedAlgorithms: ['linked-list', 'insert-linked-list']
},

{
  id: 'reverse-linked-list',
  title: '74. Inverser une liste chaînée',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 74,
  description: 'Inverser l\'ordre des nœuds d\'une liste chaînée',
  explanation: `Inverser une liste chaînée nécessite de renverser tous les pointeurs next.

Trois approches : itérative, récursive, ou en créant une nouvelle liste.`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Itératif (optimal)',
      approach: 'Impérative',
      code: `function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current) {
    // Sauvegarder next
    const next = current.next;
    
    // Inverser le pointeur
    current.next = prev;
    
    // Avancer
    prev = current;
    current = next;
  }
  
  return prev; // Nouveau head
}

// Pour la classe LinkedList
class LinkedList {
  // ... (code précédent)
  
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    this.head = prev;
  }
}

// Exemple
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.reverse();
list.print(); // 3 -> 2 -> 1`,
      explanation: 'Parcourt la liste en inversant chaque pointeur next.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Optimal O(n) temps, O(1) espace', 'In-place'],
      cons: ['Manipulation de pointeurs délicate']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Récursif',
      approach: 'Récursive',
      code: `function reverseList(head) {
  // Cas de base
  if (!head || !head.next) {
    return head;
  }
  
  // Inverser le reste
  const newHead = reverseList(head.next);
  
  // Inverser le lien actuel
  head.next.next = head;
  head.next = null;
  
  return newHead;
}

// Exemple
// 1 -> 2 -> 3 -> null
// Devient : 3 -> 2 -> 1 -> null`,
      explanation: 'Récurse jusqu\'à la fin, puis inverse les liens en remontant.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)', // Stack de récursion
      pros: ['Élégant', 'Concis'],
      cons: ['Utilise stack O(n)', 'Moins intuitif']
    }
  ],
  
  examples: [
    {
      input: '1 -> 2 -> 3 -> null',
      output: '3 -> 2 -> 1 -> null',
      explanation: 'Tous les pointeurs sont inversés'
    }
  ],
  
  tips: [
    'Méthode itérative : prev, current, next',
    'Trois pointeurs : prev = null au départ',
    'Sauvegarder next avant de modifier current.next',
    'Récursif élégant mais O(n) stack',
    'Problème classique d\'interview',
    'Variante : inverser par groupes de k'
  ],
  
  tags: ['linked-list', 'reverse', 'pointers', 'recursion'],
  relatedAlgorithms: ['linked-list', 'detect-cycle']
},

{
  id: 'detect-cycle',
  title: '75. Détecter un cycle dans une liste chaînée',
  level: 'niveau-4',
  category: 'structures',
  difficulty: 'avancé',
  order: 75,
  description: 'Vérifier si une liste chaînée contient un cycle (Floyd\'s algorithm)',
  explanation: `Un cycle existe quand un nœud pointe vers un nœud précédent, créant une boucle infinie.

Algorithme de Floyd (Tortue et Lièvre) :
- Deux pointeurs : un lent (1 pas), un rapide (2 pas)
- S'ils se rencontrent, il y a un cycle
- Si rapide atteint null, pas de cycle`,
  
  solutions: [
    {
      id: 'method-1',
      title: 'Méthode 1 : Algorithme de Floyd (optimal)',
      approach: 'Two Pointers',
      code: `function hasCycle(head) {
  if (!head || !head.next) return false;
  
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;        // 1 pas
    fast = fast.next.next;   // 2 pas
    
    if (slow === fast) {
      return true; // Cycle détecté
    }
  }
  
  return false; // Pas de cycle
}

// Pour trouver le début du cycle
function detectCycle(head) {
  if (!head || !head.next) return null;
  
  let slow = head;
  let fast = head;
  let hasCycle = false;
  
  // Détecter le cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }
  
  if (!hasCycle) return null;
  
  // Trouver le début du cycle
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  
  return slow; // Début du cycle
}

// Exemple
// 1 -> 2 -> 3 -> 4
//           ^    |
//           |____|
console.log(hasCycle(head)); // true`,
      explanation: 'Deux pointeurs à vitesses différentes se rencontrent si cycle.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      pros: ['Optimal O(n) temps, O(1) espace', 'Élégant', 'Pas de structure auxiliaire'],
      cons: ['Non intuitif au premier abord']
    },
    {
      id: 'method-2',
      title: 'Méthode 2 : Set pour suivre les nœuds visités',
      approach: 'Hash Set',
      code: `function hasCycle(head) {
  const visited = new Set();
  let current = head;
  
  while (current) {
    if (visited.has(current)) {
      return true; // Déjà visité = cycle
    }
    
    visited.add(current);
    current = current.next;
  }
  
  return false;
}

// Exemple
console.log(hasCycle(head));`,
      explanation: 'Garde trace des nœuds visités dans un Set.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      pros: ['Simple à comprendre', 'Facile à implémenter'],
      cons: ['O(n) mémoire supplémentaire', 'Pas optimal']
    }
  ],
  
  examples: [
    {
      input: '1 -> 2 -> 3 -> 4 -> 2 (cycle)',
      output: 'true',
      explanation: 'Le nœud 4 pointe vers le nœud 2'
    },
    {
      input: '1 -> 2 -> 3 -> null',
      output: 'false',
      explanation: 'Pas de cycle, atteint null'
    }
  ],
  
  tips: [
    'Floyd = Tortue et Lièvre (Tortoise and Hare)',
    'Si rapide rattrape lent, il y a un cycle',
    'Pour trouver le début : remettre un pointeur au head',
    'Problème classique d\'interview',
    'Variante : trouver la longueur du cycle',
    'Set simple mais O(n) espace, Floyd O(1)'
  ],
  
  tags: ['linked-list', 'cycle', 'two-pointers', 'floyd'],
  relatedAlgorithms: ['linked-list', 'reverse-linked-list']
},
];