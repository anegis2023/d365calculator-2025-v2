import React from 'react';
import { Module } from '../types';
import { ModuleCard } from './ModuleCard';

interface ModuleGridProps {
  modules: Module[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, module: Module) => void;
  onAddToBasket: (module: Module) => void;
  onRemoveFromBasket: (module: Module) => void;
  selectedModules: Module[];
}

export function ModuleGrid({ 
  modules, 
  onDragStart, 
  onAddToBasket,
  onRemoveFromBasket,
  selectedModules 
}: ModuleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:pb-0 pb-32">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          onDragStart={onDragStart}
          onAddToBasket={onAddToBasket}
          onRemoveFromBasket={onRemoveFromBasket}
          isInBasket={selectedModules.some(m => m.id === module.id)}
        />
      ))}
    </div>
  );
}