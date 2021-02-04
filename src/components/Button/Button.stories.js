import React from 'react';
import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        color: {
            control: { type: 'inline-radio', options: ['primary', 'secondary', 'error'] },
            defaultValue: 'primary'
        },
        size: {
            control: { type: 'inline-radio', options: ['large', 'small'] },
            defaultValue: 'large'
        },
        file: {
            control: { type: 'files' },
        },
        type: { table: { disable: true } },
        onClick: { table: { disable: true } },
        disabled: { control: { type: 'boolean' } },
        children: { name: 'text' }
    }
}

const Template = args => <Button {...args}/>

export const Contained = Template.bind({});
Contained.args = {
    type: 'contained',
    children: 'Contained',
}

export const Outlined = Template.bind({});
Outlined.args = {
    type: 'outlined',
    children: 'Outlined',
}

export const Log = Template.bind({});
Log.args = {
    onClick: (e) => console.log(e.target.innerText),
    children: 'Some text',
}