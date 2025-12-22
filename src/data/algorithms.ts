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
  }
];