import React from 'react';
import { withPermission } from './withPermission';
import {Button} from '../Button/Button';
import {Header} from '../Header/Header';
import {Input} from '../Input/Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'withPermission',
    argTypes: {
        userPermissions: { control: { type: 'check', options: ['button', 'input', 'header'] }, defaultValue: []},
    }
}

const ButtonTemplate = ({ userPermissions, args }) => {
    const Component = withPermission(Button, 'button');
    return <Component user={{ permissions: userPermissions }} {...args}/>
}
export const ButtonWithPermission = ButtonTemplate.bind({});

const HeaderTemplate = ({ userPermissions, args }) => {
    const Component = withPermission(Header, 'header');
    return <Component user={{ permissions: userPermissions }} {...args}/>
}
export const HeaderWithPermission = HeaderTemplate.bind({});

const InputTemplate = ({ userPermissions, args }) => {
    const Component = withPermission(Input, 'input');
    return <Component user={{ permissions: userPermissions }} {...args}/>
}
export const InputWithPermission = InputTemplate.bind({});