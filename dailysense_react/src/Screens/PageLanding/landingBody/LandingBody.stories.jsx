import React from 'react';
import { LandingBody } from './LandingBody';

export default {
    title: 'Landing body',
    component: LandingBody,
}

const Template = args => <LandingBody {...args} />

export const BodyLanding = Template.bind({});

BodyLanding.args = {
    label: 'Landing Body',
    BodyHeight: 80,
    BodyWidth: 100,
}


