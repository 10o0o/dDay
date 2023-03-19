import React, { useState } from 'react';
import { DDayAddPayload } from '../../../interfaces';

interface IProps {
  form: DDayAddPayload;
  setForm: (payload: DDayAddPayload) => void;
}

export function Content(props: IProps) {
  return (
    <div
      className="relative flex-1 justify-center items-center
      rounded-lg bg-gray-700 p-6
    "
    >
      contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
    </div>
  );
}
