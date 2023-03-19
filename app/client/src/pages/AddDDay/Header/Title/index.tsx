import { PhotoIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Button } from '../../../../common/Button';

export function Title() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('없는 기능');
  };

  return (
    <div className="relative flex flex-1 justify-center items-center">
      <div className="font-bold text-6xl">D-366</div>
      <Button onClick={clickHandler}>
        <PhotoIcon className="absolute right-4 bottom-4 w-5 h-5 text-white" />
      </Button>
    </div>
  );
}
