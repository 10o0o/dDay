import React from 'react';
import { DDayAddPayload } from '../../../interfaces';
import { ChooseDateSection } from './ChooseDateSection';
import { Title } from './components/Title';

interface IProps {
  form: DDayAddPayload;
  setForm: (payload: DDayAddPayload) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Content(props: IProps) {
  return (
    <div
      className="relative flex-1 flex flex-col
      rounded-lg bg-gray-700 p-6
    "
    >
      <Title changeHandler={props.changeHandler} />
      <ChooseDateSection form={props.form} setForm={props.setForm} />
    </div>
  );
}
