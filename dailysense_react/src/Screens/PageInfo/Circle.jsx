import React from 'react'
import '../PageInfo/PageInfo.css'

export const Circle = ({ CircleHeight, CircleWidth, borderColor, backgroundColor, logo, url }) => {

    const style = {
        height: CircleHeight + 'px',
        width: CircleWidth + 'px',
        backgroundColor: backgroundColor,
    }

    const styleBorder = {
        height: CircleHeight - 15 + 'px',
        width: CircleWidth - 15 + 'px',
        border: '1px solid' + borderColor,
    }


    return (
        <a href={url}>
            <div className="circle" style={style}>
                <div className="borderCircle" style={styleBorder}>

                    <img src={logo} alt="" />
                </div>
            </div>
        </a>
    )
}
