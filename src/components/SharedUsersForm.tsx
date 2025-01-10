import React from 'react';
import { Module } from '../types';

interface SharedUsers {
  targetModuleId: number;
  count: number;
}

interface SharedUsersFormProps {
  users: number;
  onUsersChange: (users: number) => void;
  sharedUsers: SharedUsers[];
  onSharedUsersChange: (sharedUsers: SharedUsers[]) => void;
  otherModules: Module[];
}

export function SharedUsersForm({
  users,
  onUsersChange,
  sharedUsers,
  onSharedUsersChange,
  otherModules
}: SharedUsersFormProps) {
  const handleSharedUsersChange = (targetModuleId: number, count: number) => {
    // Ensure count is not negative
    if (count < 0) count = 0;
    
    // Ensure count doesn't exceed total users
    if (count > users) count = users;

    const newSharedUsers = [...sharedUsers];
    const existingIndex = newSharedUsers.findIndex(
      (su) => su.targetModuleId === targetModuleId
    );

    if (existingIndex >= 0) {
      if (count === 0) {
        newSharedUsers.splice(existingIndex, 1);
      } else {
        newSharedUsers[existingIndex] = { targetModuleId, count };
      }
    } else if (count > 0) {
      newSharedUsers.push({ targetModuleId, count });
    }

    onSharedUsersChange(newSharedUsers);
  };

  return (
    <div className="space-y-6 mb-8">
      <div>
        <label className="block text-base font-semibold text-[#323130] mb-2">
          Liczba użytkowników
        </label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            min="1"
            value={users}
            onChange={(e) => onUsersChange(Math.max(1, parseInt(e.target.value) || 0))}
            onFocus={(e) => e.target.value = ''}
            className="ms-input block w-32 text-base"
          />
          <span className="text-sm text-[#605e5c]">{users === 1 ? 'użytkownik' : 'użytkowników'}</span>
        </div>
      </div>

      {users > 0 && otherModules.length > 0 && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-[#323130]">
              Użytkownicy korzystający z innych modułów:
            </h3>
            <p className="mt-1 text-sm text-[#605e5c]">
              Określ, ilu użytkowników będzie również korzystać z poniższych modułów:
            </p>
          </div>
          
          <div className="space-y-4">
            {otherModules.map((module) => {
              const shared = sharedUsers.find(
                (su) => su.targetModuleId === module.id
              );
              return (
                <div key={module.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-[#323130]">
                      {module.name}
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="0"
                      max={users}
                      value={shared?.count || 0}
                      onChange={(e) => 
                        handleSharedUsersChange(
                          module.id,
                          parseInt(e.target.value) || 0
                        )
                      }
                      onFocus={(e) => e.target.value = ''}
                      className="ms-input block w-24 text-sm"
                    />
                    <span className="text-sm text-[#605e5c]">{(shared?.count || 0) === 1 ? 'użytkownik' : 'użytkowników'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}