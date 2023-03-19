import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React, { useMemo } from 'react';
import { Button } from '../../../../../common/Button';

interface IProps {
  activeTriggerHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isChooseActive: boolean;
}

export function TriggerButton(props: IProps) {
  const buttonClass = useMemo(() => {
    let baseClassName = 'w-full flex justify-between h-12 items-center ';

    if (!props.isChooseActive) {
      baseClassName += 'text-white';
    }

    return baseClassName;
  }, [props.isChooseActive]);

  return (
    <Button className={buttonClass} onClick={props.activeTriggerHandler}>
      <div>날짜</div>
      <div className="flex gap-2">
        <div>날짜 렌더링</div>
        {props.isChooseActive ? (
          <ChevronUpIcon className="w-4 h-4 my-auto text-white" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 my-auto text-white" />
        )}
      </div>
    </Button>
  );
}
