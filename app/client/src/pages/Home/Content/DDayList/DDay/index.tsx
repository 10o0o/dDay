import React from 'react';
import { Button } from '../../../../../components/Button';
import { DDay } from '../../../../../interfaces';
import { Title } from './components/Title';

interface Iprops {
  dDay: DDay
}

export function DDayComponent(props: Iprops) {
  const { dDay } = props;

  return (
    <Button
      className='w-full bg-gray-800 text-white p-4 
      flex flex-col justify-between rounded-lg h-52
      border'
    >
      <Title dDay={dDay} />
      <div>id: {dDay.id}</div>
      <div>title: {dDay.title}</div>
      <div>leftDays: {dDay.leftDays}</div>
      <div>endDate: {dDay.endDate.toString()}</div>
    </Button>
  );
}