import React from 'react';
import './PageMainBody.css';
import { BlobMain } from '../../../stories/Blobs/BlobMainBody';
import { TableMain } from '../TableMain/TableMain';
export const PageMainBody = ({ bodyHeight, bodyWidth, backgroundColor }) => {

    const style = {
        height: bodyHeight + 'vh',
        width: bodyWidth + '%',
        backgroundColor: backgroundColor,
    }

    return (
        <div className="body" style={style}>
            <BlobMain type={1} color='#4464EB' />
            <BlobMain type={2} color='#EB44B7' />
            <BlobMain type={3} color='#EBCB44' />
            <TableMain
                TableHeight={90}
                TableWidth={75}
                backgroundColor='lightgray' />
        </div>
    )
}
