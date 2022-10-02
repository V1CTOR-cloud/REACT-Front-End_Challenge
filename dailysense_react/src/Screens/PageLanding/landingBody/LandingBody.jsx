import React from 'react'
import { BoxTitleLanding } from '../TitleBox/BoxTitleLanding';
import './LandingBody.css';
import { BlobBody } from '../../../stories/Blobs/BlobBody';
export const LandingBody = ({BodyHeight, BodyWidth}) => {

    const style = {
        height: BodyHeight + '%',
        width: BodyWidth + '%',
    }

  return (
    <div className="bodyContainer" style={style}>
        <BoxTitleLanding word1='Welcome' word2='To' word3='DailySense' Slogan='We help you to take care of your loved ones' cordY={5} cordX={26} />
        <BlobBody color='#EBCB44' />
    </div>
  )
}