import React from 'react';
import './ContentCard.css';
import { ColPhoto } from '../colPhoto/ColPhoto';
import { ColInfo } from '../colInfo/ColInfo';

const photo = require('../../../Assets/LOGOS DAILYSENSE/YELLOW.png');
export const ContentCard = ({CardHeight, CardWidth, backgroundColor, borderRadius}) => {

    const style = {
        height: CardHeight + 'vh',
        width: CardWidth + '%',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius + 'px',
    }

  return (
    <div className="contentCard" style={style}>
        <ColInfo backgroundColor='#FFF' ColWidth={50} />
        <ColPhoto logo={photo} />
    </div>
  )
}
