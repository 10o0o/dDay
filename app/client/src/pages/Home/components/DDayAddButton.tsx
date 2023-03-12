import React from 'react';
import { Button } from '../../../components/Button';
import { PlusIcon } from '../../../icons/PlusIcon';

export function DDayAddButton() {
  return (
    <div
      className='absolute bottom-8 right-8 z-10'
    >
      <Button
        className='bg-orange-400 hover:bg-orange-600 h-20 w-20 
          rounded-full flex items-center justify-center'
        type='button'
      >
        <PlusIcon />
      </Button>
    </div>
  );
}