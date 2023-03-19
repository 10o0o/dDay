import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';

export function DDayAddButton() {
  return (
    <div className="absolute bottom-8 right-8 z-10">
      <Link to="/add-d-day">
        <Button
          className="bg-orange-400 hover:bg-orange-600 h-20 w-20 
          rounded-full flex items-center justify-center"
          type="button"
        >
          <PlusIcon className="w-6 h-6 font-black" fontWeight={1000} />
        </Button>
      </Link>
    </div>
  );
}
