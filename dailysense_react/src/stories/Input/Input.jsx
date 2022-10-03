import React from 'react';
import './Input.css';
import { Text } from '../Text/Text';

export const Input = ({ type, label, placeholder, padding, borderColor, color, width, value }) => {

    const style = {
        padding: padding,
        color: color,
        width: width + 'rem',
        border: '1px solid '+ borderColor,
        boxShadow: "none",
    }

    return (
        <div className="box">
            <Text label={label} fontWeight={300} fontSize={0.8}  />
            <input type={type} placeholder={placeholder} style={style} width={width} value={value} />
        </div>
    )
}
