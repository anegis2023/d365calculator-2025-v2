import React from 'react';
import { ModuleSelection } from '../types';

interface TotalUsersSummaryProps {
  moduleSelections: ModuleSelection[];
  className?: string;
}

export function TotalUsersSummary({ moduleSelections, className = '' }: TotalUsersSummaryProps) {
  const totalUsers = moduleSelections.reduce((total, selection) => total + selection.users, 0);

  if (totalUsers === 0) return null;

  return (
    <div className={`w-full lg:w-auto lg:min-w-[300px] bg-white rounded-xl shadow-lg p-4 lg:p-6 flex-shrink-0 ${className}`}>
      <h3 className="text-lg lg:text-xl font-semibold text-[#323130] mb-3 lg:mb-4">Łączna liczba użytkowników</h3>
      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
        <div>
          <p className="text-sm text-[#605e5c] mb-1">Wszyscy użytkownicy</p>
          <p className="text-2xl lg:text-3xl font-semibold text-[#323130]">
            {totalUsers}
          </p>
        </div>
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0078d4] rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
