import React from 'react';
import { Module } from '../types';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  module: Module;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, module: Module) => void;
  onAddToBasket: (module: Module) => void;
  onRemoveFromBasket?: (module: Module) => void;
  isInBasket?: boolean;
}

const getModuleUrl = (moduleName: string): string => {
  const urlMap: { [key: string]: string } = {
    'Dynamics 365 Sales': '/dynamics-365-sales',
    'Dynamics 365 Finance': '/dynamics-365-finance',
    'Dynamics 365 Supply Chain Management': '/dynamics-365-supply-chain',
    'Dynamics 365 Field Service': '/dynamics-365-field-service',
    'Dynamics 365 Project Operations': '/dynamics-365-project-operations',
    'Dynamics 365 Customer Service': '/dynamics-365-customer-service',
    'Dynamics 365 Customer Insights': '/dynamics-365-customer-insights',
    'Dynamics 365 Commerce': '/dynamics-365-commerce',
    'Dynamics 365 Human Resources': '/dynamics-365-human-resources'
  };
  return urlMap[moduleName] || '#';
};

export function ModuleCard({ 
  module, 
  onDragStart, 
  onAddToBasket,
  onRemoveFromBasket,
  isInBasket = false 
}: ModuleCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, module)}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-move p-4 md:p-6 flex flex-col h-full relative"
    >
      <div className="flex items-start gap-4">
        {module.imageUrl && (
          <img
            src={module.imageUrl}
            alt={module.name}
            className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-[#323130] mb-2 break-words">
            {module.name}
          </h3>
          <p className="text-[#605e5c] text-sm leading-relaxed">
            {module.description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 md:pt-6 space-y-3">
        <div className="flex justify-between items-center">
          {/* Desktop Add/Remove Button */}
          <button
            className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
              isInBasket 
                ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                : 'bg-[#0078d4] text-white hover:bg-[#106ebe]'
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              isInBasket ? onRemoveFromBasket?.(module) : onAddToBasket(module);
            }}
          >
            {isInBasket ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
          <Link 
            to={getModuleUrl(module.name)}
            className="text-sm font-semibold text-[#0078d4] hover:text-[#106ebe] transition-colors"
          >
            Dowiedz się więcej →
          </Link>
        </div>

        {/* Mobile Add/Remove Button */}
        <button
          className={`md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-colors font-semibold ${
            isInBasket 
              ? 'bg-red-50 text-red-600 hover:bg-red-100' 
              : 'bg-[#0078d4] text-white hover:bg-[#106ebe]'
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            isInBasket ? onRemoveFromBasket?.(module) : onAddToBasket(module);
          }}
        >
          {isInBasket ? (
            <>
              <Minus className="w-5 h-5" />
              <span>Usuń z koszyka</span>
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span>Dodaj do koszyka</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}