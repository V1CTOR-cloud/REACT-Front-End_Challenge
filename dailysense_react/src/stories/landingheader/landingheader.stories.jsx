import React from 'react';
import { Landingheader } from './Landingheader';
const logo = require('../../Assets/LOGOS DAILYSENSE/BLUE PNG.png');

export default {
    title: 'Landing header',
    component: Landingheader,
}

const Template = args => <Landingheader {...args} />

export const HeaderLanding = Template.bind({});

HeaderLanding.args = {
    label: 'Landing',
    logo: logo,
    Headerheight: 20,
    Headerwidth: 100,
    widthbtn: 20,
}


