import React, { useState } from 'react';
import { SubMenuButton } from './components/SubMenuButton';

export function Submenu() {
  const menus = ['디데이', '더보기'];

  const [selectedMenu, setSelectedMenu] = useState<string>('디데이');
  const menuClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    setSelectedMenu(value);
  };

  return (
    <div className="flex gap-2">
      {menus.map((menu) => (
        <SubMenuButton
          key={menu}
          name={menu}
          onClick={menuClickHandler}
          selectedMenu={selectedMenu}
        />
      ))}
    </div>
  );
}
