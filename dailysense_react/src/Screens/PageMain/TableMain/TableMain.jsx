import React, { useEffect, useState } from 'react';
import './TableMain.css';
export const TableMain = ({ data ,backgroundColor, TableHeight, TableWidth, BorderRadius }) => {
    //console.log(data);

    const tableObj = data.map((obj) => {
        console.log(obj);
        
    });
    
    useEffect(() => {
       
    }, []);

    const style = {
        height: TableHeight + '%',
        width: TableWidth + '%',
        backgroundColor: backgroundColor,
        BorderRadius: BorderRadius + 'px',

    }

    return (
        <div className="TableMain" style={style}>
           {tableObj}
        </div>
    )
}
