import React from 'react';
import { DDay } from '../../../../../../interfaces';

interface Iprops {
  dDay: DDay
}

export function Title(props: Iprops) {
  const { dDay } = props;

  return (
    <div
      className='flex gap-2'
    >
      <img
        className='w-12 h-12'
        src='/imgs/calander.png'
        alt='calander'
      />

      <div className='flex flex-col gap-1 text-left'>
        <div>{dDay.title}</div>
        <div>{dDay.endDate.toString()}</div>
      </div>
    </div>
  );
}