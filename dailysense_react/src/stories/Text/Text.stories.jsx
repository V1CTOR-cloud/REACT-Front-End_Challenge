import React from 'react';
import { Text } from './Text';

export default {
    title: 'Text',
    component: Text,
}

const Template = args => <Text {...args} />

export const GeneralText = Template.bind({});

GeneralText.args = {
    label: 'Welcome',
    color: '#00000',
    fontSize: 3,
    fontWeight: 900,
}