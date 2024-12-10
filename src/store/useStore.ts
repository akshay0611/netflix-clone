import { create } from 'zustand';
import { Movie } from '@/data/movies';

interface Store {
  selectedMovie: Movie | null;
  isPlaying: boolean;
  searchQuery: string;
  setSelectedMovie: (movie: Movie | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<Store>((set) => ({
  selectedMovie: null,
  isPlaying: false,
  searchQuery: '',
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));