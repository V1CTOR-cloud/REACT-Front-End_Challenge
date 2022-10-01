import React from 'react';
import { Blob } from './Blob';

export default {
    title: 'Blob',
    component: Blob,
}

const Template = args => <Blob {...args} />

export const BlobHeader = Template.bind({});

BlobHeader.args = {
    label: 'Header Blob',
    color: '#4464EB'
}