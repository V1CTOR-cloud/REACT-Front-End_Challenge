import React from 'react';
import { ContentCard } from './ContentCard';

export default {
    title: 'ContentCard',
    component: ContentCard,
}

const Template = args => <ContentCard {...args} />

export const Card_Content = Template.bind({});

Card_Content.args = {
    label: 'Content_Card',
    CardHeight: 80,
    CardWidth: 80,
    backgroundColor: '#FFF',
    borderRadius: 20,
}