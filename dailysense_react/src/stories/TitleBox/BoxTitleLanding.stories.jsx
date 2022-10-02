import React from 'react';
import { BoxTitleLanding } from './BoxTitleLanding';

export default {
    title: 'Box Title',
    component: BoxTitleLanding,
}

const Template = args => <BoxTitleLanding {...args}/>

export const TitleBox = Template.bind({});

TitleBox.args = {
    word1: 'Welcome',
    word2: 'To',
    word3: 'Dailysense',
}