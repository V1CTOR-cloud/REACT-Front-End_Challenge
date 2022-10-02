import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../stories/Text/Text';
import './BoxTitleLanding.css';

export const BoxTitleLanding = ({ word1, word2, word3, Slogan, BoxHeight, BoxWidth, cordY, cordX }) => {

    const style = {
        height: BoxHeight + 'vh',
        width: BoxWidth + '%',
        top: cordY + 'rem',
        left: cordX + 'rem',
    }

    return (
        <div className="text-box" style={style}>
            <Text label={word1} color='black' fontSize={4} fontWeight={800} />
            <Text label={word2} color='black' fontSize={4} fontWeight={800} className='special' />
            <Text label={word3} color='#4464EB' fontSize={4} fontWeight={800} />
            <Text label={Slogan} color='black' fontSize={2} fontWeight={700} />
        </div>
    );
}

/* BoxTitleLanding.PropTypes = {
    word1: PropTypes.string,
    word2: PropTypes.string,
    word3: PropTypes.string,
    BoxHeight: PropTypes.number,
    BoxWidth: PropTypes.number,
    cordY: PropTypes.number,
    cordX: PropTypes.number,
} */