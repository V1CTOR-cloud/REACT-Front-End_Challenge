import React from 'react'
import './Mask.css';
import { ContentCard } from '../ContentCard/ContentCard';
export const Mask = ({ opacity, type }) => {

    const style = {
        opacity: opacity,
    }

    return (
        <div className="mask" style={style}>
            <ContentCard CardHeight={90} CardWidth={70} borderRadius={20} backgroundColor='#FFF' type={type} />
        </div>
    )
}
