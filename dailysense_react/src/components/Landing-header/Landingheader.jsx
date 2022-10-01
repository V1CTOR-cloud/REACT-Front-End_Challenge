import React from 'react';
import './landingHeader.css';
import { Blob } from './Blob';

const logo = require('../../Assets/LOGOS DAILYSENSE/BLUE PNG.png');
export const Landingheader = () => {
    return (
        <div className="headerContainer">
            <Blob />   
            <header>
                <img src={logo} className="logo" />
                <div className="contbtn">
                    
                </div>
            </header>
        </div>
    );
}