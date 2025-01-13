import React, { useState } from 'react';
import { Module, ModuleSelection } from '../types';
import { modules } from '../data/modules';

interface AdminModuleReviewProps {
  submission: {
    id: string;
    created_at: string;
    selected_modules: {
      moduleId: number;
      users: number;
      answers?: Record<string, { response: string; count?: number }>;
      sharedUsers?: { targetModuleId: number; count: number }[];
    }[];
  };
  onClose: () => void;
}

export function AdminModuleReview({ submission, onClose }: AdminModuleReviewProps) {
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswers = (moduleId: number) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-[1280px] w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Szczegóły zgłoszenia</h2>
            <p className="text-gray-600">
              Data zgłoszenia: {new Date(submission.created_at).toLocaleString('pl-PL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              }).replace(',', '')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Total Users Summary Card */}
        <div className="w-full bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <h3 className="text-lg lg:text-xl font-semibold text-[#323130] mb-3 lg:mb-4">
            Łączna liczba użytkowników
          </h3>
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div>
              <p className="text-sm text-[#605e5c] mb-1">Wszyscy użytkownicy</p>
              <p className="text-2xl lg:text-3xl font-semibold text-[#323130]">
                {submission.selected_modules.reduce((total: number, selection: any) => total + selection.users, 0)}
              </p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0078d4] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className={`grid gap-4 lg:gap-8 mx-auto w-full ${
          submission.selected_modules.length === 1 
            ? 'max-w-3xl' 
            : submission.selected_modules.length === 2 
              ? 'max-w-5xl grid-cols-1 lg:grid-cols-2' 
              : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
        }`}>
          {submission.selected_modules.map((selection: any) => {
            const module = modules.find(m => m.id === selection.moduleId);
            if (!module) return null;

            return (
              <div key={selection.moduleId} className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                submission.selected_modules.length === 1 ? 'max-w-3xl mx-auto w-full' : ''
              }`}>
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] p-4 lg:p-6 min-h-[90px] lg:min-h-[120px] flex items-center">
                  <div className="flex items-start gap-3 lg:gap-4 w-full">
                    {module.imageUrl && (
                      <img
                        src={module.imageUrl}
                        alt={module.name}
                        className="w-10 h-10 lg:w-12 lg:h-12 object-contain bg-white rounded-lg p-2 flex-shrink-0"
                      />
                    )}
                    <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">{module.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 flex-1 flex flex-col">
                  {/* Users Section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#605e5c] mb-1">Liczba użytkowników</p>
                        <p className="text-2xl lg:text-3xl font-semibold text-[#323130]">{selection.users}</p>
                      </div>
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0078d4] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shared Users Section */}
                  {selection.sharedUsers && selection.sharedUsers.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-base font-medium text-[#323130] mb-3">Użytkownicy współdzieleni</h4>
                      <div className="space-y-2">
                        {selection.sharedUsers.map((shared: any) => {
                          const targetModule = modules.find(m => m.id === shared.targetModuleId);
                          return (
                            <div key={shared.targetModuleId} className="flex items-center gap-3 text-sm text-[#605e5c]">
                              <div className="w-2 h-2 rounded-full bg-[#0078d4]" />
                              <span>
                                {shared.count} {shared.count === 1 ? 'użytkownik korzysta również z' : 'użytkowników korzysta również z'} {targetModule?.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Answers Section */}
                  <div className="space-y-4 mt-auto">
                    <button
                      onClick={() => toggleAnswers(selection.moduleId)}
                      className="w-full flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-medium text-[#323130]">Odpowiedzi</h4>
                        <span className="text-sm text-[#605e5c]">
                          ({module.questions.length} {module.questions.length === 1 ? 'pytanie' : 'pytań'})
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-[#323130] transform transition-transform ${
                          expandedAnswers[selection.moduleId] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {expandedAnswers[selection.moduleId] && (
                      <div className="grid grid-cols-1 gap-4 animate-fadeIn">
                        {module.questions.map((question) => {
                          const answer = selection?.answers?.[question.id];
                          return (
                            <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm font-medium text-[#323130] mb-2">{question.text}</p>
                              {answer ? (
                                <div className="space-y-1">
                                  <p className="text-sm text-[#605e5c]">
                                    <span className="font-medium">Odpowiedź:</span> {answer.response}
                                  </p>
                                  {answer.count !== undefined && (
                                    <p className="text-sm text-[#605e5c]">
                                      <span className="font-medium">Użytkownicy:</span> {answer.count}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <p className="text-sm text-red-500">Brak odpowiedzi</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}
