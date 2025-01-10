import { useState } from 'react';

interface Module {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function useModuleBasket() {
  const [selectedModules, setSelectedModules] = useState<Module[]>([]);

  const addModule = (module: Module) => {
    setSelectedModules(prev => [...prev, module]);
  };

  const removeModule = (moduleId: string) => {
    setSelectedModules(prev => prev.filter(m => m.id !== moduleId));
  };

  return {
    selectedModules,
    addModule,
    removeModule,
  };
}
