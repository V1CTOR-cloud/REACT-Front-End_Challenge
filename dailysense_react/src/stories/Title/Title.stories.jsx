import React from 'react';
import { Title } from './Title';

export default {
    title: 'Title',
    component : Title,
}

const Template = args => <Title {...args} />

export const TitleBox = Template.bind({});

TitleBox.args = {
    word1:'Welcome',
    word2:'To',
    word3:'Dailysense',
}