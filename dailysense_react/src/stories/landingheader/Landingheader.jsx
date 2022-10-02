import React from 'react';
import './landingHeader.css';
import { Blob } from './Blob';
import {Button} from '../Button/Button';

export const Landingheader = ({logo, Headerheight, Headerwidth, widthbtn}) => {

    const style = {
        height: Headerheight + '%',
        width: Headerwidth + '%',
    }

    const stylebtn = {
        width: widthbtn + '%',
    }

    return (
        <div className="headerContainer" style={style}>
            <Blob color='#4464EB' />   
            <header>
                <img src={logo} className="logo" alt='' />
                <div className="contbtn" style={stylebtn}>
                    <Button label='Sign In' buttonType='primary' padding='10px 50px' />
                    <Button label='Sign Up' buttonType='secondary' />
                </div>
            </header>
        </div>
    );
}