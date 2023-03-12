import React from 'react';
import { ContentMenu } from './ContentMenu';
import { DDayList } from './DDayList';

interface Iprops {
  selectedMenu: string;
}

export function Content(props: Iprops) {

  if (props.selectedMenu === '디데이') {
    return (
      <>
        <ContentMenu />
        <DDayList />
      </>
    )
  }

  if (props.selectedMenu === '더보기') {
    return <div>개발중</div>;
  }

  return (
    <div>오류 페이지</div>
  );
}