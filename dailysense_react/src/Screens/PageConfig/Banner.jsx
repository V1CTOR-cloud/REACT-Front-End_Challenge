import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../stories/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
export const Banner = ({ name, email, password, avatar, borderTopLeftRadius, borderTopRightRadius, bannerHeight, bannerWidth, backgroundColor, imgBanner }) => {

    const navigate = useNavigate();

    function GoBack() {
        navigate('/main', {
            state: {
                name: name,
                email: email,
                password: password,
                avatar: avatar,
            }
        });
    }

    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        console.error('Invalid email address: ' + email);
        return (false)
    }

    function validateData() {
        if (name !== '') {
            if (email !== '' && ValidateEmail(email)) {
                if (password !== '') {
                    GoBack();
                } else {
                    toast.error('error: password is required');
                }
            } else {
                toast.error('error: email is required');
            }
        } else {
            toast.error('error: name is required');
        }
    }

    const styleBckColor = {
        height: bannerHeight + '%',
        width: bannerWidth + '%',
        backgroundColor: backgroundColor,
        borderTopRightRadius: borderTopRightRadius + 'px',
        borderTopLeftRadius: borderTopLeftRadius + 'px',
    }
    const styleImgBanner = {
        height: bannerHeight + '%',
        width: bannerWidth + '%',
        backgroundImage: `url("${imgBanner}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }


    if (backgroundColor !== undefined) {
        return (
            <div className="banner" style={styleBckColor}>
                <div className="wrapper" style={{ float: 'right', margin: '10px' }}>
                    <Button
                        btnHeight={10}
                        btnwidth={10}
                        padding='13px'
                        label='x'
                        backgroundColor='#FC5555'
                        borderRadius={100}
                        handleClick={validateData}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className="banner" style={styleImgBanner}>
                <div className="wrapper" style={{ float: 'right', margin: '10px' }}>
                    <Button
                        btnHeight={10}
                        btnwidth={10}
                        padding='13px'
                        label='x'
                        backgroundColor='#FC5555'
                        borderRadius={100}
                        handleClick={validateData}
                    />
                </div>
                <Toaster />
            </div>
        )
    }
}
