import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export const Button = ({ label, buttonType, backgroundColor , padding, handleClick }) => {

  const style = {
    backgroundColor: backgroundColor,
    padding: padding,
    border: backgroundColor ,
  }


  return (
    <button onClick={handleClick} className={buttonType} style={style}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  buttonType: 'primary'
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['primary', 'secondary'])
}