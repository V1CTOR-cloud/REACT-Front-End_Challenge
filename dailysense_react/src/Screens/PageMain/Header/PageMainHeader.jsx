import React from 'react'
import { Text } from '../../../stories/Text/Text';
import { Button } from '../../../stories/Button/Button';
import './PageMainHeader.css';
import { useNavigate } from 'react-router-dom';
export const PageMainHeader = ({ backgroundColor, avatar, name, email, password, headerHeight, headerWidth }) => {

    const navigate = useNavigate();

    const style = {
        height: headerHeight + 'vh',
        width: headerWidth + '%',
        backgroundColor: backgroundColor,
    }

    const stylePhoto = {
        backgroundImage: `url(${avatar})`,
    }

    return (
        <header style={style}>
            <div className="user">
                <div className="imgWrapper">
                    <div className="image" style={stylePhoto} onClick={() => navigate('/config', {
                        state: {
                            avatar: avatar,
                            name: name,
                            email: password,
                            password: password,
                        }
                    })} ></div>
                </div>
                <div className="textBox">
                    <Text label='Welcome ' fontWeight={700} fontSize={1.4} />
                    <Text label={name} color='#4464EB' fontWeight={700} fontSize={1.4} />
                </div>
            </div>
            <div className="logOut">
                <Button handleClick={() => navigate('/')} label='Log Out' backgroundColor='#FC5555' />
            </div>
        </header>
    )
}
