import React from 'react'
import './PageInfo.css';
import { PageInfoContent } from './PageInfoContent/PageInfoContent';
import { PageInfoFooter } from './PageInfoFooter';
const headerPhoto = require('../../Assets/OTHER/1-2.jpg');
const bodyPhoto = require('../../Assets/OTHER/6.jpg');
const logo = require('../../Assets/LOGOS DAILYSENSE/BLUE PNG.png');
export const PageInfo = ({ InfogHeight, InfoWidth, backgroundColor }) => {

    const style = {
        height: InfogHeight + 'vh',
        width: InfoWidth + '%',
        backgroundColor: backgroundColor,
    }

    return (
        <>
            <div className="Info_Container" style={style}>
                <PageInfoContent type='header' backgroundColor='white' photo={headerPhoto} title='DailySense tool' description='Say goodbye to paper documents, now you can manage the care of your loved ones using the DailySense tool.' />
                <PageInfoContent type='footer' backgroundColor='white' photo={bodyPhoto} title='Run it everywhere' description='Whether you work in a company or have someone to take care of, DailySense is for you, offering both web and mobile.' />
            </div>
            <PageInfoFooter footerHeight={35} footerWidth={100} backgroundColor='#4464EB' logo={logo} />
        </>
    )
}
