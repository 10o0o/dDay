import React from 'react';
import { Button } from '../../../../../common/Button';
import { DateChanger } from '../../../../../common/DateChanger/DateChanger';

interface IProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export function ChooseDate(props: IProps) {
  return (
    <div className="relative">
      <div className="px-20 py-16 border">
        <DateChanger
          selectedDate={props.selectedDate}
          setSelectedDate={props.setSelectedDate}
        />
      </div>
      <div className="absolute right-0 top-0">
        <Button
          noHover
          className="border border-slate-500 text-slate-500 p-1 rounded"
        >
          달력으로 보기
        </Button>
      </div>
    </div>
  );
}
