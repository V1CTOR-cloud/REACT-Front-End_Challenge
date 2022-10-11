import React, { useState } from 'react'
import '../ContentCard/ContentCard.css'
import { Text } from '../../../stories/Text/Text';
import { Button } from '../../../stories/Button/Button';
import Input from '../../../stories/Input/Input';
import InputFile from '../../../stories/Input/InputFile';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Mutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
export const ColInfo = ({ backgroundColor, ColWidth, type, logo }) => {

    const navigate = useNavigate();


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

    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        toast.error('Invalid email address: ' + email);
        return (false)
    }

    const emptyValidation = () => {
        if (name !== '') {
            if (email !== '' && ValidateEmail(email)) {
                if (password !== '') {
                    if (selectedFile !== null) {
                        SignUpCheck()
                    } else {
                        toast.error('ERROR: Avatar photo is required', {
                            position: 'bottom-right'
                        });
                    }
                } else {
                    toast.error('ERROR: password is required', {
                        position: 'bottom-right'
                    });
                }
            } else {
                toast.error('ERROR: email is required', {
                    position: 'bottom-right'
                });
            }
        } else {
            toast.error('ERROR: name is required', {
                position: 'bottom-right'
            });
        }
    }

    function createWorker() {
        const mutation = `
        mutation {
            createWorker(
              data: {name: "${name} ", password: "${password}", email: "${email}"}
            ) {
              name
              email
              password
            }
          }
        `;

        const MyMutation = gql(mutation);

        client
            .mutate({
                mutation: MyMutation,
                variables: {
                    name: name,
                    email: email,
                    password: password,
                },
            })

    }

    const SignUpCheck = () => {

        const query = `query {
            worker (where: {
              email: "${email}"
            }) {
              name
              email
            }
          }
        `;

        const Myquery = gql(query);
        client
            .query({
                query: Myquery
            })
            .then((res) => {
                //console.log(res.data.worker);
                if (res.data.worker === null) {
                    createWorker();
                    toast.success('Welcome to DailySense Folks', {
                        position: 'bottom-right',
                        icon: '✨'
                    });
                } else {
                    toast.error('This account is already in use', {
                        position: 'bottom-right'
                    });
                }
            }).catch((err) => {
                toast.error('Error getting data from server: ' + err, {
                    position: 'bottom-right'
                });
            });
    }

    const SignInValidation = () => {
        if (email !== '' && ValidateEmail(email)) {
            if (password !== '') {
                if (selectedFile !== null) {
                    SignInCheck()
                } else {
                    toast.error('ERROR: Avatar photo is required', {
                        position: 'bottom-right'
                    });
                }
            } else {
                toast.error('ERROR: password is required', {
                    position: 'bottom-right'
                });
            }
        } else {
            toast.error('ERROR: email is required', {
                position: 'bottom-right'
            });
        }
    }

    const SignInCheck = () => {
        const query = `query {
            worker (where: {
              email: "${email}"
            }) {
              name
              email
              password
              avatar {
                url(transformation:{
                    image: {
                      resize: {
                        height: 100,
                        width: 100,
                        fit: scale
                      }
                    }
                })
              }
            }
          }
        `;

        const Myquery = gql(query);
        client
            .query({
                query: Myquery
            })
            .then((res) => {
                if (res.data.worker !== null) {
                    if (res.data.worker.email !== '' && res.data.worker.password === password) {
                        //console.log(res.data.worker);
                        navigate('/main', {
                            state: {
                                name: res.data.worker.name,
                                email: email,
                                password: password,
                                avatar: res.data.worker.avatar.url
                            }
                        });
                    }
                } else {
                    toast.error('This account doesnt exists', {
                        position: 'bottom-right'
                    });
                }
            }).catch((err) => {
                toast.error('Error getting data from server: ' + err, {
                    position: 'bottom-right'
                });
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
            setSelectedFile(reader.result); // Display the selected file in css with BASE64
            toast.success('Uploaded file successfully', {
                position: 'bottom-right'
            });
        };
        reader.onerror = (e) => {
            toast.error('Error' + e, {
                position: 'bottom-right'
            });
        }
    }

    function GoBack() {
        navigate('/');
    }

    if (type === 'SignUp') {
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
                        <Button // Validation Button
                            label='Sign Up'
                            borderRadius={20}
                            backgroundColor='#EBCB44'
                            padding='10px 120px'
                            fontSize={20}
                            handleClick={emptyValidation}
                        />
                    </div>
                </div>
                <div className="colPhoto" style={styleColPhoto}>
                    <Button
                        btnHeight={10}
                        btnwidth={10}
                        padding='13px'
                        label='x'
                        backgroundColor='#FC5555'
                        borderRadius={100}
                        handleClick={GoBack}
                    />
                    <InputFile onChange={(file) => ConvertBase64(file)} />
                </div>
                <Toaster />
            </>
        );
    } else if (type === 'SignIn') {
        return (
            <>
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
                            onChange={(value) => setEmail(value)}
                            label='Email Adress'
                            borderColor='#4464EB'
                            padding='8px'
                            color='grey'
                            placeholder='Email Adress'
                            width={19} />
                        <Input
                            onChange={(value) => setPassword(value)}
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
                            fontSize={20}
                            handleClick={SignInValidation}
                        />
                    </div>
                </div>
                <div className="colPhoto" style={styleColPhoto}>
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
                <Toaster />
            </>
        );
    }
}



