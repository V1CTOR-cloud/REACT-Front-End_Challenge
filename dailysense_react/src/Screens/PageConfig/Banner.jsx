import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../stories/Button/Button';
export const Banner = ({ name, email, password, avatar ,borderTopLeftRadius, borderTopRightRadius ,bannerHeight, bannerWidth, backgroundColor, imgBanner }) => {

    const navigate = useNavigate();

    function GoBack() {
        navigate('/main',{
            state: {
                name: name,
                email: email,
                password: password,
                avatar: avatar,
            }
        });
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
                        handleClick={GoBack}
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
                        handleClick={GoBack}
                    />
                </div>
            </div>
        )
    }
}
