import React from 'react'
import '../ContentCard/ContentCard.css';
export const ColPhoto = ({logo}) => {

    const style = {
        backgroundImage: 'url('+logo+')',
    }

  return (
    <div className="colPhoto" style={style}>
        
    </div>
  )
}
