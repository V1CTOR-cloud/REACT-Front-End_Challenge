import React from 'react';
import './TableMain.css';
export const TableMain = ({ backgroundColor, TableHeight, TableWidth, BorderRadius }) => {

    const style = {
        height: TableHeight + '%',
        width: TableWidth + '%',
        backgroundColor: backgroundColor,
        BorderRadius: BorderRadius + 'px',

    }

    return (
        <div className="TableMain" style={style}>
            <table>

            </table>
        </div>
    )
}
