import React from 'react';
import { Question, QuestionAnswer, QuestionResponse } from '../types';

interface QuestionFormProps {
  question: Question;
  moduleUsers: number;
  value?: QuestionAnswer;
  onChange: (value: QuestionAnswer) => void;
}

export function QuestionForm({ question, moduleUsers, value, onChange }: QuestionFormProps) {
  const handleResponseChange = (response: QuestionResponse) => {
    onChange({ 
      response, 
      count: response === 'Tak' ? undefined : undefined  
    });
  };

  const handleCountChange = (count: number) => {
    if (isNaN(count)) {
      onChange({ response: 'Tak', count: undefined });
      return;
    }
    if (count < 1) count = 1;  
    if (count > moduleUsers && !question.id.includes('hr_shared_devices')) {
      count = moduleUsers;
    }
    onChange({ response: 'Tak', count });
  };

  return (
    <div className="mb-6 ms-card p-6">
      <div className="mb-4">
        <label className="block text-base font-semibold text-[#323130]">
          {question.text}
        </label>
        {question.explanation.includes('1.') ? (
          <div className="mt-3 text-sm text-[#605e5c] bg-[#faf9f8] p-4 rounded-md">
            {question.explanation.split('\n').map((line, index) => (
              <div key={index} className={`${line.match(/^\d+\./) ? 'ml-4 mb-2' : ''}`}>
                {line.trim()}
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-[#605e5c]">
            {question.explanation}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {!question.text.startsWith('Ilu użytkownikom') ? (
          <div className="flex gap-6">
            {(['Tak', 'Nie', 'Nie wiem'] as const).map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  value={option}
                  checked={value?.response === option}
                  onChange={() => handleResponseChange(option)}
                  className="ms-radio w-4 h-4"
                />
                <span className="text-[#323130]">{option}</span>
              </label>
            ))}
          </div>
        ) : null}

        {(value?.response === 'Tak' || question.text.startsWith('Ilu użytkownikom')) && moduleUsers > 0 && (
          <div className="mt-4">
            <label className="block text-base font-semibold text-[#323130]">
              {question.id === 'hr_shared_devices' ? 'Liczba urządzeń' : 
               question.text.startsWith('Ilu użytkownikom') ? 'Liczba użytkowników' : 
               'Liczba użytkowników wymagających tej funkcji'}
              <span className="text-sm font-normal text-[#605e5c] ml-2">
                {question.id === 'hr_shared_devices' ? '(Min: 1)' : `(Min: 1, Max: ${moduleUsers} ${moduleUsers === 1 ? 'użytkownik' : 'użytkowników'})`}
              </span>
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                type="number"
                value={value?.count === undefined ? '' : value.count}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    onChange({ response: 'Tak', count: undefined });
                  } else {
                    handleCountChange(parseInt(val, 10));
                  }
                }}
                onFocus={(e) => {
                  e.target.value = '';
                  onChange({ response: 'Tak', count: undefined });
                }}
                onBlur={(e) => {
                  const count = parseInt(e.target.value, 10);
                  if (isNaN(count) || count < 1) {
                    handleCountChange(1);
                  } else if (!question.id.includes('hr_shared_devices') && count > moduleUsers) {
                    handleCountChange(moduleUsers);
                  }
                }}
                min="1"
                max={question.id === 'hr_shared_devices' ? undefined : moduleUsers}
                className="ms-input block w-32 text-base"
              />
              <span className="text-sm text-[#605e5c]">
                {!question.id.includes('hr_shared_devices') && `/ ${moduleUsers} ${moduleUsers === 1 ? 'użytkownik' : 'użytkowników'}`}
              </span>
            </div>
            {!question.id.includes('hr_shared_devices') && (value?.count || 0) > moduleUsers && (
              <p className="mt-2 text-sm text-red-600">
                Liczba użytkowników nie może przekroczyć liczby użytkowników modułu ({moduleUsers}). Wartość zostanie automatycznie dostosowana.
              </p>
            )}
            {(value?.count || 0) < 1 && (
              <p className="mt-2 text-sm text-red-600">
                {question.id === 'hr_shared_devices'
                  ? 'Wymagane jest co najmniej 1 urządzenie.'
                  : 'Liczba użytkowników musi być przynajmniej 1.'}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}