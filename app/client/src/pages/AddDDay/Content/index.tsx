import React, { useState } from 'react';
import { DDayAddPayload } from '../../../interfaces';

export function Content() {
  const [form, setForm] = useState<DDayAddPayload>({
    title: '',
    endDate: new Date(),
  });

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
