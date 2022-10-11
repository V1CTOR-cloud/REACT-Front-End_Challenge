import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageSignIn } from './Screens/PageSignIn/PageSignIn';
import { PageSignUp } from './Screens/PageSignUp/PageSignUp';
import { PageMain } from './Screens/PageMain/PageMain';
import {PageConfig } from './Screens/PageConfig/PageConfig';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cl8ndm5i20c2y01un1342bexj/master",
  cache: new InMemoryCache()
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/'>
          <Route index element={<App />} />
          <Route path="login" element={<PageSignIn SignInHeight={100} SignInWidth={100} backgroundColor='white' />} />
          <Route path="signup" element={<PageSignUp SignUpHeight={100} SignUpWidth={100} backgroundColor='white' />} />
          <Route path="main" element={<PageMain />} />
          <Route path="config" element={<PageConfig />} />
          <Route path="*" element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
);

