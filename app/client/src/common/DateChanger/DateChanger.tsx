import React from 'react';
import { Changer } from './components/Changer';

interface IProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export function DateChanger(props: IProps) {
  const changeHandler = () => {
    // TODO
  };

  return (
    <div className="border flex gap-8 justify-center">
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
