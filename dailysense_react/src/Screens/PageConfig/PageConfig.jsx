import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Banner } from './Banner';
import { Button } from '../../stories/Button/Button';
import { Text } from '../../stories/Text/Text';
import Input from '../../stories/Input/Input';
import { CircleImage } from '../../stories/CircleImage/CircleImage';
import './PageConfig.css'

export const PageConfig = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState(location.state.password);

  function goMain() {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(location.state.avatarURL);
    if (validateData()) {
      navigate('/main', {
        state: {
          name: name,
          email: email,
          password: password,
          avatar: location.state.avatar
        }
      });
    }
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
         console.log('Mutation Here & NEXT IS NAVIGATION');
        } else {
          console.log('ERROR: password is required');
        }
      } else {
        console.log('ERROR: email is required');       
      }
    } else {
      console.log('ERROR: name is required');
    }
  }

  return (
    <div className="configContainer">
      <div className="ConfigCard">
        <Banner name={name} email={email} password={password} avatar={location.state.avatar} borderTopLeftRadius={10} borderTopRightRadius={10} bannerHeight={40} bannerWidth={100} backgroundColor='#4464EB' />
        <CircleImage position='absolute' transform='translate(-50%, -50%)' top={40} left={30} URL={location.state.avatar} CircleHeight={150} CircleWidth={150} />
        <div className="info" style={{
          height: '60%',
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <div className="inputWrapper">
            <div className="inputBox">

              <Input
                label='Name'
                onChange={(value) => setName(value)}
                borderColor='#4464EB'
                padding='5px'
                color='grey'
                placeholder={name}
                width={19} />

              <Input
                type='email'
                label='Email'
                onChange={(value) => setEmail(value)}
                borderColor='#4464EB'
                padding='5px'
                color='grey'
                placeholder={email}
                width={19} />

              <Input
                type='password'
                label='Password'
                onChange={(value) => setPassword(value)}
                borderColor='#4464EB'
                padding='5px'
                color='grey'
                placeholder={password}
                width={19} />
            </div>
          </div>
          <div className="btnWrapper">
            <div className="btnContainer" style={{ float: 'right', marginRight: '40px' }}>
              <Button
                label='Save'
                padding='10px 60px'
                backgroundColor='#29CC6A'
                handleClick={validateData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
