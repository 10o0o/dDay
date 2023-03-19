import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Button } from '../../../../components/Button';

export function ControlMenu() {
  return (
    <div className="flex justify-between">
      <XMarkIcon />
      <Button className="font-bold">저장</Button>
    </div>
  );
}
