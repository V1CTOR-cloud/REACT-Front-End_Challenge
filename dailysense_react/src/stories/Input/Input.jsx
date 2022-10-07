import React, { useState } from 'react';
import './Input.css';
import { Text } from '../Text/Text';

const Input = (props, { type, label, placeholder, padding, borderColor, color, width, value, onChange }) => {
    const style = {
        padding: props.padding,
        color: props.color,
        width: props.width + 'rem',
        border: '1px solid ' + props.borderColor,
        boxShadow: "none",
    }

    return (
        <div className="box">
            <Text
                label={props.label}
                fontWeight={300}
                fontSize={0.8} />
            <input
                type={props.type}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder={props.placeholder}
                style={style}
                width={props.width}
                value={props.value} />
        </div>
    )
}

export default Input;