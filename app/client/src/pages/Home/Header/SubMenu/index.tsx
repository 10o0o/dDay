import React, { useState } from 'react';
import { SubMenuButton } from './components/SubMenuButton';

interface Iprops {
  menus: string[];
  menuClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedMenu: string;
}

export function Submenu(props: Iprops) {
  return (
    <div className="flex gap-2">
      {props.menus.map((menu) => (
        <SubMenuButton
          key={menu}
          name={menu}
          onClick={props.menuClickHandler}
          selectedMenu={props.selectedMenu}
        />
      ))}
    </div>
  );
}
