import React from 'react';
import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const primary = Template.bind({});

primary.args = {
    label: 'Sign In',
    buttonType: 'primary',
    backgroundColor: "",
    padding: ""
}