import React from 'react';
import { X } from 'lucide-react';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { useNavigate, useLocation } from 'react-router-dom';

export function ModuleBasket() {
  const { selectedModules, removeModule } = useModuleBasket();
  const navigate = useNavigate();
  const location = useLocation();

  if (selectedModules.length === 0) return null;

  const handleContinue = () => {
    // If we're on a specific product page, go to main page with questions step
    if (location.pathname !== '/') {
      navigate('/?step=questions');
    } else {
      // If we're already on main page, handle step progression there
      const params = new URLSearchParams(location.search);
      const currentStep = params.get('step') || 'selection';
      
      const nextStep = currentStep === 'selection' ? 'questions' : 
                      currentStep === 'questions' ? 'review' : 'review';
      
      navigate(`/?step=${nextStep}`);
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#323130] mb-4">
              Wybrane moduły ({selectedModules.length})
            </h2>
            <div className="space-y-4">
              {selectedModules.map((module) => (
                <div
                  key={module.id.toString()}
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
                    onClick={() => removeModule(module.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={`Usuń ${module.name}`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <button
                onClick={() => navigate('/')}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-semibold"
              >
                Wróć
              </button>
              <button
                onClick={handleContinue}
                className="w-full px-4 py-2 bg-[#0078d4] text-white rounded-md hover:bg-[#106ebe] transition-colors font-semibold"
              >
                Kontynuj
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Bottom Fixed Grid */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-3 pt-3 pb-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 justify-items-center">
            {selectedModules.map((module) => (
              <div key={module.id.toString()} className="relative">
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
                  onClick={() => removeModule(module.id)}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center"
                  aria-label={`Usuń ${module.name}`}
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/')}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-semibold"
            >
              Wróć
            </button>
            <button
              onClick={handleContinue}
              className="w-full px-4 py-2 bg-[#0078d4] text-white rounded-md hover:bg-[#106ebe] transition-colors font-semibold"
            >
              Kontynuj
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
