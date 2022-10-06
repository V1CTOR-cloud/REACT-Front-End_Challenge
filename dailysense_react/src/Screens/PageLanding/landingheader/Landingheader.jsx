import React from 'react';
import './landingHeader.css';
import { BlobHeader } from '../../../stories/Blobs/BlobHeader';
import { Button } from '../../../stories/Button/Button';
import { Link } from 'react-router-dom';

export const Landingheader = ({ logo, Headerheight, Headerwidth, widthbtn }) => {

    const style = {
        height: Headerheight + '%',
        width: Headerwidth + '%',
    }

    const stylebtn = {
        width: widthbtn + '%',
    }

    return (
        <div className="headerContainer" style={style}>
            <BlobHeader color='#4464EB' />
            <header>
                <img src={logo} className="logo" alt='' />
                <div className="contbtn" style={stylebtn}>
                    <Link to='login'> <Button label='Sign In' buttonType='primary' padding='10px 50px' />
                    </Link>
                    <Link to='signup'>
                        <Button label='Sign Up' buttonType='secondary' />
                    </Link>
                </div>
            </header>
        </div>
    );
}