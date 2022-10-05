import React from 'react'
import { Text } from '../../stories/Text/Text';
import { Circle } from './Circle';
import { SmallLabel } from './SmallLabel';
const SocialGit = require('../../Assets/OTHER/github.png');
const SocialTrello = require('../../Assets/OTHER/trello.png');
const SocialFigma = require('../../Assets/OTHER/figma.png');
export const PageInfoFooter = ({ footerHeight, footerWidth, backgroundColor, logo }) => {

    const style = {
        height: footerHeight + 'vh',
        width: footerWidth + '%',
        backgroundColor: backgroundColor,
    }

    return (
        <footer style={style}>
            <div className="col1">
                <img src={logo} alt="" />
                <Text label='DAILYSENSE' fontSize={2.3} fontWeight={800} color='white' />
            </div>
            <div className="col2">
                <Circle CircleHeight={65} CircleWidth={65} backgroundColor='white' borderColor='#EBCB44' logo={SocialGit} url='https://github.com/V1CTOR-cloud/REACT-Front-End_Challenge' />

                <Circle CircleHeight={65} CircleWidth={65} backgroundColor='white' borderColor='#4464EB' logo={SocialTrello} url='https://trello.com/b/wP79ZlxE/react-challenge' />

                <Circle CircleHeight={65} CircleWidth={65} backgroundColor='white' borderColor='#EB44B7' logo={SocialFigma} url='https://www.figma.com/file/TAPKVzws3AOd9Q2oHkT71Z/DailySense-REACT?node-id=1%3A3' />
            </div>
            <SmallLabel label='DailySense Team - 2022' backgroundColor={backgroundColor} color='white' fontSize={0.8} />
        </footer>
    )
}
