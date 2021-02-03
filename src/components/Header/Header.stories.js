import React from 'react';
import { Header } from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Header',
    component: Header,
    argTypes: {
        theme: { control: { type: 'inline-radio', options: ['light', 'dark'] } },
        authorized: { control: { type: 'boolean' }, defaultValue: true },
        title: { control: { type: 'text'} }
    }
}

const Template = args => <Header {...args}/>

export const Regular = Template.bind({});