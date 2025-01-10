import React from 'react';
import { ModuleBasket } from './ModuleBasket';
import { useModuleBasket } from '../context/ModuleBasketContext';

interface DynamicsPageLayoutProps {
  children: React.ReactNode;
}

export function DynamicsPageLayout({ children }: DynamicsPageLayoutProps) {
  const { selectedModules } = useModuleBasket();
  const hasModules = selectedModules.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className={`grid ${hasModules ? 'lg:grid-cols-[1fr_300px]' : 'grid-cols-1'} gap-8`}>
        <main className="min-w-0">
          {children}
        </main>
        <aside className="h-fit sticky top-4">
          <ModuleBasket />
        </aside>
      </div>
    </div>
  );
}
