import React from 'react';
import { Dropdown } from '../../../components/Dropdown';

export function GroupFilterDropdown() {
  const groups = ['아직', '기능이', '없어요'];

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('기능이 아직 없음');
  };

  return <Dropdown onClick={clickHandler} elements={groups} title="전체" />;
}
