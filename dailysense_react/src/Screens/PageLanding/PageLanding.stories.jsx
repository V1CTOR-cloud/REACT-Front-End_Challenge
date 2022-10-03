import React from 'react';
import PageLanding from './PageLanding';

export default {
    title: 'Page Landing',
    component: PageLanding,
}

const Template = args => <PageLanding {...args} />

export const LandingPage = Template.bind({});

LandingPage.args = {
    label: 'Page Landing',
    LandingHeight: 20,
    LandingWidth: 100,
    backgroundColor: '#FFFFFF',
}


