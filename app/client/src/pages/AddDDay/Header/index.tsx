import React from 'react';
import { DDayAddPayload } from '../../../interfaces';
import { ControlMenu } from './ControlMenu';
import { Title } from './Title';

interface IProps {
  form: DDayAddPayload;
  setForm: (payload: DDayAddPayload) => void;
}

export function Header(props: IProps) {
  return (
    <div className="bg-gray-600 h-52 flex flex-col p-6">
      <ControlMenu form={props.form} />
      <Title />
    </div>
  );
}
