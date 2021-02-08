import React from 'react';
import { ErrorHandler } from './ErrorHandler';
import { Header } from '../Header/Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'ErrorHandler',
    component: ErrorHandler,
    argTypes: {
        error: { control: { type: 'boolean' } }
    }
}

const Template = args => {
    return (
        <ErrorHandler {...args}>
            <Header title={args.error ? {} : 'Title'}/>
        </ErrorHandler>
    )
}

export const HeaderError = Template.bind({});