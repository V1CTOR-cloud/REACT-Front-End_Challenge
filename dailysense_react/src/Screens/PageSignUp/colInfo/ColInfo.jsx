import React, { useState } from 'react'
import '../ContentCard/ContentCard.css'
import { Text } from '../../../stories/Text/Text';
import { Button } from '../../../stories/Button/Button';
import { Input } from '../../../stories/Input/Input';
import { InputFile } from '../../../stories/Input/InputFile';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
export const ColInfo = ({ backgroundColor, ColWidth, type, logo }) => {


    const [selectedFile, setSelectedFile] = useState(logo);

    const [data, setData] = useState({
        id: "",
        email: "",

    });

    const style = {
        backgroundColor: backgroundColor,
        width: ColWidth + '%',
    }

    const styleColPhoto ={
        backgroundImage: 'url('+selectedFile+')',
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
                    res.data.dependentPeople.forEach((item, index) => {
                        //console.log(index + ': ' + item.name);
                    });
                } else {
                    console.log('Error on the client side (query)');
                }
            }).catch((err) => {
                console.warn('Error getting data from server: ', err);
            });
    }

    

    if (type === 'SignUp') {

        getDataAPI(`
        query MyQuery {
            dependentPeople {
              avatar {
                id
              }
              id
              name
              age
              email    
              allergies
            }
          }
        `,);

        return (
            <>
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
                <div className="colPhoto" style={styleColPhoto}>
                    <InputFile  />
                </div>
            </>
        );
    } else if (type === 'SignIn') {
        return (
            <div className="ColInfo" style={style}>
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
            </div>
        );
    }
}



