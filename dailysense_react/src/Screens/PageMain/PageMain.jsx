import React from 'react'
import { useLocation } from 'react-router-dom';
import { PageMainHeader } from './Header/PageMainHeader';
import { PageMainBody } from './Body/PageMainBody';
export const PageMain = () => {
  const location = useLocation();
  console.log(location.state.avatar);
  return (
    <div className="MainContainer">
      <PageMainHeader avatar={location.state.avatar} headerHeight={15} headerWidth={100} name={location.state.name} />
      <PageMainBody bodyHeight={85} bodyWidth={100} />
    </div>
  )
}
