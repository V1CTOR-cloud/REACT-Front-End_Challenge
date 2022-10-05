import React from 'react'
import { Text } from '../../stories/Text/Text';
export const SmallLabel = ({ backgroundColor, label, fontSize, fontWeight, color }) => {

    const style = {
        backgroundColor: backgroundColor,
    }

    return (
        <div className="info" style={style}>
            <Text label={label} fontSize={fontSize} fontWeight={fontWeight} color={color} />
        </div>
    )
}
