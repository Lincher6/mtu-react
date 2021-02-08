import React from "react";
import classes from './Button.module.scss';
import cn from 'classnames';

export const Button = (props) => {
    const {
        type = 'contained',
        color = 'primary',
        size = 'large',
        disabled = false,
        onCLick, children = 'Button', ...rest
    } = props

    return (
        <button
            className={cn(classes.button, classes[color], classes[type], classes[size])}
            disabled={disabled}
            onClick={onCLick}
            {...rest}
        >
            {children}
        </button>
    )
}