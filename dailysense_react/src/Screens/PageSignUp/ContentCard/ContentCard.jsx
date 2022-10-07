import React from 'react';
import './ContentCard.css';
import { ColPhoto } from '../colPhoto/ColPhoto';
import { ColInfo } from '../colInfo/ColInfo';

const photoSignUp = require('../../../Assets/LOGOS DAILYSENSE/YELLOW.png');
const photoSignIn = require('../../../Assets/LOGOS DAILYSENSE/BLUE.png');
export const ContentCard = ({ CardHeight, CardWidth, backgroundColor, borderRadius, type }) => {

  const style = {
    height: CardHeight + 'vh',
    width: CardWidth + '%',
    backgroundColor: backgroundColor,
    borderRadius: borderRadius + 'px',
  }

  if (type === 'SignUp') {
    return (
      <div className="contentCard" style={style}>
        <ColInfo backgroundColor='#FFF' ColWidth={50} type={type} logo={photoSignUp} />
      </div>
    )
  } else if (type === 'SignIn') {
    return (
      <div className="contentCard" style={style}>
        <ColInfo backgroundColor='#FFF' ColWidth={50} type={type} />
        <ColPhoto logo={photoSignIn} />
      </div>
    );
  }
}
