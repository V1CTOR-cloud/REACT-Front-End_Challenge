import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

export const Text = ({ label, color, fontSize, fontWeight }) => {

  const style = {
    color: color,
    fontSize: fontSize + 'rem',
    fontWeight: fontWeight,
  }

  return (
    <p style={style}> {label} </p>
  )
}

Text.defaultProps = {
  color: 'black'
}

Text.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
}
