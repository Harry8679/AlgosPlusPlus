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
  }
];