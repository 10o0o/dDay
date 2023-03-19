import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { DDayAddPayload } from '../../../../interfaces';
import { addDDay } from '../../../../store/reducers';

interface IProps {
  form: DDayAddPayload;
}

export function ControlMenu(props: IProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate('/');
  };

  const saveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(addDDay(props.form));
    alert('추가 완료');
    goHome();
  };

  return (
    <div className="flex justify-between font-bold">
      <Button onClick={goHome}>
        <XMarkIcon className="w-6 h-6" />
      </Button>
      <Button className="" onClick={saveHandler} type="button">
        저장
      </Button>
    </div>
  );
}
