import React from 'react';
import { GroupFilterDropdown } from './components/GroupFilterDropdown';
import { UtilityButtonGroup } from './components/UtillityButtonGroup';

export function ContentMenu() {
  return (
    <div className="flex justify-between w-full py-3">
      <GroupFilterDropdown />

      <UtilityButtonGroup />
    </div>
  );
}
