import React from 'react';
import { Scroll } from './Scroll';
const file = require('../../Assets/lotties/Scroll.json');

export default {
    title: 'Scroll',
    component: Scroll,
}

const Template = args => <Scroll {...args} />

export const LottieScroll = Template.bind({});

LottieScroll.args = {
    label: 'Scroll animation',
    animationData: file,
    AnimationHeight: 300,
    AnimationWidth: 300, 
    autoplay: true,
    loop: true,
}