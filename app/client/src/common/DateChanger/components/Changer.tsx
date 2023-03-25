import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../../Button';

interface IProps {
  type: 'year' | 'month' | 'day';
  changeHandler: () => void;
  curValue: number;
}

const listTypeMap = {
  year: new Array(203).fill(null).map((_, index) => {
    if (index === 0) return 0;
    if (index === 202) return 9999;
    return index + 1899;
  }),
  month: [12],
  day: [1],
};

export function Changer(props: IProps) {
  const { type, changeHandler, curValue } = props;
  const ref = useRef<HTMLDivElement>(null);

  const [centerValue, setCenterValue] = useState<number>(curValue);

  useEffect(() => {
    if (ref.current) {
      const targetIndex = lists.findIndex((list) => list === curValue);
      const containerHeight = ref.current.offsetHeight;
      const itemHeight = ref.current.querySelector('button')?.offsetHeight;

      if (itemHeight !== undefined && containerHeight !== undefined) {
        const scrollTop =
          targetIndex * itemHeight + itemHeight / 2 - containerHeight / 2;

        ref.current.scrollTop = scrollTop;
        setCenterValue(curValue);
      }
    }
  }, []);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    if (ref.current) {
      const containerHeight = ref.current.offsetHeight;
      const itemHeight = ref.current.querySelector('button')?.offsetHeight;

      if (itemHeight !== undefined && containerHeight !== undefined) {
        const scrollTop = ref.current.scrollTop;
        const centerIndex = Math.round(scrollTop / itemHeight) + 1;
        setCenterValue(lists[centerIndex]);
      }
    }
  };

  const lists = useMemo<number[]>(() => {
    return listTypeMap[type];
  }, [type]);

  return (
    <div className="relative w-40 h-full">
      <div className="absolute w-40 h-[2px] top-1/3 border w-full" />
      <div className="absolute w-40 h-[2px] top-2/3 border w-full" />

      <div
        className="w-full overflow-y-auto no-scroll
      flex flex-col h-[159px] snap-y"
        onScroll={scrollHandler}
        ref={ref}
      >
        {lists.map((list) => (
          <Button
            key={list}
            className="h-1/3 flex w-full snap-center
              items-center justify-center py-3 text-white"
            disabled={[0, 9999].includes(list)}
          >
            <span
              className={`
              ${[0, 9999].includes(list) ? 'text-transparent' : ''}
              font-bold text-2xl
              `}
            >
              {list}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
