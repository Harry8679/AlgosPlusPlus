import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// import type { Chapter, Algorithm } from '../types';
import type { Algorithm } from '../types';
// import { Algorithm, Chapter } from '@/data';

interface ProgressData {
  completedAlgorithms: string[];
  favorites: string[];
  lastVisited?: string;
}

interface AlgoStore {
  // État
  selectedChapter: Chapter | null;
  searchQuery: string;
  selectedDifficulty: string;
  progress: ProgressData;
  
  // Actions
  setSelectedChapter: (chapter: Chapter | null) => void;
  setSearchQuery: (query: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  toggleComplete: (algoId: string) => void;
  toggleFavorite: (algoId: string) => void;
  setLastVisited: (algoId: string) => void;
  isCompleted: (algoId: string) => boolean;
  isFavorite: (algoId: string) => boolean;
  getProgressByChapter: (chapter: Chapter, algorithms: Algorithm[]) => number;
}

export const useAlgoStore = create<AlgoStore>()(
  persist(
    (set, get) => ({
      // État initial
      selectedChapter: null,
      searchQuery: '',
      selectedDifficulty: 'tous',
      progress: {
        completedAlgorithms: [],
        favorites: [],
        lastVisited: undefined,
      },

      // Actions
      setSelectedChapter: (chapter) => set({ selectedChapter: chapter }),
      
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
      
      getProgressByChapter: (chapter, algorithms) => {
        const chapterAlgos = algorithms.filter(a => a.chapter === chapter);
        const completed = get().progress.completedAlgorithms;
        const completedInChapter = chapterAlgos.filter(a => completed.includes(a.id));
        
        return chapterAlgos.length > 0 
          ? Math.round((completedInChapter.length / chapterAlgos.length) * 100)
          : 0;
      },
    }),
    {
      name: 'algo-master-storage',
    }
  )
);