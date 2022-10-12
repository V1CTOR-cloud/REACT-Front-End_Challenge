import React, { useEffect, useState } from 'react';
import './PageMainBody.css';
import { BlobMain } from '../../../stories/Blobs/BlobMainBody';
import { TableMain } from '../TableMain/TableMain';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const PageMainBody = ({ email, bodyHeight, bodyWidth, backgroundColor }) => {

  const arrObj = [];

  const client = new ApolloClient({
    uri: 'https://api-eu-west-2.hygraph.com/v2/cl8ndm5i20c2y01un1342bexj/master',
    cache: new InMemoryCache(),
  });

  function getDependentData() {
    const query = `
        query{
          worker(where: {email: "${email}"}) {
            dependents{
            ... on DependentPerson{
              id
              name
              email
              age
              allergies
              diseases
              contactPhone
              dependencyLevel
              avatar {
                url(transformation:{
                  image: {
                    resize: {
                      height: 500,
                      width: 500,
                      fit: clip
                    }
                  }
                })
              }
            }
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
        //console.log(res.data.worker.dependents);
        res.data.worker.dependents.map((item) => {    
          console.log(item);
          arrObj.push(item);
        })  
      }).catch((err) => {
        console.warn('Error getting data from server: ', err);
      });
  }

  useEffect(() => {
    getDependentData();
  }, [])

  const style = {
    height: bodyHeight + 'vh',
    width: bodyWidth + '%',
    backgroundColor: backgroundColor,
  }

  return (
    <div className="body" style={style}>
      <BlobMain type={1} color='#4464EB' />
      <BlobMain type={2} color='#EB44B7' />
      <BlobMain type={3} color='#EBCB44' />
      <TableMain
        data={arrObj}
        TableHeight={90}
        TableWidth={75}
        backgroundColor='white' />
    </div>
  )
}
