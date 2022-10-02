import React from 'react';
import PropTypes from 'prop-types'
import { Text } from '../Text/Text';
import '../TitleBox/BoxTitleLanding.css';

export const BoxTitleLanding = ({ word1, word2, word3, BoxHeight, BoxWidth }) => {

    return (
        <div className="text-box">
            <Text label={word1} color='black' fontSize={3} fontWeight={800} />
            <Text label={word2} color='black' fontSize={3} fontWeight={800} className='special' />
            <Text label={word3} color='#4464EB' fontSize={3} fontWeight={800} />
        </div>
    );
}

BoxTitleLanding.PropTypes = {
    word1: PropTypes.string,
    word2: PropTypes.string,
    word3: PropTypes.string,
}