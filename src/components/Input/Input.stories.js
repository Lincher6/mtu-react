import React from 'react';
import { Input } from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Input',
    component: Input,
    argTypes: {
        type: {
            control: { type: 'inline-radio', options: ['text', 'password', 'email'] },
            defaultValue: 'text'
        },
        theme: {
            control: { type: 'inline-radio', options: ['light', 'dark'] },
            defaultValue: 'light'
        },
        variant: {
            control: { type: 'inline-radio', options: ['regular', 'outlined'] },
            defaultValue: 'regular'
        },
        placeholder: { control: { type: 'text' }, defaultValue: 'Write some text' },
        errorText: { control: { type: 'text' } },
        onChange: { table: { disable: true } }
    }
}

const Template = args => <Input {...args}/>

export const Regular = Template.bind({});
export const Log = Template.bind({});
Log.args = {
    onChange: (e) => console.log(e.target.value)
}