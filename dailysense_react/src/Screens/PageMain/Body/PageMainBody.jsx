import React from 'react';
import './PageMainBody.css';
import { BlobMain } from '../../../stories/Blobs/BlobMainBody';
export const PageMainBody = ({bodyHeight, bodyWidth, backgroundColor}) => {

    const style = {
        height: bodyHeight + 'vh',
        width: bodyWidth + '%',
        backgroundColor: backgroundColor,
    }

  return (
    <div className="body" style={style}>
        <BlobMain type={1} color='#4464EB' />
    </div>
  )
}
