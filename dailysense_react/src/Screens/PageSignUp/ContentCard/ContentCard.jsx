import React from 'react';
import './ContentCard.css';
import { colPhoto } from '../colPhoto/colPhoto';
export const ContentCard = ({CardHeight, CardWidth, backgroundColor, borderRadius}) => {

    const style = {
        height: CardHeight + 'vh',
        width: CardWidth + '%',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius + 'px',
    }

  return (
    <div className="contentCard" style={style}>
        <div className="colInfo">
          
        </div>
        <colPhoto />
    </div>
  )
}
