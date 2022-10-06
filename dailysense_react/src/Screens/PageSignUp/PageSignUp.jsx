import React from 'react';
import './PageSignUp.css';
import { Mask } from '../PageSignUp/Mask/Mask';
export const PageSignUp = ({ SignUpHeight, SignUpWidth, backgroundColor }) => {

  const style = {
    height: SignUpHeight + 'vh',
    width: SignUpWidth + '%',
    backgroundColor: backgroundColor,
  }
  console.log();
  return (
    <div className="PageSignUpContainer" style={style}>
      <Mask opacity={0.8} type='SignUp' />
    </div>
  )
}
