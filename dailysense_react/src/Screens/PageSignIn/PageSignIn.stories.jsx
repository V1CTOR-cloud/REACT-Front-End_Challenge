import React from 'react';
import {PageSignIn} from './PageSignIn';

export default {
    title: 'Page Sign In',
    component: PageSignIn,
}

const Template = args => <PageSignIn {...args} />

export const SignInPage = Template.bind({});

SignInPage.args = {
    label: 'Page SignIn',
    SignUpHeight: 100,
    SignUpWidth: 100,
    backgroundColor: '#FFFFFF',
}


