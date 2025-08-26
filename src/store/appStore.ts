import { create } from 'zustand';

interface AppState {
  framework: 'playwright' | 'cypress' | null;
  setFramework: (fw: 'playwright' | 'cypress') => void;
}

export const useAppStore = create<AppState>((set) => ({
  framework: null,
  setFramework: (fw) => set({ framework: fw }),
}));
