import React from 'react'
import '../ContentCard/ContentCard.css';
export const ColPhoto = ({logo, type}) => {

    const style = {
        backgroundImage: 'url('+logo+')',
    }

  return (
    <div className="colPhoto" style={style}>
        
    </div>
  )
}
