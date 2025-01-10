import { create } from 'zustand';
import { Module } from '../types';

interface ModuleStore {
  selectedModules: Module[];
  addModule: (module: Module) => void;
  removeModule: (moduleId: number) => void;
  clearModules: () => void;
}

export const useModuleStore = create<ModuleStore>((set) => ({
  selectedModules: [],
  addModule: (module) =>
    set((state) => ({
      selectedModules: state.selectedModules.some((m) => m.id === module.id)
        ? state.selectedModules
        : [...state.selectedModules, module],
    })),
  removeModule: (moduleId) =>
    set((state) => ({
      selectedModules: state.selectedModules.filter((m) => m.id !== moduleId),
    })),
  clearModules: () => set({ selectedModules: [] }),
}));
