import React from 'react'
import '../ContentCard/ContentCard.css'
import { Text } from '../../../stories/Text/Text';
import { Button } from '../../../stories/Button/Button';
import { Input } from '../../../stories/Input/Input';
export const ColInfo = ({ backgroundColor, ColWidth, type }) => {

    const style = {
        backgroundColor: backgroundColor,
        width: ColWidth + '%',
    }

    if (type === 'SignUp') {
        return (
            <div className="ColInfo" style={style}>
                <div className="ColInfoHeader">
                    <Text label='Sign' color='black' fontWeight={800} fontSize={2.3} />
                    <Text label='Up' color='#EBCB44' fontWeight={800} fontSize={2.3} />
                </div>
                <div className="ColInfoBody">
                    <Input label='Name' borderColor='#EBCB44' padding='8px' color='grey' placeholder='Name' width={19} />
                    <Input label='Email Adress' borderColor='#EBCB44' padding='8px' color='grey' placeholder='Email Adress' width={19} />
                    <Input type='password' label='Password' borderColor='#EBCB44' padding='8px' color='grey' placeholder='Password' width={19} />
                </div>
                <div className="colInfoFooter">
                    <Button label='Sign Up' borderRadius={20} backgroundColor='#EBCB44' padding='10px 120px' fontSize={20} />
                </div>
            </div>
        );
    } else if (type === 'SignIn') {
        return (<div className="ColInfo" style={style}>
            <div className="ColInfoHeader">
                <Text label='Sign' color='black' fontWeight={800} fontSize={2.3} />
                <Text label='In' color='#4464EB' fontWeight={800} fontSize={2.3} />
            </div>
            <div className="ColInfoBody">
                <Input label='Email Adress' borderColor='#4464EB' padding='8px' color='grey' placeholder='Email Adress' width={19} />
                <Input type='password' label='Password' borderColor='#4464EB' padding='8px' color='grey' placeholder='Password' width={19} />
            </div>
            <div className="colInfoFooter">
                <Button label='Sign In' borderRadius={20} backgroundColor='#4464EB' padding='10px 120px' fontSize={20} />
            </div>
        </div>);
    }
}
