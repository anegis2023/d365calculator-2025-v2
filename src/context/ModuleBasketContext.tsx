import React, { createContext, useContext } from 'react';
import { useModuleStore } from '../store/moduleStore';
import { Module } from '../types';

interface ModuleBasketContextType {
  selectedModules: Module[];
  addModule: (module: Module) => void;
  removeModule: (moduleId: number) => void;
}

const ModuleBasketContext = createContext<ModuleBasketContextType | undefined>(undefined);

export function ModuleBasketProvider({ children }: { children: React.ReactNode }) {
  const { selectedModules, addModule, removeModule } = useModuleStore();

  return (
    <ModuleBasketContext.Provider value={{ selectedModules, addModule, removeModule }}>
      {children}
    </ModuleBasketContext.Provider>
  );
}

export function useModuleBasket() {
  const context = useContext(ModuleBasketContext);
  if (context === undefined) {
    throw new Error('useModuleBasket must be used within a ModuleBasketProvider');
  }
  return context;
}
