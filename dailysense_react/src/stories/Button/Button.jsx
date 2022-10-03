import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export const Button = ({borderRadius ,label, buttonType, backgroundColor , padding, handleClick, fontSize }) => {

  const style = {
    backgroundColor: backgroundColor,
    padding: padding,
    border: backgroundColor ,
    fontSize: fontSize + 'px',
    borderRadius: borderRadius + 'px',
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
