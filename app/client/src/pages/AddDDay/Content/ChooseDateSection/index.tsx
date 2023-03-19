import React, { useState } from 'react';
import { ChooseDate } from './ChooseDate';
import { TriggerButton } from './components/TriggerButton';
import { DDayAddPayload } from '../../../../interfaces';

interface IProps {
  form: DDayAddPayload;
  setForm: (form: DDayAddPayload) => void;
}

export function ChooseDateSection(props: IProps) {
  const [isChooseActive, setIsChooseActive] = useState<boolean>(false);

  const activeTriggerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsChooseActive(!isChooseActive);
  };

  const setSelectedDate = (date: Date) => {
    // TODO
    props.setForm({
      ...props.form,
      endDate: date,
    });
  };

  return (
    <div className="py-4 flex flex-col">
      <TriggerButton
        activeTriggerHandler={activeTriggerHandler}
        isChooseActive={isChooseActive}
      />

      {isChooseActive ? (
        <ChooseDate
          selectedDate={props.form.endDate}
          setSelectedDate={setSelectedDate}
        />
      ) : null}
    </div>
  );
}
