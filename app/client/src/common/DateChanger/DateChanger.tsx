import React from 'react';
import { Changer } from './components/Changer';

interface IProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export function DateChanger(props: IProps) {
  const { selectedDate, setSelectedDate } = props;

  const changeHandler = (type: string, value: number) => {
    const date = new Date(selectedDate);

    if (type === 'year') {
      date.setFullYear(value);
    } else if (type === 'month') {
      date.setMonth(value);
    } else if (type === 'day') {
      date.setDate(value);
    }

    setSelectedDate(date);
    // TODO
  };

  return (
    <div className="border flex gap-8 justify-center relative">
      <Changer
        type="year"
        changeHandler={changeHandler}
        curValue={props.selectedDate.getFullYear()}
      />
      <div>dateChanger</div>
      <div>dateChanger</div>
    </div>
  );
}
