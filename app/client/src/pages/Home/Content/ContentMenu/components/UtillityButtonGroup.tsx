import {
  ArrowUpTrayIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { Button } from '../../../../../components/Button';

export function UtilityButtonGroup() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('없는 기능입니다.');
  };

  return (
    <div className="flex gap-3">
      <Button onClick={clickHandler} type="button">
        <ArrowUpTrayIcon className="w-6 h-6" />
      </Button>

      <Button onClick={clickHandler} type="button">
        <EllipsisHorizontalIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
