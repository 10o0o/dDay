import React, { useMemo } from 'react';

interface IProps {
  name: string;
  selectedMenu: string | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function SubMenuButton(props: IProps) {
  const buttonClass = useMemo(() => {
    let defaultClassName = 'p-2 ';

    if (props.selectedMenu === props.name) {
      defaultClassName += 'border-b border-b-2 border-white';
    } else {
      defaultClassName += 'text-slate-500';
    }

    return defaultClassName;
  }, [props.selectedMenu]);

  return (
    <button
      className={buttonClass}
      type="button"
      value={props.name}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
