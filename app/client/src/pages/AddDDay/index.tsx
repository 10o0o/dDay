import React, { useState } from 'react';
import { DDayAddPayload } from '../../interfaces';
import { Content } from './Content';
import { Header } from './Header';

export function AddDDay() {
  const [form, setForm] = useState<DDayAddPayload>({
    title: '',
    endDate: new Date(),
  });

  return (
    <div
      className="w-full h-full min-h-screen bg-gray-600 text-rose-500
      flex flex-col
    "
    >
      <Header form={form} setForm={setForm} />
      <Content form={form} setForm={setForm} />
    </div>
  );
}
