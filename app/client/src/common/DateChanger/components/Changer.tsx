import React, { useEffect, useMemo, useRef, useState } from 'react';

interface IProps {
  type: 'year' | 'month' | 'day';
  changeHandler: () => void;
  curValue: number;
}

const listTypeMap = {
  year: new Array(201).fill(null).map((_, index) => index + 1900),
  month: [12],
  day: [1],
};

export function Changer(props: IProps) {
  const { type, changeHandler, curValue } = props;
  const ref = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newScrollPosition = scrollPosition + e.deltaY;
    setScrollPosition(newScrollPosition);
    setScrollVelocity(e.deltaY);
    setIsScrolling(true);
  };

  useEffect(() => {
    let rafId: number;
    let lastScrollTime = Date.now();

    const updatePosition = () => {
      const now = Date.now();
      const elapsed = now - lastScrollTime;
      lastScrollTime = now;

      const factor = Math.exp(-elapsed / 300);
      const newScrollPosition =
        scrollPosition + (scrollVelocity * (1 - factor)) / 60;

      if (Math.abs(scrollVelocity) > 0.1) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        setIsScrolling(false);
      }

      setScrollPosition(newScrollPosition);
      setScrollVelocity(scrollVelocity * factor);
    };

    if (isScrolling) {
      rafId = requestAnimationFrame(updatePosition);
    }

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isScrolling, scrollPosition, scrollVelocity]);

  useEffect(() => {
    if (ref.current) {
      const targetIndex = lists.findIndex((list) => list === curValue);
      const containerHeight = ref.current.offsetHeight;
      const itemHeight = ref.current.querySelector('div')?.offsetHeight;

      if (itemHeight !== undefined && containerHeight !== undefined) {
        const scrollTop =
          targetIndex * itemHeight + itemHeight / 2 - containerHeight / 2;
        // scrollLeft 값을 스크롤 컨테이너에 할당합니다.
        ref.current.scrollTop = scrollTop;
      }
    }
  }, []);

  const lists = useMemo<number[]>(() => {
    return listTypeMap[type];
  }, [type]);

  return (
    <div
      className="w-20 overflow-y-auto h-40 flex flex-col no-scroll"
      onWheel={handleWheel}
    >
      {lists.map((list) => (
        <div
          key={list}
          className="flex items-center justify-center border-b-2 
        border-gray-400 py-3 text-white"
        >
          <div>{list}</div>
        </div>
      ))}
    </div>
  );
}
