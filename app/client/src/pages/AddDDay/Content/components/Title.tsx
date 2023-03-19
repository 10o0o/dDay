import React from 'react';

interface IProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Title(props: IProps) {
  return (
    <div className="py-4 border-b border-slate-600">
      <div className="w-full flex justify-between h-12">
        <input
          className="bg-gray-700 flex-1 outline-0 h-full"
          onChange={props.changeHandler}
          placeholder="디데이 제목을 입력해주세요"
          autoFocus
        />

        <img className="w-12 h-12" src="/imgs/calander.png" alt="calander" />
      </div>
    </div>
  );
}
