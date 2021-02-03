import React from "react";
import './Header.scss';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

export const Header = (props) => {
    const {
        theme = 'light',
        title = 'My Title',
        authorized = 'false',
        children, ...rest
    } = props;

    return (
        <div className={`header ${theme}`} {...rest}>
            <div>
                <h1>

                </h1>
                <h1 className={`title`}>
                    {title}
                </h1>
            </div>
            <Input theme={theme} placeholder={`search`}/>
            <Button
                type={`outlined`}
                color={theme === 'light' ? 'secondary' : 'primary'}
                size={`small`}
            >
                {authorized ? 'Logout' : 'Login'}
            </Button>
            {children}
        </div>
    )
}