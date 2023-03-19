import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button';

export function ControlMenu() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const saveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('개발중');
  };

  return (
    <div className="flex justify-between font-bold">
      <Button onClick={goHome}>
        <XMarkIcon className="w-6 h-6" />
      </Button>
      <Button className="" onClick={saveHandler} type="button">
        저장
      </Button>
    </div>
  );
}
