import React from 'react';
import { CheckIcon } from '../../../icons/CheckIcon';
import { SettingButton } from './components/SettingButton';

export function Header() {
  return (
    <div className="flex p-3">
      <div className="mr-2 flex">
        <CheckIcon />
      </div>

      <h1 className="text-3xl font-bold">Get Your D-Day!</h1>

      <div className="ml-auto">
        <SettingButton />
      </div>
    </div>
  );
}
