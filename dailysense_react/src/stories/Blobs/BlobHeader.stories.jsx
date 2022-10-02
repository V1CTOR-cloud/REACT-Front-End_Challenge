import React from 'react';
import { BlobHeader } from './BlobHeader';

export default {
    title: 'Blob',
    component: BlobHeader,
}

const Template = args => <BlobHeader {...args} />

export const Blob_Header = Template.bind({});

Blob_Header.args = {
    label: 'Header Blob',
    color: '#4464EB'
}