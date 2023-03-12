import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingIcon } from '../../../../icons/SettingIcon';

export function SettingButton() {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/to-be-developed');
  };

  return (
    <button onClick={clickHandler}>
      <SettingIcon />
    </button>
  );
}
