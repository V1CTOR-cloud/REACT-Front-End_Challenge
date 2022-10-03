import React from 'react';
import { Mask } from './Mask';

export default {
    title: 'Mask',
    component: Mask,
}

const Template = args => <Mask {...args} />

export const Mask_Color = Template.bind({});

Mask_Color.args = {
    label: 'Mask',
    opacity: 0.4,
}