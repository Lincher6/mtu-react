import React from 'react';
import Functional from './Functional';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Functional',
    component: Functional,
    argTypes: {
        text: { name: 'Props text', control: { type: 'text' }, defaultValue: 'some text'},
        mount: { control: { type: 'boolean' }, defaultValue: true}
    }
}

const Template = ({ mount, ...args}) => {
    if (!mount) {
        return <></>;
    }
    return <Functional {...args}/>
}

export const AsClass = Template.bind({});