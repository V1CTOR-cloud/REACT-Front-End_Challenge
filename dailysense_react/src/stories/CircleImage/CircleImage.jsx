import React from 'react';
export const CircleImage = ({transform, position, top, bottom, left, right, CircleHeight, CircleWidth, URL }) => {

    const style = {
        height: CircleHeight + 'px',
        width: CircleWidth + 'px',
        backgroundImage: `url("${URL}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: position,
        top: top + '%',
        bottom: bottom + '%',
        left: left + '%',
        right: right + '%',
        transform: transform
    }

    return (
        <div className="imageWrapping" style={style}>

        </div>
    )
}
