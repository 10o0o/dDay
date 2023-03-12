import React from 'react';
import { Button } from '../../../../../components/Button';
import { EllipsisIcon } from '../../../../../icons/EllipsisIcon';
import { UplodaIcon } from '../../../../../icons/UploadIcon';

export function UtilityButtonGroup() {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('없는 기능입니다.');
  }

  return (
    <div
      className='flex gap-3'
    >
      <Button
        onClick={clickHandler}
        type='button'
      >
        <UplodaIcon />
      </Button>

      <Button
        onClick={clickHandler}
        type='button'
      >
        <EllipsisIcon />
      </Button>
    </div>
  );
}