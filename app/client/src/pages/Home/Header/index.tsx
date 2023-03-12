import React from 'react';
import { CheckIcon } from '../../../icons/CheckIcon';
import { SettingButton } from './components/SettingButton';
import { Submenu } from './SubMenu';

interface Iprops {
  subMenus: string[];
  menuClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedMenu: string;
}

export function Header(props: Iprops) {
  return (
    <div className="flex flex-col gap-2 bg-gray-800 text-white">
      <div className="flex p-3 h-12 items-center">
        <div className="mr-2">
          <CheckIcon />
        </div>

        <h1 className="text-3xl font-bold">Get Your D-Day!</h1>

        <div className="ml-auto">
          <SettingButton />
        </div>
      </div>

      <div className="flex h-12 px-6 items-center">
        <Submenu
          menus={props.subMenus}
          selectedMenu={props.selectedMenu}
          menuClickHandler={props.menuClickHandler}
        />
      </div>
    </div>
  );
}
