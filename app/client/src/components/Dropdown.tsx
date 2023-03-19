import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
interface IProps {
  elements: string[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

export function Dropdown(props: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex gap-1">
        {isOpen ? (
          <ChevronDownIcon className="w-5 h-5 my-auto" />
        ) : (
          <ChevronRightIcon className="w-5 h-5 my-auto" />
        )}

        <button onClick={buttonClickHandler}>{props.title}</button>
      </div>

      {isOpen ? (
        <React.Fragment>
          <div className="absolute flex flex-col z-10 bg-gray-200 w-56 p-4">
            {props.elements.map((element) => (
              <button
                key={element}
                onClick={props.onClick}
                className="border-b border-b-black"
                type="button"
              >
                {element}
              </button>
            ))}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}
