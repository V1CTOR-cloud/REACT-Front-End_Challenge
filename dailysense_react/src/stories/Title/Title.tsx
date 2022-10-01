import React from 'react';
import PropTypes from 'prop-types'
import { Text } from '../Text/Text';
import './Title.css';

export const Title = ({ word1, word2, word3 }) => {
    return (
        <div className="text-box">
            <Text label={word1} color='black' fontSize={3} fontWeight={800} />
            <Text label={word2} color='black' fontSize={3} fontWeight={800} />
            <Text label={word3} color='#4464EB' fontSize={3} fontWeight={800} />
        </div>
    )
}

Title.propTypes = {
    word1: PropTypes.string,
    word2: PropTypes.string,
    word3: PropTypes.string,
}
