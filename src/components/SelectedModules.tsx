import React from 'react';
import { Module } from '../types';
import { X } from 'lucide-react';

interface SelectedModulesProps {
  modules: Module[];
  onRemove?: (moduleId: number) => void;
}

export function SelectedModules({ modules, onRemove }: SelectedModulesProps) {
  if (modules.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-[#323130] mb-4">
        Wybrane moduły ({modules.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              {module.imageUrl && (
                <img
                  src={module.imageUrl}
                  alt={module.name}
                  className="w-8 h-8 object-contain"
                />
              )}
              <span className="text-sm font-medium text-[#323130] truncate">
                {module.name}
              </span>
            </div>
            {onRemove && (
              <button
                onClick={() => onRemove(module.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={`Usuń ${module.name}`}
              >
                <X size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
