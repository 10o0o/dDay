import React from 'react';
import { GroupFilterDropdown } from './components/GroupFilterDropdown';

export function ContentMenu() {
  return (
    <div className="flex justify-between w-full py-3">
      <GroupFilterDropdown />

      <div>기타 아이콘 모음</div>
    </div>
  );
}
