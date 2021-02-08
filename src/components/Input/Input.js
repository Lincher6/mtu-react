import React from "react";
import classes from  './Input.module.scss';
import cn from 'classnames';

export const Input = (props) => {

    const {
        type = 'text',
        theme = 'light',
        variant = 'regular',
        placeholder = 'Some text',
        errorText, children, ...rest
    } = props;

    return (
        <div className={cn(classes.input, classes[theme])}>
            <input
                required
                type={type}
                id='input'
                {...rest}
                className={cn(classes[variant], errorText && classes.error)}
            />
            <label htmlFor="input">
                {placeholder}
            </label>
            <span className ={cn(classes.errorText, !errorText && classes.hide)}>
                {errorText}
            </span>
        </div>
    )
}