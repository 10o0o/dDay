import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { DDayComponent } from './DDay';

export function DDayList() {
  const dDays = useSelector((state: RootState) => state.dDay.dDays);

  return (
    <div className="flex flex-col gap-2">
      {dDays.map((dDay) => (
        <DDayComponent key={dDay.id} dDay={dDay} />
      ))}
    </div>
  );
}
