import React from 'react';
import '../PageInfo.css';
import { Text } from '../../../stories/Text/Text';

export const PageInfoContent = ({ type, backgroundColor, photo, title, description }) => {

    const style = {
        backgroundColor: backgroundColor,
    }

    if (type === 'header') {
        return (
            <div className="PageInfoContent" style={style}>
                <div className="textwrapper">
                    <Text label={title} fontSize={2.5} fontWeight={900} color='black' />
                    <div className='separator' />
                    <Text label={description} fontSize={1.2} fontWeight={200} color='black' />
                </div>
                <div className="photowrapper">
                    <img src={photo} alt="" />
                </div>
            </div>
        )
    } else if (type === 'footer') {
        return (
            <div className="PageInfoContent" style={style}>
                <div className="photowrapper">
                    <img src={photo} alt="" />
                </div>
                <div className="textwrapper">
                    <Text label={title} fontSize={2.5} fontWeight={900} color='black' />
                    <div className='separator' />
                    <Text label={description} fontSize={1.2} fontWeight={200} color='black' />
                </div>
            </div>
        )
    }
}
