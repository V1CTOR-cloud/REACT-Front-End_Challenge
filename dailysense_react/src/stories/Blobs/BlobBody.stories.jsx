import React from 'react';
import { BlobBody } from './BlobBody';

export default {
    title: 'Blob',
    component: BlobBody,
}

const Template = args => <BlobBody {...args} />

export const Blob_Body = Template.bind({});

Blob_Body.args = {
    label: 'Blob',
    color: '#EBCB44'
}