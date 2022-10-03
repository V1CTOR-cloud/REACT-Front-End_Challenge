import React from 'react'
import './Mask.css'
export const Mask = ({ opacity }) => {

    const style = {
        opacity: opacity,
    }

    return (
        <div className="mask" style={style}></div>
    )
}
