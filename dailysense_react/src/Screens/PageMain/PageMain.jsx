import React from 'react'
import { useLocation } from 'react-router-dom';
import { PageMainHeader } from './Header/PageMainHeader';
import { PageMainBody } from './Body/PageMainBody';
export const PageMain = () => {
  const location = useLocation();
  return (
    <div className="MainContainer">
      <PageMainHeader email={location.state.email} password={location.state.password} backgroundColor='#EDEADE' avatar={location.state.avatar} headerHeight={15} headerWidth={100} name={location.state.name} />
      <PageMainBody backgroundColor='#EDEADE' email={location.state.email} bodyHeight={85} bodyWidth={100} />
    </div>
  )
}
