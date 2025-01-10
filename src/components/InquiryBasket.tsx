import React from 'react';
import { Module } from '../types';
import { X } from 'lucide-react';

interface InquiryBasketProps {
  modules: Module[];
  onRemove: (moduleId: number) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onContinue: () => void;
}

export function InquiryBasket({ modules, onRemove, onDrop, onDragOver, onContinue }: InquiryBasketProps) {
  return (
    <>
      {/* Desktop Basket */}
      <div 
        className="hidden md:block sticky top-[88px]"
        style={{ height: 'fit-content' }}
      >
        <div 
          className="bg-white rounded-lg shadow-sm p-6"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <h2 className="text-xl font-semibold text-[#323130] mb-4">
            Wybrane moduły {modules.length > 0 && `(${modules.length})`}
          </h2>
          {modules.length === 0 ? (
            <div className="flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-sm text-gray-500 text-center px-4">
                Przeciągnij tutaj wybrane moduły, aby dodać je do kalkulacji.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-md"
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
                  <button
                    onClick={() => onRemove(module.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
          {modules.length > 0 && (
            <button
              onClick={onContinue}
              className="w-full mt-6 px-4 py-2 bg-[#0078d4] text-white rounded-md hover:bg-[#106ebe] transition-colors font-semibold"
            >
              Kontynuuj
            </button>
          )}
        </div>
      </div>

      {/* Mobile Basket */}
      {modules.length > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-3 pt-3 pb-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col gap-3">
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 justify-items-center">
              {modules.map((module) => (
                <div key={module.id} className="relative">
                  {module.imageUrl ? (
                    <img
                      src={module.imageUrl}
                      alt={module.name}
                      className="w-9 h-9 object-contain rounded-full bg-gray-50"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500">
                        {module.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => onRemove(module.id)}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={onContinue}
              className="w-full px-4 py-2.5 bg-[#0078d4] text-white rounded-md hover:bg-[#106ebe] transition-colors font-semibold shadow-sm"
            >
              Kontynuuj
            </button>
          </div>
        </div>
      )}
    </>
  );
}