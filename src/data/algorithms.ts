import type { Algorithm } from '../types';

export const algorithms: Algorithm[] = [
  // BASES DE JAVASCRIPT
  {
    id: 'hoisting',
    title: 'Hoisting',
    chapter: 'bases-js',
    difficulty: 'débutant',
    description: 'Comprendre le mécanisme de hoisting en JavaScript',
    explanation: `Le hoisting est un mécanisme JavaScript où les déclarations de variables et de fonctions sont déplacées vers le haut de leur scope avant l'exécution du code.
    
Avec var, la déclaration est hissée mais pas l'initialisation.
Avec let et const, il y a une "temporal dead zone" - période entre le début du scope et la déclaration.
Les fonctions déclarées sont complètement hissées (déclaration + définition).`,
    code: `// Exemple de hoisting avec var
console.log(x); // undefined (pas d'erreur)
var x = 5;
console.log(x); // 5

// Équivalent à :
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5

// Hoisting avec let/const
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Hoisting de fonction
sayHello(); // "Hello!" - fonctionne !

function sayHello() {
  console.log("Hello!");
}`,
    timeComplexity: 'N/A',
    spaceComplexity: 'N/A',
    examples: [
      {
        input: 'console.log(x); var x = 5;',
        output: 'undefined',
        explanation: 'La variable est hissée mais non initialisée'
      }
    ],
    tips: [
      'Toujours déclarer les variables en début de scope',
      'Préférer let et const à var',
      'Attention à la temporal dead zone avec let/const'
    ],
    tags: ['hoisting', 'scope', 'variables']
  },
  {
    id: 'closure',
    title: 'Closures',
    chapter: 'fonctions',
    difficulty: 'intermédiaire',
    description: 'Comprendre et utiliser les closures en JavaScript',
    explanation: `Une closure est une fonction qui a accès aux variables de sa fonction parente, même après que la fonction parente ait terminé son exécution.
    
C'est un concept fondamental en JavaScript qui permet :
- L'encapsulation de données
- La création de fonctions privées
- Les factory functions
- Les modules`,
    code: `// Exemple simple de closure
function createCounter() {
  let count = 0; // Variable privée
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// count n'est pas accessible directement
console.log(counter.count); // undefined

// Closure avec paramètres
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n) - maintient les variables en mémoire',
    examples: [
      {
        input: 'const counter = createCounter(); counter.increment();',
        output: '1',
        explanation: 'La closure maintient l\'accès à count'
      }
    ],
    tips: [
      'Les closures peuvent causer des memory leaks si mal utilisées',
      'Très utiles pour créer des variables privées',
      'Pattern module avant ES6'
    ],
    tags: ['closure', 'fonctions', 'scope', 'encapsulation']
  },
  
  // TABLEAUX
  {
    id: 'two-sum',
    title: 'Two Sum',
    chapter: 'tableaux',
    difficulty: 'débutant',
    description: 'Trouver deux nombres dont la somme égale la cible',
    explanation: `Problème classique d'entretien : étant donné un tableau de nombres et une valeur cible, retourner les indices des deux nombres qui additionnés donnent la cible.
    
Solution optimale : utiliser une Map pour stocker les nombres vus et leur index, permettant une recherche en O(1).`,
    code: `function twoSum(nums, target) {
  // Map pour stocker : valeur -> index
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    // Si le complément existe dans la map
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    // Sinon, ajouter le nombre actuel à la map
    map.set(nums[i], i);
  }
  
  return []; // Aucune solution trouvée
}

// Tests
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'nums[0] + nums[1] = 2 + 7 = 9'
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] = 2 + 4 = 6'
      }
    ],
    tips: [
      'Penser à la Map pour éviter une boucle imbriquée O(n²)',
      'Un seul passage suffit',
      'Attention aux doublons'
    ],
    tags: ['array', 'hash-map', 'leetcode']
  },

  // STACKS
  {
    id: 'stack-implementation',
    title: 'Implémentation d\'une pile',
    chapter: 'stacks',
    difficulty: 'débutant',
    description: 'Implémenter une structure de données pile (LIFO)',
    explanation: `Une pile (Stack) est une structure de données LIFO (Last In, First Out).
    
Les opérations principales sont :
- push(element) : ajouter un élément au sommet
- pop() : retirer et retourner l'élément au sommet
- peek() : voir l'élément au sommet sans le retirer
- isEmpty() : vérifier si la pile est vide`,
    code: `class Stack {
  constructor() {
    this.items = [];
  }
  
  // Ajouter un élément au sommet
  push(element) {
    this.items.push(element);
  }
  
  // Retirer et retourner l'élément au sommet
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  
  // Voir l'élément au sommet
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
  
  // Vérifier si la pile est vide
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Obtenir la taille
  size() {
    return this.items.length;
  }
  
  // Vider la pile
  clear() {
    this.items = [];
  }
}

// Utilisation
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());  // 3
console.log(stack.pop());   // 3
console.log(stack.size());  // 2
console.log(stack.isEmpty()); // false`,
    timeComplexity: 'O(1) pour toutes les opérations',
    spaceComplexity: 'O(n)',
    examples: [
      {
        input: 'stack.push(1); stack.push(2); stack.pop();',
        output: '2',
        explanation: 'Le dernier élément ajouté est le premier retiré (LIFO)'
      }
    ],
    tips: [
      'Utiliser un tableau JavaScript pour l\'implémentation',
      'Les méthodes push/pop de Array sont déjà optimisées',
      'Applications : undo/redo, parenthèses équilibrées, DFS'
    ],
    tags: ['stack', 'data-structure', 'LIFO']
  },
  {
    id: 'valid-parentheses',
    title: 'Parenthèses valides',
    chapter: 'stacks',
    difficulty: 'débutant',
    description: 'Vérifier si les parenthèses sont correctement fermées',
    explanation: `Problème classique utilisant une pile pour vérifier si une chaîne contenant (), [], {} est valide.
    
Une chaîne est valide si :
- Chaque ouvrante a une fermante correspondante
- Les fermantes sont dans le bon ordre`,
    code: `function isValidParentheses(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of s) {
    // Si c'est une ouvrante
    if (pairs[char]) {
      stack.push(char);
    } 
    // Si c'est une fermante
    else {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  
  // La pile doit être vide
  return stack.length === 0;
}

// Tests
console.log(isValidParentheses("()"));     // true
console.log(isValidParentheses("()[]{}"));  // true
console.log(isValidParentheses("(]"));     // false
console.log(isValidParentheses("([)]"));   // false
console.log(isValidParentheses("{[]}"));   // true`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    examples: [
      {
        input: '"()"',
        output: 'true',
        explanation: 'Parenthèses correctement fermées'
      },
      {
        input: '"([)]"',
        output: 'false',
        explanation: 'Mauvais ordre de fermeture'
      }
    ],
    tips: [
      'Utiliser une pile pour suivre les ouvrantes',
      'Vérifier que la pile est vide à la fin',
      'Pattern très fréquent en entretien'
    ],
    tags: ['stack', 'string', 'leetcode']
  },

  // QUEUES
  {
    id: 'queue-implementation',
    title: 'Implémentation d\'une file',
    chapter: 'queues',
    difficulty: 'débutant',
    description: 'Implémenter une structure de données file (FIFO)',
    explanation: `Une file (Queue) est une structure de données FIFO (First In, First Out).
    
Les opérations principales sont :
- enqueue(element) : ajouter un élément à la fin
- dequeue() : retirer et retourner l'élément au début
- front() : voir l'élément au début sans le retirer
- isEmpty() : vérifier si la file est vide`,
    code: `class Queue {
  constructor() {
    this.items = [];
  }
  
  // Ajouter un élément à la fin
  enqueue(element) {
    this.items.push(element);
  }
  
  // Retirer et retourner l'élément au début
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  // Voir l'élément au début
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  // Vérifier si la file est vide
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Obtenir la taille
  size() {
    return this.items.length;
  }
  
  // Vider la file
  clear() {
    this.items = [];
  }
}

// Utilisation
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());   // 1
console.log(queue.dequeue()); // 1
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false`,
    timeComplexity: 'O(1) pour enqueue, O(n) pour dequeue avec Array.shift',
    spaceComplexity: 'O(n)',
    examples: [
      {
        input: 'queue.enqueue(1); queue.enqueue(2); queue.dequeue();',
        output: '1',
        explanation: 'Le premier élément ajouté est le premier retiré (FIFO)'
      }
    ],
    tips: [
      'shift() est O(n), pour optimiser utiliser deux pointeurs',
      'Applications : BFS, file d\'attente, cache',
      'Peut être optimisée avec une liste chaînée'
    ],
    tags: ['queue', 'data-structure', 'FIFO']
  },

  // LINKED LISTS
  {
    id: 'linked-list-implementation',
    title: 'Implémentation d\'une liste chaînée',
    chapter: 'linked-lists',
    difficulty: 'intermédiaire',
    description: 'Implémenter une liste chaînée simple',
    explanation: `Une liste chaînée est une structure de données où chaque élément (nœud) contient une valeur et un pointeur vers le prochain nœud.
    
Avantages :
- Insertion/suppression en O(1) si on a la référence
- Taille dynamique

Inconvénients :
- Accès séquentiel seulement O(n)
- Plus de mémoire (pointeurs)`,
    code: `// Définition d'un nœud
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implémentation de la liste chaînée
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Ajouter au début
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  // Ajouter à la fin
  append(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  // Supprimer par valeur
  remove(value) {
    if (!this.head) return null;
    
    // Si c'est la tête
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
  
  // Rechercher
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
  
  // Afficher la liste
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

// Utilisation
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3`,
    timeComplexity: 'Prepend: O(1), Append: O(n), Remove: O(n)',
    spaceComplexity: 'O(n)',
    examples: [
      {
        input: 'list.append(1); list.append(2); list.prepend(0);',
        output: '0 -> 1 -> 2',
        explanation: 'Construction d\'une liste chaînée'
      }
    ],
    tips: [
      'Toujours garder une référence à head',
      'Faire attention aux cas edge (liste vide)',
      'Utiliser un dummy node peut simplifier certains algorithmes'
    ],
    tags: ['linked-list', 'data-structure', 'pointers']
  },

  // TREES
  {
    id: 'binary-tree-traversal',
    title: 'Parcours d\'arbre binaire',
    chapter: 'trees',
    difficulty: 'intermédiaire',
    description: 'Implémenter les trois types de parcours : préfixe, infixe, postfixe',
    explanation: `Les trois types de parcours en profondeur (DFS) :
    
- Préfixe (Pre-order) : Racine -> Gauche -> Droite
- Infixe (In-order) : Gauche -> Racine -> Droite (donne ordre trié pour BST)
- Postfixe (Post-order) : Gauche -> Droite -> Racine`,
    code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Parcours Préfixe (Pre-order): Racine -> Gauche -> Droite
function preOrder(root, result = []) {
  if (!root) return result;
  
  result.push(root.value);
  preOrder(root.left, result);
  preOrder(root.right, result);
  
  return result;
}

// Parcours Infixe (In-order): Gauche -> Racine -> Droite
function inOrder(root, result = []) {
  if (!root) return result;
  
  inOrder(root.left, result);
  result.push(root.value);
  inOrder(root.right, result);
  
  return result;
}

// Parcours Postfixe (Post-order): Gauche -> Droite -> Racine
function postOrder(root, result = []) {
  if (!root) return result;
  
  postOrder(root.left, result);
  postOrder(root.right, result);
  result.push(root.value);
  
  return result;
}

// Construction d'un arbre exemple
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log('Pre-order:', preOrder(root));   // [1, 2, 4, 5, 3]
console.log('In-order:', inOrder(root));     // [4, 2, 5, 1, 3]
console.log('Post-order:', postOrder(root)); // [4, 5, 2, 3, 1]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h) où h est la hauteur (stack de récursion)',
    examples: [
      {
        input: 'Arbre: 1 -> (2, 3), 2 -> (4, 5)',
        output: 'Pre: [1,2,4,5,3], In: [4,2,5,1,3], Post: [4,5,2,3,1]',
        explanation: 'Différents ordres de parcours'
      }
    ],
    tips: [
      'In-order sur un BST donne les valeurs triées',
      'Pre-order utile pour copier un arbre',
      'Post-order utile pour supprimer un arbre'
    ],
    tags: ['tree', 'traversal', 'recursion', 'DFS']
  },
];