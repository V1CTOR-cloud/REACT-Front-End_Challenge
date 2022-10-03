import React from 'react';
import {PageSignUp} from './PageSignUp';

export default {
    title: 'Page Sign Up',
    component: PageSignUp,
}

const Template = args => <PageSignUp {...args} />

export const SignUpPage = Template.bind({});

SignUpPage.args = {
    label: 'Page SignUp',
    SignUpHeight: 100,
    SignUpWidth: 100,
    backgroundColor: '#FFFFFF',
}


