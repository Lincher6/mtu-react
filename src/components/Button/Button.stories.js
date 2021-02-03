import React from 'react';
import { Button } from './Button';
import { Decorator } from '../Decorator/Deacorator';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Button',
    component: Button,
    decorators: [story => <Decorator>{ story() }</Decorator>],
    argTypes: {
        color: {
            control: { type: 'inline-radio', options: ['primary', 'secondary', 'error'] },
            defaultValue: 'primary'
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