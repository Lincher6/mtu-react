import React from "react";
import classes from './Header.module.scss';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Header = (props) => {
    const {
        theme = 'light',
        title = 'My Title',
        authorized = 'false',
        children, ...rest
    } = props;

    return (
        <div className={cn(classes.header, classes[theme])} {...rest}>
            <div>
                <h1 className={classes.title}>
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