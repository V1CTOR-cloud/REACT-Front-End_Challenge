import React, { useState } from 'react'
import '../ContentCard/ContentCard.css'
import { Text } from '../../../stories/Text/Text';
import { Button } from '../../../stories/Button/Button';
import Input from '../../../stories/Input/Input';
import InputFile from '../../../stories/Input/InputFile';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export const ColInfo = ({ backgroundColor, ColWidth, type, logo }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(logo);

    const style = {
        backgroundColor: backgroundColor,
        width: ColWidth + '%',
    }

    const styleColPhoto = {
        backgroundImage: 'url(' + selectedFile + ')',
    }

    const client = new ApolloClient({
        uri: 'https://api-eu-west-2.hygraph.com/v2/cl8ndm5i20c2y01un1342bexj/master',
        cache: new InMemoryCache(),
    });

    function getDataAPI(GQL) {
        client
            .query({
                query: gql`${GQL}`
            })
            .then((res) => {
                if (res.data) {
                    res.data.workers.forEach((item, index) => {
                        //console.log(index + ': ' + item.id + '\n: ' + item.name + '\n: ' + item.email + '\n: ' + item.password);
                    });
                } else {
                    console.log('Error on the client side (query)');
                }
            }).catch((err) => {
                console.warn('Error getting data from server: ', err);
            });
    }

    function ShowInfo() {
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Password: ' + password);
        console.log('Avatar: ' + selectedFile);
    }

    function ConvertBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (file) => {
            //console.log(reader.result);
            setSelectedFile(reader.result); // Display the selected file in css with BASE64
        };
        reader.onerror = (e) => {
            console.log('Error' + e);
        }
    }

    if (type === 'SignUp') {

        getDataAPI(`
        query MyQuery {
            workers{
              id
              name
              email
              password
            }
          }
        `,);

        return (
            <>
                <div className="ColInfo" style={style}>
                    <div className="ColInfoHeader">
                        <Text label='Sign'
                            color='black'
                            fontWeight={800}
                            fontSize={2.3} />
                        <Text label='Up'
                            color='#EBCB44'
                            fontWeight={800}
                            fontSize={2.3} />
                    </div>
                    <div className="ColInfoBody">
                        <Input
                            label='Name'
                            onChange={(value) => setName(value)}
                            borderColor='#EBCB44'
                            padding='8px'
                            color='grey'
                            placeholder='Name'
                            width={19} />
                        <Input
                            type='email'
                            label='Email Adress'
                            onChange={(value) => setEmail(value)}
                            borderColor='#EBCB44'
                            padding='8px'
                            color='grey'
                            placeholder='Email Adress'
                            width={19} />
                        <Input
                            type='password'
                            onChange={(value) => setPassword(value)}
                            label='Password'
                            borderColor='#EBCB44'
                            padding='8px'
                            color='grey'
                            placeholder='Password'
                            width={19} />
                    </div>
                    <div className="colInfoFooter">
                        <Button
                            label='Sign Up'
                            borderRadius={20}
                            backgroundColor='#EBCB44'
                            padding='10px 120px'
                            fontSize={20}
                            handleClick={ShowInfo}
                        />
                    </div>
                </div>
                <div className="colPhoto" style={styleColPhoto}>
                    <InputFile onChange={(file) => ConvertBase64(file)} />
                </div>
            </>
        );
    } else if (type === 'SignIn') {
        return (
            <div className="ColInfo" style={style}>
                <div className="ColInfoHeader">
                    <Text
                        label='Sign'
                        color='black'
                        fontWeight={800}
                        fontSize={2.3} />
                    <Text
                        label='In'
                        color='#4464EB'
                        fontWeight={800}
                        fontSize={2.3} />
                </div>
                <div className="ColInfoBody">
                    <Input
                        label='Email Adress'
                        borderColor='#4464EB'
                        padding='8px'
                        color='grey'
                        placeholder='Email Adress'
                        width={19} />
                    <Input
                        type='password'
                        label='Password'
                        borderColor='#4464EB'
                        padding='8px'
                        color='grey'
                        placeholder='Password'
                        width={19} />
                </div>
                <div className="colInfoFooter">
                    <Button
                        label='Sign In'
                        borderRadius={20}
                        backgroundColor='#4464EB'
                        padding='10px 120px'
                        fontSize={20} />
                </div>
            </div>
        );
    }
}



