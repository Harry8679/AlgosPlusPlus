import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Level, Algorithm } from '../types';

interface ProgressData {
  completedAlgorithms: string[];
  favorites: string[];
  lastVisited?: string;
}

interface AlgoStore {
  // État
  selectedLevel: Level | null;
  searchQuery: string;
  selectedDifficulty: string;
  progress: ProgressData;
  
  // Actions
  setSelectedLevel: (level: Level | null) => void;
  setSearchQuery: (query: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  toggleComplete: (algoId: string) => void;
  toggleFavorite: (algoId: string) => void;
  setLastVisited: (algoId: string) => void;
  isCompleted: (algoId: string) => boolean;
  isFavorite: (algoId: string) => boolean;
  getProgressByLevel: (levelId: string, algorithms: Algorithm[]) => number;
  getGlobalProgress: (algorithms: Algorithm[]) => {
    completed: number;
    total: number;
    percentage: number;
  };
}

export const useAlgoStore = create<AlgoStore>()(
  persist(
    (set, get) => ({
      // État initial
      selectedLevel: null,
      searchQuery: '',
      selectedDifficulty: 'tous',
      progress: {
        completedAlgorithms: [],
        favorites: [],
        lastVisited: undefined,
      },

      // Actions
      setSelectedLevel: (level) => set({ selectedLevel: level }),
      
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
      
      toggleComplete: (algoId) => set((state) => {
        const completed = state.progress.completedAlgorithms;
        const isCompleted = completed.includes(algoId);
        
        return {
          progress: {
            ...state.progress,
            completedAlgorithms: isCompleted
              ? completed.filter(id => id !== algoId)
              : [...completed, algoId],
          },
        };
      }),
      
      toggleFavorite: (algoId) => set((state) => {
        const favorites = state.progress.favorites;
        const isFavorite = favorites.includes(algoId);
        
        return {
          progress: {
            ...state.progress,
            favorites: isFavorite
              ? favorites.filter(id => id !== algoId)
              : [...favorites, algoId],
          },
        };
      }),
      
      setLastVisited: (algoId) => set((state) => ({
        progress: {
          ...state.progress,
          lastVisited: algoId,
        },
      })),
      
      isCompleted: (algoId) => {
        return get().progress.completedAlgorithms.includes(algoId);
      },
      
      isFavorite: (algoId) => {
        return get().progress.favorites.includes(algoId);
      },
      
      getProgressByLevel: (levelId, algorithms) => {
        const levelAlgos = algorithms.filter(a => a.level === levelId);
        const completed = get().progress.completedAlgorithms;
        const completedInLevel = levelAlgos.filter(a => completed.includes(a.id));
        
        return levelAlgos.length > 0 
          ? Math.round((completedInLevel.length / levelAlgos.length) * 100)
          : 0;
      },

      getGlobalProgress: (algorithms) => {
        const completed = get().progress.completedAlgorithms;
        const completedCount = algorithms.filter(a => completed.includes(a.id)).length;
        const total = algorithms.length;
        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
        
        return {
          completed: completedCount,
          total,
          percentage,
        };
      },
    }),
    {
      name: 'algo-master-storage',
    }
  )
);